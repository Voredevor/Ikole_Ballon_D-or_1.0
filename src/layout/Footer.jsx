import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative z-50 mt-24 bg-gradient-to-t from-black via-black/95 to-black/80 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

        <div>
          <h3 className="text-gold font-semibold tracking-wide mb-4">
            Ikole Ballon d’Or
          </h3>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Celebrating football excellence, culture, and legacy within Ikole City.
          </p>
        </div>

        <div>
          <h4 className="text-gold text-sm mb-4 uppercase tracking-widest">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/awards" className="hover:text-gold">Awards</Link></li>
            <li><Link to="/voting" className="hover:text-gold">Voting</Link></li>
            <li><Link to="/tickets" className="hover:text-gold">Tickets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm mb-4 uppercase tracking-widest">
            Event
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li>Venue: TBA</li>
            <li>Date: TBA</li>
            <li>Dress Code: Black · Gold · Elite</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Ikole Ballon d’Or
      </div>
    </footer>
  )
}
