"use client";
import Image from "next/image";
import Link from "next/link";
import { specialties } from "@/app/formation/data";
import FormationBanner from "../components/Formation/FormationBanner";
import FormationForm from "../components/Formation/FormationForm";

export default function FormationContainer() {
  return (
    <main>
      <FormationBanner
        className="bg-[#F4F2FF] transition-all duration-300 ease-in-out py-[200px] min-h-[calc(100vh-250px)] -z-10"
      >
        <h3 className="text-left gradient-title text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase text-[#353535] whitespace-nowrap">
            Nos formations
        </h3>
        <p className="text-left font-Opensans text-[24px] leading-[40px] text-[#353535] w-[100%] md:w-[60%] lg:w-[50%]">
        Nous proposons <strong>6 formations immersives</strong>, couvrant <strong>l&apos;identité visuelle, le développement, l&apos;IA, la cybersécurité et le commerce IT</strong>. Nos apprenants travaillent sur des <strong>projets réels</strong> pour acquérir une expérience terrain et devenir <strong>opérationnels en entreprise</strong>.
        </p>
        <blockquote 
            className="relative pl-6 py-4 my-8"
            style={{
            borderLeft: '6px solid',
            borderImage: 'linear-gradient(to top, #54E0E9, #816CFF, #B163FF) 1'
            }}
        >
            <p className="text-center md:text-left font-Opensans text-2xl leading-10 text-[#353535] max-w-[600px] mx-auto md:mx-0">
                L&apos;expérience est une lanterne attachée dans notre dos, qui n&apos;éclaire que le chemin parcouru.
                <span className="block mt-4 text-lg text-gray-600">– Confucius</span>
            </p>
        </blockquote>
        {/* <p><strong className="text-center md:text-left font-Opensans text-[24px] leading-[40px] text-[#353535] max-w-[600px] mx-auto md:mx-0 gradient-title" style={{ marginTop: '60px' }}>"L&apos;expérience est une lanterne attachée dans notre dos, qui n&apos;éclaire que le chemin parcouru." – Confucius</strong></p> */}
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