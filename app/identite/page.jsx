import Banner from "../components/Banner";
import Image from "next/image";
import happyness from "@/public/assets/happiness.png";
import logoMobile from "@/public/logo/logo_mobile.svg";
import CostumButton from "../components/CostumButton";
import Journal from "../components/Journal";
import Equipe from "../equipe/page";
import Fondateur from "../components/Fondateur";

export default function Identite() {
  return (
    <>
      <Banner className="bg-identiteBanner">
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
          Qui sommes nous?
        </h1>
      </Banner>
      <div className="container mx-auto px-4 py-8">
        {/* Phrase au-dessus des blocs */}
        <h2 className="text-2xl font-bold text-gray-800 mb-20 text-center">
            Inspiré des mots japonais <strong>Ari</strong> et chinois <strong>Mǎyǐ</strong>, signifiant
            <strong> &quot;fourmi&quot;</strong>, ARIMAYI a choisi cet animal pour incarner ses valeurs essentielles.
        </h2>

        {/* Conteneur principal pour aligner les sections */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            {/* Section sur l'inspiration de la fourmi */}
            <section className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-700 mt-4">Pourquoi la fourmi ?</h2>
            
            <p className="text-lg text-gray-700 mb-4 leading-relaxed text-justify">
                Parce qu&apos;elle illustre la force de l&apos;unité et du travail collaboratif. 
                Les fourmis accomplissent collectivement des tâches monumentales, chaque individu jouant 
                un rôle spécifique au service du groupe. Leur capacité à porter jusqu&apos;à 100 fois 
                leur poids symbolise la puissance de la coopération. ARIMAYI encourage chacun à 
                adopter cet esprit d&apos;équipe, convaincu que, par l&apos;union des talents et des 
                compétences, nous pouvons atteindre des objectifs ambitieux et significatifs ensemble.
            </p>
            </section>

            {/* Section avec le logo */}
            <section className="w-full md:w-1/4 mb-4 md:mb-0 text-center">
            <Image
                src={logoMobile}
                alt="logo"
                layout="intrinsic"
                width={300}
                height={250}
                className="object-cover mx-auto"
            />
            </section>

            {/* Section sur l'initiative AriMayi */}
            <section className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-700 mt-4">À propos d'AriMayi</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed text-justify">
                AriMayi est une initiative qui vise à se faire rencontrer les personnes en recherche de stage, 
                de contrat d’apprentissage ou de leur premier job dans l’IT et de jeunes startup/TPE en cours de 
                réalisation de leur projet digital. 
                <br />
                Sur la base d’une méthodologie d’entreprise, l’apprenant acquiert ses compétences en situation de travail 
                pour la réalisation d’un projet concret. 
                <br />
                Un partenariat gagnant-gagnant construit entre une ressource formée, insérée professionnellement 
                et une startup/TPE qui voit la réalisation de son projet se concrétiser.
            </p>
            </section>
        </div>
        </div>

      {}
      <Fondateur />

      <Journal />
    </>
  );
}
