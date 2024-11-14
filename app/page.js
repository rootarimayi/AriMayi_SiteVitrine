import Banner from "./components/Banner";
import CostumButton from "./components/CostumButton";
import Card from "./components/Card";

import cardImg from "../public/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import cardImg2 from "@/public/assets/adetola.jpg";
import cardImg3 from "@/public/assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg";


export default function Home() {
  return (
    <>
      <Banner className="bg-HomepageBanner">
        <h3 className="text-[22px] font-semibold text-center text-white">
          Trouvez votre opportunité dans l&apos;IT
        </h3>
        <p className="text-center text-white">
          Vous êtes étudiant ou en reconversion professionnelle, AriMayi vous accompagne depuis votre formation jusqu&apos;à votre intégration en entreprise pour une transition réussie vers l&apos;emploi
        </p>
        <CostumButton text="Contactez nous" classes="bg-red text-black hover:bg-[#F68A67] hover:text-white" src="/contact" />
      </Banner>
      <div className=' py-[220px]  flex flex-col items-center'>
        <span className="text-[24px] text-center font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
          hello tout le monde
        </span>
        <CostumButton text="Click" src="#" classes="inline " />
        <div className="cards flex py-4">
          <Card image={cardImg} titre="Je cherche à gagner de l'expérience" content="Jeune diplômé sans emploi ?
          Rejoignez notre organisme pour une formation ciblée qui vous démarque. Développez des compétences recherchées par les recruteurs grâce à nos projets concrets et décrochez enfin le poste que vous méritez" className="" />
          <Card image={cardImg2} titre="Je recherche un nouveau métier dans l'IT" content="Rejoignez notre organisme et transformez votre carrière dans l’IT ! Profitez d’une formation complète et de notre accompagnement vers des projets concrets pour réussir votre reconversion dans un secteur en plein essor" className="" />
          <Card image={cardImg3} titre="Je recherche un contrat d'apprentissage" content="Boostez votre parcours avec un contrat d'apprentissage intégrant la POEI (Préparation Opérationnelle à l’Emploi Individuelle) : grâce à notre référentiel de partenaires, accédez à des projets enrichissants qui conjuguent formation et expérience concrète en entreprise" className="" />
        </div>
      </div>
    </>
  );
}
