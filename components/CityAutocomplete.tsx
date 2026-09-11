"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, MapPin } from "lucide-react";
import { geocodeSearch, type GeocodeResult } from "@/lib/geocoding";

// Débounce minimum recommandé par la politique d'usage Nominatim pour éviter
// de solliciter le service à chaque frappe clavier.
const DEBOUNCE_MS = 450;

type Props = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onSelect: (result: GeocodeResult) => void;
  icon?: React.ReactNode;
};

export default function CityAutocomplete({
  label,
  value,
  placeholder,
  onChange,
  onSelect,
  icon,
}: Props) {
  const [suggestions, setSuggestions] = useState<GeocodeResult[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleInputChange(next: string) {
    onChange(next);
    setError(null);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (abortRef.current) abortRef.current.abort();

    const trimmed = next.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      setOpen(false);
      setLoading(false);
      return;
    }

    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        const results = await geocodeSearch(trimmed, { signal: controller.signal });
        setSuggestions(results);
        setOpen(results.length > 0);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Recherche de villes indisponible pour le moment (service tiers gratuit).");
          setSuggestions([]);
        }
      } finally {
        setLoading(false);
      }
    }, DEBOUNCE_MS);
  }

  function handleSelect(result: GeocodeResult) {
    onSelect(result);
    onChange(result.displayName);
    setOpen(false);
    setSuggestions([]);
  }

  return (
    <div ref={containerRef} className="relative">
      <label className="text-sm font-medium">
        <span className="flex items-center gap-1 text-xs text-slate-500">
          {icon ?? <MapPin size={12} />} {label}
        </span>
        <div className="relative mt-1">
          <input
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            onFocus={() => suggestions.length > 0 && setOpen(true)}
            className="w-full rounded-xl border p-3 pr-8"
            aria-label={label}
            placeholder={placeholder}
            autoComplete="off"
            role="combobox"
            aria-expanded={open}
            aria-autocomplete="list"
          />
          {loading && (
            <Loader2
              size={16}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 animate-spin text-slate-400"
              aria-hidden
            />
          )}
        </div>
      </label>

      {error && <p className="mt-1 text-xs text-terracotta-600">{error}</p>}

      {open && suggestions.length > 0 && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg"
        >
          {suggestions.map((s, idx) => (
            <li key={`${s.lat}-${s.lon}-${idx}`} role="option" aria-selected="false">
              <button
                type="button"
                onClick={() => handleSelect(s)}
                className="flex w-full items-start gap-2 px-3 py-2 text-left text-sm hover:bg-sable-50"
              >
                <MapPin size={14} className="mt-0.5 shrink-0 text-zellige-600" />
                <span className="truncate">{s.displayName}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-1 text-[11px] text-slate-400">
        Suggestions via{" "}
        <a
          href="https://nominatim.openstreetmap.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-slate-600"
        >
          Nominatim / OpenStreetMap
        </a>{" "}
        (service gratuit, débit limité)
      </p>
    </div>
  );
}
