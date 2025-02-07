"use client";
import PartnerBanner from "../components/Partner/PartnerBanner";
import PartenaireForm from "../components/Partner/PartenaireForm";
// import TestimonialSection from "../components/Partner/PartnerTestimony";
import PartnerTestimony from "../components/Partner/PartnerTestimony";
import PartnerContent from "../components/Partner/PartnerContent";


export default function PartenairesContainer() {
    return (
        <main>
            {/* <PartnerBanner className="bg-cover bg-center transition-all duration-300 ease-in-out py-[50px] min-h-[calc(100vh-200px)]">
                <h3 className="text-left text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase gradient-title">
                    Nos services pour les partenaires
                </h3>
                <p className="text-left font-Opensans text-[24px] leading-[40px] text-[#353535] w-[100%] md:w-[60%] lg:w-[50%]">
                Chez AriMayi, nous nous engageons à soutenir les entreprises partenaires dans le développement de leurs projets digitaux tout en favorisant l&apos;apprentissage concret de nos apprenants.
                <br />
                <strong className="gradient-title">Ensemble, construisons l&apos;avenir !</strong>
                </p>
            </PartnerBanner> */}
            <PartnerBanner className="bg-cover bg-center transition-all duration-300 ease-in-out py-[50px] min-h-[calc(100vh-200px)]">
                <h3 className="text-center md:text-left text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase gradient-title">
                    Nos services pour les partenaires
                </h3>
                <p className="text-center md:text-left font-Opensans text-[24px] leading-[40px] text-[#353535] max-w-[600px] mx-auto md:mx-0">
                    Chez AriMayi, nous nous engageons à soutenir les entreprises partenaires dans le développement de leurs projets digitaux tout en favorisant l&apos;apprentissage concret de nos apprenants.
                    <br />
                    <strong className="gradient-title">Ensemble, construisons l&apos;avenir !</strong>
                </p>
            </PartnerBanner>

            
            <PartnerContent />

            <PartnerTestimony />

            <PartenaireForm />
        </main>
    );
}