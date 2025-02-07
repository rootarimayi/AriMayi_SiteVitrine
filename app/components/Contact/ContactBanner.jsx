"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import contactImg from "@/public/images/contact-img.png";
import ContactBannerMobile from "./Mobile/ContactBannerMobile";

// export default function ContactBanner({ className, children }) {
//     return (
//         <section
//             id="banner"
//             className={`py-[200px] flex items-center justify-between ${className}`}
//         >
//         <div className="absolute inset-x-0 -z-10">
//           <div className="absolute left-1/2 sm:left-[10%] -top-0 transform -translate-x-1/2 sm:translate-x-0">
//             <img
//               src="/svg/MaskGroupGreyContact.svg"
//               className="w-[300px] sm:w-[500px] md:w-[800px] opacity-100"
//               style={{
//                 transform: 'scale(0.6) sm:scale(0.7) md:scale(0.8)',
//                 transformOrigin: 'top center'
//               }}
//               alt="Grey Contact Mask"
//             />
//           </div>
//           <div className="absolute left-1/2 sm:left-[30%] top-4 transform -translate-x-1/2 sm:translate-x-0">
//             <img
//               src="/svg/MaskGroupOrangeContact.svg"
//               className="w-[200px] sm:w-[400px] md:w-[600px] opacity-90"
//               style={{
//                 transform: 'scale(0.6) sm:scale(0.7) md:scale(0.8)',
//                 transformOrigin: 'top center'
//               }}
//               alt="Orange Contact Mask"
//             />
//           </div>
//         </div>
//         <div className="absolute inset-0 flex items-center justify-center md:mt-20">
//           <div className="container mx-auto px-4">
//             {children}
//           </div>
//         </div>
//       </section>
//     );
//   }
export default function ContactBanner({ className, children }) {
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
        return <ContactBannerMobile>{children}</ContactBannerMobile>;
    }

    return (
        <section
            id="banner"
            className={`py-[200px] flex items-center justify-between ${className}`}
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