import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionDivider from './SectionDivider';
import GlassButton from './GlassButton';

const packages = [
  {
    name: 'Starter Site',
    price: '1.400 €',
    time: '5–7 Tage',
    features: ['1–3 Seiten', 'Responsive Design', 'Kontaktformular', 'SSL & technische Basis'],
    popular: false,
  },
  {
    name: 'Signature Site',
    price: '2.800 €',
    time: '10–15 Tage',
    features: ['Bis 7 Seiten', 'Individuelles Design', 'Anfrage-/Buchungsfunktion', 'Google-Sichtbarkeit eingerichtet'],
    popular: true,
  },
  {
    name: 'Signature+ Markenpaket',
    price: '4.800 €',
    time: '3–4 Wochen',
    features: ['Individueller Umfang', 'Logo & Branding', 'Prozessautomatisierung', 'Persönliche Betreuung'],
    popular: false,
  },
];

const care = [
  { name: 'Essential', price: '45 €', note: 'Updates & kleine Text-/Bildänderungen' },
  { name: 'Growth', price: '95 €', note: 'Inhalte, SEO-Checks & Unterstützung' },
  { name: 'Premium', price: '160 €', note: 'Pflege, Backups & neue Funktionen' },
];

export default function Preise() {
  return (
    <section id="preise" className="relative bg-void py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Preise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Klare Pakete. Ehrliche Preise.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-datagrey text-lg max-w-2xl leading-relaxed"
          >
            Jedes Projekt ist anders — hier sind unsere Startpreise. Für alles darüber hinaus: individuelles Angebot auf Anfrage.
          </motion.p>
        </div>

        {/* Einmalige Pakete */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-strong rounded-2xl p-8 space-y-6 relative transition-all duration-500 hover:border-neon/30 ${
                pkg.popular ? 'border-neon/40 glow-blue' : ''
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-widest uppercase text-void bg-neon rounded-full px-3 py-1">
                  Beliebt
                </span>
              )}
              <h3 className="font-heading font-semibold text-titanium text-xl tracking-tight">
                {pkg.name}
              </h3>
              <div>
                <span className="text-datagrey text-sm">ab</span>
                <div className="font-heading font-bold text-titanium text-4xl leading-none mt-1">
                  {pkg.price}
                </div>
                <div className="text-datagrey text-sm mt-2">{pkg.time} Umsetzung</div>
              </div>
              <ul className="space-y-2.5 pt-2 border-t border-border">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-datagrey text-sm">
                    <Check className="w-4 h-4 text-neon flex-shrink-0" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Laufende Betreuung */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h3 className="font-heading font-semibold text-titanium text-lg tracking-tight mb-8">
            Laufende Betreuung — monatlich
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {care.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 space-y-3 hover:border-neon/20 transition-all duration-500"
              >
                <div className="text-datagrey text-xs tracking-widest uppercase">{c.name}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-datagrey text-sm">ab</span>
                  <span className="font-heading font-bold text-neon text-2xl">{c.price}</span>
                  <span className="text-datagrey text-sm">/Monat</span>
                </div>
                <div className="text-datagrey text-sm leading-relaxed">{c.note}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Abschluss-CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 text-center space-y-4"
        >
          <GlassButton href="#contact">Individuelles Angebot auf Anfrage</GlassButton>
          <p className="text-datagrey/60 text-xs">Alle Preise netto. Ggf. Umsatzsteuer (Kleinunternehmerregelung möglich).</p>
        </motion.div>
      </div>
    </section>
  );
}