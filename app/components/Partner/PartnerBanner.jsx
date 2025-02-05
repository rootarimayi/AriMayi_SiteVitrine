"use client";
import Image from "next/image";
import Img from "@/public/images/happiness.png";

export default function PartnerBanner({ className, children }) {
    return (
      <section className={`relative w-full min-h-screen flex items-center py-20 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <img
            src="/svg/partner-gradient-object.svg"
            className="absolute w-[250px] sm:w-[350px] md:w-[500px] z-50"
            style={{
              left: "75%",
              top: "30%",
              transform: "translate(-60%, -50%) scale(0.6)",
            }}
            alt="Gradient Object"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-left flex flex-col gap-6">
            {children}
          </div>
          <div className="relative">
            <Image
              src={Img}
              alt="Team"
              width={350}
              height={350}
              className="rounded-lg shadow-lg relative z-10"
            />
            <img
              src="/svg/partner-mask-object.svg"
              className="absolute w-[250px] sm:w-[350px] md:w-[500px]"
              style={{
                right: "62%",
                top: "25%",
                transform: "translate(50%, -50%) scale(0.6)",
              }}
              alt="Mask Object"
            />
          </div>
        </div>
      </section>
    );
  }