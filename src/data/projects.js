/**
 * Portfolio projects data
 * Each project contains metadata and image paths from the public directory
 */

const projects = [
  {
    id: 'paris-france',
    title: 'Appartement Paris, France',
    category: 'Architecture Intérieure',
    description: 'Rénovation complète d\'un appartement parisien alliant élégance classique et design contemporain. Chaque espace a été repensé pour maximiser la lumière naturelle et créer une atmosphère raffinée.',
    location: 'Paris, France',
    year: '2024',
    images: [
      '/images/portfolio/paris-france/486863055_1057547023059496_5020478667865636468_n.jpg',
      '/images/portfolio/paris-france/486946501_1057546976392834_3981600361938772444_n.jpg',
      '/images/portfolio/paris-france/487306720_1057547229726142_860488963698072844_n (1).jpg',
      '/images/portfolio/paris-france/487407630_1057547163059482_3449294660296343306_n.jpg',
    ],
  },
  {
    id: 'cabinet-podologie',
    title: 'Cabinet de Podologie',
    category: 'Aménagement Sur-Mesure',
    description: 'Conception et aménagement d\'un cabinet médical de podologie, alliant fonctionnalité professionnelle et esthétique apaisante pour le confort des patients.',
    location: 'Tunisie',
    year: '2024',
    images: [
      '/images/portfolio/cabinet-podologie/487055657_1057531453061053_6429211202038797536_n.jpg',
      '/images/portfolio/cabinet-podologie/487369593_1057531489727716_8066015105639930876_n.jpg',
      '/images/portfolio/cabinet-podologie/487385115_1057531573061041_4908193032364101280_n.jpg',
      '/images/portfolio/cabinet-podologie/487470581_1057531429727722_7342540949944505112_n.jpg',
    ],
  },
  {
    id: 'residance-mharbech',
    title: 'Résidence Mharbech',
    category: 'Architecture Intérieure',
    description: 'Aménagement intérieur complet d\'une résidence moderne à Mharbech. Un projet ambitieux mêlant matériaux nobles, design épuré et solutions sur-mesure pour chaque pièce.',
    location: 'Mharbech, Tunisie',
    year: '2024',
    images: [
      '/images/portfolio/residance-mharbech/486647542_1057405689740296_7584105188495821796_n.jpg',
      '/images/portfolio/residance-mharbech/486667687_1057405419740323_8314356920021032019_n.jpg',
      '/images/portfolio/residance-mharbech/486675681_1057405529740312_5219770757116210490_n.jpg',
      '/images/portfolio/residance-mharbech/486689160_1057405489740316_4997728313210740606_n.jpg',
      '/images/portfolio/residance-mharbech/486716207_1057405543073644_8791084663571294987_n.jpg',
      '/images/portfolio/residance-mharbech/487389007_1057405573073641_6761784492454275568_n.jpg',
    ],
  },
  {
    id: 'projet-4',
    title: 'Villa Contemporaine',
    category: 'Rénovation',
    description: 'Rénovation et décoration d\'une villa contemporaine avec une attention particulière portée aux volumes, à la luminosité et au choix des matériaux haut de gamme.',
    location: 'Tunisie',
    year: '2025',
    images: [
      '/images/portfolio/projet-4/518331728_1144025397744991_7245478233109642898_n.jpg',
      '/images/portfolio/projet-4/518377917_1144025351078329_5304689814679322841_n.jpg',
      '/images/portfolio/projet-4/518397877_1143946017752929_5926100551211159190_n.jpg',
      '/images/portfolio/projet-4-sub/656678470_1346033610877501_4160344796294513560_n.jpg',
      '/images/portfolio/projet-4-sub/657329400_1346033630877499_6576489408820056166_n.jpg',
      '/images/portfolio/projet-4-sub/657874769_1346033614210834_6819738056540507567_n.jpg',
    ],
  },
  {
    id: 'projet-5',
    title: 'Espace Commercial',
    category: 'Aménagement Sur-Mesure',
    description: 'Conception d\'un espace commercial premium, pensé pour sublimer l\'expérience client à travers un agencement fluide et un design d\'intérieur sophistiqué.',
    location: 'Tunisie',
    year: '2024',
    images: [
      '/images/portfolio/projet-5/481287616_1058217466325785_7197530932275917326_n (1).jpg',
      '/images/portfolio/projet-5/486633127_1058217502992448_2511749314939478440_n.jpg',
      '/images/portfolio/projet-5/487201637_1058217512992447_19183065012884490_n.jpg',
      '/images/portfolio/projet-5/487240330_1058217472992451_5716427979706335248_n.jpg',
    ],
  },
  {
    id: 'projet-6',
    title: 'Design Intérieur Moderne',
    category: 'Design & Modélisation 3D',
    description: 'Projet de design intérieur moderne combinant modélisation 3D avancée et réalisation sur-mesure. Un équilibre parfait entre fonctionnalité et esthétique.',
    location: 'Tunisie',
    year: '2024',
    images: [
      '/images/portfolio/projet-6/486815553_1057544803059718_1230680352218054465_n.jpg',
      '/images/portfolio/projet-6/487109416_1057544709726394_1238543567767131629_n.jpg',
      '/images/portfolio/projet-6/487283619_1057544449726420_1862382285099144169_n.jpg',
      '/images/portfolio/projet-6/487384013_1057544703059728_2573411686786308861_n.jpg',
    ],
  },
  {
    id: 'projet-7',
    title: 'Rénovation Luxe',
    category: 'Rénovation',
    description: 'Rénovation luxueuse d\'un intérieur haut de gamme. Matériaux premium, finitions impeccables et design pensé dans les moindres détails pour un résultat exceptionnel.',
    location: 'Tunisie',
    year: '2024',
    images: [
      '/images/portfolio/projet-7/487161839_1058223126325219_6035687888206241318_n.jpg',
      '/images/portfolio/projet-7/487179533_1058222836325248_2474505741668643254_n.jpg',
      '/images/portfolio/projet-7/487313332_1058222932991905_2868458452263464948_n.jpg',
      '/images/portfolio/projet-7/487406865_1058222849658580_3892016505649048499_n.jpg',
    ],
  },
  {
    id: 'projet-8',
    title: 'Aménagement Bureau',
    category: 'Aménagement Sur-Mesure',
    description: 'Aménagement d\'un espace de bureau professionnel, conçu pour favoriser la productivité tout en offrant un cadre de travail élégant et inspirant.',
    location: 'Tunisie',
    year: '2024',
    images: [
      '/images/portfolio/projet-8/482019286_1044942854319913_2682986280919652672_n.jpg',
      '/images/portfolio/projet-8/483929109_1044943234319875_315993826958381115_n.jpg',
      '/images/portfolio/projet-8/484147567_1044943144319884_7703694651280687327_n.jpg',
      '/images/portfolio/projet-8/484164441_1044943284319870_1475416367196423504_n.jpg',
    ],
  },
  {
    id: 'projet-9',
    title: 'Salon Contemporain',
    category: 'Architecture Intérieure',
    description: 'Création d\'un salon contemporain aux lignes épurées. Un espace de vie chaleureux qui invite à la détente, sublimé par des touches de design audacieuses.',
    location: 'Tunisie',
    year: '2023',
    images: [
      '/images/portfolio/projet-9/477144519_1024627659684766_1244374077137295068_n (1).jpg',
      '/images/portfolio/projet-9/477174474_1024627643018101_1616919540708642266_n.jpg',
      '/images/portfolio/projet-9/477550151_1024627376351461_365933731261415974_n.jpg',
    ],
  },
];

export default projects;
