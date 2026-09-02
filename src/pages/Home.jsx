import usePageMeta from '@/hooks/usePageMeta';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Services from '../components/landing/Services';
import Preise from '../components/landing/Preise';
import Projekt from '../components/landing/Projekt';
import Ablauf from '../components/landing/Ablauf';
import PartnerProgramm from '../components/landing/PartnerProgramm';
import ServiceArea from '../components/landing/ServiceArea';
import FAQ from '../components/landing/FAQ';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';
import CookieConsent from '../components/landing/CookieConsent';
import FloatingContact from '../components/landing/FloatingContact';

export default function Home() {
  usePageMeta({
    title: 'Vigorix Digital – Digitales Wachstumssystem für lokale Unternehmen in Konstanz',
    description:
    'Vigorix Digital aus Konstanz: ein digitales Wachstumssystem aus Website, Google-Sichtbarkeit, Online-Buchung und Automatisierung. Mehr Anfragen, mehr Buchungen, weniger verpasste Kunden – für lokale Unternehmen in der DACH-Region.',
  });

  return (
    <div className="bg-void min-h-screen pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Preise />
      <Projekt />
      <Ablauf />
      <PartnerProgramm />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
      <CookieConsent />
      <FloatingContact />
    </div>
  );
}