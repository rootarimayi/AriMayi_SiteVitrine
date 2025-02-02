"use client";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import Img from "@/public/images/happiness.png";

export default function PartnerBanner({ className, children }) {
  return (
    <section className={`relative w-full min-h-screen flex items-center py-20 overflow-hidden ${className}`}>
        {/* SVG en arrière-plan */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
            {/* SVG Right (Gradient Object) */}
            <ReactSVG
                src="/svg/partner-gradient-object.svg"
                className="absolute w-[250px] sm:w-[350px] md:w-[500px] z-50"
                style={{
                    left: "75%",
                    top: "30%",
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
                    src={Img}
                    alt="Team"
                    width={350}
                    height={350}
                    className="rounded-lg shadow-lg relative z-10"
                />
                {/* SVG Left (Mask Object) */}
                <ReactSVG
                    src="/svg/partner-mask-object.svg"
                    className="absolute w-[250px] sm:w-[350px] md:w-[500px]"
                    style={{
                        right: "62%",
                        top: "25%",
                        transform: "translate(50%, -50%) scale(0.6)",
                    }}
                />
            </div>
        </div>
    </section>
  );
}
