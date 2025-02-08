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

export default function HomeContainer() {
  return (
    <main>
      <HomeBanner className="bg-HomeHeaderMask sm:bg-HomeHeaderMask bg-cover bg-center transition-all duration-300 ease-in-out py-[50px] min-h-[calc(100vh-200px)]">
        {/* <h3 className="text-[48px] text-start font-monserrat font-extrabold uppercase text-[#353535] bg-clip-text w-[100%] md:w-[60%]"> */}
        <h3 className="text-3xl sm:text-4xl md:text-[48px] text-start text-[#353535] font-monserrat font-extrabold uppercase w-full md:w-[60%] mb-6 leading-[1.4] pt-4">
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

      <div className="py-[50px] flex flex-col items-center bg-[#F4F2FF] ">
        <div className="container flex flex-col gap-[20px]">
          <div className="max-w-3xl mx-auto flex flex-col items-center mb-8">
            <h3 className="text-[32px] sm:text-[48px] text-center font-montserrat font-extrabold uppercase gradient-title w-full mt-5">
              Nos missions
            </h3>
            <br /> <br />
            <p className="text-center font-monserrat text-[20px] leading-[25px] text-[#353535] my-[10px] gap-4">
              Expert de la formation en situation de travail, AriMayi vous
              propose un apprentissage pratique et immersif sur des projets
              concrets confiés par nos partenaires (startups, TPE, PME) pour une
              adaptation réussie aux exigences de votre métier.
            </p>
          </div>
          <div className="cards flex flex-col md:flex-row items-center justify-center gap-3">
            <Carte
              image={mission1}
              titre="Je cherche à gagner de l'expérience"
              content="Jeune diplômé sans emploi ? Rejoignez notre organisme pour une formation ciblée qui vous démarque. Développez des compétences recherchées par les recruteurs grâce à nos projets concrets et décrochez enfin le poste que vous méritez."
              className="bg-[#FEF9F5]"
            />
            <Carte
              image={mission2}
              titre="Je recherche un nouveau métier dans l'IT"
              content="Rejoignez notre organisme et transformez votre carrière dans l’IT ! Profitez d’une formation complète et de notre accompagnement vers des projets concrets pour réussir votre reconversion dans un secteur en plein essor."
              className="bg-[#FEF9F5]"
            />
            <Carte
              image={mission3}
              titre="Je recherche un contrat d'apprentissage"
              content="Boostez votre parcours avec un contrat d'apprentissage intégrant la POEI (Préparation Opérationnelle à l’Emploi Individuelle) : grâce à notre référentiel de partenaires, accédez à des projets enrichissants qui conjuguent formation et expérience concrète en entreprise."
              className="bg-[#FEF9F5]"
            />
          </div>
        </div>
      </div>
      {/* <TestimonialSection /> */}
      <div className="flex flex-col justify-center  bg-[#FFF]">
        <HomeForm />
      </div>
    </main>
  );
}