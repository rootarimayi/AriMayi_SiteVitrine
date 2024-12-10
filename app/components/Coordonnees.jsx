"use client";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Coordonnees() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission 
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="bg-gray-600 p-8 rounded-lg shadow-md mx-4 my-6">
      <div className="flex flex-col items-center text-center">
        <br />
        <br />
        <br />
        <br />

        <h3 className="text-[48px] text-center font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text w-[100%] md:w-[60%]">
          Contactez-nous
        </h3>
        <br />
        <br />
        <p className="text-gray-800 mb-8">
          Votre point de départ vers de nouvelles opportunités professionnelles
          et la réussite de votre projet
        </p>
        <br />
        <br />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form */}
        <form className="space-y-4 lg:w-1/3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-700 text-black p-3 rounded-md border border-blue-500 focus:outline-none focus:border-blue-500 w-64"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 text-black p-3 rounded-md border border-blue-500 focus:outline-none focus:border-blue-500 w-64"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-700 text-black p-3 rounded-md border border-blue-500 focus:outline-none focus:border-blue-500 w-64"
          ></textarea> <br />
          <button
            type="submit"
            className="bg-black text-white ml-16 py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-300 w-25 self-center "
          >
            Soumettre
          </button>
        </form>

        {/* Map  */}
        <div className="lg:w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10506.55410614564!2d2.271093!3d48.826958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a83261aa7bd%3A0xcf7423695ff0d6e9!2s24%20Rue%20du%20Gouverneur%20G%C3%A9n%C3%A9ral%20%C3%89bou%C3%A9%2C%2092130%20Issy-les-Moulineaux%2C%20France!5e0!3m2!1sfr!2sus!4v1733645135571!5m2!1sfr!2sus
"
            width="400"
            height="300"
            className="w-full rounded-md"
            loading="lazy"
            title="Location map"
          />
        </div>

        {/* Contact */}
        <div className="lg:w-1/3 text-gray-800 space-y-4">
          <div className="flex items-center gap-2 text-gray-800">
            <FaMapMarkerAlt className="text-gray-800" />
            <p>
              24 rue du Gouverneur Général, <br />
              Éboué, 92130, Issy les Moulineaux
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <FaClock className="text-gray-800" />
            <p>Du lundi au vendredi, de 9h à 19h</p>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <FaPhone className="text-gray-800" />
            <p>++33612570719</p>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <FaEnvelope className="text-gray-800" />
            <p>contact@arimayi.fr</p>
          </div>
        </div>
      </div>
    </div>
  );
}
