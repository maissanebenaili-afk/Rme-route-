import './globals.css';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'RME Voyage – Europe ↔ Maroc',
  description:
    'RME Voyage aide les Ressortissants Marocains à l’Étranger à préparer, organiser et simplifier leurs voyages entre l’Europe et le Maroc.',
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
