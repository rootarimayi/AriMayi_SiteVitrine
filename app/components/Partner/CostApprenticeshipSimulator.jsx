
"use client";
import React, { useState, useEffect } from 'react';

export default function CostApprenticeshipSimulator() {
  const [age, setAge] = useState(16);
  const [annee, setAnnee] = useState(1);
  const [smic, setSmic] = useState(1801.80);
  const [salaireConventionnel, setSalaireConventionnel] = useState(0);
  const [useConventionnel, setUseConventionnel] = useState(false);
  const [tailleEntreprise, setTailleEntreprise] = useState('moins250'); // Taille de l'entreprise
  const [aideHandicap, setAideHandicap] = useState(false); // Aide pour handicapé
  const [resultat, setResultat] = useState(null);

  const calculerRemuneration = () => {
    let pourcentage = 0;
    let montant = 0;

    // Déterminer le pourcentage en fonction de l'âge et de l'année
    if (age >= 16 && age <= 17) {
      if (annee === 1) pourcentage = 27;
      else if (annee === 2) pourcentage = 39;
      else if (annee === 3) pourcentage = 55;
    }
    else if (age >= 18 && age <= 20) {
      if (annee === 1) pourcentage = 43;
      else if (annee === 2) pourcentage = 51;
      else if (annee === 3) pourcentage = 67;
    }
    else if (age >= 21 && age <= 25) {
      if (annee === 1) pourcentage = 53;
      else if (annee === 2) pourcentage = 61;
      else if (annee === 3) pourcentage = 78;
    }
    else if (age >= 26) {
      pourcentage = 100;
    }

    // Calcul du montant basé sur le SMIC
    montant = (pourcentage / 100) * smic;

    // Pour 21-25 ans et 26+, on doit comparer avec le salaire conventionnel
    if ((age >= 21 && useConventionnel) || age >= 26) {
      const montantConventionnel = (pourcentage / 100) * salaireConventionnel;

      // On prend le plus élevé des deux
      if (montantConventionnel > montant && useConventionnel) {
        return {
          pourcentage,
          baseSmic: montant.toFixed(2),
          baseConventionnel: montantConventionnel.toFixed(2),
          montantFinal: montantConventionnel.toFixed(2),
          source: "conventionnel"
        };
      }
    }

    return {
      pourcentage,
      montantFinal: montant.toFixed(2),
      source: "smic"
    };
  };

  useEffect(() => {
    setResultat(calculerRemuneration());
  }, [age, annee, smic, salaireConventionnel, useConventionnel]);

  // Calcul du coût pour l'employeur après aides
  const calculerCoutEmployeur = () => {
    if (!resultat) return 0;

    const salaireBrutAnnuel = parseFloat(resultat.montantFinal) * 12;

    // Aide pour la taille de l'entreprise
    let aideEntreprise = 0;
    if (tailleEntreprise === 'moins250') {
      aideEntreprise = 5000;
      //setAideUnique = 5000;
      // Aide pour les petites entreprises
    } else if (tailleEntreprise === 'plus250') {
      aideEntreprise = 2000; // Aide pour les grandes entreprises
    }

    // Aide pour les personnes handicapées
    if (aideHandicap) {
      aideEntreprise = 6000; // Montant approximatif pour l'aide à l'embauche d'un handicapé
    }

    const totalAides = aideEntreprise
    const coutEmployeurAnnuel = salaireBrutAnnuel - totalAides;

    return {
      salaireBrutAnnuel: salaireBrutAnnuel.toFixed(2),
      totalAides: totalAides.toFixed(2),
      coutEmployeurAnnuel: coutEmployeurAnnuel.toFixed(2),
    };
  };

  const coutEmployeur = calculerCoutEmployeur();

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md" style={{ boxShadow: '3px 4px 9.9px 0px #A25C4526' }}>
      <h1 className="text-2xl font-bold mb-6 gradient-title text-center">Simulateur du coût d&apos;un apprenti</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Âge de l&apos;apprenti
            </label>
            <input
              type="number"
              min="16"
              max="65"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Année d&apos;apprentissage
            </label>
            <select
              value={annee}
              onChange={(e) => setAnnee(parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value={1}>1ère année</option>
              <option value={2}>2ème année</option>
              <option value={3}>3ème année</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valeur du SMIC (en €)
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={smic}
              onChange={(e) => setSmic(parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              id="useConventionnel"
              type="checkbox"
              checked={useConventionnel}
              onChange={(e) => setUseConventionnel(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="useConventionnel" className="ml-2 block text-sm text-gray-700">
              Utiliser le salaire minimum conventionnel
            </label>
          </div>

          {useConventionnel && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Salaire minimum conventionnel (en €)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={salaireConventionnel}
                onChange={(e) => setSalaireConventionnel(parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Taille de l&apos;entreprise
            </label>
            <select
              value={tailleEntreprise}
              onChange={(e) => setTailleEntreprise(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="moins250">Moins de 250 salariés</option>
              <option value="plus250">Plus de 250 salariés</option>
            </select>
          </div>

          <div className="flex items-center mt-4">
            <input
              id="aideHandicap"
              type="checkbox"
              checked={aideHandicap}
              onChange={(e) => setAideHandicap(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="aideHandicap" className="ml-2 block text-sm text-gray-700">
              Appliquer l&apos;aide à l&apos;embauche pour les personnes handicapées
            </label>
          </div>
        </div>
      </div>

      {resultat && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Résultat du calcul</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-2">
                <span className="font-medium">Pourcentage du SMIC applicable :</span> {resultat.pourcentage}%
              </p>
              <p className="mb-2">
                <span className="font-medium">Tranche d&apos;âge :</span> {
                  age <= 17 ? "16 à 17 ans" :
                    age <= 20 ? "18 à 20 ans" :
                      age <= 25 ? "21 à 25 ans" : "26 ans et plus"
                }
              </p>
              <p className="mb-2">
                <span className="font-medium">Année d&apos;apprentissage :</span> {annee === 1 ? "1ère année" : annee === 2 ? "2ème année" : "3ème année"}
              </p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <p className="mb-2 text-lg font-bold text-indigo-800">
                Rémunération mensuelle brute :
              </p>
              <p className="text-2xl font-bold text-indigo-900">
                {resultat.montantFinal} €
              </p>
              <p className="mt-2 text-sm text-indigo-700">
                {resultat.source === "conventionnel" ?
                  "Basé sur le salaire conventionnel (plus avantageux)" :
                  "Basé sur le SMIC"}
              </p>

              {resultat.source === "conventionnel" && (
                <div className="mt-2 text-sm">
                  <p>Base SMIC: {resultat.baseSmic} €</p>
                  <p>Base conventionnelle: {resultat.baseConventionnel} €</p>
                </div>
              )}

              <p className="mt-4 text-lg font-bold text-green-800">
                Coût annuel pour l&apos;employeur après aides : {coutEmployeur.coutEmployeurAnnuel} €
              </p>
              <p className="text-sm text-gray-600">
                (Aides totales : {coutEmployeur.totalAides} €)
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-600">
        <p className="mb-2">Notes importantes :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>L&apos;apprenti préparant une licence professionnelle en 1 an bénéficie d&apos;une rémunération correspondant à une 2ème année de contrat.</li>
          <li>Ces montants peuvent être majorés si un accord collectif applicable dans l&apos;entreprise fixe une rémunération minimale plus élevée.</li>
          <li>Des retenues pour avantages en nature (nourriture ou logement) prévus au contrat d&apos;apprentissage peuvent être effectuées dans la limite de 75% du salaire.</li>
          <li>L&apos;apprenti a droit à la prise en charge de ses frais de transport pour se rendre de son domicile à son travail.</li>
        </ul>
      </div>
    </div>
  );
}
