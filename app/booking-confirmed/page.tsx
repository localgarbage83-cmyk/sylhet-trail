"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Check, MessageCircle, Home, Calendar } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"

function BookingConfirmedContent() {
  const searchParams = useSearchParams()
  const ref = searchParams.get("ref") || "ST-2026-XXXX"

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold mb-2">বুকিং কনফার্মড!</h1>
        <p className="text-muted-foreground mb-6">
          আপনার বুকিং সফলভাবে সম্পন্ন হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <p className="text-sm text-muted-foreground mb-1">বুকিং রেফারেন্স</p>
          <p className="text-2xl font-bold font-mono tracking-wider">{ref}</p>
        </div>

        <div className="space-y-3 mb-8">
          <a
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp-এ ফলো-আপ করুন
          </a>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-border font-medium rounded-xl hover:bg-muted transition-colors"
          >
            <Home className="w-5 h-5" />
            হোমে ফিরুন
          </Link>
        </div>

        <p className="text-xs text-muted-foreground">
          কোনো সমস্যা হলে সরাসরি WhatsApp-এ মেসেজ করুন অথবা hello@sylhettrail.com-এ ইমেইল করুন
        </p>
      </div>
    </div>
  )
}

export default function BookingConfirmedPage() {
  return (
    <Suspense fallback={null}>
      <BookingConfirmedContent />
    </Suspense>
  )
}
