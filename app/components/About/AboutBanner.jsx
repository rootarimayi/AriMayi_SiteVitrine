"use client";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import aboutImg from "@/public/images/about-img.jpg";

export default function AboutBanner({ className, children }) {
  return (
    <section className={`relative w-full min-h-screen flex items-center py-20 overflow-hidden ${className}`}>
        {/* SVG en arrière-plan */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
            {/* SVG Left */}
            <ReactSVG
            src="/svg/MaskGroupLeftAbout.svg"
            className="absolute w-[250px] sm:w-[350px] md:w-[500px] "
            style={{
                left: "45%",
                top: "65%",
                transform: "translate(-60%, -50%) scale(0.6)",
            }}
            />
            {/* SVG Right */}
            <ReactSVG
            src="/svg/MaskGroupLeftAbout.svg"
            className="absolute w-[250px] sm:w-[350px] md:w-[500px] "
            style={{
                left: "58%",
                top: "55%",
                transform: "translate(-60%, -50%) scale(0.6)",
            }}
            />
        </div>

        {/* Contenu principal */}
        <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Texte à gauche */}
            <div className="text-left flex flex-col gap-6">
            {children}
            </div>

            {/* Image à droite */}
            <div className="relative">
            <Image
                src={aboutImg}
                alt="Team"
                width={500}
                height={500}
                className="rounded-lg shadow-lg relative z-10"
            />
            </div>
        </div>
    </section>
  );
}
