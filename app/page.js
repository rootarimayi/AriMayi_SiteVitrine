import Banner from "./components/Banner";
import CostumButton from "./components/CostumButton";
import Card from "./components/Card";
import Image from "next/image";
import happyness from "@/public/assets/happiness.png";
import cardImg from "@/public/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import cardImg2 from "@/public/assets/adetola.jpg";
import cardImg3 from "@/public/assets/zachary-nelson-98Elr-LIvD8-unsplash.jpg"
import Carousel from "./components/Carousel";
import slide1 from "@/public/assets/jud-mackrill-Of_m3hMsoAA-unsplash.jpg";
import slide2 from "@/public/assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg";
import slide3 from "@/public/assets/christina-wocintechchat-com-OW5KP_Pj85Q-unsplash.jpg";
import Form from "./form/page";
import Carte from "./components/Carte";
import Equipe from "./equipe/page";
import Opportunite from "./opportunite/page";

export default function Home() {
  let slider = [
    slide1,
    slide2,
    slide3

  ]
  return (
    <>
      <Banner className="bg-HomepageBanner min-h-[700px] pl-[50px] ">
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
      {/**************** arimayi Section  ***********/}
      {/**************** slider section ***********/}
      <section className="section-cards flex flex-col md:flex-row bg-black py-[50px]">
        <div className="container">
          <h3 className="text-[28px] text-start font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text my-[5px]">
            Témoignages
          </h3>
          <div className="w-[600px] mx-auto py-[20px]">
            <Carousel slider={slider} />
          </div>
        </div>
      </section>
      {/*************** Cards section *************************/}
      <div className=" py-[50px]  flex flex-col items-center">
        <div className="container flex flex-col gap-[20px]">
          <h3 className="text-[28px] text-start font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text my-[5px]">
            Nos missions
          </h3>
          <p className="text-left font-Opensans text-[16px] leading-[25px] text-black my-[10px]">
            Expert de la formation en situation de travail, AriMayi vous propose
            un apprentissage pratique et immersif sur des projets concrets
            confiés par nos partenaires (startups, TPE, PME) pour une adaptation
            réussie aux exigences de votre métier.
          </p>
          <div className="cards flex flex-col md:flex-row items-center justify-center gap-3">
            <Carte
              image={cardImg}
              titre="Je cherche à gagner de l'expérience"
              content="Jeune diplômé sans emploi ? Rejoignez notre organisme pour une formation ciblée qui vous démarque. Développez des compétences recherchées par les recruteurs grâce à nos projets concrets et décrochez enfin le poste que vous méritez."
              className="bg-[#FEF9F5]"
            />
            <Carte
              image={cardImg}
              titre="Je cherche à gagner de l'expérience"
              content="Jeune diplômé sans emploi ? Rejoignez notre organisme pour une formation ciblée qui vous démarque. Développez des compétences recherchées par les recruteurs grâce à nos projets concrets et décrochez enfin le poste que vous méritez."
              className="bg-[#FEF9F5]"
            />
            <Carte
              image={cardImg}
              titre="Je cherche à gagner de l'expérience"
              content="Jeune diplômé sans emploi ? Rejoignez notre organisme pour une formation ciblée qui vous démarque. Développez des compétences recherchées par les recruteurs grâce à nos projets concrets et décrochez enfin le poste que vous méritez."
              className="bg-[#FEF9F5]"
            />
          </div>
        </div>
      </div>
      <Equipe />
      <Form />
    </>
  );
}
