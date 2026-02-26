import accommodationImg from "../assets/accommodation.jpg"
import relocationImg from "../assets/relocation.jpg"
import conciergeImg from "../assets/concierge.jpg"
import { Link } from "react-router-dom"

export default function Services() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative bg-black text-white py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent blur-3xl opacity-40"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Our Services
          </h1>
          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            Premium relocation and lifestyle solutions tailored for you.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* CARD */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={accommodationImg}
                alt="Accommodation Support"
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                Accommodation Support
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Short-term and long-term housing solutions tailored
                to your comfort, lifestyle, and budget.
              </p>
              <Link
                to="/booking"
                className="inline-block text-orange-600 font-semibold hover:underline"
              >
                Book Consultation →
              </Link>
            </div>
          </div>

          {/* CARD */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={relocationImg}
                alt="Relocation Assistance"
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                Relocation Assistance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Complete relocation guidance from airport arrival
                to full settlement and orientation.
              </p>
              <Link
                to="/booking"
                className="inline-block text-orange-600 font-semibold hover:underline"
              >
                Book Consultation →
              </Link>
            </div>
          </div>

          {/* CARD */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={conciergeImg}
                alt="Concierge Services"
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                Concierge Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lifestyle support including errands,
                cleaning, coordination, and premium assistance.
              </p>
              <Link
                to="/booking"
                className="inline-block text-orange-600 font-semibold hover:underline"
              >
                Book Consultation →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Relocate?
        </h3>
        <p className="text-gray-600 mb-8 text-lg">
          Let us handle the details while you focus on settling comfortably.
        </p>
        <Link
          to="/booking"
          className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full transition shadow-lg"
        >
          Schedule a Consultation
        </Link>
      </section>

    </div>
  )
}
