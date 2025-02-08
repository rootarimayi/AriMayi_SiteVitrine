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


export default function ApprenantsContainer() {
    return(
        <main>
            <ApprenantsBanner className="bg-HomeHeaderMask sm:bg-HomeHeaderMask bg-cover bg-center transition-all duration-300 ease-in-out py-[60px] min-h-[calc(100vh-200px)] -z-20">
                <h3 className="text-3xl sm:text-4xl md:text-[48px] text-start gradient-title font-monserrat font-extrabold uppercase w-full md:w-[60%] mb-6 leading-[1.4] pt-4">
                    L&apos;expérience concrète par la formation
                </h3>
                <p className="text-left font-Opensans text-[24px] leading-[40px] text-[#353535] w-[100%] md:w-[60%] lg:w-[50%]">
                    Vous êtes étudiant ou en reconversion professionnel, AriMayi vous accompagne depuis votre formation jusqu&apos;à votre intégration.
                </p>
            </ApprenantsBanner>

            <div className="py-[50px]"></div>
            <ApprenantsContent />

            <Opportunite />

            <ApprenantsForm />
        </main>
    )
}