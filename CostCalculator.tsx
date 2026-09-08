use client";

import { useMemo, useState } from "react";
import { calculateTravelCost } from "@/lib/costCalculator";

export default function CostCalculator() {
  const [distance, setDistance] = useState(1850);
  const [consumption, setConsumption] = useState(6.5);
  const [fuelPrice, setFuelPrice] = useState(1.65);
  const [tolls, setTolls] = useState(120);
  const [ferry, setFerry] = useState(220);

  const total = useMemo(
    () => calculateTravelCost({
      distanceKm: distance,
      consumptionPer100Km: consumption,
      fuelPricePerLiter: fuelPrice,
      tollFeesEstimate: tolls,
      ferryTicketCost: ferry
    }),
    [distance, consumption, fuelPrice, tolls, ferry]
  );

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm border">
      <h2 className="text-xl font-bold">💶 Votre budget voyage</h2>
      <p className="mt-1 text-sm text-slate-500">Modifiez les paramètres pour obtenir une estimation.</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          ["Distance (km)", distance, setDistance],
          ["Conso. (L/100 km)", consumption, setConsumption],
          ["Carburant (€/L)", fuelPrice, setFuelPrice],
          ["Péages estimés (€)", tolls, setTolls],
          ["Ferry (€)", ferry, setFerry]
        ].map(([label, value, setter]: any) => (
          <label key={label} className="text-sm font-medium">
            {label}
            <input
              type="number"
              value={value}
              onChange={(e) => setter(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </label>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Metric label="Carburant" value={`${total.fuelTotal.toFixed(0)} €`} />
        <Metric label="Péages" value={`${total.tollTotal.toFixed(0)} €`} />
        <Metric label="Ferry" value={`${total.ferryTotal.toFixed(0)} €`} />
        <Metric label="Total" value={`${total.grandTotal.toFixed(0)} €`} />
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-black">{value}</div>
    </div>
  );
}
