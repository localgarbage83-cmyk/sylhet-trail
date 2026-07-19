"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface PackageCardProps {
  pkg: {
    slug: string
    title_bn: string
    title_en: string
    description_bn: string
    description_en: string
    duration_days: number
    base_price: number
    cover_image_url: string
  }
}

export function PackageCard({ pkg }: PackageCardProps) {
  const { t } = useLanguage()

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={pkg.cover_image_url}
          alt={t(pkg.title_bn, pkg.title_en)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium">
          {pkg.duration_days} {t("দিন", "days")}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-tea-600 transition-colors">
          {t(pkg.title_bn, pkg.title_en)}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {t(pkg.description_bn, pkg.description_en)}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-tea-700">৳{pkg.base_price.toLocaleString("bn-BD")}</span>
            <span className="text-xs text-muted-foreground"> / {t("ব্যক্তি", "person")}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm text-tea-600 font-medium group-hover:gap-2 transition-all">
            {t("বিস্তারিত", "Details")} <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
