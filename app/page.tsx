import Header from "@/components/header"
import Hero from "@/components/hero"
import Featured from "@/components/featured"
import Regions from "@/components/regions"
import WhyChooseUs from "@/components/why-choose-us"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Featured />
      <Regions />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}
