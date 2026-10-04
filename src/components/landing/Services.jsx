import { motion } from 'framer-motion';
import { Globe, MapPin, CalendarCheck, BarChart3 } from 'lucide-react';
import SectionDivider from './SectionDivider';

const phases = [
  {
    number: '01',
    icon: Globe,
    title: 'Website & Conversion',
    tagline: 'Damit Besucher zu Kunden werden.',
    description: 'Wir bauen Websites, die nicht nur gut aussehen, sondern Anfragen und Buchungen erzeugen.',
    features: [
      'Individuelles, mobile-optimiertes Webdesign',
      'Conversion-optimierte Seitenstruktur',
      'Klare Call-to-Actions & Vertrauenselemente',
      'Schnelle Ladezeiten & technische SEO-Basis',
    ],
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Google & Local SEO',
    tagline: 'Damit Kunden Sie finden.',
    description: 'Wir optimieren Ihren digitalen Auftritt für Google, Maps und lokale Suchanfragen.',
    features: [
      'Google-Unternehmensprofil Setup & Pflege',
      'Lokale SEO & Keyword-Ausrichtung',
      'Google Search Console & Indexierung',
      'Strukturierte Daten für bessere Auffindbarkeit',
    ],
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Leads & Buchungen',
    tagline: 'Damit aus Interesse echte Anfragen werden.',
    description: 'Wir machen es Ihren Kunden einfach, Kontakt aufzunehmen, einen Termin zu buchen oder eine Anfrage zu senden.',
    features: [
      '24/7 Online-Terminbuchung',
      'Kontakt- & Anfrageformulare',
      'WhatsApp-Kontakt & Click-to-Call',
      'Automatische Bestätigungen & Erinnerungen',
    ],
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Tracking & Growth',
    tagline: 'Damit Sie wissen, was wirklich funktioniert.',
    description: 'Wir machen sichtbar, woher Ihre Kunden kommen und welche Maßnahmen tatsächlich Anfragen bringen.',
    features: [
      'Google Analytics & Search Console',
      'Conversion- & Formular-Tracking',
      'Performance Monitoring',
      'Reporting je nach Betreuungspaket',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-void py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Leistungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Mehr als eine Website: <span className="text-gradient-blue">Ein System für mehr Kunden.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-datagrey text-lg max-w-2xl leading-relaxed"
          >
            Wir verbinden Website, Google-Sichtbarkeit, Leads, Buchungen und Tracking zu einem System, das Ihr Unternehmen digital wachsen lässt.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="glass-strong rounded-2xl p-7 space-y-5 hover:border-neon/20 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-neon/5 border border-neon/10 flex items-center justify-center group-hover:glow-blue transition-all duration-500">
                    <Icon className="w-6 h-6 text-neon" />
                  </div>
                  <span aria-hidden="true" className="font-heading font-bold text-titanium/15 text-3xl tracking-tight">
                    {phase.number}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-heading font-semibold text-titanium text-xl tracking-tight">
                      {phase.title}
                    </h3>
                    <span className="text-neon text-sm font-medium">{phase.tagline}</span>
                  </div>
                  <p className="text-datagrey text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>
                    {phase.description}
                  </p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-border">
                  {phase.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-datagrey text-xs">
                      <span className="w-1 h-1 rounded-full bg-neon" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-datagrey text-sm">
            Nicht sicher, was Sie brauchen?{' '}
            <a href="#contact" className="text-neon hover:underline font-medium">
              Lassen Sie uns persönlich sprechen →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}