"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo from "@/public/logo/Logo-arimayi-Principal.svg";
import logoMobile from "@/public/logo/logo_mobile.svg";
import CostumButton from "./CostumButton";


export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  const toggleNavebar = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed z-10 w-full">
        <div className=" bg-gray  relative py-[10px] ">
          <div className="container flex items-center justify-between gap-2">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="logo AriMayi"
                  className="hidden md:block ml-0"
                  style={{
                    maxWidth: "100%",
                    width: "clamp(200px, 20vw, 600px)", // Responsive width: between 200px and 600px
                  }}
                />
                <Image
                  src={logo}
                  alt="logo AriMayi"
                  width={60}
                  height={60}
                  className="block md:hidden"
                />
              </div>
            </div>
            <div className="hidden   lg:flex items-center gap-5">
              <nav className="ml-4 flex items-end space-x-4 gap-1">
                <Link
                  href="/partenaires"
                  className="font-Opensans font-bold  px-1 py-1  text-[14px] text-white hover:text-[#F68A67] rounded-lg  tracking-[.5px] focus:text-[#f6ed67] bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] "
                >
                  Partenaires
                </Link>
                <Link
                  href="/"
                  className="font-Opensans font-bold text-[12px] text-white  hover:text-orange focus:text-orange rounded-lg  tracking-[.5px]"
                >
                  Accueil
                </Link>

                <Link
                  href="/apprenants"
                  className="font-Opensans font-bold text-[12px] text-white hover:text-[#F68A67] rounded-lg  tracking-[.5px] focus:text-[#F68A67]"
                >
                  Apprenants
                </Link>
                <Link
                  href="/formation"
                  className="font-Opensans font-bold text-[12px] text-white hover:text-[#F68A67] rounded-lg  tracking-[.5px] focus:text-[#F68A67]"
                >
                  Formations
                </Link>

                <Link
                  href="/identite"
                  className="font-Opensans font-bold text-[12px] text-white hover:text-[#F68A67] rounded-lg tracking-[.5px] focus:text-[#F68A67]"
                >
                  Identité
                </Link>
                <Link
                  href="/contact"
                  className="font-Opensans font-bold text-[12px] text-white hover:text-[#F68A67] rounded-lg tracking-[.5px] focus:text-[#F68A67]"
                >
                  Contact
                </Link>
              </nav>
              <CostumButton
                text="Accés à la Plateforme"
                classes="font-Opensans font-bold px-6 py-3 text-[16px] text-white tracking-wide 
             rounded-full bg-gradient-to-r from-white/30 via-white/20 to-white/10
             backdrop-blur-md border border-white/30 
             shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out 
             focus:outline-none focus:ring-2 focus:ring-[#816CFF]"
                src=""
              />
            </div>
            <CostumButton
              text="Accés à la Plateforme"
              classes="text-white font-Opensans  text-[8px]  md:hidden  lg:hidden "
              src="#"
            />
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
          <nav className="menu-mobile w-[330px] lg:hidden bg-white top-[100%] left-0  h-screen overflow-auto">
            <div className=" flex flex-col">
              <Link
                href="/"
                className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white"
                onClick={toggleNavebar}
              >
                Accueil
              </Link>
              <Link
                href="/apprenants"
                className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white"
                onClick={toggleNavebar}
              >
                Apprenants
              </Link>
              <Link
                href="/partenaires"
                className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white"
                onClick={toggleNavebar}
              >
                Partenaires
              </Link>
              <Link
                href="/identite"
                className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white"
                onClick={toggleNavebar}
              >
                Identite
              </Link>
              <Link
                href="/formations"
                className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white"
                onClick={toggleNavebar}
              >
                Formations
              </Link>
              <Link
                href="/contact"
                className="pl-[50px] font-Opensans font-normal text-[16px] py-[20px] text-[#353535] border-b border-orange active:bg-orange  active:text-white"
                onClick={toggleNavebar}
              >
                Contact
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
