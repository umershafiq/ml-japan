"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function Hero() {
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    priceRange: "all",
    year: "",
  })

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-background pt-24 overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl bg-accent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest">Direct from Japan</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Premium Japanese Vehicles, <span className="text-accent">Worldwide</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Direct exports from Japan. Fully inspected, certified, and shipped globally. No middlemen, authentic
                vehicles only.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2 justify-center"
                aria-label="Search inventory"
              >
                <Search size={18} />
                Search Inventory
              </button>
              <button
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition"
                aria-label="Learn more"
              >
                Learn More
              </button>
            </div>

            <ul className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              <li className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">2,000+ Vehicles</p>
                  <p className="font-semibold text-foreground">Exported</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">50+ Countries</p>
                  <p className="font-semibold text-foreground">Served</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">15+ Years</p>
                  <p className="font-semibold text-foreground">Experience</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">98% Rating</p>
                  <p className="font-semibold text-foreground">Satisfaction</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden bg-secondary shadow-2xl border-4 border-accent/20">
            <img
              src="/honda-fit-2003-hero.jpg"
              alt="2003-2008 Honda Fit - Most Popular Used Car in Caribbean and Micronesia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Gen 1 (2003-2008)
            </div>
          </div>
        </div>

        <form className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-md" aria-label="Vehicle search form">
          <h2 className="text-lg font-semibold text-foreground mb-6">Find Your Perfect Vehicle</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="relative">
              <label htmlFor="make-select" className="text-xs text-muted-foreground font-semibold mb-2 block">
                MAKE
              </label>
              <select
                id="make-select"
                value={filters.make}
                onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-accent transition"
              >
                <option value="">All Makes</option>
                <option value="toyota">Toyota</option>
                <option value="nissan">Nissan</option>
                <option value="honda">Honda</option>
                <option value="mazda">Mazda</option>
                <option value="subaru">Subaru</option>
              </select>
            </div>

            <div>
              <label htmlFor="model-input" className="text-xs text-muted-foreground font-semibold mb-2 block">
                MODEL
              </label>
              <input
                id="model-input"
                type="text"
                placeholder="E.g., Skyline"
                value={filters.model}
                onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                aria-label="Vehicle model"
              />
            </div>

            <div>
              <label htmlFor="year-input" className="text-xs text-muted-foreground font-semibold mb-2 block">
                YEAR
              </label>
              <input
                id="year-input"
                type="text"
                placeholder="E.g., 2020"
                value={filters.year}
                onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                aria-label="Vehicle year"
              />
            </div>

            <div className="relative">
              <label htmlFor="price-select" className="text-xs text-muted-foreground font-semibold mb-2 block">
                PRICE
              </label>
              <select
                id="price-select"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-accent transition"
              >
                <option value="all">All Prices</option>
                <option value="under30k">Under $30K</option>
                <option value="30k-50k">$30K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="over100k">Over $100K</option>
              </select>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 mt-auto"
              aria-label="Search vehicles"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
