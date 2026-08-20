import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Services from '../components/landing/Services';
import ServiceArea from '../components/landing/ServiceArea';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';
import CookieConsent from '../components/landing/CookieConsent';

export default function Home() {
  return (
    <div className="bg-void min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ServiceArea />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
}