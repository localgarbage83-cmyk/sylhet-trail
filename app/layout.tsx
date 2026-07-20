import type { Metadata, Viewport } from "next"
import { LanguageProvider } from "@/lib/language-context"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "SylhetTrail — Discover Sylhet, Bangladesh",
    template: "%s | SylhetTrail",
  },
  description:
    "Authentic Sylhet tours by 5 local owner-operators. Tea gardens, waterfalls, and rivers — book a fixed package or build your own custom trip, commission-based, no hidden fees.",
  keywords: ["Sylhet", "Bangladesh", "tour", "travel", "Jaflong", "Ratargul", "Bisanakandi", "tea gardens"],
  authors: [{ name: "SylhetTrail" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SylhetTrail — Discover Sylhet, Bangladesh",
    description:
      "Authentic Sylhet tours by 5 local owner-operators. Tea gardens, waterfalls, and rivers — book a fixed package or build your own custom trip.",
    url: "https://sylhettrail.com",
    siteName: "SylhetTrail",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SylhetTrail — Sylhet landscape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SylhetTrail — Discover Sylhet, Bangladesh",
    description: "Authentic Sylhet tours by 5 local owner-operators, commission-based, no hidden fees.",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#5c6a4c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className="min-h-screen bg-background relative">
        {/* Site-wide ambient background — soft tea/river/forest wash, sits behind every page */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-tea-200/30 blur-3xl" />
          <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-river-200/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-forest-100/30 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        </div>

        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
