import { CheckCircle2, Search, FileText, Truck, Home } from "lucide-react"

export default function Process() {
  const steps = [
    {
      step: 1,
      title: "Browse & Select",
      description:
        "Explore our premium inventory with detailed specs, photos, and inspection reports for each vehicle.",
      icon: Search,
    },
    {
      step: 2,
      title: "Expert Inspection",
      description:
        "Our technicians perform comprehensive 100-point checks. Mechanical, electrical, and structural assessments completed.",
      icon: CheckCircle2,
    },
    {
      step: 3,
      title: "Documentation",
      description:
        "Complete paperwork prepared. Export certificates, title transfers, service records, and compliance documents organized.",
      icon: FileText,
    },
    {
      step: 4,
      title: "Secure Shipping",
      description:
        "Vehicle shipped safely via reliable international logistics partners. Full insurance coverage and real-time tracking included.",
      icon: Truck,
    },
    {
      step: 5,
      title: "Delivery & Support",
      description:
        "Vehicle arrives at your destination. Ongoing support, warranty coverage, and documentation assistance available.",
      icon: Home,
    },
  ]

  return (
    <section id="process" className="py-24 bg-background" aria-label="Our process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            From Selection to Your Doorstep
          </h2>
        </div>

        <ol className="grid md:grid-cols-5 gap-4 list-none">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <li key={index} className="relative">
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition flex-shrink-0">
                    <Icon size={32} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 -right-2 w-4 h-1 bg-gradient-to-r from-accent to-transparent"
                    aria-hidden="true"
                  ></div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
