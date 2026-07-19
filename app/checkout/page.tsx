"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Check, Shield, CreditCard } from "lucide-react"
import { useTripBuilderStore } from "@/lib/trip-builder-store"
import { calculateTripPrice } from "@/lib/pricing"
import { packages } from "@/lib/data"
import { LanguageToggle } from "@/components/language-toggle"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  const packageSlug = searchParams.get("package")
  const store = useTripBuilderStore()
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)

  let tripDetails: any = null
  let priceBreakdown: any = null

  if (type === "fixed" && packageSlug) {
    const pkg = packages.find((p) => p.slug === packageSlug)
    if (pkg) {
      tripDetails = {
        type: "fixed",
        title: pkg.title_bn,
        duration: pkg.duration_days,
        packageSlug: pkg.slug,
      }
      priceBreakdown = {
        total: pkg.base_price * 2, // assume 2 adults
        perPerson: pkg.base_price,
        baseCost: pkg.base_price * 2,
        addOnsCost: 0,
        groupDiscount: 0,
        details: { destinationsCost: pkg.base_price * 2, durationMultiplier: 1, adults: 2, children: 0, childrenDiscount: 0, addOns: [] },
      }
    }
  } else if (type === "custom") {
    priceBreakdown = calculateTripPrice({
      selectedDestinations: store.selectedDestinations,
      durationDays: store.durationDays,
      adults: store.adults,
      children: store.children,
      selectedAddOns: store.selectedAddOns,
    })
    tripDetails = {
      type: "custom",
      destinations: store.selectedDestinations.map((d) => d.name_bn),
      duration: store.durationDays,
      adults: store.adults,
      children: store.children,
      addOns: store.selectedAddOns.map((a) => a.name_bn),
    }
  }

  const handlePayment = async () => {
    setLoading(true)
    // In production, call /api/payment/init
    await new Promise((r) => setTimeout(r, 1500))
    window.location.href = "/booking-confirmed?ref=ST-2026-0042"
  }

  if (!tripDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">কোনো ট্রিপ নির্বাচন করা হয়নি</p>
          <Link href="/" className="text-tea-600 hover:underline mt-2 inline-block">হোমে ফিরুন</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/build-trip" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-semibold">চেকআউট</h1>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">ট্রিপ সারাংশ</h2>
          <div className="space-y-3">
            {tripDetails.type === "fixed" ? (
              <>
                <div className="flex justify-between"><span className="text-muted-foreground">প্যাকেজ</span><span className="font-medium">{tripDetails.title}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">সময়কাল</span><span className="font-medium">{tripDetails.duration} দিন</span></div>
              </>
            ) : (
              <>
                <div className="flex justify-between"><span className="text-muted-foreground">গন্তব্য</span><span className="font-medium">{tripDetails.destinations.join(", ")}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">সময়কাল</span><span className="font-medium">{tripDetails.duration} দিন</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">গ্রুপ</span><span className="font-medium">{tripDetails.adults} প্রাপ্তবয়স্ক, {tripDetails.children} শিশু</span></div>
                {tripDetails.addOns.length > 0 && (
                  <div className="flex justify-between"><span className="text-muted-foreground">অ্যাড-অন</span><span className="font-medium">{tripDetails.addOns.join(", ")}</span></div>
                )}
              </>
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">মোট</span>
              <span className="text-2xl font-bold text-tea-700">৳{priceBreakdown.total.toLocaleString("bn-BD")}</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">যোগাযোগের তথ্য</h2>
          {tripDetails.type === "custom" ? (
            <div className="space-y-2 text-sm">
              <p><span className="text-muted-foreground">নাম:</span> {store.customerName || "—"}</p>
              <p><span className="text-muted-foreground">ফোন:</span> {store.customerPhone || "—"}</p>
              <p><span className="text-muted-foreground">ইমেইল:</span> {store.customerEmail || "—"}</p>
            </div>
          ) : (
            <div className="space-y-4">
              <input type="text" placeholder="আপনার নাম" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500" />
              <input type="tel" placeholder="ফোন নম্বর" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500" />
              <input type="email" placeholder="ইমেইল" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500" />
            </div>
          )}
        </div>

        <div className="bg-tea-50 border border-tea-200 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-tea-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-tea-800">নিরাপদ পেমেন্ট</p>
              <p className="text-sm text-tea-600">SSLCommerz দিয়ে নিরাপদে পেমেন্ট করুন। আপনার তথ্য এনক্রিপ্টেড।</p>
            </div>
          </div>
        </div>

        <label className="flex items-start gap-3 mb-6 cursor-pointer">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 rounded border-border text-tea-600 focus:ring-tea-500" />
          <span className="text-sm text-muted-foreground">আমি SylhetTrail-এর শর্তাবলী ও বুকিং নীতি মেনে নিচ্ছি</span>
        </label>

        <button
          onClick={handlePayment}
          disabled={!agreed || loading}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-tea-600 text-white font-semibold rounded-xl hover:bg-tea-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "প্রক্রিয়াকরণ হচ্ছে..." : (
            <>
              <CreditCard className="w-5 h-5" />
              SSLCommerz দিয়ে পেমেন্ট করুন — ৳{priceBreakdown.total.toLocaleString("bn-BD")}
            </>
          )}
        </button>
      </main>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-tea-600 border-t-transparent rounded-full" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}
