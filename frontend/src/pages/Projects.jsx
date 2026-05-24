import { Link } from "react-router-dom"
import useInView from "../hooks/useInView"
import corporateImg from "../assets/corporate.jpg"
import familyImg from "../assets/family.jpg"
import shortstayImg from "../assets/shortstay.jpg"
import relocationImg from "../assets/relocation.jpg"
import accommodationImg from "../assets/accommodation.jpg"
import conciergeImg from "../assets/concierge.jpg"

const projects = [
  {
    img: corporateImg,
    title: "Corporate Relocation",
    tag: "Corporate",
    desc: "Helped a Lagos-based firm relocate six staff members to Abuja with full housing, airport coordination and orientation support.",
  },
  {
    img: familyImg,
    title: "Family Settlement",
    tag: "Family",
    desc: "A family of five moving from the UK. We handled everything from furnished housing to school searches and neighbourhood orientation.",
  },
  {
    img: shortstayImg,
    title: "Short-Term Housing",
    tag: "Accommodation",
    desc: "Placed over 30 NYSC corps members in safe, affordable short-stay accommodation close to their primary assignments.",
  },
  {
    img: relocationImg,
    title: "Individual Relocation",
    tag: "Relocation",
    desc: "Supported a senior civil servant relocating from Enugu. Secured housing, arranged moving logistics and provided full city orientation.",
  },
  {
    img: accommodationImg,
    title: "Long-term Housing",
    tag: "Accommodation",
    desc: "Connected a growing family with a long-term rental in Maitama. Handled negotiations, inspection and move-in coordination.",
  },
  {
    img: conciergeImg,
    title: "Concierge Support",
    tag: "Concierge",
    desc: "Provided ongoing concierge services for an expatriate client including errands, airport runs and event logistics over 12 months.",
  },
]

export default function Projects() {
  const [cardsRef, cardsVisible] = useInView()
  const [ctaRef,   ctaVisible]   = useInView()

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{ minHeight: "75vh" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-orange-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-28 text-center">
          <span className="hero-t1 inline-block mb-4 md:mb-5 text-xs font-semibold uppercase tracking-widest text-orange-400 border border-orange-400/40 rounded-full px-4 py-1.5">
            Our Work
          </span>
          <h1 className="hero-t2 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            People We Have<br /><span className="text-orange-500">Helped Call Abuja Home</span>
          </h1>
          <p className="hero-t3 mt-5 md:mt-6 text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real stories from individuals, families and organisations we have supported
            through the process of settling into the city.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section ref={cardsRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden reveal ${cardsVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="bg-black text-white py-20 px-6">
        <div className={`max-w-3xl mx-auto text-center reveal ${ctaVisible ? "visible" : ""}`}>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Want Your Story to Be Next?
          </h3>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            We have helped hundreds of people settle into Abuja. Let us help you too.
          </p>
          <Link
            to="/booking"
            className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-600/30 hover:shadow-xl"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}
