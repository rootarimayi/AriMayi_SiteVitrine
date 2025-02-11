import React from "react";
import Image from "next/image";
import Img from "@/public/assets/trainee-header-img.jpg";


export default function ApprenantsBannerMobile({ children }) {
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
          <section className="relative py-16 flex flex-col items-center justify-start min-h-[calc(100vh-200px)] w-full overflow-x-hidden overflow-y-hidden">
              <div className="relative z-10 text-center max-w-[90%] mb-8">
                  {styledChildren}
              </div>
              <div className="relative"> 
                  <div className="relative inset-0 flex justify-center items-center">
                      {/* Mask */}
                      <img
                          src="/svg/MaskGrey.svg"
                          className="absolute w-[200px] sm:w-[300px] md:w-[500px] z-0"
                          style={{
                              left: "120%",
                              top: "130%",
                              transform: "translate(-55%, -50%) scale(6)",
                          }}
                          alt="Gradient Object"
                      />
                      {/* Image */}
                      <Image
                          src={Img}
                          alt="Team"
                          width={250}
                          height={250}
                          className="relative rounded-full shadow-lg z-20"
                      />
                  </div>
              </div>
          </section>
    );
  }
  