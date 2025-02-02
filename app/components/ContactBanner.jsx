"use client";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import graduationImg from "@/public/assets/bannerr.png";

export default function ContactBanner({ className, children }) {
  return (
    <section id="banner" className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      {/* SVG Container avec responsivité */}
      <div className="absolute inset-x-0 -z-10">
        {/* SVG Gris - responsive et collé en haut */}
        <div className="absolute left-1/2 sm:left-[10%] -top-0 transform -translate-x-1/2 sm:translate-x-0">
          <ReactSVG
            src="/svg/MaskGroupGreyContact.svg"
            className="w-[300px] sm:w-[500px] md:w-[800px] opacity-100"
            style={{
              transform: 'scale(0.6) sm:scale(0.7) md:scale(0.8)',
              transformOrigin: 'top center'
            }}
          />
        </div>
        {/* SVG Orange - responsive */}
        <div className="absolute left-1/2 sm:left-[30%] top-4 transform -translate-x-1/2 sm:translate-x-0">
          <ReactSVG
            src="/svg/MaskGroupOrangeContact.svg"
            className="w-[200px] sm:w-[400px] md:w-[600px] opacity-90"
            style={{
              transform: 'scale(0.6) sm:scale(0.7) md:scale(0.8)',
              transformOrigin: 'top center'
            }}
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="absolute inset-0 flex items-center justify-center md:mt-20">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>

      {/* <div className="relative mt-8">
        <Image
          src={graduationImg}
          alt="Diplômée souriante"
          width={400}
          height={400}
          className="rounded-full shadow-lg"
        />
      </div> */}
    </section>
  );
}
