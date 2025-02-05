"use client";
import Image from "next/image";
import graduationImg from "@/public/assets/bannerr.png";


export default function HomeBanner({ className, children }) {
  return (
    <section
      id="banner"
      className={`py-[350px] flex items-center justify-between ${className}`}
    >
      {/* SVG en arrière-plan à gauche - remplacé par une div avec background-image */}
      <div 
        className="absolute left-0 top-0 w-[40%] h-full -z-10"
        style={{ 
          backgroundImage: "url('/svg/MaskOrange.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Container principal avec padding horizontal */}
      <div className="container mx-auto px-8 lg:px-16 flex justify-between items-center w-full">
        {/* Contenu texte à gauche avec largeur augmentée */}
        <div className="flex flex-col justify-start items-start gap-6 py-[10px] rounded-lg max-w-[75%] lg:max-w-[70%]">
          {children}
        </div>
        
        {/* Image à droite avec margin ajustée */}
        <div className="relative ml-12">
          <Image
            src={graduationImg}
            alt="Diplômée souriante"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}