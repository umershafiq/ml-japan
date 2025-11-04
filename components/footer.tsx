import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 py-16">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <Logo className="!gap-3" heightClass="h-12 md:h-16" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium Japanese vehicles exported worldwide since 2010. Direct source, certified, and trusted by
              thousands.
            </p>
            <ul className="flex gap-3 pt-4 list-none">
              <li>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card hover:bg-accent hover:text-white flex items-center justify-center transition"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={18} aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card hover:bg-accent hover:text-white flex items-center justify-center transition"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={18} aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card hover:bg-accent hover:text-white flex items-center justify-center transition"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Navigation */}
          <nav>
            <h4 className="font-semibold text-foreground text-lg mb-4">Navigation</h4>
            <ul className="space-y-3 list-none">
              <li>
                <Link href="#inventory" className="text-muted-foreground text-sm hover:text-accent transition">
                  Browse Inventory
                </Link>
              </li>
              <li>
                <Link href="#why" className="text-muted-foreground text-sm hover:text-accent transition">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-muted-foreground text-sm hover:text-accent transition">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-muted-foreground text-sm hover:text-accent transition">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground text-sm hover:text-accent transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3 - Support */}
          <nav>
            <h4 className="font-semibold text-foreground text-lg mb-4">Support</h4>
            <ul className="space-y-3 list-none">
              <li>
                <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition">
                  Export Certification
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition">
                  Track Order
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 4 - Contact & Info */}
          <div>
            <h4 className="font-semibold text-foreground text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <a href="tel:+81123456789" className="text-muted-foreground text-sm hover:text-accent transition">
                    +81 (0) 123 456 789
                  </a>
                  <p className="text-xs text-muted-foreground">9AM - 6PM JST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <a
                    href="mailto:info@mljapan.com"
                    className="text-muted-foreground text-sm hover:text-accent transition"
                  >
                    info@mljapan.com
                  </a>
                  <p className="text-xs text-muted-foreground">24-hour response</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-muted-foreground text-sm">Tokyo, Japan</p>
                  <p className="text-xs text-muted-foreground">Global network</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">© {currentYear} ML Japan. All rights reserved.</p>
          <ul className="flex gap-6 list-none">
            <li>
              <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t border-border/30 py-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span
              className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center text-accent flex-shrink-0"
              aria-hidden="true"
            >
              ✓
            </span>
            SSL Secure Transactions
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span
              className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center text-accent flex-shrink-0"
              aria-hidden="true"
            >
              ✓
            </span>
            Export Certified
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span
              className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center text-accent flex-shrink-0"
              aria-hidden="true"
            >
              ✓
            </span>
            Vehicle Inspected
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span
              className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center text-accent flex-shrink-0"
              aria-hidden="true"
            >
              ✓
            </span>
            Warranty Included
          </div>
        </div>
      </div>
    </footer>
  )
}
