import Banner from "./components/Banner";
import CostumButton from "./components/CostumButton";
import Coordonnees from "./components/Coordonnees";
import Card from "./components/Card";
import Image from "next/image";
import happyness from "@/public/assets/happiness.png";
import cardImg from "@/public/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import mission1 from "@/public/assets/mission1.jpg";
import mission2 from "@/public/assets/mission2.jpg";
import mission3 from "@/public/assets/mission3.jpg";

import slide1 from "@/public/assets/jud-mackrill-Of_m3hMsoAA-unsplash.jpg";
import slide2 from "@/public/assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg";
import slide3 from "@/public/assets/christina-wocintechchat-com-OW5KP_Pj85Q-unsplash.jpg";
import Form from "./form/page";
import Carte from "./components/Carte";
import Equipe from "./equipe/page";
import Opportunite from "./opportunite/page";
import Journal from "./components/Carousel";
import TestimonialSection from "./components/TestimonialSection";
export default function Home() {
  let slider = [
    slide1,
    slide2,
    slide3

  ]
  return (
    <>
      <Banner className="bg-HomepageBanne sm:bg-HomepageBanne bg-cover bg-center transition-all duration-300 ease-in-out ">
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <h3 className="text-[48px] text-start font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text w-[100%] md:w-[60%]">
          Trouvez votre futur opportunité dans l&apos;IT
        </h3>
        <p className="text-left font-Opensans text-[24px] leading-[40px] text-white w-[100%] md:w-[60%] lg:w-[50%]">
          Vous êtes étudiant ou en reconversion professionnelle, AriMayi vous
          accompagne depuis votre formation jusqu&apos;à votre intégration en
          entreprise pour une transition réussie vers l&apos;emploi.
        </p>
        <div className="buttons flex gap-4">
          <CostumButton
            text="Contactez Nous"
            classes="font-Opensans text-[20px]  text-white bg-orange hover:scale-110"
            src="/contact"
          />
          <CostumButton
            text="Découvrez nous Formations"
            classes="font-Opensans text-[20px]  bg-orange text-white  hover:scale-110 mx-[10px]"
            src="/formations"
          />
        </div>
      </Banner>

      <div className=" py-[50px]  flex flex-col items-center bg-[#353535]">
        <div className="container flex flex-col gap-[20px]">
          <div className="max-w-3xl mx-auto flex flex-col items-center mb-8">
            <h3 className="text-[28px] text-center font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text my-[5px]">
              Nos missions
            </h3>
            <br /> <br />
            <p className="text-center font-Opensans text-[20px] leading-[25px] text-white my-[10px] gap-4">
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
      <TestimonialSection />
      <h3 className="text-[36px] text-center justify-center font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text w-[100%] md:w-[60%]">
        Contactez-nous
      </h3>
      <Coordonnees />
    </>
  );
}
