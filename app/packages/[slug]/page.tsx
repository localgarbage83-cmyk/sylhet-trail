import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Calendar, Users, Check, ArrowRight } from "lucide-react"
import { packages } from "@/lib/data"
import { LanguageToggle } from "@/components/language-toggle"
import { notFound } from "next/navigation"

interface Props {
  params: { slug: string }
}

export default function PackageDetailPage({ params }: Props) {
  const pkg = packages.find((p) => p.slug === params.slug)
  if (!pkg) notFound()

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/packages" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <span className="text-sm font-medium truncate max-w-[200px] sm:max-w-md">{pkg.title_bn}</span>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image src={pkg.cover_image_url} alt={pkg.title_bn} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{pkg.title_bn}</h1>
            <p className="text-white/80">{pkg.description_bn}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <Clock className="w-5 h-5 mx-auto mb-2 text-tea-600" />
            <p className="text-sm font-medium">{pkg.duration_days} দিন</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <Users className="w-5 h-5 mx-auto mb-2 text-river-600" />
            <p className="text-sm font-medium">২-১২ জন</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <Calendar className="w-5 h-5 mx-auto mb-2 text-forest-600" />
            <p className="text-sm font-medium">বছরজুড়ে</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">দৈনিক সূচি</h2>
          <div className="space-y-6">
            {pkg.itinerary.map((day: any) => (
              <div key={day.day} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-tea-100 text-tea-700 flex items-center justify-center font-bold text-sm">{day.day}</span>
                  <h3 className="font-semibold text-lg">{day.title_bn}</h3>
                </div>
                <div className="space-y-3 ml-13">
                  {day.activities.map((activity: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-sm text-muted-foreground font-mono w-12 shrink-0">{activity.time}</span>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-tea-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{activity.bn}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {pkg.gallery_urls.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">ছবি</h2>
            <div className="grid grid-cols-2 gap-4">
              {pkg.gallery_urls.map((url: string, idx: number) => (
                <div key={idx} className="relative h-48 rounded-xl overflow-hidden">
                  <Image src={url} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-tea-50 border border-tea-200 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">প্রতি ব্যক্তি</p>
              <p className="text-3xl font-bold text-tea-800">৳{pkg.base_price.toLocaleString("bn-BD")}</p>
              <p className="text-sm text-muted-foreground mt-1">গ্রুপ ডিসকাউন্ট উপলব্ধ</p>
            </div>
            <Link href={`/checkout?type=fixed&package=${pkg.slug}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tea-600 text-white font-semibold rounded-xl hover:bg-tea-700 transition-colors">
              বুক করুন <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
