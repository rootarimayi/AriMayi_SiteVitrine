"use client";
import React from "react";
 // Using shield icon to symbolize confidentiality

export default function Politique() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section className="w-full py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl font-monserrat bg-gradient-to-r from-[#54E0E9] via-[#816CFF] to-[#B163FF] text-transparent bg-clip-text">
              Politique de Confidentialité
            </h1>
            <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-600">
              Protéger vos données et respecter votre confidentialité est notre
              priorité absolue.
            </p>
          </div>

          <div className="flex justify-center py-8">
            <div className="w-full max-w-3xl px-4 md:px-6 lg:px-8">
              <div className="relative p-4 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mt-6 text-gray-700">
                  <h2 className="text-xl font-semibold">
                    1. Collecte et utilisation des données
                  </h2>
                  <p className="mt-2 text-base md:text-lg">
                    Les données collectées par le biais de ce formulaire de
                    contact font l&rsquo;objet d&rsquo;un traitement par
                    l&rsquo;entreprise AriMayi sise 24 rue du Général Eboué,
                    92130 Issy-les-Moulineaux. Ces données sont collectées afin
                    que nous puissions vous répondre lorsque vous nous contactez
                    pour toute question sur les prestations proposées par
                    l&rsquo;entreprise AriMayi.
                  </p>

                  <p className="mt-4 text-base md:text-lg">
                    L&rsquo;utilisation des données personnelles dans ce cadre
                    repose sur la base du consentement des personnes concernées.
                  </p>
                </div>
                <div className="border-t border-dashed border-gray-400 mt-6"></div>{" "}
                {/* Dashed line divider */}
                <div className="mt-6 text-gray-700">
                  <h2 className="text-xl font-semibold">
                    2. Destinataires des données
                  </h2>
                  <p className="mt-2 text-base md:text-lg">
                    Les données collectées seront communiquées aux seuls
                    destinataires suivants : l&rsquo;équipe support et
                    l&rsquo;équipe commerciale. La durée de conservation est
                    fixée à 6 mois maximum.
                  </p>
                </div>
                <div className="border-t border-dashed border-gray-400 mt-6"></div>{" "}
              
                <div className="mt-6 text-gray-700">
                  <h2 className="text-xl font-semibold">
                    3. Vos droits concernant les données personnelles
                  </h2>
                  <p className="mt-2 text-base md:text-lg">
                    Vous avez des droits sur vos données personnelles : droit
                    d&rsquo;accès, droit d&rsquo;effacement, droit
                    d&rsquo;opposition, droit de rectification, etc. Pour faire
                    une demande d&rsquo;exercice de ces droits, écrivez à cette
                    adresse mail :
                    <a href="mailto:droit@rgpd.fr" className="text-indigo-600">
                      droit@rgpd.fr
                    </a>
                    .
                  </p>
                </div>
                <div className="border-t border-dashed border-gray-400 mt-6"></div>{" "}
                {/* Dashed line divider */}
                <div className="mt-6 text-gray-700">
                  <h2 className="text-xl font-semibold">
                    4. Informations supplémentaires
                  </h2>
                  <p className="mt-2 text-base md:text-lg">
                    Consultez le site{" "}
                    <a
                      href="https://www.cnil.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600"
                    >
                      cnil.fr
                    </a>{" "}
                    pour plus d&rsquo;informations sur vos droits. Vous pouvez
                    adresser une réclamation à la CNIL si vous estimez que vos
                    droits RGPD ne sont pas respectés.
                  </p>
                </div>
                <div className="border-t border-dashed border-gray-400 mt-6"></div>{" "}
           
                <div className="mt-6">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">
                    Arimayi - Confidentialité et Sécurité
                  </h4>
                  <div className="text-sm md:text-base text-gray-600">
                    Notre engagement pour votre sécurité.
                  </div>
                  <div className="text-sm md:text-base text-indigo-600 font-medium">
                    Une organisation de confiance.
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
