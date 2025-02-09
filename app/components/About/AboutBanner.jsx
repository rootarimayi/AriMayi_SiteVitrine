"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import aboutImg from "@/public/images/about-img.png";
import AboutBannerMobile from "./Mobile/AboutBannerMobile";

export default function AboutBanner({ className, children }) {
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
        return <AboutBannerMobile>{children}</AboutBannerMobile>;
    }
    return (
        <section
            id="banner"
            className={`py-[200px] flex items-center justify-between overflow-x-hidden ${className}`}
        >
        <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="text-left flex flex-col gap-6">
                {children}
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex justify-center items-center -z-10">
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