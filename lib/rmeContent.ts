export type GuideSection = {
  id: string;
  title: string;
  description: string;
  items: {
    title: string;
    body: string;
  }[];
};

export const AUDIENCE_PROFILES = [
  {
    name: "RME Europe ↔ Maroc",
    badge: "Priorité MVP",
    description:
      "Pour les Ressortissants Marocains à l'Étranger qui préparent un trajet centré sur le Royaume: route, ferry, avion, arrêts utiles et assistance voyage.",
    focus: ["Préparer le départ", "Voyager en famille", "Orienter les réservations"],
  },
  {
    name: "Déclinaison Algérie ensuite",
    badge: "Structure réutilisable",
    description:
      "La base produit est pensée pour accueillir d'autres diasporas avec des guides localisés, sans diluer le socle Maroc ni surpromettre aujourd'hui.",
    focus: ["Profils localisés", "Guides pratiques", "Cadre modéré"],
  },
] as const;

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: "preparation",
    title: "Préparer son trajet RME",
    description:
      "Une préparation claire vaut souvent plus qu'une promesse de temps réel. Le MVP doit aider à partir sereinement, même sans stack de navigation complète.",
    items: [
      {
        title: "Documents et véhicule",
        body:
          "Centraliser la vérification passeport, carte grise, assurance, contrôle technique, moyens de paiement et copies utiles avant un trajet long.",
      },
      {
        title: "Choix du mode de voyage",
        body:
          "Comparer voiture + ferry, avion + accueil, ou trajet multi-étapes selon budget, saison, volume de bagages et composition du foyer.",
      },
      {
        title: "Fenêtres de départ",
        body:
          "Prévoir marges, repos, traversée, météo et période de pointe plutôt que promettre une heure d'arrivée calculée sans données fiables.",
      },
    ],
  },
  {
    id: "family",
    title: "Voyager avec la famille",
    description:
      "Le produit doit refléter la réalité des grands trajets RME: enfants, seniors, bagages, médicaments, pauses et coordination entre proches.",
    items: [
      {
        title: "Pauses adaptées",
        body:
          "Repérer en priorité des arrêts avec carburant, sanitaires, restauration simple, espace de repos et accès facile pour la famille.",
      },
      {
        title: "Organisation du coffre et des papiers",
        body:
          "Préparer une logique de rangement pour documents, nourriture, chargeurs, pharmacie et affaires de nuit en cas d'attente ou de retard.",
      },
      {
        title: "Contacts de secours",
        body:
          "Enregistrer avant le départ les contacts d'assurance, dépannage, ferry, hébergement, proches, consulat et transport local à l'arrivée.",
      },
    ],
  },
  {
    id: "ports",
    title: "Ports, frontières et traversées",
    description:
      "Le MVP peut déjà être utile en organisant l'information pratique sans prétendre disposer d'un flux officiel ou en direct.",
    items: [
      {
        title: "Checklist traversée",
        body:
          "Préparer billets, pièces d'identité, horaires de présentation, bagages cabine, eau, recharge et copies des justificatifs les plus demandés.",
      },
      {
        title: "Repères de parcours",
        body:
          "Montrer les grands points de passage courants vers le Maroc et les questions à vérifier avant d'arriver au port ou à la frontière.",
      },
      {
        title: "Information honnête",
        body:
          "Signaler clairement ce qui est confirmé par l'utilisateur ou un partenaire activé, et ce qui reste aujourd'hui un guide éditorial ou un futur module.",
      },
    ],
  },
  {
    id: "community",
    title: "Conseils communautaires encadrés",
    description:
      "La valeur différenciante vient de l'expérience diaspora, mais le produit doit rester crédible: pas de faux fil social, pas de contributions non modérées présentées comme actives.",
    items: [
      {
        title: "Retours de terrain à cadrer",
        body:
          "Prévoir des thèmes de remontée comme qualité d'une aire, attente au port, trajet de nuit ou voyage en famille avant d'ouvrir des soumissions live.",
      },
      {
        title: "Conseils éditorialisés",
        body:
          "Proposer dès maintenant des guides, rappels et bonnes pratiques communautaires relus manuellement au lieu de simuler une communauté en temps réel.",
      },
      {
        title: "Préparation institutionnelle",
        body:
          "La structure peut plus tard accueillir modération, administration et diffusion d'informations utiles pour les RME sans prétendre à un partenariat officiel inexistant.",
      },
    ],
  },
];

export const SUPPORT_ACTIONS = [
  "Créer un répertoire personnel avant départ: consulat, assistance assurance, dépannage, hébergement, transport local.",
  "Conserver une version hors-ligne ou imprimée des documents importants et des confirmations de réservation.",
  "Préparer des messages modèles pour prévenir la famille d'un retard, d'une arrivée au port ou d'un changement d'itinéraire.",
] as const;

export const READINESS_NOTES = [
  {
    title: "Ce que l'app fait aujourd'hui",
    body: "Aide à cadrer le trajet, orienter les réservations affiliées quand elles sont réellement configurées, estimer un budget et structurer la préparation RME.",
  },
  {
    title: "Ce qui reste manuel",
    body: "Routing temps réel, données officielles, modération communautaire, tableau de bord admin, assets stores et partenariats transport doivent encore être branchés ou contractualisés.",
  },
  {
    title: "Pourquoi cette approche",
    body: "Un assistant voyage honnête et bien cadré vaut mieux qu'une imitation de navigateur ou de comparateur avec promesses non tenues.",
  },
] as const;
