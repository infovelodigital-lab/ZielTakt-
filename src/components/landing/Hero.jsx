import { motion } from 'framer-motion';
import GlassButton from './GlassButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-void">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-neon/3 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-neon-dark/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-glow" />
              <span className="text-datagrey text-xs font-medium tracking-widest uppercase">
                Webdesign Studio · Konstanz
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold text-titanium leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Professionelle Websites für Unternehmen{' '}
              <span className="text-gradient-blue">am Bodensee.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-datagrey text-lg md:text-xl max-w-lg leading-relaxed"
              style={{ lineHeight: '1.6' }}
            >
              Wir gestalten moderne, vertrauenswürdige Websites und digitale Lösungen – damit lokale Kunden Ihr Unternehmen bei Google finden und sofort verstehen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <GlassButton href="#contact">
                Kostenloses Erstgespräch sichern
              </GlassButton>
              <GlassButton href="#services" variant="secondary">
                Leistungen ansehen
              </GlassButton>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="text-datagrey/60 text-xs tracking-wide"
            >
              Unverbindlich · Persönliche Beratung · Lokal am Bodensee
            </motion.p>

            {/* Trust elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex gap-12 pt-8 border-t border-border"
            >
              {[
                { value: 'Lokal', label: 'Bodensee' },
                { value: 'Persönlich', label: 'Beratung' },
                { value: 'Schnell', label: 'Umsetzung' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading font-bold text-2xl text-titanium">{stat.value}</div>
                  <div className="text-datagrey text-xs tracking-widest uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual — modern animated dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-strong">
              {/* Animated aurora blobs */}
              <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-neon/40 blur-3xl"
              />
              <motion.div
                animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[#0066FF]/40 blur-3xl"
              />
              <motion.div
                animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full bg-[#7C3AED]/25 blur-3xl"
              />

              {/* Subtle grid overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#00E0FF" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
              </svg>

              {/* Floating dashboard card */}
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full rounded-2xl glass-strong p-5 space-y-5 shadow-2xl"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon to-neon-dark flex items-center justify-center font-heading font-bold text-void text-sm">
                        V
                      </div>
                      <div>
                        <div className="text-titanium text-sm font-semibold leading-tight">Veloxis Studio</div>
                        <div className="text-datagrey text-[10px]">Lokale Sichtbarkeit</div>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] text-neon bg-neon/10 border border-neon/20 rounded-full px-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                      Aktiv
                    </span>
                  </div>

                  {/* Big metric */}
                  <div className="space-y-1">
                    <div className="flex items-end gap-1">
                      <span className="font-heading font-bold text-titanium text-4xl leading-none">98</span>
                      <span className="text-datagrey text-sm mb-1">/100</span>
                    </div>
                    <div className="text-datagrey text-[11px] tracking-wide">Google PageSpeed Score</div>
                  </div>

                  {/* Mini bar chart */}
                  <div className="flex items-end justify-between gap-1.5 h-16">
                    {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-neon-dark/40 to-neon"
                      />
                    ))}
                  </div>

                  {/* Chips */}
                  <div className="flex gap-2">
                    {['SEO', 'Lokal', 'Sicher'].map((chip) => (
                      <span key={chip} className="text-[10px] text-titanium/80 bg-neon/5 border border-neon/15 rounded-full px-3 py-1">
                        {chip}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute -inset-8 bg-neon/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-datagrey text-xs tracking-widest uppercase">Scrollen</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-gradient-to-b from-neon/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}