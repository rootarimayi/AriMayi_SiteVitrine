"use client";
import React from "react";
import Image from "next/image";
import Mask from "@/public/assets/Mask.png";

const imageStyle = {
    borderRadius: '50%',
    border: '5px solid #000',
  }

export default function PlateformeContainer() {
  return (
    <main>
        <div className="relative min-h-screen flex flex-col justify-center items-center rounded-lg">
            <Image
            src={Mask}
            alt="Pattern"
            className="absolute top-0 right-0 w-[100vw] max-w-[600px] opacity-50 -z-10"
            style={{ clipPath: "circle(80% at 100% 0%)", imageStyle }}
            />

            <h1 className="text-[30px] text-center font-montserrat gradient-title mt-96 font-semibold text-black">Plateforme en cours de développement</h1>

            <div className="w-[250px] sm:w-[300px] md:w-[400px]">
                <Image
                src="/svg/logo-arimayi.svg"
                alt="Logo Arimayi"
                width={400}
                height={100}
                className="w-full h-auto"
                />
            </div>

            <Image
            src={Mask}
            alt="Pattern"
            className="absolute bottom-0 left-0 w-[100vw] max-w-[600px] opacity-50 -z-10"
            style={{ clipPath: "circle(80% at 0% 100%)" }}
            />
        </div>
    </main>
  );
}