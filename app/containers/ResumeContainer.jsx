"use client";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { createResume, fetchResumeById, updateResume } from "@/app/lib/resumeThunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function ResumeContainer({ resumeId }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const resumeStatus = useSelector(state => state.resume.status);
    const resumeError = useSelector(state => state.resume.error);
    const currentResume = useSelector(state => state.resume.currentResume);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [savedInfo, setSavedInfo] = useState(null);
    
    // État principal du CV
    const [resumeData, setResumeData] = useState({
        last_name: '',
        first_name: '',
        email: '',
        description: '',
        experiences: [],
        school_career: [],
        hobbies: [],
        locations: [],
        skills: []
    });

    // États pour les formulaires individuels
    const [experience, setExperience] = useState({ title: "", company: "", startDate: "", endDate: "", id: Date.now() });
    const [education, setEducation] = useState({ degree: "", school: "", startDate: "", endDate: "", id: Date.now() });
    const [skill, setSkill] = useState({ name: "", id: Date.now() });
    const [hobby, setHobby] = useState({ name: "", id: Date.now() });
    const [location, setLocation] = useState({ city: "", country: "", id: Date.now() });
    const [personalInfo, setPersonalInfo] = useState({ last_name: "", first_name: "", email: "", description: "" });

    // Charger le CV existant si un ID est fourni
    useEffect(() => {
        if (resumeId) {
            dispatch(fetchResumeById(resumeId));
        }
    }, [resumeId, dispatch]);

    // Mettre à jour les champs si un CV est chargé
    useEffect(() => {
        if (currentResume && resumeId) {
            setResumeData(currentResume);
            setPersonalInfo({
                last_name: currentResume.last_name || '',
                first_name: currentResume.first_name || '',
                email: currentResume.email || '',
                description: currentResume.description || ''
            });
        }
    }, [currentResume, resumeId]);

    // Gestionnaires d'ajout
    const handleAddExperience = (e) => {
        e.preventDefault();
        const updatedExperiences = [...resumeData.experiences, experience];
        setResumeData({ ...resumeData, experiences: updatedExperiences });
        setExperience({ title: "", company: "", startDate: "", endDate: "", id: Date.now() });
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        const updatedEducation = [...resumeData.school_career, education];
        setResumeData({ ...resumeData, school_career: updatedEducation });
        setEducation({ degree: "", school: "", startDate: "", endDate: "", id: Date.now() });
    };

    const handleAddSkill = (e) => {
        e.preventDefault();
        const updatedSkills = [...resumeData.skills, skill];
        setResumeData({ ...resumeData, skills: updatedSkills });
        setSkill({ name: "", id: Date.now() });
    };

    const handleAddHobby = (e) => {
        e.preventDefault();
        const updatedHobbies = [...resumeData.hobbies, hobby];
        setResumeData({ ...resumeData, hobbies: updatedHobbies });
        setHobby({ name: "", id: Date.now() });
    };

    const handleAddLocation = (e) => {
        e.preventDefault();
        const updatedLocations = [...resumeData.locations, location];
        setResumeData({ ...resumeData, locations: updatedLocations });
        setLocation({ city: "", id: Date.now() });
    };

    const handleUpdatePersonalInfo = (e) => {
        e.preventDefault();
        // Sauvegarder les données
        const newInfo = {
            last_name: personalInfo.last_name,
            first_name: personalInfo.first_name,
            email: personalInfo.email,
            description: personalInfo.description
        };
        setResumeData({ ...resumeData, ...newInfo });

        // Stocker les infos validées
        setSavedInfo(newInfo);
        setIsSubmitted(true);
    };

    // Gestionnaire de suppression
    const handleRemoveItem = (type, id) => {
        const updatedItems = resumeData[type].filter(item => item.id !== id);
        setResumeData({ ...resumeData, [type]: updatedItems });
    };

    // Soumission du CV complet
    const handleSubmitResume = () => {
        const loadingToast = toast.loading("Chargement en cours...");
        
        try {
          if (resumeId) {
            // Mise à jour d'un CV existant
            dispatch(updateResume({ resumeId, resumeData }))
              .unwrap()
              .then(() => {
                toast.dismiss(loadingToast);
                toast.success("📧 🎉 Votre CV a été mis à jour avec succès !");
              })
              .catch((error) => {
                toast.dismiss(loadingToast);
                toast.error(`Erreur: ${error.message || "❌ Une erreur est survenue lors de la mise à jour"}`);
              });
          } else {
            // Création d'un nouveau CV
            dispatch(createResume(resumeData))
              .unwrap()
              .then(() => {
                toast.dismiss(loadingToast);
                toast.success("📧 🎉 Votre CV a été envoyé avec succès !");
                router.push('/');
              })
              .catch((error) => {
                toast.dismiss(loadingToast);
                toast.error(`Erreur: ${error.message || "❌ Une erreur est survenue lors de l'envoi"}`);
              });
          }
        } catch (error) {
          toast.dismiss(loadingToast);
          toast.error("❌ Une erreur inattendue s'est produite");
        }
    };

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <h2 className="text-[38px] font-semibold mb-12 gradient-title font-monserrat text-center">Je remplis ce formulaire pour envoyer mon CV</h2>
            {/* Grille principale - 2 colonnes sur écrans moyens et grands, 1 colonne sur petit écran */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Colonne de gauche - 3 cards */}
                <div className="grid grid-cols-1 gap-4">
                    {/* Informations personnelles */}
                    <div className="p-4 bg-gray-100 shadow-xl rounded-[32px]">
                        <h3 className="text-xl font-semibold mb-2 text-center font-monserrat">
                            Informations Personnelles
                        </h3>
                        {isSubmitted && savedInfo ? (
                            <div className="text-center">
                                <p className="text-lg font-semibold">{savedInfo.first_name} {savedInfo.last_name}</p>
                                <p className="text-gray-600">{savedInfo.email}</p>
                                <p className="italic text-gray-500">"{savedInfo.description}"</p>

                                <div className="flex justify-center">
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-4 bg-[#F68A67] text-white px-4 py-2 w-12 h-12 rounded-full shadow-lg hover:bg-[#F68A67] transition transform hover:scale-110 flex items-center justify-center"
                                    >
                                        <FontAwesomeIcon icon={faEdit} className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleUpdatePersonalInfo} className="grid grid-cols-1 gap-4">
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    value={personalInfo.last_name}
                                    onChange={(e) => setPersonalInfo({ ...personalInfo, last_name: e.target.value })}
                                    className="p-2 border border-gray-300 rounded-[15px]"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Prénom"
                                    value={personalInfo.first_name}
                                    onChange={(e) => setPersonalInfo({ ...personalInfo, first_name: e.target.value })}
                                    className="p-2 border border-gray-300 rounded-[15px]"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={personalInfo.email}
                                    onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                                    className="p-2 border border-gray-300 rounded-[15px]"
                                    required
                                />
                                <textarea
                                    placeholder="Expliquez votre projet ici..."
                                    value={personalInfo.description}
                                    onChange={(e) => setPersonalInfo({ ...personalInfo, description: e.target.value })}
                                    className="p-2 border border-gray-300 rounded-[15px] resize-none"
                                    maxLength={255}
                                    rows={3}
                                />
                                <div className="flex justify-center mb-3 mt-4">
                                    <button 
                                        type="submit" 
                                        className="flex items-center justify-center bg-[#F68A67] text-white p-3 rounded-full hover:bg-[#F68A67] transition transform hover:scale-110 shadow-lg"
                                    >
                                        <FontAwesomeIcon icon={faPlus} className="text-lg" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Formulaire d'Expérience */}
                    <div className="p-4 bg-gray-100 shadow-xl rounded-[32px]">
                        <h3 className="text-xl font-semibold mb-4 text-center font-monserrat">Ajouter une Expérience</h3>
                        <form onSubmit={handleAddExperience}>
                            <input
                                type="text"
                                placeholder="Titre"
                                value={experience.title}
                                onChange={(e) => setExperience({ ...experience, title: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Entreprise"
                                value={experience.company}
                                onChange={(e) => setExperience({ ...experience, company: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Date de début - MM/AAAA"
                                value={experience.startDate}
                                onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Date de fin - MM/AAAA"
                                value={experience.endDate}
                                onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <div className="flex justify-center mb-3 mt-4">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center bg-[#F68A67] text-white p-3 rounded-full hover:bg-[#F68A67] transition transform hover:scale-110 shadow-lg"
                                >
                                    <FontAwesomeIcon icon={faPlus} className="text-lg" />
                                </button>
                            </div>
                        </form>

                        {/* Liste des expériences */}
                        {resumeData.experiences.length > 0 && (
                            <div className="mt-4">
                                <h4 className="font-semibold">Expériences ajoutées:</h4>
                                <ul className="list-disc pl-5">
                                    {resumeData.experiences.map(exp => (
                                        <li key={exp.id} className="mt-2 flex justify-between items-center">
                                            <span>{exp.title} chez {exp.company}</span>
                                            <button 
                                                onClick={() => handleRemoveItem('experiences', exp.id)}
                                                className="text-red-500 text-sm mr-6"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Formulaire d'Éducation */}
                    <div className="p-4 bg-gray-100 shadow-xl rounded-[32px]">
                        <h3 className="text-xl font-semibold mb-4 text-center font-monserrat">Ajouter une Formation</h3>
                        <form onSubmit={handleAddEducation}>
                            <input
                                type="text"
                                placeholder="Diplôme"
                                value={education.degree}
                                onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="École"
                                value={education.school}
                                onChange={(e) => setEducation({ ...education, school: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Date de début - MM/AAAA"
                                value={education.startDate}
                                onChange={(e) => setEducation({ ...education, startDate: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Date de fin - MM/AAAA"
                                value={education.endDate}
                                onChange={(e) => setEducation({ ...education, endDate: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <div className="flex justify-center mb-3 mt-4">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center bg-[#F68A67] text-white p-3 rounded-full hover:bg-[#F68A67] transition transform hover:scale-110 shadow-lg"
                                >
                                    <FontAwesomeIcon icon={faPlus} className="text-lg" />
                                </button>
                            </div>
                        </form>

                        {/* Liste des éducations */}
                        {resumeData.school_career.length > 0 && (
                            <div className="mt-4">
                                <h4 className="font-semibold">Formations ajoutées:</h4>
                                <ul className="list-disc pl-5">
                                    {resumeData.school_career.map(edu => (
                                        <li key={edu.id} className="mt-2 flex justify-between items-center">
                                            <span>{edu.degree} à {edu.school}</span>
                                            <button 
                                                onClick={() => handleRemoveItem('school_career', edu.id)}
                                                className="text-red-500 text-sm mr-6"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {/* Formulaire de Compétence */}
                    <div className="p-4 bg-gray-100 shadow-xl rounded-[32px] flex flex-col justify-center min-h-[250px]">
                        <h3 className="text-xl font-semibold mb-2 text-center font-monserrat">Ajouter une Compétence</h3>
                        <form onSubmit={handleAddSkill}>
                            <input
                                type="text"
                                placeholder="Nom de la Compétence"
                                value={skill.name}
                                onChange={(e) => setSkill({ ...skill, name: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <div className="flex justify-center mb-2 mt-3">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center bg-[#F68A67] text-white p-3 rounded-full hover:bg-[#F68A67] transition transform hover:scale-110 shadow-lg"
                                >
                                    <FontAwesomeIcon icon={faPlus} className="text-lg" />
                                </button>
                            </div>
                        </form>

                        {/* Liste des compétences */}
                        {resumeData.skills.length > 0 && (
                            <div className="mt-4">
                                <h4 className="font-semibold">Compétences ajoutées:</h4>
                                <ul className="list-disc pl-5">
                                    {resumeData.skills.map(s => (
                                        <li key={s.id} className="mt-2 flex justify-between items-center">
                                            <span>{s.name}</span>
                                            <button 
                                                onClick={() => handleRemoveItem('skills', s.id)}
                                                className="text-red-500 text-sm mr-6"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Formulaire de Loisirs */}
                    <div className="p-4 bg-gray-100 shadow-xl rounded-[32px] flex flex-col justify-center min-h-[250px]">
                        <h3 className="text-xl font-semibold mb-2 text-center font-monserrat">Ajouter un Loisir</h3>
                        <form onSubmit={handleAddHobby}>
                            <input
                                type="text"
                                placeholder="Nom du Loisir"
                                value={hobby.name}
                                onChange={(e) => setHobby({ ...hobby, name: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <div className="flex justify-center mb-3 mt-4">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center bg-[#F68A67] text-white p-3 rounded-full hover:bg-[#F68A67] transition transform hover:scale-110 shadow-lg"
                                >
                                    <FontAwesomeIcon icon={faPlus} className="text-lg" />
                                </button>
                            </div>
                        </form>

                        {/* Liste des hobbies */}
                        {resumeData.hobbies.length > 0 && (
                            <div className="mt-4">
                                <h4 className="font-semibold">Loisirs ajoutés:</h4>
                                <ul className="list-disc pl-5">
                                    {resumeData.hobbies.map(h => (
                                        <li key={h.id} className="mt-2 flex justify-between items-center">
                                            <span>{h.name}</span>
                                            <button 
                                                onClick={() => handleRemoveItem('hobbies', h.id)}
                                                className="text-red-500 text-lg mr-6"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Formulaire de Localisation */}
                    <div className="p-4 bg-gray-100 shadow-xl rounded-[32px] flex flex-col justify-center min-h-[250px]">
                        <h3 className="text-xl font-semibold mb-2 text-center font-monserrat">Ajouter ma zone géographique</h3>
                        <form onSubmit={handleAddLocation}>
                            <input
                                type="text"
                                placeholder="Ville"
                                value={location.city}
                                onChange={(e) => setLocation({ ...location, city: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-[15px] mb-2"
                                required
                            />
                            <div className="flex justify-center mb-3 mt-4">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center bg-[#F68A67] text-white p-3 rounded-full hover:bg-[#F68A67] transition transform hover:scale-110 shadow-lg"
                                >
                                    <FontAwesomeIcon icon={faPlus} className="text-lg" />
                                </button>
                            </div>
                        </form>

                        {/* Liste des localisations */}
                        {resumeData.locations.length > 0 && (
                            <div className="mt-4">
                                <h4 className="font-semibold">Localisation ajoutée:</h4>
                                <ul className="list-disc pl-5">
                                    {resumeData.locations.map(loc => (
                                        <li key={loc.id} className="mt-2 flex justify-between items-center">
                                            <span>{loc.city}, {loc.country}</span>
                                            <button 
                                                onClick={() => handleRemoveItem('locations', loc.id)}
                                                className="text-red-500 text-sm mr-6"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bouton d'envoi du CV complet */}
            <div className="mt-12 text-center">
                <button 
                    onClick={handleSubmitResume} 
                    className="bg-[#F48C72] text-white py-3 px-6 rounded-[8px] font-semibold font-monserrat shadow-md transform hover:scale-110 transition-all duration-300 ease-in-out"
                    disabled={resumeStatus === 'loading'}
                >
                    {resumeId ? 'Mettre à jour mon CV' : 'Envoyer mon CV'}
                </button>
            </div>
        </div>
    );
}