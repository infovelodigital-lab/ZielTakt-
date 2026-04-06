import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionDivider from './SectionDivider';

const SOCIAL_BG = "https://media.base44.com/images/public/69d37f9848f9698967903442/505e96159_generated_0981956a.png";

const reviews = [
  {
    text: 'Veloxis hat unsere digitale Präsenz komplett transformiert. Die Ergebnisse haben unsere Erwartungen übertroffen.',
    author: 'Dr. Marcus Weber',
    role: 'CEO, TechVentures GmbH',
    stars: 5,
  },
  {
    text: 'Der KI-Chatbot hat unseren Kundensupport revolutioniert — 60% weniger Tickets bei höherer Zufriedenheit.',
    author: 'Anna Schreiber',
    role: 'Head of Operations, Meridian AG',
    stars: 5,
  },
  {
    text: 'Präzision, Geschwindigkeit und außergewöhnliche Qualität. Veloxis ist unser strategischer Digitalpartner.',
    author: 'Thomas Hartmann',
    role: 'Geschäftsführer, Bodensee Innovations',
    stars: 5,
  },
  {
    text: 'Die Workflow-Automatisierung spart uns 20 Stunden pro Woche. Der ROI war bereits nach einem Monat sichtbar.',
    author: 'Lisa Keller',
    role: 'COO, Alpine Solutions',
    stars: 5,
  },
];

function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-strong rounded-2xl p-8 space-y-5 hover:border-neon/20 transition-all duration-500 min-w-0"
    >
      <div className="flex gap-1">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-neon text-neon" />
        ))}
      </div>
      <p className="text-titanium text-base leading-relaxed" style={{ lineHeight: '1.6' }}>
        „{review.text}"
      </p>
      <div className="pt-2 border-t border-border">
        <div className="font-heading font-semibold text-titanium text-sm">{review.author}</div>
        <div className="text-datagrey text-xs mt-0.5">{review.role}</div>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section id="proof" className="relative bg-void py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img src={SOCIAL_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-void/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionDivider />

        <div className="pt-16 pb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon text-xs font-medium tracking-[0.3em] uppercase"
          >
            Social Proof
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-titanium tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            MOMENTUM WALL.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-datagrey text-lg max-w-2xl leading-relaxed"
          >
            Was unsere Partner über die Zusammenarbeit sagen.
          </motion.p>
        </div>

        {/* Scrolling marquee on mobile, grid on desktop */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden overflow-hidden">
          <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="w-[85vw] flex-shrink-0">
                <ReviewCard review={review} index={0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}