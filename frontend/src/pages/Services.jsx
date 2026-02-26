import accommodationImg from "../assets/accommodation.jpg"
import relocationImg from "../assets/relocation.jpg"
import conciergeImg from "../assets/concierge.jpg"

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Services
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img src={accommodationImg} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-orange-600">
                Accommodation Support
              </h2>
              <p className="text-gray-600">
                Short and long-term housing solutions tailored
                to your needs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img src={relocationImg} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-orange-600">
                Relocation Assistance
              </h2>
              <p className="text-gray-600">
                Full relocation guidance from arrival
                to settlement.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img src={conciergeImg} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-orange-600">
                Concierge Services
              </h2>
              <p className="text-gray-600">
                Lifestyle support including errands
                and cleaning.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}