"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import Logo from "./logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex justify-between items-center text-xs text-muted-foreground py-2.5 border-b border-border">
          <div className="flex gap-6">
            <a href="tel:+81123456789" className="hover:text-accent transition" aria-label="Call us">
              📞 +81 (0) 123 456 789
            </a>
            <a href="mailto:info@mljapan.com" className="hover:text-accent transition" aria-label="Email us">
              ✉️ info@mljapan.com
            </a>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-accent transition" aria-label="Follow us on Instagram">
              Instagram
            </Link>
            <Link href="#" className="hover:text-accent transition" aria-label="Follow us on Facebook">
              Facebook
            </Link>
          </div>
        </div>

        <div className="h-24 flex items-center justify-between">
          <Logo heightClass="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24" />

          <div className="hidden md:flex items-center gap-8">
            <Link href="#inventory" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
              Inventory
            </Link>
            <Link href="#regions" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
              Regions
            </Link>
            <Link href="#why" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
              Why Us
            </Link>
            <Link href="#process" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
              Process
            </Link>
            <Link href="#reviews" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
              Reviews
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-secondary rounded-lg transition"
              aria-label="Search inventory"
            >
              <Search size={20} className="text-muted-foreground" />
            </button>
            <button
              className="px-6 py-2.5 bg-accent text-white rounded-lg text-sm font-semibold hover:opacity-90 transition"
              aria-label="Get a quote"
            >
              Get Quote
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>

        {isOpen && (
          <nav
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="#inventory"
                className="text-sm text-muted-foreground hover:text-accent transition font-medium"
              >
                Inventory
              </Link>
              <Link href="#regions" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
                Regions
              </Link>
              <Link href="#why" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
                Why Us
              </Link>
              <Link href="#process" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
                Process
              </Link>
              <Link href="#reviews" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
                Reviews
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-accent transition font-medium">
                Contact
              </Link>
              <button className="w-full px-6 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:opacity-90 transition">
                Get Quote
              </button>
            </div>
          </nav>
        )}
      </nav>
    </header>
  )
}
