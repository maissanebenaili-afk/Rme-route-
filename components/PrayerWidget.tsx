"use client";

import { useEffect, useState } from "react";

type PrayerTimes = Record<string, string>;

export default function PrayerWidget() {
  const [prayers, setPrayers] = useState<PrayerTimes | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);
  const [isOffline, setIsOffline] = useState(() =>
    typeof navigator === "undefined" ? false : !navigator.onLine,
  );

  useEffect(() => {
    function handleOnline() {
      setIsOffline(false);
    }

    function handleOffline() {
      setIsOffline(true);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (isOffline) {
      setErrorMessage("Connexion Internet indisponible. Vérifiez votre réseau puis réessayez.");
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 8000);

    async function load() {
      try {
        setErrorMessage(null);
        const res = await fetch("/api/prayer?latitude=48.8566&longitude=2.3522&method=3", { signal: controller.signal });
        if (!res.ok) throw new Error("Prayer API error");
        const data = await res.json();
        if (data?.data?.timings) {
          setPrayers(data.data.timings);
        }
        else throw new Error("Invalid response");
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          setErrorMessage("Le service met trop de temps à répondre. Réessayez dans quelques secondes.");
          return;
        }

        setErrorMessage("Horaires indisponibles pour le moment. Réessayez plus tard.");
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    load();
    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [isOffline, retryKey]);

  if (errorMessage) {
    return (
      <div className="rounded-2xl border bg-white p-5 text-sm text-slate-600">
        <p>{errorMessage}</p>
        <button
          type="button"
          onClick={() => setRetryKey((value) => value + 1)}
          className="mt-3 rounded-lg border border-emerald-700 px-3 py-2 font-medium text-emerald-700"
        >
          Réessayer
        </button>
      </div>
    );
  }

  if (!prayers) return <div className="rounded-2xl border bg-white p-5 text-sm text-slate-500">Chargement des horaires de prière…</div>;

  const items = [["Fajr", prayers.Fajr], ["Dhuhr", prayers.Dhuhr], ["Asr", prayers.Asr], ["Maghrib", prayers.Maghrib], ["Isha", prayers.Isha]];
  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold">🕌 Horaires de prière</h2>
        <span className="text-xs text-slate-500">Position par défaut : Paris</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2 text-center">
        {items.map(([name, time]) => <div key={name} className="rounded-xl bg-slate-50 p-2"><div className="text-xs text-slate-500">{name}</div><div className="mt-1 font-black">{time}</div></div>)}
      </div>
    </section>
  );
}
