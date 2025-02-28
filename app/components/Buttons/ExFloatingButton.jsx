"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';


export default function ExFloatingButton({ buttonText, formTitle, formTitleClass }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});
  const buttonRef = useRef(null);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
    accept: false,
    formType: 'candidature'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Validation des champs du formulaire
  const validateField = (name, value) => {
    let errorMsg = "";
    if (!value && name !== 'accept' && name !== 'telephone') errorMsg = "Ce champ est requis.";
    if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      errorMsg = "Adresse email invalide.";
    if (name === "telephone" && value && !/^(?:(?:\+|00)33|0)[1-9](?:[\s.-]*\d{2}){4}$/.test(value))
      errorMsg = "Numéro de téléphone invalide.";
    if (name === 'accept' && !value)
      errorMsg = "Vous devez accepter la politique de confidentialité.";

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
    return !errorMsg;  // true if no error
  };

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    validateField(name, newValue);
  };

  // Gestion de l'upload de fichier
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Vérifier le type de fichier (PDF, DOCX, etc.)
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(selectedFile.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: "Format de fichier non supporté. Veuillez envoyer un PDF ou DOCX."
        }));
        setFile(null);
        return;
      }

      // Vérifier la taille du fichier (max 5 MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: "Le fichier est trop volumineux. Taille maximum: 5 MB."
        }));
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setErrors((prevErrors) => ({ ...prevErrors, file: "" }));
    }
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Valider tous les champs avant soumission
    let isValid = true;
    Object.entries(formData).forEach(([name, value]) => {
      if (!validateField(name, value)) {
        isValid = false;
      }
    });

    // Vérifier que le CV a été uploadé
    if (!file) {
      setErrors((prevErrors) => ({ ...prevErrors, file: "Votre CV est requis." }));
      isValid = false;
    }

    if (!isValid) {
      toast.error("Veuillez corriger les erreurs du formulaire.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Créer un FormData pour envoyer les données du formulaire et le fichier
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });
      submitData.append('cv', file);

      const response = await fetch("/api/candidature", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Une erreur est survenue");
      }

      const data = await response.json();

      // Réinitialiser le formulaire
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        message: "",
        accept: false,
        formType: 'candidature'
      });
      setFile(null);

      toast.success(data.message || "Votre CV a été envoyé avec succès ! 🚀 Nous avons hâte de vous rencontrer !");
      closeModal();
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "❌ Une erreur est survenue lors de l'envoi du formulaire.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Effet pour gérer la position du bouton par rapport au footer
  useEffect(() => {
    const checkFooterPosition = () => {
      const footer = document.querySelector('footer');

      if (footer && buttonRef.current) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop < windowHeight) {
          const newBottom = windowHeight - footerTop + 16;
          setButtonStyle({
            bottom: `${newBottom}px`,
            position: 'fixed'
          });
        } else {
          setButtonStyle({
            bottom: '1.5rem',
            position: 'fixed'
          });
        }
      }
    };

    checkFooterPosition();
    window.addEventListener('scroll', checkFooterPosition);
    window.addEventListener('resize', checkFooterPosition);

    return () => {
      window.removeEventListener('scroll', checkFooterPosition);
      window.removeEventListener('resize', checkFooterPosition);
    };
  }, []);

  return (
    <>
      {/* Bouton flottant avec style dynamique */}
      <button
        ref={buttonRef}
        onClick={openModal}
        style={{
          ...buttonStyle, // Conserver les styles dynamiques précédents
          background: 'linear-gradient(130.45deg, #54E0E9 5.48%, #816CFF 60.63%, #B163FF 104.96%)',
        }}
        className="right-6 z-50 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        <span role="img" aria-label="✈️">🚀</span> {buttonText}
      </button>

      {/* Modal avec formulaire */}
      {isModalOpen && (
        <div className="bg-gray-600 fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay semi-transparent */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeModal}
          ></div>

          {/* Contenu de la modal */}
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 z-10 relative overflow-hidden max-h-90vh overflow-y-auto">
            {/* Entête avec titre et bouton de fermeture */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b sticky top-0 z-10">
              <h3 className={formTitleClass}>{formTitle}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>

            {/* Corps de la modal avec le formulaire */}
            <div className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-blue-50 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors.nom ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Votre nom"
                      required
                    />
                    {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
                  </div>

                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-blue-50 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors.prenom ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Votre prénom"
                      required
                    />
                    {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
                  </div>
                </div>

                {/* Email et Téléphone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-blue-50 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="exemple@domaine.com"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-blue-50 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors.telephone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Votre numéro"
                    />
                    {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
                  </div>
                </div>

                {/* Upload de CV */}
                <div>
                    <label htmlFor="cv" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black text-left">
                        Mon CV :
                    </label>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="cv" className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 transition-all duration-300">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Cliquez pour télécharger</span> ou glissez-déposez
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOC ou DOCX</p>
                            </div>
                            <input 
                                type="file"
                                id="cv"
                                name="cv"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                    {formData.cv && (
                        <p className="mt-2 text-sm text-green-600">
                            Fichier sélectionné : {formData.cv.name}
                        </p>
                    )}
                    {errors.cv && <p className="text-red-500 text-xs mt-1">{errors.cv}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-3 py-2 bg-blue-50 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Votre message"
                    required
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="accept"
                      name="accept"
                      type="checkbox"
                      checked={formData.accept}
                      onChange={handleChange}
                      className={`w-4 h-4 border rounded focus:ring-3 focus:ring-blue-300 ${errors.accept ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                  </div>
                  <label htmlFor="accept" className="ml-2 text-sm text-left font-medium text-gray-700">
                    En soumettant ce formulaire, j&apos;accepte la collecte des informations saisies et l&apos;enregistrement de mes données. Pour en savoir plus,&nbsp;
                    <Link href="/politique" legacyBehavior>
                      <a className="text-blue-500">je consulte la politique de confidentialité</a>
                    </Link>
                  </label>
                </div>
                {errors.accept && <p className="text-red-500 text-xs mt-1">{errors.accept}</p>}

                {/* Boutons */}
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-white text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-2 px-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}