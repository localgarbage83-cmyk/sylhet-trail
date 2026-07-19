import type { Metadata, Viewport } from "next"
import { LanguageProvider } from "@/lib/language-context"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "SylhetTrail — Discover Sylhet, Bangladesh",
    template: "%s | SylhetTrail",
  },
  description: "Authentic Sylhet tours by local owner-operators. Book fixed packages or build your own custom trip.",
  keywords: ["Sylhet", "Bangladesh", "tour", "travel", "Jaflong", "Ratargul", "Bisanakandi", "tea gardens"],
  authors: [{ name: "SylhetTrail" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      <body className="min-h-screen bg-background">
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
