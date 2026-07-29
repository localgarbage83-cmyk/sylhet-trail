import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Check,
  ChevronRight,
  MapPin,
  Menu,
  Phone,
  Shield,
  Sparkles,
  Users,
} from "lucide-react"

import { packages, destinations } from "@/lib/data"
import { PackageCard } from "@/components/package-card"
import { DestinationCard } from "@/components/destination-card"
import { LanguageToggle } from "@/components/language-toggle"
import { MobileNav } from "@/components/mobile-nav"

const partners = [
  {
    id: 1,
    name: "Ahammad Shuvo",
    initials: "AS",
    bg: "bg-tea-100",
    fg: "text-tea-600",
    ring: "ring-tea-200",
  },
  {
    id: 2,
    name: "Tanvir Sarwar",
    initials: "TS",
    bg: "bg-river-100",
    fg: "text-river-600",
    ring: "ring-river-200",
  },
  {
    id: 3,
    name: "Mithun Prashadi",
    initials: "MP",
    bg: "bg-forest-100",
    fg: "text-forest-600",
    ring: "ring-forest-200",
  },
  {
    id: 4,
    name: "Salman Sakib",
    initials: "SS",
    bg: "bg-earth-100",
    fg: "text-earth-600",
    ring: "ring-earth-200",
  },
  {
    id: 5,
    name: "Ahmed Nayem",
    initials: "AN",
    bg: "bg-tea-100",
    fg: "text-tea-700",
    ring: "ring-tea-300",
  },
]

const stats = [
  {
    value: "৫",
    label: "স্থানীয় পার্টনার",
    icon: Users,
    iconClass: "bg-tea-100 text-tea-700",
  },
  {
    value: "৬+",
    label: "গন্তব্য",
    icon: MapPin,
    iconClass: "bg-river-100 text-river-700",
  },
  {
    value: "১০০%",
    label: "নিরাপদ বুকিং",
    icon: Shield,
    iconClass: "bg-forest-100 text-forest-700",
  },
  {
    value: "২৪/৭",
    label: "হোয়াটসঅ্যাপ সাপোর্ট",
    icon: Phone,
    iconClass: "bg-earth-100 text-earth-700",
  },
]

