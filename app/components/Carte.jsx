"use client";

import Image from "next/image";
import { useState } from "react";

export default function Carte({ image, titre, content, className }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleReadMore = () => {
    setIsClicked(!isClicked);
  };

  return (
    <figure
      className={`card w-[300px] p-4 m-2 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg  bg-white hover:border-gray-600 flex flex-col justify-between ${className}`}
    >
      {}
      <Image
        src={image}
        alt="card image"
        width={300}
        height={200}
        className="w-full h-[150px] rounded-t-3xl object-cover"
      />

      {}
      <figcaption className="flex flex-col gap-4 p-4">
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

      {}
      <span
        className="text-blue-600 text-sm font-medium cursor-pointer block text-right hover:text-blue-800 transition-colors mt-2"
        onClick={toggleReadMore}
      >
        {isClicked ? "Lire moins" : "En savoir plus"}
      </span>
    </figure>
  );
}
