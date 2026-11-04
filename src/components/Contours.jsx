// Procedural topographic contours, a nod to IIT Mandi's Himalayan setting.
// Deterministic so the drawing is identical on every render.

const peaks = [
  { cx: 760, cy: 250, levels: 13, base: 26, step: 30, seed: 1.3 },
  { cx: 1120, cy: 520, levels: 9, base: 20, step: 34, seed: 4.1 },
];

const ringPath = ({ cx, cy, base, step, seed }, level) => {
  const points = [];
  const steps = 96;
  const radius = base + level * step;

  for (let i = 0; i <= steps; i += 1) {
    const t = (i / steps) * Math.PI * 2;
    const wobble =
      Math.sin(t * 2 + seed) * (6 + level * 2.2) +
      Math.sin(t * 3 + seed * 2.1 + level * 0.15) * (4 + level * 1.4) +
      Math.cos(t * 5 + seed * 0.7) * (2 + level * 0.6);
    const r = radius + wobble;
    points.push([cx + Math.cos(t) * r * 1.35, cy + Math.sin(t) * r]);
  }

  return `M${points.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join("L")}Z`;
};

const rings = peaks.flatMap((peak, p) =>
  Array.from({ length: peak.levels }, (_, level) => ({
    key: `${p}-${level}`,
    d: ringPath(peak, level),
    delay: level * 0.09 + p * 0.3,
    highlight: p === 0 && level === 6,
  })),
);

const Contours = ({ className = "" }) => (
  <svg
    viewBox="0 0 1400 760"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    className={className}
  >
    {rings.map(({ key, d, delay, highlight }) => (
      <path
        key={key}
        d={d}
        pathLength="1"
        fill="none"
        stroke={highlight ? "var(--color-acm-light)" : "rgba(255,255,255,0.14)"}
        strokeWidth={highlight ? 1.6 : 1}
        className="contour-line"
        style={{ animationDelay: `${delay}s` }}
      />
    ))}
  </svg>
);

export default Contours;
