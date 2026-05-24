import { Link } from "react-router-dom"
import { FaShieldAlt, FaCogs, FaHeart } from "react-icons/fa"
import useInView from "../hooks/useInView"
import aboutImg from "../assets/about.jpg"

const values = [
  {
    icon: <FaShieldAlt className="text-orange-500 text-2xl" />,
    title: "Trusted Network",
    desc: "Years of relationships across Abuja mean we know the right people, the right places and how to get things done quickly.",
  },
  {
    icon: <FaCogs className="text-orange-500 text-2xl" />,
    title: "Seamless Process",
    desc: "We manage every step from arrival to full settlement. No loose ends, no back-and-forth, no surprises.",
  },
  {
    icon: <FaHeart className="text-orange-500 text-2xl" />,
    title: "Personal Touch",
    desc: "We treat every client like they are our only one. Your situation shapes how we work, not the other way round.",
  },
]

export default function About() {
  const [contentRef, contentVisible] = useInView()
  const [valuesRef,  valuesVisible]  = useInView()

  return (
    <div className="bg-white">

      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{ minHeight: "75vh" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-orange-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-center">
          <span className="hero-t1 inline-block mb-5 text-xs font-semibold uppercase tracking-widest text-orange-400 border border-orange-400/40 rounded-full px-4 py-1.5">
            Who We Are
          </span>
          <h1 className="hero-t2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            We Have Been Here<br /><span className="text-orange-500">Long Enough to Know</span>
          </h1>
          <p className="hero-t3 mt-6 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every neighbourhood, every shortcut, every trusted landlord. We know this city
            and we know what it takes to help someone feel at home in it.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section ref={contentRef} className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className={`reveal-left ${contentVisible ? "visible" : ""}`}>
          <img
            src={aboutImg}
            alt="About Everything Abuja"
            className="rounded-3xl shadow-2xl object-cover w-full h-[350px] sm:h-[420px] md:h-[500px]"
          />
        </div>
        <div
          className={`reveal-right ${contentVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.15s" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            More Than a Service, a Partnership
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Everything Abuja Limited was built around one idea: nobody should have to figure
            out a new city alone. We bring together accommodation, relocation and concierge
            support so your transition is smooth from day one.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            From airport pickup to long-term housing and everything in between, we are the
            kind of team that picks up the phone, knows your name and genuinely cares about
            where you end up.
          </p>
          <Link
            to="/services"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-600/30 hover:shadow-xl"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* VALUES */}
      <section ref={valuesRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className={`text-3xl md:text-4xl font-bold mb-12 reveal ${valuesVisible ? "visible" : ""}`}>
            Why People Choose Us
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-xl reveal ${valuesVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="mb-4 flex justify-center">{v.icon}</div>
                <h4 className="font-semibold text-xl mb-4">{v.title}</h4>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
