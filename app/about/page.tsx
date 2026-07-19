import Link from "next/link"
import { ArrowLeft, Users, Heart, MapPin, Shield } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"

const partners = [
  { id: 1, name: "Ahammad Shuvo", initials: "AS", bg: "bg-tea-100", fg: "text-tea-600", ring: "ring-tea-200" },
  { id: 2, name: "Tanvir Sarwar", initials: "TS", bg: "bg-river-100", fg: "text-river-600", ring: "ring-river-200" },
  { id: 3, name: "Mithun Prashadi", initials: "MP", bg: "bg-forest-100", fg: "text-forest-600", ring: "ring-forest-200" },
  { id: 4, name: "Salman Sakib", initials: "SS", bg: "bg-earth-100", fg: "text-earth-600", ring: "ring-earth-200" },
  { id: 5, name: "Ahmed Nayem", initials: "AN", bg: "bg-tea-100", fg: "text-tea-700", ring: "ring-tea-300" },
]

function InitialsAvatar({ initials, bg, fg }: { initials: string; bg: string; fg: string }) {
  return (
    <svg viewBox="0 0 80 80" className={`w-20 h-20 rounded-full ${bg}`}>
      <text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        className={`${fg} font-semibold`}
        fontSize="26"
        fontFamily="inherit"
      >
        {initials}
      </text>
    </svg>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-semibold">আমাদের সম্পর্কে</h1>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">৫ জন পার্টনার, একটিমাত্র মিশন</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SylhetTrail কোনো বড় কর্পোরেশন নয়। আমরা ৫ জন স্থানীয় মালিক-অপারেটর যারা নিজেদের এলাকার বিশেষজ্ঞ।
            কোনো বেতনভুক কর্মচারী নেই — প্রতিটি ট্যুরের আয় সরাসরি পার্টনারদের কাছে যায়।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-tea-100 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-tea-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hub-and-Spoke মডেল</h3>
            <p className="text-muted-foreground">
              SylhetTrail হলো হাব — ওয়েবসাইট, বুকিং, এবং কাস্টমার সাপোর্ট। প্রতিটি পার্টনার নিজের রুট ও অভিজ্ঞতা সরবরাহ করে।
              এতে প্রতিটি ট্যুরে সেরা স্থানীয় জ্ঞান পাওয়া যায়।
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-river-100 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-river-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">কমিশন-ভিত্তিক, সাবস্ক্রিপশন নয়</h3>
            <p className="text-muted-foreground">
              আমরা প্রতিটি বুকিং থেকে কমিশন নেই। কোনো মাসিক ফি নেই, কোনো লুকানো খরচ নেই।
              পার্টনাররা শুধুমাত্র তাদের রুট বুক হলে আয় পান।
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-forest-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">স্থানীয় বিশেষজ্ঞতা</h3>
            <p className="text-muted-foreground">
              প্রতিটি পার্টনার তার নিজের এলাকায় বড় হয়েছেন। তারা জানেন কোন রাস্তায় যেতে হবে,
              কোন সময়ে কোন স্থানে সূর্যোদয় সবচেয়ে সুন্দর, এবং কোন দোকানে সেরা চা পাওয়া যায়।
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-earth-100 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-earth-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">নিরাপদ ও স্বচ্ছ</h3>
            <p className="text-muted-foreground">
              SSLCommerz দিয়ে নিরাপদ পেমেন্ট। প্রতিটি বুকিং একটি রেফারেন্স নম্বর পায়।
              WhatsApp-এ সরাসরি আপডেট এবং সমস্যা সমাধান।
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">আমাদের পার্টনাররা</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-card border border-border rounded-2xl p-4 text-center">
                <div className={`relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ring-2 ${partner.ring} flex items-center justify-center`}>
                  <InitialsAvatar initials={partner.initials} bg={partner.bg} fg={partner.fg} />
                </div>
                <h3 className="font-semibold text-sm">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}