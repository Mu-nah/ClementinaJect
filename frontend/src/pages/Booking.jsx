import { useState } from "react"
import axios from "axios"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa"

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post("/bookings/", formData)
      setSuccess(true)
      setLoading(false)

      setFormData({
        name: "",
        email: "",
        service: "",
        date: "",
        time: "",
        notes: ""
      })
    } catch (error) {
      alert("Error submitting booking.")
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Contact & Consultation
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Let’s make your move to Abuja seamless.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-12">

        {/* FORM */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl">

          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Schedule a Consultation
          </h2>

          {success && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
              Booking successful! We’ll contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
            >
              <option value="">Select Service</option>
              <option>Airport Coordination</option>
              <option>Short Stay Accommodation</option>
              <option>Long-term Housing</option>
              <option>Relocation Support</option>
            </select>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="p-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="p-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              />
            </div>

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional Notes"
              rows="4"
              className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-6 py-4 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
            >
              {loading ? "Scheduling..." : "Schedule Consultation"}
            </button>

          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="bg-black text-white p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between">

          <div>
            <h3 className="text-2xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p>Abuja, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-orange-500 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p>+234 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-500 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p>info@everythingabuja.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Socials */}
          <div className="mt-12">
            <p className="text-gray-400 mb-4">Follow Us</p>

            <div className="flex gap-5">

              <a
                href="#"
                className="bg-[#1877F2] p-4 rounded-full hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-4 rounded-full hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-[#0A66C2] p-4 rounded-full hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

        </div>

      </section>
    </div>
  )
}
