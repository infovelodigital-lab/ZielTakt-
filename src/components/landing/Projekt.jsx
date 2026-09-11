import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

// Einziger realer Case-Study auf der gesamten Website.
// TODO: echte Website-URL eintragen, sobald verfügbar.
const PROJECT_URL = 'https://autokosmetik-swissline.de';

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
            <img
              src="https://media.base44.com/images/public/69d37f9848f9698967903442/a4184ef0b_Screenshot2026-08-31135747.png"
              alt="Auto Kosmetik Swissline – Website-Screenshot"
              loading="lazy"
              width="800"
              height="600"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent pointer-events-none" />
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