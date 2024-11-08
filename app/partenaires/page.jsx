import Banner from "../components/Banner";

export default function Partenaires(){
  return (
    <>
      <Banner className="bg-partenairesBanner">
        <h3 className="text-[22px] font-semibold text-center text-white"> 
          Nos services pour les partenaires
        </h3>
        <p className="text-center text-white">
          Chez AriMayi, nous nous engageons à soutenir les entreprises partenaires dans le développement de leurs projets digitaux tout en favorisant l&apos;apprentissage concret de nos apprenants.
          <br/>
          Ensemble, construisons l&apos;avenir !          
        </p>
      </Banner>
      <div className='text-[24px] text-center py-[220px] font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text'>
        Page Partenaires
      </div>
    </>
  );
};