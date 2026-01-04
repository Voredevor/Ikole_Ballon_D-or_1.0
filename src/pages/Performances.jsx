import { theme } from '../styles/theme.js'
import personPlaceholder from '../assets/placeholder/portrait_PH.jpg'

export default function Performances() {
  return (
    <section className={`${theme.section.base} ${theme.section.spacing}`}>
      
      <h2 className="text-2xl md:text-4xl text-gold mb-12">
        Performances & Hosts
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="border border-gold/20 rounded-lg p-4 hover:border-gold transition"
          >
            <img
                src={personPlaceholder}
                alt="Performer"
                className="w-full h-40 sm:h-44 object-contain rounded-md mb-4"
              />
            <p className="text-dark/70 text-sm text-center font-bold">
              Performer / DJ — TBA
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 border border-gold/30 p-8 rounded-lg text-center">
        <p className="text-gold font-semibold mb-2">
          Ad Placement
        </p>
        <p className="text-white/60 text-sm">
          Promote your brand during the event
        </p>
      </div>
    </section>
  )
}
