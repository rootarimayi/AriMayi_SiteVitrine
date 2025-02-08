"use client";
import React from "react";
// Using shield icon to symbolize confidentiality

// Données des articles
const articles = [
    {
      id: 1,
      title: "Article 1 - Mentions légales",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">1.1 Site</h3>
            <p>AriMayi</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">1.2 Éditeur</h3>
            <p>AriMayi SAS au capital de 5 000 €</p>
            <p>Siège social : 24 rue du gouverneur général Éboué, 92130 Issy-les-Moulineaux</p>
            <p>Représentée par Samir Bedouhene, en sa qualité de Fondateur</p>
            <p>Immatriculée au RCS de Nanterre xxxxxxxx</p>
            <p>Téléphone : 0612570719</p>
            <p>Email : contact@arimayi.fr</p>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">1.3 Hébergeur</h3>
            <p>AriMayi est hébergé par OVH</p>
            <p>Siège social : 2, rue Kellermann, 59100 Roubaix</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Article 2 - Accès au site",
      content: (
        <p>
          L'accès au site et son utilisation sont réservés à un usage strictement personnel. 
          Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent 
          à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale 
          et notamment l'envoi de courriers électroniques non sollicités.
        </p>
      )
    },
    {
      id: 3,
      title: "Article 3 - Contenu du site",
      content: (
        <p>
          Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non,
          séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées
          pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le
          site sont protégés par les lois en vigueur au titre de la propriété intellectuelle. Ils sont la
          propriété pleine et entière de l'éditeur ou de ses partenaires. Toute reproduction, représentation,
          utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y
          compris les applications informatiques, sans l'accord préalable et écrit de l'éditeur, sont
          strictement interdites. Le fait pour l'éditeur de ne pas engager de procédure dès la prise de
          connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et
          renonciation aux poursuites.
        </p>
      )
    },
    {
      id: 4,
      title: "Article 4 - Gestion du site",
      content: (
        <div>
          <p>Pour la bonne gestion du site, l'éditeur pourra à tout moment :</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site,
              ou à certaines parties du site, à une catégorie déterminée d'internautes ;
            </li>
            <li>
              supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention
              avec les lois nationales ou internationales ;
            </li>
            <li>
              suspendre le site afin de procéder à des mises à jour.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      title: "Article 5 - Responsabilités",
      content: (
        <div className="space-y-4">
          <p>
            La responsabilité de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou
            interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités. Le
            matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous
            devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres
            données notamment d'attaques virales par Internet.
          </p>
          <p>
            L'éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>du fait de l'usage du site ou de tout service accessible via Internet ;</li>
            <li>du fait du non-respect par vous des présentes conditions générales.</li>
          </ul>
          <p>
            L'éditeur n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre
            équipement du fait de votre connexion ou de votre utilisation du site et vous renoncez à toute
            action contre lui de ce fait.
          </p>
          <p>
            Si l'éditeur venait à faire l'objet d'une procédure amiable ou judiciaire en raison de votre
            utilisation du site, il pourra se retourner contre vous pour obtenir l'indemnisation de tous
            les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure.
          </p>
        </div>
      )
    },
    {
      id: 6,
      title: "Article 6 - Liens hypertextes",
      content: (
        <p>
          La mise en place par les utilisateurs de tous liens hypertextes vers tout ou partie du site est
          autorisée par l'éditeur. Tout lien devra être retiré sur simple demande de l'éditeur. Toute
          information accessible via un lien vers d'autres sites n'est pas publiée par l'éditeur.
          L'éditeur ne dispose d'aucun droit sur le contenu présent dans lesdits liens.
        </p>
      )
    },
    {
      id: 7,
      title: "Article 7 - Collecte et protection des données",
      content: (
        <div className="space-y-4">
          <p>
            Vos données sont collectées par la société AriMayi. Une donnée à caractère personnel désigne
            toute information concernant une personne physique identifiée ou identifiable (personne
            concernée) ; est réputée identifiable une personne qui peut être identifiée, directement ou
            indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou
            plusieurs éléments spécifiques, propres à son identité physique, physiologique, génétique,
            psychique, économique, culturelle ou sociale.
          </p>
          <p>
            Les informations personnelles pouvant être recueillies sur le site sont principalement
            utilisées par l'éditeur pour la gestion des relations avec vous, et le cas échéant pour le
            traitement de vos commandes.
          </p>
          <p>Les données personnelles collectées sont les suivantes :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>nom et prénom</li>
            <li>adresse</li>
            <li>adresse mail</li>
            <li>numéro de téléphone</li>
          </ul>
        </div>
      )
    },
    {
      id: 8,
      title: "Article 8 - Droit d'accès, de rectification et de déréférencement de vos données",
      content: (
        <div className="space-y-4">
          <p>
            En application de la réglementation applicable aux données à caractère personnel, les
            utilisateurs disposent des droits suivants :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              le droit d'accès : ils peuvent exercer leur droit d'accès, pour connaître les données
              personnelles les concernant, en écrivant à l'adresse électronique ci-dessous mentionnée.
              Dans ce cas, avant la mise en œuvre de ce droit, la Plateforme peut demander une preuve
              de l'identité de l'utilisateur afin d'en vérifier l'exactitude ;
            </li>
            <li>
              le droit de rectification : si les données à caractère personnel détenues par la
              Plateforme sont inexactes, ils peuvent demander la mise à jour des informations ;
            </li>
            <li>
              le droit de suppression des données : les utilisateurs peuvent demander la suppression
              de leurs données à caractère personnel, conformément aux lois applicables en matière de
              protection des données ;
            </li>
            <li>
              le droit à la limitation du traitement : les utilisateurs peuvent demander à la
              Plateforme de limiter le traitement des données personnelles conformément aux
              hypothèses prévues par le RGPD ;
            </li>
            <li>
              le droit de s'opposer au traitement des données : les utilisateurs peuvent s'opposer
              à ce que leurs données soient traitées conformément aux hypothèses prévues par le RGPD ;
            </li>
            <li>
              le droit à la portabilité : ils peuvent réclamer que la Plateforme leur remette les
              données personnelles qu'ils ont fournies pour les transmettre à une nouvelle Plateforme.
            </li>
          </ul>
          <p>
            Vous pouvez exercer ce droit en nous contactant, à l'adresse suivante :
            24 rue du gouverneur général Éboué, 92130 Issy-les-Moulineaux
          </p>
          <p>
            Ou par email, à l'adresse : contact@arimayi.fr
          </p>
          <p>
            Toute demande doit être accompagnée de la photocopie d'un titre d'identité en cours de
            validité signé et faire mention de l'adresse à laquelle l'éditeur pourra contacter le
            demandeur. La réponse sera adressée dans le mois suivant la réception de la demande. Ce
            délai d'un mois peut être prolongé de deux mois si la complexité de la demande et/ou le
            nombre de demandes l'exigent.
          </p>
          <p>
            De plus, et depuis la loi n°2016-1321 du 7 octobre 2016, les personnes qui le souhaitent,
            ont la possibilité d'organiser le sort de leurs données après leur décès. Pour plus
            d'information sur le sujet, vous pouvez consulter le site Internet de la CNIL :
            <a href="https://www.cnil.fr" className="text-[#F68A67] hover:text-[#F68A67]-600 ml-1" target="_blank" rel="noopener noreferrer">
              https://www.cnil.fr
            </a>
          </p>
          <p>
            Les utilisateurs peuvent aussi introduire une réclamation auprès de la CNIL sur le site de
            la CNIL :
            <a href="https://www.cnil.fr" className="text-[#F68A67] hover:text-[#F68A67]-600 ml-1" target="_blank" rel="noopener noreferrer">
              https://www.cnil.fr
            </a>
          </p>
          <p>
            Nous vous recommandons de nous contacter dans un premier temps avant de déposer une
            réclamation auprès de la CNIL, car nous sommes à votre entière disposition pour régler
            votre problème.
          </p>
        </div>
      )
    },
    {
        id: 9,
        title: "Article 9 - Utilisation des données",
        content: (
          <div className="space-y-4">
            <p>
              Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à
              disposition des services de la Plateforme, leur amélioration et le maintien d'un
              environnement sécurisé. La base légale des traitements est l'exécution du contrat entre
              l'utilisateur et la Plateforme. Plus précisément, les utilisations sont les suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>accès et utilisation de la Plateforme par l'utilisateur ;</li>
              <li>gestion du fonctionnement et optimisation de la Plateforme ;</li>
              <li>mise en œuvre d'une assistance utilisateurs ;</li>
              <li>vérification, identification et authentification des données transmises par l'utilisateur ;</li>
              <li>personnalisation des services et affichage des publicités en fonction de l'historique de navigation de l'utilisateur,
                  selon ses préférences ;</li>
              <li>prévention et détection des fraudes, malwares (malicious softwares ou logiciels malveillants) et gestion des incidents
                  de sécurité ;</li>
              <li>gestion des éventuels litiges avec les utilisateurs ;</li>
              <li>envoi d'informations commerciales et publicitaires, en fonction des préférences de l'utilisateur.</li>
            </ul>
          </div>
        )
      },
      {
        id: 10,
        title: "Article 10 - Politique de conservation des données",
        content: (
          <p>
            La Plateforme conserve vos données pour la durée nécessaire pour vous fournir ses services ou
            son assistance. Dans la mesure raisonnablement nécessaire ou requise pour satisfaire aux
            obligations légales ou réglementaires, régler des litiges, empêcher les fraudes et abus ou
            appliquer nos modalités et conditions, nous pouvons également conserver certaines de vos
            informations si nécessaire, même après que vous ayez fermé votre compte ou que nous n'ayons
            plus besoin pour vous fournir nos services.
          </p>
        )
      },
      {
        id: 11,
        title: "Article 11 - Partage des données personnelles avec des tiers",
        content: (
          <div className="space-y-4">
            <p>
              Les données personnelles peuvent être partagées avec des sociétés tierces exclusivement
              dans l'Union européenne, dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>lorsque l'utilisateur publie, dans les zones de commentaires libres de la Plateforme,
                  des informations accessibles au public ;</li>
              <li>quand l'utilisateur autorise le site web d'un tiers à accéder à ses données ;</li>
              <li>quand la Plateforme recourt aux services de prestataires pour fournir l'assistance
                  utilisateurs, la publicité et les services de paiement. Ces prestataires disposent
                  d'un accès limité aux données</li>
            </ul>
          </div>
        )
      },
      {
        id: 12,
        title: "Article 12 - Offres commerciales",
        content: (
          <div className="space-y-4">
            <p>
              Vous êtes susceptible de recevoir des offres commerciales de l'éditeur. Si vous ne le
              souhaitez pas, veuillez cliquer sur le lien suivant : rgpd@arimayi.fr
            </p>
            <p>
              Vos données sont susceptibles d'être utilisées par les partenaires de l'éditeur à des
              fins de prospection commerciale. Si vous ne le souhaitez pas, veuillez cliquer sur le
              lien suivant : rgpd@arimayi.fr
            </p>
            <p>
              L'éditeur décline toute responsabilité à cet égard. Les données sont conservées et
              utilisées pour une durée conforme à la législation en vigueur.
            </p>
          </div>
        )
      },
      {
        id: 13,
        title: "Article 13 - Cookies",
        content: (
          <div className="space-y-4">
            <p>
              Qu'est-ce qu'un « cookie » ? Un « Cookie » ou traceur est un fichier électronique déposé
              sur un terminal (ordinateur, tablette, smartphone…) et lu par exemple lors de la
              consultation d'un site internet, de la lecture d'un courrier électronique, de
              l'installation ou de l'utilisation d'un logiciel ou d'une application mobile, et ce,
              quel que soit le type de terminal utilisé.
            </p>
            <p>
              Les cookies suivants sont présents sur ce site : La durée de vie de ces cookies est de
              treize mois.
            </p>
          </div>
        )
      },
      {
        id: 14,
        title: "Article 14 - Photographies et représentation des produits",
        content: (
          <p>
            Les photographies de produits, accompagnant leur description, ne sont pas contractuelles
            et n'engagent pas l'éditeur.
          </p>
        )
      },
      {
        id: 15,
        title: "Article 15 - Loi applicable",
        content: (
          <p>
            Les présentes conditions d'utilisation du site sont régies par la loi française et
            soumises à la compétence des tribunaux du siège social de l'éditeur, sous réserve
            d'une attribution de compétence spécifique découlant d'un texte de loi ou
            réglementaire particulier.
          </p>
        )
      },
      {
        id: 16,
        title: "Article 16 - Contactez-nous",
        content: (
          <p>
            Pour toute question, information sur les produits présentés sur le site, ou concernant
            le site lui-même, vous pouvez laisser un message à l'adresse suivante :
            <a href="mailto:contact@arimayi.fr" className="text-[#F68A67] hover:text-[#F68A67]-600 ml-1">
              contact@arimayi.fr
            </a>
          </p>
        )
      }
];

export default function MentionsLegalesContainer() {
    return (
        <main>
            <section className=" py-[150px] min-h-[calc(100vh-200px)] bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Mentions Légales
                    </h1>

                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-8">
                    {/* Introduction */}
                    <div className="prose max-w-none">
                        <p className="text-gray-600">
                        La société AriMayi, soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de
                        transparence avec ses clients, a mis en place une politique reprenant l'ensemble de ces traitements, des finalités poursuivies par
                        ces derniers ainsi que des moyens d'actions à la disposition des individus afin qu'ils puissent au mieux exercer leurs droits.
                        </p>
                        <p className="text-gray-600">
                        Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site :
                        <a href="https://www.cnil.fr/" className="text-[#F68A67] hover:text-[#F68A67]-600 ml-1" target="_blank" rel="noopener noreferrer">
                            https://www.cnil.fr/
                        </a>
                        </p>
                    </div>

                    {/* Article 1 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#F68A67] mb-4">Article 1 - Mentions légales</h2>
                        <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">1.1 Site</h3>
                            <p>AriMayi</p>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-2">1.2 Éditeur</h3>
                            <p>AriMayi SAS au capital de 5 000 €</p>
                            <p>Siège social : 24 rue du gouverneur général Éboué, 92130 Issy-les-Moulineaux</p>
                            <p>Représentée par Samir Bedouhene, en sa qualité de Fondateur</p>
                            <p>Immatriculée au RCS de Nanterre xxxxxxxx</p>
                            <p>Téléphone : 0612570719</p>
                            <p>Email : contact@arimayi.fr</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">1.3 Hébergeur</h3>
                            <p>AriMayi est hébergé par OVH</p>
                            <p>Siège social : 2, rue Kellermann, 59100 Roubaix</p>
                        </div>
                        </div>
                    </div>

                    {/* Articles 2-16 */}
                    {articles.map((article) => (
                        <div key={article.id}>
                        <h2 className="text-2xl font-semibold text-[#F68A67] mb-4">
                            {article.title}
                        </h2>
                        <div className="prose prose-gray max-w-none">
                            {article.content}
                        </div>
                        </div>
                    ))}

                    {/* Contact */}
                    <div className="mt-12 pt-8 border-t">
                        <h2 className="text-2xl font-semibold text-[#F68A67] mb-4">
                        Pour nous contacter
                        </h2>
                        <p>
                        Email : <a href="mailto:contact@arimayi.fr" className="text-[#F68A67] hover:text-[#F68A67]-600">contact@arimayi.fr</a>
                        </p>
                        <p>
                        Adresse : 24 rue du gouverneur général Éboué, 92130 Issy-les-Moulineaux
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    );
}