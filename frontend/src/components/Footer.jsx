import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp 
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Everything Abuja Logo"
              className="h-16 mb-6"
            />
            <p className="text-gray-400 leading-relaxed">
              Making Abuja easy, safe and stress-free.
              Your trusted relocation, accommodation
              and concierge partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition">About</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition">Services</Link></li>
              <li><Link to="/projects" className="hover:text-orange-500 transition">Projects</Link></li>
              <li><Link to="/booking" className="hover:text-orange-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Abuja, Nigeria</li>
              <li>info@everythingabuja.com</li>
              <li>+234 000 000 0000</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Connect With Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-[#1877F2] p-3 rounded-full hover:scale-110 transition transform"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>

              <a
                href="#"
                className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition transform"
              >
                <FaInstagram className="text-white text-lg" />
              </a>

              <a
                href="#"
                className="bg-[#0A66C2] p-3 rounded-full hover:scale-110 transition transform"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>

              <a
                href="#"
                className="bg-[#25D366] p-3 rounded-full hover:scale-110 transition transform"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Everything Abuja Limited. All rights reserved.
        </div>

      </div>
    </footer>
  )
}