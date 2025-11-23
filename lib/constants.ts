// Informations du cabinet (fictives pour la démonstration)

export const CABINET_INFO = {
  // Identité de l'ostéopathe
  firstName: 'Sophie',
  lastName: 'MARTIN',
  fullName: 'Sophie MARTIN',
  title: 'Ostéopathe D.O.',

  // Informations réglementaires
  rpps: '10123456789', // Numéro RPPS (11 chiffres)
  arsRegistration: {
    region: 'Île-de-France',
    date: '15 septembre 2015',
  },

  // Diplômes
  diploma: {
    school: 'Institut Supérieur d\'Ostéopathie de Paris (ISO Paris)',
    year: 2015,
    title: 'Diplôme d\'Ostéopathie (D.O.)',
  },

  // Formation continue
  continuousEducation: '60 heures minimum par période de 3 ans (Norme AFNOR)',

  // Coordonnées du cabinet
  address: {
    street: '42 Rue de la Santé',
    postalCode: '75014',
    city: 'Paris',
    fullAddress: '42 Rue de la Santé, 75014 Paris',
    coordinates: {
      lat: 48.8344,
      lng: 2.3387,
    },
  },

  // Contact
  phone: '01 42 35 68 90',
  email: 'contact@osteo-sophie-martin.fr',

  // Horaires
  openingHours: {
    monday: { open: '09:00', close: '19:00' },
    tuesday: { open: '09:00', close: '19:00' },
    wednesday: { open: '09:00', close: '19:00' },
    thursday: { open: '09:00', close: '19:00' },
    friday: { open: '09:00', close: '19:00' },
    saturday: { open: '09:00', close: '13:00' },
    sunday: null,
  },

  // Informations juridiques
  legal: {
    businessType: 'Entreprise individuelle',
    siret: '89012345600012',
    tva: 'Non applicable (Art. 261-4-1° du CGI)',
  },

  // Assurance RCP
  insurance: {
    company: 'MMA Assurances',
    address: '14 Boulevard Marie et Alexandre Oyon, 72030 Le Mans Cedex 9',
    policyNumber: 'RCP-OST-2024-789456',
    phone: '02 43 47 47 47',
    guarantees: {
      perIncident: '8 000 000 €',
      perYear: '15 000 000 €',
    },
  },

  // Hébergement du site
  hosting: {
    company: 'OVH SAS',
    address: '2 rue Kellermann, 59100 Roubaix, France',
    phone: '09 72 10 10 07',
  },

  // Expérience professionnelle
  experience: {
    years: 9,
    description: 'Ostéopathe D.O. diplômée depuis 2015, j\'exerce en cabinet libéral à Paris dans le 14ème arrondissement. Spécialisée dans l\'accompagnement des femmes enceintes, des nourrissons et des sportifs, je propose une approche globale et personnalisée de l\'ostéopathie.',
    specializations: [
      'Ostéopathie périnatale (femmes enceintes et post-partum)',
      'Ostéopathie pédiatrique (nourrissons et enfants)',
      'Ostéopathie sportive',
      'Troubles musculo-squelettiques',
      'Troubles digestifs fonctionnels',
    ],
  },

  // Approche et philosophie
  philosophy: {
    title: 'Une approche globale du corps humain',
    description: 'L\'ostéopathie repose sur une vision holistique de la santé. Je considère le corps comme un ensemble cohérent où chaque structure est en relation avec les autres. Mon objectif est d\'identifier et de traiter les déséquilibres à l\'origine de vos troubles, en respectant l\'anatomie et la physiologie de chacun.',
    values: [
      {
        title: 'Écoute et bienveillance',
        description: 'Chaque patient est unique. Je prends le temps d\'écouter vos besoins et d\'adapter mon traitement à votre situation personnelle.',
      },
      {
        title: 'Formation continue',
        description: 'Je me forme régulièrement aux dernières avancées de l\'ostéopathie pour vous offrir les meilleures techniques de soin.',
      },
      {
        title: 'Approche préventive',
        description: 'Au-delà du traitement des douleurs, je vous accompagne dans la prévention des troubles et l\'optimisation de votre bien-être.',
      },
    ],
  },
};

