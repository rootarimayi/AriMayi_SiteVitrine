// /components/DetailFormation.jsx

import React from "react";
import Image from "next/image";


const DetailFormation = ({ formation }) => {
  if (!formation) {
    return <p>Formation data is missing or invalid.</p>; // Fallback UI in case of missing formation
  }

  return (
    <>
   <br />  <br /><br />
    <div className="max-w-screen-xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">
            {formation.title}
          </h1>

          {/* Key Information */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-700">
              <span className="mr-2">📍</span>
              <span>Mixte sur site et à distance</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="mr-2">⏱️</span>
              <span>21 heures sur 3 jour(s)</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="mr-2">👥</span>
              <span>Tout public · 6 participants maximum</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="mr-2">💰</span>
              <span>1.470 € HT / 1.764 € TTC par participant</span>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/3">
          <div className="relative h-64 w-full">
            <Image
              src={`/assets/${formation.image}`}
              alt="Formation Consultant"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Content - 2 Columns */}
        <div className="md:col-span-2">
          {/* Description Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Description
            </h2>
            <p className="text-gray-700 mb-4">{formation.description}</p>
          </section>

          {/* Other Sections (e.g., Profile, Prerequisites, Objectives) */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Profil des participants
            </h2>
            <p className="text-gray-700">
              Formateurs, consultants formateurs, formateurs internes, personnes
              souhaitant former.
            </p>
          </section>

          {/* Objectives Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Objectifs
            </h2>
            <p className="text-gray-700">
              À l&apos;issue de la formation, les participants seront en mesure
              de créer et animer une formation professionnelle pour adultes.
            </p>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            {/* Rating, Download Button, Sessions, etc. */}
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mb-6 hover:bg-blue-700 transition">
              Télécharger le programme PDF
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DetailFormation;
