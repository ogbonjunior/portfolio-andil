/*
 * DONNÉES FACILES À MODIFIER
 * Chaque projet suit la même structure et utilise la même page de détail.
 * demoUrl et githubUrl peuvent rester vides : les boutons sont alors masqués
 * et remplacés par un message clair.
 *
 * Les 8 projets ci-dessous sont les projets réels de OGBON JUNIOR.
 * demoUrl pointe vers la copie du projet incluse dans le dossier demos/
 * (chemin relatif à la page projects/project.html).
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: "horloge-analogique",
    name: "Horloge Analogique",
    category: "pratice",
    image: "images/projects/horloge-analogique.jpg",
    imageAlt: "Capture d'écran de l'Horloge Analogique",
    shortDescription: "Horloge analogique mise à jour chaque seconde.",
    description:
      "Horloge analogique dont les aiguilles des heures, des minutes et des secondes se mettent à jour chaque seconde à partir de l'heure de l'appareil, sur un fond de paysage.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ogbonjunior.github.io/Horloge-Analogique/",
    githubUrl: "https://github.com/ogbonjunior/Horloge-Analogique",
  },
    {
    id: "calculatrice",
    name: "Calculatrice",
    category: "pratice",
    image: "images/projects/calculatrice.jpg",
    imageAlt: "Capture d'écran de la Calculatrice",
    shortDescription: "Calculatrice web utilisable à la souris et au clavier.",
    description:
      "Calculatrice web avec chiffres, opérateurs, parenthèses, point décimal et touche de remise à zéro. Elle fonctionne aussi bien avec les boutons à l'écran qu'avec le clavier.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ogbonjunior.github.io/calcula-trice/",
    githubUrl: "https://github.com/ogbonjunior/calcula-trice",
  },
  {
    id: "horloge-numerique",
    name: "Horloge Numérique",
    category: "pratice",
    image: "images/projects/horloge-numerique.jpg",
    imageAlt: "Capture d'écran de l'Horloge Numérique",
    shortDescription: "Heure et date affichées en français, en temps réel.",
    description:
      "Horloge numérique affichant l'heure et la date complète en français (jour, numéro, mois et année), mises à jour en continu sur un fond de paysage.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ogbonjunior.github.io/Horloge-Num-rique/",
    githubUrl: "https://github.com/ogbonjunior/Horloge-Num-rique",
  },
  {
    id: "mes-favoris",
    name: "Mes Favoris",
    category: "pratice",
    image: "images/projects/favoris.jpg",
    imageAlt: "Capture d'écran de la page Mes Favoris",
    shortDescription: "Page de sites et ressources favoris classés par thème.",
    description:
      "Page regroupant les sites et ressources les plus consultés, classés en quatre catégories : Web et Tech, Apprentissage, Créativité, Actualités & Médias.",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://ogbonjunior.github.io/favoris/",
    githubUrl: "https://github.com/ogbonjunior/favoris",
  },
  {
    id: "portfolio-personnel-ogbon-junior",
    name: "Portfolio personnel — OGBON JUNIOR",
    category: "personal",
    image: "images/projects/portfolio-ogbon-junior.jpg",
    imageAlt: "Capture d'écran de la page d'accueil du portfolio personnel de OGBON JUNIOR",
    shortDescription: "Mon portfolio : parcours, compétences, projets, services et contact.",
    description:
      "Portfolio personnel conçu pour présenter mon parcours, mes compétences, mes réalisations, mes services et mes coordonnées professionnelles en tant qu'étudiant en Systèmes Informatiques et Logiciels et développeur web junior.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    // À MODIFIER : remplacez les deux adresses ci-dessous par les vraies (dépôt GitHub du portfolio et site publié).
    demoUrl: "https://MON-SITE-DEMO-A-REMPLACER.netlify.app",
    githubUrl: "https://github.com/REMPLACER",
  },
  {
    id: "restaurant-la-marmite-du-benin",
    name: "Restaurant La Marmite du Bénin",
    category: "university",
    image: "images/projects/restaurant-marmite-du-benin.jpg",
    imageAlt: "Capture d'écran du site Restaurant La Marmite du Bénin",
    shortDescription: "Site de restaurant avec menu, fiches plats et commande.",
    description:
      "Site de restaurant béninois présentant un menu organisé en quatre familles (plats à base de pâte, de riz, plats traditionnels, plats rapides), une page dédiée à chaque plat et un formulaire de commande.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ogbonjunior.github.io/restaurant/",
    githubUrl: "https://github.com/ogbonjunior/restaurant",
  },
  {
    id: "portfolio-de-dansou-jacques",
    name: "Portfolio de DANSOU Jacques",
    category: "internship",
    image: "images/projects/portfolio-dansou-jacques.jpg",
    imageAlt: "Capture d'écran du Portfolio de DANSOU Jacques",
    shortDescription: "Portfolio d'un développeur web full stack junior.",
    description:
      "Portfolio présentant DANSOU Jacques, développeur web full stack junior et étudiant en Systèmes Informatiques et Logiciels : à propos, compétences, formation, soft skills, centres d'intérêt, contact et téléchargement du CV en PDF.",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://ogbonjunior.github.io/dansou-jacques/",
    githubUrl: "https://github.com/ogbonjunior/dansou-jacques",
  },
  {
    id: "portfolio-irene-amoussou-zanda",
    name: "Portfolio Irène Amoussou Zanda",
    category: "client",
    image: "images/projects/irene-amoussou-zanda.jpg",
    imageAlt: "Capture d'écran du Portfolio Irène Amoussou Zanda",
    shortDescription: "Portfolio d'une étudiante en droit, oratrice et community manager.",
    description:
      "Portfolio personnel réalisé pour Mawulonm Irène Amoussou Zanda, étudiante en droit, oratrice et community manager : présentation, compétences, parcours, expériences et formulaire de contact.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ogbonjunior.github.io/irene-amoussou/",
    githubUrl: "https://github.com/ogbonjunior/irene-amoussou",
  },
  {
    id: "tabitha-by-la-maison-amayune",
    name: "TABITHA by la Maison Amayune",
    category: "client",
    image: "images/projects/tabitha-maison-amayune.jpg",
    imageAlt: "Capture d'écran du site TABITHA by la Maison Amayune",
    shortDescription: "Site vitrine d'une boutique béninoise de mode et d'accessoires.",
    description:
      "Site vitrine de la boutique béninoise TABITHA by la Maison Amayune (mode, accessoires et produits sélectionnés) : présentation, catégories de produits, services, page de contact et commande via WhatsApp.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ogbonjunior.github.io/TABITHA-by-la-Maison-Amayune/",
    githubUrl: "https://github.com/ogbonjunior/TABITHA-by-la-Maison-Amayune",
  }
];

window.PORTFOLIO_CATEGORIES = {
  pratice: "PROJETS POUR M'EXERCER",
  personal: "PROJETS PERSONNELS",
  university: "PROJETS UNIVERSITAIRES",
  internship: "STAGES",
  client: "MISSIONS RÉALISÉES POUR DES CLIENTS"
  
};

// ============================================================
// LIENS SOCIAUX — À REMPLACER
// Remplacez uniquement les valeurs ci-dessous par vos vraies URLs.
// Ne touchez pas au reste du fichier ni à la structure du site.
// ============================================================
const contactLinks = {
  facebookProfile: "https://www.facebook.com/ogbon.junior",
  facebookPage: "https://www.facebook.com/ogbon.junior",
  whatsapp: "https://wa.me/22954119408"
};
window.PORTFOLIO_LINKS = contactLinks; // compatibilité avec script.js existant

// ============================================================
// ENVOI DU FORMULAIRE DE CONTACT — Web3Forms
// ============================================================
// Le site est 100% statique (HTML/CSS/JS, hébergé sur GitHub Pages) :
// il n'y a pas de serveur pour envoyer un e-mail directement.
// Web3Forms est un service tiers gratuit qui reçoit le formulaire
// et transmet le message à l'adresse Gmail ci-dessous.
//
// La clé ci-dessous est une CLÉ PUBLIQUE (« Access Key »), pas un
// secret : elle est conçue pour être visible dans le code frontend,
// comme une clé "publishable" Stripe. Ne la confondez pas avec une
// clé API secrète — aucune clé secrète n'est utilisée ici.
//
// ÉTAPES POUR ACTIVER LA RÉCEPTION RÉELLE DANS GMAIL :
// 1. Aller sur https://web3forms.com
// 2. Entrer ogbonjunior2008@gmail.com et cliquer sur "Create Access Key".
// 3. Confirmer via l'e-mail reçu dans cette boîte Gmail.
// 4. Copier la clé fournie et la coller ci-dessous, à la place du
//    placeholder, SANS rien changer d'autre dans ce fichier.
window.WEB3FORMS_ACCESS_KEY = "[CLE_ACCES_WEB3FORMS_A_REMPLACER]";
