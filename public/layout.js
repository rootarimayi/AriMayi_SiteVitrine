import localFont from "next/font/local";
import PartnerHeader from "../components/Partner/PartnerHeader";
import PartnerFooter from "../components/Partner/PartnerFooter";
import "../globals.css"; // Go up one level to access globals.css

// const OpenSans = localFont({
//   src: "../fonts/OpenSans-Regular-webfont.woff", // Adjust path for fonts
//   variable: "--font-open-sans",
//   weight: "400",
// });

// const Montserrat = localFont({
//   src: "../fonts/Montserrat-Black.ttf", // Adjust path for fonts
//   variable: "--font-montserrat",
// });
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
  title: "AriMayi - Partenaires",
  description: "AriMayi ",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/faviconW.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/faviconW.png',
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

export default function PartnerLayout({ children }) {
  return (
    <>
      <PartnerHeader /> {}
      {children}
      <PartnerFooter /> {}
    </>
  );
}
