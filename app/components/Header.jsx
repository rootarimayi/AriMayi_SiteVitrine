"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo from "../../public/logo/Logo-arimayi-Principal.svg";
import logoMobile from "../../public/logo/logo_mobile.svg";
import CostumButton from "./CostumButton";
import openIcon from "@/public/assets/Open.svg";
import closeIcon from "@/public/assets/CloseB.svg";

export default function Header() {

  const [isOpen, setisOpen] = useState(false);
  const toggleNavebar= ()=>{
    setisOpen(!isOpen)
  }

  return (
    <>
      <header className="fixed z-10">
        <div className=" bg-gray mx-auto relative w-w-full py-[10px] ">
          <div className="container mx-auto max-w-[1850px]  w-[97%] flex items-center justify-between gap-2">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  alt='logo AriMayi'
                  priority
                  className="hidden pb-[10px] md:block"
                />
                <Image
                  src={logoMobile}
                  alt='logo AriMayi'
                  width={60}
                  height={60}
                  className=" md:hidden"
                />
                
              </div>
            </div>
            <div className="hidden   lg:flex items-center gap-5">
              <nav className="ml-4 flex items-end space-x-4 gap-1">
                <Link href="/" className="font-Opensans font-bold text-[16px] text-white  hover:text-[#F68A67] focus:text-[#F68A67] rounded-lg  tracking-[.5px]"> 
                  Accueil 
                </Link>
                <Link href="/apprenants" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg  tracking-[.5px] focus:text-[#F68A67]"> 
                  Apprenants
                </Link>
                <Link href="/partenaires" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg  tracking-[.5px] focus:text-[#F68A67]"> 
                  Partenaires 
                </Link>
                <Link href="/formations" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg  tracking-[.5px] focus:text-[#F68A67]">
                  Formations 
                </Link>
                <Link href="/identite" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg tracking-[.5px] focus:text-[#F68A67]"> 
                  Identite 
                </Link>              
                <Link href="/contact" className="font-Opensans font-bold text-[16px] text-white hover:text-[#F68A67] rounded-lg tracking-[.5px] focus:text-[#F68A67]">
                  Contact 
                </Link>
              </nav>
              <CostumButton text="Accés à la Plateforme" classes="text-white font-Opensans font-bold text-[16px] bg-[#F68A67] tracking-[.5px] " src="#"/>
            </div>
            <CostumButton text="Accés à la Plateforme" classes="text-white font-Opensans font-bold text-[12px] md:text-[16px] bg-[#F68A67] tracking-[.5px] lg:hidden" src="#" />
            <button className="inline-flex items-center justify-center p-2 rounded-lg text-white lg:hidden" onClick={toggleNavebar}>
              {isOpen ?(
                <Image
                src={closeIcon}
                alt='close-icon'
                />
              ):(
                <Image
                src={openIcon}
                alt='open-icon'
                />
              )} 
            </button>
          </div>
        </div>
        {isOpen && (
            <nav className="menu-mobile w-[330px] lg:hidden bg-white top-[100%] left-0  h-screen">
              <div className=" flex flex-col">
                <Link href="/" className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white" onClick={toggleNavebar}> 
                  Accueil 
                </Link>
                <Link href="/apprenants" className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white" onClick={toggleNavebar}> 
                  Apprenants
                </Link>
                <Link href="/partenaires" className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white" onClick={toggleNavebar}> 
                  Partenaires 
                </Link>
                <Link href="/identite" className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white" onClick={toggleNavebar}> 
                  Identite 
                </Link>
                <Link href="/formations" className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white" onClick={toggleNavebar}>
                  Formations 
                </Link>
                <Link href="/contact" className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white" onClick={toggleNavebar}>
                  Contact 
                </Link>
              </div>  
            </nav>
          )
        }
      </header>
      {isOpen && (<div className="bg-black w-full h-full  fixed overscroll-none"></div>)}
    </>
  );
}

