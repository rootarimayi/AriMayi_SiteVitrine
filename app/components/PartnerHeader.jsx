"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logopart from "@/public/logo/partnerarimayi.svg";
import logoMobilepart from "@/public/logo/partnerlogo.svg";
import CostumButton from "./CostumButton";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  const toggleNavebar = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed z-10 w-full">
        <div className=" bg-[#444444]  relative py-[10px] ">
          <div className="container flex items-center justify-between gap-2">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  src={logopart}
                  alt="logo AriMayi"
                  width={50}
                  height={40}
                  priority
                  className="hidden md:block ml-0"
                />

                <Image
                  src={logoMobilepart}
                  alt="logo AriMayi"
                  width={60}
                  height={60}
                  className=" md:hidden"
                />
              </div>
            </div>
            <div className="hidden   lg:flex items-center gap-5">
              <nav className="ml-4 flex items-end space-x-4 gap-1">
                <Link
                  href="/apprenants"
                  className="font-Opensans font-bold px-1 py-1 text-[12px] text-white hover:text-[#F68A67] rounded-lg  tracking-[.5px] focus:text-[#f6ed67] bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] "
                >
                  Apprenants
                </Link>

                <Link
                  href="/"
                  className="font-Opensans font-bold text-[12px] text-white hover:text-[#F68A67] rounded-lg  tracking-[.5px] focus:text-[#F68A67]"
                >
                  Accueil
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
             rounded-full bg-gradient-to-r from-[#F68A67]/30 via-[#FF7F50]/20 to-[#FFA500]/10
             backdrop-blur-md border border-[#FFA500]/40
             shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out 
             focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
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
      </header>
    </>
  );
}
