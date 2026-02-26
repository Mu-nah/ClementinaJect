import aboutImg from "../assets/about.jpg"

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Everything Abuja
        </h1>
        <p className="mt-6 text-gray-300 text-lg">
          Your trusted relocation partner in Abuja.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Everything Abuja"
            className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Making Abuja Feel Like Home
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Everything Abuja Limited provides accommodation,
            relocation, and concierge services designed to make
            every transition smooth and stress-free.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From airport arrival to long-term housing,
            we simplify the entire settlement process.
          </p>
        </div>

      </section>
    </div>
  )
}