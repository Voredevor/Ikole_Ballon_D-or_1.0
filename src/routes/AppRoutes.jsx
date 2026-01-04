import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Awards from '../pages/Awards'
import Voting from '../pages/Voting'
import Tickets from '../pages/Tickets'
import Guests from '../pages/Guests'
import Performances from '../pages/Performances'
import Sponsors from '../pages/Sponsors'
import Logistics from '../pages/Logistics'

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
