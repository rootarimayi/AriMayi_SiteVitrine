"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function TestimonialSection() {
  // Testimonials data
  const testimonials = [
    {
      name: "Elliot",
      titre: "Apprenant en immersion",
      avatar: "/images/elliot.jpg",
      message:
        "Pourquoi Arimayi? Par ce que c'était une entreprise qui a un projet..",
      videoUrl: "Elliot.mp4",
    },
    {
      name: "Kevin",
      titre: "Apprenant en stage de validation de formation",
      avatar: "/images/kevin.jpg",
      message: "Arimayi donne la chance aux gens!",
      videoUrl: "Kevin.mp4",
    },
    {
      name: "Simon",
      titre: "apprenant",
      avatar: "/images/simon.jpg",
      message:
        "J'ai développé plein de nouvelles compétences tout ça dans un context stimulant de travail en équipe.",
      videoUrl: "Simon.mp4",
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
        <h3 className="text-2xl text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase gradient-title whitespace-nowrap leading-[1.2]">
            Témoignages
        </h3>
        <p className="text-center font-monserrat text-base sm:text-[20px] leading-[20px] sm:leading-[25px] text-[#353535] my-[10px] gap-4">
            Expert de la formation en situation de travail. AriMayi vous propose
            un apprentissage pratique et immerssif sur des projets concrets
            confiés par nos partenariats experts
          </p>
        </div>
        {/* Temoignages */}
        <div className="flex items-center justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl px-4">
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

                    <h3 className=" text-sm text-white">{testimonial.titre}</h3>
                  </div>
                </div>
                <p className="textsemibold text-lg text-white mb-4">
                  &quot; {testimonial.message}&quot;
                </p>
                <button
                  onClick={() => openModal(testimonial.videoUrl)}
                  className="text-[#F68A67] hover:underline transition-colors"
                >
                  Voir la vidéo
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
              style={{ width: "600px", height: "335px" }}
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
    </>
  );
}
