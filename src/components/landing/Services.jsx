import { motion } from 'framer-motion';
import { Monitor, CalendarCheck, Workflow, Palette, ShieldCheck, Search } from 'lucide-react';
import SectionDivider from './SectionDivider';

const services = [
  {
    number: '01',
    icon: Monitor,
    title: 'Website Design',
    description: 'Individuelle, moderne Websites, die Vertrauen wecken und Ihr Unternehmen perfekt darstellen.',
    features: ['Responsive für alle Geräte', 'Schnelle Ladezeiten', 'Pflegeleicht & erweiterbar', 'Design nach Ihren Wünschen'],
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Online-Buchungssysteme',
    description: 'Ihre Kunden buchen Termine rund um die Uhr – direkt über Ihre Website, ohne Telefonate.',
    features: ['24/7 Terminbuchung', 'Automatische Bestätigung', 'Erinnerungen per E-Mail', 'An Ihre Software anbindbar'],
  },
  {
    number: '03',
    icon: Workflow,
    title: 'Prozessautomatisierung',
    description: 'Wir automatisieren wiederkehrende Aufgaben, damit Sie Zeit sparen und sich auf das Wesentliche konzentrieren.',
    features: ['Weniger manuelle Schritte', 'Automatische Terminbestätigung', 'Lead-Weiterleitung per WhatsApp/E-Mail', 'Mehr Zeit fürs Kerngeschäft'],
  },
  {
    number: '04',
    icon: Palette,
    title: 'Logo & Branding Design',
    description: 'Ein starker, wiedererkennbarer Auftritt – von Logo über Farben bis zur Schrift.',
    features: ['Individuelles Logo-Design', 'Farb- und Schriftenwelt', 'Visueller Markenauftritt', 'Einheitlich auf allen Medien'],
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'SSL-Zertifikat & Website-Sicherheit',
    description: 'Ihre Website lädt verschlüsselt und sicher – ein Vertrauenssignal für Kunden und Google.',
    features: ['HTTPS-Verschlüsselung', 'Sichere Datenübertragung', 'Regelmäßige Sicherheits-Updates', 'Automatische Backups'],
  },
  {
    number: '06',
    icon: Search,
    title: 'Google-Sichtbarkeit',
    description: 'Damit Kunden aus der Region Sie bei Google finden.',
    features: ['Google-Unternehmensprofil einrichten', 'Lokale SEO-Grundlagen', 'Saubere technische Basis', 'Anmeldung bei der Search Console'],
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
            Alles für Ihren digitalen Auftritt.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-datagrey text-lg max-w-2xl leading-relaxed"
          >
            Von der ersten Skizze bis zur laufenden Website – wir kümmern uns um jedes Detail, damit Sie sich auf Ihr Geschäft konzentrieren können.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="glass-strong rounded-2xl p-7 space-y-5 hover:border-neon/20 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-neon/5 border border-neon/10 flex items-center justify-center group-hover:glow-blue transition-all duration-500">
                    <Icon className="w-6 h-6 text-neon" />
                  </div>
                  <span className="font-heading font-bold text-titanium/15 text-3xl tracking-tight">
                    {service.number}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading font-semibold text-titanium text-xl tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-datagrey text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-border">
                  {service.features.map((f) => (
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