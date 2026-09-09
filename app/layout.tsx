import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "MRE Route - Europe - Maroc",
  description: "Comparez voiture, ferry et avion et preparez votre voyage vers le Maroc.",
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}