import { motion } from 'framer-motion';
import { Search, CalendarCheck, Workflow, Palette } from 'lucide-react';
import SectionDivider from './SectionDivider';

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Sichtbarkeit',
    tagline: 'Damit man Sie findet.',
    description: 'Ihre Website und Ihr Google-Auftritt greifen ineinander – damit Kunden aus der Region genau dann auf Sie stoßen, wenn sie suchen.',
    features: [
      'Individuelle Website – responsive & pflegeleicht',
      'Google-Unternehmensprofil & lokale SEO-Grundlagen',
      'Anmeldung bei der Google Search Console',
      'Saubere, schnelle technische Basis',
    ],
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Vertrauen & Buchung',
    tagline: 'Damit man Sie wählt.',
    description: 'Design, das Vertrauen aufbaut – und direkte Buchung, die aus Interessenten Kunden macht.',
    features: [
      'Design, das Vertrauen weckt',
      '24/7 Online-Terminbuchung',
      'Automatische Bestätigungen & Erinnerungen',
      'Anbindung an Ihre Software möglich',
    ],
  },
  {
    number: '03',
    icon: Workflow,
    title: 'Automatisierung',
    tagline: 'Damit nichts liegen bleibt.',
    description: 'Wiederkehrende Aufgaben laufen von allein – auch nach Feierabend und am Wochenende.',
    features: [
      'Prozessautomatisierung für wiederkehrende Aufgaben',
      'Lead-Weiterleitung per WhatsApp/E-Mail',
      'Bewertungsanfragen nach Auftragsabschluss',
      'Rückrufservice bei verpassten Anrufen',
    ],
  },
  {
    number: '04',
    icon: Palette,
    title: 'Marke',
    tagline: 'Damit man Sie wiedererkennt.',
    description: 'Ein starker, einheitlicher Auftritt – Logo, Farben und verlässliche Sicherheit als Vertrauensbasis.',
    features: [
      'Individuelles Logo & Branding',
      'Farb- und Schriftenwelt',
      'SSL-Verschlüsselung (HTTPS) inklusive',
      'Updates, Backups & technische Sicherheit',
    ],
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
            Mehr als eine Website: <span className="text-gradient-blue">Ihr digitales System.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-datagrey text-lg max-w-2xl leading-relaxed"
          >
            Die Website ist ein Baustein – entscheidend ist das Zusammenspiel: gefunden werden, Vertrauen aufbauen, Anfragen und Buchungen gewinnen, Abläufe automatisieren. Diese vier Bausteine bauen wir für Ihr Unternehmen.
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
                  <span className="font-heading font-bold text-titanium/15 text-3xl tracking-tight">
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