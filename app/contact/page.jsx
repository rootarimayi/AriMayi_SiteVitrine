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
          title="Quelle language de programmation vais-je apprendre?"
          content="rep."
        />

        <Collapse
          title="Est-ce que l'issue de la formation? je serai employable?"
          content="Nos start-up partenaires proposent une variété de projets digitaux allant du développement d'applications mobiles à la conception de sites web. Chaque projet offre une opportunité unique d'acquérir des compétences en situation de travail."
        />

        <Collapse
          title="Est-ce que vous allez m'aider a trouver un emploi?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
        <Collapse
          title="Combien de temps dure la formation?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
        <Collapse
          title="Est-ce que l'AFEST?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
        <Collapse
          title="Est-ce que POEI/POEC?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
        <Collapse
          title="Votre formation est-elle certifiante?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
      </div>
    </>
  );
};