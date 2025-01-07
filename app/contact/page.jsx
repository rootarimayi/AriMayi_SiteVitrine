import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Coordonnees from "../components/Coordonnees";


export default function Contact(){
  return (
    <>
      <Banner className="bg-contacctBanner">
        <h1
          style={{
            textAlign: "center",
            alignSelf: "center",
            fontSize: "2rem",
            margin: "0 0 10px",
            padding: "50px",
            color: "white",
          }}
        >
          Contactez-nous
        </h1>
      </Banner>
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <div className="flex flex-col items-center text-center">
        <br />
        <br />
        <br />
        <br />
        <h3 className="text-[48px] text-center font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text w-[100%] md:w-[60%]">
         Arimayi
        </h3>
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <p className="text-gray-800 mb-8">
          Votre point de départ vers de nouvelles opportunités professionnelles
          et la réussite de votre projet
        </p>
        <br />
        <br />
      </div>
      <Coordonnees />
      <div className="faq flex flex-col gap-1 items-center py-2">
        <br />
        <br />
        <br />
        <h2 className="text-4xl font-bold mb-3 text-gray-800">FAQ</h2>
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
        <Collapse
          title="Votre organisme de formation est-il certifié Qualiopi?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
        <Collapse
          title="je n'ai pas de compétence technique, puis-je m'inscrire?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
        <Collapse
          title="je sais déja developper, est-ce que votre formation et faite pour moi ?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
        <Collapse
          title="¨Puis-je financer ma formation avec CPF?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
        <Collapse
          title="¨Puis-je cumuler l'AIF et le CPF?"
          content="Ce partenariat crée une relation gagnant-gagnant où les apprenants acquièrent des compétences en situation de travail tout en aidant les start-up à concrétiser leurs projets digitaux. Cela favorise l'insertion professionnelle des apprenants et la réussite des start-up."
        />
      </div>
    </>
  );
};