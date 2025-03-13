import React, { useEffect } from 'react';
import { jsPDF } from "jspdf";
import { useDispatch, useSelector } from 'react-redux';
import { fetchResumeById } from '../lib/resumeThunks';

export default function ResumeViewer({ resumeId }) {
    const dispatch = useDispatch();
    const { currentResume, status, error } = useSelector(state => state.resume);

    const downloadPDF = () => {
        const { trigram } = currentResume;
        const doc = new jsPDF();
        
        // Titre
        doc.setFontSize(20);
        doc.text(`CV - ${trigram}`, 10, 10);
        
        // Ligne de séparation
        doc.setLineWidth(0.5);
        doc.line(10, 15, 200, 15); // Ligne horizontale
    
        // Informations personnelles
        doc.setFontSize(14);
        doc.text(`Email: ${currentResume.email}`, 10, 20);
        doc.text(`Trigram: ${trigram}`, 10, 25);
    
        // Description
        if (currentResume.description) {
            doc.setFontSize(12);
            doc.text("Description:", 10, 30);
            doc.setFontSize(12);
            doc.text(currentResume.description, 10, 35);
        }
    
        // Expériences professionnelles
        if (currentResume.experiences && currentResume.experiences.length > 0) {
            doc.setFontSize(14);
            doc.text("Expériences Professionnelles:", 10, 50);
            currentResume.experiences.forEach((exp, index) => {
                doc.setFontSize(12);
                doc.text(`${exp.title} - ${exp.company}`, 10, 55 + index * 10);
                doc.text(`(${exp.startDate} - ${exp.endDate})`, 10, 60 + index * 10);
            });
        }
    
        // Formation
        if (currentResume.school_career && currentResume.school_career.length > 0) {
            doc.setFontSize(14);
            doc.text("Formation:", 10, 70 + currentResume.experiences.length * 10);
            currentResume.school_career.forEach((edu, index) => {
                doc.setFontSize(12);
                doc.text(`${edu.degree} - ${edu.school}`, 10, 75 + (currentResume.experiences.length * 10) + index * 10);
                doc.text(`(${edu.startDate} - ${edu.endDate})`, 10, 80 + (currentResume.experiences.length * 10) + index * 10);
            });
        }
    
        // Compétences
        if (currentResume.skills && currentResume.skills.length > 0) {
            doc.setFontSize(14);
            doc.text("Compétences:", 10, 90 + (currentResume.experiences.length * 10) + (currentResume.school_career.length * 10));
            currentResume.skills.forEach((skill, index) => {
                doc.setFontSize(12);
                doc.text(skill.name, 10, 95 + (currentResume.experiences.length * 10) + (currentResume.school_career.length * 10) + index * 10);
            });
        }
    
        // Hobbies
        if (currentResume.hobbies && currentResume.hobbies.length > 0) {
            doc.setFontSize(14);
            doc.text("Centres d'intérêt:", 10, 100 + (currentResume.experiences.length * 10) + (currentResume.school_career.length * 10) + (currentResume.skills.length * 10));
            currentResume.hobbies.forEach((hobby, index) => {
                doc.setFontSize(12);
                doc.text(hobby.name, 10, 105 + (currentResume.experiences.length * 10) + (currentResume.school_career.length * 10) + (currentResume.skills.length * 10) + index * 10);
            });
        }

        const fileName = `${trigram}-resume.pdf`;
        doc.save(fileName);
    };    

    useEffect(() => {
        if (resumeId) {
            dispatch(fetchResumeById(resumeId));
        }
    }, [resumeId, dispatch]);

    if (status === 'loading') {
        return <div className="p-4">Chargement du CV...</div>;
    }

    if (status === 'failed') {
        return <div className="p-4 text-red-500">Erreur: {error}</div>;
    }

    if (!currentResume) {
        return <div className="p-4">Aucun CV trouvé.</div>;
    }

    return (
        <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">
                {currentResume.first_name} {currentResume.last_name}
            </h1>
            
            <div className="mb-6 text-center text-gray-600">
                <p>{currentResume.email}</p>
                {currentResume.locations && currentResume.locations.length > 0 && (
                    <p className="mt-2">
                        {currentResume.locations.map(loc => `${loc.city}, ${loc.country}`).join(' • ')}
                    </p>
                )}
            </div>

            {currentResume.description && (
                <div className="mb-8 px-4">
                    <p className="text-gray-700 italic">{currentResume.description}</p>
                </div>
            )}

            {/* Expériences professionnelles */}
            {currentResume.experiences && currentResume.experiences.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
                        Expériences Professionnelles
                    </h2>
                    <div className="space-y-4">
                        {currentResume.experiences.map((exp, index) => (
                            <div key={index} className="pl-4">
                                <h3 className="font-semibold">{exp.title}</h3>
                                <p className="text-gray-700">{exp.company}</p>
                                <p className="text-sm text-gray-500">
                                    {exp.startDate} - {exp.endDate}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Formation */}
            {currentResume.school_career && currentResume.school_career.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
                        Formation
                    </h2>
                    <div className="space-y-4">
                        {currentResume.school_career.map((edu, index) => (
                            <div key={index} className="pl-4">
                                <h3 className="font-semibold">{edu.degree}</h3>
                                <p className="text-gray-700">{edu.school}</p>
                                <p className="text-sm text-gray-500">
                                    {edu.startDate} - {edu.endDate}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Compétences */}
            {currentResume.skills && currentResume.skills.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
                        Compétences
                    </h2>
                    <div className="flex flex-wrap gap-2 pl-4">
                        {currentResume.skills.map((skill, index) => (
                            <span 
                                key={index} 
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Hobbies */}
            {currentResume.hobbies && currentResume.hobbies.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
                        Centres d'intérêt
                    </h2>
                    <div className="flex flex-wrap gap-2 pl-4">
                        {currentResume.hobbies.map((hobby, index) => (
                            <span 
                                key={index} 
                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                            >
                                {hobby.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="text-sm text-gray-500 text-center mt-8">
                <p>Dernière mise à jour: {new Date(currentResume.uploaded_at).toLocaleDateString()}</p>
                <p>Trigram: {currentResume.trigram}</p>
            </div>

            <button onClick={downloadPDF} className="mb-4 bg-blue-500 text-white rounded p-2">
                Télécharger en PDF
            </button>
        </div>
    );
}