import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Coordonnees from "../components/Coordonnees";


export default function Contact(){
  return (
    <>
      <br />
      <br />
      <br /> <br />
      <Coordonnees />
      <div className="faq flex flex-col gap-3 items-center py-4">
        <br />
        <br />
        <br />
        <h2 className="text-4xl font-bold mb-6 text-gray-800">FAQ</h2>
        <br />
        <br />
        <Collapse
          title="Comment puis-je postuler pour un stage ou un contrat d'apprentissage?"
          content="Pour postuler à nos offres de stage ou de contrat d'apprentissage, veuillez remplir le formulaire de demande sur notre site. Nous vous contacterons dans les plus brefs délais pour la suite du processus de sélection."
        />

        <Collapse
          title="Quels types de projets digitaux les start-up proposent-elles?"
          content="Nos start-up partenaires proposent une variété de projets digitaux allant du développement d'applications mobiles à la conception de sites web. Chaque projet offre une opportunité unique d'acquérir des compétences en situation de travail."
        />

        <Collapse
          title="Comment les start-up et les apprenants bénéficient-ils de ce partenariat?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
      </div>
    </>
  );
};