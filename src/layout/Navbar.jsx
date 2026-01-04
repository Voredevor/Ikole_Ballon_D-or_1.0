import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo/logo_no_bg.png'
import { useState } from 'react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Awards', path: '/awards' },
  { name: 'Voting', path: '/voting' },
  { name: 'Tickets', path: '/tickets' },
  { name: 'Guests', path: '/guests' },
  { name: 'Performances', path: '/performances' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Logistics', path: '/logistics' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-black/95 backdrop-blur border-b border-gold/30 sticky top-0 z-50 animate-fadeInDown">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Title with animation */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Ikole Ballon d’Or Logo"
            className="h-10 w-auto transition-transform duration-500 group-hover:scale-110 animate-fadeInLeft"
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 font-extrabold tracking-wider text-xl md:text-2xl drop-shadow-lg animate-fadeInLeft">
            Ikole Ballon d’Or
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm uppercase tracking-wide font-semibold transition-all duration-200 px-2 py-1
                ${isActive ? 'text-gold after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gold after:rounded' : 'text-white/80 hover:text-gold hover:scale-110'}
                `
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gold focus:outline-none p-2 rounded-full border border-gold/40 shadow transition hover:bg-gold/10 active:scale-95 animate-fadeInRight"
          aria-label="Toggle Menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="currentColor"/>
            <rect y="11" width="24" height="2" rx="1" fill="currentColor"/>
            <rect y="17" width="24" height="2" rx="1" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-black border-t border-gold/20 px-4 pb-4 animate-fadeInDown">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-base uppercase tracking-wide font-semibold transition-all duration-200
                ${isActive ? 'text-gold' : 'text-white/80 hover:text-gold hover:scale-105'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
      {/* Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-24px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInDown { animation: fadeInDown 0.7s cubic-bezier(.4,0,.2,1) both; }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-24px);}
            to { opacity: 1; transform: translateX(0);}
          }
          .animate-fadeInLeft { animation: fadeInLeft 0.7s cubic-bezier(.4,0,.2,1) both; }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(24px);}
            to { opacity: 1; transform: translateX(0);}
          }
          .animate-fadeInRight { animation: fadeInRight 0.7s cubic-bezier(.4,0,.2,1) both; }
        `}
      </style>
    </header>
  )
}