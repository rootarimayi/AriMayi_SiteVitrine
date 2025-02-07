"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Img from "@/public/assets/trainee-header-img.jpg";
import ApprenantsBannerMobile from "./Mobile/ApprenantsBannerMobile";

export default function ApprenantsBanner({ className, children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    if (isMobile) {
        return <ApprenantsBannerMobile>{children}</ApprenantsBannerMobile>;
    }

    return (
        <section
            id="banner"
            className={`py-16 flex items-center justify-between ${className}`}
        >
        {/* SVG en arrière-plan à gauche */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
            <img
                src="/svg/MaskGrey.svg"
                className="absolute w-[250px] sm:w-[350px] md:w-[500px]"
                style={{
                    left: "20%",
                    top: "50%",
                    transform: "scale(3)",
                }}
                alt="Orange Background Mask"
            />
        </div>
        {/* Container principal avec padding horizontal */}
        <div className="container mx-auto px-8 lg:px-16 flex justify-between items-center w-full">
          {/* Contenu texte à gauche avec largeur augmentée */}
          <div className="flex flex-col justify-start items-start gap-6 py-[10px] rounded-lg max-w-[75%] lg:max-w-[70%]">
            {children}
          </div>
          {/* Image à droite avec margin ajustée */}
          <div className="relative ml-12">
            <Image
              src={Img}
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