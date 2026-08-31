// CSS-only lightweight 3D gem — no WebGL. Rotates on desktop, floats on mobile,
// freezes on prefers-reduced-motion. Styling lives in src/index.css.
const FACES = [
  { t: 'translateZ(36px)', g: 'from-neon/80 to-neon-dark/70' },
  { t: 'rotateY(180deg) translateZ(36px)', g: 'from-neon-dark/70 to-neon/80' },
  { t: 'rotateY(90deg) translateZ(36px)', g: 'from-[#0066FF]/70 to-neon/70' },
  { t: 'rotateY(-90deg) translateZ(36px)', g: 'from-neon/60 to-[#0066FF]/70' },
  { t: 'rotateX(90deg) translateZ(36px)', g: 'from-neon/70 to-neon-dark/60' },
  { t: 'rotateX(-90deg) translateZ(36px)', g: 'from-neon-dark/60 to-neon/80' },
];

export default function HeroGem() {
  return (
    <div className="hero-gem-stage">
      <div className="hero-gem">
        {FACES.map((f, i) => (
          <div
            key={i}
            className={`hero-gem__face bg-gradient-to-br ${f.g}`}
            style={{ transform: f.t }}
          />
        ))}
      </div>
    </div>
  );
}