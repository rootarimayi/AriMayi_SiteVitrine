import Banner from "./components/Banner";
import CostumButton from "./components/CostumButton";
import Card from "./components/Card";

import cardImg from "@/public/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import cardImg2 from "@/public/assets/adetola.jpg";

export default function Home() {
  return (
    <>
      <Banner className="bg-HomepageBanner min-h-[700px] pl-[50px] ">
        <h3 className="text-[48px] text-start font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text w-[100%] md:w-[60%]">
          Trouvez votre futur opportunité dans l&apos;IT
        </h3>
        <p className="text-left font-Opensans text-[24px] leading-[40px] text-white w-[100%] md:w-[60%] lg:w-[50%]">
          Vous êtes étudiant ou en reconversion professionnelle, AriMayi vous accompagne depuis votre formation jusqu&apos;à votre intégration en entreprise pour une transition réussie vers l&apos;emploi.
        </p>
        <div className="buttons flex gap-4">
          <CostumButton text="Contactez Nous" classes="font-Opensans text-[20px]  text-white bg-orange hover:scale-110" src="/contact" />
          <CostumButton text="Découvrez nous Formations" classes="font-Opensans text-[20px]  bg-orange text-white  hover:scale-110 mx-[10px]" src="/contact" />
        </div>

      </Banner>
      <div className=' py-[220px]  flex flex-col items-center'>
        <span className="text-[24px] text-center font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
          hello tout le monde
        </span>
        <CostumButton text="Click" src="#" classes="inline " />
        <div className="cards flex flex-col md:flex-row py-4">
          <Card image={cardImg} titre="Je cherche à gagner de l'expérience" content="Jeune diplômé sans emploi ?
          Rejoignez notre organisme pour une formation ciblée qui vous démarque. Développez des compétences recherchées par les recruteurs grâce à nos projets concrets et décrochez enfin le poste que vous méritez" className="" />
          <Card image={cardImg2} titre="Je recherche un nouveau métier dans l'IT" content="Rejoignez notre organisme et transformez votre carrière dans l’IT ! Profitez d’une formation complète et de notre accompagnement vers des projets concrets pour réussir votre reconversion dans un secteur en plein essor" className="" />

        </div>
      </div>
    </>
  );
}
