"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Demande envoyée!");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section className="bg-gray-900 py-12">
      {" "}
      {/* Dark background */}
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-transparent bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] bg-clip-text mb-8">
          Contactez-Nous
        </h2>
        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-800 font-semibold mb-2"
              >
                Nom Complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#F68A67] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68A67]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold mb-2"
              >
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#F68A67] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68A67]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-800 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-[#F68A67] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68A67]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#F68A67] text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none disabled:bg-gray-300"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
