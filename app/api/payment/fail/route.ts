import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const tranId = formData.get("tran_id") as string
  return NextResponse.redirect(new URL(`/checkout?type=fixed&error=payment_failed&ref=${tranId}`, req.url))
}
