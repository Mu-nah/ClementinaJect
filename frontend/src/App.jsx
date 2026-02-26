import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}