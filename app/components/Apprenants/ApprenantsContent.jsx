import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import par1 from "@/public/assets/PHOTO-2024-12-22-20-02-46.jpg";
import par2 from "@/public/assets/PHOTO-2024-12-22-20-03-05.jpg";
import par3 from "@/public/assets/PHOTO-2024-12-22-20-03-34.jpg";
import app1 from "@/public/assets/PHOTO-2024-12-22-20-01-27.jpg";
import app2 from "@/public/assets/PHOTO-2024-12-22-20-01-44.jpg";
import app3 from "@/public/assets/PHOTO-2024-12-22-20-02-06.jpg";
import ApprenantsContentMobile from './Mobile/ApprenantsContentMobile';


export default function ApprenantsContent() {
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
        return <ApprenantsContentMobile />;
    }

    return (
        <>
            {/* Section 1 */}
            <section className="max-w-7xl px-8 mx-auto flex flex-col md:flex-row items-center bg-[#353535] text-white p-12 rounded-[32px] mt-12">
                <div className="w-full">
                    <h2 className="text-[38px] text-[#FFF] font-extrabold leading-[48.76px] text-left mb-4">L&#39;AFEST</h2>
                    <p className="text-[20px] text-[#FFF] leading-relaxed flex-1 mb-6">À chaque étape, le cadre de l&#39;<span className="text-blue-600">AFEST</span> allie formation, autonomie et suivi personnalisé, permettant ainsi un apprentissage progressif, pertinent et immédiatement applicable.</p>
                    <p className="text-[20px] text-[#FFF] leading-relaxed flex-1 mb-6">Notre approche à la fois humaine et performante assure à chaque apprenant, quel que soit son parcours, une montée en compétences concrète, et lui donne les clés pour s&apos;insérer durablement dans le monde du travail.</p>
                </div>
            </section>

            {/* Section 2 */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Titre centré */}
                    <h3 className="text-center text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase gradient-title mb-16">
                        Pour qui ?
                    </h3>

                    {/* Container flex pour les 3 colonnes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Jeunes diplômés */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 relative mb-6">
                                <Image
                                src={app1}
                                alt="Jeunes diplômés"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Pour les jeunes diplômés
                            </h3>
                            <p className="text-gray-600 text-justify">
                                C&apos;est une occasion unique de transformer vos connaissances
                                théoriques en savoir-faire opérationnels, directement sur le
                                terrain, là où les compétences prennent tout leur sens.
                            </p>
                        </div>

                        {/* Personnes en reconversion */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 relative mb-6">
                                <Image
                                src={app2}
                                alt="Personnes en reconversion"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Pour les personnes en reconversion
                            </h3>
                            <p className="text-gray-600 text-justify">
                                L&apos;AFEST propose un accompagnement dynamique et progressif, vous
                                permettant d&apos;apprendre un métier par l&apos;expérimentation, de
                                surmonter les défis du changement et de maîtriser de nouvelles
                                pratiques au quotidien.
                            </p>
                        </div>

                        {/* Futurs apprentis */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 relative mb-6">
                                <Image
                                src={app3}
                                alt="Futurs apprentis"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Pour les futurs apprentis
                            </h3>
                            <p className="text-gray-600 text-justify">
                                Accédez à une formation qui mêle pratique et réflexion, au cœur
                                de situations réelles et efficacement préparatoires aux
                                exigences des entreprises.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}