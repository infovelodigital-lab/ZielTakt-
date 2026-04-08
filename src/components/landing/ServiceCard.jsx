import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ title, description, features, number, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative glass-strong rounded-2xl overflow-hidden hover:border-neon/30 transition-all duration-700"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-neon/5 to-transparent pointer-events-none" />

      <div className="relative p-8 md:p-10 space-y-6">
        {/* Number */}
        <div className="text-neon/20 font-heading font-bold text-5xl absolute top-6 right-8">
          {number}
        </div>

        {/* Visual image */}
        {image && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-2">
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent z-10" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}

        <h3 className="font-heading font-bold text-titanium text-2xl tracking-tight group-hover:text-neon transition-colors duration-500">
          {title}
        </h3>

        <p className="text-datagrey leading-relaxed" style={{ lineHeight: '1.6' }}>
          {description}
        </p>

        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-datagrey">
              <span className="w-1 h-1 rounded-full bg-neon flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-neon text-sm font-medium group/link"
          >
            Mehr erfahren
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}