"use client";
import React from "react";
import Image from "next/image";
import Mask from "@/public/assets/Mask.png";

export default function ComingSoonContainer() {
    return (
      <main>
        <div className="relative min-h-screen flex flex-col justify-center items-center rounded-lg">
          <Image
            src={Mask}
            alt="Pattern"
            className="absolute top-0 right-0 w-[100vw] max-w-[600px] opacity-50 -z-10"
            style={{ clipPath: "circle(80% at 100% 0%)" }}
          />
          <h1 className="text-[30px] text-center font-montserrat gradient-title mt-96 font-semibold text-black">
            Page en cours de développement
          </h1>
          <img
            src="/svg/logo-arimayi.svg"
            alt="Arimayi Logo"
            className="w-auto h-auto"
          />
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