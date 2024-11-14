"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo from "../../public/logo/Logo-arimayi-Principal.svg";
import logoMobile from "../../public/logo/logo_mobile.svg";
import Button from "./Button";

export default function Header() {

  const [isOpen, setisOpen] = useState(false);
  const toggleNavebar= ()=>{
    setisOpen(!isOpen)
  }

  return (
    <header >
      <div className=" bg-black py-[10px] mx-w-7xl mx-auto px-6 lg:px-8py-4 relative">
        <div className="container mx-auto max-w-[1850px] flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt='logo AriMayi'
                className="hidden pb-[10px] md:block"
              />
              <Image
                src={logoMobile}
                alt='logo AriMayi'
                className=" md:hidden"
              />
              
            </div>
          </div>
          <div className="hidden   lg:flex items-center gap-5">
            <nav className="ml-4 flex items-end space-x-4 gap-1">
              <Link href="/" className="font-Opensans font-bold text-[16px] text-white  hover:text-[#F68A67] focus:text-[#F68A67] rounded-lg uppercase tracking-[.5px]"> 
                 Accueil 
              </Link>
              <Link href="/apprenants" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg uppercase tracking-[.5px] focus:text-[#F68A67]"> 
                Apprenants
              </Link>
              <Link href="/partenaires" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg uppercase tracking-[.5px] focus:text-[#F68A67]"> 
                Partenaires 
              </Link>
              <Link href="/formations" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg uppercase tracking-[.5px] focus:text-[#F68A67]">
                Formations 
              </Link>
              <Link href="/identite" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg uppercase tracking-[.5px] focus:text-[#F68A67]"> 
                Identite 
              </Link>              
              <Link href="/contact" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg uppercase tracking-[.5px] focus:text-[#F68A67]">
                Contact 
              </Link>
            </nav>
            <Button text="Accés à la Plateforme" classes="text-white font-Opensans font-bold text-[16px] uppercase bg-[#F68A67] tracking-[.5px] " src="#"/>
          </div>
          <Button text="Aller à la Plateforme" classes="text-white font-Opensans font-bold text-[16px] uppercase bg-[#F68A67] tracking-[.5px] lg:hidden" src="#"/>
          
          
          
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
              <Link href="/identite" className="p-2 font-Opensans font-normal text-[16px] text-white hover:bg-white hover:text-black rounded-lg"> 
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

