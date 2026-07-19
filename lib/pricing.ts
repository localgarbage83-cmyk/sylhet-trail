export interface PriceBreakdown {
  baseCost: number
  addOnsCost: number
  groupDiscount: number
  total: number
  perPerson: number
  details: {
    destinationsCost: number
    durationMultiplier: number
    adults: number
    children: number
    childrenDiscount: number
    addOns: Array<{ name: string; price: number }>
  }
}

export interface TripStateForPricing {
  selectedDestinations: Array<{ base_cost: number; typical_duration_hours: number }>
  durationDays: number
  adults: number
  children: number
  selectedAddOns: Array<{ price: number; type: "per_person" | "flat"; name_bn: string; name_en: string }>
}

export function calculateTripPrice(state: TripStateForPricing, lang: "bn" | "en" = "bn"): PriceBreakdown {
  // Base cost: sum of destination base costs, adjusted by duration
  const destinationsCost = state.selectedDestinations.reduce(
    (sum, d) => sum + d.base_cost,
    0
  )

  // Duration multiplier: longer trips get slight discount per day
  const durationMultiplier = Math.max(1, state.durationDays * 0.85)
  const baseCost = destinationsCost * durationMultiplier

  // Group pricing tiers
  const totalPeople = state.adults + state.children
  let groupDiscount = 0
  if (totalPeople >= 8) groupDiscount = 0.15
  else if (totalPeople >= 5) groupDiscount = 0.10
  else if (totalPeople >= 3) groupDiscount = 0.05

  // Children discount (50% off per child)
  const childrenDiscount = state.children * (baseCost / totalPeople) * 0.5

  // Add-ons
  const addOnsCost = state.selectedAddOns.reduce((sum, addon) => {
    const qty = addon.type === "per_person" ? totalPeople : 1
    return sum + addon.price * qty
  }, 0)

  const addOnsDetails = state.selectedAddOns.map((a) => ({
    name: lang === "bn" ? a.name_bn : a.name_en,
    price: a.price * (a.type === "per_person" ? totalPeople : 1),
  }))

  const subtotal = baseCost - childrenDiscount
  const afterGroupDiscount = subtotal * (1 - groupDiscount)
  const total = afterGroupDiscount + addOnsCost

  return {
    baseCost: Math.round(baseCost),
    addOnsCost: Math.round(addOnsCost),
    groupDiscount,
    total: Math.round(total),
    perPerson: totalPeople > 0 ? Math.round(total / totalPeople) : 0,
    details: {
      destinationsCost: Math.round(destinationsCost),
      durationMultiplier,
      adults: state.adults,
      children: state.children,
      childrenDiscount: Math.round(childrenDiscount),
      addOns: addOnsDetails,
    },
  }
}
