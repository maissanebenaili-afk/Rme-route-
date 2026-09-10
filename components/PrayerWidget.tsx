"use client";

import { useEffect, useState } from "react";

type PrayerTimes = Record<string, string>;

export default function PrayerWidget() {
  const [prayers, setPrayers] = useState<PrayerTimes | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const res = await fetch("/api/prayer?latitude=48.8566&longitude=2.3522&method=3", { signal: controller.signal });
        if (!res.ok) throw new Error("Prayer API error");
        const data = await res.json();
        if (data?.data?.timings) setPrayers(data.data.timings);
        else throw new Error("Invalid response");
      } catch (err) {
        if ((err as Error).name !== "AbortError") setError(true);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  if (error) return <div className="rounded-2xl border bg-white p-5 text-sm text-slate-500">Horaires indisponibles.</div>;
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
