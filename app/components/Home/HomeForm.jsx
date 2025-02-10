"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function HomeForm() {
 const [formData, setFormData] = useState({
   nom: "",
   prenom: "",
   email: "",
   telephone: "",
   message: "",
   accept: false,
 });

 const handleChange = (e) => {
   const { name, value, type, checked } = e.target;
   setFormData({
     ...formData,
     [name]: type === "checkbox" ? checked : value,
   });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     const response = await fetch("/api/form", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(formData),
     });

     const result = await response.json();
     if (response.ok) {
       alert(result.message);
     } else {
       alert(result.error);
     }
   } catch (error) {
     console.error("Error submitting form:", error);
     alert("Une erreur est survenue lors de l'envoi du formulaire.");
   }
 };

  return (
    <div className="bg-gray-600 p-2 mx-4 my-6 overflow-hidden">
        <div className="flex h-auto justify-center items-center">
            <div className="w-full max-w-6xl bg-[#FFF] p-2">
            <h3 className="text-[32px] sm:text-[48px] text-center font-montserrat font-extrabold uppercase gradient-title w-full mt-5">
                Contactez-nous
            </h3>
            <div className="mt-50 p-6">
                <form className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md dark:bg-gray-800" onSubmit={handleSubmit}>
                    {/* Nom et Prénom */}
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                        <div className="mb-5">
                        <label htmlFor="nom" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black text-left">
                            Nom:
                        </label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                            placeholder="Votre nom"
                            required
                        />
                        </div>
                        <div className="mb-5">
                        <label htmlFor="prenom" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black text-left">
                            Prénom:
                        </label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                            placeholder="Votre prénom"
                            required
                        />
                        </div>
                    </div>

                    {/* Email et Téléphone */}
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                        <div className="mb-5">
                        <label htmlFor="email" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black text-left">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                            placeholder="exemple@domaine.com"
                            required
                        />
                        </div>
                        <div className="mb-5">
                        <label htmlFor="telephone" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black text-left">
                            Numéro de téléphone:
                        </label>
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                            placeholder="Votre numéro"
                            required
                        />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black text-left">
                        Votre message:
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                        placeholder="Votre message"
                        required
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center mb-5">
                        <div className="flex items-center h-5">
                        <input
                            id="accept"
                            name="accept"
                            type="checkbox"
                            checked={formData.accept}
                            onChange={handleChange}
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required
                        />
                        </div>
                        <label htmlFor="accept" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        En soumettant ce formulaire, j&apos;accepte la collecte des informations saisies et l&apos;enregistrement de mes données afin d&apos;être recontacté.e par AriMayi. Pour en savoir plus,&nbsp;
                        <Link href="/politique" legacyBehavior>
                            <a className="text-blue-500">je consulte la politique de confidentialité</a>
                        </Link>
                        </label>
                    </div>

                    {/* Bouton */}
                    <div className="flex justify-center items-center">
                        <button type="submit" className="text-white mb-4 bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:text-black">
                        Envoyer
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  );
}
