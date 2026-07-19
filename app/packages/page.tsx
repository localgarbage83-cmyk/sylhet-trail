import Link from "next/link"
import { ArrowLeft, SlidersHorizontal } from "lucide-react"
import { packages } from "@/lib/data"
import { PackageCard } from "@/components/package-card"
import { LanguageToggle } from "@/components/language-toggle"

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-semibold">সব প্যাকেজ</h1>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="px-4 py-2 bg-tea-600 text-white text-sm font-medium rounded-lg">সব</button>
          <button className="px-4 py-2 bg-muted text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors">১ দিন</button>
          <button className="px-4 py-2 bg-muted text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors">২ দিন</button>
          <button className="px-4 py-2 bg-muted text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors">৩+ দিন</button>
          <button className="px-4 py-2 bg-muted text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" /> ফিল্টার
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.filter((p) => p.active).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </main>
    </div>
  )
}
