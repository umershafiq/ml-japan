"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, ChevronRight } from "lucide-react"

export default function Regions() {
  const [activeRegion, setActiveRegion] = useState("caribbean")

  const regions = {
    caribbean: {
      name: "Caribbean",
      icon: "🏝️",
      description: "Serving Jamaica, Barbados, Trinidad & Tobago, and More",
      topCars: [
        {
          model: "Toyota Vitz (Yaris)",
          reason: "Perfect for island roads, excellent fuel efficiency",
          image: "/toyota-vitz.jpg",
          demand: "Very High",
        },
        {
          model: "Honda CR-V",
          reason: "Reliable SUV for varied terrain and weather",
          image: "/honda-cr-v.jpg",
          demand: "Very High",
        },
        {
          model: "Suzuki Swift",
          reason: "Compact, agile, ideal for narrow streets",
          image: "/suzuki-swift.jpg",
          demand: "High",
        },
        {
          model: "Toyota Corolla",
          reason: "Proven reliability and affordable maintenance",
          image: "/toyota-corolla.jpg",
          demand: "Very High",
        },
        {
          model: "Honda Fit",
          reason: "Space efficiency for compact island living",
          image: "/honda-fit.jpg",
          demand: "High",
        },
        {
          model: "Mitsubishi Pajero",
          reason: "Durable SUV for challenging conditions",
          image: "/mitsubishi-pajero.jpg",
          demand: "High",
        },
      ],
    },
    micronesia: {
      name: "Micronesia",
      icon: "🌊",
      description: "Serving Saipan, Guam, Pohnpei, Chuuk, Kosrae, Yap, and More",
      topCars: [
        {
          model: "Toyota Prius",
          reason: "Fuel-efficient hybrid for island economy",
          image: "/toyota-prius.jpg",
          demand: "Very High",
        },
        {
          model: "Honda Accord",
          reason: "Reliable sedan with excellent resale value",
          image: "/honda-accord.jpg",
          demand: "Very High",
        },
        {
          model: "Toyota RAV4",
          reason: "Versatile SUV for all-terrain capability",
          image: "/toyota-rav4.jpg",
          demand: "Very High",
        },
        {
          model: "Toyota Camry",
          reason: "Comfortable sedan for family transport",
          image: "/toyota-camry.jpg",
          demand: "High",
        },
        {
          model: "Subaru Crosstrek",
          reason: "All-weather performance and durability",
          image: "/subaru-crosstrek.jpg",
          demand: "High",
        },
        {
          model: "Nissan Altima",
          reason: "Premium sedan with modern features",
          image: "/nissan-altima.jpg",
          demand: "Medium",
        },
      ],
    },
  }

  const current = regions[activeRegion as keyof typeof regions]

  return (
    <section id="regions" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30" aria-label="Region-specific inventory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 mb-4">
            <MapPin size={16} className="text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">Serving Multiple Regions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Region-Specific <span className="text-accent">Inventory</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We specialize in sourcing the most sought-after vehicles for each region's unique needs and preferences
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex gap-4 justify-center mb-12" role="tablist">
          {Object.entries(regions).map(([key, region]) => (
            <button
              key={key}
              onClick={() => setActiveRegion(key)}
              role="tab"
              aria-selected={activeRegion === key}
              aria-controls={`panel-${key}`}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeRegion === key
                  ? "bg-accent text-white shadow-lg"
                  : "bg-background text-muted-foreground border border-border hover:border-accent hover:text-accent"
              }`}
            >
              <span className="text-xl">{region.icon}</span>
              <span>{region.name}</span>
            </button>
          ))}
        </div>

        {/* Region Content */}
        <div
          id={`panel-${activeRegion}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeRegion}`}
          className="animate-in fade-in-50 duration-300"
        >
          {/* Region Description */}
          <div className="bg-background rounded-xl border border-border p-6 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">{current.name}</h3>
            <p className="text-muted-foreground">{current.description}</p>
          </div>

          {/* Top Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.topCars.map((car, index) => (
              <div
                key={index}
                className="group bg-background rounded-lg border border-border overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 bg-secondary overflow-hidden">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.model}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {car.demand}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">{car.model}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{car.reason}</p>

                  <button
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all group"
                    aria-label={`View ${car.model} details`}
                  >
                    View Details
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition">
              Browse Full {current.name} Inventory
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
