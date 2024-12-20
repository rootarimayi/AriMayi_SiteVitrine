import localFont from "next/font/local";
import PartnerHeader from "../components/PartnerHeader";
import Footer from "../components/Footer"; // Go up one level to access components
import "../globals.css"; // Go up one level to access globals.css

const OpenSans = localFont({
  src: "../fonts/OpenSans-Regular-webfont.woff", // Adjust path for fonts
  variable: "--font-open-sans",
  weight: "400",
});

const Montserrat = localFont({
  src: "../fonts/Montserrat-Black.ttf", // Adjust path for fonts
  variable: "--font-montserrat",
});

export const metadata = {
  title: "l'expérience concrète par la formation",
  description: "AriMayi ",
};

export default function PartnerLayout({ children }) {
  return (
    <>
      <PartnerHeader /> {}
      {children}
    </>
  );
}
