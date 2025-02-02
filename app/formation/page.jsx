"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import DetailFormation from "../components/DetailFormation";
import { specialties } from "./data";
import FormationBanner from "../components/FormationBanner";

const specialtie = [
  {
    id: 1, // Added unique id for each specialty

    image: "design.jpeg",
    title: "Designer (niveau 5)",
    description: "Designer (niveau 5)",
  },
  {
    id: 2,

    image: "mobile.jpg",
    title: "Développeur web mobile (niveau 5)",
    description: "Développeur web mobile (niveau 5)",
  },
  {
    id: 3,

    image: "conception.jpg",
    title: "Concepteur Développeur (niveau 6)",
    description: "Concepteur Développeur (niveau 6)",
  },
  {
    id: 4,

    image: "cyber.jpeg",
    title: "Cybersécurité (niveau 6)",
    description: "Cybersécurité (niveau 6)",
  },
  {
    id: 5,
    image: "ai.jpg",

    title: "Intelligence Artificielle (niveau 6)",
    description: "Intelligence Artificielle (niveau 6)",
  },
  {
    id: 6,
    image: "commercial.jpeg",

    title: "Commercial IT (niveau 5 ou 6)",
    description: "Commercial IT (niveau 5 ou 6)",
  },
];

export default function Formation() {
  return (
    <>
      <FormationBanner className="bg-cover bg-center bg-[#F4F2FF] transition-all duration-300 ease-in-out -z-10">
        <h3 className="text-left text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase text-[#353535] whitespace-nowrap">
          Nos formations
        </h3>
      </FormationBanner>
      
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
            {specialties.map((specialty) => (
                <Link href={`/comingsoon`} key={specialty.id} className="relative">
                {/* SVG de décoration */}
                {/* <ReactSVG
                    src="/svg/MaskShadow1.svg"
                    className="absolute w-[200px] -z-10"
                    style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%) scale(0.6)",
                    }}
                /> */}
                <div className="h-full bg-white rounded-[32px] shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <div className="h-48 w-full relative">
                    <Image
                        src={`/assets/${specialty.image}`}
                        alt={specialty.title}
                        className="rounded-t-[32px] object-cover"
                        fill
                    />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {specialty.title}
                    </h3>
                    <p className="text-gray-700">{specialty.description}</p>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
        </section>

      <br />
      <br />
      <br />
      <DetailFormation />
    </>
  );
}
