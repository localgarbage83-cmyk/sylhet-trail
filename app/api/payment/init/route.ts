import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { amount, bookingRef, customerName, customerEmail, customerPhone } = body

    const storeId = process.env.SSLCOMMERZ_STORE_ID || "testbox"
    const storePass = process.env.SSLCOMMERZ_STORE_PASSWORD || "qwerty"
    const isSandbox = process.env.SSLCOMMERZ_SANDBOX !== "false"

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    const sslczUrl = isSandbox
      ? "https://sandbox.sslcommerz.com/gwprocess/v4/api.php"
      : "https://securepay.sslcommerz.com/gwprocess/v4/api.php"

    const postData = new URLSearchParams({
      store_id: storeId,
      store_passwd: storePass,
      total_amount: String(amount),
      currency: "BDT",
      tran_id: bookingRef,
      success_url: `${baseUrl}/api/payment/success`,
      fail_url: `${baseUrl}/api/payment/fail`,
      cancel_url: `${baseUrl}/api/payment/cancel`,
      cus_name: customerName || "Guest",
      cus_email: customerEmail || "guest@example.com",
      cus_phone: customerPhone || "01700000000",
      cus_add1: "Sylhet",
      cus_city: "Sylhet",
      cus_country: "Bangladesh",
      shipping_method: "NO",
      product_name: "SylhetTrail Tour",
      product_category: "Tour",
      product_profile: "general",
    })

    const response = await fetch(sslczUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: postData.toString(),
    })

    const data = await response.json()

    if (data.status === "SUCCESS") {
      return NextResponse.json({
        success: true,
        redirectUrl: data.GatewayPageURL,
        bookingRef,
      })
    }

    return NextResponse.json({ success: false, message: data.failedreason || "Payment init failed" }, { status: 400 })
  } catch (error) {
    console.error("Payment init error:", error)
    return NextResponse.json({ success: false, message: "Internal error" }, { status: 500 })
  }
}
