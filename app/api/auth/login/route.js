import { NextResponse } from "next/server"

export async function POST(req) {
  const body = await req.json()
  console.log("Tentative login :", body)
  return NextResponse.json({ ok: true })
}

