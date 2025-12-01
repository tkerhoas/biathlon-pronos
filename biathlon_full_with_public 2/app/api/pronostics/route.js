import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const body = await req.json()
    console.log("Pronostic reçu :", body)

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
