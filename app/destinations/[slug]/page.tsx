import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, MapPin, ArrowRight } from "lucide-react"
import { destinations, packages } from "@/lib/data"
import { LanguageToggle } from "@/components/language-toggle"
import { PackageCard } from "@/components/package-card"
import { notFound } from "next/navigation"

interface Props {
  params: { slug: string }
}

export default function DestinationDetailPage({ params }: Props) {
  const dest = destinations.find((d) => d.slug === params.slug)
  if (!dest) notFound()

  const relatedPackages = packages.filter((p) =>
    p.itinerary.some((day: any) =>
      day.activities.some((a: any) => a.bn.includes(dest.name_bn))
    )
  )

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/destinations" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <span className="text-sm font-medium">{dest.name_bn}</span>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image src={dest.cover_image_url} alt={dest.name_bn} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{dest.name_bn}</h1>
            <p className="text-white/80 mt-2">{dest.name_en}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-muted/50 rounded-xl p-4">
            <Clock className="w-5 h-5 mb-2 text-tea-600" />
            <p className="text-sm text-muted-foreground">সাধারণ সময়</p>
            <p className="font-semibold">{dest.typical_duration_hours} ঘন্টা</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4">
            <MapPin className="w-5 h-5 mb-2 text-river-600" />
            <p className="text-sm text-muted-foreground">অঞ্চল</p>
            <p className="font-semibold">{dest.region}</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">বিবরণ</h2>
          <p className="text-muted-foreground leading-relaxed">{dest.description_bn}</p>
        </div>

        <div className="bg-tea-50 border border-tea-200 rounded-2xl p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">বেসিক ভ্রমণ খরচ</p>
              <p className="text-3xl font-bold text-tea-800">৳{dest.base_cost.toLocaleString("bn-BD")}</p>
            </div>
            <Link href="/build-trip" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tea-600 text-white font-semibold rounded-xl hover:bg-tea-700 transition-colors">
              এই গন্তব্য যোগ করুন <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {relatedPackages.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">সম্পর্কিত প্যাকেজ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
