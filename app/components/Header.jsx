"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo-arimayi-slogan.png";
import logoMobile from "@/public/logo/logo_mobile.svg";
import CostumButton from "./Buttons/CostumButton";

export default function Header() {
    const [isOpen, setisOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('partenaires');

    const toggleNavebar = () => {
        setisOpen(!isOpen);
    };

    const gradientButtonClass = "font-montserrat font-bold px-2 py-2 text-[12px] text-white rounded-lg tracking-[.5px] bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:text-black focus:outline-none focus:ring-2 focus:ring-[#F68A67]";
    const normalButtonClass = "font-montserrat font-bold text-[14px] text-white hover:text-[#F68A67] rounded-lg tracking-[.5px] focus:text-[#F68A67]";

    return (
        <>
            <header className={`overflow-hidden fixed z-50 w-full ${isOpen ? 'bg-white' : '#292929'}`}>
                <div className={`relative py-[10px] ${isOpen ? 'bg-white' : 'bg-[#292929]'}`}>
                    <div className="container flex items-center justify-between gap-2">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="flex items-center">
                                    <Image
                                        src={logo}
                                        alt="logo AriMayi"
                                        className="hidden md:block ml-0"
                                        height={80}
                                    />
                                    <Image
                                        src={logo}
                                        alt="logo AriMayi"
                                        width={140}
                                        height={140}
                                        className="block md:hidden"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center gap-5">
                            <nav className="ml-4 flex items-center">
                                {/* Premier groupe : Partenaires et Apprenants */}
                                <div className="flex items-center gap-4 mr-20">
                                    <Link
                                        href="/partenaires"
                                        className={activeButton === 'partenaires' ? gradientButtonClass : normalButtonClass}
                                        onClick={() => setActiveButton('partenaires')}
                                    >
                                        Partenaires
                                    </Link>
                                    <Link
                                        href="/apprenants"
                                        className={activeButton === 'apprenants' ? gradientButtonClass : normalButtonClass}
                                        onClick={() => setActiveButton('apprenants')}
                                    >
                                        Apprenants
                                    </Link>
                                </div>

                                {/* Deuxième groupe : Autres liens */}
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href="/"
                                        className={normalButtonClass}
                                    >
                                        Accueil
                                    </Link>
                                    <Link
                                        href="/formation"
                                        className={normalButtonClass}
                                    >
                                        Formations
                                    </Link>
                                    <Link
                                        href="/identite"
                                        className={normalButtonClass}
                                    >
                                        Identité
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className={normalButtonClass}
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </nav>
                            <CostumButton
                                text="Accès à la Plateforme"
                                classes="border-2 border-[#F68A67] text-[#F68A67] rounded-[8px] hover:bg-[#F68A67] hover:text-white transition-all duration-300 ease-in-out"
                                src="/plateforme"
                            />
                        </div>
    
                    <button
                    className="inline-flex items-center justify-center p-2 rounded-lg text-white lg:hidden"
                    onClick={toggleNavebar}
                    >
                {isOpen ? (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="text-black"
                    >
                    <path
                        fill="currentColor"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                    </svg>
                ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="text-white"
                    >
                    <path
                        fill="currentColor"
                        d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
                    />
                    </svg>
                )}
                </button>
            </div>
            </div>
            {isOpen && (
            <nav className={`menu-mobile fixed w-full lg:hidden bg-white left-0 h-screen transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                <div className="flex flex-col items-start px-8 gap-8 py-8">
                    <Link
                        href="/"
                        className="font-montserrat font-extrabold text-[24px] text-[#353535] hover:text-[#F68A67]"
                        onClick={toggleNavebar}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/apprenants"
                        className="font-montserrat font-extrabold text-[24px] text-[#353535] hover:text-[#F68A67]"
                        onClick={toggleNavebar}
                    >
                        Apprenants
                    </Link>
                    <Link
                        href="/partenaires"
                        className="font-montserrat font-extrabold text-[24px] text-[#353535] hover:text-[#F68A67]"
                        onClick={toggleNavebar}
                    >
                        Partenaires
                    </Link>
                    <Link
                        href="/identite"
                        className="font-montserrat font-extrabold text-[24px] text-[#353535] hover:text-[#F68A67]"
                        onClick={toggleNavebar}
                    >
                        Notre identité
                    </Link>
                    <Link
                        href="/formation"
                        className="font-montserrat font-extrabold text-[24px] text-[#353535] hover:text-[#F68A67]"
                        onClick={toggleNavebar}
                    >
                        Formations
                    </Link>
                    <Link
                        href="/contact"
                        className="font-montserrat font-extrabold text-[24px] text-[#353535] hover:text-[#F68A67]"
                        onClick={toggleNavebar}
                    >
                        Contact
                    </Link>
                    <div className="h-12"></div>
                    <Link
                        href="/plateforme"
                        className="font-montserrat font-extrabold text-[24px] border-2 border-[#F68A67] text-[#F68A67] px-4 py-2 rounded-lg hover:bg-[#F68A67] hover:text-white transition-all duration-300 ease-in-out"
                        onClick={toggleNavebar}
                    >
                        Accès à la plateforme
                    </Link>
                </div>
            </nav>
            )}
            </header>
            {isOpen && (
                <div className="bg-black w-full h-full  fixed overscroll-none"></div>
            )}
        </>
    );
}
