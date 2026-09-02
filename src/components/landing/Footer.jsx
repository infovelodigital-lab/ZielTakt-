import { useState, useEffect } from 'react';

const CONTACT_EMAIL = 'info@vigorix.de';
const CONTACT_PHONE = '+49 151 50104908';

const navLinks = [
  { label: 'Leistungen', href: '#services' },
  { label: 'Preise', href: '#preise' },
  { label: 'Projekt', href: '#projekt' },
  { label: 'Über uns', href: '#about' },
  { label: 'Einzugsgebiet', href: '#area' },
  { label: 'Partner-Programm', href: '#partner' },
  { label: 'Kontakt', href: '#contact' },
];

// Platzhalter für spätere Social-Media-Links (Instagram, TikTok)
const socialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.47V13a8.28 8.28 0 005.58 2.15V11.7a4.85 4.85 0 01-3.59-1.58V6.69h3.59z" />
    </svg>
  ),
};

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString('de-DE', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-border">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center">
                <span className="text-neon font-heading font-bold text-sm">V</span>
              </div>
              <span className="font-heading font-bold text-titanium text-lg tracking-tight">
                Vigorix<span className="text-neon">.</span>
              </span>
            </div>
            <p className="text-datagrey text-sm leading-relaxed max-w-xs">
              Digitales Wachstumssystem aus Konstanz – Website, Google-Sichtbarkeit, Online-Buchung und Automatisierung. Ein System für mehr Anfragen und Buchungen bei lokalen Unternehmen.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <span className="text-datagrey text-xs tracking-widest uppercase">Navigation</span>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-titanium/70 text-sm hover:text-neon transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <span className="text-datagrey text-xs tracking-widest uppercase">Kontakt</span>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-titanium/70 text-sm hover:text-neon transition-colors duration-300 break-all">
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-titanium/70 text-sm hover:text-neon transition-colors duration-300">
                {CONTACT_PHONE}
              </a>
              <span className="text-titanium/70 text-sm">Konstanz</span>
            </div>
          </div>

          {/* Social — Platzhalter, folgt später */}
          <div className="space-y-4">
            <span className="text-datagrey text-xs tracking-widest uppercase">Social Media</span>
            <div className="flex gap-3">
              {['instagram', 'tiktok'].map((key) => (
                <a
                  key={key}
                  href="#"
                  title="Folgt bald"
                  className="w-11 h-11 rounded-xl border border-dashed border-neon/20 flex items-center justify-center text-datagrey/50 cursor-default"
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
            <p className="text-datagrey/40 text-xs">Folgt in Kürze</p>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-titanium/60 text-xs font-mono">{time} CET · Konstanz</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <span className="text-datagrey text-xs">
            © {new Date().getFullYear()} Vigorix Digital. Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-6">
            <a href="/datenschutz" className="text-datagrey text-xs hover:text-neon transition-colors">Datenschutz</a>
            <a href="/impressum" className="text-datagrey text-xs hover:text-neon transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}