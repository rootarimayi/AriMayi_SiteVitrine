"use client";
import React from "react";
import Image from "next/image";
import Mask from "@/public/assets/Mask.png";

export default function ComingSoonContainer() {
    return (
        <main>
          <div className="relative min-h-screen flex flex-col justify-center items-center px-4">
            {/* Pattern supérieur - Plus petit sur mobile */}
            <Image
              src={Mask}
              alt="Pattern"
              className="absolute top-0 right-0 w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-w-[600px] opacity-50 -z-10 transition-all duration-300"
              style={{ 
                clipPath: "circle(80% at 100% 0%)",
              }}
            />
    
            {/* Contenu central */}
            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-4xl">
              <h1 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] text-center font-montserrat gradient-title font-semibold text-black">
                Plateforme en cours de développement
              </h1>
              
              <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] transition-all duration-300">
                <Image
                  src="/svg/logo-arimayi.svg"
                  alt="Logo Arimayi"
                  width={400}
                  height={100}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
    
            {/* Pattern inférieur - Plus petit sur mobile */}
            <Image
              src={Mask}
              alt="Pattern"
              className="absolute bottom-0 left-0 w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-w-[600px] opacity-50 -z-10 transition-all duration-300"
              style={{ 
                clipPath: "circle(80% at 0% 100%)",
              }}
            />
          </div>
        </main>
      );
  }