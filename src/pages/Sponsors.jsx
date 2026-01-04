import { theme } from '../styles/theme.js'
import sponsorPlaceholder from '../assets/placeholder/advertPH.svg'

export default function Sponsors() {
  return (
    <section className={`${theme.section.base} ${theme.section.spacing}`}>
      
      <h2 className="text-2xl md:text-4xl text-gold mb-12">
        Sponsorship & Partners
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="border border-gold/20 rounded-lg p-6 flex items-center justify-center hover:border-gold transition"
          >
            <img
              src={sponsorPlaceholder}
              alt="Sponsor"
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-white/70">
        Want to promote your business or brand? Contact us to become a partner.
      </p>
    </section>
  )
}
