import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Check } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('veloxis-cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem('veloxis-cookie-consent', choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[200] px-4 md:px-6 pb-4 md:pb-6"
        >
          <div className="max-w-4xl mx-auto glass-strong rounded-2xl p-6 md:p-7 flex flex-col md:flex-row items-center gap-5 md:gap-6">
            <div className="flex items-start gap-3 flex-1 text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-neon" />
              </div>
              <p className="text-datagrey text-sm leading-relaxed">
                Diese Website verwendet ausschließlich technisch notwendige Cookies, damit alles reibungslos funktioniert. Es erfolgt kein Tracking. Mehr dazu in der{' '}
                <a href="/datenschutz" className="text-neon hover:underline">Datenschutzerklärung</a>.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => handleChoice('declined')}
                className="px-5 py-3 rounded-full text-sm font-medium text-datagrey border border-border hover:border-neon/30 hover:text-titanium transition-all duration-300"
              >
                Ablehnen
              </button>
              <button
                onClick={() => handleChoice('accepted')}
                className="px-6 py-3 rounded-full text-sm font-semibold text-void bg-neon glow-blue hover:glow-blue-strong flex items-center gap-2 transition-all duration-300"
              >
                <Check className="w-4 h-4" strokeWidth={3} />
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}