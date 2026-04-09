import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

const stats = [
  { value: 'DACH', label: 'Region' },
  { value: '24/7', label: 'KI-Support' },
  { value: '100%', label: 'Maßgeschneidert' },
];

export default function Positioning() {
  return (
    <section id="about" className="relative bg-void py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Über uns
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em] max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Experten für den medizinischen Sektor.{' '}
            <span className="text-gradient-blue">Offen für Exzellenz.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-datagrey text-lg leading-relaxed" style={{ lineHeight: '1.7' }}>
              Patienten und Kunden beurteilen Ihre Kompetenz in den ersten Sekunden Ihres digitalen Auftritts. Wir sind darauf spezialisiert, Zahnarztpraxen im deutschsprachigen Raum (D-A-CH) mit High-End-Websites und KI-gestützten Buchungssystemen an die Spitze zu bringen.
            </p>
            <p className="text-datagrey text-lg leading-relaxed" style={{ lineHeight: '1.7' }}>
              Während unser tiefstes Fachwissen in der Dentalbranche liegt, vertrauen auch exklusive Dienstleister und Premium-Marken auf unsere Automatisierungs-Architektur.
            </p>

            <div className="flex gap-12 pt-4 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-bold text-2xl text-neon">{s.value}</div>
                  <div className="text-datagrey text-xs tracking-widest uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: '🦷', label: 'Dentalbranche', sub: 'Tiefes Branchenwissen' },
              { icon: '🤖', label: 'KI-Systeme', sub: 'Modernste LLM-Technologie' },
              { icon: '🇨🇭', label: 'Swiss Precision', sub: 'Qualität auf höchstem Niveau' },
              { icon: '⚡', label: 'Schnelle Umsetzung', sub: 'Von Idee zu Launch' },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-strong rounded-2xl p-6 space-y-2 hover:border-neon/20 transition-all duration-500"
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="font-heading font-semibold text-titanium text-sm">{item.label}</div>
                <div className="text-datagrey text-xs">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}