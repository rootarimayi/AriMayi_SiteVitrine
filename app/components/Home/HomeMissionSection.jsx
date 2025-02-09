"use client";
import React, { useState, useEffect } from 'react';
import mission1 from "@/public/assets/mission1.jpg";
import mission2 from "@/public/assets/mission2.jpg";
import mission3 from "@/public/assets/mission3.jpg";
import Carte from '../Utils/Carte';


export function HomeMissionsSection() {
  return (
    <div className="py-[50px] flex flex-col items-center bg-[#F4F2FF] overflow-hidden">
      <div className="container flex flex-col gap-[20px]">
        <div className="max-w-3xl mx-auto flex flex-col items-center mb-8">
          <h3 className="text-[32px] sm:text-[48px] text-center font-montserrat font-extrabold uppercase gradient-title w-full mt-5">
            Nos missions
          </h3>
          <br /> <br />
          <p className="text-center font-monserrat text-base sm:text-[20px] leading-[20px] sm:leading-[25px] text-[#353535] my-[10px] gap-4">
            Expert de la formation en situation de travail, AriMayi vous
            propose un apprentissage pratique et immersif sur des projets
            concrets confiés par nos partenaires (startups, TPE, PME) pour une
            adaptation réussie aux exigences de votre métier.
          </p>
        </div>
        
        <div className="cards flex flex-col md:flex-row items-center justify-center gap-3">
          <Carte
            image={mission1}
            titre="Je cherche à gagner de l'expérience"
            content="Jeune diplômé sans emploi ? Rejoignez notre organisme pour une formation ciblée qui vous démarque. Développez des compétences recherchées par les recruteurs grâce à nos projets concrets et décrochez enfin le poste que vous méritez."
            className="bg-[#FEF9F5]"
          />
          <Carte
            image={mission2}
            titre="Je recherche un nouveau métier dans l'IT"
            content="Rejoignez notre organisme et transformez votre carrière dans l'IT ! Profitez d'une formation complète et de notre accompagnement vers des projets concrets pour réussir votre reconversion dans un secteur en plein essor."
            className="bg-[#FEF9F5]"
          />
          <Carte
            image={mission3}
            titre="Je recherche un contrat d'apprentissage"
            content="Boostez votre parcours avec un contrat d'apprentissage intégrant la POEI (Préparation Opérationnelle à l'Emploi Individuelle) : grâce à notre référentiel de partenaires, accédez à des projets enrichissants qui conjuguent formation et expérience concrète en entreprise."
            className="bg-[#FEF9F5]"
          />
        </div>
      </div>
    </div>
  );
}