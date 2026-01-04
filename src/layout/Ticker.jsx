export default function Ticker() {
  const items = [
    'IKOLE BALLON D’OR 1.0 — THE GOLDEN ERA',
    'PUBLIC VOTING OPEN FOR SELECTED CATEGORIES',
    'BLACK · GOLD · ELITE FOOTBALL CHIC',
    'CELEBRATING FOOTBALL EXCELLENCE IN IKOLE CITY',
  ]

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-black border-t border-gold/30 overflow-hidden">
      
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Moving content */}
      <div className="whitespace-nowrap flex items-center gap-12 py-3 animate-ticker">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="text-xs uppercase tracking-[0.25em] text-gold/90"
          >
            {text}
            <span className="mx-6 text-white/30">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
