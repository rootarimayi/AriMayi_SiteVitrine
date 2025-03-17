import localFont from "next/font/local";
import { headers } from "next/headers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { ReduxProvider } from "./storeProvider";
import store from "./lib/store";
import { Open_Sans, Montserrat } from 'next/font/google'
import DynamicLayout from "./components/Utils/DynamicLayout";
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google'
import { Suspense } from 'react';

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
        url: "https://arimayi.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-arimayi-slogan.d8f4a610.png&w=384&q=75",
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
    <html lang="fr">
      <body className="antialiased">
        <GoogleAnalytics gaId="G-FKC9P276KR" />
        <Toaster position="top-center" reverseOrder={false} />
        <ReduxProvider>
          <DynamicLayout>
            <Suspense>
            {children}
            </Suspense>
          </DynamicLayout>
        </ReduxProvider>
        {/* <Header />{children}< Footer/> */}
      </body>
    </html>
  );
}
