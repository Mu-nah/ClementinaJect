import { Link } from "react-router-dom"
import useInView from "../hooks/useInView"
import accommodationImg from "../assets/accommodation.jpg"
import relocationImg from "../assets/relocation.jpg"
import conciergeImg from "../assets/concierge.jpg"
import corporateImg from "../assets/corporate.jpg"
import familyImg from "../assets/family.jpg"
import shortstayImg from "../assets/shortstay.jpg"

const services = [
  {
    title: "Accommodation Support",
    img: accommodationImg,
    desc: "Short-term and long-term housing tailored to your comfort, lifestyle and budget. We find the right fit, not just any fit.",
  },
  {
    title: "Relocation Assistance",
    img: relocationImg,
    desc: "Complete relocation guidance from your first day in the city to the point where Abuja finally starts to feel familiar.",
  },
  {
    title: "Concierge Services",
    img: conciergeImg,
    desc: "Errands, coordination, airport pickup and premium lifestyle support. Think of us as the person who knows how everything works.",
  },
  {
    title: "Corporate Services",
    img: corporateImg,
    desc: "Structured housing and logistics packages built around how companies move and settle their people. Clean, efficient and reliable.",
  },
  {
    title: "Family Relocation",
    img: familyImg,
    desc: "When a whole family is making the move, we bring extra care to the process. Schools, neighbourhoods, routines. We think it all through.",
  },
  {
    title: "Short Stay Accommodation",
    img: shortstayImg,
    desc: "Fully furnished options for short visits or trial stays. Comfortable, central and ready when you are.",
  },
]

export default function Services() {
  const [cardsRef, cardsVisible] = useInView()
  const [ctaRef,   ctaVisible]   = useInView()

  return (
    <div className="bg-white">

      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{ minHeight: "75vh" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-orange-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-28 text-center">
          <span className="hero-t1 inline-block mb-4 md:mb-5 text-xs font-semibold uppercase tracking-widest text-orange-400 border border-orange-400/40 rounded-full px-4 py-1.5">
            What We Offer
          </span>
          <h1 className="hero-t2 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Everything You Need,<br /><span className="text-orange-500">Handled Properly</span>
          </h1>
          <p className="hero-t3 mt-5 md:mt-6 text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whatever you need to feel at home in Abuja, we have it covered.
            From the day you land to the day you feel fully settled.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section ref={cardsRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden reveal ${cardsVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="w-8 h-1 bg-orange-500 rounded mb-4" />
                <h2 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <Link
                  to="/booking"
                  className="inline-block text-orange-600 font-semibold hover:underline text-sm"
                >
                  Book a Consultation →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="bg-gray-50 py-20 px-6">
        <div className={`max-w-3xl mx-auto text-center reveal ${ctaVisible ? "visible" : ""}`}>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Where to Start?
          </h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Tell us a little about your situation and we will point you in the right direction.
            No pressure, just a conversation.
          </p>
          <Link
            to="/booking"
            className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-600/30 hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}
