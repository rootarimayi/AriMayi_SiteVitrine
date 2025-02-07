"use client";
import AboutBanner from "../components/About/AboutBanner";
import MissionSection from "../components/About/MissionSection";
import InspirationSection from "../components/About/InspirationSection";
import Fondateur from "../components/Contact/Fondateur";

export default function IdentiteContainer() {
  return (
    <main>
      <AboutBanner cclassName="bg-HomeHeaderMask sm:bg-HomeHeaderMask bg-cover bg-center  transition-all duration-300 ease-in-out py-[50px] min-h-[calc(100vh-200px)]">
        <h3 className="text-left text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase gradient-title whitespace-nowrap">
            Qui sommes nous?
        </h3>
        <p className="text-left font-Opensans text-[24px] leading-[40px] text-[#353535] w-[100%] md:w-[60%] lg:w-[50%]">
            Nous sommes AriMayi, une plateforme innovante qui connecte les candidats à la recherche de stage, d&apos;apprentissage ou de premier emploi dans l&apos;IT avec des startups et TPE en quête de talents
        </p>
      </AboutBanner>

      <MissionSection className="py-[50px] bg-cover bg-center bg-[#F4F2FF] transition-all duration-300 ease-in-out">
        <h3 className="text-2xl text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase gradient-title whitespace-nowrap leading-[1.2]">
            Notre mission
        </h3>
        <p className="text-[24px]">
            AriMayi favorise les opportunités professionnelles en accompagnant les personnes 
            à la recherche d&apos;une première expérience dans le secteur de l&apos;IT.
        </p>
        <p className="text-[24px]">
            Nous nous engageons à faciliter leur accès à des stages, des contrats d&apos;apprentissage 
            et des emplois, tout en soutenant la croissance des jeunes startups et TPE.
        </p>
      </MissionSection>

      <InspirationSection className="py-[50px]">
        <h3 className="text-2xl text-[32px] sm:text-[40px] md:text-[48px] font-monserrat font-extrabold uppercase gradient-title whitespace-nowrap leading-[1.2] mb-10">
            Nos valeurs
        </h3>
        <p className="text-[24px] mb-6">
            Inspiré des mots japonais <strong>Ari</strong> et chinois <strong>Mǎyǐ</strong>, 
            signifiant <strong>&quot;fourmi&quot;</strong>, AriMayi a choisi cet animal pour incarner 
            ses valeurs essentielles.
        </p>
        
        <h3 className="text-2xl font-extrabold gradient-title mb-4">Pourquoi la fourmi ?</h3>
        <p className="text-[24px] text-[#353535] leading-[1.8]">
            Parce qu&apos;elle illustre la force de l&apos;unité et du travail collaboratif. 
            Les fourmis accomplissent collectivement des tâches monumentales, chaque individu 
            jouant un rôle spécifique au service du groupe. Leur capacité à porter jusqu&apos;à 
            100 fois leur poids symbolise la puissance de la coopération. AriMayi encourage 
            chacun à adopter cet esprit d&apos;équipe, convaincu que, par l&apos;union des talents et des 
            compétences, nous pouvons atteindre des objectifs ambitieux et significatifs ensemble.
        </p>
        </InspirationSection>

        <Fondateur />

      {/* <Journal /> */}
    </main>
  );
}