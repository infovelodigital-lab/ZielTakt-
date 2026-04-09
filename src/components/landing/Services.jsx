import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import SectionDivider from './SectionDivider';

const services = [
  {
    number: '01',
    title: 'High-End Web-Architektur',
    description: 'Ihre Praxis verdient mehr als eine Standard-Vorlage. Wir entwickeln blitzschnelle, visuell beeindruckende Websites, die Vertrauen ausstrahlen und Ihre Expertise perfekt in Szene setzen.',
    features: ['Responsive Design & Mobile-First', 'UI/UX nach Schweizer Präzision', 'Performance-optimierte Architektur', 'SEO & Conversion-Optimierung'],
    image: 'https://media.base44.com/images/public/69d37f9848f9698967903442/59d22bf41_generated_image.png',
  },
  {
    number: '02',
    title: 'Intelligente KI-Assistenten',
    description: 'Entlasten Sie Ihren Empfang. Unsere maßgeschneiderten KI-Chatbots beantworten Patientenfragen zu Behandlungen, Öffnungszeiten und Notfällen in Echtzeit – 24 Stunden am Tag, 7 Tage die Woche.',
    features: ['Natürliche Sprachverarbeitung (NLP)', 'Lead-Qualifizierung automatisch', 'Nahtlose System-Integration', 'Mehrsprachiger Support'],
    image: 'https://media.base44.com/images/public/69d37f9848f9698967903442/ce304d02c_generated_image.png',
  },
  {
    number: '03',
    title: 'Automatisierte Terminvergabe',
    description: 'Von der ersten Anfrage bis zum festen Termin im Kalender. Wir verbinden Ihre Website nahtlos mit Ihren bestehenden Buchungssystemen für einen reibungslosen, automatisierten Ablauf ohne Personalaufwand.',
    features: ['Prozessanalyse & Optimierung', 'API-Integrationen', 'Automatisierte Datenpipelines', 'Echtzeit-Monitoring & Reports'],
    image: 'https://media.base44.com/images/public/69d37f9848f9698967903442/5e732a9f6_generated_image.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-void py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Unsere Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Unsere Leistungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-datagrey text-lg max-w-2xl leading-relaxed"
          >
            Drei Lösungen, die Ihr Unternehmen digital voranbringen: Mehr Kunden gewinnen, Prozesse automatisieren und professionell auftreten.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}