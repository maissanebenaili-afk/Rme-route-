import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MRE Route – Europe ↔ Maroc",
  description: "Comparez voiture, ferry et avion et préparez votre voyage vers le Maroc.",
  manifest: "/manifest.webmanifest"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "RME Voyage – Europe ↔ Maroc",
  description: "RME Voyage aide les Ressortissants Marocains à l’Étranger à préparer, organiser et simplifier leurs voyages entre l’Europe et le Maroc."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
