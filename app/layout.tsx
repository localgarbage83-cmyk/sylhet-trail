import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

import { LanguageProvider } from "@/lib/language-context"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

const siteUrl = "https://sylhettrail.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SylhetTrail — Discover Sylhet, Bangladesh",
    template: "%s | SylhetTrail",
  },

  description:
    "Authentic Sylhet tours by local owner-operators. Explore tea gardens, waterfalls, rivers, and hidden gems with fixed packages or custom trips. No hidden fees.",

  keywords: [
    "Sylhet",
    "Sylhet tours",
    "Bangladesh travel",
    "Bangladesh tourism",
    "Jaflong",
    "Ratargul",
    "Bisanakandi",
    "tea gardens",
    "waterfalls",
    "custom tours",
    "local tour operators",
  ],

  authors: [
    {
      name: "SylhetTrail",
      url: siteUrl,
    },
  ],

  creator: "SylhetTrail",
  publisher: "SylhetTrail",

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SylhetTrail",
    title: "SylhetTrail — Discover Sylhet, Bangladesh",
    description:
      "Explore Sylhet with local owner-operators. Discover tea gardens, waterfalls, rivers, and unforgettable places across Bangladesh.",
    locale: "bn_BD",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A beautiful landscape in Sylhet, Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SylhetTrail — Discover Sylhet, Bangladesh",
    description:
      "Authentic Sylhet tours by local owner-operators. Book fixed packages or build your own custom trip with no hidden fees.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5c6a4c",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className="relative isolate min-h-screen bg-background antialiased">
        {/* Site-wide ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-tea-200/30 blur-3xl" />

          <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-river-200/25 blur-3xl" />

          <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-forest-100/30 blur-3xl" />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        </div>

        {/* Application content */}
        <div className="relative z-10 min-h-screen">
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </div>
      </body>
    </html>
  )
}
