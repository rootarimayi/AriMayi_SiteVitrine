// "use client";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//     addExperienceLocal,
//     updateExperience,
//     removeExperienceLocal,
//     addEducationLocal,
//     updateEducation,
//     removeEducationLocal,
//     addSkillLocal,
//     removeSkillLocal,
//     addHobbyLocal,
//     removeHobbyLocal,
//     setLocation,
//     saveDraft,
//     loadDraft,
//     clearDraft,
// } from "../lib/resumeSlice";


// export default function ResumeContainer() {
//     const dispatch = useDispatch();
//     const [experience, setExperience] = useState({ title: "", company: "", startDate: "", endDate: "", id: Date.now() });
//     const [education, setEducation] = useState({ degree: "", school: "", startDate: "", endDate: "", id: Date.now() });
//     const [skill, setSkill] = useState({ name: "", id: Date.now() });
//     const [hobby, setHobby] = useState({ name: "", id: Date.now() });

//     const handleAddExperience = (e) => {
//         e.preventDefault();
//         dispatch(addExperience(experience));
//         setExperience({ title: "", company: "", startDate: "", endDate: "", id: Date.now() });
//     };

//     const handleAddEducation = (e) => {
//         e.preventDefault();
//         dispatch(addEducation(education));
//         setEducation({ degree: "", school: "", startDate: "", endDate: "", id: Date.now() });
//     };

//     const handleAddSkill = (e) => {
//         e.preventDefault();
//         dispatch(addSkill(skill));
//         setSkill({ name: "", id: Date.now() });
//     };

//     const handleAddHobby = (e) => {
//         e.preventDefault();
//         dispatch(addHobby(hobby));
//         setHobby({ name: "", id: Date.now() });
//     };

//     return (
//         <div className="p-4 max-w-2xl mx-auto">
//             <h2 className="text-2xl font-semibold mb-4">Formulaire de Saisie de CV</h2>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> {/* Grille pour les cartes */}
//                 {/* Formulaire d'Expérience */}
//                 <div className="p-4 bg-gray-100 shadow-md rounded-lg">
//                     <h3 className="text-xl font-semibold mb-2">Ajouter une Expérience</h3>
//                     <form onSubmit={handleAddExperience}>
//                         <input
//                             type="text"
//                             placeholder="Titre"
//                             value={experience.title}
//                             onChange={(e) => setExperience({ ...experience, title: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="Entreprise"
//                             value={experience.company}
//                             onChange={(e) => setExperience({ ...experience, company: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="Date de début"
//                             value={experience.startDate}
//                             onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="Date de fin"
//                             value={experience.endDate}
//                             onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter l'Expérience</button>
//                     </form>
//                 </div>

//                 {/* Formulaire d'Éducation */}
//                 <div className="p-4 bg-gray-100 shadow-md rounded-lg">
//                     <h3 className="text-xl font-semibold mb-2">Ajouter une Éducation</h3>
//                     <form onSubmit={handleAddEducation}>
//                         <input
//                             type="text"
//                             placeholder="Diplôme"
//                             value={education.degree}
//                             onChange={(e) => setEducation({ ...education, degree: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="École"
//                             value={education.school}
//                             onChange={(e) => setEducation({ ...education, school: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="Date de début"
//                             value={education.startDate}
//                             onChange={(e) => setEducation({ ...education, startDate: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="Date de fin"
//                             value={education.endDate}
//                             onChange={(e) => setEducation({ ...education, endDate: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter l'Éducation</button>
//                     </form>
//                 </div>

//                 {/* Formulaire de Compétence */}
//                 <div className="p-4 bg-gray-100 shadow-md rounded-lg">
//                     <h3 className="text-xl font-semibold mb-2">Ajouter une Compétence</h3>
//                     <form onSubmit={handleAddSkill}>
//                         <input
//                             type="text"
//                             placeholder="Nom de la Compétence"
//                             value={skill.name}
//                             onChange={(e) => setSkill({ ...skill, name: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter la Compétence</button>
//                     </form>
//                 </div>