const navLinks = [
  { href: "/packages", label: "Packages" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

function InitialsAvatar({
  initials,
  bg,
  fg,
}: {
  initials: string
  bg: string
  fg: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-24 w-24 items-center justify-center rounded-full ${bg}`}
    >
      <span className={`text-2xl font-bold tracking-wide ${fg}`}>
        {initials}
      </span>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-tea-700">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default function HomePage() {
  const featuredPackages = packages
    .filter((pkg) => pkg.active)
    .slice(0, 3)

  const featuredDestinations = destinations.slice(0, 6)
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-tea-700 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        মূল কনটেন্টে যান
      </a>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-600 focus-visible:ring-offset-2"
              aria-label="SylhetTrail home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-tea-700 text-white shadow-sm transition-transform group-hover:rotate-[-5deg]">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>

              <span className="text-xl font-bold tracking-tight text-tea-700">
                SylhetTrail
              </span>
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-7 md:flex"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-tea-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-600 focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageToggle />

              <Link
                href="/build-trip"
                className="hidden items-center gap-2 rounded-lg bg-tea-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-tea-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-600 focus-visible:ring-offset-2 sm:inline-flex"
              >
                Make a Trip
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Hero */}
<section
  aria-labelledby="hero-heading"
  className="relative isolate min-h-[min(92vh,900px)] overflow-hidden"
>
  {/* Background image */}
  <div className="absolute inset-0 -z-20">
    <Image
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=85"
      alt="Green mountain landscape in Sylhet, Bangladesh"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center scale-105"
    />
  </div>

  {/* Layered overlays for depth */}
  <div className="absolute inset-0 -z-10 bg-black/30" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background/95 via-background/55 to-transparent" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/20 to-transparent" />

  {/* Soft ambient glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-tea-600/15 blur-3xl"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-24 bottom-1/3 -z-10 h-80 w-80 rounded-full bg-forest-700/20 blur-3xl"
  />

  <div className="mx-auto flex min-h-[min(92vh,900px)] max-w-7xl flex-col justify-center px-4 pb-28 pt-28 sm:px-6 md:pb-36 md:pt-36 lg:px-8">
    <div className="max-w-3xl">
      {/* Badge */}
      <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-tea-900 shadow-sm backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tea-500 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-tea-600" />
        </span>
        <Sparkles className="h-3.5 w-3.5 text-tea-600" aria-hidden="true" />
        সিলেটকে দেখুন স্থানীয়দের চোখে
      </div>

      {/* Headline */}
      <h1
        id="hero-heading"
        className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]"
      >
        সিলেটকে দেখুন,
        <br />
        অনুভব করুন,
        <span className="mt-1 block bg-gradient-to-r from-tea-700 via-tea-600 to-forest-700 bg-clip-text text-transparent">
          মনে রাখুন।
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 max-w-xl text-base leading-8 text-foreground/75 sm:text-lg">
        স্থানীয় ৫ জন পার্টনারের সাথে অ্যাথেন্টিক সিলেট ভ্রমণ।
        প্যাকেজ বুক করুন অথবা নিজের মতো করে একটি স্মরণীয় ট্রিপ তৈরি করুন।
      </p>

      {/* CTAs */}
      <div className="mt-9 flex flex-wrap gap-3.5">
        <Link
          href="/build-trip"
          className="group inline-flex items-center gap-2.5 rounded-2xl bg-tea-700 px-7 py-4 text-[15px] font-semibold text-white shadow-lg shadow-tea-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-tea-800 hover:shadow-xl hover:shadow-tea-900/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-700 focus-visible:ring-offset-2"
        >
          নিজের ট্রিপ তৈরি করুন
          <ArrowRight
            className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 rounded-2xl border border-border/80 bg-white/70 px-7 py-4 text-[15px] font-semibold text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-700 focus-visible:ring-offset-2"
        >
          প্যাকেজ দেখুন
          <ChevronRight className="h-4.5 w-4.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Trust chips */}
      <div className="mt-10 flex flex-wrap items-center gap-x-1 gap-y-3">
        {[
          "কোনো লুকানো ফি নেই",
          "দ্রুত কনফার্মেশন",
          "স্থানীয় গাইড",
        ].map((item) => (
          <div
            key={item}
            className="mr-4 inline-flex items-center gap-2 rounded-full bg-white/50 px-3.5 py-1.5 text-sm text-foreground/80 backdrop-blur-sm"
          >
            <Check
              className="h-3.5 w-3.5 shrink-0 text-tea-700"
              aria-hidden="true"
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Bottom fade into next section */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
</section>

        {/* Trust Signals */}
        <section
          aria-label="SylhetTrail benefits"
          className="relative border-y border-border bg-background/90 py-8 backdrop-blur-sm sm:py-10"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon

                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${stat.iconClass}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xl font-bold tracking-tight text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs leading-5 text-muted-foreground sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Packages */}
        <section
          aria-labelledby="packages-heading"
          className="scroll-mt-20 py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Travel your way"
                title="ফিচার্ড প্যাকেজ"
                description="সিলেটের সেরা অভিজ্ঞতাগুলো আমরা আপনার জন্য সহজ করে সাজিয়েছি।"
              />

              <Link
                href="/packages"
                className="hidden shrink-0 items-center gap-1.5 rounded-md font-semibold text-tea-700 transition-colors hover:text-tea-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-600 focus-visible:ring-offset-2 md:inline-flex"
              >
                সব প্যাকেজ
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {featuredPackages.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-10 text-center">
                <p className="text-muted-foreground">
                  নতুন প্যাকেজ খুব শীঘ্রই যোগ করা হবে।
                </p>
              </div>
            )}

            <div className="mt-8 text-center md:hidden">
              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 font-semibold text-tea-700 hover:text-tea-800"
              >
                সব প্যাকেজ দেখুন
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Custom Trip CTA */}
        <section
          aria-labelledby="custom-trip-heading"
          className="relative overflow-hidden bg-tea-900 py-16 text-white md:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-tea-700/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-forest-800/30 blur-3xl"
          />

          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-tea-200">
                আপনার পরিকল্পনা, আপনার নিয়ম
              </p>

              <h2
                id="custom-trip-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                নিজের মতো করে ট্রিপ তৈরি করুন
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-tea-100">
                গন্তব্য, সময়কাল ও অভিজ্ঞতা বেছে নিন। আপনার প্রয়োজন অনুযায়ী
                স্থানীয় পার্টনার আপনার ট্রিপ সাজিয়ে দেবেন।
              </p>
            </div>

            <Link
              href="/build-trip"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-tea-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-tea-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tea-900"
            >
              ট্রিপ বিল্ডার খুলুন
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Destinations */}
        <section
          aria-labelledby="destinations-heading"
          className="scroll-mt-20 bg-muted/30 py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              eyebrow="Explore Sylhet"
              title="আপনার পরবর্তী গন্তব্য"
              description="চা-বাগান, পাহাড়, নদী আর ঝরনায় ভরা সিলেটের সবচেয়ে সুন্দর স্থানগুলো আবিষ্কার করুন।"
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 rounded-xl bg-tea-700 px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-tea-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-700 focus-visible:ring-offset-2"
              >
                সব গন্তব্য দেখুন
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section
          aria-labelledby="partners-heading"
          className="py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              eyebrow="Meet the locals"
              title="আমাদের স্থানীয় পার্টনাররা"
              description="৫ জন মালিক-অপারেটর, প্রত্যেকেই নিজের এলাকার বিশেষজ্ঞ। আপনার ভ্রমণের অর্থ সরাসরি স্থানীয় মানুষের কাছে পৌঁছায়।"
            />

            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {partners.map((partner) => (
                <div key={partner.id} className="text-center">
                  <div
                    className={`mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-background p-2 ring-2 ${partner.ring}`}
                  >
                    <InitialsAvatar
                      initials={partner.initials}
                      bg={partner.bg}
                      fg={partner.fg}
                    />
                  </div>

                  <h3 className="text-sm font-semibold text-foreground sm:text-base">
                    {partner.name}
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    স্থানীয় অপারেটর
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          aria-labelledby="final-cta-heading"
          className="relative overflow-hidden border-t border-tea-800 bg-tea-950 py-20 text-white md:py-28"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,164,108,0.25),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(34,102,112,0.2),transparent_35%)]"
          />

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-tea-300">
              Ready when you are
            </p>

            <h2
              id="final-cta-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              আপনার সিলেট অ্যাডভেঞ্চার শুরু করুন
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-tea-100">
              প্যাকেজ বুক করুন অথবা নিজের মতো করে ট্রিপ তৈরি করুন। দ্রুত
              কনফার্মেশন, স্বচ্ছ মূল্য এবং হোয়াটসঅ্যাপ সাপোর্ট—সব এক জায়গায়।
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/build-trip"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-tea-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-tea-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tea-950"
              >
                ট্রিপ তৈরি করুন
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tea-950"
              >
                আমাদের সাথে কথা বলুন
                <Phone className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-600 focus-visible:ring-offset-2"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-tea-700 text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>

                <span className="text-xl font-bold tracking-tight text-tea-700">
                  SylhetTrail
                </span>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                সিলেটের স্থানীয় ৫ জন পার্টনারের সাথে অ্যাথেন্টিক ভ্রমণ
                অভিজ্ঞতা। স্বচ্ছ, সহজ এবং মানুষের তৈরি ভ্রমণ।
              </p>

              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-tea-700 hover:text-tea-800"
              >
                আমাদের গল্প জানুন
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">দ্রুত লিংক</h3>

              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/packages" className="hover:text-tea-700">
                    প্যাকেজ
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="hover:text-tea-700">
                    গন্তব্য
                  </Link>
                </li>
                <li>
                  <Link href="/build-trip" className="hover:text-tea-700">
                    ট্রিপ তৈরি করুন
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-tea-700">
                    আমাদের সম্পর্কে
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">যোগাযোগ</h3>

              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://wa.me/8801712345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-tea-700"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-tea-700">
                    যোগাযোগ ফর্ম
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} SylhetTrail. সর্বস্বত্ব সংরক্ষিত।</p>

            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
