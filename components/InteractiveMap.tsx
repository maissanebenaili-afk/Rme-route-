'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { useState, useEffect } from 'react';
import { Fuel, Ship, Plane, Navigation } from 'lucide-react';

// Fix default icon for Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Key cities on the Europe-Morocco route
const cities = [
  {
    name: 'Paris',
    coords: [48.8566, 2.3522] as [number, number],
    country: 'France',
    type: 'origin',
  },
  { name: 'Lyon', coords: [45.764, 4.8357] as [number, number], country: 'France', type: 'stop' },
  {
    name: 'Marseille',
    coords: [43.2965, 5.3698] as [number, number],
    country: 'France',
    type: 'ferry',
  },
  {
    name: 'Barcelone',
    coords: [41.3851, 2.1734] as [number, number],
    country: 'Espagne',
    type: 'stop',
  },
  {
    name: 'Valence',
    coords: [39.4699, -0.3763] as [number, number],
    country: 'Espagne',
    type: 'stop',
  },
  {
    name: 'Almería',
    coords: [36.834, -2.4637] as [number, number],
    country: 'Espagne',
    type: 'ferry',
  },
  {
    name: 'Malaga',
    coords: [36.7213, -4.4214] as [number, number],
    country: 'Espagne',
    type: 'stop',
  },
  {
    name: 'Algésiras',
    coords: [36.1416, -5.454] as [number, number],
    country: 'Espagne',
    type: 'ferry',
  },
  {
    name: 'Tarifa',
    coords: [36.0143, -5.6043] as [number, number],
    country: 'Espagne',
    type: 'ferry',
  },
  {
    name: 'Tanger',
    coords: [35.7595, 5.834] as [number, number],
    country: 'Maroc',
    type: 'destination',
  },
  { name: 'Fès', coords: [34.0331, -5.0003] as [number, number], country: 'Maroc', type: 'stop' },
  {
    name: 'Meknès',
    coords: [33.8935, -5.5473] as [number, number],
    country: 'Maroc',
    type: 'stop',
  },
  { name: 'Rabat', coords: [34.0209, -6.8416] as [number, number], country: 'Maroc', type: 'stop' },
  {
    name: 'Casablanca',
    coords: [33.5731, -7.5898] as [number, number],
    country: 'Maroc',
    type: 'stop',
  },
  {
    name: 'Marrakech',
    coords: [31.6295, -7.9811] as [number, number],
    country: 'Maroc',
    type: 'stop',
  },
];

// Main route: Paris → Marseille → Algésiras → Tanger → Marrakech
const mainRoute: [number, number][] = [
  [48.8566, 2.3522],
  [45.764, 4.8357],
  [43.2965, 5.3698],
  [41.3851, 2.1734],
  [39.4699, -0.3763],
  [36.7213, -4.4214],
  [36.1416, -5.454],
  [35.7595, 5.834],
  [33.5731, -7.5898],
  [31.6295, -7.9811],
];

const ferryRoute: [number, number][] = [
  [36.1416, -5.454],
  [35.7595, 5.834],
];

function getIcon(type: string) {
  const colors: Record<string, string> = {
    origin: '#0d6255',
    destination: '#b45b34',
    ferry: '#2563eb',
    stop: '#64748b',
  };
  const color = colors[type] || '#64748b';
  return L.divIcon({
    html: `<div style="background:${color};width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
    className: '',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
}

export default function InteractiveMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold">🗺️ Carte du trajet Europe ↔ Maroc</h2>
        <div className="mt-4 flex h-64 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
          Chargement de la carte...
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold">🗺️ Carte du trajet Europe ↔ Maroc</h2>
        <div className="flex gap-2 text-xs">
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-600" /> Départ
          </span>
          <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" /> Ferry
          </span>
          <span className="flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-orange-700">
            <span className="h-2 w-2 rounded-full bg-orange-600" /> Arrivée
          </span>
        </div>
      </div>

      <div className="mt-4 h-80 overflow-hidden rounded-xl">
        <MapContainer
          center={[42.0, 0.0]}
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* Main road route */}
          <Polyline
            positions={mainRoute}
            color="#0d6255"
            weight={3}
            opacity={0.7}
            dashArray="10, 8"
          />

          {/* Ferry route */}
          <Polyline
            positions={ferryRoute}
            color="#2563eb"
            weight={2}
            opacity={0.6}
            dashArray="5, 10"
          />

          {/* City markers */}
          {cities.map((city) => (
            <Marker key={city.name} position={city.coords} icon={getIcon(city.type)}>
              <Popup>
                <div className="text-center">
                  <p className="font-bold">{city.name}</p>
                  <p className="text-xs text-slate-500">{city.country}</p>
                  {city.type === 'ferry' && (
                    <p className="mt-1 text-xs font-bold text-blue-600">⛴️ Port de ferry</p>
                  )}
                  {city.type === 'origin' && (
                    <p className="mt-1 text-xs font-bold text-emerald-600">🏁 Départ</p>
                  )}
                  {city.type === 'destination' && (
                    <p className="mt-1 text-xs font-bold text-orange-600">🎯 Arrivée</p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Route info */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-slate-50 p-3 text-center">
          <Navigation size={18} className="mx-auto text-emerald-600" />
          <div className="mt-1 text-xs text-slate-500">Distance</div>
          <div className="font-bold">~2 100 km</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3 text-center">
          <Ship size={18} className="mx-auto text-blue-600" />
          <div className="mt-1 text-xs text-slate-500">Ferry</div>
          <div className="font-bold">~1h30</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3 text-center">
          <Fuel size={18} className="mx-auto text-orange-600" />
          <div className="mt-1 text-xs text-slate-500">Carburant</div>
          <div className="font-bold">~140 L</div>
        </div>
      </div>
    </section>
  );
}
