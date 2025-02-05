"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logopart from "@/public/images/logo-arimayi-slogan-blanc.png";
import logoMobilepart from "@/public/logo/partnerlogo.svg";
import CustomButton from "../Buttons/CustomButton";

export default function PartnerHeader() {
  const [isOpen, setisOpen] = useState(false);
  const toggleNavebar = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed z-50 w-full">
        <div className="relative py-[10px]" style={{ backgroundColor: '#444444' }}>
          <div className="container flex items-center justify-between gap-2">
            <div className="flex items-center "> 
              <div className="flex-shrink-0">
                <Image
                  src={logopart}
                  alt="logo AriMayi"
                  className="hidden md:block ml-0"
                  height={80}
                />
                <Image
                  src={logoMobilepart}
                  alt="logo AriMayi"
                  width={60}
                  height={60}
                  className="block md:hidden"
                />
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-5">
              <nav className="ml-4 flex items-center space-x-4 gap-1">
                <Link
                    href="/apprenants"
                    className="font-Opensans font-bold px-2 py-2 text-[12px] text-white 
                        rounded-lg tracking-[.5px] 
                        bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] 
                        transition-all duration-300 ease-in-out 
                        hover:scale-110 hover:shadow-lg hover:text-black focus:outline-none focus:ring-2 focus:ring-[#F68A67]"
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
              <CustomButton
                text="Accès à la Plateforme"
                classes="border-2 "
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
