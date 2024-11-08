import Banner from "./components/Banner";
import Button from "./components/Button";
import Collapse from "./components/Collapse";

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
        <Button text="Contactez nous" classes="bg-red text-black hover:bg-[#F68A67] hover:text-white" src="/contact"/>
    </Banner>
      <div className=' py-[220px]  flex flex-col items-center'>
        <span className="text-[24px] text-center font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
          hello tout le monde
        </span>
        <Button text="Click" src="#" classes="inline " />
        <Collapse title="hello" content="hello"/>
      </div>
    </>
  );
}
