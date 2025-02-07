"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import par1 from "@/public/assets/PHOTO-2024-12-22-20-02-46.jpg";
import par2 from "@/public/assets/PHOTO-2024-12-22-20-03-05.jpg";
import par3 from "@/public/assets/PHOTO-2024-12-22-20-03-34.jpg";
import PartnerContentMobile from "./Mobile/PartnerContentMobile";


export default function PartnerContent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    if (isMobile) {
        return <PartnerContentMobile />;
    }

    return (
        <>
            {/* Section 1 */}
            <section className="max-w-7xl px-8 mx-auto flex flex-col md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-12 h-full">
                <div className="w-11/12 md:w-1/2 flex-1">
                    <Image src={par1} alt="Team working on a project" className="rounded-[32px] shadow-lg h-full object-cover" />
                </div>
                <div className="w-11/12 md:w-1/2 relative bg-[#353535] text-white p-8 rounded-[32px] shadow-xl flex flex-col min-h-full overflow-hidden">
                    <h2 className="text-[38px] font-extrabold leading-[48.76px] text-left mb-4">Confiez votre projet digital à notre organisme de formation</h2>
                    <p className="text-[20px] leading-relaxed flex-1">AriMayi vise à mettre en place des partenariats gagnants-gagnants. En nous confiant vos projets, vous offrez à nos apprenants l&apos;opportunité d&apos;évoluer en situation de travail.</p>
                    <Link href="/comingsoon" className="text-[#F68A67] uppercase mt-2">Accéder à la plateforme &rarr;</Link>
                </div>
            </section>
            
            {/* Section 2 */}
            <section className="max-w-7xl px-8 mx-auto flex flex-col md:flex-row items-center bg-[#F8A185] text-white p-12 rounded-[32px] mt-12">
                <div className="w-11/12 md:w-1/2">
                    <h2 className="text-[38px] text-[#353535] font-extrabold leading-[48.76px] text-left mb-4">Formez vos futures ressources selon vos besoins et vos méthodes</h2>
                    <p className="text-[20px] text-[#353535] leading-relaxed flex-1 mb-6">Grâce à notre méthode de formation <strong>ETIC</strong>, nos tuteurs prennent en charge vos nouveaux embauchés pour les former efficacement à vos méthodes et techniques.</p>
                    <Link href="/comingsoon" className="text-[#FFF] uppercase mt-2">Découvrir nos méthodes &rarr;</Link>
                </div>
                <div className="w-11/12 md:w-1/2">
                    <Image src={par2} alt="Team working on a project" className="rounded-lg shadow-lg" />
                </div>
            </section>
            
            {/* Section 3 */}
            <section className="max-w-7xl px-8 mx-auto flex flex-col md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-12 mt-12">
                <div className="w-11/12 md:w-1/2">
                    <Image src={par3} alt="Team working on a project" className="rounded-[32px] shadow-lg h-full object-cover" />
                </div>
                <div className="w-11/12 md:w-1/2 relative bg-[#816CFF] text-white p-8 rounded-[32px] shadow-xl flex flex-col min-h-full overflow-hidden">
                    <h2 className="text-[38px] text-[#FFF] font-extrabold leading-[48.76px] text-left mb-4">Déposez des annonces sur notre plateforme pour embaucher des ressources formées</h2>
                    <p className="text-[20px] text-[#FFF] leading-relaxed flex-1 mb-6">Grâce à notre approche AFEST, vous avez la possibilité de recruter des apprenants formés par nos soins, déjà familiarisés avec vos besoins spécifiques.</p>
                    <Link href="/comingsoon" className="text-[#000] uppercase mt-2">Accéder à la plateforme &rarr;</Link>
                </div>
            </section>
        </>
    );
}
