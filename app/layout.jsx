import localFont from "next/font/local";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const Opensans = localFont({
  src: "./fonts/OpenSans-Regular.ttf",
  variable: "--font-open-sans",
  weight: "400",
});

const Monserrat = localFont({
  src: "./fonts/Montserrat-Black.ttf",
  variable: "--font-monserrat",
});


export const metadata = {
  title: "AriMayi . Un rêve, Un projet, Une réalité.",
  description: "Site vitrine AriMayi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Opensans.variable} ${Monserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
