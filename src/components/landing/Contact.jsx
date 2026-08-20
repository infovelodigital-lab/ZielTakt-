import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionDivider from './SectionDivider';
import GlassButton from './GlassButton';

const CONTACT_EMAIL = 'info.velodigital@gmail.com';
const CONTACT_PHONE = '+49 151 23456789';
const WEB3FORMS_ACCESS_KEY = 'b120e0f3-17e8-4071-b046-227eda749ae6';
 
// Platzhalter für spätere Social-Media-Links (Instagram, TikTok)
const socialLinks = [
  { label: 'Instagram', icon: 'instagram', href: '#' },
  { label: 'TikTok', icon: 'tiktok', href: '#' },
];

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Neue Anfrage von ${formData.name}`,
          from_name: 'Veloxis Digital – Kontaktformular',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-void py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Kontakt
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Lassen Sie uns sprechen.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {[
              { name: 'name', label: 'Name', type: 'text', placeholder: 'Ihr Name' },
              { name: 'email', label: 'E-Mail', type: 'email', placeholder: 'ihre@email.de' },
              { name: 'phone', label: 'Telefon', type: 'tel', placeholder: '+49 151 ...' },
            ].map((field) => (
              <div key={field.name} className="group">
                <label className="text-datagrey text-xs tracking-widest uppercase block mb-3">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border-0 border-b border-border pb-3 text-titanium text-lg placeholder:text-datagrey/40 focus:outline-none focus:border-neon transition-colors duration-500"
                />
              </div>
            ))}

            <div className="group">
              <label className="text-datagrey text-xs tracking-widest uppercase block mb-3">
                Nachricht
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Erzählen Sie uns von Ihrem Projekt..."
                rows={4}
                className="w-full bg-transparent border-0 border-b border-border pb-3 text-titanium text-lg placeholder:text-datagrey/40 focus:outline-none focus:border-neon transition-colors duration-500 resize-none"
              />
            </div>

            <div className="pt-4">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-full px-8 py-4 text-neon text-center font-medium glow-blue"
                >
                  ✓ Nachricht gesendet
                </motion.div>
              ) : (
                <GlassButton disabled={loading}>
                  <span className="flex items-center gap-2">
                    {loading ? 'Wird gesendet…' : 'Nachricht senden'}
                    <Send className="w-4 h-4" />
                  </span>
                </GlassButton>
              )}
            </div>
          </motion.form>

          {/* Contact info & socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-10"
          >
            <p className="text-datagrey text-lg leading-relaxed" style={{ lineHeight: '1.6' }}>
              Bereit für den nächsten Schritt? Kontaktieren Sie uns für eine kostenlose Erstberatung – wir melden uns in der Regel am selben Tag bei Ihnen.
            </p>

            <div className="space-y-5">
              
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:glow-blue transition-all duration-500">
                  <Mail className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <div className="text-datagrey text-xs tracking-widest uppercase">E-Mail</div>
                  <div className="text-titanium text-base font-medium group-hover:text-neon transition-colors">{CONTACT_EMAIL}</div>
                </div>
              </a>

              
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:glow-blue transition-all duration-500">
                  <Phone className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <div className="text-datagrey text-xs tracking-widest uppercase">Telefon</div>
                  <div className="text-titanium text-base font-medium group-hover:text-neon transition-colors">{CONTACT_PHONE}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <div className="text-datagrey text-xs tracking-widest uppercase">Standort</div>
                  <div className="text-titanium text-base font-medium">Konstanz, Bodensee</div>
                </div>
              </div>
            </div>

            {/* Social — Platzhalter, folgt später */}
            <div className="space-y-3">
              <span className="text-datagrey text-xs tracking-widest uppercase">Folgen Sie uns</span>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  
                    key={link.label}
                    href={link.href}
                    title="Folgt bald"
                    className="w-12 h-12 rounded-xl border border-dashed border-neon/20 flex items-center justify-center text-datagrey/50 cursor-default"
                  >
                    {socialIcons[link.icon]}
                  </a>
                ))}
              </div>
              <p className="text-datagrey/40 text-xs">Instagram &amp; TikTok folgen in Kürze.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}// updated