"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function Equipe() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBio, setActiveBio] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCardClick = (bio, imgSrc, name) => {
    setActiveBio({ bio, imgSrc, name });
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setActiveBio(null);
  };

  const bioSamir = (
    <div>
      <h2>Samir</h2>
      <p>20 ans dexperience dans les ESN..</p>
      <div>
        <a
          href="https://www.linkedin.com/in/samir-bedouhene/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-600 text-xl" />
        </a>
      </div>
    </div>
  );

  const bioKatia = (
    <div>
      <h2>Katia</h2>
      <p>Spécialiste des RH et de la formation...</p>
      <div>
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-600 text-xl" />
        </a>
      </div>
    </div>
  );

  if (!isClient) {
    return null;
  }

  return (
    <>
      {}
      <div className="flex justify-center gap-6 p-6">
        <div className="w-72 bg-white rounded-lg overflow-hidden cursor-pointer">
          <div
            className="relative"
            onClick={() =>
              handleCardClick(bioSamir, "/assets/Samir.JPG", "Samir")
            }
          >
            <div className="relative group">
              <Image
                className="object-cover w-full h-56 rounded-t-lg transition-opacity duration-300 group-hover:opacity-80"
                alt="Samir"
                src="/assets/Samir.JPG"
                width={750}
                height={750}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <p className="text-xl">Full Bio</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold">Samir</p>
              <p className="text-sm">Manager de Transition</p>
            </div>
          </div>
        </div>

        <div className="w-72 bg-white rounded-lg overflow-hidden cursor-pointer">
          <div
            className="relative"
            onClick={() =>
              handleCardClick(bioKatia, "/assets/Samir.JPG", "Katia")
            }
          >
            <div className="relative group">
              <Image
                className="object-cover w-full h-56 rounded-t-lg transition-opacity duration-300 group-hover:opacity-80"
                alt="Katia"
                src="/assets/Samir.JPG"
                width={750}
                height={750}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <p className="text-xl">Full Bio</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold">Katia</p>
              <p className="text-sm">Specialiste RH</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && activeBio && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-96 p-6 rounded-lg relative flex">
              <button
                className="absolute top-2 right-2 text-gray-500 text-xl"
                onClick={handleCloseModal}
              >
                &times;
              </button>

              <div className="flex w-full">
                <div className="w-1/3 mr-4">
                  <Image
                    className="rounded-lg object-cover"
                    alt={activeBio.name}
                    src={activeBio.imgSrc}
                    width={250}
                    height={250}
                  />
                </div>

                <div className="w-2/3">
                  <div>
                    <h2 className="text-2xl font-semibold">{activeBio.name}</h2>
                    <p className="mt-2">{activeBio.bio}</p>
                    <div>
                      <a
                        href={`https://www.linkedin.com/in/${activeBio.name.toLowerCase()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
