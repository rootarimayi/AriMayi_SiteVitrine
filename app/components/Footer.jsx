"use client";
import Image from "next/image";
import { FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import NewsletterForm from "./Form/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-[#292929] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-6 pb-8 pt-16 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="flex items-start">
            <Image src="/logo/Logo-Arimayi-simple-gradient.png" alt="logo AriMayi" width={130} height={40} decoding="async" style="color:transparent"/>
          </div>
          <div>
            <h3 className="text-xl font-semibold">À Propos</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/identite">Qui sommes-nous</a></li>
              <li><a href="/contact">FAQ</a></li>
              <li><a href="/contact">Nous Contacter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/apprenants">Apprenants</a></li>
              <li><a href="/partenaires">Partenaires</a></li>
              <li><a href="/comingsoon">Plateforme ↗</a></li>
            </ul>
          </div>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-gray-700 py-6 text-center text-sm">
        <div className="flex justify-between items-center px-16">
            <p>2025 AriMayi. Tous droits réservés. <a href="#" className="underline">Mentions légales</a></p>
            <div className="flex space-x-4">
                <a href="https://www.tiktok.com/@arimayi_"><FaTiktok size={20} /></a>
                <a href="https://www.linkedin.com/company/arimayi/"><FaLinkedin size={20} /></a>
                <a href="https://www.instagram.com/arimayi___"><FaInstagram size={20} /></a>
            </div>
        </div>
        </div>
    </footer>
  );
}
