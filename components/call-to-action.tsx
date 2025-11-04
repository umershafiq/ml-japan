"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function CallToAction() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    vehicleInterest: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-background" aria-label="Contact and quote request">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest">Get Started Today</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Find Your Perfect Japanese Vehicle
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expert team is ready to help you find exactly what you're looking for. We'll guide you through the
                entire process from selection to delivery.
              </p>
            </div>

            <ul className="space-y-4 list-none">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone Support</p>
                  <a href="tel:+81123456789" className="text-muted-foreground hover:text-accent transition">
                    +81 (0) 123 456 789
                  </a>
                  <p className="text-xs text-muted-foreground">Monday - Friday, 9AM - 6PM JST</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email Support</p>
                  <a href="mailto:info@mljapan.com" className="text-muted-foreground hover:text-accent transition">
                    info@mljapan.com
                  </a>
                  <p className="text-xs text-muted-foreground">Respond within 24 hours</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Headquarters</p>
                  <p className="text-muted-foreground">Tokyo, Japan</p>
                  <p className="text-xs text-muted-foreground">International operations</p>
                </div>
              </li>
            </ul>

            <ul className="grid grid-cols-2 gap-4 pt-8 border-t border-border list-none">
              <li className="flex items-center gap-2">
                <span className="text-accent font-bold text-xl">✓</span>
                <span className="text-sm text-muted-foreground">SSL Secure</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-bold text-xl">✓</span>
                <span className="text-sm text-muted-foreground">Verified Buyer</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-card border border-border p-8 md:p-10 shadow-md sticky top-24">
            <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Send size={32} className="text-accent" aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold text-foreground text-center">Thank you! We'll contact you soon.</p>
                <p className="text-muted-foreground text-center">Check your email for confirmation and next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                    First Name{" "}
                    <span className="text-destructive" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="James"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    aria-label="First name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address{" "}
                    <span className="text-destructive" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="james@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    aria-label="Email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    aria-label="Phone number"
                  />
                </div>

                <div>
                  <label htmlFor="vehicleInterest" className="block text-sm font-semibold text-foreground mb-2">
                    Vehicle Interest
                  </label>
                  <select
                    id="vehicleInterest"
                    value={formData.vehicleInterest}
                    onChange={(e) => setFormData({ ...formData, vehicleInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition appearance-none"
                    aria-label="Vehicle type of interest"
                  >
                    <option value="">Select a vehicle type...</option>
                    <option value="sports">Sports Cars</option>
                    <option value="sedan">Sedans</option>
                    <option value="coupe">Coupes</option>
                    <option value="suv">SUVs</option>
                    <option value="classic">Classic/Vintage</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your ideal vehicle and budget..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                    aria-label="Additional message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                  aria-label="Send quote request"
                >
                  <Send size={18} aria-hidden="true" />
                  Send Request
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24 hours. Your information is secure and never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
