"use client";
import Image from "next/image";
import Link from "next/link";
import { specialties } from "@/app/formation/data";
import FormationBanner from "../components/Formation/FormationBanner";
import FormationForm from "../components/Formation/FormationForm";

export default function FormationContainer() {
  const bannerContent = (
    <h3 className="text-left gradient-title text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase text-[#353535] whitespace-nowrap">
      Nos formations
    </h3>
  );

  return (
    <main>
      <FormationBanner
        className="bg-[#F4F2FF] transition-all duration-300 ease-in-out py-[50px] min-h-[calc(100vh-250px)] -z-10"
      >
        {bannerContent}
      </FormationBanner>
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
            {specialties.map((specialty) => (
              <Link href="/comingsoon" key={specialty.id} className="relative">
                <div className="h-full bg-white rounded-[32px] shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="h-48 w-full relative">
                    <Image
                      src={`/assets/${specialty.image || "logo-arimayi.png"}`}
                      alt={specialty.title || "Formation"}
                      fill
                      className="rounded-t-[32px] object-cover"
                      priority
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
      <div className="flex flex-col justify-center  bg-[#F4F2FF]">
      <FormationForm />
      </div>
    </main>
  );
}