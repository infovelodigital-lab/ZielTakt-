import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import SocialProof from '../components/landing/SocialProof';
import VirtualOffice from '../components/landing/VirtualOffice';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="bg-void min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <SocialProof />
      <VirtualOffice />
      <Contact />
      <Footer />
    </div>
  );
}