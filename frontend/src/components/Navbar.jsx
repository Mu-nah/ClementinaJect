import { Link } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img
            src={logo}
            alt="Everything Abuja Logo"
            className="h-20 md:h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-lg font-medium">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-orange-500 transition">
            Services
          </Link>
          <Link to="/projects" className="hover:text-orange-500 transition">
            Projects
          </Link>
          <Link
            to="/booking"
            className="bg-orange-600 px-6 py-3 rounded-full hover:bg-orange-700 transition shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6 px-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-6 text-lg font-medium">
          <Link to="/" onClick={closeMenu} className="hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" onClick={closeMenu} className="hover:text-orange-500">
            About
          </Link>
          <Link to="/services" onClick={closeMenu} className="hover:text-orange-500">
            Services
          </Link>
          <Link to="/projects" onClick={closeMenu} className="hover:text-orange-500">
            Projects
          </Link>
          <Link
            to="/booking"
            onClick={closeMenu}
            className="bg-orange-600 px-6 py-3 rounded-full text-center hover:bg-orange-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}