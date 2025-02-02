"use client";
import React from "react";
import Image from "next/image";
import { ReactSVG } from "react-svg";

export default function InspirationSection({ className, children }) {
    // Fonction pour extraire le titre et le contenu
    const extractTitleAndContent = (children) => {
        const childrenArray = React.Children.toArray(children);
        const title = childrenArray.find(child => 
        React.isValidElement(child) && 
        child.props.className?.includes('text-[32px]')
        );
        const content = childrenArray.filter(child => child !== title);
        return { title, content };
    };

    const { title, content } = extractTitleAndContent(children);

    return (
       <section className={`relative min-h-screen flex items-center ${className}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col">
                {/* Titre à gauche */}
                <div className="text-left mb-12 md:mb-16">
                    {title}
                </div>
                
                {/* Contenu principal */}
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Colonne gauche avec SVG */}
                    <div className="flex flex-col w-[250px] sm:w-[300px] md:w-[400px] flex-shrink-0">
                    <ReactSVG src="/svg/logo-arimayi.svg" className="w-full h-auto" />
                    </div>
                    
                    {/* Colonne droite avec le contenu */}
                    <div className="max-w-2xl md:w-1/2 mt-12 md:mt-0 md:ml-16 lg:ml-24">
                    {content}
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}