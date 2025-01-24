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
      <section className="py-16 bg-white h-screen flex flex-col items-center justify-center">
        {/* Intro Text */}
        <div className="max-w-3xl mx-auto flex flex-col items-center mb-12">
          <h3 className="text-[36px] text-center font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text my-6">
            Témoignages
          </h3>
          <p className="text-center font-Opensans text-[18px] leading-[30px] text-black my-6">
            Expert de la formation en situation de travail. AriMayi vous propose
            un apprentissage pratique et immersif sur des projets concrets
            confiés par nos partenariats experts.
          </p>
        </div>

        {/* Testimonials Section (Centered with Larger Cards) */}
        <div className="flex items-center justify-center w-full flex-wrap gap-14 px-4">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#353535] shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl max-w-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={120}
                  height={120}
                  className="w-20 h-20 rounded-full mr-6 object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-[#F68A67]">
                    {testimonial.name}
                  </h3>
                  <h3 className="text-sm text-white">{testimonial.titre}</h3>
                </div>
              </div>
              <p className="text-semibold text-lg text-white mb-6">
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

        {/* Video Modal */}
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
