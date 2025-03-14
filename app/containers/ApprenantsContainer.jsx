"use client";
import Image from "next/image";
import Img from "@/public/assets/trainee-header-img.jpg";
import app1 from "@/public/assets/PHOTO-2024-12-22-20-01-27.jpg";
import app2 from "@/public/assets/PHOTO-2024-12-22-20-01-44.jpg";
import app3 from "@/public/assets/PHOTO-2024-12-22-20-02-06.jpg";
import Mask from "@/public/images/Mask.png";
import Opportunite from "../opportunite/page";
import ApprenantsForm from "../components/Apprenants/ApprenantsForm";
import ApprenantsBanner from "../components/Apprenants/ApprenantsBanner";
import ApprenantsContent from "../components/Apprenants/ApprenantsContent";
import TestimonialSection from "../components/Home/TestimonialSection";
import TitleLink from "../components/Utils/TitleLink";
import { useState } from "react";
import SalaryApprenticeshipSimulatorContainer from "./SalaryApprenticeshipSimulatorContainer";
import { ArrowDownCircle, ArrowUpCircle, ChevronsDown, ChevronsUp } from "lucide-react";
import SalaryApprenticeshipSimulator from "../components/Apprenants/SalaryApprenticeshipSimulator";


export default function ApprenantsContainer() {
     const [isVisible, setIsVisible] = useState(false);
    
        const toggleVisibility = () => {
            setIsVisible((prev) => !prev);
        };
    return(
        <main>
            <ApprenantsBanner className="bg-HomeHeaderMask sm:bg-HomeHeaderMask bg-cover bg-center transition-all duration-300 ease-in-out py-[100px] min-h-[calc(100vh-200px)] -z-20">
                <h3 className="text-[48px] text-start font-monserrat font-extrabold uppercase text-[#353535] bg-clip-text w-[100%] md:w-[60%]">
                    L&apos;expérience concrète par la formation
                </h3>
                <p className="text-justify font-monserrat text-[18px] leading-[32px] text-[#353535] w-full mt-4 mb-4 md:text-[24px] md:leading-[40px]">
                    Grâce à des <strong>formations immersives</strong> en classes virtuelle, nos apprenants se forment sur des <strong>projets digitaux réels : identité visuelle, développement, IA, cybersécurité et commercial</strong>. <br/><strong>De la sélection à la validation de votre période d’essai, vous bénéficiez d&apos;un accompagnement individualisé</strong> pour devenir <strong>opérationnel.le en entreprise</strong>. Vous êtes étudiant ou en reconversion professionnel, AriMayi vous accompagne depuis votre formation jusqu&apos;à votre intégration.
                </p>
                <p><strong className="text-center md:text-left font-Opensans text-[24px] leading-[40px] text-[#353535] max-w-[600px] mx-auto md:mx-0 gradient-title" style={{ marginTop: '60px' }}>De l&apos;apprentissage à l&apos;emploi, trace ta route ! </strong></p>
            </ApprenantsBanner>

            <div className="py-[50px]"></div>
            <ApprenantsContent />

            <Opportunite />

            <TestimonialSection />

            <div style={{ display: "flex", justifyContent: "center" }}>
                <TitleLink
                    balise="h1"
                    name="Mon salaire en tant qu'alternant ?"
                    data-testid="title"
                    style={{
                        marginBottom: "0px",
                    }}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div
                    onClick={toggleVisibility}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        color: "inherit",
                        textDecoration: "none",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        margin: "20px 0",
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

                {/* Conteneur Simulateur */}
                <div className="overflow-hidden transition-all duration-500">
                    <div
                        className={`transition-all duration-500 ease-in-out ${
                        isVisible 
                            ? 'max-h-[2000px] opacity-100 py-8' 
                            : 'max-h-0 opacity-0 py-0'
                        }`}
                    >
                        <SalaryApprenticeshipSimulator />
                    </div>
                </div>
            </div>
            <ApprenantsForm />
        </main>
    )
}