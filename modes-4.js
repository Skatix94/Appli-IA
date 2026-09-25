// ══════════════════════════════════════════════════════════════════
// MODES — Fichier 4 (181 à 240)
// Catégories : Éducation, Business, Voyage, Histoire, Sciences
// ══════════════════════════════════════════════════════════════════
const MODES_4 = [
  // ═══════════════════════════════════════════════════════════════
  // 📚 ÉDUCATION (181-195)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'science', num: 171, cat: '📚 Éducation',
    name: 'Explication Scientifique',
    emoji: '🔬',
    desc: 'Schéma animé, particules, ADN',
    basePrompt: 'Animate this image as a science explanation. Schemas animating, particles, clarity. Preserve the exact subject.',
    actions: ['schemas animate, particles float'],
    cameras: ['slow push-in'],
    lights: ['clean lab light']
  },
  {
    id: 'history-edu', num: 172, cat: '📚 Éducation',
    name: 'Histoire',
    emoji: '📜',
    desc: 'Reconstitution de période',
    basePrompt: 'Animate this image as a history reconstruction. Period accurate, dramatic. Preserve the exact subject.',
    actions: ['the scene comes to life'],
    cameras: ['slow pan'],
    lights: ['historical light']
  },
  {
    id: 'geography', num: 173, cat: '📚 Éducation',
    name: 'Géographie',
    emoji: '🌍',
    desc: 'Carte qui se déploie, relief 3D',
    basePrompt: 'Animate this image as a geography lesson. Map unfolding, relief appearing. Preserve the exact scene.',
    actions: ['the map unfolds, borders appear'],
    cameras: ['aerial view'],
    lights: ['clean map light']
  },
  {
    id: 'math', num: 174, cat: '📚 Éducation',
    name: 'Mathématiques',
    emoji: '➗',
    desc: 'Formes, équations, démonstration',
    basePrompt: 'Animate this image as a math lesson. Shapes, equations, demonstration. Preserve the exact scene.',
    actions: ['equations appear and solve'],
    cameras: ['static frame'],
    lights: ['clean chalkboard light']
  },
  {
    id: 'languages', num: 175, cat: '📚 Éducation',
    name: 'Langues',
    emoji: '🗣️',
    desc: 'Mot illustré, prononciation',
    basePrompt: 'Animate this image as a language lesson. Words, pronunciation, context. Preserve the exact subject.',
    actions: ['words appear and highlight'],
    cameras: ['static frame'],
    lights: ['warm classroom light']
  },
  {
    id: 'cooking', num: 176, cat: '📚 Éducation',
    name: 'Cuisine',
    emoji: '👨‍🍳',
    desc: 'Recette étape par étape',
    basePrompt: 'Animate this image as a cooking tutorial. Recipe steps, hands moving, ingredients. Preserve the exact scene.',
    actions: ['hands move through recipe steps'],
    cameras: ['top-down view'],
    lights: ['warm kitchen light']
  },
  {
    id: 'diy', num: 177, cat: '📚 Éducation',
    name: 'Bricolage',
    emoji: '🔨',
    desc: 'Tutoriel visuel, mains, outils',
    basePrompt: 'Animate this image as a DIY tutorial. Hands, tools, step-by-step. Preserve the exact scene.',
    actions: ['hands work through steps'],
    cameras: ['close-up on hands'],
    lights: ['bright workshop light']
  },
  {
    id: 'medical', num: 178, cat: '📚 Éducation',
    name: 'Médical',
    emoji: '🩺',
    desc: 'Anatomie, organe, circulation',
    basePrompt: 'Animate this image as a medical illustration. Anatomy, organs, circulation. Preserve the exact scene.',
    actions: ['organs pulse, blood flows'],
    cameras: ['slow push-in'],
    lights: ['clean medical light']
  },
  {
    id: 'astronomy', num: 179, cat: '📚 Éducation',
    name: 'Astronomie',
    emoji: '🔭',
    desc: 'Planètes, galaxies, trous noirs',
    basePrompt: 'Animate this image as an astronomy scene. Planets, galaxies, black holes. Preserve the exact scene.',
    actions: ['planets rotate, stars twinkle'],
    cameras: ['slow cosmic pan'],
    lights: ['starlight']
  },
  {
    id: 'nature-doc', num: 180, cat: '📚 Éducation',
    name: 'Nature Documentaire',
    emoji: '🦁',
    desc: 'Animal, plante, écosystème',
    basePrompt: 'Animate this image as a nature documentary. Animals, plants, ecosystem. Preserve the exact scene.',
    actions: ['animals move naturally'],
    cameras: ['slow pan'],
    lights: ['natural daylight']
  },
  {
    id: 'chemistry', num: 325, cat: '📚 Éducation',
    name: 'Chimie',
    emoji: '⚗️',
    desc: 'Réactions, molécules, tubes',
    basePrompt: 'Animate this image as a chemistry lesson. Reactions, molecules, lab. Preserve the exact scene.',
    actions: ['liquid changes color, molecules rotate'],
    cameras: ['slow push-in'],
    lights: ['lab light']
  },
  {
    id: 'physics', num: 326, cat: '📚 Éducation',
    name: 'Physique',
    emoji: '⚛️',
    desc: 'Forces, mouvement, énergie',
    basePrompt: 'Animate this image as a physics demonstration. Forces, motion, energy. Preserve the exact scene.',
    actions: ['objects move according to physics'],
    cameras: ['static frame'],
    lights: ['clean lab light']
  },
  {
    id: 'coding', num: 327, cat: '📚 Éducation',
    name: 'Code',
    emoji: '💻',
    desc: 'Lignes de code qui défilent',
    basePrompt: 'Animate this image as a coding tutorial. Code scrolling, terminal output. Preserve the exact scene.',
    actions: ['code scrolls and highlights'],
    cameras: ['static frame'],
    lights: ['screen glow']
  },
  {
    id: 'art-lesson', num: 328, cat: '📚 Éducation',
    name: 'Cours de Dessin',
    emoji: '🎨',
    desc: 'Dessin qui se forme',
    basePrompt: 'Animate this image as an art lesson. A drawing forming stroke by stroke. Preserve the exact scene.',
    actions: ['the drawing forms stroke by stroke'],
    cameras: ['top-down view'],
    lights: ['warm studio light']
  },
  {
    id: 'music-lesson', num: 329, cat: '📚 Éducation',
    name: 'Cours de Musique',
    emoji: '🎼',
    desc: 'Notes, instrument, apprentissage',
    basePrompt: 'Animate this image as a music lesson. Notes, instrument, learning. Preserve the exact scene.',
    actions: ['notes appear and play'],
    cameras: ['static frame'],
    lights: ['warm studio light']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🏢 BUSINESS & PROFESSIONNEL (196-210)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'product-presentation', num: 181, cat: '🏢 Business',
    name: 'Présentation Produit',
    emoji: '📊',
    desc: 'Rotation, zoom, points clés',
    basePrompt: 'Animate this product presentation. Rotating product, zoom, key points highlighting. Preserve the exact product identity.',
    actions: ['the product rotates, details highlighting'],
    cameras: ['slow push-in'],
    lights: ['clean studio light']
  },
  {
    id: 'corporate-announce', num: 183, cat: '🏢 Business',
    name: 'Annonce Entreprise',
    emoji: '📣',
    desc: 'Logo animé, équipe, vision',
    basePrompt: 'Animate this image as a corporate announcement. Logo animating, team, vision. Preserve the exact company identity.',
    actions: ['logo glows, team moves'],
    cameras: ['static frame'],
    lights: ['corporate light']
  },
  {
    id: 'recruitment', num: 184, cat: '🏢 Business',
    name: 'Recrutement',
    emoji: '💼',
    desc: 'Bureau, équipe, culture',
    basePrompt: 'Animate this image as a recruitment video. Office, team, company culture. Preserve the exact people identity.',
    actions: ['the team works together, smiling'],
    cameras: ['handheld'],
    lights: ['bright office light']
  },
  {
    id: 'training', num: 185, cat: '🏢 Business',
    name: 'Formation Interne',
    emoji: '🎓',
    desc: 'Slides animées, schémas',
    basePrompt: 'Animate this image as a training video. Slides animating, schemas. Preserve the exact scene.',
    actions: ['slides change, schemas animate'],
    cameras: ['static frame'],
    lights: ['clean office light']
  },
  {
    id: 'annual-report', num: 186, cat: '🏢 Business',
    name: 'Rapport Annuel',
    emoji: '📈',
    desc: 'Chiffres, graphiques, croissance',
    basePrompt: 'Animate this image as an annual report. Numbers, graphs, growth. Preserve the exact scene.',
    actions: ['graphs animate showing growth'],
    cameras: ['static frame'],
    lights: ['clean corporate light']
  },
  {
    id: 'realestate', num: 187, cat: '🏢 Business',
    name: 'Immobilier',
    emoji: '🏠',
    desc: 'Visite virtuelle, plans, quartier',
    basePrompt: 'Animate this real estate photo. Virtual tour, plans, neighborhood. Preserve the exact property identity.',
    actions: ['the camera tours the property'],
    cameras: ['smooth dolly-in'],
    lights: ['bright natural light']
  },
  {
    id: 'restaurant', num: 188, cat: '🏢 Business',
    name: 'Restaurant',
    emoji: '🍽️',
    desc: 'Plat, ambiance, service',
    basePrompt: 'Animate this restaurant photo. Dish, ambiance, service. Preserve the exact scene.',
    actions: ['steam rises from the dish'],
    cameras: ['slow push-in'],
    lights: ['warm restaurant light']
  },
  {
    id: 'hotel', num: 189, cat: '🏢 Business',
    name: 'Hôtel',
    emoji: '🏨',
    desc: 'Chambre, piscine, vue',
    basePrompt: 'Animate this hotel photo. Room, pool, view. Preserve the exact property identity.',
    actions: ['curtains move gently, water shimmers'],
    cameras: ['slow push-in'],
    lights: ['warm hotel light']
  },
  {
    id: 'boutique', num: 190, cat: '🏢 Business',
    name: 'Boutique',
    emoji: '🛍️',
    desc: 'Vitrine, produit, promotion',
    basePrompt: 'Animate this boutique photo. Storefront, product, promotion. Preserve the exact scene.',
    actions: ['product glows, promotion animates'],
    cameras: ['slow push-in'],
    lights: ['warm boutique light']
  },
  {
    id: 'testimonial-biz', num: 182, cat: '🏢 Business',
    name: 'Témoignage Client',
    emoji: '💬',
    desc: 'Client satisfait parle',
    basePrompt: 'Animate this image as a testimonial. Customer speaks warmly. Preserve the exact subject identity.',
    actions: ['the subject talks naturally'],
    cameras: ['medium shot'],
    lights: ['soft window light']
  },
  {
    id: 'startup-pitch', num: 330, cat: '🏢 Business',
    name: 'Pitch Startup',
    emoji: '🚀',
    desc: 'Vision, produit, growth',
    basePrompt: 'Animate this image as a startup pitch. Vision, product, growth. Preserve the exact scene.',
    actions: ['charts animate, product shown'],
    cameras: ['static frame'],
    lights: ['modern office light']
  },
  {
    id: 'team-meeting', num: 331, cat: '🏢 Business',
    name: 'Réunion Équipe',
    emoji: '👥',
    desc: 'Collaboration, discussion',
    basePrompt: 'Animate this image as a team meeting. Collaboration, discussion. Preserve the exact people identity.',
    actions: ['the team discusses, gestures'],
    cameras: ['handheld'],
    lights: ['bright office light']
  },
  {
    id: 'webshop', num: 332, cat: '🏢 Business',
    name: 'Boutique en Ligne',
    emoji: '💳',
    desc: 'Produit, panier, checkout',
    basePrompt: 'Animate this image as an online shop. Product, cart, checkout. Preserve the exact product identity.',
    actions: ['product shown, cart animates'],
    cameras: ['static frame'],
    lights: ['clean e-commerce light']
  },
  {
    id: 'saas', num: 333, cat: '🏢 Business',
    name: 'Logiciel SaaS',
    emoji: '💻',
    desc: 'Interface, dashboard, stats',
    basePrompt: 'Animate this image as a SaaS product. Interface, dashboard, stats. Preserve the exact scene.',
    actions: ['dashboard animates with data'],
    cameras: ['slow push-in'],
    lights: ['screen glow']
  },
  {
    id: 'consulting', num: 334, cat: '🏢 Business',
    name: 'Conseil / Consulting',
    emoji: '💼',
    desc: 'Analyse, stratégie, résultats',
    basePrompt: 'Animate this image as a consulting presentation. Analysis, strategy, results. Preserve the exact scene.',
    actions: ['charts animate, strategy shown'],
    cameras: ['static frame'],
    lights: ['modern office light']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🌍 VOYAGE & TOURISME (211-225)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'postcard', num: 18, cat: '🌍 Voyage',
    name: 'Carte Postale',
    emoji: '📮',
    desc: 'Monument qui prend vie',
    basePrompt: 'Animate this travel photo as a living postcard. Monument, landscape, movement. Preserve the exact scene.',
    actions: ['clouds move, water ripples'],
    cameras: ['slow pan'],
    lights: ['golden hour']
  },
  {
    id: 'tour-guide', num: 192, cat: '🌍 Voyage',
    name: 'Guide Touristique',
    emoji: '🗺️',
    desc: 'Lieu, histoire, conseils',
    basePrompt: 'Animate this travel destination. Landmark, history, tips. Preserve the exact scene.',
    actions: ['landmark glows, details revealed'],
    cameras: ['slow push-in'],
    lights: ['daylight']
  },
  {
    id: 'road-trip', num: 193, cat: '🌍 Voyage',
    name: 'Road Trip',
    emoji: '🚗',
    desc: 'Route, paysage, arrêts',
    basePrompt: 'Animate this image as a road trip. Road, landscape, stops. Preserve the exact scene.',
    actions: ['the road stretches ahead, scenery moving'],
    cameras: ['tracking shot'],
    lights: ['golden highway light']
  },
  {
    id: 'cruise', num: 194, cat: '🌍 Voyage',
    name: 'Croisière',
    emoji: '🚢',
    desc: 'Mer, pont, escales',
    basePrompt: 'Animate this cruise photo. Sea, deck, stops. Preserve the exact scene.',
    actions: ['waves move, ship sails'],
    cameras: ['wide sea view'],
    lights: ['sunny ocean light']
  },
  {
    id: 'safari', num: 195, cat: '🌍 Voyage',
    name: 'Safari',
    emoji: '🦁',
    desc: 'Animaux, savane, coucher de soleil',
    basePrompt: 'Animate this safari photo. Animals, savanna, sunset. Preserve the exact scene.',
    actions: ['animals move, sun sets'],
    cameras: ['slow pan'],
    lights: ['golden savanna light']
  },
  {
    id: 'mountain', num: 196, cat: '🌍 Voyage',
    name: 'Montagne',
    emoji: '🏔️',
    desc: 'Sommet, neige, randonnée',
    basePrompt: 'Animate this mountain photo. Summit, snow, hiking. Preserve the exact scene.',
    actions: ['clouds move across the peaks'],
    cameras: ['wide mountain shot'],
    lights: ['bright mountain sun']
  },
  {
    id: 'beach', num: 197, cat: '🌍 Voyage',
    name: 'Plage Paradisiaque',
    emoji: '🏖️',
    desc: 'Sable, palmiers, vagues',
    basePrompt: 'Animate this beach photo. Sand, palms, waves. Preserve the exact scene.',
    actions: ['waves roll in, palms sway'],
    cameras: ['slow pan'],
    lights: ['bright beach sun']
  },
  {
    id: 'city-night', num: 198, cat: '🌍 Voyage',
    name: 'Ville Nocturne',
    emoji: '🌃',
    desc: 'Lumières, circulation, vie',
    basePrompt: 'Animate this city at night. Lights, traffic, urban life. Preserve the exact scene.',
    actions: ['cars move, lights flicker'],
    cameras: ['slow pan'],
    lights: ['city night glow']
  },
  {
    id: 'village', num: 199, cat: '🌍 Voyage',
    name: 'Village Traditionnel',
    emoji: '🏘️',
    desc: 'Maisons, ruelles, artisanat',
    basePrompt: 'Animate this traditional village. Houses, alleys, craft. Preserve the exact scene.',
    actions: ['smoke rises, people walk'],
    cameras: ['slow pan'],
    lights: ['warm village light']
  },
  {
    id: 'extreme', num: 200, cat: '🌍 Voyage',
    name: 'Aventure Extrême',
    emoji: '🪂',
    desc: 'Saut, cascade, adrénaline',
    basePrompt: 'Animate this extreme adventure. Jump, waterfall, adrenaline. Preserve the exact scene.',
    actions: ['the subject jumps, adrenaline rushing'],
    cameras: ['dynamic following'],
    lights: ['bright outdoor light']
  },
  {
    id: 'desert', num: 335, cat: '🌍 Voyage',
    name: 'Désert',
    emoji: '🏜️',
    desc: 'Dunes, chaleur, silence',
    basePrompt: 'Animate this desert photo. Dunes, heat, silence. Preserve the exact scene.',
    actions: ['sand shifts, heat shimmer'],
    cameras: ['slow pan'],
    lights: ['hot desert sun']
  },
  {
    id: 'jungle', num: 336, cat: '🌍 Voyage',
    name: 'Jungle',
    emoji: '🌴',
    desc: 'Végétation dense, humidité',
    basePrompt: 'Animate this jungle photo. Dense vegetation, humidity. Preserve the exact scene.',
    actions: ['leaves sway, insects move'],
    cameras: ['slow pan'],
    lights: ['green filtered light']
  },
  {
    id: 'arctic', num: 337, cat: '🌍 Voyage',
    name: 'Arctique',
    emoji: '🧊',
    desc: 'Glace, aurores, silence',
    basePrompt: 'Animate this arctic photo. Ice, auroras, silence. Preserve the exact scene.',
    actions: ['auroras dance, ice glistens'],
    cameras: ['wide arctic shot'],
    lights: ['cold blue aurora']
  },
  {
    id: 'volcano', num: 338, cat: '🌍 Voyage',
    name: 'Volcan',
    emoji: '🌋',
    desc: 'Lave, fumée, puissance',
    basePrompt: 'Animate this volcano photo. Lava, smoke, power. Preserve the exact scene.',
    actions: ['lava flows, smoke rises'],
    cameras: ['wide dramatic shot'],
    lights: ['orange lava glow']
  },
  {
    id: 'waterfall', num: 339, cat: '🌍 Voyage',
    name: 'Cascade',
    emoji: '💧',
    desc: 'Eau qui tombe, brume',
    basePrompt: 'Animate this waterfall photo. Falling water, mist. Preserve the exact scene.',
    actions: ['water falls, mist rises'],
    cameras: ['slow push-in'],
    lights: ['natural daylight']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🏛️ HISTOIRE & ÉPOQUES (226-240)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'prehistoric', num: 201, cat: '🏛️ Histoire',
    name: 'Préhistoire',
    emoji: '🦕',
    desc: 'Dinosaures, volcans, nature',
    basePrompt: 'Animate this image as a prehistoric scene. Dinosaurs, volcanoes, wild nature. Preserve the exact scene.',
    actions: ['dinosaurs move, volcanoes rumble'],
    cameras: ['wide epic shot'],
    lights: ['dramatic prehistoric light']
  },
  {
    id: 'egypt', num: 202, cat: '🏛️ Histoire',
    name: 'Égypte Antique',
    emoji: '🏛️',
    desc: 'Pyramides, hiéroglyphes, pharaon',
    basePrompt: 'Animate this ancient Egypt image. Pyramids, hieroglyphs, pharaoh. Preserve the exact scene.',
    actions: ['hieroglyphs glow, sand shifts'],
    cameras: ['slow pan'],
    lights: ['golden Egyptian light']
  },
  {
    id: 'greece', num: 203, cat: '🏛️ Histoire',
    name: 'Grèce Antique',
    emoji: '🏛️',
    desc: 'Temple, philosophes, mythologie',
    basePrompt: 'Animate this ancient Greece image. Temple, philosophers, mythology. Preserve the exact scene.',
    actions: ['philosophers discuss, light shifts'],
    cameras: ['slow pan'],
    lights: ['Mediterranean light']
  },
  {
    id: 'rome', num: 204, cat: '🏛️ Histoire',
    name: 'Rome Antique',
    emoji: '🏛️',
    desc: 'Colisée, légions, empereur',
    basePrompt: 'Animate this ancient Rome image. Colosseum, legions, emperor. Preserve the exact scene.',
    actions: ['legions march, crowd cheers'],
    cameras: ['wide epic shot'],
    lights: ['warm Roman light']
  },
  {
    id: 'medieval', num: 205, cat: '🏛️ Histoire',
    name: 'Moyen Âge',
    emoji: '🏰',
    desc: 'Château, chevaliers, tournoi',
    basePrompt: 'Animate this medieval image. Castle, knights, tournament. Preserve the exact scene.',
    actions: ['knights ride, banners wave'],
    cameras: ['wide epic shot'],
    lights: ['dramatic medieval light']
  },
  {
    id: 'renaissance', num: 206, cat: '🏛️ Histoire',
    name: 'Renaissance',
    emoji: '🎨',
    desc: 'Art, inventeurs, cités',
    basePrompt: 'Animate this Renaissance image. Art, inventors, cities. Preserve the exact scene.',
    actions: ['art comes to life, inventions move'],
    cameras: ['slow pan'],
    lights: ['warm Renaissance light']
  },
  {
    id: '18th', num: 207, cat: '🏛️ Histoire',
    name: 'XVIIIe siècle',
    emoji: '🎩',
    desc: 'Versailles, carrosses, lumières',
    basePrompt: 'Animate this 18th century image. Versailles, carriages, enlightenment. Preserve the exact scene.',
    actions: ['carriages move, candles flicker'],
    cameras: ['slow pan'],
    lights: ['candlelight, warm gold']
  },
  {
    id: '1920s', num: 208, cat: '🏛️ Histoire',
    name: 'Années 1920',
    emoji: '🎷',
    desc: 'Charleston, Art déco, jazz',
    basePrompt: 'Animate this 1920s image. Charleston, Art Deco, jazz. Preserve the exact scene.',
    actions: ['the scene moves with 20s energy'],
    cameras: ['slow pan'],
    lights: ['warm Art Deco light']
  },
  {
    id: '1950s', num: 209, cat: '🏛️ Histoire',
    name: 'Années 1950',
    emoji: '🚗',
    desc: 'Rock\'n\'roll, voitures, drive-in',
    basePrompt: 'Animate this 1950s image. Rock\'n\'roll, cars, drive-in. Preserve the exact scene.',
    actions: ['cars move, people dance'],
    cameras: ['slow pan'],
    lights: ['warm 50s light']
  },
  {
    id: '1980s', num: 210, cat: '🏛️ Histoire',
    name: 'Années 1980',
    emoji: '🕹️',
    desc: 'Néons, VHS, synthwave',
    basePrompt: 'Animate this 1980s image. Neons, VHS, synthwave. Preserve the exact scene.',
    actions: ['neon signs glow, VHS effects'],
    cameras: ['static frame'],
    lights: ['neon pink and blue']
  },
  {
    id: '2000s', num: 211, cat: '🏛️ Histoire',
    name: 'Années 2000',
    emoji: '💿',
    desc: 'Y2K, MSN, mode',
    basePrompt: 'Animate this 2000s image. Y2K, MSN, fashion. Preserve the exact scene.',
    actions: ['the scene moves with 2000s energy'],
    cameras: ['static frame'],
    lights: ['bright colorful']
  },
  {
    id: 'future', num: 212, cat: '🏛️ Histoire',
    name: 'Futur 2100',
    emoji: '🤖',
    desc: 'Ville high-tech, IA, robots',
    basePrompt: 'Animate this image as a year 2100 future scene. High-tech city, AI, robots. Preserve the exact scene.',
    actions: ['hovercars fly, drones move'],
    cameras: ['wide futuristic shot'],
    lights: ['cool futuristic glow']
  },
  {
    id: 'industrial', num: 340, cat: '🏛️ Histoire',
    name: 'Révolution Industrielle',
    emoji: '⚙️',
    desc: 'Machines, vapeur, usines',
    basePrompt: 'Animate this industrial image. Machines, steam, factories. Preserve the exact scene.',
    actions: ['machines move, steam rises'],
    cameras: ['slow pan'],
    lights: ['dramatic industrial light']
  },
  {
    id: 'wild-west', num: 341, cat: '🏛️ Histoire',
    name: 'Far West',
    emoji: '🤠',
    desc: 'Cowboys, saloon, duel',
    basePrompt: 'Animate this Wild West image. Cowboys, saloon, duel. Preserve the exact scene.',
    actions: ['dust blows, duel tension'],
    cameras: ['wide western shot'],
    lights: ['golden western light']
  },
  {
    id: 'space-race', num: 342, cat: '🏛️ Histoire',
    name: 'Course à l\'Espace',
    emoji: '🚀',
    desc: 'Fusées, NASA, années 60',
    basePrompt: 'Animate this space race image. Rockets, NASA, 60s. Preserve the exact scene.',
    actions: ['rocket launches, smoke billows'],
    cameras: ['wide epic shot'],
    lights: ['dramatic launch light']
  }
];

// ══════════════════════════════════════════════════════════════════
// FUSION
// ══════════════════════════════════════════════════════════════════
if (window.MODES) {
    window.MODES = window.MODES.concat(MODES_4);
} else {
    window.MODES = MODES_4;
}
