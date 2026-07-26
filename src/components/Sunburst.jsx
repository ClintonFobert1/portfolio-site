import { memo } from 'react'

/**
 * Radiating engraved sunburst — the emblematic framing device from DESIGN.md.
 * Renders in currentColor so it inherits ink/paper/void from its parent.
 */
function Sunburst({ rays = 72, innerRadius = 120, outerRadius = 480, rings = [140, 300, 460], className = '', style }) {
  const lines = Array.from({ length: rays }, (_, i) => {
    const angle = (i / rays) * Math.PI * 2
    const long = i % 2 === 0
    const r1 = innerRadius + (long ? 0 : 40)
    const r2 = outerRadius - (long ? 0 : 60)
    return {
      x1: Math.cos(angle) * r1,
      y1: Math.sin(angle) * r1,
      x2: Math.cos(angle) * r2,
      y2: Math.sin(angle) * r2,
    }
  })

  return (
    <svg
      viewBox="-500 -500 1000 1000"
      className={className}
      style={style}
      aria-hidden="true"
      fill="none"
    >
      {lines.map((l, i) => (
        <line key={i} {...l} stroke="currentColor" strokeWidth={i % 4 === 0 ? 2 : 1} />
      ))}
      {rings.map((r) => (
        <circle key={r} r={r} stroke="currentColor" strokeWidth="1" strokeDasharray={r % 2 === 0 ? '2 6' : undefined} />
      ))}
    </svg>
  )
}

export default memo(Sunburst)
