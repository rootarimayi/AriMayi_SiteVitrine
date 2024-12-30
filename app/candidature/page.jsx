import Image from "next/image";
import candidat from "@/public/assets/christina-wocintechchat-com-OW5KP_Pj85Q-unsplash.jpg";

export default function Candidature() {
  return (
    <>
      <br />
      <br /> <br />
      <div className="flex flex-col md:flex-row h-auto md:h-screen">
        {}
        <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center">
          <Image
            src={candidat}
            alt="Placeholder"
            className="max-w-full h-auto"
          />
        </div>

        {}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
          <div className="mt-50 p-6">
            <br />
            <br />
            <h1 className="text-3xl font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent text-center bg-clip-text">
              Je m&apos;inscris dès maintenant !
            </h1>

            <form className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nom"
                    className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="prenom"
                    className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="mb-5">
                  <label
                    htmlFor="date_naissance"
                    className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date de naissance
                  </label>
                  <input
                    type="date"
                    id="date_naissance"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Votre numéro"
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="exemple@domaine.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="programme"
                  className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quel formation vous intéresse ?
                </label>
                <select
                  id="programme"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                >
                  <option value="">Sélectionnez un programme</option>
                  <option value="programme1">
                    Commercial IT (niveau 5 ou 6)
                  </option>
                  <option value="programme2">
                    Concepteur Développeur (niveau 6)
                  </option>
                  <option value="programme3">Cybersécurité (niveau 6)</option>
                  <option value="programme3">Designer (niveau 5)</option>
                  <option value="programme3">
                    Développeur web mobile (niveau 5)
                  </option>
                  <option value="programme3">
                    Intelligence Artificielle (niveau 6)
                  </option>
                </select>
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="accept"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="accept"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  J&apos;accepte de recevoir des informations sur les formations
                  Arimayi par e-mail
                </label>
              </div>
              <button
                type="submit"
                className="text-white display-center align-center mb-4 bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Je candidate
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
