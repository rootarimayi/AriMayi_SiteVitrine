"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
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
          className="bg-white rounded-lg p-8 shadow-md dark:bg-gray-800"
        >
          {/* Heading */}
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold gradient-title mb-6 text-center">
            Vous avez un projet&nbsp;? Contactez-nous
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
                  className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                  placeholder="Ex: Ma société"
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
                  className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
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
                  className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                  placeholder="Ex: +33 6 12 34 56 78"
                  required
                />
              </div>
              <div className="">
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
                  className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                  placeholder="Ex: John Doe"
                  required
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 flex flex-col">
                <div className="mb-4 flex-grow">
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
                    className="bg-blue-50 pt-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black h-full min-h-[calc(4*46px+3*12px)] resize-none"
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
              <label htmlFor="accept" className="ml-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300">
                En soumettant ce formulaire, j&apos;accepte la collecte des informations saisies et l&apos;enregistrement de mes données afin d&apos;être recontacté.e par AriMayi. Pour en savoir plus,&nbsp;
                <Link href="/politique" legacyBehavior>
                    <a className="text-blue-500">je consulte la politique de confidentialité</a>
                </Link>
                </label>
            </div>
            <button
              type="submit"
              className="text-white mb-4 bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:text-black"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
