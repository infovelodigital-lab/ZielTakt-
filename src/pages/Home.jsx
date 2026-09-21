import { lazy, Suspense } from 'react';
import usePageMeta from '@/hooks/usePageMeta';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';

// Everything below the hero is one lazy chunk (see BelowFold.jsx) so it's a
// single extra network request instead of many small ones.
const BelowFold = lazy(() => import('./BelowFold'));

export default function Home() {
  usePageMeta({
    title: 'ZielTakt – Digitales Wachstumssystem für lokale Unternehmen in Konstanz',
    description:
    'ZielTakt aus Konstanz: ein digitales Wachstumssystem aus Website, Google-Sichtbarkeit, Online-Buchung und Automatisierung. Mehr Anfragen, mehr Buchungen, weniger verpasste Kunden – für lokale Unternehmen in der DACH-Region.',
  });

  return (
    <div className="bg-void min-h-screen pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <BelowFold />
        </Suspense>
      </main>
    </div>
  );
}
