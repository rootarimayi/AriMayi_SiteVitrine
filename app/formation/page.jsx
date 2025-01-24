import Image from "next/image";
import Link from "next/link";
import DetailFormation from "../components/DetailFormation";
import { specialties } from "./data";
import Banner from "../components/Banner";

const specialtie = [
  {
    id: 1, // Added unique id for each specialty

    image: "design.jpeg",
    title: "Designer (niveau 5)",
    description: "Designer (niveau 5)",
  },
  {
    id: 2,

    image: "mobile.jpg",
    title: "Développeur web mobile (niveau 5)",
    description: "Développeur web mobile (niveau 5)",
  },
  {
    id: 3,

    image: "conception.jpg",
    title: "Concepteur Développeur (niveau 6)",
    description: "Concepteur Développeur (niveau 6)",
  },
  {
    id: 4,

    image: "cyber.jpeg",
    title: "Cybersécurité (niveau 6)",
    description: "Cybersécurité (niveau 6)",
  },
  {
    id: 5,
    image: "ai.jpg",

    title: "Intelligence Artificielle (niveau 6)",
    description: "Intelligence Artificielle (niveau 6)",
  },
  {
    id: 6,
    image: "commercial.jpeg",

    title: "Commercial IT (niveau 5 ou 6)",
    description: "Commercial IT (niveau 5 ou 6)",
  },
];

export default function Formation() {
  return (
    <>
      <Banner className="bg-formaBanner">
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
          Nos formations
        </h1>
      </Banner>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Explorez nos formations
          </h1>
          <br />
          <br />
          <br />
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty) => (
              <Link href={`/comingsoon`} key={specialty.id}>
                <div className="h-full bg-white rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="h-48 w-full relative">
                    <Image
                      src={`/assets/${specialty.image}`}
                      alt={specialty.title}
                      className="rounded-t-lg object-cover"
                      fill
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-700">{specialty.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <DetailFormation />
    </>
  );
}
