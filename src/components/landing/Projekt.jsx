import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionDivider from './SectionDivider';

// Einziger realer Case-Study auf der gesamten Website.
// TODO: echte Website-URL eintragen, sobald verfügbar.
const PROJECT_URL = 'https://www.auto-kosmetik-swissline.de';

const facts = [
  'Individuelles Design',
  'Logo & Farbwelt',
  'Mobile-First',
  'Direkte Buchungsanfrage',
];

export default function Projekt() {
  return (
    <section id="projekt" className="relative bg-void py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Projekt
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Aus der Praxis: Auto Kosmetik Swissline.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Screenshot-Platzhalter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-strong"
          >
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-neon/30 blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-[#0066FF]/30 blur-3xl"
            />
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="projekt-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#00E0FF" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#projekt-grid)" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
                <ExternalLink className="w-7 h-7 text-neon" />
              </div>
              <span className="text-datagrey text-xs tracking-widest uppercase">Screenshot folgt</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-datagrey text-xs tracking-widest uppercase">
              Konstanz · Fahrzeugaufbereitung
            </span>
            <h3 className="font-heading font-bold text-titanium text-2xl tracking-tight">
              Auto Kosmetik Swissline
            </h3>
            <p className="text-datagrey text-lg leading-relaxed" style={{ lineHeight: '1.6' }}>
              Premium-Fahrzeugaufbereitung aus Konstanz. Eine moderne Website, die Handwerk und Liebe zum Detail zeigt — von der Markenwelt über das Design bis zur direkten Buchungsanfrage.
            </p>
            <ul className="flex flex-wrap gap-2 pt-2">
              {facts.map((f) => (
                <li
                  key={f}
                  className="px-3 py-1.5 rounded-full text-xs font-medium glass text-titanium/80 border-border"
                >
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neon text-sm font-medium hover:underline group"
            >
              Website ansehen
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}