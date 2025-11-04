import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Mitchell",
      location: "United Kingdom",
      text: "Outstanding experience from start to finish. The vehicle arrived in perfect condition. ML Japan is professional and trustworthy.",
      rating: 5,
      image: "/man-avatar.png",
    },
    {
      name: "Sarah Chen",
      location: "Australia",
      text: "Finally found a reliable source for authentic Japanese vehicles. Transparent pricing, excellent service, and a stunning Supra!",
      rating: 5,
      image: "/woman-avatar.png",
    },
    {
      name: "Marco Rossi",
      location: "Italy",
      text: "Best used car experience I've had. Complete documentation, perfect condition, and amazing support throughout the process.",
      rating: 5,
      image: "/man-avatar-2.png",
    },
    {
      name: "Lisa Wong",
      location: "Singapore",
      text: "Exceptional quality vehicles. Every detail matters to them. My R34 is a dream car and arrived exactly as described.",
      rating: 5,
      image: "/woman-avatar-2.png",
    },
  ]

  return (
    <section id="reviews" className="py-24 bg-secondary/30" aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Trusted by Customers Worldwide
          </h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-6 list-none">
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <article className="p-8 rounded-xl bg-card border border-border hover:border-accent transition-colors h-full flex flex-col">
                <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-balance flex-1">"{testimonial.text}"</p>
                <div className="border-t border-border/50 pt-4 flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg?height=40&width=40"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full bg-accent/10"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center p-8 rounded-xl bg-accent/5 border border-accent/20">
          <div className="flex items-center justify-center gap-2 mb-4" aria-label="Average rating: 4.98 out of 5 stars">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>
            <span className="text-2xl font-bold text-accent">4.98/5</span>
          </div>
          <p className="text-foreground font-semibold">Based on 500+ verified customer reviews</p>
          <p className="text-sm text-muted-foreground mt-2">We're committed to excellence in every transaction</p>
        </div>
      </div>
    </section>
  )
}
