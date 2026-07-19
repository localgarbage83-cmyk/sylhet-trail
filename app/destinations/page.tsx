import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { destinations } from "@/lib/data"
import { DestinationCard } from "@/components/destination-card"
import { LanguageToggle } from "@/components/language-toggle"

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-semibold">গন্তব্য সমূহ</h1>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </main>
    </div>
  )
}
