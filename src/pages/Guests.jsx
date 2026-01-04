import { theme } from '../styles/theme'
import personPlaceholder from '../assests/placeholder/portrait_PH.jpg'

export default function Guests() {
  return (
    <section className={`${theme.section.base} ${theme.section.spacing}`}>
      
      <h2 className="text-2xl md:text-4xl text-gold mb-12">
        Honoured Guests & Presenters
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="border border-gold/20 rounded-lg p-4 text-center hover:border-gold transition"
          >
            <img
              src={personPlaceholder}
              alt="Guest"
              className="mb-4 w-full h-44 object-contain rounded-md"
            />
            <p className="text-sm text-dark/70 text font-bold">
              Name TBA
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
