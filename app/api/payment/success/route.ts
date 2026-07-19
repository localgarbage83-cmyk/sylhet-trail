import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const tranId = formData.get("tran_id") as string
    return NextResponse.redirect(new URL(`/booking-confirmed?ref=${tranId}`, req.url))
  } catch {
    return NextResponse.redirect(new URL("/booking-confirmed?error=true", req.url))
  }
}
