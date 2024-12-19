"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function TestimonialSection() {
  // Testimonials data
  const testimonials = [
    {
      name: "Katia",
      titre: "Entrepreneur",
      avatar: "/assets/katia.JPG",
      message:
        "Arimayi propose un vrai accompagnement centré sur l'entrepreneur... une vraie formule gagnant gagnant",
      videoUrl: "Katia.mp4",
    },
  ];

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  // vid modal
  const openModal = (videoUrl) => {
   console.log(`Opening video modal for: ${videoUrl}`);
 

  setCurrentVideo(videoUrl);
  setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  return (
    <>
      <section className="py-12 bg-white">
        {}
        <div className="max-w-3xl mx-auto flex flex-col items-center mb-8">
          <h3 className="text-[28px] text-center font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text my-[5px]">
            Témoignages
          </h3>
          <br />
          <p className="text-center font-Opensans text-[16px] leading-[25px] text-black my-[10px] gap-4">
            Expert de la formation en situation de travail. AriMayi vous propose
            un apprentissage pratique et immerssif sur des projets concrets
            confiés par nos partenariats experts
          </p>
        </div>
        <br />
        <br />
        {/* Temoignages */}
        <div className="flex items-center justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-14xl px-4 justify-center">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-[#353535] shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {}
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-[#F68A67]">
                      {testimonial.name}
                    </h3>

                    <h3 className=" text-sm text-white">
                      {testimonial.titre}
                    </h3>
                  </div>
                </div>
                <p className="textsemibold text-lg text-white mb-4">
                  &quot; {testimonial.message}&quot;
                </p>
                <button
                  onClick={() => openModal(testimonial.videoUrl)}
                  className="text-[#F68A67] hover:underline transition-colors"
                >
                  Voir le vid
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* vid */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="bg-white rounded-lg shadow-2xl w-full h-full relative p-0"
              style={{ width: "900px", height: "400px" }}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-red-600 transition"
                aria-label="Close video modal"
              >
                &times;
              </button>
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={currentVideo}
                  title="Testimonial Video"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>
      <br />
      <br />
    </>
  );
}