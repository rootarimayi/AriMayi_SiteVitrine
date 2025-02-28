import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Mot de passe incorrect" }, { status: 401 });
  }

  // Créer un cookie sécurisé valable 1 heure
  const cookie = serialize("admin_auth", "true", {
    httpOnly: true, // Empêche l'accès côté client
    secure: process.env.NODE_ENV === "production", // HTTPS seulement en prod
    maxAge: 60 * 60, // 1 heure
    path: "/",
  });

  const response = NextResponse.json({ message: "Connexion réussie" });
  response.headers.set("Set-Cookie", cookie);

  return response;
}