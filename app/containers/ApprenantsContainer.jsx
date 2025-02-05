"use client";
import Image from "next/image";
import Img from "@/public/assets/trainee-header-img.jpg";
import app1 from "@/public/assets/PHOTO-2024-12-22-20-01-27.jpg";
import app2 from "@/public/assets/PHOTO-2024-12-22-20-01-44.jpg";
import app3 from "@/public/assets/PHOTO-2024-12-22-20-02-06.jpg";
import Mask from "@/public/images/Mask.png";
import Opportunite from "../opportunite/page";

export default function ApprenantsContainer() {
    return (
      <main>
        <div className="relative min-h-screen">
          {/* Pattern de droite */}
          <Image
            src={Mask}
            alt="Pattern right"
            className="fixed top-0 right-0 w-[100vw] max-w-[600px] opacity-50 -z-10"
            style={{ clipPath: "circle(80% at 100% 0%)" }}
          />
          
          {/* Pattern de gauche */}
          <Image
            src={Mask}
            alt="Pattern left"
            className="fixed top-0 left-0 w-[100vw] max-w-[600px] opacity-50 -z-10"
            style={{ clipPath: "circle(80% at 0% 0%)" }}
          />
  
          {/* Contenu existant */}
          <div className="pt-24">
            <div className="flex justify-center items-center rounded-lg mb-16">
              <Image
                src={Img}
                alt="Woman with a glasses"
                className="rounded-lg shadow-lg xl:w-1/5 w-2/3"
              />
            </div>
  
            <div className="bg-white py-12 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  À chaque étape, le cadre de l&#39;
                  <span className="text-blue-600">AFEST</span> allie formation,
                  autonomie et suivi personnalisé, permettant ainsi un apprentissage
                  progressif, pertinent et immédiatement applicable.
                </h2>
                <p className="text-gray-700 mb-12">
                  Notre approche à la fois humaine et performante assure à chaque apprenant, quel que
                  soit son parcours, une montée en compétences concrète, et lui donne
                  les clés pour s&apos;insérer durablement dans le monde du travail.
                </p>
  
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="w-full md:w-1/3 h-48 relative mb-4 md:mb-0 md:mr-6">
                    <Image
                      src={app1}
                      alt="Jeunes diplômés"
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Pour les jeunes diplômés
                    </h3>
                    <p className="text-gray-600">
                      C&apos;est une occasion unique de transformer vos connaissances
                      théoriques en savoir-faire opérationnels, directement sur le
                      terrain, là où les compétences prennent tout leur sens.
                    </p>
                  </div>
                </div>
  
                <div className="flex flex-col md:flex-row-reverse items-center mb-12">
                  <div className="w-full md:w-1/3 h-48 relative mb-4 md:mb-0 md:ml-6">
                    <Image
                      src={app2}
                      alt="Personnes en reconversion"
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Pour les personnes en reconversion
                    </h3>
                    <p className="text-gray-600">
                      L&apos;AFEST propose un accompagnement dynamique et progressif, vous
                      permettant d&apos;apprendre un métier par l&apos;expérimentation, de
                      surmonter les défis du changement et de maîtriser de nouvelles
                      pratiques au quotidien.
                    </p>
                  </div>
                </div>
  
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 h-48 relative mb-4 md:mb-0 md:mr-6">
                    <Image
                      src={app3}
                      alt="Futurs apprentis"
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Pour les futurs apprentis
                    </h3>
                    <p className="text-gray-600">
                      Accédez à une formation qui mêle pratique et réflexion, au cœur
                      de situations réelles et efficacement préparatoires aux
                      exigences des entreprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <Opportunite />
        </div>
      </main>
    );
  }
