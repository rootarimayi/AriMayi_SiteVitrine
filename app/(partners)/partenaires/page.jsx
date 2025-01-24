import Image from "next/image";
import Img from "@/public/assets/PHOTO-2024-12-22-20-02-27.jpg";
import par1 from "@/public/assets/PHOTO-2024-12-22-20-02-46.jpg";
import par2 from "@/public/assets/PHOTO-2024-12-22-20-03-05.jpg";
import par3 from "@/public/assets/PHOTO-2024-12-22-20-03-34.jpg";
import PartnerTestimony from "../../components/PartnerTestimony";
import PartenaireForm from "../../components/PartenaireForm";

export default function Partenaires() {
  return (
    <>
      <div className="flex justify-center items-center rounded-lg  ">
        <Image
          src={Img}
          alt="Woman with a glasses"
          className="rounded-lg shadow-lg w-1/3 mt-40"
        />
      </div>
      <header className="text-center mb-12  mt-12">
        <h1 className="text-3xl font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
          Nos services pour les partenaires
        </h1>
        <br />
        <br />{" "}
        <p className="text-gray-600 leading-relaxed">
          Chez AriMayi, nous nous engageons à soutenir les entreprises
          partenaires dans le développement de leurs projets digitaux tout en
          favorisant lapprentissage concret de nos apprenants.
          <br />
          <strong>Ensemble, construisons lavenir !</strong>
        </p>
      </header>
      {/* card 1 */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={par1}
            alt="Team working on a project"
            className="rounded-lg shadow-lg"
          />
        </div>

        {}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">
            Confiez votre projet digital à notre organisme de formation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            AriMayi vise à mettre en place des partenariats gagnants-gagnants.
            En nous confiant vos projets, vous offrez à nos apprenants
            lopportunité dévoluer en situation de travail. Vous y gagnez la
            réalisation de vos objectifs à des tarifs compétitifs.
          </p>
          <p className="text-gray-600 mt-4">
            Pour nous confier votre projet, accédez à notre plateforme.
          </p>
        </div>
      </section>
      <br /> <br /> <br />
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={par2}
            alt="Team working on a project"
            className="rounded-lg shadow-lg"
          />
        </div>

        {}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">
            Formez vos futures ressources selon vos besoins et vos méthodes
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Grâce à notre méthode de formation <strong>ETIC</strong> <br />
            <strong>E :</strong> Entreprise (ancrage dans la réalité de
            lentreprise) <br />
            <strong>T :</strong> Terrain (formation en situation réelle) <br />{" "}
            <strong>I :</strong> Intégration (intégration des acteurs) <br />
            <strong>C :</strong> Compétence (acquisition de compétences ciblées){" "}
            <br />
            Nos tuteurs prennent en charge vos nouveaux embauchés pour les
            former efficacement à vos méthodes et techniques.
          </p>
        </div>
      </section>
      <br />
      <br /> <br />
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={par3}
            objectFit="cover"
            alt="Team working on a project"
            className="rounded-lg shadow-lg"
          />
        </div>

        {}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">
            Déposez des annonces sur notre plateforme pour embaucher des
            ressources formées
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Grâce à notre approche AFEST (Action de Formation En Situation de
            Travail), vous avez la possibilité de recruter des apprenants formés
            par nos soins. Trouvez des talents prêts à intégrer vos équipes,
            déjà familiarisés avec vos besoins spécifiques.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <PartnerTestimony />
      <br />
      <br />
      <br />
      <br />
      <PartenaireForm />
      <br />
      <br />
      <br />
    </>
  );
}
