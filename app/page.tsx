import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Users, Shield, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { packages, destinations } from "@/lib/data"
import { PackageCard } from "@/components/package-card"
import { DestinationCard } from "@/components/destination-card"
import { LanguageToggle } from "@/components/language-toggle"
import { MobileNav } from "@/components/mobile-nav"

const partners = [
  { id: 1, name: "Ahammad Shuvo", initials: "AS", bg: "bg-tea-100", fg: "text-tea-600", ring: "ring-tea-200" },
  { id: 2, name: "Tanvir Sarwar", initials: "TS", bg: "bg-river-100", fg: "text-river-600", ring: "ring-river-200" },
  { id: 3, name: "Mithun Prashadi", initials: "MP", bg: "bg-forest-100", fg: "text-forest-600", ring: "ring-forest-200" },
  { id: 4, name: "Salman Sakib", initials: "SS", bg: "bg-earth-100", fg: "text-earth-600", ring: "ring-earth-200" },
  { id: 5, name: "Ahmed Nayem", initials: "AN", bg: "bg-tea-100", fg: "text-tea-700", ring: "ring-tea-300" },
]

function InitialsAvatar({ initials, bg, fg }: { initials: string; bg: string; fg: string }) {
  return (
    <svg viewBox="0 0 96 96" className={`w-24 h-24 rounded-full ${bg}`}>
      <text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        className={`${fg} font-semibold`}
        fontSize="30"
        fontFamily="inherit"
      >
        {initials}
      </text>
    </svg>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-tea-700">SylhetTrail</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/packages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Packages
              </Link>
              <Link href="/destinations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Destination
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contacts
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <Link
                href="/build-trip"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-tea-600 text-white text-sm font-medium rounded-lg hover:bg-tea-700 transition-colors"
              >
                Make a Trip
                <ArrowRight className="w-4 h-4" />
              </Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600"
            alt="Sylhet landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              সিলেটের প্রকৃতি
              <span className="block text-tea-600">আপনার পায়ে</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              স্থানীয় ৫ জন পার্টনারের সাথে অ্যাথেন্টিক সিলেট ভ্রমণ। প্যাকেজ বুক করুন অথবা নিজের ট্রিপ তৈরি করুন।
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/build-trip"
                className="inline-flex items-center gap-2 px-6 py-3 bg-tea-600 text-white font-medium rounded-xl hover:bg-tea-700 transition-colors"
              >
                নিজের ট্রিপ তৈরি করুন
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur text-foreground font-medium rounded-xl border border-border hover:bg-white transition-colors"
              >
                প্যাকেজ দেখুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-tea-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-tea-600" />
              </div>
              <div>
                <p className="text-lg font-semibold">৫</p>
                <p className="text-sm text-muted-foreground">স্থানীয় পার্টনার</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-river-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-river-600" />
              </div>
              <div>
                <p className="text-lg font-semibold">৬+</p>
                <p className="text-sm text-muted-foreground">গন্তব্য</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-forest-600" />
              </div>
              <div>
                <p className="text-lg font-semibold">১০০%</p>
                <p className="text-sm text-muted-foreground">নিরাপদ বুকিং</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-earth-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-earth-600" />
              </div>
              <div>
                <p className="text-lg font-semibold">২৪/৭</p>
                <p className="text-sm text-muted-foreground">হোয়াটসঅ্যাপ সাপোর্ট</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">ফিচার্ড প্যাকেজ</h2>
              <p className="text-muted-foreground">প্রস্তুত করা সেরা ট্রিপ প্যাকেজ</p>
            </div>
            <Link
              href="/packages"
              className="hidden md:inline-flex items-center gap-1 text-tea-600 hover:text-tea-700 font-medium"
            >
              সব প্যাকেজ দেখুন <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.filter((p) => p.active).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/packages"
              className="inline-flex items-center gap-1 text-tea-600 hover:text-tea-700 font-medium"
            >
              সব প্যাকেজ দেখুন <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">আমাদের গন্তব্য</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              সিলেটের সবচেয়ে সুন্দর স্থানগুলো — প্রতিটি গন্তব্যে স্থানীয় গাইডের সাথে
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.slice(0, 6).map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-tea-600 text-white font-medium rounded-xl hover:bg-tea-700 transition-colors"
            >
              সব গন্তব্য দেখুন
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">আমাদের পার্টনাররা</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              ৫ জন স্থানীয় মালিক-অপারেটর — প্রত্যেকেই নিজের এলাকার বিশেষজ্ঞ
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <div key={partner.id} className="text-center">
                <div className={`relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ${partner.ring} flex items-center justify-center`}>
                  <InitialsAvatar initials={partner.initials} bg={partner.bg} fg={partner.fg} />
                </div>
                <h3 className="font-semibold text-foreground">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-tea-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আপনার সিলেট অ্যাডভেঞ্চার শুরু করুন</h2>
          <p className="text-tea-200 max-w-xl mx-auto mb-8">
            প্যাকেজ বুক করুন অথবা নিজের মতো করে ট্রিপ তৈরি করুন — দ্রুত কনফার্মেশন ও হোয়াটসঅ্যাপ সাপোর্ট।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/build-trip"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-tea-900 font-semibold rounded-xl hover:bg-tea-50 transition-colors"
            >
              ট্রিপ তৈরি করুন
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              প্যাকেজ দেখুন
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <span className="text-xl font-bold text-tea-700">SylhetTrail</span>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm">
                সিলেটের স্থানীয় ৫ জন পার্টনারের সাথে অ্যাথেন্টিক ভ্রমণ অভিজ্ঞতা। কমিশন-ভিত্তিক ট্যুর অপারেটর প্ল্যাটফর্ম।
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">দ্রুত লিংক</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/packages" className="hover:text-foreground">প্যাকেজ</Link></li>
                <li><Link href="/destinations" className="hover:text-foreground">গন্তব্য</Link></li>
                <li><Link href="/build-trip" className="hover:text-foreground">ট্রিপ তৈরি</Link></li>
                <li><Link href="/about" className="hover:text-foreground">আমাদের সম্পর্কে</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">যোগাযোগ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/8801712345678" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    WhatsApp
                  </a>
                </li>
                <li><Link href="/contact" className="hover:text-foreground">ফর্ম পূরণ করুন</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 SylhetTrail. স্থানীয় পার্টনারদের দ্বারা পরিচালিত।
          </div>
        </div>
      </footer>
    </div>
  )
}
