import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Send, ArrowUpRight } from 'lucide-react';
import SectionDivider from './SectionDivider';
import GlassButton from './GlassButton';

const socialLinks = [
{
  label: 'Instagram',
  icon:
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>,

  href: '#'
},
{
  label: 'TikTok',
  icon:
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.47V13a8.28 8.28 0 005.58 2.15V11.7a4.85 4.85 0 01-3.59-1.58V6.69h3.59z" />
      </svg>,

  href: '#'
}];


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.integrations.Core.SendEmail({
      to: 'info@veloxis-digital.com',
      subject: `Neue Anfrage von ${formData.name}`,
      body: `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`,
    });
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: '', email: '', message: '' });
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
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase">
            
            Kontakt
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            
            LASSEN SIE UNS SPRECHEN.
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
            className="space-y-8">
            
            {[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Ihr Name' },
            { name: 'email', label: 'E-Mail', type: 'email', placeholder: 'ihre@email.de' }].
            map((field) =>
            <div key={field.name} className="group">
                <label className="text-datagrey text-xs tracking-widest uppercase block mb-3">
                  {field.label}
                </label>
                <input
                type={field.type}
                value={formData[field.name]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                placeholder={field.placeholder}
                required
                className="w-full bg-transparent border-0 border-b border-border pb-3 text-titanium text-lg placeholder:text-datagrey/40 focus:outline-none focus:border-neon transition-colors duration-500" />
              
              </div>
            )}

            <div className="group">
              <label className="text-datagrey text-xs tracking-widest uppercase block mb-3">
                Nachricht
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Erzählen Sie uns von Ihrem Projekt..."
                required
                rows={4}
                className="w-full bg-transparent border-0 border-b border-border pb-3 text-titanium text-lg placeholder:text-datagrey/40 focus:outline-none focus:border-neon transition-colors duration-500 resize-none" />
              
            </div>

            <div className="pt-4">
              {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-full px-8 py-4 text-neon text-center font-medium glow-blue">
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

          {/* Social & info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-12">
            
            <div className="space-y-4">
              <p className="text-datagrey text-lg leading-relaxed" style={{ lineHeight: '1.6' }}>
                Bereit für den nächsten Schritt? Kontaktieren Sie uns für eine
                kostenlose Erstberatung und erfahren Sie, wie wir Ihr digitales
                Potenzial entfalten können.
              </p>
              <a
                href="mailto:info@veloxis-digital.com"
                className="text-neon text-lg font-medium hover:glow-text transition-all duration-500 inline-flex items-center gap-2"
              >
                info@veloxis-digital.com
              </a>
            </div>

            <div className="space-y-4">
              <span className="text-datagrey text-xs tracking-widest uppercase">Folgen Sie uns</span>
              <div className="flex gap-4">
                {socialLinks.map((link) =>
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass rounded-xl flex items-center justify-center text-datagrey hover:text-neon hover:glow-blue hover:border-neon/30 transition-all duration-500 group"
                  style={{ perspective: '400px' }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) / 8;
                    const y = (e.clientY - rect.top - rect.height / 2) / 8;
                    e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)';
                  }}>
                  
                    {link.icon}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}