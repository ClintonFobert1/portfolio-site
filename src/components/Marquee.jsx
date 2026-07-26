/** Infinite scrolling text band — gig-poster energy. */
export default function Marquee({ items, reverse = false, className = '', separator = '✦' }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-6 md:px-10">{item}</span>
          <span className="text-[0.5em] opacity-70">{separator}</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className={`flex overflow-hidden select-none ${className}`} aria-hidden="true">
      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {row}
        {row}
      </div>
    </div>
  )
}
