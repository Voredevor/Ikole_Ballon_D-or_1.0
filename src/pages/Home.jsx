import { Link } from 'react-router-dom'
import { theme } from '../styles/theme.js'

export default function Home() {
  return (
    <section
      className={`${theme.section.base} mt-3 min-h-[90vh] flex items-center relative overflow-hidden`}
    >
      {/* Cinematic background layers */}
      <div className="absolute inset-0 -z-20 bg-black" />
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-gold/20 via-transparent to-black" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Whisper line */}
        <p className="text-xs uppercase tracking-[0.4em] text-gold/80 mb-6 animate-fadeIn">
          Welcome to the Golden Era
        </p>

        {/* Hero title */}
        <h1
          className={`${theme.heading.primary} leading-tight animate-rise`}
        >
          IKOLE <br />
          <span className="text-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]">
            BALLON D’OR
          </span>{' '}
          <span className="text-white/80">1.0</span>
        </h1>

        {/* Supporting line */}
        <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto animate-fadeInSlow">
          An elite celebration of football excellence, culture, and legacy —
          honouring the players and voices shaping Ikole City.
        </p>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6 animate-riseSlow">
          <Link
            to="/voting"
            className="bg-gold text-black font-semibold px-10 py-4 rounded-md tracking-wide
                       hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]
                       hover:-translate-y-0.5 transition-all duration-300"
          >
            Vote Now
          </Link>

          <Link
            to="/awards"
            className="border border-gold/60 text-gold px-10 py-4 rounded-md tracking-wide
                       hover:bg-gold hover:text-black transition-all duration-300"
          >
            View Awards
          </Link>
        </div>
      </div>
    </section>
  )
}
