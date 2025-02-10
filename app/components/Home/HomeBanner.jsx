"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import graduationImg from "@/public/assets/bannerr.png";
import HomeBannerMobile from "./Mobile/HomeBannerMobile";
import HomeBannerTablet from "./Tablet/HomeBannerTablet";
import HomeBannerSmallScreen from "./SmallScreen/HomeBannerSmallScreens";

export default function HomeBanner({ className, children }) {
    const [screenSize, setScreenSize] = useState("desktop");

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize("mobile");
            } else if (width >= 768 && width <= 1024) {
                setScreenSize("tablet");
            } else if (width > 1024 && width <= 1366) {
                setScreenSize("smallScreen");
            } else {
                setScreenSize("desktop");
            }
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    if (screenSize === "mobile") {
        return <HomeBannerMobile>{children}</HomeBannerMobile>;
    }
    if (screenSize === "tablet" || screenSize === "smallScreen") {
        return (
            <section id="banner" className={`pt-[130px] pb-[150px] flex items-center justify-between overflow-x-hidden ${className}`}>
                <div className="absolute inset-0 flex justify-center items-center -z-10">
                    <img
                        src="/svg/MaskOrange.svg"
                        className="absolute w-[200px] sm:w-[300px] md:w-[400px]"
                        style={{ left: "15%", top: "50%", transform: "scale(2.5)" }}
                        alt="Orange Background Mask"
                    />
                </div>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center w-full">
                    <div className="flex flex-col justify-start items-start gap-5 pt-[80px] rounded-lg max-w-[80%] lg:max-w-[75%]">
                        {children}
                    </div>
                    <div className="relative ml-8">
                        <Image
                            src={graduationImg}
                            alt="Diplômée souriante"
                            width={350}
                            height={350}
                            className="rounded-full shadow-lg"
                        />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="banner" className={`py-[200px] flex items-center justify-between overflow-x-hidden ${className}`}>
            <div className="absolute inset-0 flex justify-center items-center -z-10">
                <img
                    src="/svg/MaskOrange.svg"
                    className="absolute w-[250px] sm:w-[350px] md:w-[500px]"
                    style={{ left: "20%", top: "50%", transform: "scale(3)" }}
                    alt="Orange Background Mask"
                />
            </div>
            <div className="container mx-auto px-8 lg:px-16 flex justify-between items-center w-full">
                <div className="flex flex-col justify-start items-start gap-6 py-[10px] rounded-lg max-w-[75%] lg:max-w-[70%]">
                    {children}
                </div>
                <div className="relative ml-12">
                    <Image
                        src={graduationImg}
                        alt="Diplômée souriante"
                        width={400}
                        height={400}
                        className="rounded-full shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

// export default function HomeBanner({ className, children }) {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const checkScreenSize = () => {
//         setIsMobile(window.innerWidth < 768);
//         };
//         checkScreenSize();
//         window.addEventListener("resize", checkScreenSize);
        
//         return () => window.removeEventListener("resize", checkScreenSize);
//     }, []);

//     if (isMobile) {
//         return <HomeBannerMobile>{children}</HomeBannerMobile>;
//     }

//     return (
//         <section
//             id="banner"
//             className={`py-[200px] flex items-center justify-between overflow-x-hidden ${className}`}
//         >
//         {/* SVG en arrière-plan à gauche */}
//         <div className="absolute inset-0 flex justify-center items-center -z-10">
//             <img
//                 src="/svg/MaskOrange.svg"
//                 className="absolute w-[250px] sm:w-[350px] md:w-[500px]"
//                 style={{
//                     left: "20%",
//                     top: "50%",
//                     transform: "scale(3)",
//                 }}
//                 alt="Orange Background Mask"
//             />
//         </div>
//         {/* Container principal avec padding horizontal */}
//         <div className="container mx-auto px-8 lg:px-16 flex justify-between items-center w-full">
//           {/* Contenu texte à gauche avec largeur augmentée */}
//           <div className="flex flex-col justify-start items-start gap-6 py-[10px] rounded-lg max-w-[75%] lg:max-w-[70%]">
//             {children}
//           </div>
//           {/* Image à droite avec margin ajustée */}
//           <div className="relative ml-12">
//             <Image
//               src={graduationImg}
//               alt="Diplômée souriante"
//               width={400}
//               height={400}
//               className="rounded-full shadow-lg"
//             />
//           </div>
//         </div>
//       </section>
//     );
// }