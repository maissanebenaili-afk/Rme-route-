import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Télécharger RME Voyage',
  description: 'Téléchargez l’application RME Voyage.',
};

function getDownloadUrl() {
  const value = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.toString() : null;
  } catch {
    return null;
  }
}

export default function DownloadPage() {
  const downloadUrl = getDownloadUrl();
  if (downloadUrl) redirect(downloadUrl);

  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-5 text-white">
      <section className="max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">RME Voyage</p>
        <h1 className="mt-3 text-3xl font-black">L&apos;application arrive bientôt</h1>
        <p className="mt-4 leading-7 text-slate-300">
          Le lien de téléchargement est en cours de publication. Revenez dans quelques instants.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-emerald-400 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-300"
        >
          Préparer mon voyage sur le web
        </Link>
      </section>
    </main>
  );
}
