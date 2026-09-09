import './globals.css';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "MRE Route – voyages diaspora Europe ↔ pays d'origine",
  description:
    "Préparez des voyages diaspora Europe ↔ pays d'origine avec budget, repères utiles et conseils communautaires.",
  manifest: '/manifest.webmanifest',
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
