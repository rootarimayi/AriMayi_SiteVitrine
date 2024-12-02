import Banner from "../components/Banner";
import Image from "next/image";
import happyness from "@/public/assets/happiness.png";
import CostumButton from "../components/CostumButton";
import Equipe from "../equipe/page";
export default function Identite(){
  return (
    <>
      <Banner className="bg-identiteBanner ">
        <h3 className="text-[26px] font-semibold text-center text-white">
          Qui sommes nous?
        </h3>
      </Banner>
      <div className="text-[24px] text-center py-[220px] font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
        <section className="arimayi pt-[50px]">
          <div className="container">
            <h3 className="text-[28px] text-start font-monserrat font-bold uppercase bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text my-[5px]">
              Notre Identité
            </h3>
            <div>
              <div className="flex flex-col md:flex-row justify-start pt-[50px] pr-[10px]">
                <div className="bg-bgAri w-[100%] md:50%">
                  <Image src={happyness} alt="happyness" />
                </div>
                <div className="w-[70%] md:w-[30%] ">
                  <p className="font-Opensans text-[16px] leading-[25px] text-black  py-[10px] pl-[10px] text-justify pb-[20px]">
                    Inspiré des mots japonais Ari et chinois Mǎyǐ, signifiant
                    &quot;fourmi&quot;, ARIMAYI a choisi cet animal pour
                    incarner ses valeurs essentielles.
                    <br />
                    <br />
                    Pourquoi la fourmi ?
                    <br />
                    <br />
                    Par ce qu’elle illustre la force de l’unité et du travail
                    collaboratif. Les fourmis accomplissent collectivement des
                    tâches monumentales, chaque individu jouant un rôle
                    spécifique au service du groupe. Leur capacité à porter
                    jusqu&apos;à 100 fois leur poids symbolise la puissance de
                    la coopération. ARIMAYI encourage chacun à adopter cet
                    esprit d’équipe, convaincu que, par l’union des talents et
                    des compétences, nous pouvons atteindre des objectifs
                    ambitieux et significatifs ensemble.
                  </p>
                  <CostumButton
                    text="Découvrez plus sur nous"
                    classes="font-Opensans text-[20px]  bg-orange text-white  hover:scale-110 mx-[10px] mt-[30px]"
                    src="/identite"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <header className="text-center mb-12">
        <h1 className="text-3xl font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
          Notre équipe
        </h1>
        <br />
        <br />{" "}
        <p className="text-gray-600 leading-relaxed">
          Une équipe dédiée au service de votre réussite
          <br />
        </p>
      </header>
      <br />
      <Equipe />
    </>
  );
};



