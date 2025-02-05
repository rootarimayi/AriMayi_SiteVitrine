"use client";
import Image from "next/image";
import aboutImg from "@/public/images/about-img.jpg";

export default function AboutBanner({ className, children }) {
    return (
      <section className={`relative w-full min-h-screen flex items-center py-20 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <img
            src="/svg/MaskGroupLeftAbout.svg"
            className="absolute w-[250px] sm:w-[350px] md:w-[500px]"
            style={{
              left: "45%",
              top: "65%",
              transform: "translate(-60%, -50%) scale(0.6)",
            }}
            alt="Left About Mask"
          />
          <img
            src="/svg/MaskGroupLeftAbout.svg"
            className="absolute w-[250px] sm:w-[350px] md:w-[500px]"
            style={{
              left: "58%",
              top: "55%",
              transform: "translate(-60%, -50%) scale(0.6)",
            }}
            alt="Right About Mask"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-left flex flex-col gap-6">
            {children}
          </div>
          <div className="relative">
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