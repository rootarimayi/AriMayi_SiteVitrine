"use client";
import React from "react";
import fondat from "@/public/assets/PHOTO-2024-12-22-20-04-35.jpg";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


 const testimonials = [
    {
      id: 1,
      author: "Samir Bedouhene",
      role: "Founder & CEO",
      company: "Arimayi",
     
      quote:
        " Arimayi incarne une vision où l'entraide et l'insertion professionnelle deviennent des moteurs de réussite collective. Chaque jour, nous unissons nos forces pour offrir à de jeunes talents l'opportunité de découvrir, apprendre et s'épanouir au travers de projets concrets et impactants, Aux entreprises, nous proposons bien plus qu'un service : une chance unique de collaborer avec une structure engagée et innovante. Confier vos projets à Arimayi, c'est faire le choix d'une expertise doublée d’une mission sociale forte. C'est s'investir dans l'avenir en soutenant l'insertion professionnelle, tout en bénéficiant de solutions agiles et adaptées à vos besoins.Continuons à faire de l'entraide le moteur de projets porteurs de sens et davenir. ",
    },
  ];


export default function Fondateur() {
    return (
      <>
        <section className="w-full py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <h1 className="text-3xl font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
                L&apos;Mot du Fondateur
              </h1>
              <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-600">
                Écoutez directement la vision derrière notre succès
              </p>
            </div>
            <div className="flex justify-center py-8">
              <div className="w-full max-w-3xl px-4 md:px-6 lg:px-8">
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
                        &quot;{testimonial.quote} &quot;
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
                        </div>

                        <div className="ml-3 md:ml-4">
                          <h4 className="text-base md:text-lg font-semibold text-gray-900">
                            {testimonial.author}
                          </h4>
                          <div className="text-sm md:text-base text-gray-600">
                            {testimonial.role}
                          </div>
                          <div className="text-sm md:text-base text-indigo-600 font-medium">
                            {testimonial.company}
                          </div>
                          <div>
                            <a
                              href="https://www.linkedin.com/in/samir-bedouhene/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin className="text-blue-600 text-xl" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <h1 className="text-3xl font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
                
              </h1>
              <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-600">
             
              </p>
            </div>

            {/* Main Flex Section to Center the Image */}
            <div className="flex flex-col items-center py-8">
              {/* Certificate Image - Main Focus */}
              <div className="relative w-full max-w-2xl h-96 md:h-[500px] mb-6">
                {" "}
                {/* Image takes up large space */}
                <Image
                  src="/assets/BEDOUHENE.JPG"
                  alt="Certificat Accompagnement"
                  fill
                  sizes="(max-width: 768px) 150px, 200px"
                  className="rounded-lg object-cover"
                  priority={true}
                />
              </div>

              {/* Comment Section Below Image */}
              <div className="w-full max-w-3xl px-4 md:px-6 lg:px-8">
                <div className="relative p-4 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -top-4 left-6 md:left-8">
                  
                  </div>

                  <div className="mt-6">
                    <p className="text-base md:text-lg text-gray-700">
                   
                    </p>

                    <div className="mt-4 md:mt-6 flex items-center">
                      <div className="ml-3 md:ml-4">
                        <h4 className="text-base md:text-lg font-semibold text-gray-900">
                          Formation et Certification
                        </h4>
                        <div className="text-sm md:text-base text-gray-600">
                          Certificat officiel d&apos;accompagnement des
                          apprentissages
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

