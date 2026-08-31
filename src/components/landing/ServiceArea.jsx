import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionDivider from './SectionDivider';

const germanTowns = [
  { name: 'Konstanz', primary: true },
  { name: 'Friedrichshafen' },
  { name: 'Meersburg' },
  { name: 'Überlingen' },
  { name: 'Radolfzell' },
  { name: 'Singen' },
  { name: 'Stockach' },
];

const swissTowns = [
  { name: 'Kreuzlingen' },
  { name: 'Frauenfeld' },
  { name: 'Schaffhausen' },
  { name: 'St. Gallen' },
  { name: 'Winterthur' },
  { name: 'Zürich' },
];

const rings = [0, 1, 2, 3];

export default function ServiceArea() {
  return (
    <section id="area" className="relative bg-void py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Einzugsgebiet
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Konstanz und die gesamte Region.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Abstract concentric glow rings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative glass-strong rounded-2xl overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-charcoal flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="area-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00E0FF" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#area-grid)" />
                </svg>

                {/* Concentric rings */}
                {rings.map((r) => (
                  <div
                    key={r}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/20"
                    style={{ width: `${28 + r * 22}%`, aspectRatio: '1 / 1' }}
                  >
                    <motion.div
                      animate={{ opacity: [0.12, 0.4, 0.12] }}
                      transition={{ duration: 4, repeat: Infinity, delay: r * 0.4, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-full border border-neon/10"
                    />
                  </div>
                ))}

                {/* Center point */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative z-10 flex flex-col items-center gap-2"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-neon animate-pulse-glow" />
                  <span className="text-neon text-xs font-heading font-semibold tracking-wide">Konstanz</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-datagrey text-lg leading-relaxed" style={{ lineHeight: '1.6' }}>
              Wir betreuen Unternehmen in Konstanz und der gesamten Region – persönlich, schnell und zuverlässig. Ob Praxis, Handwerk, Gastronomie oder Einzelhandel: Wir kennen die Region und Ihre Kunden.
            </p>

            <div className="space-y-3">
              <span className="text-datagrey text-xs tracking-widest uppercase">Deutschland</span>
              <div className="flex flex-wrap gap-2">
                {germanTowns.map((town) => (
                  <span
                    key={town.name}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                      town.primary
                        ? 'bg-neon/10 border-neon/30 text-neon'
                        : 'glass text-titanium/80 border-border'
                    }`}
                  >
                    {town.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-datagrey text-xs tracking-widest uppercase">Schweiz</span>
              <div className="flex flex-wrap gap-2">
                {swissTowns.map((town) => (
                  <span
                    key={town.name}
                    className="px-3 py-1.5 rounded-full text-xs font-medium glass text-titanium/80 border-border inline-flex items-center gap-1.5"
                  >
                    <span className="text-[9px] font-bold tracking-wider text-neon bg-neon/10 border border-neon/20 rounded px-1 py-0.5">
                      CH
                    </span>
                    {town.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4 pt-2">
              <div className="w-10 h-10 rounded-lg bg-neon/5 border border-neon/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-neon" />
              </div>
              <div>
                <div className="text-datagrey text-xs tracking-widest uppercase">Studio-Standort</div>
                <div className="text-titanium text-base font-medium mt-0.5">Konstanz, Baden-Württemberg</div>
                <div className="text-datagrey text-sm mt-1">Virtuelles Büro · persönliche Beratung nach Vereinbarung</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}