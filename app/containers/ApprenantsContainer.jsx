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


export default function ApprenantsContainer() {
    return(
        <main>
            <ApprenantsBanner className="bg-HomeHeaderMask sm:bg-HomeHeaderMask bg-cover bg-center transition-all duration-300 ease-in-out py-[100px] min-h-[calc(100vh-200px)] -z-20">
                <h3 className="text-[48px] text-start font-monserrat font-extrabold uppercase gradient-title bg-clip-text w-[100%] md:w-[60%]">
                    L&apos;expérience concrète par la formation
                </h3>
                <p className="text-left font-monserrat text-[18px] leading-[32px] text-[#353535] w-full mt-4 mb-4 md:text-[24px] md:leading-[40px]">
                    Grâce à des <strong>formations immersives</strong>, nos apprenants se forment sur des <strong>projets digitaux réels : identité visuelle, développement, IA, cybersécurité et accompagnement commercial</strong>. <br/><strong>De la sélection à la validation de votre période d’essai, vous bénéficiez d&apos;un accompagnement individualisé</strong> pour devenir <strong>opérationnel.le en entreprise</strong>. Vous êtes étudiant ou en reconversion professionnel, AriMayi vous accompagne depuis votre formation jusqu&apos;à votre intégration.
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
                    href="/simulator-salary-apprenticeship"
                    data-testid="title"
                    style={{
                        marginBottom: "0px",
                    }}
                />
            </div>

            <ApprenantsForm />
        </main>
    )
}