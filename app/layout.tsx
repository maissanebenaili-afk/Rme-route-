import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "MRE Route – Europe ↔ Maroc",
  description: "Comparez voiture, ferry et avion et préparez votre voyage vers le Maroc.",
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
