"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { toast } from 'react-hot-toast';


export default function Coordonnees() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        message: "",
        accept: false,
        formType: 'contact'
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let errorMsg = "";
        if (!value && name !== 'accept') errorMsg = "Ce champ est requis.";
        if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
            errorMsg = "Adresse email invalide.";
        if (name === "telephone" && value && !/^(?:(?:\+|00)33|0)[1-9](?:[\s.-]*\d{2}){4}$/.test(value))
            errorMsg = "Numéro de téléphone invalide.";
        if (name === 'accept' && !value)
            errorMsg = "Vous devez accepter la politique de confidentialité.";
        
        setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
        return !errorMsg;  // true if not error
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        
        setFormData({
            ...formData,
            [name]: newValue,
        });
        
        validateField(name, newValue);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate input before submit
        let isValid = true;
        Object.entries(formData).forEach(([name, value]) => {
            if (!validateField(name, value)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            toast.error("Veuillez corriger les erreurs du formulaire.");
            return;
        }
        
        setIsSubmitting(true);
    
        try {
            const response = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Une erreur est survenue");
            }
    
            const data = await response.json();
            
            setFormData({
                nom: "",
                prenom: "",
                email: "",
                telephone: "",
                message: "",
                accept: false,
                formType: 'contact'
            });
            
            toast.success(data.message || "📧 🎉 Message envoyé ! Nous vous répondrons bientôt.");
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message || "❌ Une erreur est survenue lors de l'envoi du formulaire.");
        } finally {
            setIsSubmitting(false);
        }
    };    

  return (
    <div className="bg-gray-600 p-2 mx-4 my-6 overflow-hidden">
      <div className="flex h-auto justify-center items-center">
        <div className="w-full max-w-6xl bg-[#F4F2FF] p-2">
          <div className="mt-50 p-6">
            <form
              className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
              onSubmit={handleSubmit}
            >
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
                        className={`bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ${errors.nom ? 'border-red-500' : ''}`}
                        placeholder="Votre nom"
                        required
                    />
                    {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
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
                        className={`bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ${errors.prenom ? 'border-red-500' : ''}`}
                        placeholder="Votre prénom"
                        required
                    />
                    {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
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
                            className={`bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="exemple@domaine.com"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                            className={`bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ${errors.telephone ? 'border-red-500' : ''}`}
                            placeholder="Votre numéro"
                            required
                        />
                        {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
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
                        className={`bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black resize-none ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Votre message"
                        required
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

              {/* Checkbox */}
              <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                        <input
                            id="accept"
                            name="accept"
                            type="checkbox"
                            checked={formData.accept}
                            onChange={handleChange}
                            className={`w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 ${errors.accept ? 'border-red-500' : ''}`}
                            required
                        />
                        </div>
                        <label htmlFor="accept" className="ml-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300">
                        En soumettant ce formulaire, j&apos;accepte la collecte des informations saisies et l&apos;enregistrement de mes données afin d&apos;être recontacté.e par AriMayi. Pour en savoir plus,&nbsp;
                        <Link href="/politique" legacyBehavior>
                            <a className="text-blue-500">je consulte la politique de confidentialité</a>
                        </Link>
                        </label>
                        {errors.accept && <p className="text-red-500 text-xs mt-1">{errors.accept}</p>}
                    </div>

                    {/* Bouton */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white mb-4 bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:text-black disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Form */}

        {/* Map  */}
        <div className="lg:w-2/3">

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
        <br /><br />
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