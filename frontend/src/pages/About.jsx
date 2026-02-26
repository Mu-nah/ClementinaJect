import aboutImg from "../assets/about.jpg"

export default function About() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-black text-white py-28 px-6 text-center overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent blur-3xl opacity-40"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            About Everything Abuja
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Your trusted relocation and lifestyle partner in Abuja.
            We make every transition seamless and stress-free.
          </p>
        </div>
      </section>


      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="relative group">
          <img
            src={aboutImg}
            alt="About Everything Abuja"
            className="rounded-3xl shadow-2xl object-cover w-full h-[350px] sm:h-[420px] md:h-[500px] transition duration-500 group-hover:scale-105"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 rounded-3xl bg-black/10 group-hover:bg-black/0 transition duration-500"></div>
        </div>


        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Making Abuja Feel Like Home
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Everything Abuja Limited provides premium accommodation,
            relocation, and concierge services designed to make
            every arrival smooth and comfortable.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            From airport coordination to long-term housing and
            full relocation support, we simplify the entire
            settlement process so you can focus on what matters.
          </p>

          <div className="mt-8">
            <a
              href="/services"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition shadow-lg"
            >
              Explore Our Services
            </a>
          </div>
        </div>

      </section>


      {/* VALUE SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Us
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="font-semibold text-xl mb-4">
                Trusted Network
              </h4>
              <p className="text-gray-600">
                Strong partnerships across Abuja for reliable housing
                and lifestyle services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="font-semibold text-xl mb-4">
                Seamless Process
              </h4>
              <p className="text-gray-600">
                From arrival to full settlement, we manage
                every detail professionally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="font-semibold text-xl mb-4">
                Personalized Support
              </h4>
              <p className="text-gray-600">
                Tailored services designed to match your
                lifestyle and needs.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
