"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Sparkles,
  WalletCards,
} from "lucide-react"

import { useLanguage } from "@/lib/language-context"

interface PackageCardData {
  id: string | number
  slug?: string

  name_bn?: string
  name_en?: string
  title_bn?: string
  title_en?: string

  description_bn?: string
  description_en?: string

  cover_image_url?: string
  image_url?: string

  price?: number | string
  price_per_person?: number | string
  base_cost?: number | string

  duration_days?: number | string
  duration_nights?: number | string
  duration_hours?: number | string

  region?: string
  destination_count?: number | string
  destinations?: unknown[]

  featured?: boolean
  is_featured?: boolean

  highlights_bn?: string[]
  highlights_en?: string[]
}

interface PackageCardProps {
  pkg: PackageCardData
}

function toNumber(value: number | string | undefined) {
  if (value === undefined || value === null || value === "") {
    return undefined
  }

  const parsedValue = Number(value)

  return Number.isFinite(parsedValue) ? parsedValue : undefined
}

export function PackageCard({ pkg }: PackageCardProps) {
  const { t } = useLanguage()

  const titleBn = pkg.name_bn ?? pkg.title_bn ?? "সিলেট ভ্রমণ প্যাকেজ"
  const titleEn = pkg.name_en ?? pkg.title_en ?? "Sylhet Travel Package"

  const descriptionBn =
    pkg.description_bn ??
    "সিলেটের সুন্দর গন্তব্যগুলো ঘুরে দেখার জন্য সাজানো একটি ভ্রমণ প্যাকেজ।"

  const descriptionEn =
    pkg.description_en ??
    "A thoughtfully planned package to explore the beautiful destinations of Sylhet."

  const imageUrl = pkg.cover_image_url ?? pkg.image_url

  const rawPrice =
    pkg.price_per_person ?? pkg.price ?? pkg.base_cost

  const price = toNumber(rawPrice)

  const priceLabel =
    pkg.price_per_person !== undefined
      ? t("প্রতি ব্যক্তি থেকে", "Per person from")
      : t("শুরু থেকে", "Starting from")

  const formattedPrice =
    price !== undefined
      ? new Intl.NumberFormat("en-BD").format(price)
      : null

  const durationDays = toNumber(pkg.duration_days)
  const durationNights = toNumber(pkg.duration_nights)
  const durationHours = toNumber(pkg.duration_hours)

  let durationLabel = t("সময়কাল জানা যাবে", "Duration available soon")

  if (durationDays !== undefined) {
    durationLabel =
      durationNights !== undefined && durationNights > 0
        ? t(
            `${durationDays} দিন / ${durationNights} রাত`,
            `${durationDays} days / ${durationNights} nights`,
          )
        : t(`${durationDays} দিন`, `${durationDays} days`)
  } else if (durationHours !== undefined) {
    durationLabel =
      durationHours === 1
        ? t("১ ঘণ্টা", "1 hour")
        : t(`${durationHours} ঘণ্টা`, `${durationHours} hours`)
  }

  const destinationCount =
    toNumber(pkg.destination_count) ??
    (Array.isArray(pkg.destinations) ? pkg.destinations.length : undefined)

  const destinationLabel =
    destinationCount !== undefined && destinationCount > 0
      ? t(
          `${destinationCount}টি গন্তব্য`,
          `${destinationCount} destinations`,
        )
      : pkg.region
        ? t("সিলেট অঞ্চল", pkg.region)
        : null

  const highlightsBn = pkg.highlights_bn?.filter(Boolean).slice(0, 2) ?? []
  const highlightsEn = pkg.highlights_en?.filter(Boolean).slice(0, 2) ?? []

  const isFeatured = Boolean(pkg.featured ?? pkg.is_featured)

  const href = `/packages/${encodeURIComponent(
    String(pkg.slug ?? pkg.id),
  )}`

  return (
    <Link
      href={href}
      aria-label={`${t(titleBn, titleEn)} — ${t(
        "প্যাকেজের বিস্তারিত দেখুন",
        "View package details",
      )}`}
      className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-600 focus-visible:ring-offset-2"
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={t(titleBn, titleEn)}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            className="object-cover transition duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-tea-800 via-tea-700 to-river-800">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_28%),radial-gradient(circle_at_80%_70%,white_0,transparent_25%)]" />
          </div>
        )}

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25" />

        <div className="absolute inset-0 bg-tea-950/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Top badges */}
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
          {isFeatured ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-tea-800/80 px-3 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {t("জনপ্রিয় প্যাকেজ", "Popular package")}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {t("সিলেট ভ্রমণ", "Sylhet travel")}
            </span>
          )}

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-tea-800 shadow-lg transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        {/* Image title */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-white/75">
            {t("ট্রাভেল প্যাকেজ", "Travel package")}
          </p>

          <h3 className="max-w-[90%] text-xl font-bold leading-tight text-white sm:text-2xl">
            {t(titleBn, titleEn)}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="line-clamp-2 min-h-[3.5rem] text-sm leading-7 text-muted-foreground">
          {t(descriptionBn, descriptionEn)}
        </p>

        {/* Highlights */}
        {(highlightsBn.length > 0 || highlightsEn.length > 0) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {(highlightsBn.length > 0 ? highlightsBn : highlightsEn).map(
              (highlight, index) => (
                <span
                  key={`${highlight}-${index}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-tea-50 px-2.5 py-1 text-xs font-medium text-tea-800"
                >
                  <Check className="h-3 w-3" aria-hidden="true" />
                  {highlight}
                </span>
              ),
            )}
          </div>
        )}

        <div className="my-5 h-px bg-border" />

        {/* Package information */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-river-100 text-river-700">
              {durationDays !== undefined ? (
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Clock3 className="h-4 w-4" aria-hidden="true" />
              )}
            </span>

            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {t("সময়কাল", "Duration")}
              </p>
              <p className="truncate text-sm font-semibold text-foreground">
                {durationLabel}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-center justify-end gap-2 text-right">
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {priceLabel}
              </p>

              <p className="truncate text-sm font-bold text-tea-700">
                {formattedPrice ? `৳${formattedPrice}` : t("জানুন", "Ask us")}
              </p>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tea-100 text-tea-700">
              <WalletCards className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* Destination count */}
        {destinationLabel ? (
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-tea-700" aria-hidden="true" />
            <span>{destinationLabel}</span>
          </div>
        ) : null}

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-tea-700">
          <span>{t("প্যাকেজের বিস্তারিত দেখুন", "View package details")}</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}
