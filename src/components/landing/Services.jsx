import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import SectionDivider from './SectionDivider';

const IMAGE_WEB = "/__generating__/img_93b521257a1a.png";
const IMAGE_AI = "/__generating__/img_04ac21aa1bb9.png";
const IMAGE_AUTO = "/__generating__/img_7ddb85f53967.png";

const services = [
  {
    title: 'Webdesign',
    description: 'Maßgeschneiderte Webauftritte, die Ihre Marke auf höchstem Niveau repräsentieren. Pixel-perfekte Umsetzung mit modernster Technologie.',
    features: [
      'Responsive Design & Mobile-First',
      'UI/UX nach Schweizer Präzision',
      'Performance-optimierte Architektur',
      'SEO & Conversion-Optimierung',
    ],
    image: IMAGE_WEB,
  },
  {
    title: 'KI-Chatbots',
    description: 'Intelligente Konversationsagenten, die Ihre Kundenbetreuung revolutionieren. Maßgeschneiderte Algorithmen für maximale Effizienz.',
    features: [
      'Natürliche Sprachverarbeitung (NLP)',
      'Nahtlose System-Integration',
      'Lernfähige Dialogsysteme',
      'Mehrsprachiger Support',
    ],
    image: IMAGE_AI,
  },
  {
    title: 'Workflow-Automatisierung',
    description: 'Integrierte Workflows, die repetitive Prozesse eliminieren und Ihr Team auf strategische Aufgaben fokussieren lassen.',
    features: [
      'Prozessanalyse & Optimierung',
      'API-Integrationen',
      'Automatisierte Datenpipelines',
      'Echtzeit-Monitoring & Reports',
    ],
    image: IMAGE_AUTO,
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
            DAS NEURAL GRID.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-datagrey text-lg max-w-2xl leading-relaxed"
          >
            Drei Säulen digitaler Exzellenz — entwickelt mit Schweizer Präzision
            und modernster Technologie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}