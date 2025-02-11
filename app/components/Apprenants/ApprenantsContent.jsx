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


const Card = ({ image, titre, content }) => {
    return (
      <figure className="card w-[300px] h-[400px] p-0 m-2 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white hover:border-gray-600 flex flex-col justify-between shadow-md">
        <div className="h-[150px] w-full relative">
          <Image src={image} alt={titre} fill className="object-cover rounded-t-3xl" />
        </div>
        <figcaption className="flex flex-col gap-4 p-4 flex-grow">
          <h2 className="card-title text-lg font-semibold text-gray-800">{titre}</h2>
          <p className="card-content text-sm text-gray-600">{content}</p>
        </figcaption>
      </figure>
    );
};
  
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
                    <h2 className="text-[38px] text-[#FFF] font-extrabold leading-[48.76px] text-left mb-4">L&#39;AFEST &#40;Action de Formation En Situation de Travail&#41;</h2>
                    <p className="text-[20px] text-[#FFF] leading-relaxed flex-1 mb-6">À chaque étape, le cadre de l&#39;AFEST allie formation, autonomie et suivi personnalisé, permettant ainsi un apprentissage progressif, pertinent et immédiatement applicable.</p>
                    <p className="text-[20px] text-[#FFF] leading-relaxed flex-1 mb-6">Notre approche à la fois humaine et performante assure à chaque apprenant, quel que soit son parcours, une montée en compétences concrète, et lui donne les clés pour s&apos;insérer durablement dans le monde du travail.</p>
                </div>
            </section>

            {/* Section 2 */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-center text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase gradient-title mb-16">
                    Pour qui ?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    <Card 
                        image={app1} 
                        titre="Pour les jeunes diplômés" 
                        content="C'est une occasion unique de transformer vos connaissances théoriques en savoir-faire opérationnels, directement sur le terrain, là où les compétences prennent tout leur sens."
                    />
                    <Card 
                        image={app2} 
                        titre="Pour les personnes en reconversion" 
                        content="L'AFEST propose un accompagnement dynamique et progressif, vous permettant d'apprendre un métier par l'expérimentation, de surmonter les défis du changement et de maîtriser de nouvelles pratiques au quotidien."
                    />
                    <Card 
                        image={app3} 
                        titre="Pour les futurs apprentis" 
                        content="Accédez à une formation qui mêle pratique et réflexion, au cœur de situations réelles et efficacement préparatoires aux exigences des entreprises."
                    />
                    </div>
                </div>
            </section>
        </>
    );
}