//                 {/* Formulaire de Loisirs */}
//                 <div className="p-4 bg-gray-100 shadow-md rounded-lg">
//                     <h3 className="text-xl font-semibold mb-2">Ajouter un Hobby</h3>
//                     <form onSubmit={handleAddHobby}>
//                         <input
//                             type="text"
//                             placeholder="Nom du Hobby"
//                             value={hobby.name}
//                             onChange={(e) => setHobby({ ...hobby, name: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter le Hobby</button>
//                     </form>
//                 </div>

//                  {/* Formulaire de Localisation */}
//                  <div className="p-4 bg-gray-100 shadow-md rounded-lg">
//                     <h3 className="text-xl font-semibold mb-2">Ajouter ma zone géographique</h3>
//                     <form onSubmit={handleAddHobby}>
//                         <input
//                             type="text"
//                             placeholder="Nom du Hobby"
//                             value={hobby.name}
//                             onChange={(e) => setHobby({ ...hobby, name: e.target.value })}
//                             className="w-full p-2 border border-gray-300 rounded mb-2"
//                             required
//                         />
//                         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter le Hobby</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createResume, fetchResumeById, updateResume } from "@/app/lib/resumeThunks";

export default function ResumeContainer({ resumeId }) {
    const dispatch = useDispatch();
    const resumeStatus = useSelector(state => state.resume.status);
    const resumeError = useSelector(state => state.resume.error);
    const currentResume = useSelector(state => state.resume.currentResume);
    
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
        setLocation({ city: "", country: "", id: Date.now() });
    };

    const handleUpdatePersonalInfo = (e) => {
        e.preventDefault();
        setResumeData({
            ...resumeData,
            last_name: personalInfo.last_name,
            first_name: personalInfo.first_name,
            email: personalInfo.email,
            description: personalInfo.description
        });
    };

    // Gestionnaire de suppression
    const handleRemoveItem = (type, id) => {
        const updatedItems = resumeData[type].filter(item => item.id !== id);
        setResumeData({ ...resumeData, [type]: updatedItems });
    };

    // Soumission du CV complet
    const handleSubmitResume = () => {
        if (resumeId) {
            dispatch(updateResume({ resumeId, resumeData }));
        } else {
            dispatch(createResume(resumeData));
        }
    };

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Formulaire de Saisie de CV</h2>

            {/* Afficher les messages d'état/erreur */}
            {resumeStatus === 'loading' && <p className="text-blue-500">Chargement en cours...</p>}
            {resumeStatus === 'failed' && <p className="text-red-500">Erreur: {resumeError}</p>}
            {resumeStatus === 'succeeded' && <p className="text-green-500">Opération réussie!</p>}

            {/* Informations personnelles */}
            <div className="p-4 bg-white shadow-md rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-2">Informations Personnelles</h3>
                <form onSubmit={handleUpdatePersonalInfo} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Nom"
                        value={personalInfo.last_name}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, last_name: e.target.value })}
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Prénom"
                        value={personalInfo.first_name}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, first_name: e.target.value })}
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={personalInfo.email}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                        className="p-2 border border-gray-300 rounded md:col-span-2"
                        required
                    />
                    <textarea
                        placeholder="Description (max 255 caractères)"
                        value={personalInfo.description}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, description: e.target.value })}
                        className="p-2 border border-gray-300 rounded md:col-span-2"
                        maxLength={255}
                        rows={3}
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded md:col-span-2">
                        Mettre à jour les informations
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Formulaire d'Expérience */}
                <div className="p-4 bg-gray-100 shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Ajouter une Expérience</h3>
                    <form onSubmit={handleAddExperience}>
                        <input
                            type="text"
                            placeholder="Titre"
                            value={experience.title}
                            onChange={(e) => setExperience({ ...experience, title: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Entreprise"
                            value={experience.company}
                            onChange={(e) => setExperience({ ...experience, company: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Date de début"
                            value={experience.startDate}
                            onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Date de fin"
                            value={experience.endDate}
                            onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter l'Expérience</button>
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
                                            className="text-red-500 text-sm"
                                        >
                                            Supprimer
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Formulaire d'Éducation */}
                <div className="p-4 bg-gray-100 shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Ajouter une Éducation</h3>
                    <form onSubmit={handleAddEducation}>
                        <input
                            type="text"
                            placeholder="Diplôme"
                            value={education.degree}
                            onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="École"
                            value={education.school}
                            onChange={(e) => setEducation({ ...education, school: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Date de début"
                            value={education.startDate}
                            onChange={(e) => setEducation({ ...education, startDate: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Date de fin"
                            value={education.endDate}
                            onChange={(e) => setEducation({ ...education, endDate: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter l'Éducation</button>
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
                                            className="text-red-500 text-sm"
                                        >
                                            Supprimer
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Formulaire de Compétence */}
                <div className="p-4 bg-gray-100 shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Ajouter une Compétence</h3>
                    <form onSubmit={handleAddSkill}>
                        <input
                            type="text"
                            placeholder="Nom de la Compétence"
                            value={skill.name}
                            onChange={(e) => setSkill({ ...skill, name: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter la Compétence</button>
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
                                            className="text-red-500 text-sm"
                                        >
                                            Supprimer
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Formulaire de Loisirs */}
                <div className="p-4 bg-gray-100 shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Ajouter un Hobby</h3>
                    <form onSubmit={handleAddHobby}>
                        <input
                            type="text"
                            placeholder="Nom du Hobby"
                            value={hobby.name}
                            onChange={(e) => setHobby({ ...hobby, name: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter le Hobby</button>
                    </form>

                    {/* Liste des hobbies */}
                    {resumeData.hobbies.length > 0 && (
                        <div className="mt-4">
                            <h4 className="font-semibold">Hobbies ajoutés:</h4>
                            <ul className="list-disc pl-5">
                                {resumeData.hobbies.map(h => (
                                    <li key={h.id} className="mt-2 flex justify-between items-center">
                                        <span>{h.name}</span>
                                        <button 
                                            onClick={() => handleRemoveItem('hobbies', h.id)}
                                            className="text-red-500 text-sm"
                                        >
                                            Supprimer
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Formulaire de Localisation */}
                <div className="p-4 bg-gray-100 shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Ajouter ma zone géographique</h3>
                    <form onSubmit={handleAddLocation}>
                        <input
                            type="text"
                            placeholder="Ville"
                            value={location.city}
                            onChange={(e) => setLocation({ ...location, city: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Pays"
                            value={location.country}
                            onChange={(e) => setLocation({ ...location, country: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            required
                        />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter la Localisation</button>
                    </form>

                    {/* Liste des localisations */}
                    {resumeData.locations.length > 0 && (
                        <div className="mt-4">
                            <h4 className="font-semibold">Localisations ajoutées:</h4>
                            <ul className="list-disc pl-5">
                                {resumeData.locations.map(loc => (
                                    <li key={loc.id} className="mt-2 flex justify-between items-center">
                                        <span>{loc.city}, {loc.country}</span>
                                        <button 
                                            onClick={() => handleRemoveItem('locations', loc.id)}
                                            className="text-red-500 text-sm"
                                        >
                                            Supprimer
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Bouton d'envoi du CV complet */}
            <div className="mt-6 text-center">
                <button 
                    onClick={handleSubmitResume} 
                    className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors"
                    disabled={resumeStatus === 'loading'}
                >
                    {resumeId ? 'Mettre à jour mon CV' : 'Envoyer mon CV'}
                </button>
            </div>
        </div>
    );
}