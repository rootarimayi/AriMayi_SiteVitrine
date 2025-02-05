"use client";
import Image from "next/image";

export default function MissionSection({ className, children }) {
    return (
      <section className={`relative min-h-screen flex items-center py-20 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex justify-center items-center z-10 opacity-20">
          <img
            src="/svg/MaskGroupGreyAboutMission.svg"
            className="absolute w-[250px] sm:w-[350px] md:w-[500px]"
            style={{
              right: "10%",
              top: "55%",
              transform: "translate(-60%, -50%) ",
            }}
            alt="Grey About Mission Mask"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-16 min-h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            <div className="flex items-center justify-center">
              <Image
                src="/images/mission-img.jpg"
                alt="Travail en équipe"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover"
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