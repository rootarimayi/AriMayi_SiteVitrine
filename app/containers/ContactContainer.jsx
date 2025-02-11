"use client";
import ContactBanner from "../components/Contact/ContactBanner";
import Coordonnees from "../components/Contact/Coordonnees";
import Collapse from "../components/Contact/Collapse";
import Contact from "../components/Contact/TmpForm";
import ContactForm from "../components/Contact/TmpForm";

export default function ContactContainer() {
    return (
      <main>
        <ContactBanner className="bg-HomeHeaderMask sm:bg-HomeHeaderMask bg-cover bg-center transition-all duration-300 ease-in-out py-[50px] min-h-[calc(100vh-250px)]">
        <h3 className="text-[48px] text-start font-monserrat font-extrabold uppercase gradient-title bg-clip-text w-[100%] md:w-[60%]">
              Contactez Nous
          </h3>
          <p className="text-left font-Opensans text-[24px] leading-[40px] text-[#353535] w-[100%] md:w-[60%] lg:w-[50%]">
          Besoin d&apos;informations sur nos formations ou nos collaborations ? <strong>Contactez-nous</strong> et découvrons ensemble comment <strong>AriMayi</strong> peut vous accompagner dans votre parcours ou votre projet digital.
            </p>
          </ContactBanner>
        <div className="flex flex-col items-center text-center mt-20 bg-[#F4F2FF]">
          <h3 className="text-[48px] text-center font-montserrat font-bold gradient-title w-full md:w-[60%]">
              AriMayi
          </h3>
          
          <p className="text-gray-800 text-[18px] leading-[32px] text-[#353535] w-full mt-4 mb-4 md:text-[24px] md:leading-[40px]">
              Votre point de départ vers de nouvelles opportunités professionnelles et la réussite de votre projet
          </p>

        {/* <Coordonnees /> */}
        <ContactForm />
        </div>
        <div className="flex flex-col items-center text-left mt-20">
          <h2 className="text-[48px] text-center font-montserrat font-bold  gradient-title w-full md:w-[60%]">Foire Aux Questions...</h2>
          <br />
          <br />
          <Collapse
            title="Quel langage de programmation vais-je apprendre?"
            content="Plutôt que d’effleurer plusieurs langages sans profondeur, mieux vaut en maîtriser un avec un Framework front et back.  Cela permet de bâtir des projets complets, d’acquérir une expertise solide et de gagner en employabilité. L’important n’est pas la quantité de technologies connues, mais la capacité à les utiliser efficacement. Misez sur la qualité, pas sur l’accumulation !"
          />
          <Collapse
            title="Est-ce qu'à l'issue de la formation, je serai employable?"
            content="Chez AriMayi, notre approche va bien au-delà de l’apprentissage théorique. Notre objectif est de vous rendre réellement employable en vous donnant :
            - Une maîtrise approfondie d’un langage et de ses Framework front et back.
            - Des projets concrets pour prouver votre savoir-faire.
            - Un accompagnement personnalisé pour affiner votre profil et vous positionner sur le marché.
            - Un réseau et des opportunités pour maximiser vos chances d’embauche.
            L’objectif n’est pas juste d’apprendre, mais de vous préparer à intégrer le marché avec des compétences opérationnelles et recherchées grâce à notre méthode E.T.I.C"
          />
          <Collapse
            title="Est-ce que vous allez m'aider a trouver un emploi?"
            content="AriMayi ne se contente pas de vous former, nous vous accompagnons jusqu’à l’emploi. Notre approche repose sur trois piliers essentiels :
            - Compétences opérationnelles : Une formation axée sur la pratique avec des projets concrets pour être immédiatement employable.
            - Accompagnement personnalisé : Aide à la création de CV, simulations d’entretiens et mise en avant de votre profil auprès des recruteurs.
            - Accès à un réseau d’opportunités : Connexion avec des entreprises partenaires et mise en relation avec des offres adaptées à votre parcours.
            Nous ne promettons pas un emploi, mais nous mettons en place toutes les conditions pour vous aider à décrocher celui qui vous correspond."
          />
          <Collapse
            title="Combien de temps dure la formation? "
            content="La formation AriMayi s’adapte à votre niveau et à votre objectif professionnel. 
            - 4 à 8 mois selon vos connaissances de départ et la trajectoire que vous souhaitez emprunter.
            - Un parcours personnalisé pour avancer à votre rythme tout en acquérant des compétences opérationnelles.
            - L’objectif ? Vous rendre prêt à intégrer le marché avec une maîtrise solide et des projets concrets."
          />
          <Collapse
            title="Qu'est-ce que l'AFEST?"
            content="L’AFEST chez AriMayi, c’est un apprentissage en situation de travail structuré autour de la méthode E.T.I.C. : Engagement, Travail, Inclusion, Compétences. Une approche pragmatique qui fait de chaque expérience un levier de montée en compétences et d’insertion durable !"
          />
          <Collapse
            title="Qu'est-ce que E.T.I.C (Engagement, Travail, Inclusion, Compétences)"
            content="Chez AriMayi, la méthode E.T.I.C. repose sur quatre piliers essentiels qui guident notre approche pédagogique et notre engagement envers l’employabilité durable :
            - Engagement  : Un accompagnement actif et personnalisé pour aider chacun à atteindre ses objectifs professionnels.
            - Travail : Une formation axée sur la pratique et l’expérimentation pour acquérir des compétences solides et opérationnelles.
            - Inclusion : Offrir à tous, sans distinction, les mêmes opportunités d’apprentissage et d’évolution professionnelle.
            - Compétences : Développer un savoir-faire concret et valorisable sur le marché de l’emploi.
            E.T.I.C., c’est bien plus qu’une méthode : c’est une vision qui place l’humain au cœur de l’apprentissage et de la réussite professionnelle."
          />
          <Collapse
            title="Qu'est-ce que POEI/POEC ?"
            content="Chez AriMayi, nous voyons les POEI (Préparation Opérationnelle à l’Emploi Individuelle) et POEC (Préparation Opérationnelle à l’Emploi Collective) comme de véritables leviers d’insertion et de montée en compétences.
            Notre approche s’aligne sur notre méthode E.T.I.C. pour garantir une formation pratique, immersive et professionnalisante, adaptée aux besoins des entreprises et du marché.
            L’objectif ? Former des talents immédiatement opérationnels et faciliter leur accès à un emploi durable."
          />
          <Collapse
            title="Vos formations sont-elles certifiantes ?"
            content="Oui, la certification est au cœur de notre vision chez AriMayi. 
            Notre objectif est de permettre à nos apprenants d’obtenir une certification de niveau 5 ou 6, gage de reconnaissance sur le marché de l’emploi. Nous travaillons déjà activement sur la mise en place d’une certification de niveau 7, afin d'offrir encore plus d'opportunités et de valoriser les compétences acquises.
            Chez AriMayi, chaque parcours est conçu pour allier montée en compétences et employabilité durable."
          />
          <Collapse
            title="Votre incubateur de talent est-il certifié Qualiopi ?"
            content="Les démarches sont déjà en cours ! Nous avons lancé le processus de certification Qualiopi afin de garantir la qualité et l’éligibilité de nos formations aux financements publics et mutualisés.
            Notre objectif est clair : structurer notre incubateur de talents pour qu’il soit un véritable tremplin vers l’emploi, avec des parcours certifiants et professionnalisants. L'excellence et l’impact sont au cœur de notre démarche !"
          />
          <Collapse
            title="Je n'ai pas de compétence technique ou informatique, puis-je m'inscrire?"
            content="Oui, bien sûr ! Chez AriMayi, l’apprentissage est accessible à tous, quel que soit le point de départ.
            Grâce à notre méthode E.T.I.C. (Engagement, Travail, Inclusion, Compétences), vous progressez à votre rythme avec un accompagnement personnalisé et des mises en situation concrètes. Aucune compétence technique préalable n’est requise : nous vous formons de A à Z et vous accompagnons jusqu’à la validation de votre période d’essai en entreprise.Seule la motivation compte, le reste, on le construit ensemble !"
          />
          <Collapse
            title="Je sais déjà développer, est-ce que vos formations sont faites pour moi ?"
            content="Oui, absolument ! nos formations ne se limitent pas aux débutants.
            Si vous savez déjà développer, nous vous aidons à monter en compétences, à vous spécialiser dans des technologies recherchées, et à structurer votre parcours pour maximiser votre employabilité.
            L’objectif ? Passer du savoir-faire technique à une vraie expertise valorisée sur le marché !"
          />
          <Collapse
            title="Puis-je financer ma formation avec CPF ou autre ?"
            content="Nous avançons déjà sur ces démarches ! nous travaillons activement pour rendre nos formations éligibles aux financements CPF et autres dispositifs. L’objectif est de faciliter l’accès à nos parcours et de permettre à chacun de se former sans frein financier. En attendant, d’autres solutions de financement existent selon votre situation (France Travail, OPCO, financements régionaux…). N’hésitez pas à nous contacter, nous vous guiderons vers l’option la plus adaptée. Votre projet mérite d’être financé !"
          />
          <Collapse
            title="Puis-je cumuler l'AIF et le CPF?"
            content="Oui, le cumul de l’AIF (Aide Individuelle à la Formation) et du CPF est possible sous certaines conditions !
            L’AIF, financée par France Travail, peut compléter votre CPF si votre solde est insuffisant pour couvrir l’intégralité des frais de formation. C’est une excellente solution pour maximiser votre financement.
            Nous vous accompagnons dans vos démarches pour trouver le montage financier le plus adapté à votre situation. N’hésitez pas à nous contacter pour en savoir plus !"
          />
        </div>
      </main>
    );
  }