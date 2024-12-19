"use client";
import React from "react";
import Image from "next/image";

export default function CourseDetails() {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-6 bg-white">
      {/* Left Section */}
      <div className="md:w-2/3 pr-6">
        {/* Title and Info */}
        <h1 className="text-2xl font-bold text-[#003366] mb-4">
          Parcours certifiant Référent en Design (Niveau 5)
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Formation tutorée à distance | 40 heures
        </p>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-800">
            <span className="mr-2">📚</span> Formation tutorée à distance
          </li>
          <li className="flex items-center text-gray-800">
            <span className="mr-2">👥</span> Tout public · De 2 à 8 participants
          </li>
          <li className="flex items-center text-gray-800">
            <span className="mr-2">💰</span> 2 880 € HT / 3 456 € TTC par
            participant
          </li>
          <li className="flex items-center text-gray-800">
            <span className="mr-2">✅</span> Éligible au CPF (Code : 235653)
          </li>
          <li className="flex items-center text-gray-800">
            <span className="mr-2">📜</span> Parcours certifiant Référent en
            Design (Niveau 5) attribuée par France Compétences
          </li>
        </ul>
        {/* Description */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">
            Description
          </h2>
          <p className="text-gray-700 mb-4">
            Ce parcours est spécialement conçu pour les professionnels et
            passionnés du design qui souhaitent approfondir leurs compétences et
            obtenir une certification de niveau 5 reconnue.
          </p>
          <h3 className="text-lg font-semibold text-[#003366]">
            Profil des participants
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>
              <strong>Designers</strong> souhaitant formaliser leurs
              compétences.
            </li>
            <li>
              Professionnels en reconversion désirant s'orienter vers les
              métiers du design.
            </li>
          </ul>
          <h3 className="text-lg font-semibold text-[#003366]">Prérequis</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>Maîtriser les fondamentaux du design graphique et UI/UX.</li>
            <li>
              Savoir concevoir et présenter des projets innovants répondant aux
              besoins des utilisateurs.
            </li>
            <li>
              Obtenir une certification reconnue valorisant vos compétences.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-lg">
        <Image
          src="/assets/design.jpeg" // NEED / to go to public folder
          alt="Formation Image"
          className="rounded-lg w-full mb-4"
          width={500}
          height={300}
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#003366]">
            Parcours certifiant Référent en Design (Niveau 5)
          </h3>
          <p className="text-sm text-gray-600">⭐️ 4.6/5 (6 évaluations)</p>
          <p className="text-lg text-gray-800 font-bold">2 880 € HT</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Télécharger le programme PDF
          </button>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-[#003366] mb-2">
            Prochaines sessions
          </h4>
          <ul className="text-sm text-gray-700 mb-4">
            <li>Du 09/01/2025 au 23/01/2025 à distance</li>
            <li>Du 10/09/2025 au 13/12/2025 à distance</li>
          </ul>
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
}
