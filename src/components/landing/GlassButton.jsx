import { motion } from 'framer-motion';

export default function GlassButton({ children, href, variant = 'primary', className = '' }) {
  const base = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-500 overflow-hidden group";
  
  const variants = {
    primary: "glass px-8 py-4 text-neon border border-neon/20 hover:border-neon/60 hover:glow-blue-strong text-base",
    secondary: "glass px-6 py-3 text-titanium border border-titanium/10 hover:border-neon/30 hover:text-neon text-sm",
  };

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-neon/0 via-neon/5 to-neon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl bg-neon/10" />
      <span className="relative z-10 tracking-wide">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
}