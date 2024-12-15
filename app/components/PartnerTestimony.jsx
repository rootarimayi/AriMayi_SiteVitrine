"use client";
import { useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import slide2 from "@/public/assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg";

export default function PartnerTestimony() {
  const [showModal, setShowModal] = useState(false);
   const videoRef = useRef(null);

  const toggleModal = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // to pause vid on bg
    }
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-wrap justify-between p-5">
      {/* text */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <h1 className="text-3xl font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
          Témoignages de nos partenaires
        </h1>
      </div>

      {/*vid*/}
      <div className="w-full md:w-1/2 relative">
        <video
          ref={videoRef}
          className="cursor-pointer rounded-lg max-h-[700px] w-auto"
          controls
          onClick={toggleModal}
          muted
        >
          <source src="/Katia.mp4" type="video/mp4" />
          vid not supported
        </video>
        <h4 className="text-gray-800 font-bold mt-4">Katia: Entrepreneur </h4>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-5 max-w-full max-h-full">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              onClick={toggleModal}
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              x
            </button>
            <video
              controls
              autoPlay
              width="auto"
              style={{ maxHeight: "600px", maxWidth: "100%" }}
            >
              <source src="/Katia.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}