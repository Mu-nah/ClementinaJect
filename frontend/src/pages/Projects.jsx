import corporateImg from "../assets/corporate.jpg"
import familyImg from "../assets/family.jpg"
import shortstayImg from "../assets/shortstay.jpg"

export default function Projects() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Projects
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">

          <div className="group relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={corporateImg}
              className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h2 className="text-white text-xl font-semibold">
                Corporate Relocation
              </h2>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={familyImg}
              className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h2 className="text-white text-xl font-semibold">
                Family Relocation
              </h2>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={shortstayImg}
              className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h2 className="text-white text-xl font-semibold">
                Short-Term Housing
              </h2>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}