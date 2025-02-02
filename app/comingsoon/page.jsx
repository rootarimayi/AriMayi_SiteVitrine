"use client";
import React from "react";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import Img from "@/public/images/Logo-Arimayi-simple-gradient.png";
import Mask from "@/public/assets/Mask.png";

function page() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center rounded-lg">
        <Image
        src={Mask}
        alt="Pattern"
        className="absolute top-0 right-0 w-[100vw] max-w-[600px] opacity-50 -z-10"
        style={{ clipPath: "circle(80% at 100% 0%)" }}
        />

        <h1 className="text-[30px] text-center font-montserrat gradient-title mt-96 font-semibold text-black">Page en cours de développement</h1>

        {/* <Image
            src={Img}
            alt="Woman with glasses"
            className="rounded-lg xl:w-1/5 w-2/3 mt-14 mb-96"
            width={60}
            height={60}
        /> */}
        <ReactSVG
        src="/svg/logo-arimayi.svg"
        />

        <Image
        src={Mask}
        alt="Pattern"
        className="absolute bottom-0 left-0 w-[100vw] max-w-[600px] opacity-50 -z-10"
        style={{ clipPath: "circle(80% at 0% 100%)" }}
        />
    </div>
  );
}

export default page;
