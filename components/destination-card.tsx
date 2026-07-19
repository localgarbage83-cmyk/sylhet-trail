"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin } from "lucide-react"
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

export function DestinationCard({ destination }: DestinationCardProps) {
  const { t } = useLanguage()

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={destination.cover_image_url}
          alt={t(destination.name_bn, destination.name_en)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-semibold text-lg">{t(destination.name_bn, destination.name_en)}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {t(destination.description_bn, destination.description_en)}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {destination.typical_duration_hours} {t("ঘন্টা", "hrs")}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {t("সিলেট", destination.region)}
          </span>
        </div>
      </div>
    </Link>
  )
}
