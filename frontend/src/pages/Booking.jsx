import { useState } from "react"
import axios from "axios"
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown
} from "react-icons/fa"

export default function Booking() {
  const AIRPORT_CORDINATION = "Airport Cordination"
  const SHORT_STAY_ACCOMODATION = "Short Stay Accomodation"
  const [formResetKey, setFormResetKey] = useState(0)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    credential_type: "",
    credential_attachment: null,
    resume_attachment: null,
    next_of_kin_name: "",
    next_of_kin_phone: "",
    next_of_kin_address: "",
    next_of_kin_relationship: "",
    sponsorship_type: "self",
    company_letterhead_attachment: null,
    notes: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "phone" || name === "next_of_kin_phone") {
      const digitsOnly = value.replace(/\D/g, "")
      setFormData({
        ...formData,
        [name]: digitsOnly
      })
      return
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    setFormData({
      ...formData,
      [e.target.name]: file
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const payload = new FormData()
      payload.append("name", formData.name)
      payload.append("phone", formData.phone)
      payload.append("email", formData.email)
      payload.append("service", formData.service)
      payload.append("date", formData.date)
      payload.append("credential_type", formData.credential_type)
      payload.append("next_of_kin_name", formData.next_of_kin_name)
      payload.append("next_of_kin_phone", formData.next_of_kin_phone)
      payload.append("next_of_kin_address", formData.next_of_kin_address)
      payload.append("next_of_kin_relationship", formData.next_of_kin_relationship)
      payload.append("sponsorship_type", formData.sponsorship_type)
      payload.append("notes", formData.notes)

      if (formData.credential_attachment) {
        payload.append("credential_attachment", formData.credential_attachment)
      }
      if (formData.resume_attachment) {
        payload.append("resume_attachment", formData.resume_attachment)
      }
      if (requiresCompanyLetterhead && formData.company_letterhead_attachment) {
        payload.append("company_letterhead_attachment", formData.company_letterhead_attachment)
      }

      await axios.post("/bookings/", payload, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      setSuccess(true)
      setLoading(false)

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        credential_type: "",
        credential_attachment: null,
        resume_attachment: null,
        next_of_kin_name: "",
        next_of_kin_phone: "",
        next_of_kin_address: "",
        next_of_kin_relationship: "",
        sponsorship_type: "self",
        company_letterhead_attachment: null,
        notes: ""
      })
      setFormResetKey((prev) => prev + 1)
    } catch (error) {
      alert("Error submitting booking.")
      setLoading(false)
    }
  }

  const requiresCompanyLetterhead =
    formData.service === SHORT_STAY_ACCOMODATION &&
    formData.sponsorship_type === "company"
  const requiresResumeAttachment =
    formData.service !== AIRPORT_CORDINATION &&
    formData.service !== SHORT_STAY_ACCOMODATION
  const todayISO = new Date().toISOString().split("T")[0]
  const fieldLabelClass = "mb-2 block text-sm font-semibold text-gray-700"
  const inputClass = "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[15px] shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
  const fileInputClass = "w-full rounded-xl border border-gray-300 bg-white p-3 text-sm shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
  const blockClass = "space-y-4 rounded-2xl border border-gray-200 bg-slate-50 p-4 sm:p-5"

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-black via-zinc-900 to-orange-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Contact & Book Us</h1>
          <p className="mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">
            Share your details and required service. We will review your booking and reach out quickly.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 xl:grid-cols-12 xl:gap-8 xl:py-12">
        <div className="mx-auto w-full max-w-4xl xl:col-span-8 xl:max-w-none">
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">Booking Form</p>
              <h2 className="mt-1 text-2xl font-bold text-gray-900">Book Us</h2>
            </div>

            {success && (
              <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                Booking successful! We&apos;ll contact you shortly.
              </div>
            )}

            <form key={formResetKey} onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div className={blockClass}>
                <h3 className="text-lg font-semibold text-gray-900">Personal Details</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className={fieldLabelClass}>Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={fieldLabelClass}>Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{7,15}"
                      title="Phone number should contain only digits."
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={fieldLabelClass}>Email Address</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="relative">
                    <label className={fieldLabelClass}>Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`${inputClass} appearance-none pr-11`}
                    >
                      <option value="">Select Service</option>
                      <option>Airport Cordination</option>
                      <option>Short Stay Accomodation</option>
                      <option>Longterm Housing</option>
                      <option>NYSC Relocation Support</option>
                    </select>
                    <FaChevronDown className="pointer-events-none absolute right-4 top-[44px] -translate-y-1/2 text-xs text-gray-500" />
                  </div>
                  <div>
                    <label className={fieldLabelClass}>Prospective Day of Arrival</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={todayISO}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {requiresResumeAttachment && (
                  <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <label className={fieldLabelClass}>Resume Attachment</label>
                    <input
                      type="file"
                      name="resume_attachment"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      required
                      className={fileInputClass}
                    />
                  </div>
                )}
              </div>

              <div className={blockClass}>
                <h3 className="text-lg font-semibold text-gray-900">Identification</h3>
                <p className="text-sm text-gray-600">
                  Select one identification type and upload the document.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="relative">
                    <label className={fieldLabelClass}>Identification Type</label>
                    <select
                      name="credential_type"
                      value={formData.credential_type}
                      onChange={handleChange}
                      required
                      className={`${inputClass} appearance-none pr-11`}
                    >
                      <option value="">Select Identification Type</option>
                      <option>ID Card</option>
                      <option>NIN</option>
                      <option>Voters Card</option>
                      <option>Passport</option>
                    </select>
                    <FaChevronDown className="pointer-events-none absolute right-4 top-[44px] -translate-y-1/2 text-xs text-gray-500" />
                  </div>
                  <div>
                    <label className={fieldLabelClass}>Identification Document</label>
                    <input
                      type="file"
                      name="credential_attachment"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      className={fileInputClass}
                    />
                  </div>
                </div>
              </div>

              <div className={blockClass}>
                <h3 className="text-lg font-semibold text-gray-900">Next Of Kin Details</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className={fieldLabelClass}>Next of Kin Name</label>
                    <input
                      name="next_of_kin_name"
                      value={formData.next_of_kin_name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={fieldLabelClass}>Next of Kin Phone Number</label>
                    <input
                      name="next_of_kin_phone"
                      value={formData.next_of_kin_phone}
                      onChange={handleChange}
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{7,15}"
                      title="Phone number should contain only digits."
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={fieldLabelClass}>Next of Kin Address</label>
                    <input
                      name="next_of_kin_address"
                      value={formData.next_of_kin_address}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={fieldLabelClass}>Relationship</label>
                    <input
                      name="next_of_kin_relationship"
                      value={formData.next_of_kin_relationship}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {(formData.service === SHORT_STAY_ACCOMODATION || formData.service === AIRPORT_CORDINATION) && (
                <div className={blockClass}>
                  <h3 className="text-lg font-semibold text-gray-900">Sponsorship</h3>
                  <div className="relative">
                    <label className={fieldLabelClass}>Sponsorship Type</label>
                    <select
                      name="sponsorship_type"
                      value={formData.sponsorship_type}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-11`}
                    >
                      <option value="self">Self Sponsored</option>
                      <option value="company">Sponsored By Company</option>
                    </select>
                    <FaChevronDown className="pointer-events-none absolute right-4 top-[44px] -translate-y-1/2 text-xs text-gray-500" />
                  </div>

                  {requiresCompanyLetterhead && (
                    <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                      <p className="mb-2 text-sm text-orange-700">
                        Sponsored by company selected. Please upload your company letterhead document.
                      </p>
                      <label className={fieldLabelClass}>Company Letterhead</label>
                      <input
                        type="file"
                        name="company_letterhead_attachment"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        required
                        className={fileInputClass}
                      />
                    </div>
                  )}
                </div>
              )}

              <div className={blockClass}>
                <h3 className="text-lg font-semibold text-gray-900">Additional Notes</h3>
                <label className={fieldLabelClass}>Notes (Optional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Anything else we should know?"
                  rows="4"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-700 disabled:bg-gray-400"
              >
                {loading ? "Booking..." : "Book Us"}
              </button>
            </form>
          </div>
        </div>

        <aside className="hidden xl:col-span-4 xl:block">
          <div className="rounded-3xl bg-black p-6 text-white shadow-xl xl:sticky xl:top-24">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <div className="mt-7 space-y-6">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-orange-500" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">Address</p>
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-orange-500" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">Phone</p>
                  <p>09025478688</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-orange-500" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">Email</p>
                  <p className="break-all">info@everythingabuja.com</p>
                  <p className="break-all">everythingabujaserviceltd@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-800 pt-5">
              <p className="mb-3 text-sm text-gray-400">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/everythingabujaservicelimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#1877F2] p-3 transition hover:scale-105"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com/everythingabujaserviceltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 transition hover:scale-105"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

