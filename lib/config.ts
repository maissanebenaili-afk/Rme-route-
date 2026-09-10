export type CommunityProfile = {
  id: string;
  label: string;
  flag: string;
  audience: string;
  corridor: string;
  defaultOrigin: string;
  defaultDestination: string;
  communityTips: string[];
  practicalInfo: string[];
  usefulStops: string[];
  familyHelpers: string[];
};

export const COMMUNITY_PROFILES: CommunityProfile[] = [
  {
    id: 'morocco',
    label: 'Maroc',
    flag: '🇲🇦',
    audience: "MRE et familles qui roulent entre l'Europe et le bled.",
    corridor: 'Europe ↔ Maroc',
    defaultOrigin: 'Paris, France',
    defaultDestination: 'Tanger, Maroc',
    communityTips: [
      'Préparez une checklist documents, assurance et bagages avant les grands départs.',
      'Anticipez les pauses longues pour enfants, aînés et covoiturage familial.',
    ],
    practicalInfo: [
      "Espace ports, ferries et formalités : informatif pour l'instant, sans flux temps réel.",
      'Les alertes frontières seront ajoutées uniquement avec des sources vérifiées.',
    ],
    usefulStops: [
      '⛽ Stations-service',
      '🕌 Mosquées',
      '🥘 Halal',
      '🛏️ Repos famille',
      '🛂 Ports & frontières',
    ],
    familyHelpers: ['Checklist coffre et papiers', 'Pause enfants', 'Budget ferry + route'],
  },
  {
    id: 'algeria',
    label: 'Algérie',
    flag: '🇩🇿',
    audience: 'Scénario diaspora prêt pour futurs contenus communautaires.',
    corridor: 'Europe ↔ Algérie',
    defaultOrigin: 'Paris, France',
    defaultDestination: 'Alger, Algérie',
    communityTips: [
      "Préparez les étapes longues avec une marge sur l'arrivée portuaire.",
      'Centralisez vos repères utiles pour les traversées familiales.',
    ],
    practicalInfo: [
      'Ce couloir est présenté comme espace bêta de préparation communautaire.',
      "Aucune donnée portuaire en direct n'est encore intégrée.",
    ],
    usefulStops: ['⛽ Carburant', '☕ Pauses sûres', '🕌 Prières', '👨‍👩‍👧‍👦 Aide famille', '🛳️ Ports'],
    familyHelpers: ['Documents de bord', 'Répartition bagages', 'Repères traversée'],
  },
  {
    id: 'portugal',
    label: 'Portugal',
    flag: '🇵🇹',
    audience: 'Structure légère pour trajets diaspora et retours au pays.',
    corridor: 'Europe ↔ Portugal',
    defaultOrigin: 'Paris, France',
    defaultDestination: 'Porto, Portugal',
    communityTips: [
      'Préservez des points de rendez-vous clairs pour les départs groupés.',
      "Gardez une liste simple d'arrêts utiles à partager à la famille.",
    ],
    practicalInfo: [
      'Module communauté prévu pour conseils route et retours saisonniers.',
      'Les recommandations affichées ici sont des espaces de contenu originaux, pas des flux partenaires.',
    ],
    usefulStops: ['⛽ Route', '🍽️ Repas', '👶 Famille', '🏨 Nuit', '📍 Rendez-vous'],
    familyHelpers: ['Étapes nuit', 'Conseils coffre', 'Départs groupés'],
  },
  {
    id: 'romania',
    label: 'Roumanie',
    flag: '🇷🇴',
    audience: "Préparation d'une variante communautaire multi-pays.",
    corridor: 'Europe ↔ Roumanie',
    defaultOrigin: 'Paris, France',
    defaultDestination: 'Bucarest, Roumanie',
    communityTips: [
      'Mettez de côté des arrêts repères pour les très longs trajets routiers.',
      "Partagez des conseils pratiques entre conducteurs d'une même famille.",
    ],
    practicalInfo: [
      'Section informative destinée à recevoir de futurs guides communautaires.',
      "Pas d'intégration de trafic ni de douane en temps réel à ce stade.",
    ],
    usefulStops: ['🛣️ Longues étapes', '☕ Repos', '👨‍👩‍👧‍👦 Famille', '🧰 Dépannage', '📍 Repères'],
    familyHelpers: ['Nuitée route', 'Planifier relais', 'Documents passagers'],
  },
  {
    id: 'turkey',
    label: 'Turquie',
    flag: '🇹🇷',
    audience: 'Espace de préparation pour futures communautés longue distance.',
    corridor: 'Europe ↔ Turquie',
    defaultOrigin: 'Paris, France',
    defaultDestination: 'Istanbul, Turquie',
    communityTips: [
      'Préparez les relais conducteur pour les trajets les plus longs.',
      'Centralisez les conseils de traversée par famille ou groupe.',
    ],
    practicalInfo: [
      'Bloc informatif en version bêta pour frontières et arrêts pratiques.',
      'Les informations critiques devront venir de sources officielles avant affichage en direct.',
    ],
    usefulStops: ['⛽ Carburant', '🛏️ Repos', '🕌 Prières', '🧒 Enfants', '🛂 Frontières'],
    familyHelpers: ['Relais conducteur', 'Pause enfants', 'Préparer papiers'],
  },
  {
    id: 'african-diasporas',
    label: 'Diasporas africaines',
    flag: '🌍',
    audience: "Scaffold commun pour plusieurs couloirs Europe ↔ pays d'origine.",
    corridor: "Europe ↔ pays d'origine",
    defaultOrigin: 'Paris, France',
    defaultDestination: 'Dakar, Sénégal',
    communityTips: [
      'Conservez une base de conseils originaux par communauté, langue et saison.',
      'Utilisez cet espace comme guide pratique, pas comme promesse de données vérifiées en direct.',
    ],
    practicalInfo: [
      "Section conçue pour accueillir des variantes localisées sans dupliquer toute l'application.",
      'Les futurs contenus devront être validés communauté par communauté.',
    ],
    usefulStops: [
      '📍 Repères utiles',
      '👨‍👩‍👧‍👦 Famille',
      '🍽️ Restauration',
      '⛽ Carburant',
      '🧳 Préparation',
    ],
    familyHelpers: ['Checklist départ', 'Aide bagages', 'Conseils voyage groupe'],
  },
];

export const DEFAULT_COMMUNITY_ID = COMMUNITY_PROFILES[0].id;
export const MARKETS = {
  MA: {
    name: "RME Voyage Maroc",
    flag: "🇲🇦",
    defaultOrigin: "Paris, France",
    defaultDestination: "Tanger, Maroc"
  },
  DZ: {
    name: "DZ Route Algérie",
    flag: "🇩🇿",
    defaultOrigin: "Paris, France",
    defaultDestination: "Alger, Algérie"
  }
} as const;
