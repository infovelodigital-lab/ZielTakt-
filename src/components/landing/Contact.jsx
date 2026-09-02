import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionDivider from './SectionDivider';
import GlassButton from './GlassButton';

const CONTACT_EMAIL = 'info@vigorix.de';
const CONTACT_PHONE = '+49 151 50104908';
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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', betreff: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      const subject = e.detail?.subject;
      if (subject) setFormData((d) => ({ ...d, betreff: subject }));
    };
    window.addEventListener('preset-contact', handler);
    return () => window.removeEventListener('preset-contact', handler);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: formData.betreff ? `${formData.betreff} – ${formData.name}` : `Neue Anfrage von ${formData.name}`,
          from_name: 'Vigorix Digital – Kontaktformular',
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
        setFormData({ name: '', email: '', phone: '', betreff: '', message: '' });
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
                Betreff
              </label>
              <input
                type="text"
                value={formData.betreff}
                onChange={(e) => setFormData({ ...formData, betreff: e.target.value })}
                placeholder="z. B. neue Website, Partner-Anfrage …"
                className="w-full bg-transparent border-0 border-b border-border pb-3 text-titanium text-lg placeholder:text-datagrey/40 focus:outline-none focus:border-neon transition-colors duration-500"
              />
            </div>

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
              
                <a href={`mailto:${CONTACT_EMAIL}`}
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

              
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
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


              <a href={`https://wa.me/${CONTACT_PHONE.replace(/[^0-9]/g, '')}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 group"
>
  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:glow-blue transition-all duration-500">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-neon">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.254-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.222 1.36.19 1.871.115.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.075-.124-.272-.198-.57-.347M12.02 22.09h-.005a10.03 10.03 0 01-4.988-1.343l-.358-.213-3.71.973.99-3.617-.233-.372a9.99 9.99 0 01-1.531-5.316c0-5.52 4.494-10.014 10.019-10.014 2.674 0 5.187 1.043 7.078 2.934a9.94 9.94 0 012.93 7.083c-.003 5.52-4.496 10.014-10.02 10.014m8.53-18.55A11.94 11.94 0 0012.021 0C5.4 0 .001 5.4 0 12.037c0 2.122.554 4.194 1.606 6.02L0 24l6.096-1.601a11.97 11.97 0 005.925 1.51h.005c6.62 0 12.02-5.4 12.023-12.037a11.96 11.96 0 00-3.5-8.478" />
    </svg>
  </div>
  <div>
    <div className="text-datagrey text-xs tracking-widest uppercase">WhatsApp</div>
    <div className="text-titanium text-base font-medium group-hover:text-neon transition-colors">{CONTACT_PHONE}</div>
  </div>
</a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <div className="text-datagrey text-xs tracking-widest uppercase">Standort</div>
                  <div className="text-titanium text-base font-medium">Konstanz</div>
                </div>
              </div>
            </div>

            {/* Social — Platzhalter, folgt später */}
            <div className="space-y-3">
              <span className="text-datagrey text-xs tracking-widest uppercase">Folgen Sie uns</span>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  
                    <a key={link.label}
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