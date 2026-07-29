"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Sparkles,
  WalletCards,
} from "lucide-react"

import { useLanguage } from "@/lib/language-context"

interface DestinationCardProps {
  destination: {
    slug: string
    name_bn: string
    name_en: string
    description_bn: string
    description_en: string
    base_cost: number
    typical_duration_hours: number
    cover_image_url: string
    region: string
  }
}

export function DestinationCard({
  destination,
}: DestinationCardProps) {
  const { t } = useLanguage()

  const formattedCost = new Intl.NumberFormat("en-BD").format(
    destination.base_cost,
  )

  const durationLabel =
    destination.typical_duration_hours === 1
      ? t("১ ঘণ্টা", "1 hr")
      : t(
          `${destination.typical_duration_hours} ঘণ্টা`,
          `${destination.typical_duration_hours} hrs`,
        )

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      aria-label={`${t(destination.name_bn, destination.name_en)} ${t(
        "গন্তব্য সম্পর্কে বিস্তারিত দেখুন",
        "View destination details",
      )}`}
      className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-600 focus-visible:ring-offset-2"
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={destination.cover_image_url}
          alt={t(destination.name_bn, destination.name_en)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-110"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />
        <div className="absolute inset-0 bg-tea-950/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Region badge */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{t("সিলেট", destination.region)}</span>
        </div>

        {/* Featured label */}
        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{t("ঘুরে দেখুন", "Explore")}</span>
        </div>

        {/* Image title */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/75">
              {t("গন্তব্য", "Destination")}
            </p>

            <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
              {t(destination.name_bn, destination.name_en)}
            </h3>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-tea-800 shadow-lg transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <p className="line-clamp-2 min-h-[3.5rem] text-sm leading-7 text-muted-foreground">
          {t(destination.description_bn, destination.description_en)}
        </p>

        <div className="my-4 h-px bg-border" />

        <div className="flex items-center justify-between gap-3">
          {/* Duration */}
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-river-100 text-river-700">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
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

          {/* Starting price */}
          <div className="flex min-w-0 items-center gap-2 text-right">
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {t("শুরু থেকে", "Starting from")}
              </p>
              <p className="truncate text-sm font-bold text-tea-700">
                ৳{formattedCost}
              </p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-tea-100 text-tea-700">
              <WalletCards className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* Bottom action hint */}
        <div className="mt-5 flex items-center justify-between text-sm font-semibold text-tea-700">
          <span>{t("বিস্তারিত দেখুন", "View details")}</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}
