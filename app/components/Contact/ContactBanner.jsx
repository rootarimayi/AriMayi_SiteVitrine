"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import contactImg from "@/public/images/contact-img.png";
import ContactBannerMobile from "./Mobile/ContactBannerMobile";


export default function ContactBanner({ className, children }) {
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
        return <ContactBannerMobile>{children}</ContactBannerMobile>;
    }

    return (
        <section
            id="banner"
            className={`${
                screenSize === "tabletSmallScreen" ? "pt-[100px] pb-[70px]" : "py-[100px]"
            } flex items-center justify-between overflow-x-hidden ${className} mb-[20px]`}
        >
            <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="text-left flex flex-col gap-6 z-20">
                    {children}
                </div>
                <div className="relative overflow-visible"> {/* Conteneur pour l'image et les SVG */}
                    <div className="absolute inset-0 flex justify-center items-center z-10">
                        {/* SVG en arrière-plan */}
                        <img
                            src="/svg/MaskGroupGreyContactcopie.svg"
                            className="absolute w-[300px]"
                            style={{
                                left: "15%",
                                top: "75%",
                                transform: "translate(-50%, -45%) scale(3)",
                                opacity: 0.3
                            }}
                            alt="Grey Contact Mask"
                        />
                        <img
                            src="/svg/MaskGroupOrangeContact.svg"
                            className="absolute w-[300px]"
                            style={{
                                left: "60%",
                                top: "100%",
                                transform: "translate(-50%, -45%) scale(3)",
                                opacity: 0.6
                            }}
                            alt="Orange Contact Mask"
                        />
                    </div>
                    {/* Image de contact */}
                    <img
                        src={contactImg.src}
                        alt="Contact"
                        className="rounded-lg shadow-lg relative z-20 w-[400px] h-auto"
                    />
                </div>
            </div>
        </section>
    );
}