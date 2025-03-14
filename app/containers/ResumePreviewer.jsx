import React, { useEffect } from 'react';
import { jsPDF } from "jspdf";
import { useDispatch, useSelector } from 'react-redux';
import { fetchResumeById } from '../lib/resumeThunks';

export default function ResumeViewer({ resumeId }) {
    const dispatch = useDispatch();
    const { currentResume, status, error } = useSelector(state => state.resume);

    const drawGradientHeader = (doc, trigram) => {
        const colors = [
            [84, 224, 233],  // #54E0E9
            [129, 108, 255], // #816CFF
            [177, 99, 255]   // #B163FF
        ];
        
        const height = 20;
        const steps = 100;
        const stepHeight = height / steps;
    
        for (let i = 0; i < steps; i++) {
            const r = Math.round(colors[0][0] + (colors[2][0] - colors[0][0]) * (i / steps));
            const g = Math.round(colors[0][1] + (colors[2][1] - colors[0][1]) * (i / steps));
            const b = Math.round(colors[0][2] + (colors[2][2] - colors[0][2]) * (i / steps));
    
            doc.setFillColor(r, g, b);
            doc.rect(0, i * stepHeight, 210, stepHeight, "F");
        }
    
        // Header
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(26);
        doc.setFont("helvetica", "bold");
        doc.text(`CV - ${trigram}`, 15, height - 5);
    };
    
    const downloadPDF = () => {
        const { trigram, contract_type, locations } = currentResume;
        const city = locations && locations.length > 0 ? locations[0].city : 'Non spécifié';

        const doc = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });
    
        drawGradientHeader(doc, trigram);
    
        doc.setTextColor(0, 0, 0);
        let yPosition = 40;
    
        // Logo
        const img = new Image();
        img.src = "/images/Logo-AriMayi-text.png"; 
        img.onload = function () {
            const imgWidth = 20;
            const imgHeight = (img.height / img.width) * imgWidth;
            const imgYPosition = 20 + 5;
            doc.addImage(img, "PNG", 15, imgYPosition, imgWidth, imgHeight);
            
            // Ajouter les coordonnées AriMayi sous l'image
            doc.setFontSize(10);
            doc.text("18 promenade du Verger", 15, imgYPosition + imgHeight + 5);
            doc.text("92130 Issy les Moulineaux", 15, imgYPosition + imgHeight + 10);
            doc.text("06 12 57 07 19", 15, imgYPosition + imgHeight + 15);
            doc.text("www.arimayi.fr", 15, imgYPosition + imgHeight + 20);
    
            yPosition = imgYPosition + imgHeight + 30;
    
            // Section "Informations personnelles"
            addSectionTitle(doc, "Informations personnelles", yPosition, [129, 108, 255]);
            yPosition += 10;
            doc.setFontSize(12);
            doc.text(`Email: ${currentResume.email}`, 15, yPosition);
            const contractTypeDisplay = getContractTypeDisplay(contract_type);
            doc.text(`Type de contrat recherché: ${contractTypeDisplay}`, 15, yPosition + 7);
            doc.text(`Ville: ${city}`, 15, yPosition + 14);
            yPosition += 25;
    
            // Vérification du dépassement de page
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
    
            // Description
            if (currentResume.description) {
                addSectionTitle(doc, "Description", yPosition, [129, 108, 255]);
                yPosition += 10;
                const splitDescription = doc.splitTextToSize(currentResume.description, 180);
                doc.text(splitDescription, 15, yPosition);
                yPosition += splitDescription.length * 7 + 20;
            }
    
            // Expériences professionnelles
            if (currentResume.experiences?.length > 0) {
                addSectionTitle(doc, "Expériences Professionnelles", yPosition, [129, 108, 255]);
                yPosition += 10;
                currentResume.experiences.forEach((exp) => {
                    doc.setFontSize(12);
                    doc.setFont("helvetica", "bold");
                    doc.text(`${exp.title}`, 15, yPosition);
                    doc.setFontSize(10);
                    doc.setFont("helvetica", "normal");
                    doc.text(`${exp.company} (${exp.startDate} - ${exp.endDate})`, 15, yPosition + 5);
                    yPosition += 15;
                });
                yPosition += 20;
            }
    
            // Vérification du dépassement de page
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
    
            // Compétences
            if (currentResume.skills?.length > 0) {
                addSectionTitle(doc, "Compétences", yPosition, [129, 108, 255]);
                yPosition += 10;
                const skillsText = currentResume.skills.map((skill) => skill.name).join(", ");
                const splitSkills = doc.splitTextToSize(skillsText, 180);
                doc.text(splitSkills, 15, yPosition);
                yPosition += splitSkills.length * 7 + 20;
            }
    
            // Centres d'intérêt
            if (currentResume.hobbies?.length > 0) {
                addSectionTitle(doc, "Centres d'intérêt", yPosition, [129, 108, 255]);
                yPosition += 10;
                const hobbiesText = currentResume.hobbies.map((hobby) => hobby.name).join(", ");
                const splitHobbies = doc.splitTextToSize(hobbiesText, 180);
                doc.text(splitHobbies, 15, yPosition);
            }
    
            // Pied de page (informations légales)
            doc.setFontSize(8);
            doc.text(
                "Société par Actions Simplifiée Unipersonnelle au capital social de 1 000 €\nImmatriculée au RCS de Nanterre Siret 941 724 056",
                105,
                287,
                { align: "center" }
            );
    
            // Numérotation des pages
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                doc.setFontSize(10);
                doc.setTextColor(150, 150, 150);
                doc.text(`Page ${i} sur ${pageCount}`, 195, 287, { align: "right" });
            }
    
            const fileName = `${trigram}-CV.pdf`;
            doc.save(fileName);
        };
    };
    
    const addSectionTitle = (doc, title, y, color) => {
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text(title, 15, y);
        doc.setLineWidth(0.5);
        doc.setDrawColor(...color);
        doc.line(15, y + 2, 195, y + 2);
    };

    const getContractTypeDisplay = (contractType) => {
        switch (contractType) {
            case 'stage':
                return 'Stage';
            case 'contrat-apprentissage':
                return 'Contrat d\'apprentissage';
            case 'cdi/cdd':
                return 'CDI/CDD';
            default:
                return 'Non spécifié';
        }
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
                        {currentResume.locations.map(loc => loc.city).join(' • ')}
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
                        Centres d&apos;intérêt
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
                <p>Date d&apos;inscription: {new Date(currentResume.uploaded_at).toLocaleDateString()}</p>
                <p>Trigram: {currentResume.trigram}</p>
            </div>

            <button onClick={downloadPDF} className="mb-4 bg-blue-500 text-white rounded p-2">
                Télécharger en PDF
            </button>
        </div>
    );
}