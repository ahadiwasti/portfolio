import { NextResponse } from "next/server"

export async function POST() {
  // In a real app, you would invalidate the token on the server
  return NextResponse.json({ message: "Logged out successfully" })
}
