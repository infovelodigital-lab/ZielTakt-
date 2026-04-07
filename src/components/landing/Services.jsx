import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import SectionDivider from './SectionDivider';

const services = [
  {
    number: '01',
    title: 'Webdesign & Entwicklung',
    description: 'Wir entwickeln keine Standard-Webseiten, sondern digitale Erlebnisse. Hochperformant, sicher und optimiert für maximale Conversions.',
    features: ['Responsive Design & Mobile-First', 'UI/UX nach Schweizer Präzision', 'Performance-optimierte Architektur', 'SEO & Conversion-Optimierung'],
  },
  {
    number: '02',
    title: 'KI-Chatbots & Support',
    description: 'Intelligente Assistenten, die Ihre Kunden verstehen. Wir integrieren modernste LLMs, die Leads qualifizieren und Ihren Support entlasten.',
    features: ['Natürliche Sprachverarbeitung (NLP)', 'Lead-Qualifizierung automatisch', 'Nahtlose System-Integration', 'Mehrsprachiger Support'],
  },
  {
    number: '03',
    title: 'Workflow-Automatisierung',
    description: 'Wir eliminieren repetitive Aufgaben. Durch nahtlose API-Integrationen verbinden wir Ihre Tools zu einem hocheffizienten, autonomen System.',
    features: ['Prozessanalyse & Optimierung', 'API-Integrationen', 'Automatisierte Datenpipelines', 'Echtzeit-Monitoring & Reports'],
  },
  {
    number: '04',
    title: 'Branding & Identität',
    description: 'Einzigartige visuelle Identitäten, die Vertrauen schaffen. Vom Logo-Design bis zum Brand-Guide – wir geben Ihrer Marke ein Gesicht.',
    features: ['Logo & Corporate Design', 'Brand Strategy & Positionierung', 'Visuelle Identitätssysteme', 'Brand-Guide & Styleguide'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-void py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Unsere Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Unsere Leistungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-datagrey text-lg max-w-2xl leading-relaxed"
          >
            Drei Lösungen, die Ihr Unternehmen digital voranbringen: Mehr Kunden gewinnen, Prozesse automatisieren und professionell auftreten.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}