// Prestations et tarifs
export const SERVICES = [
  {
    id: 'general',
    name: 'Ostéopathie générale (adultes)',
    slug: 'osteopathie-generale',
    description: 'Prise en charge des troubles fonctionnels chez l\'adulte',
    duration: '45-60 min',
    price: 70,
    icon: 'User',
    motifs: [
      'Douleurs musculo-squelettiques (dos, cervicales, épaules, hanches)',
      'Maux de tête et migraines',
      'Troubles digestifs fonctionnels',
      'Stress et tensions',
      'Troubles du sommeil',
      'Fatigue chronique',
      'Sciatiques et cruralgies',
      'Tendinites et entorses',
    ],
    details: 'La consultation adulte dure entre 45 et 60 minutes. Après un interrogatoire complet et des tests de mobilité, je réalise un traitement ostéopathique adapté à vos besoins. Des conseils personnalisés vous sont donnés en fin de séance.',
  },
  {
    id: 'pediatric',
    name: 'Ostéopathie pédiatrique (nourrissons et enfants)',
    slug: 'osteopathie-pediatrique',
    description: 'Soins doux et adaptés aux bébés et enfants',
    duration: '30-45 min',
    price: 70,
    icon: 'Baby',
    motifs: [
      'Coliques et régurgitations',
      'Troubles du sommeil',
      'Plagiocéphalie (tête plate)',
      'Difficultés de succion ou d\'allaitement',
      'Torticolis congénital',
      'Agitation et pleurs inexpliqués',
      'Troubles ORL récidivants',
      'Accompagnement du développement psychomoteur',
    ],
    details: 'Les techniques utilisées pour les nourrissons sont très douces et non-invasives. La consultation se déroule en présence des parents. Je prends le temps d\'expliquer chaque geste et de répondre à vos questions.',
  },
  {
    id: 'perinatal',
    name: 'Ostéopathie périnatale (grossesse et post-partum)',
    slug: 'osteopathie-perinatale',
    description: 'Accompagnement de la femme enceinte et jeune maman',
    duration: '45-60 min',
    price: 75,
    icon: 'Heart',
    motifs: [
      'Douleurs lombaires et sciatiques',
      'Douleurs ligamentaires',
      'Troubles digestifs (nausées, reflux, constipation)',
      'Préparation à l\'accouchement',
      'Douleurs pelviennes et pubalgies',
      'Récupération post-partum',
      'Douleurs liées à l\'allaitement (cervicales, dorsales)',
      'Baby blues et fatigue',
    ],
    details: 'L\'ostéopathie accompagne la femme tout au long de sa grossesse et après l\'accouchement. Les techniques sont adaptées au trimestre de grossesse et respectent le confort de la maman et la sécurité du bébé.',
  },
  {
    id: 'sport',
    name: 'Ostéopathie sportive',
    slug: 'osteopathie-sportive',
    description: 'Prévention et récupération pour les sportifs',
    duration: '60 min',
    price: 80,
    icon: 'Activity',
    motifs: [
      'Préparation avant compétition',
      'Récupération après effort',
      'Amélioration des performances',
      'Prévention des blessures',
      'Traitement des tendinites et contractures',
      'Entorses et traumatismes',
      'Troubles de la posture liés au sport',
      'Optimisation de la mobilité articulaire',
    ],
    details: 'L\'ostéopathie sportive vise à optimiser les capacités physiques du sportif, prévenir les blessures et accélérer la récupération. Un bilan postural et des tests spécifiques permettent d\'identifier les déséquilibres.',
  },
  {
    id: 'senior',
    name: 'Ostéopathie des seniors',
    slug: 'osteopathie-seniors',
    description: 'Maintien de la mobilité et du bien-être',
    duration: '45-60 min',
    price: 70,
    icon: 'Users',
    motifs: [
      'Douleurs articulaires liées à l\'arthrose',
      'Troubles de l\'équilibre',
      'Raideurs articulaires',
      'Amélioration de la mobilité',
      'Troubles digestifs',
      'Troubles du sommeil',
      'Prévention des chutes',
      'Maintien de l\'autonomie',
    ],
    details: 'L\'ostéopathie accompagne les seniors pour maintenir leur mobilité, soulager les douleurs chroniques et améliorer leur qualité de vie. Les techniques sont douces et respectueuses du corps.',
  },
];

// Moyens de paiement
export const PAYMENT_METHODS = [
  'Espèces',
  'Carte bancaire',
  'Chèque',
  'Virement bancaire',
];

// Politique d'annulation
export const CANCELLATION_POLICY = 'Toute consultation non annulée au moins 24 heures à l\'avance pourra être facturée.';

// Mutuelles partenaires (exemples)
export const INSURANCE_PARTNERS = [
  { name: 'Harmonie Mutuelle', reimbursement: '3 à 5 séances/an, 30-60€/séance' },
  { name: 'MGEN', reimbursement: '3 séances/an, 30€/séance' },
  { name: 'MAIF', reimbursement: '4 séances/an, 40€/séance' },
  { name: 'Mutuelle Générale', reimbursement: '3 séances/an, 50€/séance' },
  { name: 'Axa', reimbursement: '4 séances/an, 35€/séance' },
  { name: 'Allianz', reimbursement: '3 séances/an, 40€/séance' },
];

