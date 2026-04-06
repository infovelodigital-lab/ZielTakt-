import { motion } from 'framer-motion';
import GlassButton from './GlassButton';

const HERO_IMAGE = "/__generating__/img_dd210f2bc7c2.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-void">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-neon/3 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-neon-dark/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-glow" />
              <span className="text-datagrey text-xs font-medium tracking-widest uppercase">
                Digital Agentur · Konstanz
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold text-titanium leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              DIGITALE
              <br />
              EXZELLENZ
              <br />
              <span className="text-gradient-blue">DURCH PRÄZISION.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-datagrey text-lg md:text-xl max-w-lg leading-relaxed"
              style={{ lineHeight: '1.6' }}
            >
              Wir entwickeln maßgeschneiderte digitale Lösungen — von erstklassigem
              Webdesign über intelligente KI-Chatbots bis hin zu vollautomatisierten Workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <GlassButton href="#contact">
                Kostenlose Beratung
              </GlassButton>
              <GlassButton href="#services" variant="secondary">
                Unsere Services
              </GlassButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex gap-12 pt-8 border-t border-border"
            >
              {[
                { value: '50+', label: 'Projekte' },
                { value: '98%', label: 'Zufriedenheit' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading font-bold text-2xl text-titanium">{stat.value}</div>
                  <div className="text-datagrey text-xs tracking-widest uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right image — 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-10" />
              <div className="absolute inset-0 border border-neon/10 rounded-2xl z-20" />
              <img
                src={HERO_IMAGE}
                alt="Futuristic glass prism refracting electric blue light"
                className="w-full h-full object-cover animate-float"
              />
            </div>
            {/* Glow effect behind image */}
            <div className="absolute -inset-8 bg-neon/5 rounded-3xl blur-3xl -z-10" />
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