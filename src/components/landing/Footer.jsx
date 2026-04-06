import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString('de-DE', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(now);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-charcoal border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-border">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center">
                <span className="text-neon font-heading font-bold text-sm">V</span>
              </div>
              <span className="font-heading font-bold text-titanium text-lg tracking-tight">
                Veloxis<span className="text-neon">.</span>
              </span>
            </div>
            <p className="text-datagrey text-sm leading-relaxed max-w-xs">
              Digitale Exzellenz durch Präzision. Ihre Full-Service Digitalagentur am Bodensee.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <span className="text-datagrey text-xs tracking-widest uppercase">Navigation</span>
            <div className="flex flex-col gap-2">
              {['Services', 'Referenzen', 'Standort', 'Kontakt'].map((label) => (
                <a
                  key={label}
                  href={`#${label === 'Referenzen' ? 'proof' : label === 'Standort' ? 'office' : label.toLowerCase()}`}
                  className="text-titanium/70 text-sm hover:text-neon transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* System status */}
          <div className="space-y-4">
            <span className="text-datagrey text-xs tracking-widest uppercase">System Status</span>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-titanium/70 text-sm">Alle Systeme operativ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neon" />
                <span className="text-titanium/70 text-sm font-mono">{time} CET</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neon/50" />
                <span className="text-titanium/70 text-sm">Konstanz, DE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <span className="text-datagrey text-xs">
            © {new Date().getFullYear()} Veloxis Digital. Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-datagrey text-xs hover:text-neon transition-colors">Datenschutz</a>
            <a href="#" className="text-datagrey text-xs hover:text-neon transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}