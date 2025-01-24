"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

export default function PartenaireForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    contactPerson: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending the data to an API.
    console.log(formData);
  };

  return (
    <>
      <div className="container mx-4 p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 border border-gray-200"
        >
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Vous avez un projet? Contactez-nous
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Section */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom de l&apos;entreprise:
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Ma Société"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: contact@email.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Numéro de téléphone:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: +212 600 123 456"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contactPerson"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Responsable à contacter:
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: John Doe"
                  required
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2">
              <div className="mb-4 h-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-48 px-4 py-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Expliquez votre projet ici..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Checkbox and Button */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="flex items-start mb-4 md:mb-0">
              <input
                type="checkbox"
                id="policy"
                name="policy"
                className="h-5 w-5 align-center text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="policy" className="ml-3 text-sm text-gray-700">
                Je respecte les politiques de confidentialité d&apos;Arimayi
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
