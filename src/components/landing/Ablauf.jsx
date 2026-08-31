import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

const steps = [
  {
    n: '01',
    title: 'Kennenlernen',
    time: 'Tag 1',
    desc: 'Kostenloses Erstgespräch — wir klären Ihre Ziele, Ihre Kunden und was die Website leisten soll.',
  },
  {
    n: '02',
    title: 'Konzept & Design',
    time: '3–5 Tage',
    desc: 'Layout, Farben, Schriften und Inhalte werden entworfen. Sie sehen alles vorab und geben Feedback.',
  },
  {
    n: '03',
    title: 'Entwicklung',
    time: '5–10 Tage',
    desc: 'Wir setzen die Website um: responsive, schnell, sicher und pflegeleicht.',
  },
  {
    n: '04',
    title: 'Launch & Übergabe',
    time: '1–2 Tage',
    desc: 'Website geht live, Google-Sichtbarkeit wird eingerichtet, Sie bekommen eine kurze Einführung.',
  },
];

export default function Ablauf() {
  return (
    <section id="ablauf" className="relative bg-void py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Ablauf
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            In vier Schritten zur fertigen Website.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-7 space-y-4 hover:border-neon/20 transition-all duration-500 relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-titanium/15 text-3xl tracking-tight">
                  {step.n}
                </span>
                <span className="text-neon text-xs font-medium tracking-widest uppercase bg-neon/10 border border-neon/20 rounded-full px-3 py-1">
                  {step.time}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-titanium text-lg tracking-tight">
                {step.title}
              </h3>
              <p className="text-datagrey text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}