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

export default function Home() {
  usePageMeta({
    title: 'Vigorix Digital – Webdesign Studio Konstanz am Bodensee',
    description:
      'Vigorix Digital aus Konstanz: moderne Websites, Branding und Prozessautomatisierung für lokale Unternehmen am Bodensee. Klare Preise, persönliche Beratung.',
  });

  return (
    <div className="bg-void min-h-screen">
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
    </div>
  );
}