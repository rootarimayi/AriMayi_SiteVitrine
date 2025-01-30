import Image from "next/image";
import logo from "@/public/logo/Logo AriMayi - Vertical - Blanc.png";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#444444] text-white w-full z-50 absolute"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only"></h2>
      <div className="max-w-7xl mx-auto px-6 pb-8 pt-16 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="flex justify-start items-center">
            <div>
              <Image
                src="/logo/Logo-Arimayi-simplifié-dégradé.png"
                alt="logo AriMayi"
                loading="lazy"
                width={130}
                height={40}
                decoding="async"
                style="color:transparent"
              />
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold leading-6 text-secondary-400">
              À Propos
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://www.arimayi.io/">Qui sommes-nous</a>
              </li>
              <li>
                <a href="https://www.arimayi.io/">FAQ</a>
              </li>
              <li>
                <a href="https://www.arimayi.io/">Nous Contacter</a>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold leading-6 text-secondary-400">
              Service
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/apprenants">Apprenants</Link></li>
              <li><Link href="/partenaires">Partenaires</Link></li>
              <li><Link href="/comingsoon">Plateforme ↗</Link></li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold">S’abonner à la newsletter</h3>
            <div className="mt-4 flex">
              <input type="email" placeholder="SAISIR UNE ADRESSE E-MAIL" className="flex-grow p-3 text-black" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}  />
              <button className="bg-[#F48C72] p-3" style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}>
                <IoArrowForward size={20} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-gray-700 py-6 text-center text-sm">
        <div className="flex justify-between items-center px-16">
            <p>2025 AriMayi. Tous droits réservés. <a href="#" className="underline">Mentions légales</a></p>
            <div className="flex space-x-4">
                <a href="#"><FaFacebook size={20} /></a>
                <a href="https://www.linkedin.com/company/arimayi/"><FaLinkedin size={20} /></a>
                <a href="#"><FaInstagram size={20} /></a>
            </div>
        </div>
        </div>
    </footer>
  );
}
