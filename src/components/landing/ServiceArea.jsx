import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionDivider from './SectionDivider';

const towns = [
  { name: 'Konstanz', primary: true, left: '42%', top: '58%' },
  { name: 'Friedrichshafen', left: '64%', top: '39%' },
  { name: 'Meersburg', left: '54%', top: '49%' },
  { name: 'Überlingen', left: '38%', top: '40%' },
  { name: 'Radolfzell', left: '24%', top: '53%' },
  { name: 'Singen', left: '21%', top: '76%' },
  { name: 'Stockach', left: '36%', top: '82%' },
];

function TownBeacon({ town, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
      className="absolute"
      style={{ left: town.left, top: town.top }}
    >
      <div className="relative flex flex-col items-center">
        <div className={`rounded-full ${town.primary ? 'w-3.5 h-3.5 bg-neon animate-pulse-glow' : 'w-2.5 h-2.5 bg-neon/70'}`} />
        {town.primary && (
          <>
            <div className="absolute -inset-3 rounded-full border border-neon/20 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute -inset-6 rounded-full border border-neon/10 animate-ping" style={{ animationDuration: '4s' }} />
          </>
        )}
        <span
          className={`absolute top-5 whitespace-nowrap font-heading font-semibold tracking-wide ${
            town.primary ? 'text-neon text-xs' : 'text-titanium/70 text-[10px]'
          }`}
        >
          {town.name}
        </span>
      </div>
    </motion.div>
  );
}

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
            Konstanz & die gesamte Bodensee-Region.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative glass-strong rounded-2xl overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-charcoal">
                {/* Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="area-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00E0FF" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#area-grid)" />
                </svg>

                {/* Lake */}
                <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M110,120 Q140,100 185,108 Q240,116 280,140 Q305,162 290,188 Q260,212 215,214 Q175,216 135,200 Q105,182 100,152 Q98,130 110,120"
                    fill="rgba(0, 224, 255, 0.06)"
                    stroke="rgba(0, 224, 255, 0.25)"
                    strokeWidth="1"
                  />
                  <text x="180" y="165" fill="rgba(0, 224, 255, 0.18)" fontSize="10" fontFamily="Inter" letterSpacing="2">BODENSEE</text>
                </svg>

                {/* Town beacons */}
                {towns.map((town, i) => (
                  <TownBeacon key={town.name} town={town} index={i} />
                ))}
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
              Wir betreuen Unternehmen in Konstanz und der gesamten Bodensee-Region – persönlich, schnell und zuverlässig. Ob Praxis, Handwerk, Gastronomie oder Einzelhandel: Wir kennen die Region und Ihre Kunden.
            </p>

            <div className="space-y-3">
              <span className="text-datagrey text-xs tracking-widest uppercase">Orte, die wir betreuen</span>
              <div className="flex flex-wrap gap-2">
                {towns.map((town) => (
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

            <div className="flex items-start gap-4 pt-2">
              <div className="w-10 h-10 rounded-lg bg-neon/5 border border-neon/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-neon" />
              </div>
              <div>
                <div className="text-datagrey text-xs tracking-widest uppercase">Studio-Standort</div>
                <div className="text-titanium text-base font-medium mt-0.5">Konstanz, Baden-Württemberg</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}