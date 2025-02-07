"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Img from "@/public/images/partner-img.png";
import PartnerBannerMobile from "./Mobile/PartnerBannerMobile";

// export default function PartnerBanner({ className, children }) {
//     return (
//         <section
//             id="banner"
//             className={`py-16 flex items-center justify-between ${className}`}
//         >
//         <div className="absolute inset-0 flex justify-center items-center -z-10">
//           <img
//             src="/svg/partner-gradient-object.svg"
//             className="absolute w-[250px] sm:w-[350px] md:w-[500px] z-50"
//             style={{
//               left: "75%",
//               top: "30%",
//               transform: "translate(-60%, -50%) scale(0.6)",
//             }}
//             alt="Gradient Object"
//           />
//         </div>
//         <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           <div className="text-left flex flex-col gap-6">
//             {children}
//           </div>
//           <div className="relative">
//             <Image
//               src={Img}
//               alt="Team"
//               width={350}
//               height={350}
//               className="rounded-lg shadow-lg relative z-10"
//             />
//             <img
//               src="/svg/partner-mask-object.svg"
//               className="absolute w-[250px] sm:w-[350px] md:w-[500px]"
//               style={{
//                 right: "62%",
//                 top: "25%",
//                 transform: "translate(50%, -50%) scale(0.6)",
//               }}
//               alt="Mask Object"
//             />
//           </div>
//         </div>
//       </section>
//     );
//   }

export default function PartnerBanner({ className, children }) {
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
        return <PartnerBannerMobile>{children}</PartnerBannerMobile>;
    }

    return (
        <section
            id="banner"
            className={`py-16 flex items-center justify-center relative ${className}`}
        >
            <div className="container max-w-[1100px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
                {/* Texte */}
                <div className="flex flex-col gap-6 text-center md:text-left">
                    {children}
                </div>

                {/* Image + Masques */}
                <div className="relative flex justify-center">
                    {/* Gradient */}
                    <img
                        src="/svg/partner-gradient-object.svg"
                        className="absolute w-[250px] sm:w-[350px] md:w-[500px] z-0"
                        style={{
                        left: "65%",
                        top: "30%",
                        transform: "translate(-60%, -50%) scale(0.6)",
                        }}
                        alt="Gradient Object"
                    />
                    {/* Mask Orange */}
                    <img
                        src="/svg/partner-mask-object.svg"
                        className="absolute w-[300px] sm:w-[350px] md:w-[450px] z-10"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(0.7)",
                        }}
                        alt="Mask Object"
                    />
                    {/* Image */}
                    <Image
                        src={Img}
                        alt="Team"
                        width={350}
                        height={350}
                        className="relative z-20"
                    />
                </div>
            </div>
        </section>
    );
}
