"use client";
import Image from "next/image";

export default function MissionSection({ className, children }) {
    return (
      <section className={`relative py-[200px] flex items-center overflow-hidden ${className}`}>
        <div className="absolute right-0 top-0 h-full flex items-center z-5 opacity-20">
            <img
                src="/svg/MaskGroupGreyAboutMission.svg"
                className="h-full w-auto max-h-full object-cover"
                alt="Grey About Mission Mask"
                style={{
                    transform: "translateX(-100%) scale(3)"
                }}
            />
        </div>
        <div className="container mx-auto px-4 lg:px-16 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            <div className="flex items-center justify-center">
              <Image
                src="/images/about-mission-img.png"
                alt="Travail en équipe"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover z-10"
              />
            </div>
            <div className="text-left flex flex-col gap-6">
              {children}
            </div>
          </div>
        </div>
      </section>
    );
}
