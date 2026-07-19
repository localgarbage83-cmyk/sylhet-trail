export type Database = {
  public: {
    Tables: {
      packages: {
        Row: {
          id: string
          slug: string
          title_bn: string
          title_en: string
          description_bn: string
          description_en: string
          duration_days: number
          base_price: number
          cover_image_url: string
          gallery_urls: string[]
          itinerary: any
          active: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['packages']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['packages']['Insert']>
      }
      destinations: {
        Row: {
          id: string
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
        Insert: Omit<Database['public']['Tables']['destinations']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['destinations']['Insert']>
      }
      partners: {
        Row: {
          id: string
          name: string
          bio_bn: string
          bio_en: string
          routes_covered: string[]
          phone: string
          photo_url: string
          active: boolean
        }
        Insert: Omit<Database['public']['Tables']['partners']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['partners']['Insert']>
      }
      bookings: {
        Row: {
          id: string
          booking_ref: string
          type: 'fixed' | 'custom'
          package_id: string | null
          trip_details: any
          price_breakdown: any
          customer_name: string
          customer_phone: string
          customer_email: string
          partner_id: string | null
          payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
          sslcommerz_transaction_id: string | null
          booking_status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['bookings']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['bookings']['Insert']>
      }
    }
  }
}
