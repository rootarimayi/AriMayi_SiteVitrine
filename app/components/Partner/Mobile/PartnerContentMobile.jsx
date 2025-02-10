import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import par1 from "@/public/assets/PHOTO-2024-12-22-20-02-46.jpg";
import par2 from "@/public/assets/PHOTO-2024-12-22-20-03-05.jpg";
import par3 from "@/public/assets/PHOTO-2024-12-22-20-03-34.jpg";


const cards = [
    {
        image: par1,
        title: "Confiez votre projet digital à notre organisme de formation",
        content: "AriMayi vise à mettre en place des partenariats gagnants-gagnants. En nous confiant vos projets, vous offrez à nos apprenants l'opportunité d'évoluer en situation de travail.",
        link: "/comingsoon",
        linkText: "Accéder à la plateforme",
        bgColor: "bg-[#353535] text-white",
        readMoreColor: "#F68A67"
    },
    {
        image: par2,
        title: "Formez vos futures ressources selon vos besoins et vos méthodes",
        content: "Grâce à notre méthode de formation <strong>ETIC</strong> :",
        list: [
            { key: "E", value: "Engagement" },
            { key: "T", value: "Travail" },
            { key: "I", value: "Inclusion" },
            { key: "C", value: "Compétence" }
        ],
        extraContent: "Nos formateurs et encadrants accompagnent vos futurs embauchés en situation réelle. <strong>Objectif</strong> : les former efficacement, accélérer leur montée en compétences et faciliter leur onboarding pour une intégration fluide et opérationnelle.",
        link: "/comingsoon",
        linkText: "Découvrir nos méthodes",
        bgColor: "bg-[#F8A185] text-[#353535]",
        readMoreColor: "#FFFFFF"
    },
    {
        image: par3,
        title: "Déposez des annonces sur notre plateforme pour embaucher des ressources formées",
        content: "Grâce à notre approche AFEST, vous avez la possibilité de recruter des apprenants formés par nos soins, déjà familiarisés avec vos besoins spécifiques.",
        link: "/comingsoon",
        linkText: "Accéder à la plateforme",
        bgColor: "bg-[#816CFF] text-white",
        readMoreColor: "#000000"
    }
];


export default function PartnerContentMobile() {
    return (
        <div className="max-w-7xl px-8 mx-auto flex flex-col space-y-8">
            {cards.map((card, index) => (
                <figure key={index} className={`card w-full md:w-[300px] p-0 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col ${card.bgColor}`}>
                    <div className="h-[200px] w-full relative">
                        <Image src={card.image} alt={card.title} fill className="object-cover rounded-t-3xl" />
                    </div>
                    <figcaption className="flex flex-col gap-4 p-4 flex-grow">
                        <h2 className="text-lg font-extrabold">{card.title}</h2>

                        {/* Affichage du texte principal avec gestion du gras */}
                        <p className="text-sm" dangerouslySetInnerHTML={{ __html: card.content }} />

                        {/* Affichage de la liste si elle existe */}
                        {card.list && (
                            <ul className="text-sm">
                                {card.list.map((item, i) => (
                                    <li key={i}>
                                        <strong>{item.key}</strong> : {item.value}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Affichage du contenu supplémentaire avec gestion du gras */}
                        {card.extraContent && (
                            <p className="text-sm" dangerouslySetInnerHTML={{ __html: card.extraContent }} />
                        )}

                        {/* Ajout du lien avec la flèche */}
                        {card.link && (
                            <a href={card.link} className="text-sm uppercase font-medium mt-2 block" style={{ color: card.readMoreColor }}>
                                {card.linkText} &rarr;
                            </a>
                        )}
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}