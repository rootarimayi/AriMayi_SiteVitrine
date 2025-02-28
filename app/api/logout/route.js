import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const cookie = serialize("admin_auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    path: "/",
  });

  const response = NextResponse.json({ message: "Déconnexion réussie" });
  response.headers.set("Set-Cookie", cookie);
  return response;
}
