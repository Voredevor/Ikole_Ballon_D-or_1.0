import { theme } from '../styles/theme'

export default function ComingSoonSection() {
  return (
    <section
      className={`
        relative min-h-screen flex items-center justify-center
        ${theme.section.base}
      `}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-extrabold tracking-widest text-gold uppercase">
          Coming Soon
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-white/70 text-base sm:text-lg leading-relaxed">
          The Ikole Ballon d’Or experience is still being crafted.
          Full nominee lists, voting, performances, and partnerships
          will be unveiled officially.
        </p>

        <div className="mt-10 text-xs uppercase tracking-[0.3em] text-white/50">
          Golden Era • Launching Soon
        </div>
      </div>
    </section>
  )
}
