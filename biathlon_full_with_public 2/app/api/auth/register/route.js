import { NextResponse } from "next/server"

export async function POST(req) {
  const body = await req.json()
  console.log("Nouveau compte :", body)
  return NextResponse.json({ ok: true })
}

