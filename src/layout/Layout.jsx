import Navbar from './Navbar'
import Footer from './Footer'
import Ticker from './Ticker'
import SidebarAds from './SidebarAds'
import { theme } from '../styles/theme'

export default function Layout({ children }) {
  return (
    <div className={`${theme.layout.base} ${theme.layout.light} min-h-screen`}>
      
      {/* Navbar always on top */}
      <Navbar />

      {/* Body */}
      <div className="relative flex">

        {/* Sidebar */}
        <aside className="hidden md:flex md:fixed w-64 sticky top-16 h-[calc(100vh-4rem)]">
          <SidebarAds />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-h-screen">
          {children}
        </main>

      </div>

      {/* Footer & Ticker */}
      <Footer />
      <Ticker />
    </div>
  )
}
