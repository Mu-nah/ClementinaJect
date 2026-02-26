import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20">
          
          <h1 className="text-5xl md:text-6xl font-bold">
            Making Abuja Easy, Safe & Stress-Free
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            We provide relocation assistance, short & long-term accommodation,
            airport coordination and concierge services.
          </p>

          <Link
            to="/booking"
            className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-2xl text-lg"
          >
            Book Consultation
          </Link>
        </div>
      </section>


      {/* ABOUT PREVIEW */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-6">
            About Us
          </h2>

          <p className="text-gray-300 max-w-3xl">
            Everything Abuja provides trusted relocation and concierge
            services to help individuals and families settle comfortably
            in Abuja. We make the transition smooth, safe and stress-free.
          </p>

          <Link
            to="/about"
            className="inline-block mt-6 text-orange-500 hover:underline"
          >
            Read More →
          </Link>

        </div>
      </section>


      {/* SERVICES PREVIEW */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-6">
            Services
          </h2>

          <p className="text-gray-300 max-w-3xl">
            We offer accommodation support, relocation services,
            airport pickup coordination and concierge assistance
            to make living in Abuja easy and comfortable.
          </p>

          <Link
            to="/services"
            className="inline-block mt-6 text-orange-500 hover:underline"
          >
            Read More →
          </Link>

        </div>
      </section>


      {/* PROJECTS PREVIEW */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-6">
            Projects
          </h2>

          <p className="text-gray-300 max-w-3xl">
            We have supported families, professionals and organizations
            relocating to Abuja through tailored accommodation and
            relocation solutions.
          </p>

          <Link
            to="/projects"
            className="inline-block mt-6 text-orange-500 hover:underline"
          >
            Read More →
          </Link>

        </div>
      </section>

    </div>
  )
}
