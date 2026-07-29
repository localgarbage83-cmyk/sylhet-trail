import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  Heart,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react"

import { LanguageToggle } from "@/components/language-toggle"

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Shuvo",
    initials: "AS",
    role: "টিম লিড",
    bg: "bg-tea-100",
    fg: "text-tea-700",
    ring: "ring-tea-200",
  },
  {
    id: 2,
    name: "Tanvir Sarwar",
    initials: "TS",
    role: "টিম মেম্বার",
    bg: "bg-river-100",
    fg: "text-river-700",
    ring: "ring-river-200",
  },
  {
    id: 3,
    name: "Mithun Prashadi",
    initials: "MP",
    role: "টিম মেম্বার",
    bg: "bg-forest-100",
    fg: "text-forest-700",
    ring: "ring-forest-200",
  },
  {
    id: 4,
    name: "Salman Sakib",
    initials: "SS",
    role: "টিম মেম্বার",
    bg: "bg-earth-100",
    fg: "text-earth-700",
    ring: "ring-earth-200",
  },
  {
    id: 5,
    name: "Ahmed Nayem",
    initials: "AN",
    role: "টিম মেম্বার",
    bg: "bg-tea-100",
    fg: "text-tea-700",
    ring: "ring-tea-300",
  },
]

const principles = [
  {
    icon: Users,
    iconClass: "bg-tea-100 text-tea-700",
    title: "বিশ্ববিদ্যালয়ের বন্ধুদের উদ্যোগ",
    description:
      "আমরা সবাই বিশ্ববিদ্যালয়ের বন্ধু। আমি Ahmed Shuvo এই উদ্যোগের টিম লিড। SylhetTrail কোনো বড় কর্পোরেশন নয়—এটি আমাদের একটি student-led travel initiative।",
  },
  {
    icon: BookOpen,
    iconClass: "bg-river-100 text-river-700",
    title: "গবেষণাভিত্তিক ভ্রমণ পরিকল্পনা",
    description:
      "সিলেটের গন্তব্য, রুট, দূরত্ব, মৌসুমি বৈশিষ্ট্য এবং ভ্রমণকারীদের প্রয়োজন নিয়ে আমরা নিয়মিত স্টাডি ও গবেষণা করি। সেই তথ্যের ভিত্তিতে ট্রিপ পরিকল্পনা সহজ করার চেষ্টা করি।",
  },
  {
    icon: MapPin,
    iconClass: "bg-forest-100 text-forest-700",
    title: "সিলেটের পর্যটনকে কেন্দ্র করে",
    description:
      "আমরা সিলেটের স্থানীয় নই—এটি আমরা স্বচ্ছভাবে স্বীকার করি। তবে সিলেটের প্রকৃতি, সংস্কৃতি ও পর্যটন সম্ভাবনা নিয়ে আমাদের গভীর আগ্রহ রয়েছে। স্থানীয় বাস্তবতাকে সম্মান করেই আমরা তথ্য সংগ্রহ ও ভ্রমণ পরিকল্পনা করি।",
  },
  {
    icon: ShieldCheck,
    iconClass: "bg-earth-100 text-earth-700",
    title: "স্বচ্ছ যোগাযোগ ও তথ্য",
    description:
      "একটি ট্রিপ বুক করার আগে কী অন্তর্ভুক্ত আছে, কীভাবে পরিকল্পনা হবে এবং কী ধরনের সহায়তা পাওয়া যাবে—এসব তথ্য পরিষ্কারভাবে জানানো আমাদের লক্ষ্য।",
  },
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
      className={`flex h-20 w-20 items-center justify-center rounded-full ${bg}`}
    >
      <span className={`text-2xl font-bold tracking-wide ${fg}`}>
        {initials}
      </span>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <Link
                href="/"
                aria-label="SylhetTrail home"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-600 focus-visible:ring-offset-2"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </Link>

              <div className="min-w-0">
                <p className="truncate text-sm text-muted-foreground">
                  SylhetTrail
                </p>
                <h1 className="truncate text-base font-semibold text-foreground sm:text-lg">
                  আমাদের সম্পর্কে
                </h1>
              </div>
            </div>

            <LanguageToggle />
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-muted/30">
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-tea-200/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-river-200/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-tea-200 bg-tea-50 px-4 py-2 text-sm font-semibold text-tea-800">
              <Users className="h-4 w-4" aria-hidden="true" />
              বিশ্ববিদ্যালয়ের বন্ধুদের একটি উদ্যোগ
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              ৫ জন বন্ধু,
              <span className="block text-tea-700">
                সিলেটকে জানার একটি যাত্রা
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              SylhetTrail তৈরি হয়েছে সিলেটের প্রকৃতি, গন্তব্য ও পর্যটন সম্ভাবনা
              নিয়ে আমাদের আগ্রহ, স্টাডি এবং গবেষণা থেকে। আমরা সিলেটের স্থানীয়
              নই—তাই নিজেদের স্থানীয় বলে দাবি না করে, তথ্যভিত্তিক ও
              দায়িত্বশীলভাবে ভ্রমণ পরিকল্পনা সহজ করতে চাই।
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-tea-700">
                  আমাদের গল্প
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  ভ্রমণকে আরও সহজ, পরিষ্কার ও অর্থবহ করার চেষ্টা
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    আমরা সবাই বিশ্ববিদ্যালয়ের বন্ধু। আমি Ahmed Shuvo,
                    SylhetTrail-এর টিম লিড। সিলেটের প্রতি আমাদের আগ্রহ থেকেই
                    এই উদ্যোগের শুরু।
                  </p>

                  <p>
                    সিলেটের বিভিন্ন গন্তব্য, যাতায়াত ব্যবস্থা, রুট, খরচ,
                    মৌসুমি পরিবর্তন এবং পর্যটকদের সাধারণ সমস্যাগুলো নিয়ে আমরা
                    দীর্ঘদিন ধরে পড়াশোনা ও গবেষণা করছি।
                  </p>

                  <p>
                    আমাদের লক্ষ্য হলো ভ্রমণকারীদের জন্য প্রয়োজনীয় তথ্য এক
                    জায়গায় আনা এবং একটি ট্রিপ পরিকল্পনা করা যতটা সম্ভব সহজ
                    করা। আমরা স্থানীয় হওয়ার দাবি করি না; বরং স্থানীয়
                    বাস্তবতা বুঝতে, যাচাই করতে এবং সম্মানের সঙ্গে উপস্থাপন করতে
                    কাজ করি।
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-tea-200 bg-tea-50 p-6 shadow-sm sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tea-700 text-white">
                  <Heart className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-tea-950">
                  আমাদের উদ্দেশ্য
                </h3>

                <p className="mt-4 leading-8 text-tea-900/75">
                  সিলেটের সৌন্দর্য সম্পর্কে আরও মানুষকে জানানো এবং ভ্রমণ
                  পরিকল্পনাকে সহজ, তথ্যভিত্তিক ও স্বচ্ছ করে তোলা।
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "সিলেটের গন্তব্য নিয়ে গবেষণা করা",
                    "ভ্রমণ পরিকল্পনার তথ্য সহজভাবে উপস্থাপন করা",
                    "দায়িত্বশীল ও স্বচ্ছ পর্যটনকে উৎসাহিত করা",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-tea-950/80"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tea-700 text-xs text-white">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-tea-700">
                আমরা কীভাবে কাজ করি
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                আমাদের কাজের ভিত্তি
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                আমাদের পরিচয় ও কাজের ধরন সম্পর্কে আমরা পরিষ্কার থাকতে চাই।
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon

                return (
                  <article
                    key={principle.title}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${principle.iconClass}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-foreground">
                      {principle.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {principle.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Transparency Statement */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-earth-100 text-earth-700">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    একটি গুরুত্বপূর্ণ স্বচ্ছতা
                  </h2>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    আমরা Sylhet-এর স্থানীয় বাসিন্দা নই এবং নিজেদের স্থানীয়
                    গাইড বা স্থানীয় অপারেটর হিসেবে উপস্থাপন করি না। SylhetTrail
                    হলো বিশ্ববিদ্যালয়ের বন্ধুদের তৈরি একটি গবেষণাভিত্তিক
                    পর্যটন উদ্যোগ। যেসব তথ্য বা সেবা আমরা নিশ্চিতভাবে দিতে
                    পারি, সেগুলোই পরিষ্কারভাবে উপস্থাপন করা আমাদের নীতি।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-tea-700">
                Meet the team
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                আমাদের টিম
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                বিশ্ববিদ্যালয়ের বন্ধুদের এই দল SylhetTrail-এর গবেষণা, পরিকল্পনা
                এবং উন্নয়নের পেছনে কাজ করছে।
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm transition-transform hover:-translate-y-1 sm:p-5"
                >
                  <div
                    className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-background p-2 ring-2 ${member.ring}`}
                  >
                    <InitialsAvatar
                      initials={member.initials}
                      bg={member.bg}
                      fg={member.fg}
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-foreground sm:text-base">
                    {member.name}
                  </h3>

                  <p
                    className={`mt-1 text-xs font-medium ${
                      member.id === 1
                        ? "text-tea-700"
                        : "text-muted-foreground"
                    }`}
                  >
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-tea-900 py-16 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              সিলেট সম্পর্কে আরও জানতে চান?
            </h2>

            <p className="mt-4 leading-7 text-tea-100">
              আমাদের গন্তব্যগুলো দেখুন অথবা আপনার জন্য উপযুক্ত একটি ট্রিপ
              পরিকল্পনা শুরু করুন।
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-tea-900 transition-colors hover:bg-tea-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tea-900"
              >
                গন্তব্য দেখুন
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                href="/build-trip"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tea-900"
              >
                ট্রিপ তৈরি করুন
                <ArrowLeft
                  className="h-5 w-5 rotate-180"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
