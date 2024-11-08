"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo from "../../public/logo/Logo AriMayi - Principal - Dégradé.svg";
import logoMobile from "../../public/logo/logo_mobile.svg";
import Button from "./Button";

export default function Header() {

  const [isOpen, sertisOpen] = useState(false);
  const toggleNavebar= ()=>{
    sertisOpen(!isOpen)
  }

  return (
    <header >
      <div className=" bg-black py-[25px] mx-w-7xl mx-auto px-6 lg:px-8py-4 relative">
        <div className="flex items-end justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="hidden md:block">
                <Image
                  src={logo}
                  width={'300'}
                  alt='logo AriMayi'
                />
              </Link>  
              <Link href="/" className=" md:hidden">
                <Image
                  src={logoMobile}
                  width={'auto'}
                  alt='logo AriMayi'
                />
              </Link> 
            </div>
          </div>
          <div className="hidden lg:block">
            <nav className="ml-4 flex items-center space-x-4">
              <Link href="/" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg"> 
                 Accueil 
              </Link>
              <Link href="/apprenants" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg"> 
                Apprenants
              </Link>
              <Link href="/partenaires" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg"> 
                Partenaires 
              </Link>
              <Link href="/formations" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg">
                Formations 
              </Link>
              <Link href="/identite" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg"> 
                Identite 
              </Link>              
              <Link href="/contact" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg">
                Contact 
              </Link>
            </nav>
          </div>
          
          <Button text="Plateforme" classes={"bg-black border border-white text-white px-[10px] hover:bg-white hover:text-black" }src="#"/>
          
          <button className="inline-flex items-center justify-center p-2 rounded-lg text-white lg:hidden" onClick={toggleNavebar}>
            {isOpen ?(
              <svg  className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ):(
              <svg  className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
          <nav className="menu-mobile lg:hidden bg-[#F68A67] top-[100%] left-0 w-full pb-4">
            <div className="px-3 pt-2 space-y-1 flex flex-col">
              <Link href="/" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg"> 
                Accueil 
              </Link>
              <Link href="/apprenants" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg"> 
                Apprenants
              </Link>
              <Link href="/partenaires" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg"> 
                Partenaires 
              </Link>
              <Link href="/identite" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg"> 
                Identite 
              </Link>
              <Link href="/formations" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg">
                Formations 
              </Link>
              <Link href="/contact" className="p-2 font-Opensans font-normal text-[18px] text-white hover:bg-white hover:text-black rounded-lg">
                Contact 
              </Link>
            </div>  
          </nav>
        )
      }
    </header>
  );
}

