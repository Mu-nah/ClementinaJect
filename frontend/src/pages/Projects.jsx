import corporateImg from "../assets/corporate.jpg"
import familyImg from "../assets/family.jpg"
import shortstayImg from "../assets/shortstay.jpg"

export default function Projects() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Projects
        </h1>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* CARD */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={corporateImg}
              alt="Corporate Relocation"
              className="h-72 w-full object-cover transition duration-500 md:group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="
              absolute inset-0 
              bg-black/50 
              flex items-center justify-center 
              opacity-100 md:opacity-0 
              md:group-hover:opacity-100 
              transition duration-500
            ">
              <h2 className="text-white text-xl md:text-2xl font-semibold text-center px-4">
                Corporate Relocation
              </h2>
            </div>
          </div>


          {/* CARD */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={familyImg}
              alt="Family Relocation"
              className="h-72 w-full object-cover transition duration-500 md:group-hover:scale-110"
            />

            <div className="
              absolute inset-0 
              bg-black/50 
              flex items-center justify-center 
              opacity-100 md:opacity-0 
              md:group-hover:opacity-100 
              transition duration-500
            ">
              <h2 className="text-white text-xl md:text-2xl font-semibold text-center px-4">
                Family Relocation
              </h2>
            </div>
          </div>


          {/* CARD */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={shortstayImg}
              alt="Short-Term Housing"
              className="h-72 w-full object-cover transition duration-500 md:group-hover:scale-110"
            />

            <div className="
              absolute inset-0 
              bg-black/50 
              flex items-center justify-center 
              opacity-100 md:opacity-0 
              md:group-hover:opacity-100 
              transition duration-500
            ">
              <h2 className="text-white text-xl md:text-2xl font-semibold text-center px-4">
                Short-Term Housing
              </h2>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
