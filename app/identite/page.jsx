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
        <br />
        <br />
        <h1 className="text-5xl text-center mb-16 font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
          ARIMAYI
        </h1>{" "}
        <br />
        <br />
        <section className="text-left mb-8">
          <h2 className="text-xl mt-4 text-gray-800">
            Inspiré des mots japonais Ari et chinois Mǎyǐ, signifiant
            <strong> &quot;fourmi&quot;</strong>, ARIMAYI a choisi cet animal
            pour incarner ses valeurs essentielles.
          </h2>
          <br />
          <h2 className="text-2xl mt-4 text-gray-700">Pourquoi la fourmi ?</h2>
          <br />
          <p className="text-xl text-gray-700 text-start mb-4 leading-relaxed">
            Parce qu&apos;elle illustre la force de l&apos;unité et du travail
            collaboratif. Les fourmis accomplissent collectivement des tâches
            monumentales, chaque individu jouant un rôle spécifique au service
            du groupe. Leur capacité à porter jusqu&apos;à 100 fois leur poids
            symbolise la puissance de la coopération. ARIMAYI encourage chacun à
            adopter cet esprit d&apos;équipe, convaincu que, par l&apos;union
            des talents et des compétences, nous pouvons atteindre des objectifs
            ambitieux et significatifs ensemble.
          </p>
        </section>
        <section className="text-center mb-8">
          <Image
            src={logoMobile}
            alt="logo"
            layout="intrinsic"
            width={350}
            height={250}
            className="object-cover mx-auto"
          />
        </section>
        <section className="text-left">
          <p className="text-xl text-gray-700 text-start mb-4 leading-relaxed">
            AriMayi est une initiative qui vise à se faire rencontrer les
            personnes en recherche de stage, de contrat d’apprentissage ou de
            leur premier job dans l’IT et de jeunes startup/TPE en cours de
            réalisation de leur projet digital. <br />
            Sur la base d’une méthodologie d’entreprise, l’apprenant acquiert
            ses compétences en situation de travail pour la réalisation d’un
            projet concret. <br />
            Un partenariat gagnant-gagnant construit entre une ressource formée,
            insérée professionnellement et une startup/TPE qui voit la
            réalisation de son projet se concrétiser.
          </p>
        </section>
      </div>

      {}
      <Fondateur />
      <br />
      <br />
      <br />
      <Journal />
      <br />
      <br />
      <br />
    </>
  );
}
