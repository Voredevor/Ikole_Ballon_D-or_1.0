import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Awards from '../pages/Awards.jsx'
import Voting from '../pages/Voting.jsx'
import Tickets from '../pages/Tickets.jsx'
import Guests from '../pages/Guests.jsx'
import Performances from '../pages/Performances.jsx'
import Sponsors from '../pages/Sponsors.jsx'
import Logistics from '../pages/Logistics.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/voting" element={<Voting />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/guests" element={<Guests />} />
      <Route path="/performances" element={<Performances />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/logistics" element={<Logistics />} />
    </Routes>
  )
}
