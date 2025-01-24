import cardImg from "@/public/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import app1 from "@/public/assets/PHOTO-2024-12-22-20-01-27.jpg";
import app2 from "@/public/assets/PHOTO-2024-12-22-20-01-44.jpg";
import app3 from "@/public/assets/PHOTO-2024-12-22-20-02-06.jpg";
import Image from "next/image";
import Opportunite from "../opportunite/page";

export default function Apprenants() {
  return (
    <>
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <div className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            À chaque étape, le cadre de l’
            <span className="text-blue-600">AFEST</span> allie formation,
            autonomie et suivi personnalisé, permettant ainsi un apprentissage
            progressif, pertinent et immédiatement applicable.
          </h2>
          <p className="text-gray-700 mb-12">
            À chaque étape, le cadre de l’<b>AFEST </b>allie formation,
            autonomie et suivi personnalisé, permettant ainsi un apprentissage
            progressif, pertinent et immédiatement applicable. Notre approche à
            la fois humaine et performante assure à chaque apprenant, quel que
            soit son parcours, une montée en compétences concrète, et lui donne
            les clés pour s’insérer durablement dans le monde du travail.
          </p>

          {}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="w-full md:w-1/3 h-48 relative mb-4 md:mb-0 md:mr-6">
              <Image
                src={app1}
                alt="Jeunes diplômés"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Pour les jeunes diplômés
              </h3>
              <p className="text-gray-600">
                C’est une occasion unique de transformer vos connaissances
                théoriques en savoir-faire opérationnels, directement sur le
                terrain, là où les compétences prennent tout leur sens.
              </p>
            </div>
          </div>

          {}
          <div className="flex flex-col md:flex-row-reverse items-center ">
            <div className="w-full md:w-1/3 h-48 relative mb-4 md:mb-0 md:ml-6">
              <Image
                src={app2}
                alt="Personnes en reconversion"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Pour les personnes en reconversion
              </h3>
              <p className="text-gray-600">
                L’AFEST propose un accompagnement dynamique et progressif, vous
                permettant d’apprendre un métier par l’expérimentation, de
                surmonter les défis du changement et de maîtriser de nouvelles
                pratiques au quotidien.
              </p>
            </div>
          </div>

          {}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 h-48 relative mb-4 md:mb-0 md:mr-6">
              <Image
                src={app3}
                alt="Futurs apprentis"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Pour les futurs apprentis
              </h3>
              <p className="text-gray-600">
                Accédez à une formation qui mêle pratique et réflexion, au cœur
                de situations réelles et efficacement préparatoires aux
                exigences des entreprises.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Opportunite />
    </>
  );
}
