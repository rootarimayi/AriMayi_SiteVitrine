"use client";
import HomeBanner from "../components/Home/HomeBanner";
import CostumButton from "../components/Buttons/CostumButton";
import TestimonialSection from "../components/Partner/PartnerTestimony";
import HomeForm from "../components/Home/HomeForm";
import { HomeMissionsSection } from "../components/Home/HomeMissionSection";

export default function HomeContainer() {
  return (
    <main>
      <HomeBanner className="bg-cover bg-center transition-all duration-300 ease-in-out py-[50px] min-h-[calc(100vh-200px)]">
        <h3 className="text-[48px] text-start font-monserrat font-extrabold uppercase text-[#353535] bg-clip-text w-[100%] md:w-[60%]">
        {/* <h3 className="text-3xl sm:text-4xl md:text-[48px] text-start text-[#353535] font-monserrat font-extrabold uppercase w-full md:w-[60%] mb-6 leading-[1.4] pt-4"> */}
            Trouvez <span className="gradient-title">votre futur</span> opportunité <span className="gradient-title">dans l&apos;IT</span>
        </h3>
        <p className="text-left font-monserrat text-[18px] leading-[32px] text-[#353535] w-full mt-4 mb-4 md:text-[24px] md:leading-[40px]">
          Formez-vous en situation réelle sur des <strong>projets digitaux concrets confiés par nos partenaires</strong> et devenez <strong>opérationnel.le en entreprise</strong>. Avec un accompagnement de la sélection à l&apos;intégration, donnez un nouvel élan à votre carrière !
        </p>
        <div className="buttons flex gap-4">
          <CostumButton
            text="Contactez Nous"
            classes="border-2 border-[#F68A67] text-[#F68A67] rounded-[8px] hover:bg-[#F68A67] hover:text-white transition-all duration-300 ease-in-out"
            src="/contact"
          />
          <CostumButton
            text="Découvrez nos Formations"
            classes="border-2 border-[#F68A67] text-[#F68A67] rounded-[8px] hover:bg-[#F68A67] hover:text-white transition-all duration-300 ease-in-out"
            src="/formation"
          />
        </div>
      </HomeBanner>

      <HomeMissionsSection />

      {/* <TestimonialSection /> */}
      <div className="flex flex-col justify-center  bg-[#FFF]">
        <HomeForm />
      </div>
    </main>
  );
}