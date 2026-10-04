import { useState, useEffect } from 'react';

const CONTACT_EMAIL = 'info@zieltakt.de';
const CONTACT_PHONE = '+41 77 277 41 49';

const navLinks = [
  { label: 'Leistungen', href: '#services' },
  { label: 'Über uns', href: '#about' },
  { label: 'Einzugsgebiet', href: '#area' },
  { label: 'Kontakt', href: '#contact' },
];

// Platzhalter für spätere Social-Media-Links (Instagram, TikTok)

const socialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
      <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16.3" cy="7.7" r="1" fill="#fff" />
    </svg>
  ),
      tiktok: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect width="24" height="24" rx="6" fill="#000" />
      <g transform="translate(4.5 4.5) scale(0.625)">
        <path fill="#25F4EE" transform="translate(-0.6 -0.6)" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        <path fill="#FE2C55" transform="translate(0.6 0.6)" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        <path fill="#FFFFFF" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </g>
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
              <img src="/zieltakt-logo.png" alt="ZielTakt" width="1082" height="229" className="h-7 w-auto" />
            </div>
            <p className="text-datagrey text-sm leading-relaxed max-w-xs">
              Digitale Growth-Systeme für lokale Unternehmen am Bodensee: Website, Sichtbarkeit, Anfragen und Wachstum aus einer Hand.
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
              <span className="text-titanium/70 text-sm">Konstanz, Bodensee</span>
            </div>
          </div>

          {/* Social — Platzhalter, folgt später */}
          <div className="space-y-4">
            <span className="text-datagrey text-xs tracking-widest uppercase">Social Media</span>
            <div className="flex gap-3">
              {['instagram', 'tiktok'].map((key) => (
                <a
                  key={key}
                  href={key === 'instagram' ? 'DEIN-INSTAGRAM-LINK' : 'DEIN-TIKTOK-LINK'}
                  target="_blank"
                  title=""
                  className="w-11 h-11 rounded-xl border border-dashed border-neon/20 flex items-center justify-center text-datagrey cursor-default"
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
            <p className="text-datagrey text-xs"></p>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-titanium/60 text-xs font-mono">{time} CET · Konstanz</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <span className="text-datagrey text-xs">
            © {new Date().getFullYear()} ZielTakt. Alle Rechte vorbehalten.
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