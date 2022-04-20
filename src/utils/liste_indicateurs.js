import localStorage from "../utils/localStorage";

// export const getDrugListWithLocalStorage = async () => {
//   const customDrugs = await localStorage.getCustomDrugs();
//   const tempList = [...INDICATEURS_LISTE];
//   tempList.push(...customDrugs);
//   return tempList;
// };

export const INDICATEURS_LISTE_PAR_CATEGORIE = {
  "Les plus courants": [
    "Humeur matinale",
    "Humeur générale",
    "Humeur à la mi-journée",
    "Humeur au coucher",
    "Qualité sommeil",
    "Durée sommeil",
    "Facilité endormissement",
    "Se coucher tôt",
    "Anxiété",
    "Je suis fier(e) de moi",
    "Fatigue",
    "Je fais une activité plaisir",
    "Faire mes tâches ménagères",
  ],
  "Emotions/sentiments": [
    "Humeur générale",
    "Anxiété",
    "Colère",
    "Angoisse",
    "Confiance en soi",
    "Idées noires",
    "Honte",
    "Motivation",
    "Plaisir",
    "Energie",
    "Stress",
    "Estime de soi",
    "Irritabilité",
    "Découragement",
    "Euphorie",
    "Espoir",
    "Tristesse",
    "Culpabilité",
    "Optimisme",
    "Inquiétude",
    "Libido",
    "Idées suicidaires",
    "Humeur matinale",
    "Humeur à la mi-journée",
    "Humeur au coucher",
  ],
  "Manifestations physiques": [
    "Fatigue",
    "Mal au ventre",
    "Appétit",
    "Nausées",
    "Respiration rapide",
    "Tachycardie",
    "Vertiges",
    "Prise de poids",
    "Perte de poids",
    "Douleur",
    "Maux de tête",
    "Agitation",
  ],
  Pensées: [
    "Je suis fier(e) de moi",
    "Je me sens bien",
    "Je suis surmené(e)",
    "J’ai besoin de contrôler",
    "Je vais y arriver",
    "Je suis à l’aise dans mes relations sociales",
    "Tout le monde est contre moi",
    "Je suis à la hauteur des (de mes) exigences",
    "Je me sens harcelé(e)",
    "Je peux compter sur mon entourage",
    "Je ne veux voir personne",
    "Je me sens seul(e)",
    "Je me sens jugé(e)/critiqué(e)  ",
  ],
  Comportements: [
    "Procrastination",
    "Je me projette dans l’avenir",
    "Crise de larmes",
    "Ruminations sur le passé",
    "Auto-mutilation",
    "Je me compare aux autres",
    "Consommation d’alcool",
    "Crise de colère",
    "Crise de boulimie",
    "J’accepte l’aide que l’on m’apporte",
    "J’ai réussi à affronter une de mes angoisses",
    "Comportement sexuel à risques",
    "Je vais chercher du soutien",
    "Inhibition",
    "Grignotage entre les repas",
    "J’exprime mes sentiments",
    "J’exprime mes sentiments négatifs sans culpabilité",
    "Achats inhabituels",
    "Désinhibition",
  ],
  "Se faire plaisir": [
    "Je fais une activité plaisir",
    "Trouver 3 choses positives de la journée",
    "Je m’accorde une pause",
    "Me promener dehors",
    "J’aide quelqu’un",
    "Je fais un de mes hobbies",
    "Je soigne mon apparence",
    "Passer du temps avec ceux que j’apprécie",
    "Contact social",
    "J’ai pris mon temps pour manger",
    "Je pense à une chose positive",
    'Faire un achat "plaisir" pour soi',
  ],
  "Prendre soin de sa santé": [
    "Qualité sommeil",
    "Durée sommeil",
    "Facilité endormissement",
    "Se coucher tôt",
    "Horaires réguliers de sommeil",
    "30 min d’activité physique",
    "J’ai cuisiné mes plats",
    "J'ai pris une pause au travail",
    "Manger 5 fruits et légumes",
    "Grignotage entre les repas",
    "J’ai pris correctement mon traitement",
    "Faire ma cohérence cardiaque",
    "Je limite mon temps d’écran",
    "Me promener dehors",
    "Je ne fume pas",
    "Je respecte mes limites",
    "Méditation",
  ],
  "Au quotidien": [
    "Faire mes tâches ménagères",
    "Me lever le matin",
    "Faire le bilan des choses que j’ai réalisées aujourd’hui",
    "Soigner son apparence",
    "J’ai fait mes courses",
    "S’occuper de son hygiène",
    "Se fixer des objectifs",
    "J'ai réalisé mes objectifs",
    "Faire mes tâches administratives",
    "J’ai réalisé un planning de ce que j’ai à faire",
    "Communication avec mon entourage",
  ],
};

export const INDICATEURS_LISTE = Object.values(INDICATEURS_LISTE_PAR_CATEGORIE).reduce(
  (acc, curr) => [...acc, ...curr],
  []
);
