"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/packages", label: "প্যাকেজ" },
    { href: "/destinations", label: "গন্তব্য" },
    { href: "/build-trip", label: "ট্রিপ তৈরি" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/contact", label: "যোগাযোগ" },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-muted transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-muted text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
