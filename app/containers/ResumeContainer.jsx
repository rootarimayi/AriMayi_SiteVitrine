"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    addExperienceLocal,
    updateExperience,
    removeExperienceLocal,
    addEducationLocal,
    updateEducation,
    removeEducationLocal,
    addSkillLocal,
    removeSkillLocal,
    addHobbyLocal,
    removeHobbyLocal,
    setLocation,
    saveDraft,
    loadDraft,
    clearDraft,
} from "../lib/resumeSlice";


export default function ResumeContainer() {
    const dispatch = useDispatch();
    const [experience, setExperience] = useState({ title: "", company: "", startDate: "", endDate: "", id: Date.now() });
    const [education, setEducation] = useState({ degree: "", school: "", startDate: "", endDate: "", id: Date.now() });
    const [skill, setSkill] = useState({ name: "", id: Date.now() });
    const [hobby, setHobby] = useState({ name: "", id: Date.now() });

    const handleAddExperience = (e) => {
        e.preventDefault();
        dispatch(addExperience(experience));
        setExperience({ title: "", company: "", startDate: "", endDate: "", id: Date.now() });
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        dispatch(addEducation(education));
        setEducation({ degree: "", school: "", startDate: "", endDate: "", id: Date.now() });
    };

    const handleAddSkill = (e) => {
        e.preventDefault();
        dispatch(addSkill(skill));
        setSkill({ name: "", id: Date.now() });
    };

    const handleAddHobby = (e) => {
        e.preventDefault();
        dispatch(addHobby(hobby));
        setHobby({ name: "", id: Date.now() });
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Formulaire de Saisie de CV</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> {/* Grille pour les cartes */}
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
                </div>

                 {/* Formulaire de Localisation */}
                 <div className="p-4 bg-gray-100 shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Ajouter ma zone géographique</h3>
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
                </div>
            </div>
        </div>
    );
};