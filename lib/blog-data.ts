// Blog articles data

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  readingTime: number;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'exercices-etirements-mal-de-dos',
    title: '5 exercices d\'étirements pour soulager le mal de dos',
    excerpt: 'Découvrez 5 exercices simples et efficaces pour soulager vos douleurs dorsales au quotidien.',
    category: 'Conseils santé',
    image: '/images/blog/mal-de-dos.jpg',
    date: '2024-11-10',
    readingTime: 5,
    content: `
Le mal de dos touche une grande partie de la population. Voici 5 exercices d'étirements que vous pouvez pratiquer quotidiennement pour soulager vos douleurs.

## 1. L'étirement du chat-chameau

Cet exercice améliore la mobilité de la colonne vertébrale.

**Comment faire :**
- À quatre pattes, mains sous les épaules et genoux sous les hanches
- Inspirez en creusant le dos (position du chameau)
- Expirez en arrondissant le dos (position du chat)
- Répétez 10 fois lentement

## 2. L'étirement de la torsion allongée

Excellent pour détendre les lombaires et les muscles paravertébraux.

**Comment faire :**
- Allongé sur le dos, genoux pliés
- Laissez tomber les genoux d'un côté tout en gardant les épaules au sol
- Maintenez 30 secondes de chaque côté

## 3. L'étirement du psoas

Le psoas est souvent responsable de douleurs lombaires.

**Comment faire :**
- En position de fente avant
- Le genou arrière au sol
- Poussez doucement le bassin vers l'avant
- Maintenez 30 secondes de chaque côté

## 4. L'étirement du dos en position de l'enfant

Cette posture décompresse la colonne vertébrale.

**Comment faire :**
- À genoux, fesses sur les talons
- Étirez les bras devant vous
- Front au sol
- Respirez profondément pendant 1 minute

## 5. L'étirement des ischio-jambiers

Des ischio-jambiers raides peuvent causer des douleurs lombaires.

**Comment faire :**
- Allongé sur le dos
- Levez une jambe tendue
- Tirez doucement vers vous avec une sangle
- Maintenez 30 secondes de chaque côté

## Conseils importants

- Pratiquez ces exercices quotidiennement
- Ne forcez jamais jusqu'à la douleur
- Respirez profondément pendant les étirements
- En cas de douleur persistante, consultez un ostéopathe

> **Note importante :** Ces exercices ne remplacent pas une consultation ostéopathique. Si vos douleurs persistent, prenez rendez-vous pour un bilan complet.
    `,
  },
  {
    slug: 'osteopathie-bebe-quand-consulter',
    title: 'Ostéopathie pour bébé : à quel âge consulter ?',
    excerpt: 'Tout ce qu\'il faut savoir sur l\'ostéopathie pédiatrique et les bonnes raisons de consulter pour votre bébé.',
    category: 'Ostéopathie pédiatrique',
    image: '/images/blog/osteopathie-bebe.jpg',
    date: '2024-10-28',
    readingTime: 6,
    content: `
L'ostéopathie pédiatrique est une approche douce et non-invasive qui peut aider votre bébé dès les premiers jours de vie.

## Dès la naissance

Il est recommandé de consulter un ostéopathe dans les premières semaines suivant la naissance, particulièrement si :

- L'accouchement a été long ou difficile
- L'accouchement a nécessité des instruments (forceps, ventouse)
- Le bébé est né par césarienne
- Le bébé présente une position en siège

## Les motifs de consultation fréquents

### Coliques et troubles digestifs

Les coliques touchent environ 20% des nourrissons. L'ostéopathie peut aider à :
- Améliorer la mobilité du système digestif
- Réduire les tensions abdominales
- Favoriser un meilleur transit

### Plagiocéphalie (tête plate)

La déformation crânienne est fréquente chez les nouveau-nés. L'ostéopathe peut :
- Identifier les restrictions de mobilité
- Libérer les tensions crâniennes
- Conseiller sur le positionnement

### Troubles du sommeil

Si votre bébé a du mal à s'endormir ou se réveille fréquemment, l'ostéopathie peut :
- Réduire les tensions physiques
- Améliorer son confort
- Favoriser un sommeil plus paisible

### Difficultés d'allaitement

L'ostéopathie peut aider en cas de :
- Difficultés de succion
- Torticolis gênant la prise du sein
- Tensions de la mâchoire

## Déroulement d'une séance

Une consultation pour bébé dure environ 30 à 45 minutes :

1. **Interrogatoire** : Discussion sur la grossesse, l'accouchement et les symptômes
2. **Observation** : Analyse de la posture et des mouvements
3. **Palpation douce** : Techniques très douces et adaptées
4. **Conseils** : Recommandations pour les parents

## À quelle fréquence consulter ?

- **Bilan post-naissance** : Dans les premières semaines
- **Suivi** : Selon les besoins (généralement 1 à 3 séances)
- **Prévention** : Lors des grandes étapes du développement (retournement, position assise, marche)

## Techniques utilisées

L'ostéopathie pédiatrique utilise des techniques :
- Très douces et non-douloureuses
- Adaptées à la fragilité du nourrisson
- Respectueuses du développement de l'enfant

> **Important :** L'ostéopathie ne remplace pas le suivi pédiatrique régulier. Elle est complémentaire.

## Quand consulter en urgence ?

Consultez rapidement un ostéopathe si votre bébé :
- Pleure de manière inconsolable
- Refuse de téter ou de s'alimenter
- A une tête anormalement plate d'un côté
- Tourne toujours la tête du même côté

N'hésitez pas à prendre rendez-vous pour un bilan, même si tout semble aller bien. La prévention est essentielle !
    `,
  },
  {
    slug: 'preparation-course-pied-role-osteopathe',
    title: 'Préparation à la course à pied : le rôle de l\'ostéopathe',
    excerpt: 'Comment l\'ostéopathie peut améliorer vos performances et prévenir les blessures en course à pied.',
    category: 'Ostéopathie sportive',
    image: '/images/blog/course-pied.jpg',
    date: '2024-10-15',
    readingTime: 7,
    content: `
La course à pied est un sport exigeant qui sollicite l'ensemble du corps. L'ostéopathie est un allié précieux pour optimiser vos performances et prévenir les blessures.

## Pourquoi consulter un ostéopathe en tant que coureur ?

### Prévention des blessures

Les coureurs sont exposés à de nombreuses blessures :
- Tendinites (Achille, rotulienne)
- Périostites tibiales
- Syndrome de l'essuie-glace
- Fasciite plantaire
- Douleurs lombaires

L'ostéopathe identifie les déséquilibres qui peuvent mener à ces pathologies.

### Amélioration des performances

En libérant les restrictions de mobilité, l'ostéopathie permet :
- Une meilleure foulée
- Une respiration optimale
- Une récupération plus rapide
- Une économie d'énergie

### Récupération après effort

Après une compétition ou un entraînement intense, l'ostéopathie favorise :
- L'élimination des toxines
- La détente musculaire
- La régénération tissulaire

## Quand consulter ?

### Avant la saison

**3 à 4 semaines avant la reprise**
- Bilan postural complet
- Identification des zones de tension
- Optimisation de la mobilité articulaire
- Conseils personnalisés

### Pendant la saison

**Toutes les 6 à 8 semaines** en entretien, ou :
- Dès l'apparition d'une douleur
- Après un changement de chaussures
- Suite à une chute ou un traumatisme

### Avant une compétition

**10 à 15 jours avant l'événement**
- Optimisation de la mobilité
- Libération des tensions
- Préparation mentale et physique

⚠️ **Évitez de consulter dans les 48h précédant une course importante**

### Après une compétition

**Dans les 7 jours suivant l'effort**
- Récupération musculaire
- Drainage des toxines
- Prévention des blessures

## Le bilan ostéopathique du coureur

L'ostéopathe analyse :

### La posture
- Alignement du bassin
- Équilibre des membres inférieurs
- Position de la colonne

### La mobilité
- Chevilles (cruciales pour la foulée)
- Genoux
- Hanches
- Bassin
- Colonne lombaire et dorsale

### La foulée
- Observation de la course
- Analyse des appuis
- Identification des compensations

## Techniques utilisées

L'ostéopathe utilise diverses techniques :
- **Manipulations articulaires** : Pour restaurer la mobilité
- **Techniques musculaires** : Pour relâcher les tensions
- **Techniques fasciales** : Pour améliorer la glisse tissulaire
- **Techniques crâniennes** : Pour l'équilibre global

## Conseils complémentaires

### Échauffement

Toujours s'échauffer avant de courir :
- 10 à 15 minutes de marche rapide
- Mobilisations articulaires
- Étirements dynamiques

### Hydratation

- Boire avant, pendant et après l'effort
- 500ml par heure d'effort minimum

### Récupération

- Étirements doux après la course
- Repos suffisant entre les entraînements
- Sommeil de qualité (7-9h)

### Équipement

- Chaussures adaptées à votre foulée
- Renouveler tous les 600-800km
- Consulter un podologue si besoin

## Les erreurs à éviter

❌ Augmenter trop rapidement le kilométrage
❌ Négliger les signaux d'alerte du corps
❌ Courir malgré la douleur
❌ Zapper l'échauffement et les étirements
❌ Ne pas varier les terrains d'entraînement

## Complémentarité avec d'autres professionnels

L'ostéopathe travaille en synergie avec :
- **Le médecin du sport** : Pour le diagnostic médical
- **Le podologue** : Pour les semelles orthopédiques
- **Le kiné** : Pour la rééducation post-blessure
- **Le préparateur physique** : Pour l'entraînement

> **Mon conseil :** Écoutez votre corps ! La douleur est un signal d'alarme. Mieux vaut une séance de prévention que plusieurs semaines d'arrêt forcé.

Bonne course à tous ! 🏃‍♀️🏃‍♂️
    `,
  },
  {
    slug: 'femmes-enceintes-soulager-douleurs-lombaires',
    title: 'Femmes enceintes : comment soulager les douleurs lombaires ?',
    excerpt: 'Conseils et techniques pour prévenir et soulager les douleurs de dos pendant la grossesse.',
    category: 'Ostéopathie périnatale',
    image: '/images/blog/grossesse.jpg',
    date: '2024-09-22',
    readingTime: 6,
    content: `
Les douleurs lombaires touchent plus de 50% des femmes enceintes. Voici mes conseils pour les prévenir et les soulager.

## Pourquoi ces douleurs ?

### Changements physiologiques

Pendant la grossesse, le corps subit de nombreuses transformations :

- **Prise de poids** : Augmente la charge sur la colonne
- **Relâchement ligamentaire** : Hormones (relaxine) assouplissent les ligaments
- **Modification de la posture** : Le ventre tire le centre de gravité vers l'avant
- **Pression sur le bassin** : Le bébé appuie sur les structures

### Différents types de douleurs

- **Douleurs lombaires basses** : Liées au poids du bébé
- **Sciatiques** : Compression du nerf sciatique
- **Douleurs pelviennes** : Laxité ligamentaire
- **Douleurs dorsales hautes** : Modification de la posture

## Le rôle de l'ostéopathie

### À chaque trimestre

**1er trimestre** (0-12 semaines)
- Préparation du bassin
- Optimisation de la mobilité
- Gestion des nausées

**2ème trimestre** (13-26 semaines)
- Soulagement des tensions dorsales
- Travail sur le bassin
- Prévention des douleurs

**3ème trimestre** (27-40 semaines)
- Préparation à l'accouchement
- Soulagement des douleurs
- Optimisation de la mobilité pelvienne

### Techniques douces et adaptées

L'ostéopathie périnatale utilise :
- Techniques structurelles douces
- Mobilisations du bassin
- Libération du diaphragme
- Travail sur les ligaments utérins

## Exercices à pratiquer chez soi

### 1. Bascule du bassin

- Debout, dos au mur
- Basculez le bassin pour plaquer le dos au mur
- Relâchez
- 10 répétitions, 3 fois par jour

### 2. Étirement du chat

- À quatre pattes
- Alternez dos rond et dos creux
- 10 mouvements lents

### 3. Étirement latéral

- Assise sur un ballon
- Levez un bras et penchez-vous de l'autre côté
- Maintenez 15 secondes de chaque côté

### 4. Rotation du bassin sur ballon

- Assise sur un ballon
- Faites des cercles avec le bassin
- Dans les deux sens, 1 minute chaque

## Postures à adopter

### Pour dormir

✅ **Sur le côté gauche** (améliore la circulation)
- Coussin entre les genoux
- Coussin sous le ventre
- Oreiller adapté pour la tête

❌ **Éviter** : Dormir sur le dos après le 4ème mois

### Pour se lever

1. Se tourner sur le côté
2. S'asseoir en poussant sur les bras
3. Se lever doucement

### Pour ramasser un objet

- Pliez les genoux
- Gardez le dos droit
- Rapprochez l'objet de vous

### Pour s'asseoir

- Dos bien appuyé
- Pieds à plat au sol
- Genoux à 90°
- Coussin lombaire si besoin

## Accessoires utiles

### La ceinture de grossesse

Peut soulager :
- Les douleurs pelviennes
- Les douleurs lombaires
- Le poids du ventre

**À utiliser** : Lors d'activités prolongées
**À éviter** : Port permanent

### Le coussin d'allaitement

Utile déjà pendant la grossesse :
- Pour dormir
- Pour s'asseoir confortablement
- Pour surélever les jambes

### Le ballon de grossesse

Excellent pour :
- Soulager le dos
- Faire des exercices doux
- Préparer le périnée
- Faciliter le travail lors de l'accouchement

## Activités recommandées

### La natation

- Soulage le poids du ventre
- Muscle en douceur
- Améliore la circulation
- Relaxation

### Le yoga prénatal

- Étirements adaptés
- Travail respiratoire
- Préparation mentale
- Renforcement musculaire doux

### La marche

- 30 minutes par jour
- Rythme modéré
- Bonnes chaussures
- Terrain plat

## Quand consulter en urgence ?

⚠️ **Consultez immédiatement** si :
- Douleur intense et soudaine
- Perte de liquide
- Saignements
- Contractions régulières
- Fièvre
- Perte de sensibilité dans les jambes

## Préparation à l'accouchement

L'ostéopathie aide à :
- Optimiser la mobilité du bassin
- Détendre le périnée
- Améliorer la position du bébé
- Réduire le stress

**Consultation idéale** : 1 mois avant le terme

## Après l'accouchement

N'oubliez pas une consultation post-partum :
- Récupération du bassin
- Rééquilibrage postural
- Soutien de l'allaitement
- Prévention des douleurs

> **Mon conseil :** Ne souffrez pas en silence ! La grossesse doit être vécue sereinement. Une consultation ostéopathique peut vraiment faire la différence.

Prenez soin de vous et de votre bébé ! 🤰💚
    `,
  },
  {
    slug: 'troubles-digestifs-quand-consulter-osteopathe',
    title: 'Troubles digestifs : quand consulter un ostéopathe ?',
    excerpt: 'L\'ostéopathie peut aider à soulager de nombreux troubles digestifs fonctionnels. Découvrez comment.',
    category: 'Conseils santé',
    image: '/images/blog/troubles-digestifs.jpg',
    date: '2024-09-05',
    readingTime: 5,
    content: `
Les troubles digestifs fonctionnels touchent une grande partie de la population. L'ostéopathie peut apporter des solutions naturelles et efficaces.

## Quels troubles digestifs ?

L'ostéopathie peut aider pour :

### Ballonnements et gaz
- Sensation de ventre gonflé
- Flatulences excessives
- Inconfort abdominal

### Constipation
- Difficulté à évacuer
- Selles dures
- Sensation d'évacuation incomplète

### Reflux gastro-œsophagien (RGO)
- Remontées acides
- Brûlures d'estomac
- Régurgitations

### Syndrome de l'intestin irritable
- Douleurs abdominales
- Alternance diarrhée/constipation
- Ballonnements chroniques

### Troubles après chirurgie
- Adhérences post-opératoires
- Inconfort persistant
- Troubles du transit

## Comment l'ostéopathie peut-elle aider ?

### Approche globale

L'ostéopathe considère que :
- Le système digestif est en lien avec le reste du corps
- Les tensions mécaniques peuvent perturber le fonctionnement
- La mobilité des organes est essentielle

### Techniques utilisées

**Mobilisation viscérale**
- Améliore la mobilité des organes
- Favorise la circulation sanguine
- Stimule le péristaltisme

**Travail sur le diaphragme**
- Muscle clé de la digestion
- Améliore la respiration
- Réduit les tensions

**Libération du bassin**
- Améliore le transit
- Libère les tensions sur le côlon
- Favorise la circulation

**Travail crânien**
- Régule le système nerveux
- Réduit le stress
- Améliore la fonction vagale

## Quand consulter ?

### Signes d'alerte

Consultez un ostéopathe si vous avez :
- Des troubles digestifs récurrents
- Essayé sans succès les traitements classiques
- Des symptômes après une chirurgie
- Du stress impactant votre digestion
- Des douleurs abdominales chroniques

### ⚠️ Quand consulter un médecin ?

**Consultez d'abord un médecin** en cas de :
- Perte de poids inexpliquée
- Sang dans les selles
- Douleur intense et soudaine
- Fièvre
- Vomissements persistants
- Changement brutal du transit

> **Important :** L'ostéopathie traite les troubles fonctionnels, pas les pathologies organiques.

## Déroulement d'une séance

### 1. Interrogatoire (15 min)

- Historique des troubles
- Alimentation
- Stress
- Antécédents médicaux et chirurgicaux

### 2. Examen (10 min)

- Palpation abdominale
- Tests de mobilité
- Observation posturale

### 3. Traitement (20-30 min)

- Techniques viscérales
- Mobilisations douces
- Travail sur le diaphragme
- Équilibrage global

### 4. Conseils (5 min)

- Alimentation
- Hydratation
- Exercices
- Gestion du stress

## Conseils complémentaires

### Alimentation

✅ **À privilégier**
- Fibres (fruits, légumes, céréales complètes)
- Eau (1,5 à 2L par jour)
- Probiotiques (yaourt, kéfir)
- Repas réguliers et calmes

❌ **À limiter**
- Aliments gras et frits
- Épices fortes
- Alcool et café
- Repas copieux le soir

### Hydratation

- Boire régulièrement tout au long de la journée
- Eau plate de préférence
- Tisanes digestives (menthe, fenouil, camomille)

### Activité physique

- 30 minutes de marche par jour
- Stimule le transit
- Réduit le stress
- Améliore la digestion

### Gestion du stress

Le stress perturbe la digestion :
- Relaxation (cohérence cardiaque, méditation)
- Sommeil de qualité
- Activités plaisir
- Exercices de respiration

## Exercices à pratiquer

### Massage abdominal

- En position allongée
- Massez le ventre dans le sens des aiguilles d'une montre
- Mouvements doux et circulaires
- 5 minutes matin et soir

### Respiration diaphragmatique

- Allongé sur le dos
- Mains sur le ventre
- Inspirez en gonflant le ventre
- Expirez en le rentrant
- 10 respirations, 3 fois par jour

### Posture de torsion

- Allongé, genoux pliés
- Laissez tomber les genoux d'un côté
- Épaules au sol
- 1 minute de chaque côté

## Fréquence des consultations

### Phase aiguë
- 2 à 3 séances espacées de 2 semaines
- Évaluation de l'amélioration

### Entretien
- 1 séance tous les 2 à 3 mois
- Prévention des récidives

## Complémentarité

L'ostéopathie fonctionne bien en complément de :
- **Nutrition** : Consultation avec un nutritionniste
- **Médecine** : Traitement médical si nécessaire
- **Psychologie** : Si stress ou anxiété importante

> **Mon conseil :** Les troubles digestifs ont souvent une origine multifactorielle. Une approche globale (ostéopathie + alimentation + gestion du stress) donne les meilleurs résultats.

N'attendez pas que les symptômes deviennent invalidants pour consulter ! 🌿
    `,
  },
];

export const BLOG_CATEGORIES = [
  'Tous les articles',
  'Conseils santé',
  'Ostéopathie pédiatrique',
  'Ostéopathie sportive',
  'Ostéopathie périnatale',
  'Bien-être au quotidien',
];
