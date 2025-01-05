"use client";
import React, { useState } from "react";

export default function Opportunite() {
  const [currentPage, setCurrentPage] = useState(1);

  const cards = [
    {
      id: 1,
      title: "Développement d’une plateforme RH",
      description:
        "Nos apprenants ont à la conception et au développement d’une plateforme innovante destinée à accompagner les professionnels en transition de carrière. L’objectif est de simplifier leur intégration dans de nouveaux postes ou secteurs, avec des parcours personnalisés, des ressources adaptées, et des outils interactifs pour favoriser une montée en compétences efficace.",
      link: "#",
    },
    {
      id: 2,
      title: "Site d’annonces immobilières",
      description:
        "Ce projet vise à créer un outil dédié aux Français souhaitant trouver un logement en Espagne. Vous contribuerez à développer une interface intuitive, intégrant des filtres avancés (localisation, budget, type de logement) et des informations pratiques, tout en facilitant les échanges entre locataires et propriétaires.",
      link: "#",
    },
    {
      id: 3,
      title: "Plateforme de soutien scolaire",
      description:
        "Vous travaillerez sur la création d’un espace numérique dédié à l’accompagnement des élèves dans leur réussite éducative. Cette plateforme offrira des cours en ligne, des exercices interactifs, et des séances de tutorat personnalisées. Vous serez amenés à concevoir des fonctionnalités comme le suivi des progrès, la mise en relation avec des enseignants qualifiés, et des outils ludiques pour rendre l’apprentissage engageant et efficace",
      link: "#",
    },
  ];

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < cards.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Define an array of colors for the card backgrounds
  const cardColors = [
    "bg-white", // White
    "bg-[#F68A67]", // #F68A67 (Orange)
    "bg-[#353535]", // #353535 (Dark Gray)
    "bg-white", // White
  ];

  // Determine the text color based on the background color
  const getTextColor = (index) => {
    return cardColors[index] === "bg-[#353535]"
      ? "text-white"
      : "text-gray-800";
  };

  return (
    <div className="bg-gray-50 py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-4 text-indigo-700">
        Des opportunités dans divers secteurs
      </h2>
      <p className="text-center mb-6 text-gray-600 text-sm">
        Découvrez nos partenaires qui ont contribué au succès de nos projets
      </p>

      {/* Card Section */}
      <div className="max-w-4xl   mx-auto flex flex-wrap justify-center">
        <div
          className={`transition-transform duration-500 transform ${
            currentPage === 1
              ? "translate-x-[-10%]" // Move a bit to the left from the start
              : currentPage === 2
              ? "translate-x-[-25%]" // Move more left on the second page
              : currentPage === 3
              ? "translate-x-[-50%]" // Further move left on the third page
              : "translate-x-0"
          } flex gap-x-7`}
          style={{ width: `${cards.length * 100}%` }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex-shrink-0 w-full sm:w-auto max-w-md shadow-md p-8 rounded-2xl ${
                cardColors[index]
              } ${
                cardColors[index] === "bg-[#353535]"
                  ? "text-white"
                  : "text-gray-800"
              }`}
              style={{ minHeight: "230px", maxWidth: "400px" }} // Adjusted minHeight for cards
            >
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm mb-3">{card.description}</p>{" "}
              {/* Reduced margin */}
              <a
                href={card.link}
                className="text-indigo-600 font-medium hover:underline text-sm"
              >
                EN SAVOIR PLUS &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-2">
        <button
          onClick={() => handlePageChange("prev")}
          className={`px-2 py-1 rounded-full border ${
            currentPage === 1
              ? "text-gray-400 border-gray-300"
              : "text-indigo-600 border-indigo-400 hover:bg-indigo-100"
          }`}
          disabled={currentPage === 1}
        >
          &#8592;
        </button>
        <button
          onClick={() => handlePageChange("next")}
          className={`px-2 py-1 rounded-full border ${
            currentPage === cards.length
              ? "text-gray-400 border-gray-300"
              : "text-indigo-600 border-indigo-400 hover:bg-indigo-100"
          }`}
          disabled={currentPage === cards.length}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
