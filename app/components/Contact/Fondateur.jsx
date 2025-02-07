"use client";
import React from "react";
import fondat from "@/public/assets/PHOTO-2024-12-22-20-04-35.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    author: "Samir Bedouhene",
    role: "Founder & CEO",
    company: "Arimayi",

    quote:
      " AriMayi incarne une vision où l'entraide et l'insertion professionnelle deviennent des moteurs de réussite collective. Chaque jour, nous unissons nos forces pour offrir à de jeunes talents l'opportunité de découvrir, apprendre et s'épanouir au travers de projets concrets et impactants, Aux entreprises, nous proposons bien plus qu'un service : une chance unique de collaborer avec une structure engagée et innovante. Confier vos projets à AriMayi, c'est faire le choix d'une expertise doublée d’une mission sociale forte. C'est s'investir dans l'avenir en soutenant l'insertion professionnelle, tout en bénéficiant de solutions agiles et adaptées à vos besoins. Continuons à faire de l'entraide le moteur de projets porteurs de sens et d'avenir. ",
  },
];

export default function Fondateur() {
    return (
      <section className="w-full bg-[#F4F2FF] py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre principal centré */}
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-[48px] font-monserrat font-extrabold gradient-title">
              Le Mot du Fondateur
            </h1>
          </div>
  
          {/* Container flex pour les deux sections côte à côte */}
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            {/* Section témoignage */}
            <div className="w-full lg:w-1/2">
              <div className="w-full">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="relative p-4 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="absolute -top-4 left-6 md:left-8">
                      <div className="p-2 bg-indigo-600 rounded-lg">
                        <FaQuoteLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
  
                    <div className="mt-6">
                      <p className="text-base md:text-lg text-gray-700 italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
  
                      <div className="mt-4 md:mt-6 flex items-center">
                        <div className="relative w-10 h-10 md:w-12 md:h-12">
                          <Image
                            src={fondat}
                            alt={testimonial.author}
                            fill
                            sizes="(max-width: 768px) 40px, 48px"
                            className="rounded-full object-cover"
                            priority={testimonial.id === 1}
                          />
                          <Link href="https://www.linkedin.com/in/samir-bedouhene/">
                            <FaLinkedin className="text-blue-600 text-xl relative top-14 ml-4" />
                          </Link>
                        </div>
  
                        <div className="ml-3 md:ml-4 mt-7">
                          <h4 className="text-base md:text-lg font-semibold text-gray-900">
                            {testimonial.author}
                          </h4>
                          <div className="text-sm md:text-base text-gray-600">
                            {testimonial.role}
                          </div>
                          <div className="text-sm md:text-base font-semibold">
                            certifié A-AFEST
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Section certificat regroupé dans une seule card */}
            <div className="w-full lg:w-1/2">
             <div className="min-h-[auto] md:min-h-[550px] p-4 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                <div className="relative w-full h-72 md:h-[400px]">
                  <Image
                    src="/assets/certificat-founder.jpg"
                    alt="Certificat Accompagnement"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg object-cover"
                    priority={true}
                  />
                </div>
  
                <div className="mt-6 text-center">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">
                    Formation et Certification
                  </h4>
                  <div className="text-sm md:text-base text-gray-600">
                    Certificat officiel d&apos;accompagnement des apprentissages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
