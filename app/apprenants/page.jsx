import Banner from "../components/Banner";

export default function Apprenants(){
  return (
    <>
      <Banner className="bg-apprenantsBanner">
        <h3 className="text-[22px] font-semibold text-center text-white"> 
          L&apos;expérience concrète par la formation
        </h3>
        <p className="text-center text-white">
          L&apos;AFEST (Action de Formation en Situation de Travail) représente une opportunité puissante et concrète pour développer des compétences en immersion totale dans le monde professionnel.
        </p>
      </Banner>
      <div className='text-[24px] text-center py-[220px] font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text'>
        Page Apprenants
      </div>
    </>
  );
};