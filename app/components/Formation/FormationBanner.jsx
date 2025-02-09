"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import formationImg from "@/public/assets/adetola.jpg";
import FormationBannerMobile from "./Mobile/FormationBannerMobile";

export default function FormationBanner({ className, children }) {
    const [screenSize, setScreenSize] = useState("desktop");

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize("mobile");
            } else if (width >= 768 && width <= 1280) {
                setScreenSize("tablet");
            } else {
                setScreenSize("desktop");
            }
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    if (screenSize === "mobile") {
        return <FormationBannerMobile>{children}</FormationBannerMobile>;
    }

    return (
        <section
            id="banner"
            className={`${
                screenSize === "tablet" ? "pt-[120px] pb-[70px]" : "py-[100px]"
            } flex items-center justify-between overflow-x-hidden overflow-y-hidden ${className} mb-[20px]`}
        >
        <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="text-left flex flex-col gap-6">
                {children}
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex justify-center items-center z-10">
                <img
                    src="/svg/MaskGroupLeftAbout.svg"
                    className="absolute w-[500px]"
                    style={{
                    left: "0%",
                    top: "90%",
                    transform: "translate(-50%, -45%) scale(1.3)",
                    opacity: 0.6
                    }}
                    alt="Left About Mask"
                />
                <img
                    src="/svg/MaskGroupLeftAbout.svg"
                    className="absolute w-[500px]"
                    style={{
                    left: "60%",
                    top: "54%",
                    transform: "translate(-50%, -45%) scale(1.3)",
                    opacity: 0.6
                    }}
                    alt="Right About Mask"
                />
                </div>
                <Image
                src={formationImg}
                alt="Team"
                width={500}
                height={500}
                className="rounded-lg shadow-lg relative z-10"
                />
            </div>
        </div>
      </section>
    //   <section className={`relative flex items-center overflow-hidden ${className}`}>
    //     {/* SVG en arrière-plan */}
    //     <div className="absolute inset-0 flex justify-center items-center -z-10">
    //       {/* SVG Left */}
    //       <img
    //             src="/svg/MaskGroupLeftAbout.svg"
    //             className="absolute w-[500px]"
    //             style={{
    //             left: "0%",
    //             top: "90%",
    //             transform: "translate(-50%, -45%) scale(1.3)",
    //             opacity: 0.6
    //             }}
    //             alt="Left About Mask"
    //         />
    //       {/* SVG Right */}
    //       <img
    //             src="/svg/MaskGroupLeftAbout.svg"
    //             className="absolute w-[500px]"
    //             style={{
    //             left: "60%",
    //             top: "54%",
    //             transform: "translate(-50%, -45%) scale(1.3)",
    //             opacity: 0.6
    //             }}
    //             alt="Right About Mask"
    //         />
    //     </div>
    //     {/* Contenu principal */}
    //     <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    //       {/* Texte à gauche */}
    //       <div className="text-left flex flex-col gap-6">
    //         {children}
    //       </div>
    //       {/* Image à droite */}
    //       <div className="relative">
    //         <Image
    //           src={aboutImg}
    //           alt="Team"
    //           width={500}
    //           height={500}
    //           className="rounded-lg shadow-lg relative z-10"
    //         />
    //       </div>
    //     </div>
    //   </section>
    );
}