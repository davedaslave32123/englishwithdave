"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function BusinessEnglishLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [isTrialBooking, setIsTrialBooking] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setFormStatus("success")
        form.reset()
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      setFormStatus("error")
    } finally {
      setTimeout(() => setFormStatus("idle"), 5000)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      if (sectionId === "contact") {
        setIsTrialBooking(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-black">Business English with David – Wrocław</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("services")} className="hover:text-primary-blue transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("clients")} className="hover:text-primary-blue transition-colors">
                Clients
              </button>
              <button onClick={() => scrollToSection("results")} className="hover:text-primary-blue transition-colors">
                Results
              </button>
              <button onClick={() => scrollToSection("pricing")} className="hover:text-primary-blue transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection("faq")} className="hover:text-primary-blue transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary-blue transition-colors">
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary-blue text-white px-6 py-2 rounded-xl hover:bg-black transition-colors"
              >
                Book free trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary-blue transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("clients")}
                  className="hover:text-primary-blue transition-colors text-left"
                >
                  Clients
                </button>
                <button
                  onClick={() => scrollToSection("results")}
                  className="hover:text-primary-blue transition-colors text-left"
                >
                  Results
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-primary-blue transition-colors text-left"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="hover:text-primary-blue transition-colors text-left"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary-blue transition-colors text-left"
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary-blue text-white px-6 py-2 rounded-xl hover:bg-black transition-colors text-center"
                >
                  Book free trial
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-10 gap-12 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
                Business English that actually moves deals forward.
              </h1>
              <p className="text-xl text-neutral-gray mb-8 leading-relaxed">
                Native speaker from Chicago, many years in Poland. I train teams at engineering firms and tech startups
                to speak with confidence, present with impact, and communicate effectively in meetings and calls.
              </p>

              {/* Feature Bullets */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <svg className="w-6 h-6 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-lg">1:1 or group classes</span>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <svg className="w-6 h-6 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-lg">Workshops for companies</span>
                </div>
                <div className="flex items-center space-x-4 mb-8">
                  <svg className="w-6 h-6 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-lg">Online or on-site in Wrocław</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary-blue text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black transition-colors"
                >
                  Book a free trial
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-colors"
                >
                  See pricing
                </button>
              </div>

              <div className="inline-flex items-center bg-accent-yellow text-black px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Trusted by Polish tech & engineering teams
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="lg:ml-16 lg:pl-12">
                <Image
                  src="/kyle-headshot.jpg"
                  alt="Kyle - Business English Tutor"
                  width={320}
                  height={320}
                  className="rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS STRIP */}
      <section id="clients" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary-blue">
            <p className="text-center text-neutral-gray mb-2 text-lg">Companies I work with</p>
            <p className="text-center text-sm text-neutral-gray mb-8">Trusted by teams at:</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {[
                { name: "IDOM" },
                { name: "BigTime" },
                { name: "Primetric" },
                { name: "Waste Services" },
                { name: "ATL Polska" },
                { name: "English for Pilots" },
              ].map((company) => (
                <div key={company.name} className="group">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 hover:border-primary-blue hover:shadow-md transition-all duration-300 text-center">
                    <span className="font-semibold text-gray-700 text-sm group-hover:text-primary-blue transition-colors">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center bg-primary-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-black transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                Work with me too
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">How I Help</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1:1 Business English */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-black">1:1 Business English</h3>
                <div className="flex gap-2">
                  <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm">Online</span>
                  <span className="bg-accent-yellow text-black px-3 py-1 rounded-full text-sm">On-site (Wrocław)</span>
                </div>
              </div>
              <p className="text-neutral-gray mb-6">
                Focused sessions to fix your real situations: pronunciation coaching, confident calls, meeting language,
                negotiation phrases.
              </p>
              <ul className="space-y-2 text-neutral-gray">
                {["Pronunciation & speech clarity", "Call confidence", "Interview prep", "Presentation coaching"].map(
                  (item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Group Classes */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-black">Group Classes</h3>
                <div className="flex gap-2">
                  <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm">Online</span>
                  <span className="bg-accent-yellow text-black px-3 py-1 rounded-full text-sm">On-site (Wrocław)</span>
                </div>
              </div>
              <p className="text-neutral-gray mb-6">
                Teams learn faster together. Practical topics, role-plays, live correction, ready-to-use templates.
              </p>
              <ul className="space-y-2 text-neutral-gray">
                {["Stand-ups", "Demos", "Status updates", "Cross-team comms"].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Workshops */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-black">Company Workshops</h3>
                <div className="flex gap-2">
                  <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm">Online</span>
                  <span className="bg-accent-yellow text-black px-3 py-1 rounded-full text-sm">On-site (Wrocław)</span>
                </div>
              </div>
              <p className="text-neutral-gray mb-6">
                Half-day or full-day intensives: Confident Calls, Presenting with Impact, Pronunciation & Annunciation,
                Pitching to Stakeholders.
              </p>
              <ul className="space-y-2 text-neutral-gray">
                {[
                  "Pronunciation coaching",
                  "Presentation skills",
                  "Confident speaking",
                  "Professional communication",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES/RESULTS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-8">What changes after 4–8 weeks</h2>

            {/* Results Bullets */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                "Clearer speech and pronunciation",
                "More confident calls and meetings",
                "Stronger presentation flow",
                "Better professional communication",
              ].map((result) => (
                <div key={result} className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-lg text-left">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Case Notes */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Engineering firm</h4>
                  <p className="text-neutral-gray">
                    One group + email workshop → faster approvals, fewer back-and-forths.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992 1.736L11.25 1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.723V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 012 0v.277l.254-.145a1 1 0 01.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Startup</h4>
                  <p className="text-neutral-gray">Founder 1:1 + deck coaching → more confident investor calls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What clients say</h2>
            <p className="text-neutral-gray mb-8">Reviews from e-korepetycje.pl</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Artur</h4>
                  <p className="text-sm text-neutral-gray">17 lutego 2025</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-lg text-neutral-gray mb-4">
                "Zdecydowanie polecam Davida jako nauczyciela Business English. Jego profesjonalne podejście, połączone
                ze świetnym kontaktem z uczniem, tworzy idealne warunki do nauki. Zajęcia są zawsze dostosowane do
                indywidualnych potrzeb i poziomu klienta, co gwarantuje efektywność i postępy w nauce. David potrafi
                zmotywować i zainspirować do nauki, a jego zaangażowanie i pasja są zaraźliwe. Dzięki niemu nauka staje
                się przyjemnością i przynosi wymierne rezultaty. Polecam!"
              </p>
              <div className="flex items-center text-sm text-neutral-gray">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                e-korepetycje.pl
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Zofia</h4>
                  <p className="text-sm text-neutral-gray">1 września 2024</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-lg text-neutral-gray mb-4">
                "Serdecznie polecam zajęcia z Davidem! Od ponad roku uczęszczam na korepetycje z języka angielskiego w
                zakresie negocjacji biznesowych i terminologii prawniczej prowadzone przez Davida i jestem głęboko
                usatysfakcjonowana efektami naszej współpracy. David to wyjątkowy nauczyciel, który z profesjonalizmem i
                zaangażowaniem prowadzi zajęcia. Jego metody dydaktyczne, umiejętność dopasowania tematów do
                indywidualnych zainteresowań oraz zaawansowanych potrzeb językowych uczniów, sprawiają, że każda lekcja
                jest nowym, ekscytującym doświadczeniem. Szczególnie cenię sobie atmosferę otwartości, którą David
                tworzy, co sprzyja płynnej i skutecznej nauce. Jego głęboka wiedza i kompetencje, w połączeniu z
                profesjonalnym podejściem, gwarantują, że materiał jest zawsze prezentowany w sposób klarowny i
                przystępny. Nie można także pomijać jego znakomitego poczucia humoru, które czyni każde spotkanie nie
                tylko okazją do doskonalenia języka, ale również świetną zabawą. Co więcej, David z łatwością buduje
                relacje oparte na zaufaniu i szacunku, co jest kluczowe w procesie edukacyjnym. Nauka angielskiego z
                Davidem to prawdziwa przyjemność. Bez względu na to, czy celujesz w doskonalenie swoich umiejętności
                językowych na poziomie zaawansowanym, potrzebujesz specjalistycznej wiedzy do prowadzenia negocjacji
                biznesowych, czy zaczynasz naukę od podstaw – David jest nauczycielem, którego szukasz. Z pełnym
                przekonaniem polecam!"
              </p>
              <div className="flex items-center text-sm text-neutral-gray">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                e-korepetycje.pl
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Simple & Transparent Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "1:1", price: "from 180 zł", duration: "60 min" },
              { title: "Group (2–6)", price: "from 50 zł", duration: "per person / 60–90 min" },
              { title: "Workshops", price: "Custom", duration: "Half-day or full-day" },
            ].map((pricing) => (
              <div key={pricing.title} className="bg-white p-8 rounded-2xl shadow-sm border text-center">
                <h3 className="text-2xl font-bold text-black mb-4">{pricing.title}</h3>
                <div className="text-4xl font-bold text-primary-blue mb-2">{pricing.price}</div>
                <p className="text-neutral-gray mb-6">{pricing.duration}</p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary-blue text-white px-6 py-3 rounded-xl hover:bg-black transition-colors"
                >
                  {pricing.title === "Workshops" ? "Get quote" : "Book session"}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center text-neutral-gray">
            <p>Invoice / faktura available. Company packages on request.</p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Try a 60-minute free session</h2>
          <p className="text-xl text-white/90 mb-8">We'll diagnose your use-cases and pick the fastest wins.</p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-primary-blue px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-yellow hover:text-black transition-colors"
          >
            Book free trial
          </button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { id: "faq-1", question: "Online or on-site?", answer: "Both. On-site in Wrocław; online everywhere." },
              {
                id: "faq-2",
                question: "Do you teach exam prep?",
                answer: "Yes, I provide exam preparation alongside practical business communication.",
              },
              {
                id: "faq-3",
                question: "Do you assign homework?",
                answer: "Only useful tasks: rehearse a pitch, practice pronunciation, etc.",
              },
              { id: "faq-4", question: "Can you sign NDAs?", answer: "Yes." },
              { id: "faq-5", question: "Do you work with beginners?", answer: "Lower-intermediate and up." },
              { id: "faq-6", question: "Cancellation policy?", answer: "24 hours." },
            ].map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-xl">
                <button
                  onClick={() => scrollToSection(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-black">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-neutral-gray transform transition-transform ${
                      isScrolled ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isScrolled && faq.id === "faq-1" && (
                  <div className="px-6 pb-4">
                    <p className="text-neutral-gray">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Get in Touch and book your free trial</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <p className="text-lg text-neutral-gray mb-8">
                Tell me about your team, goals, and timelines — I'll reply same day.
              </p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/48880011110"
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 18H4V6h16v16zm-11-4h2a2 2 0 002-2V8a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2zm7 0h-2a2 2 0 00-2 2V8a2 2 0 002-2h2a2 2 0 002 2v6a2 2 0 00-2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">WhatsApp me</h4>
                    <p className="text-neutral-gray">Quick chat or voice message</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+48880011110"
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Call me</h4>
                    <p className="text-neutral-gray">+48 880-011-110</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:dave@englishwithdave.com"
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent-yellow rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email me</h4>
                    <p className="text-neutral-gray">dave@englishwithdave.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                {isTrialBooking ? "Book Your Free 60-Minute Trial" : "Get in Touch"}
              </h3>

              <form name="contact" method="POST" data-netlify="true" onSubmit={handleFormSubmit} className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                {isTrialBooking && <input type="hidden" name="inquiry-type" value="Free Trial Booking" />}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    {isTrialBooking ? "Tell me about your goals and current level *" : "Message *"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={
                      isTrialBooking
                        ? "What specific areas would you like to work on? (pronunciation, presentations, calls, etc.)"
                        : ""
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"
                  />
                  <label htmlFor="privacy" className="text-sm text-neutral-gray">
                    I agree to the processing of my personal data for the purpose of handling this inquiry (RODO). *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-black transition-colors"
                >
                  {isTrialBooking ? "Book My Free Trial" : "Send Message"}
                </button>
              </form>

              {formStatus === "success" && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800">
                    {isTrialBooking
                      ? "Great! Your free trial request has been sent. I'll contact you within 24 hours to schedule your 60-minute session."
                      : "Thank you! Your message has been sent successfully. I'll reply within 24 hours."}
                  </p>
                </div>
              )}

              {formStatus === "error" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Business English with David</h3>
              <p className="text-gray-400">Native speaker from Chicago • Many years in Poland</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Business English with David • Wrocław</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
