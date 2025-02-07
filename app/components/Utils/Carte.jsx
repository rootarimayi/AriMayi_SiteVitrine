"use client";
import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types"; // Importer PropTypes

export default function Carte({ image, titre, content, className }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleReadMore = () => {
    setIsClicked(!isClicked);
  };

  return (
    <figure
      className={`card w-[300px] h-[400px] p-0 m-2 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white hover:border-gray-600 flex flex-col justify-between ${className}`}
    >
      <div className="h-[150px] w-full relative">
        <Image
          src={image}
          alt="card image"
          fill
          className="object-cover rounded-t-3xl"
        />
      </div>
      <figcaption className="flex flex-col gap-4 p-4 flex-grow">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {titre}
        </h2>
        <p
          className={`card-content text-sm text-gray-600 ${
            isClicked ? "line-clamp-none" : "line-clamp-3"
          } transition-all duration-200`}
        >
          {content}
        </p>
      </figcaption>
      <span
        className="text-[#F68A67] text-sm uppercase font-medium cursor-pointer block text-left hover:text-[#F68A67] transition-colors mt-2 p-4"
        onClick={toggleReadMore}
      >
        {isClicked ? "Lire moins" : "En savoir plus"} &rarr;
      </span>
    </figure>
  );
}

// Déclaration des PropTypes
Carte.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  titre: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Valeurs par défaut (optionnel)
Carte.defaultProps = {
  className: "",
};