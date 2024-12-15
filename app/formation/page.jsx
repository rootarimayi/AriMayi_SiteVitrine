import Image from "next/image";

const specialties = [
  {
    image: "design.jpeg",
    title: "Designer (niveau 5)",
    description: "Designer (niveau 5)",
  },
  {
    image: "mobile.jpg",
    title: "Développeur web mobile (niveau 5)",
    description: "Développeur web mobile (niveau 5)",
  },
  {
    image: "conception.jpg",
    title: "Concepteur Développeur (niveau 6)",
    description: "Concepteur Développeur (niveau 6)",
  },
  {
    image: "cyber.jpeg",
    title: "Cybersécurité (niveau 6)",
    description: "Cybersécurité (niveau 6)",
  },
  {
    image: "ai.jpg",
    title: "Intelligence Artificielle (niveau 6)",
    description: "Intelligence Artificielle (niveau 6)",
  },
  {
    image: "commercial.jpeg",
    title: "Commercial IT (niveau 5 ou 6)",
    description: "Commercial IT (niveau 5 ou 6)",
  },
];

export default function Formation() {
  return (
    <>
      <br />
      <br />
      <br /> <br /> <br />
      <br />
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text text-center">
            Explorez nos formations
          </h1>
          <br />
          <br />
          <br /> <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="h-full bg-white rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105"
              >
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
            ))}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
}
