import { NextResponse } from "next/server";

export async function GET(req) {
  const cookies = req.cookies.get("admin_auth");

  if (cookies?.value !== "true") {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
  }

  return NextResponse.json({ message: "Autorisé" });
}
