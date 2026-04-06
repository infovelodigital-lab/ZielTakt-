import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionDivider from './SectionDivider';

export default function VirtualOffice() {
  return (
    <section id="office" className="relative bg-void py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Standort
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            VIRTUAL OFFICE KONSTANZ.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative glass-strong rounded-2xl overflow-hidden aspect-[4/3]">
              {/* Stylized map background */}
              <div className="absolute inset-0 bg-charcoal">
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00E0FF" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Stylized lake shape */}
                <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M120,100 Q150,80 200,90 Q260,100 300,130 Q330,150 310,180 Q280,210 240,220 Q200,225 160,210 Q130,195 110,170 Q95,145 120,100"
                    fill="rgba(0, 224, 255, 0.05)"
                    stroke="rgba(0, 224, 255, 0.2)"
                    strokeWidth="1"
                  />
                  <text x="180" y="160" fill="rgba(0, 224, 255, 0.15)" fontSize="10" fontFamily="Inter">BODENSEE</text>
                </svg>

                {/* Konstanz beacon */}
                <div className="absolute" style={{ left: '32%', top: '55%' }}>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-neon animate-pulse-glow" />
                    <div className="absolute -inset-4 rounded-full border border-neon/20 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute -inset-8 rounded-full border border-neon/10 animate-ping" style={{ animationDuration: '4s' }} />
                    <div className="absolute top-6 left-6 whitespace-nowrap">
                      <span className="text-neon text-xs font-heading font-bold tracking-wider">KONSTANZ</span>
                    </div>
                  </div>
                </div>
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
              Unser virtuelles Büro in Konstanz am Bodensee verbindet die Präzision
              der Schweizer Grenzregion mit der Dynamik einer modernen Digitalagentur.
              Regional verankert — digital grenzenlos.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Adresse', value: 'Konstanz, Baden-Württemberg, DE' },
                { label: 'Region', value: 'Bodensee / D-A-CH' },
                { label: 'Erreichbarkeit', value: 'Mo–Fr, 09:00–18:00 CET' },
                { label: 'Reaktionszeit', value: '< 4 Stunden' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-neon/5 border border-neon/10 flex items-center justify-center flex-shrink-0 group-hover:glow-blue transition-all duration-500">
                    <MapPin className="w-4 h-4 text-neon" />
                  </div>
                  <div>
                    <div className="text-datagrey text-xs tracking-widest uppercase">{item.label}</div>
                    <div className="text-titanium text-base font-medium mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}