"use client";
import Image from "next/image";
import Link from "next/link";
import par1 from "@/public/assets/PHOTO-2024-12-22-20-02-46.jpg";
import par2 from "@/public/assets/PHOTO-2024-12-22-20-03-05.jpg";
import par3 from "@/public/assets/PHOTO-2024-12-22-20-03-34.jpg";
import PartnerBanner from "../components/Partner/PartnerBanner";
import PartenaireForm from "../components/Partner/PartenaireForm";
// import TestimonialSection from "../components/Partner/PartnerTestimony";
// import PartnerTestimony from "../../components/PartnerTestimony";


export default function PartenairesContainer() {
    return (
      <main>
        <PartnerBanner className="bg-cover bg-center transition-all duration-300 ease-in-out">
            <h3 className="text-left text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase text-[#353535]">
                Nos services pour les partenaires
            </h3>
            <p className="text-left font-Opensans text-[24px] leading-[40px] text-[#353535] w-[100%] md:w-[60%] lg:w-[50%]">
              Chez AriMayi, nous nous engageons à soutenir les entreprises partenaires dans le développement de leurs projets digitaux tout en favorisant l&apos;apprentissage concret de nos apprenants.
              <br />
              <strong className="gradient-title">Ensemble, construisons l&apos;avenir !</strong>
            </p>
        </PartnerBanner>
        
        {/* Section 1 */}
        <section className="max-w-7xl px-8 mx-auto flex flex-col md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-12 h-full">
            <div className="w-11/12 md:w-1/2 flex-1">
                <Image
                  src={par1}
                  alt="Team working on a project"
                  className="rounded-[32px] shadow-lg h-full object-cover"
                />
            </div>
            <div className="w-11/12 md:w-1/2 relative bg-[#353535] text-white p-8 rounded-[32px] shadow-xl flex flex-col min-h-full overflow-hidden">
                <div 
                  className="absolute w-[250px] sm:w-[350px] md:w-[500px] -z-10"
                  style={{
                    backgroundImage: "url('/svg/MaskShadow1.svg')",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    left: "70%",
                    top: "55%",
                    transform: "translate(-60%, -50%) scale(0.8)",
                    width: "100%",
                    height: "100%"
                  }}
                />
                <h2 className="text-[38px] font-extrabold leading-[48.76px] text-left mb-4" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                    Confiez votre projet digital à notre organisme de formation
                </h2>
                <p className="text-[20px] leading-relaxed flex-1">
                    AriMayi vise à mettre en place des partenariats gagnants-gagnants. En nous confiant vos projets, vous offrez à nos apprenants l&apos;opportunité d&apos;évoluer en situation de travail.
                </p>
                <Link href={"/comingsoon"} className="text-[#F68A67] uppercase mt-2">
                    Accéder à la plateforme &rarr;
                </Link>
            </div>
        </section>
  
        {/* Section 2 - Full background orange */}
        <section className="max-w-7xl px-8 mx-auto flex flex-col md:flex-row items-center bg-[#F8A185] text-white p-12 rounded-[32px] mt-12">
            <div className="w-11/12 md:w-1/2">
                <h2 className="text-[38px] text-[#353535] font-extrabold leading-[48.76px] text-left mb-4">
                    Formez vos futures ressources selon vos besoins et vos méthodes
                </h2>
                <p className="text-[20px] text-[#353535] leading-relaxed flex-1 mb-6">
                    Grâce à notre méthode de formation <strong>ETIC</strong>, nos tuteurs prennent en charge vos nouveaux embauchés pour les former efficacement à vos méthodes et techniques.
                </p>
                <Link href={"/comingsoon"} className="text-[#FFF] uppercase mt-2">
                    Découvrir nos méthodes &rarr;
                </Link>
            </div>
            <div className="w-11/12 md:w-1/2">
                <Image src={par2} alt="Team working on a project" className="rounded-lg shadow-lg" />
            </div>
        </section>
  
        {/* Section 3 - Blue card with shadow */}
        <section className="max-w-7xl px-8 mx-auto flex flex-col md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-12 mt-12">
            <div className="w-11/12 md:w-1/2">
                <Image src={par3} alt="Team working on a project" className="rounded-[32px] shadow-lg h-full object-cover" />
            </div>
            <div className="w-11/12 md:w-1/2 relative bg-[#816CFF] text-white p-8 rounded-[32px] shadow-xl flex flex-col min-h-full overflow-hidden">
                <div 
                  className="absolute w-[250px] sm:w-[350px] md:w-[500px] -z-10"
                  style={{
                    backgroundImage: "url('/svg/MaskShadow1.svg')",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    left: "70%",
                    top: "55%",
                    transform: "translate(-60%, -50%) scale(0.9)",
                    width: "100%",
                    height: "100%"
                  }}
                />
                <h2 className="text-[38px] text-[#FFF] font-extrabold leading-[48.76px] text-left mb-4">
                    Déposez des annonces sur notre plateforme pour embaucher des ressources formées
                </h2>
                <p className="text-[20px] text-[#FFF] leading-relaxed flex-1 mb-6">
                    Grâce à notre approche AFEST, vous avez la possibilité de recruter des apprenants formés par nos soins, déjà familiarisés avec vos besoins spécifiques.
                </p>
                <Link href={"/comingsoon"} className="text-[#000] uppercase mt-2">
                    Accéder à la plateforme &rarr;
                </Link>
            </div>
        </section>
  {/* <PartnerTestimony /> */}
        <PartenaireForm />
      </main>
    );
}