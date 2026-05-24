import { Link } from "react-router-dom"
import { FaChevronDown } from "react-icons/fa"
import useInView from "../hooks/useInView"
import heroImg from "../assets/relocation.jpg"
import aboutImg from "../assets/about.jpg"
import accommodationImg from "../assets/accommodation.jpg"
import conciergeImg from "../assets/concierge.jpg"
import corporateImg from "../assets/corporate.jpg"
import familyImg from "../assets/family.jpg"
import shortstayImg from "../assets/shortstay.jpg"
import relocationImg from "../assets/relocation.jpg"

const services = [
  {
    title: "Airport Coordination",
    description: "We meet you at the airport and make sure your first hours in Abuja are smooth and stress-free.",
    img: conciergeImg,
  },
  {
    title: "Short Stay Accommodation",
    description: "Comfortable, fully furnished apartments for short visits. No long-term commitment needed.",
    img: shortstayImg,
  },
  {
    title: "Long-term Housing",
    description: "We help you find and secure the right home for your extended stay in the city.",
    img: accommodationImg,
  },
  {
    title: "Relocation Support",
    description: "Full relocation guidance from packing up to settling in. We handle the heavy lifting.",
    img: relocationImg,
  },
  {
    title: "Corporate Services",
    description: "Structured housing and logistics solutions built around the needs of corporate clients.",
    img: corporateImg,
  },
  {
    title: "Family Relocation",
    description: "We take extra care when families are involved, making sure everyone feels safe and at home.",
    img: familyImg,
  },
]

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "5+",   label: "Years in Business" },
  { value: "6",    label: "Services Offered" },
  { value: "24/7", label: "Support Available" },
]

export default function Home() {
  const [statsRef,    statsVisible]    = useInView()
  const [aboutRef,    aboutVisible]    = useInView()
  const [servicesRef, servicesVisible] = useInView()
  const [ctaRef,      ctaVisible]      = useInView()

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-orange-950" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:py-28">
          <span className="hero-t1 inline-block mb-4 md:mb-5 text-xs font-semibold uppercase tracking-widest text-orange-400 border border-orange-400/40 rounded-full px-4 py-1.5">
            Abuja's Trusted Relocation Partner
          </span>
          <h1 className="hero-t2 text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight max-w-3xl">
            Making Abuja<br />Feel Like <span className="text-orange-500">Home</span>
          </h1>
          <p className="hero-t3 mt-5 md:mt-6 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            We help individuals, families and professionals relocate to Abuja with ease.
            Airport coordination, accommodation, relocation support and concierge services.
            We cover it all.
          </p>
          <div className="hero-t4 mt-8 md:mt-10 flex flex-wrap gap-4">
            <Link
              to="/booking"
              className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-orange-600/40 hover:shadow-2xl"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="border border-white/30 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="hero-t4 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <FaChevronDown className="scroll-dot text-orange-500 text-xs" />
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="bg-orange-600 py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal ${statsVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="text-4xl font-extrabold text-white">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-orange-100 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section ref={aboutRef} className="py-16 md:py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className={`reveal-left ${aboutVisible ? "visible" : ""}`}>
            <img
              src={aboutImg}
              alt="About Everything Abuja"
              className="rounded-3xl w-full h-52 sm:h-64 md:h-[420px] object-cover shadow-2xl"
            />
          </div>
          <div
            className={`reveal-right ${aboutVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Who We Are</span>
            <h2 className="mt-3 text-4xl font-bold leading-snug">
              We Know Abuja Inside Out
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Everything Abuja has been helping people settle into the city for years.
              Whether you are moving for work, family or a fresh start, our team knows
              exactly what you need and where to find it.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              When you work with us, you are not just a booking. We are hands-on,
              responsive and genuinely invested in making your move feel right.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-orange-500 font-semibold hover:underline"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-14 reveal ${servicesVisible ? "visible" : ""}`}>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">What We Offer</span>
            <h2 className="mt-3 text-4xl font-bold">How We Help</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Pick what you need or let us put together the right combination for your situation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`group rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 hover:border-orange-500/60 reveal ${servicesVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${0.05 + i * 0.1}s` }}
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-block border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white transition-all duration-300 px-8 py-3 rounded-2xl font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-24 border-t border-gray-800">
        <div className={`max-w-4xl mx-auto px-6 text-center reveal ${ctaVisible ? "visible" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ready When <span className="text-orange-500">You Are</span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg max-w-xl mx-auto">
            Book a free consultation and tell us about your move. We will take it from there.
          </p>
          <Link
            to="/booking"
            className="inline-block mt-10 bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-orange-600/40 hover:shadow-2xl"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}
