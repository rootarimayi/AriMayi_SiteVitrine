import React from "react";
import Image from "next/image";
import aboutImg from "@/public/images/about-img.png";


export default function AboutBannerMobile({ children }) {
    const styledChildren = React.Children.map(children, (child) => {
      if (!child) return child;
      if (child.type === 'h3') {
        return React.cloneElement(child, {
          className: "text-[32px] text-start font-monserrat font-extrabold uppercase gradient-title w-full mb-4 mt-10",
        });
      }
      if (child.type === 'p') {
        return React.cloneElement(child, {
          className: "text-left font-monserrat text-[20px] leading-[28px] text-[#353535] w-full mt-4 mb-4",
        });
      }
      return child;
    });
  
    return (
        <section className="relative py-16 flex flex-col items-center justify-start min-h-[calc(100vh-200px)] w-full overflow-x-hidden">
            <div className="relative z-10 text-center max-w-[90%] mb-8">
            {styledChildren}
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex justify-center items-center -z-10">
                    <img
                    src="/svg/MaskGroupLeftAbout.svg"
                    className="absolute w-[250px]"
                    style={{
                        left: "0%",
                        top: "90%",
                        transform: "translate(-50%, -45%) scale(1.5)",
                        opacity: 0.6
                    }}
                    alt="Left About Mask"
                    />
                    <img
                    src="/svg/MaskGroupLeftAbout.svg"
                    className="absolute w-[250px]"
                    style={{
                        left: "90%",
                        top: "54%",
                        transform: "translate(-50%, -45%) scale(1.5)",
                        opacity: 0.6
                    }}
                    alt="Right About Mask"
                    />
                </div>
                <Image
                    src={aboutImg}
                    alt="Team"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg relative z-10"
                />
            </div>
        </section>
    );
} 