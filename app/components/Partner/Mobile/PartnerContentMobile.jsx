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
        bgColor: "bg-[#353535] text-white",
        readMoreColor: "#F68A67"
    },
    {
        image: par2,
        title: "Formez vos futures ressources selon vos besoins et vos méthodes",
        content: "Grâce à notre méthode de formation ETIC, nos tuteurs prennent en charge vos nouveaux embauchés pour les former efficacement à vos méthodes et techniques.",
        link: "/comingsoon",
        bgColor: "bg-[#F8A185] text-[#353535]",
        readMoreColor: "#FFFFFF"
    },
    {
        image: par3,
        title: "Déposez des annonces sur notre plateforme pour embaucher des ressources formées",
        content: "Grâce à notre approche AFEST, vous avez la possibilité de recruter des apprenants formés par nos soins, déjà familiarisés avec vos besoins spécifiques.",
        link: "/comingsoon",
        bgColor: "bg-[#816CFF] text-white",
        readMoreColor: "#000000"
    }
];

export default function PartnerContentMobile() {
    const [expanded, setExpanded] = useState(Array(cards.length).fill(false));
    
    const toggleReadMore = (index) => {
        setExpanded(expanded.map((val, i) => (i === index ? !val : val)));
    };
    
    return (
        <div className="max-w-7xl px-8 mx-auto flex flex-col space-y-8">
            {cards.map((card, index) => (
                <figure key={index} className={`card w-full md:w-[300px] p-0 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col ${card.bgColor}`}>
                    <div className="h-[200px] w-full relative">
                        <Image src={card.image} alt={card.title} fill className="object-cover rounded-t-3xl" />
                    </div>
                    <figcaption className="flex flex-col gap-4 p-4 flex-grow">
                        <h2 className="text-lg font-extrabold">{card.title}</h2>
                        <p className={`text-sm ${expanded[index] ? "line-clamp-none" : "line-clamp-3"} transition-all duration-200`}>
                            {card.content}
                        </p>
                    </figcaption>
                    <span className="text-sm uppercase font-medium cursor-pointer block text-left transition-colors mt-2 p-4" style={{ color: card.readMoreColor }} onClick={() => toggleReadMore(index)}>
                        {expanded[index] ? "Lire moins" : "En savoir plus"} &rarr;
                    </span>
                </figure>
            ))}
        </div>
    );
}