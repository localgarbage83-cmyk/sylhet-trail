"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface DestinationSelection {
  id: string
  name_bn: string
  name_en: string
  base_cost: number
  typical_duration_hours: number
}

export interface AddOn {
  id: string
  name_bn: string
  name_en: string
  price: number
  type: "per_person" | "flat"
}

export interface TripBuilderState {
  // Step 1: Destinations
  selectedDestinations: DestinationSelection[]
  setSelectedDestinations: (dests: DestinationSelection[]) => void
  toggleDestination: (dest: DestinationSelection) => void

  // Step 2: Duration & Dates
  durationDays: number
  preferredStartDate: string | null
  setDurationDays: (days: number) => void
  setPreferredStartDate: (date: string | null) => void

  // Step 3: Group Size
  adults: number
  children: number
  setAdults: (n: number) => void
  setChildren: (n: number) => void

  // Step 4: Add-ons
  selectedAddOns: AddOn[]
  toggleAddOn: (addon: AddOn) => void

  // Step 5: Contact
  customerName: string
  customerPhone: string
  customerEmail: string
  customerWhatsApp: string
  setCustomerDetails: (details: Partial<Pick<TripBuilderState, "customerName" | "customerPhone" | "customerEmail" | "customerWhatsApp">>) => void

  // Step tracking
  currentStep: number
  setCurrentStep: (step: number) => void

  // Reset
  reset: () => void
}

const initialState = {
  selectedDestinations: [],
  durationDays: 2,
  preferredStartDate: null,
  adults: 2,
  children: 0,
  selectedAddOns: [],
  customerName: "",
  customerPhone: "",
  customerEmail: "",
  customerWhatsApp: "",
  currentStep: 0,
}

export const useTripBuilderStore = create<TripBuilderState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setSelectedDestinations: (dests) => set({ selectedDestinations: dests }),

      toggleDestination: (dest) =>
        set((state) => {
          const exists = state.selectedDestinations.find((d) => d.id === dest.id)
          if (exists) {
            return {
              selectedDestinations: state.selectedDestinations.filter((d) => d.id !== dest.id),
            }
          }
          return {
            selectedDestinations: [...state.selectedDestinations, dest],
          }
        }),

      setDurationDays: (days) => set({ durationDays: days }),
      setPreferredStartDate: (date) => set({ preferredStartDate: date }),

      setAdults: (n) => set({ adults: n }),
      setChildren: (n) => set({ children: n }),

      toggleAddOn: (addon) =>
        set((state) => {
          const exists = state.selectedAddOns.find((a) => a.id === addon.id)
          if (exists) {
            return { selectedAddOns: state.selectedAddOns.filter((a) => a.id !== addon.id) }
          }
          return { selectedAddOns: [...state.selectedAddOns, addon] }
        }),

      setCustomerDetails: (details) => set((state) => ({ ...state, ...details })),
      setCurrentStep: (step) => set({ currentStep: step }),

      reset: () => set(initialState),
    }),
    {
      name: "sylhettrail-trip-builder",
    }
  )
)
