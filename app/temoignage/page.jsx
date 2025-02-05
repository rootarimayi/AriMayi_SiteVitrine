'use client';

import React, { useState } from "react";
import Image from "next/image";
import happyness from "@/public/assets/happiness.png";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ author, quote }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 mb-3">
        <Image
          src={happyness}
          alt="happy"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <p className="font-semibold text-lg">{author}</p>
      <p className="text-gray-400">Start-up</p>
      <div className="mt-6 p-6 bg-gray-800 rounded-lg text-white max-w-md">
        <div className="flex items-center mb-4">
          <FaQuoteLeft className="text-gray-400 mr-2" />
          <p className="font-medium">{quote}</p>
        </div>
      </div>
    </div>
  );
};

const Temoignage = () => {
  const testimonials = [
    {
      author: "Arimayi",
      quote: "AriMayi is qui nous amène vers une bonne gestion digital, nous accompagne dans la structuration de notre projet, nous aide à développer une application ou chaine digitale à notre budge",
    },
    {
      author: "Arimayi",
      quote: "AriMayi a su aussi nous aider centré dans le management de notre equipe, le recrutement et l'animation de notre communauté. du marketing, du Go to Market...",
    },
    {
      author: "Arimayi",
      quote: "AriMayi nous a fait gagné un temps précieux dans le développement de notre application et l'appréhension de nos différents métiers. Ils nous ont sécurisés et fait progresser dans notre transformation digitale",
    },
    {
      author: "Arimayi",
      quote: "AriMayi nous aide toujours pour résoudre des problématiques sur mesure dans le développement de nos applications et la conduite des de nos projets concrets confiés par nos partenariats experts",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <TestimonialCard
        author={testimonials[currentIndex].author}
        quote={testimonials[currentIndex].quote}
      />
      <div className="mt-8 flex space-x-4">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="mt-12 relative w-80 h-80">
        <Image
          src={happyness}
          alt="happy"
          fill
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Temoignage;