import localFont from "next/font/local";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

import { Open_Sans, Montserrat } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
    title: "AriMayi",
    description: "L'expérience concrète par la formation",
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/favicon.png',
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: '/favicon.png',
        },
      ],
      apple: [
        {
          url: '/apple-touch-icon.png',
        },
      ],
    },
    other: {
      canonical: "https://www.arimayi.io",
    },
    keywords: ["formation", "expérience", "éducation", "AriMayi"],
    openGraph: {
      title: "AriMayi",
      description: "L'expérience concrète par la formation",
      url: "https://www.arimayi.io",
      siteName: "AriMayi",
      images: [
        {
          url: "/og-cover-image.png",
          width: 1200,
          height: 630,
          alt: "AriMayi - L'expérience concrète par la formation",
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
