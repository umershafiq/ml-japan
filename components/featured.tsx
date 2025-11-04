"use client"

import { useState } from "react"
import { Heart, MapPin, Gauge, Calendar, Zap } from "lucide-react"

const cars = [
  {
    id: 1,
    name: "Honda Fit Gen 1",
    make: "Honda",
    year: "2003",
    price: "$12,500",
    mileage: "98,000 km",
    condition: "Excellent",
    image: "/honda-fit-2003-silver.jpg",
    specs: { engine: "1.5L i-VTEC", transmission: "5-Speed Manual" },
    location: "Tokyo",
    region: "Caribbean & Micronesia",
    badge: "Most Popular",
  },
  {
    id: 2,
    name: "Honda Fit Gen 1",
    make: "Honda",
    year: "2005",
    price: "$14,200",
    mileage: "85,000 km",
    condition: "Perfect",
    image: "/honda-fit-2005-blue.jpg",
    specs: { engine: "1.5L i-VTEC", transmission: "Automatic CVT" },
    location: "Nagoya",
    region: "Caribbean & Micronesia",
    badge: "Top Pick",
  },
  {
    id: 3,
    name: "Honda Fit Gen 1",
    make: "Honda",
    year: "2008",
    price: "$16,800",
    mileage: "72,000 km",
    condition: "Very Good",
    image: "/honda-fit-2008-red.jpg",
    specs: { engine: "1.5L i-VTEC", transmission: "5-Speed Automatic" },
    location: "Osaka",
    region: "Caribbean & Micronesia",
    badge: "Latest Gen 1",
  },
  {
    id: 4,
    name: "Toyota Corolla Axio",
    make: "Toyota",
    year: "2004",
    price: "$13,900",
    mileage: "92,000 km",
    condition: "Good",
    image: "/toyota-corolla-axio-2004.jpg",
    specs: { engine: "1.5L i-VTEC", transmission: "5-Speed Manual" },
    location: "Kyoto",
    region: "Caribbean & Micronesia",
    badge: "Runner-Up",
  },
  {
    id: 5,
    name: "Nissan Note",
    make: "Nissan",
    year: "2006",
    price: "$11,800",
    mileage: "105,000 km",
    condition: "Excellent",
    image: "/nissan-note-2006.jpg",
    specs: { engine: "1.4L", transmission: "CVT" },
    location: "Tokyo",
    region: "Caribbean & Micronesia",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Suzuki Swift",
    make: "Suzuki",
    year: "2004",
    price: "$10,500",
    mileage: "110,000 km",
    condition: "Good",
    image: "/suzuki-swift-2004.jpg",
    specs: { engine: "1.3L", transmission: "5-Speed Manual" },
    location: "Nagoya",
    region: "Caribbean & Micronesia",
    badge: "Budget-Friendly",
  },
]

export default function Featured() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]))
  }

  return (
    <section id="inventory" className="py-24 bg-background" aria-label="Featured inventory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-2">
            <Zap size={24} className="text-accent" aria-hidden="true" />
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">Curated Selection</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Hand-Picked <span className="text-accent">Japanese Classics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Featuring the most demanded vehicles across Caribbean and Micronesian markets. Each vehicle is inspected,
            certified, and ready for international export. Honda Fit leads our selection as the #1 choice in both
            regions.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 list-none">
          {cars.map((car) => (
            <li key={car.id} onMouseEnter={() => setHoveredId(car.id)} onMouseLeave={() => setHoveredId(null)}>
              <article className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-xl h-full flex flex-col hover:scale-105">
                <div className="relative h-64 bg-secondary overflow-hidden">
                  <img
                    src={car.image || "/placeholder.svg?height=256&width=320"}
                    alt={`${car.year} ${car.make} ${car.name}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-lg hover:bg-accent hover:text-white transition-all duration-200 shadow-md"
                    aria-label={
                      favorites.includes(car.id) ? `Remove ${car.name} from favorites` : `Add ${car.name} to favorites`
                    }
                  >
                    <Heart
                      size={20}
                      className={favorites.includes(car.id) ? "fill-accent text-accent" : "text-muted-foreground"}
                      aria-hidden="true"
                    />
                  </button>

                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      {car.condition}
                    </span>
                    <span className="bg-foreground/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      {car.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <p className="text-xs text-accent font-semibold uppercase mb-1">{car.make}</p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition">{car.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{car.region}</p>
                  </div>

                  <ul className="grid grid-cols-2 gap-3 py-4 border-y border-border/50">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                      <span>{car.year}</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Gauge size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                      <span>{car.mileage}</span>
                    </li>
                    <li className="col-span-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                      <span>{car.location}, Japan</span>
                    </li>
                  </ul>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Engine:</strong> {car.specs.engine}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Transmission:</strong> {car.specs.transmission}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                    <p className="text-2xl font-bold text-accent">{car.price}</p>
                    <button
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-200"
                      aria-label={`View details for ${car.name}`}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <button
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-200"
            aria-label="View all vehicles"
          >
            View All {cars.length}+ Vehicles
          </button>
        </div>
      </div>
    </section>
  )
}
