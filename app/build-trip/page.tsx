"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Check, ChevronRight, ChevronLeft, MapPin, Calendar, Users, Sparkles, Phone, Mail, User, MessageCircle } from "lucide-react"
import { useTripBuilderStore } from "@/lib/trip-builder-store"
import { calculateTripPrice } from "@/lib/pricing"
import { destinations, addOns } from "@/lib/data"
import { LanguageToggle } from "@/components/language-toggle"

const steps = [
  { id: 0, title_bn: "গন্তব্য", title_en: "Destinations", icon: MapPin },
  { id: 1, title_bn: "সময়", title_en: "Duration", icon: Calendar },
  { id: 2, title_bn: "গ্রুপ", title_en: "Group", icon: Users },
  { id: 3, title_bn: "অ্যাড-অন", title_en: "Add-ons", icon: Sparkles },
  { id: 4, title_bn: "রিভিউ", title_en: "Review", icon: Check },
  { id: 5, title_bn: "যোগাযোগ", title_en: "Contact", icon: Phone },
]

export default function BuildTripPage() {
  const router = useRouter()
  const store = useTripBuilderStore()
  const [currentStep, setCurrentStep] = useState(store.currentStep)

  const priceBreakdown = calculateTripPrice({
    selectedDestinations: store.selectedDestinations,
    durationDays: store.durationDays,
    adults: store.adults,
    children: store.children,
    selectedAddOns: store.selectedAddOns,
  })

  const canProceed = () => {
    if (currentStep === 0) return store.selectedDestinations.length > 0
    if (currentStep === 1) return store.durationDays >= 1
    if (currentStep === 2) return store.adults >= 1
    if (currentStep === 3) return true
    if (currentStep === 4) return true
    if (currentStep === 5) return store.customerName && store.customerPhone
    return true
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      store.setCurrentStep(currentStep + 1)
    } else {
      // Go to checkout
      router.push("/checkout?type=custom")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      store.setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-semibold">নিজের ট্রিপ তৈরি করুন</h1>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stepper */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isActive = idx === currentStep
              const isCompleted = idx < currentStep
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    isActive ? "bg-tea-600 text-white" :
                    isCompleted ? "bg-tea-100 text-tea-700" : "bg-muted text-muted-foreground"
                  }`}>
                    {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs mt-2 hidden sm:block ${isActive ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {step.title_bn}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-tea-600 transition-all duration-300" style={{ width: `${((currentStep) / (steps.length - 1)) * 100}%` }} />
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {currentStep === 0 && <DestinationsStep />}
          {currentStep === 1 && <DurationStep />}
          {currentStep === 2 && <GroupStep />}
          {currentStep === 3 && <AddOnsStep />}
          {currentStep === 4 && <ReviewStep />}
          {currentStep === 5 && <ContactStep />}
        </div>

        {/* Running Total */}
        <div className="sticky bottom-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">মোট খরচ</p>
              <p className="text-2xl font-bold text-tea-700">৳{priceBreakdown.total.toLocaleString("bn-BD")}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">প্রতি ব্যক্তি</p>
              <p className="font-semibold">৳{priceBreakdown.perPerson.toLocaleString("bn-BD")}</p>
            </div>
          </div>
          <div className="flex gap-3">
            {currentStep > 0 && (
              <button onClick={handleBack} className="px-6 py-3 border border-border rounded-xl font-medium hover:bg-muted transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-tea-600 text-white font-medium rounded-xl hover:bg-tea-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === steps.length - 1 ? "চেকআউট" : "পরবর্তী"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

function DestinationsStep() {
  const { selectedDestinations, toggleDestination } = useTripBuilderStore()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">গন্তব্য নির্বাচন করুন</h2>
      <p className="text-muted-foreground mb-6">আপনি যেসব স্থান দেখতে চান তা বেছে নিন</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {destinations.map((dest) => {
          const isSelected = selectedDestinations.some((d) => d.id === dest.id)
          return (
            <button
              key={dest.id}
              onClick={() => toggleDestination({
                id: dest.id,
                name_bn: dest.name_bn,
                name_en: dest.name_en,
                base_cost: dest.base_cost,
                typical_duration_hours: dest.typical_duration_hours,
              })}
              className={`relative flex items-start gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                isSelected ? "border-tea-500 bg-tea-50" : "border-border bg-card hover:border-tea-200"
              }`}
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                <Image src={dest.cover_image_url} alt={dest.name_bn} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold">{dest.name_bn}</h3>
                <p className="text-xs text-muted-foreground mt-1">{dest.typical_duration_hours} ঘন্টা</p>
                <p className="text-sm font-medium text-tea-600 mt-1">৳{dest.base_cost.toLocaleString("bn-BD")}</p>
              </div>
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-tea-600 text-white flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function DurationStep() {
  const { durationDays, preferredStartDate, setDurationDays, setPreferredStartDate } = useTripBuilderStore()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">সময়কাল ও তারিখ</h2>
      <p className="text-muted-foreground mb-6">কতদিনের ট্রিপ এবং কখন যেতে চান</p>

      <div className="space-y-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm font-medium mb-3">ট্রিপের সময়কাল (দিন)</label>
          <div className="flex items-center gap-4">
            <button onClick={() => setDurationDays(Math.max(1, durationDays - 1))} className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-lg font-bold hover:bg-muted/80">−</button>
            <span className="text-3xl font-bold w-16 text-center">{durationDays}</span>
            <button onClick={() => setDurationDays(Math.min(7, durationDays + 1))} className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-lg font-bold hover:bg-muted/80">+</button>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm font-medium mb-3">পREFERRED তারিখ</label>
          <input
            type="date"
            value={preferredStartDate || ""}
            onChange={(e) => setPreferredStartDate(e.target.value || null)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500"
          />
        </div>
      </div>
    </div>
  )
}

function GroupStep() {
  const { adults, children, setAdults, setChildren } = useTripBuilderStore()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">গ্রুপের আকার</h2>
      <p className="text-muted-foreground mb-6">কতজন যাচ্ছেন</p>

      <div className="space-y-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm font-medium mb-3">প্রাপ্তবয়স্ক (১২+ বছর)</label>
          <div className="flex items-center gap-4">
            <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-lg font-bold hover:bg-muted/80">−</button>
            <span className="text-3xl font-bold w-16 text-center">{adults}</span>
            <button onClick={() => setAdults(Math.min(20, adults + 1))} className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-lg font-bold hover:bg-muted/80">+</button>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm font-medium mb-3">শিশু (৩-১১ বছর)</label>
          <div className="flex items-center gap-4">
            <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-lg font-bold hover:bg-muted/80">−</button>
            <span className="text-3xl font-bold w-16 text-center">{children}</span>
            <button onClick={() => setChildren(Math.min(10, children + 1))} className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-lg font-bold hover:bg-muted/80">+</button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">শিশুদের জন্য ৫০% ডিসকাউন্ট প্রযোজ্য</p>
        </div>
      </div>
    </div>
  )
}

function AddOnsStep() {
  const { selectedAddOns, toggleAddOn } = useTripBuilderStore()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">অতিরিক্ত সুবিধা</h2>
      <p className="text-muted-foreground mb-6">আপনার ট্রিপ আরও আরামদায়ক করুন</p>

      <div className="space-y-4">
        {addOns.map((addon) => {
          const isSelected = selectedAddOns.some((a) => a.id === addon.id)
          return (
            <button
              key={addon.id}
              onClick={() => toggleAddOn(addon)}
              className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 text-left transition-all ${
                isSelected ? "border-tea-500 bg-tea-50" : "border-border bg-card hover:border-tea-200"
              }`}
            >
              <div>
                <h3 className="font-semibold">{addon.name_bn}</h3>
                <p className="text-xs text-muted-foreground mt-1">{addon.type === "per_person" ? "প্রতি ব্যক্তি" : "ফ্ল্যাট রেট"}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-tea-700">৳{addon.price.toLocaleString("bn-BD")}</p>
                {isSelected && <Check className="w-5 h-5 text-tea-600 ml-auto mt-1" />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ReviewStep() {
  const store = useTripBuilderStore()
  const price = calculateTripPrice({
    selectedDestinations: store.selectedDestinations,
    durationDays: store.durationDays,
    adults: store.adults,
    children: store.children,
    selectedAddOns: store.selectedAddOns,
  })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">রিভিউ ও কোট</h2>
      <p className="text-muted-foreground mb-6">আপনার ট্রিপের বিবরণ যাচাই করুন</p>

      <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
        <div className="flex justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">গন্তব্য</span>
          <span className="font-medium">{store.selectedDestinations.map((d) => d.name_bn).join(", ")}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">সময়কাল</span>
          <span className="font-medium">{store.durationDays} দিন</span>
        </div>
        <div className="flex justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">গ্রুপ</span>
          <span className="font-medium">{store.adults} প্রাপ্তবয়স্ক, {store.children} শিশু</span>
        </div>
        {store.selectedAddOns.length > 0 && (
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">অ্যাড-অন</span>
            <span className="font-medium">{store.selectedAddOns.map((a) => a.name_bn).join(", ")}</span>
          </div>
        )}
        {store.preferredStartDate && (
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">তারিখ</span>
            <span className="font-medium">{store.preferredStartDate}</span>
          </div>
        )}
        <div className="flex justify-between py-3 pt-4">
          <span className="text-lg font-bold">মোট</span>
          <span className="text-2xl font-bold text-tea-700">৳{price.total.toLocaleString("bn-BD")}</span>
        </div>
      </div>
    </div>
  )
}

function ContactStep() {
  const { customerName, customerPhone, customerEmail, customerWhatsApp, setCustomerDetails } = useTripBuilderStore()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">যোগাযোগের তথ্য</h2>
      <p className="text-muted-foreground mb-6">বুকিং কনফার্মেশনের জন্য আমাদের আপনার তথ্য প্রয়োজন</p>

      <div className="space-y-4">
        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm font-medium mb-2">পূর্ণ নাম *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerDetails({ customerName: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500"
              placeholder="আপনার নাম"
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm font-medium mb-2">ফোন নম্বর *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerDetails({ customerPhone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500"
              placeholder="01XXXXXXXXX"
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm font-medium mb-2">ইমেইল</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerDetails({ customerEmail: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm font-medium mb-2">WhatsApp নম্বর</label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="tel"
              value={customerWhatsApp}
              onChange={(e) => setCustomerDetails({ customerWhatsApp: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tea-500"
              placeholder="01XXXXXXXXX"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Need to import MessageCircle for ContactStep
