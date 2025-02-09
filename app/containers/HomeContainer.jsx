"use client";
import HomeBanner from "../components/Home/HomeBanner";
import CostumButton from "../components/Buttons/CostumButton";
import Coordonnees from "../components/Contact/Coordonnees";
import TestimonialSection from "../components/Partner/PartnerTestimony";
import Carte from "../components/Utils/Carte";
import mission1 from "@/public/assets/mission1.jpg";
import mission2 from "@/public/assets/mission2.jpg";
import mission3 from "@/public/assets/mission3.jpg";
import CustomButton from "../components/Buttons/CustomButton";
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
          Vous êtes étudiant ou en reconversion professionnelle, AriMayi vous
          accompagne depuis votre formation jusqu&apos;à votre intégration en
          entreprise pour une transition réussie vers l&apos;emploi.
        </p>
        <div className="buttons flex gap-4">
          <CustomButton
            text="Contactez Nous"
            classes="font-montserrat text-[20px]  text-white bg-orange hover:scale-110"
            src="/contact"
          />
          <CostumButton
            text="Découvrez nos Formations"
            classes="font-montserrat text-[20px]  bg-orange text-white  hover:scale-110 mx-[10px]"
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