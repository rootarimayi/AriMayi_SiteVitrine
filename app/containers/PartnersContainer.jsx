"use client";
import { useState } from 'react';
import { ArrowDownCircle, ChevronsDown, ChevronsUp } from "lucide-react";
import PartnerBanner from "../components/Partner/PartnerBanner";
import PartenaireForm from "../components/Partner/PartenaireForm";
// import TestimonialSection from "../components/Partner/PartnerTestimony";
import PartnerTestimony from "../components/Partner/PartnerTestimony";
import PartnerContent from "../components/Partner/PartnerContent";
import TitleLink from "../components/Utils/TitleLink";
import CostApprenticeshipSimulator from "../components/Partner/CostApprenticeshipSimulator";


export default function PartenairesContainer() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };
    return (
        <main>
            <PartnerBanner className="bg-cover bg-center transition-all duration-300 ease-in-out py-[50px] min-h-[calc(100vh-200px)]">
                <h3 className="text-center md:text-left text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase gradient-title">
                    Nos services pour les partenaires
                </h3>
                <p className="text-center md:text-left font-Opensans text-[24px] leading-[40px] text-[#353535] max-w-[600px] mx-auto md:mx-0">
                    De <strong>l&apos;identité visuelle à l&apos;accompagnement commercial</strong>, nous prenons en charge l&apos;intégralité de votre projet digital. En collaborant avec nos apprenants, vous avancez efficacement tout en contribuant à leur <strong>opérationnalité en entreprise</strong>.
                </p>
                <p><strong className="text-center md:text-left font-Opensans text-[24px] leading-[40px] text-[#353535] max-w-[600px] mx-auto md:mx-0 gradient-title" style={{ marginTop: '60px' }}>Ensemble, développons les talents de demain !</strong></p>
            </PartnerBanner>

            <PartnerContent />

            <PartnerTestimony />

            <div style={{ display: "flex", justifyContent: "center" }}>
                <TitleLink
                    balise="h1"
                    name="Combien va me coûter mon alternant ?"
                    href="/simulator-cost-apprenticeship"
                    data-testid="title"
                    style={{
                        marginBottom: "0px",
                    }}
                />
            </div>
<<<<<<< HEAD
=======

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div
                    onClick={toggleVisibility}
                    style={{
                        display: "flex",
                        gap: "8px",
                        color: "inherit",
                        textDecoration: "none",
                        textAlign: "center",
                        cursor: "pointer",
                        margin: "20px 0",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}
                >
                    <span style={{ color: "#F68A67", fontSize: "28px", fontWeight: "600" }}>
                        {isVisible ? 'Cacher' : 'Afficher le simulateur'}
                    </span>
                    {isVisible ? (
                        <ChevronsUp size={40} color="#F68A67" />
                    ) : (
                        <ChevronsDown size={40} color="#F68A67" />
                    )}
                    
                </div>

                {/* Conteneur pour le composant avec transition de hauteur */}
                <div className="overflow-hidden transition-all duration-500">
                    <div
                        className={`max-h-0 transition-max-height duration-500 ease-in-out ${isVisible ? 'max-h-screen opacity-100' : 'opacity-0'}`}
                    >
                        <CostApprenticeshipSimulator />
                    </div>
                </div>
            </div>
>>>>>>> bb06010b90626773ed4ba1adaf475339912cb528

            <PartenaireForm />
        </main>
    );
}