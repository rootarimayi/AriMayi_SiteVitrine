import Banner from "../components/Banner";
export default function About(){
  return (
    <>
      <Banner className="bg-identiteBanner ">
        <h3 className="text-[26px] font-semibold text-center text-white"> 
          Qui sommes nous?
        </h3>
      </Banner>
      <div className='text-[24px] text-center py-[220px] font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text'>
        Page Notre identité
      </div>
    </>
  );
};



