"use client";
import React, { useState, useEffect } from "react";
import Coordonnees from "../components/Contact/Coordonnees";

export default function OpportuniteContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Développement d’une plateforme RH",
      description:
        "Nos apprenants ont collaboré à la conception et au développement d’une plateforme innovante destinée à accompagner les professionnels dans la gestion de leurs ressources humaines. L’objectif étant de valoriser les collaborateurs avec des parcours personnalisés, des ressources adaptées et des outils interactifs pour favoriser une expérience salariée efficace.",
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

  // Hook pour détecter la taille de l'écran et ajuster la vue
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768); // 768px comme limite pour mobile (taille de l'écran)
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Vérifie la taille dès le chargement de la page

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardColors = [
    "bg-white", // White
    "bg-[#F68A67]", // #F68A67 (Orange)
    "bg-[#353535]", // #353535 (Dark Gray)
    "bg-white", // White
  ];

  const getTextColor = (index) => {
    return cardColors[index] === "bg-[#353535]"
      ? "text-white"
      : "text-gray-800";
  };

  // Gestion du défilement horizontal avec la translation (inversée)
  const getTranslateX = () => {
    if (isMobile) {
      // Pour mobile, appliquer le comportement desktop (plus de décalage)
      return currentPage === 1
        ? "translate-x-[28%]"
        : currentPage === 2
        ? "translate-x-[-21%]"
        : currentPage === 3
        ? "translate-x-[-68%]"
        : "translate-x-0";
    } else {
      // Pour desktop, appliquer le comportement mobile (moins de décalage)
      return currentPage === 1
        ? "translate-x-[33%]"
        : currentPage === 2
        ? "translate-x-[-4%]"
        : "translate-x-[-43%]";
    }
  };

  // La largeur des cartes (inversée)
  const getWidth = () => {
    return isMobile ? `${cards.length * 100}%` : `${cards.length * 80}%`;
  };

  return (
    <main>
        <div className="bg-gray-50 py-8 px-4">
        <h2 className="text-[32px] font-montserrat font-extrabold text-center mb-4 gradient-title">
            Des projets inspirants pour votre apprentissage
        </h2>
        <p className="text-gray-800 text-center text-[18px] leading-[36px] text-[#353535] font-montserrat w-full max-w-3xl mx-auto mt-4 mb-4 md:text-[24px] md:leading-[40px] px-8">
            Nos projets vous permettront de développer des compétences variées tout
            en contribuant à des solutions concrètes pour des besoins réels. Prêts à
            relever le défi ?
        </p>

        {/* Card Section */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center  gap-8 mt-10">
            {cards.map((card, index) => (
                <div
                key={card.id}
                className={`flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] shadow-md p-8 rounded-2xl ${
                    cardColors[index]
                } ${getTextColor(index)} flex flex-col justify-between`}
                style={{ minHeight: "200px" }}
                >
                <div className="flex-grow">
                    <h3 className="text-2xl font-montserrat font-extrabold mb-3">{card.title}</h3>
                    <p className="text-base font-montserrat text-justify  mb-4">{card.description}</p>
                </div>
                <a
                    href={card.link}
                    className="text-indigo-600 font-medium hover:underline text-base"
                >
                    EN SAVOIR PLUS &rarr;
                </a>
                </div>
            ))}
            </div>
            {/* <Coordonnees /> */}

        {/* Pagination */}
        {/* <div className="mt-4 flex justify-center space-x-2">
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
        </div> */}
        </div>
    </main>
  );
}