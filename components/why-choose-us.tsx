export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Direct from Japan",
      description:
        "No middlemen. We source directly from Japan. Every vehicle personally inspected and selected for quality.",
      icon: "🏭",
    },
    {
      number: "02",
      title: "Certified & Inspected",
      description:
        "100-point inspection. Complete service history included. Export certifications and documentation ready.",
      icon: "✓",
    },
    {
      number: "03",
      title: "Global Shipping",
      description:
        "Reliable international logistics to 50+ countries. Full insurance coverage. Real-time tracking available.",
      icon: "🌍",
    },
    {
      number: "04",
      title: "Transparent Pricing",
      description: "No hidden fees. Complete cost breakdown before purchase. Competitive pricing guaranteed.",
      icon: "💎",
    },
  ]

  return (
    <section id="why" className="py-24 bg-secondary/30" aria-label="Why choose ML Japan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16 max-w-3xl">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Why Choose ML Japan</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">The ML Japan Difference</h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-6 mb-16 list-none">
          {features.map((feature, index) => (
            <li
              key={index}
              className="group p-8 rounded-xl border border-border hover:border-accent bg-card hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0" aria-hidden="true">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <p className="text-4xl font-bold text-accent/20 mb-2 group-hover:text-accent/40 transition">
                    {feature.number}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-accent/5 rounded-xl border border-accent/20 p-8 md:p-12">
          <ul className="grid md:grid-cols-4 gap-8 text-center list-none">
            <li>
              <p className="text-5xl font-bold text-accent mb-2">15+</p>
              <p className="text-foreground font-semibold">Years in Business</p>
              <p className="text-xs text-muted-foreground mt-1">Trusted since 2010</p>
            </li>
            <li>
              <p className="text-5xl font-bold text-accent mb-2">2,000+</p>
              <p className="text-foreground font-semibold">Vehicles Exported</p>
              <p className="text-xs text-muted-foreground mt-1">Worldwide delivery</p>
            </li>
            <li>
              <p className="text-5xl font-bold text-accent mb-2">50+</p>
              <p className="text-foreground font-semibold">Countries Served</p>
              <p className="text-xs text-muted-foreground mt-1">Global network</p>
            </li>
            <li>
              <p className="text-5xl font-bold text-accent mb-2">98%</p>
              <p className="text-foreground font-semibold">Customer Satisfaction</p>
              <p className="text-xs text-muted-foreground mt-1">5-star rated</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