// Témoignages
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marie D.',
    rating: 5,
    comment: 'Sophie m\'a accompagnée tout au long de ma grossesse. Grâce à ses soins, j\'ai pu soulager mes douleurs lombaires et me préparer sereinement à l\'accouchement. Je la recommande vivement !',
    source: 'Google',
    date: '2024-10-15',
  },
  {
    id: 2,
    name: 'Thomas L.',
    rating: 5,
    comment: 'Ostéopathe très professionnelle et à l\'écoute. Elle a réussi à soulager mes douleurs cervicales chroniques en quelques séances. Cabinet agréable et bien situé.',
    source: 'Doctolib',
    date: '2024-09-28',
  },
  {
    id: 3,
    name: 'Isabelle M.',
    rating: 5,
    comment: 'J\'ai consulté pour mon bébé de 2 mois qui souffrait de coliques. Sophie a été très douce et professionnelle. Les résultats ont été immédiats ! Merci infiniment.',
    source: 'Google',
    date: '2024-11-02',
  },
  {
    id: 4,
    name: 'Pierre R.',
    rating: 5,
    comment: 'En tant que coureur régulier, je consulte Sophie pour prévenir les blessures et optimiser mes performances. Son approche globale fait vraiment la différence.',
    source: 'Doctolib',
    date: '2024-10-20',
  },
];

// Motifs de consultation fréquents (pour la page d'accueil)
export const COMMON_REASONS = [
  {
    id: 1,
    icon: 'Bone',
    title: 'Douleurs musculaires et articulaires',
    description: 'Dos, cervicales, épaules, hanches, genoux',
  },
  {
    id: 2,
    icon: 'Activity',
    title: 'Maux de dos',
    description: 'Lombalgie, sciatique, hernie discale',
  },
  {
    id: 3,
    icon: 'Heart',
    title: 'Troubles digestifs',
    description: 'Ballonnements, reflux, constipation',
  },
  {
    id: 4,
    icon: 'Brain',
    title: 'Maux de tête / Migraines',
    description: 'Céphalées, tensions crâniennes',
  },
  {
    id: 5,
    icon: 'Baby',
    title: 'Ostéopathie du nourrisson',
    description: 'Coliques, plagiocéphalie, troubles du sommeil',
  },
  {
    id: 6,
    icon: 'Users',
    title: 'Suivi de grossesse',
    description: 'Douleurs lombaires, préparation à l\'accouchement',
  },
  {
    id: 7,
    icon: 'Zap',
    title: 'Ostéopathie sportive',
    description: 'Prévention, récupération, performances',
  },
  {
    id: 8,
    icon: 'Moon',
    title: 'Troubles du sommeil',
    description: 'Insomnie, fatigue chronique, stress',
  },
];

// Réseaux sociaux et liens
export const SOCIAL_LINKS = {
  doctolib: 'https://www.doctolib.fr', // URL fictive
  googleMaps: `https://www.google.com/maps/search/?api=1&query=${CABINET_INFO.address.coordinates.lat},${CABINET_INFO.address.coordinates.lng}`,
};

// Messages légaux
export const LEGAL_NOTICES = {
  competenceLimits: 'L\'ostéopathie s\'adresse aux troubles fonctionnels du corps humain. En présence de pathologies organiques nécessitant une intervention thérapeutique, médicale, chirurgicale, médicamenteuse ou par agents physiques, vous serez orienté(e) vers un médecin.',
  referralCases: 'L\'ostéopathe réfère le patient vers un médecin dans les cas suivants : symptômes nécessitant un diagnostic ou un traitement médical, persistance ou aggravation des symptômes, troubles excédant son champ de compétences.',
  professionalSecret: 'Conformément aux articles 226-13 et 226-14 du Code pénal et à l\'article L1110-4 du Code de la Santé Publique, toutes les informations vous concernant sont couvertes par le secret professionnel.',
  noRefund: 'L\'ostéopathie n\'est pas remboursée par la Sécurité Sociale. Cependant, de nombreuses mutuelles proposent une prise en charge partielle ou totale des séances d\'ostéopathie (généralement 1 à 5 séances par an, entre 20€ et 60€ par séance selon les contrats). Contactez votre mutuelle pour connaître vos droits au remboursement.',
};

// Réglementation applicable
export const REGULATIONS = [
  { name: 'Loi n°2002-303 du 4 mars 2002', description: 'Loi Kouchner relative aux droits des malades' },
  { name: 'Décret n°2007-435 du 25 mars 2007', description: 'Actes et conditions d\'exercice de l\'ostéopathie' },
  { name: 'Décret n°2014-1043 du 12 septembre 2014', description: 'Formation en ostéopathie' },
  { name: 'Décret n°2014-1347 du 10 novembre 2014', description: 'Assurance responsabilité civile professionnelle' },
  { name: 'Ordonnance n°2017-50 du 19 janvier 2017', description: 'Profession d\'ostéopathe' },
];
