import Image from "next/image";
import logo from "@/public/logo/Logo-arimayi-Principal.svg";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      className="bg-[#2c2c2c] text-white "
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only"></h2>
      <div className="ml-4 max-w-7xl px-6 pb-8 pt-16 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="flex justify-start items-center">
            <div>
              <Image
                src={logo}
                alt="logo AriMayi"
                loading="lazy"
                width="500"
                height="200"
                decoding="async"
                style="color:transparent"
              />
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold leading-6 text-secondary-400">
              À Propos
            </h3>
            <ul className="mt-6 space-y-4">
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
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#">Apprenants</a>
              </li>
              <li>
                <a href="#">Partenaires</a>
              </li>
              <li>
                <a href="#">Platforme</a>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-xl font-semibold leading-6 text-secondary-400">
              S&apos; abonner à la newsletter
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24 bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] px-6 py-8 sm:py-8 lg:px-8">
        <div className="flex space-x-6 md:order-2 pr-12">
          <a
            className="text-white hover:text-gray-200"
            href="https://www.linkedin.com/company/arimayi/"
          >
            <FaLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        <p className="mt-8 text-xs leading-5 md:order-1 md:mt-0 text-white">
          © 2025 ARIMAYI. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
