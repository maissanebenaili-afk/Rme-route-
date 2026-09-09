import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "RME Route – Mobilité diaspora Maroc",
  description:
    "RME Route accompagne les Ressortissants Marocains à l'Étranger avec un assistant de préparation de trajet, budget, traversée et services utiles autour du Maroc.",
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
