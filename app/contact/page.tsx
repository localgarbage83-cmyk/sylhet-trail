import Link from "next/link"
import { ArrowLeft, Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-semibold">যোগাযোগ</h1>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">আমাদের সাথে যোগাযোগ করুন</h2>
          <p className="text-muted-foreground">হোয়াটসঅ্যাপই সবচেয়ে দ্রুত উপায়। সরাসরি মেসেজ করুন।</p>
        </div>

        <div className="space-y-4 mb-10">
          <a href="https://wa.me/8801712345678" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-green-50 border border-green-200 rounded-2xl hover:bg-green-100 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-muted-foreground">+880 1712-345678</p>
            </div>
          </a>

          <a href="tel:+8801712345678"
            className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:bg-muted transition-colors">
            <div className="w-12 h-12 rounded-xl bg-tea-100 text-tea-600 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">ফোন</p>
              <p className="text-sm text-muted-foreground">+880 1712-345678</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-river-100 text-river-600 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">ইমেইল</p>
              <p className="text-sm text-muted-foreground">hello@sylhettrail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-earth-100 text-earth-600 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">ঠিকানা</p>
              <p className="text-sm text-muted-foreground">সিলেট, বাংলাদেশ</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-semibold mb-4">মেসেজ পাঠান</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">নাম</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500" placeholder="আপনার নাম" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ফোন</label>
              <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500" placeholder="01XXXXXXXXX" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">বার্তা</label>
              <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500" placeholder="আপনার বার্তা লিখুন..." />
            </div>
            <button type="submit" className="w-full py-3 bg-tea-600 text-white font-medium rounded-xl hover:bg-tea-700 transition-colors">
              পাঠান
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
