import Banner from "../components/Banner";
import Collapse from "../components/Collapse";


export default function Contact(){
  return (
    <>
      <Banner className="bg-contactBanner ">
        <h3 className="text-[22px] font-semibold text-center text-white"> 
          Nous contacter
        </h3>
        <p className="text-center text-white">
          Votre point de départ vers de nouvelles opportunités professionnelles
        </p>
      </Banner>
      <div className='text-[24px] text-center py-[220px] font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text'>
        Page Contact
      </div>
      
      <div className="faq flex flex-col gap-3 items-center py-4">
        <Collapse title="Comment puis-je postuler pour un stage ou un contrat d'apprentissage?" content="Pour postuler à nos offres de stage ou de contrat d'apprentissage, veuillez remplir le formulaire de demande sur notre site. Nous vous contacterons dans les plus brefs délais pour la suite du processus de sélection."/>

        <Collapse title="Quels types de projets digitaux les start-up proposent-elles?" content="Nos start-up partenaires proposent une variété de projets digitaux allant du développement d'applications mobiles à la conception de sites web. Chaque projet offre une opportunité unique d'acquérir des compétences en situation de travail."/>

        <Collapse title="Comment les start-up et les apprenants bénéficient-ils de ce partenariat?" content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."/>

      </div>

    </>
  );
};