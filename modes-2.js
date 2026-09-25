// ══════════════════════════════════════════════════════════════════
// MODES — Fichier 2 (61 à 120)
// Catégories : Action, Arts Martiaux, Danse, Sport, Véhicules
// ══════════════════════════════════════════════════════════════════
const MODES_2 = [
  // ═══════════════════════════════════════════════════════════════
  // 🥋 ARTS MARTIAUX & COMBAT (61-70)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'kungfu', num: 41, cat: '🥋 Arts Martiaux',
    name: 'Kung Fu Cinématique',
    emoji: '🥋',
    desc: 'Combat martial, sauts, ralenti Matrix',
    basePrompt: 'Animate this image as an epic kung fu cinematic sequence. The subject performs fluid martial arts movements: strikes, kicks, jumps, spins. Slow motion impacts, matrix-style bullet time. Preserve the exact subject identity, face, clothing, and surroundings.',
    actions: [
      'the subject executes a spinning kick, robe fluttering',
      'the subject leaps into the air, both fists extended forward',
      'the subject blocks an invisible strike, forearms crossed, eyes sharp',
      'the subject performs a slow tai chi movement, breath visible'
    ],
    cameras: [
      'bullet time rotation around the subject mid-punch',
      'fast whip pan following the strike',
      'low angle looking up at the fighter',
      'slow dolly-in on the eyes before the strike'
    ],
    lights: [
      'dramatic side lighting, dust particles in the air',
      'warm temple light with incense smoke',
      'cool moonlight on a bamboo forest'
    ]
  },
  {
    id: 'karate', num: 42, cat: '🥋 Arts Martiaux',
    name: 'Karaté Impact',
    emoji: '🥋',
    desc: 'Coups puissants, ondes de choc',
    basePrompt: 'Animate this image as a karate impact sequence. Powerful strikes, shockwaves, speed lines, dramatic tension. Preserve the exact subject identity, face, and clothing.',
    actions: ['the subject delivers a powerful punch, air rippling', 'the subject performs a kata, movements precise'],
    cameras: ['fast push-in on the strike', 'slow motion impact'],
    lights: ['dramatic dojo light', 'cool intensity']
  },
  {
    id: 'boxing', num: 43, cat: '🥋 Arts Martiaux',
    name: 'Boxe / MMA',
    emoji: '🥊',
    desc: 'Esquives, coups, sueur, ralenti',
    basePrompt: 'Animate this image as a boxing / MMA fight sequence. Dodges, punches, sweat flying, dramatic slow motion. Preserve the exact subject identity, face, and clothing.',
    actions: ['the subject throws a jab, sweat flying', 'the subject dodges, head moving sharply'],
    cameras: ['handheld following the fight', 'slow motion impact'],
    lights: ['ring spotlight', 'dramatic gym light']
  },
  {
    id: 'samurai', num: 44, cat: '🥋 Arts Martiaux',
    name: 'Samouraï / Katana',
    emoji: '⚔️',
    desc: 'Duel au sabre, pétales, tension',
    basePrompt: 'Animate this image as a samurai duel. Katana drawn, cherry blossom petals drifting, intense tension. Preserve the exact subject identity, face, and clothing.',
    actions: ['the samurai draws the katana slowly', 'the subject performs a slow sword strike'],
    cameras: ['slow push-in on the eyes', 'arc around the duel'],
    lights: ['warm sunset, cherry blossom petals', 'cool moonlight bamboo']
  },
  {
    id: 'ninja', num: 45, cat: '🥋 Arts Martiaux',
    name: 'Ninja Furtif',
    emoji: '🥷',
    desc: 'Déplacements silencieux, fumée, shurikens',
    basePrompt: 'Animate this image as a ninja stealth sequence. Silent movements, smoke bombs, shurikens flying. Preserve the exact subject identity and clothing.',
    actions: ['the ninja throws a shuriken', 'the ninja disappears in smoke'],
    cameras: ['slow tracking shot', 'static frame with sudden movement'],
    lights: ['moonlit rooftop', 'dark alley with fog']
  },
  {
    id: 'wuxia', num: 49, cat: '🥋 Arts Martiaux',
    name: 'Wuxia',
    emoji: '🎋',
    desc: 'Combats aériens dans les bambous',
    basePrompt: 'Animate this image as a wuxia martial arts scene. Fighters move weightlessly through bamboo forests, robes flowing, poetic combat. Preserve the exact subject identity.',
    actions: ['the fighter leaps between bamboo stalks'],
    cameras: ['slow crane shot', 'static frame with graceful movement'],
    lights: ['soft misty light', 'green bamboo glow']
  },
  {
    id: 'street-fight', num: 50, cat: '🥋 Arts Martiaux',
    name: 'Street Fight',
    emoji: '👊',
    desc: 'Combat de rue brut, caméra épaule',
    basePrompt: 'Animate this image as a gritty street fight. Raw, documentary-style, handheld camera, realistic movement. Preserve the exact subject identity.',
    actions: ['the subject throws a punch', 'the subject blocks with an arm'],
    cameras: ['handheld, urgent', 'close-up following the action'],
    lights: ['harsh street light', 'night with neon glow']
  },
  {
    id: 'superhero', num: 91, cat: '🥋 Arts Martiaux',
    name: 'Super-Héros',
    emoji: '🦸',
    desc: 'Super-pouvoirs, cape, énergie',
    basePrompt: 'Animate this image as a superhero sequence. Cape flowing, energy emanating, dramatic pose. Preserve the exact subject identity and clothing.',
    actions: ['the cape flows dramatically in the wind', 'energy crackles around the subject'],
    cameras: ['low angle looking up heroically', 'slow push-in'],
    lights: ['dramatic hero light', 'epic cinematic']
  },
  {
    id: 'matrix', num: 48, cat: '🥋 Arts Martiaux',
    name: 'Bullet Time (Matrix)',
    emoji: '🕶️',
    desc: 'Ralenti total, caméra tourne autour',
    basePrompt: 'Animate this image as a Matrix bullet-time sequence. Extreme slow motion, camera rotating around the subject mid-action. Preserve the exact subject identity.',
    actions: ['the subject dodges invisible bullets'],
    cameras: ['360° rotation around the subject in slow motion'],
    lights: ['green digital glow', 'cool dramatic']
  },
  {
    id: 'sword-fight', num: 44, cat: '🥋 Arts Martiaux',
    name: 'Duel à l\'Épée',
    emoji: '🗡️',
    desc: 'Combat à l\'épée, étincelles',
    basePrompt: 'Animate this image as a sword duel. Blades clash, sparks fly, intense tension. Preserve the exact subject identity.',
    actions: ['blades clash, sparks flying'],
    cameras: ['fast following shot', 'slow motion clash'],
    lights: ['dramatic firelight', 'moonlight steel']
  },

  // ═══════════════════════════════════════════════════════════════
  // 💃 DANSE & MOUVEMENT (71-80)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'hiphop', num: 51, cat: '💃 Danse',
    name: 'Hip-Hop / Breakdance',
    emoji: '💃',
    desc: 'Danse urbaine, freeze, battle',
    basePrompt: 'Animate this image as a hip-hop dance battle. Powerful urban moves, body waves, freezes, dynamic energy. Preserve the exact subject identity, face, and clothing.',
    actions: [
      'the subject performs a body wave, arms flowing',
      'the subject hits a freeze on one hand',
      'the subject jumps into a spin, clothes fluttering',
      'the subject pops and locks'
    ],
    cameras: ['low angle circling the dancer', 'handheld following'],
    lights: ['neon reflections on wet ground', 'club lighting with strobes']
  },
  {
    id: 'ballet', num: 52, cat: '💃 Danse',
    name: 'Ballet Classique',
    emoji: '🩰',
    desc: 'Grâce, pirouettes, lumière de scène',
    basePrompt: 'Animate this image as a classical ballet performance. Graceful pirouettes, arabesques, soft stage light. Preserve the exact subject identity.',
    actions: ['the dancer performs a pirouette', 'the dancer extends into an arabesque'],
    cameras: ['slow arc around the dancer', 'static frame with graceful motion'],
    lights: ['soft stage spotlight', 'warm golden glow']
  },
  {
    id: 'contemporary', num: 53, cat: '💃 Danse',
    name: 'Danse Contemporaine',
    emoji: '🌊',
    desc: 'Mouvements fluides, émotion, tissus',
    basePrompt: 'Animate this image as contemporary dance. Fluid movements, emotional expression, fabric flowing. Preserve the exact subject identity.',
    actions: ['the dancer moves fluidly, fabric flowing'],
    cameras: ['slow dolly-in', 'arc shot'],
    lights: ['soft diffuse light', 'dramatic side light']
  },
  {
    id: 'kpop', num: 54, cat: '💃 Danse',
    name: 'K-pop Choreography',
    emoji: '🎤',
    desc: 'Synchronisation parfaite, néons, scène',
    basePrompt: 'Animate this image as a K-pop dance performance. Sharp synchronized moves, neon stage lights. Preserve the exact subject identity and outfit.',
    actions: ['the subject performs sharp choreography'],
    cameras: ['dynamic rotating shot', 'low angle'],
    lights: ['neon pink and cyan', 'stage spotlight']
  },
  {
    id: 'salsa', num: 55, cat: '💃 Danse',
    name: 'Salsa / Tango',
    emoji: '💃',
    desc: 'Passion, proximité, mouvements de hanches',
    basePrompt: 'Animate this image as a passionate salsa or tango dance. Close embrace, hip movements, Latin heat. Preserve the exact subject identity.',
    actions: ['the dancers move in close embrace'],
    cameras: ['slow arc around the dancers'],
    lights: ['warm intimate light', 'club atmosphere']
  },
  {
    id: 'tap', num: 56, cat: '💃 Danse',
    name: 'Claquettes',
    emoji: '👞',
    desc: 'Rythme, jeu de jambes, son',
    basePrompt: 'Animate this image as a tap dance performance. Rhythmic footwork, energetic movement. Preserve the exact subject identity.',
    actions: ['the dancer performs fast footwork'],
    cameras: ['close-up on the feet', 'wide shot of the performance'],
    lights: ['stage spotlight', 'warm classic']
  },
  {
    id: 'tribal', num: 57, cat: '💃 Danse',
    name: 'Danse Tribale / Feu',
    emoji: '🔥',
    desc: 'Feu, mouvements hypnotiques, percussions',
    basePrompt: 'Animate this image as a tribal fire dance. Hypnotic movements, fire twirling, percussion rhythm. Preserve the exact subject identity.',
    actions: ['fire twirls around the dancer'],
    cameras: ['slow arc around the fire'],
    lights: ['orange fire glow', 'dramatic shadow dance']
  },
  {
    id: 'vogue', num: 58, cat: '💃 Danse',
    name: 'Vogue / Ballroom',
    emoji: '💅',
    desc: 'Pose, attitude, strut, catwalk',
    basePrompt: 'Animate this image as a vogue ballroom performance. Striking poses, attitude, catwalk. Preserve the exact subject identity and outfit.',
    actions: ['the subject strikes a dramatic pose', 'the subject struts forward'],
    cameras: ['static frame with pose', 'arc shot'],
    lights: ['dramatic spotlight', 'disco ball reflections']
  },
  {
    id: 'bollywood', num: 59, cat: '💃 Danse',
    name: 'Danse Bollywood',
    emoji: '🎬',
    desc: 'Couleurs, énergie, mouvements de groupe',
    basePrompt: 'Animate this image as a Bollywood dance scene. Vibrant colors, energetic movements, joyful expression. Preserve the exact subject identity.',
    actions: ['the subject dances with expressive arm movements'],
    cameras: ['dynamic rotating shot', 'wide colorful shot'],
    lights: ['vibrant saturated colors', 'warm festive light']
  },
  {
    id: 'slow-dance', num: 60, cat: '💃 Danse',
    name: 'Slow Motion Dance',
    emoji: '🐢',
    desc: 'Danse au ralenti avec particules',
    basePrompt: 'Animate this image as a slow motion dance. Ethereal, dreamy, floating movements, particles in the air. Preserve the exact subject identity.',
    actions: ['the dancer moves in extreme slow motion'],
    cameras: ['slow push-in'],
    lights: ['soft dreamy glow', 'warm golden particles']
  },

  // ═══════════════════════════════════════════════════════════════
  // ⚽ SPORT & PERFORMANCE (81-95)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'football', num: 116, cat: '⚽ Sport',
    name: 'Football',
    emoji: '⚽',
    desc: 'But, célébration, ralenti',
    basePrompt: 'Animate this image as a football/soccer highlight. The player strikes the ball, scores, celebrates. Preserve the exact subject identity and outfit.',
    actions: ['the player strikes the ball powerfully', 'the player celebrates with arms raised'],
    cameras: ['tracking shot following the ball', 'slow motion goal'],
    lights: ['stadium floodlights', 'dramatic sports light']
  },
  {
    id: 'basketball', num: 117, cat: '⚽ Sport',
    name: 'Basketball',
    emoji: '🏀',
    desc: 'Dunk, suspension, foule',
    basePrompt: 'Animate this image as a basketball highlight. The player dunks, hangs in the air, crowd cheering. Preserve the exact subject identity.',
    actions: ['the player dunks, hanging on the rim'],
    cameras: ['slow motion dunk', 'low angle'],
    lights: ['arena spotlight', 'dramatic sports light']
  },
  {
    id: 'tennis', num: 118, cat: '⚽ Sport',
    name: 'Tennis',
    emoji: '🎾',
    desc: 'Échange rapide, smash',
    basePrompt: 'Animate this image as a tennis match highlight. Fast exchanges, powerful smashes, sweat. Preserve the exact subject identity.',
    actions: ['the player serves powerfully', 'the player performs a smash'],
    cameras: ['slow motion serve', 'tracking shot'],
    lights: ['daylight court', 'stadium light']
  },
  {
    id: 'running', num: 119, cat: '⚽ Sport',
    name: 'Course à Pied',
    emoji: '🏃',
    desc: 'Sprint, sueur, dépassement',
    basePrompt: 'Animate this image as a running race. Sprint, sweat flying, determination, overtaking. Preserve the exact subject identity.',
    actions: ['the runner sprints forward, sweat flying'],
    cameras: ['tracking shot following the runner'],
    lights: ['daylight race', 'stadium spotlight']
  },
  {
    id: 'swimming', num: 120, cat: '⚽ Sport',
    name: 'Natation',
    emoji: '🏊',
    desc: 'Plongée, mouvements fluides, éclaboussures',
    basePrompt: 'Animate this image as a swimming race. Dive, fluid strokes, splashes, underwater movement. Preserve the exact subject identity.',
    actions: ['the swimmer dives into the water', 'the swimmer strokes powerfully'],
    cameras: ['underwater tracking shot'],
    lights: ['pool water light', 'underwater blue glow']
  },
  {
    id: 'skateboard', num: 121, cat: '⚽ Sport',
    name: 'Skateboard',
    emoji: '🛹',
    desc: 'Figure, grind, chute',
    basePrompt: 'Animate this image as a skateboard trick. Jump, grind, spin, urban style. Preserve the exact subject identity.',
    actions: ['the skater performs a kickflip', 'the skater grinds a rail'],
    cameras: ['low angle following the trick'],
    lights: ['urban street light', 'golden hour']
  },
  {
    id: 'surf', num: 122, cat: '⚽ Sport',
    name: 'Surf',
    emoji: '🏄',
    desc: 'Vague, tube, spray',
    basePrompt: 'Animate this image as a surf session. Riding a wave, spray, tube, ocean power. Preserve the exact subject identity.',
    actions: ['the surfer carves through a wave'],
    cameras: ['tracking shot from the water'],
    lights: ['golden hour ocean light', 'sunny beach']
  },
  {
    id: 'climbing', num: 123, cat: '⚽ Sport',
    name: 'Escalade',
    emoji: '🧗',
    desc: 'Ascension, effort, sommet',
    basePrompt: 'Animate this image as a climbing sequence. Reaching, effort, the summit in sight. Preserve the exact subject identity.',
    actions: ['the climber reaches for a hold'],
    cameras: ['wide mountain shot', 'close-up on the hands'],
    lights: ['mountain daylight', 'golden summit light']
  },
  {
    id: 'gymnastics', num: 124, cat: '⚽ Sport',
    name: 'Gymnastique',
    emoji: '🤸',
    desc: 'Sauts, rotations, grâce',
    basePrompt: 'Animate this image as a gymnastics performance. Aerial jumps, rotations, grace. Preserve the exact subject identity.',
    actions: ['the gymnast performs an aerial rotation'],
    cameras: ['slow motion jump', 'wide arena shot'],
    lights: ['arena spotlight', 'dramatic beam']
  },
  {
    id: 'cycling', num: 126, cat: '⚽ Sport',
    name: 'Cyclisme',
    emoji: '🚴',
    desc: 'Descente, vitesse, paysage',
    basePrompt: 'Animate this image as a cycling race. Descent, speed, landscape rushing past. Preserve the exact subject identity.',
    actions: ['the cyclist speeds down a descent'],
    cameras: ['tracking shot alongside'],
    lights: ['mountain daylight', 'golden hour']
  },
  {
    id: 'ski', num: 127, cat: '⚽ Sport',
    name: 'Ski / Snowboard',
    emoji: '🎿',
    desc: 'Poudreuse, saut, montagne',
    basePrompt: 'Animate this image as a ski or snowboard run. Powder snow spraying, jumps, mountain scenery. Preserve the exact subject identity.',
    actions: ['the skier carves through powder'],
    cameras: ['tracking shot following the skier'],
    lights: ['bright mountain sun', 'blue sky day']
  },
  {
    id: 'f1', num: 128, cat: '⚽ Sport',
    name: 'Formule 1',
    emoji: '🏎️',
    desc: 'Vitesse, dépassement, stands',
    basePrompt: 'Animate this image as a Formula 1 race. Speed, overtaking, pit stop, dramatic tension. Preserve the exact subject identity.',
    actions: ['the F1 car speeds past, blurring the background'],
    cameras: ['tracking shot along the track'],
    lights: ['night race lights', 'daylight dramatic']
  },
  {
    id: 'parkour', num: 129, cat: '⚽ Sport',
    name: 'Parkour',
    emoji: '🏃‍♂️',
    desc: 'Sauts urbains, fluidité',
    basePrompt: 'Animate this image as a parkour run. Fluid urban jumps, vaults, rooftop running. Preserve the exact subject identity.',
    actions: ['the traceur vaults over an obstacle'],
    cameras: ['dynamic tracking shot'],
    lights: ['urban street light', 'golden hour']
  },
  {
    id: 'yoga', num: 130, cat: '⚽ Sport',
    name: 'Yoga',
    emoji: '🧘',
    desc: 'Postures, respiration, sérénité',
    basePrompt: 'Animate this image as a yoga practice. Slow poses, breathing, serene atmosphere. Preserve the exact subject identity.',
    actions: ['the yogi flows through a posture'],
    cameras: ['slow push-in', 'static frame'],
    lights: ['soft morning light', 'warm studio light']
  },
  {
    id: 'gym', num: 191, cat: '⚽ Sport',
    name: 'Musculation',
    emoji: '💪',
    desc: 'Effort, sueur, muscles',
    basePrompt: 'Animate this image as a gym workout. Lifting, effort, sweat, muscle definition. Preserve the exact subject identity.',
    actions: ['the subject lifts a weight slowly'],
    cameras: ['close-up on the muscles', 'wide gym shot'],
    lights: ['dramatic gym lighting', 'moody workout light']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🚗 VÉHICULES & MACHINES (96-110)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'sports-car', num: 131, cat: '🚗 Véhicules',
    name: 'Voiture de Sport',
    emoji: '🏎️',
    desc: 'Drift, accélération, reflets',
    basePrompt: 'Animate this image as a sports car commercial. Drift, acceleration, reflections on the bodywork. Preserve the exact car identity and surroundings.',
    actions: ['the car drifts around a corner'],
    cameras: ['tracking shot alongside the car'],
    lights: ['golden hour road', 'night with neon reflections']
  },
  {
    id: 'motorcycle', num: 132, cat: '🚗 Véhicules',
    name: 'Moto',
    emoji: '🏍️',
    desc: 'Roue arrière, virage, vitesse',
    basePrompt: 'Animate this image as a motorcycle sequence. Wheelies, corners, speed. Preserve the exact subject identity.',
    actions: ['the rider performs a wheelie'],
    cameras: ['tracking shot alongside'],
    lights: ['sunset highway', 'night with headlights']
  },
  {
    id: 'plane', num: 133, cat: '🚗 Véhicules',
    name: 'Avion',
    emoji: '✈️',
    desc: 'Décollage, nuages, vue du cockpit',
    basePrompt: 'Animate this image as an airplane sequence. Takeoff, clouds, cockpit view. Preserve the exact scene.',
    actions: ['the plane takes off, clouds swirling'],
    cameras: ['aerial view', 'cockpit perspective'],
    lights: ['golden clouds', 'blue sky']
  },
  {
    id: 'helicopter', num: 134, cat: '🚗 Véhicules',
    name: 'Hélicoptère',
    emoji: '🚁',
    desc: 'Survol, rotation, souffle',
    basePrompt: 'Animate this image as a helicopter sequence. Hovering, rotors spinning, aerial view. Preserve the exact subject.',
    actions: ['the helicopter hovers, rotor blades spinning'],
    cameras: ['aerial tracking shot'],
    lights: ['daylight aerial', 'sunset glow']
  },
  {
    id: 'boat', num: 135, cat: '🚗 Véhicules',
    name: 'Bateau',
    emoji: '⛵',
    desc: 'Vagues, vitesse, embruns',
    basePrompt: 'Animate this image as a boat sequence. Waves, speed, salt spray. Preserve the exact scene.',
    actions: ['the boat cuts through waves, spray flying'],
    cameras: ['tracking shot alongside'],
    lights: ['sunny ocean', 'golden sunset']
  },
  {
    id: 'train', num: 136, cat: '🚗 Véhicules',
    name: 'Train',
    emoji: '🚂',
    desc: 'Passage, paysage qui défile',
    basePrompt: 'Animate this image as a train sequence. Passing scenery, motion, travel. Preserve the exact scene.',
    actions: ['the train moves through the landscape'],
    cameras: ['tracking shot alongside'],
    lights: ['golden hour fields', 'mountain daylight']
  },
  {
    id: 'bike', num: 137, cat: '🚗 Véhicules',
    name: 'Vélo',
    emoji: '🚲',
    desc: 'Balade, roue, chemin',
    basePrompt: 'Animate this image as a bike ride. Wheels spinning, road rushing past, freedom. Preserve the exact scene.',
    actions: ['the bike rolls forward, wheels spinning'],
    cameras: ['tracking shot'],
    lights: ['golden hour path', 'sunny day']
  },
  {
    id: 'tractor', num: 138, cat: '🚗 Véhicules',
    name: 'Tracteur / Agricole',
    emoji: '🚜',
    desc: 'Champ, labour, saison',
    basePrompt: 'Animate this image as a farm sequence. Tractor working, field, seasons changing. Preserve the exact scene.',
    actions: ['the tractor plows through the field'],
    cameras: ['aerial shot'],
    lights: ['golden farm light', 'morning dew']
  },
  {
    id: 'mecha', num: 139, cat: '🚗 Véhicules',
    name: 'Robot / Mecha',
    emoji: '🤖',
    desc: 'Marche, transformation, combat',
    basePrompt: 'Animate this image as a mecha robot sequence. Walking, transforming, engaging in combat. Preserve the exact robot design.',
    actions: ['the mecha walks forward, joints moving'],
    cameras: ['low angle looking up at the mecha'],
    lights: ['sci-fi blue glow', 'dramatic city light']
  },
  {
    id: 'spaceship', num: 140, cat: '🚗 Véhicules',
    name: 'Vaisseau Spatial',
    emoji: '🚀',
    desc: 'Décollage, hyperespace, planète',
    basePrompt: 'Animate this image as a spaceship sequence. Takeoff, hyperdrive, planetary approach. Preserve the exact ship design.',
    actions: ['the ship jumps to hyperspace'],
    cameras: ['wide space shot'],
    lights: ['star field glow', 'planetary light']
  },
  {
    id: 'drone', num: 63, cat: '🚗 Véhicules',
    name: 'Drone Aérien',
    emoji: '🛸',
    desc: 'Vue du ciel, survol, révélation',
    basePrompt: 'Animate this image as an aerial drone shot. Bird\'s eye view, smooth motion. Preserve the exact scene.',
    actions: ['the drone reveals more of the landscape'],
    cameras: ['aerial flyover'],
    lights: ['golden hour', 'daylight']
  },
  {
    id: 'submarine', num: 260, cat: '🚗 Véhicules',
    name: 'Sous-Marin',
    emoji: '🚢',
    desc: 'Profondeur, bulles, créatures',
    basePrompt: 'Animate this image as an underwater submarine sequence. Depth, bubbles, sea life. Preserve the exact scene.',
    actions: ['the submarine descends, bubbles rising'],
    cameras: ['underwater tracking shot'],
    lights: ['deep blue underwater', 'bioluminescent glow']
  },
  {
    id: 'hoverboard', num: 290, cat: '🚗 Véhicules',
    name: 'Hoverboard',
    emoji: '🛹',
    desc: 'Flottement, futurisme',
    basePrompt: 'Animate this image as a hoverboard sequence. Floating above ground, futuristic tech. Preserve the exact subject.',
    actions: ['the hoverboard floats forward smoothly'],
    cameras: ['tracking shot'],
    lights: ['futuristic neon', 'sunset glow']
  },
  {
    id: 'snowmobile', num: 270, cat: '🚗 Véhicules',
    name: 'Motoneige',
    emoji: '🏔️',
    desc: 'Neige, vitesse, montagne',
    basePrompt: 'Animate this image as a snowmobile sequence. Speed through snow, powder flying. Preserve the exact scene.',
    actions: ['the snowmobile carves through powder'],
    cameras: ['tracking shot'],
    lights: ['bright mountain sun', 'blue sky']
  },
  {
    id: 'kart', num: 271, cat: '🚗 Véhicules',
    name: 'Karting',
    emoji: '🏁',
    desc: 'Course, virages, adrénaline',
    basePrompt: 'Animate this image as a go-kart race. Corners, speed, adrenaline. Preserve the exact scene.',
    actions: ['the kart takes a sharp corner'],
    cameras: ['tracking shot close to the ground'],
    lights: ['indoor track light', 'outdoor daylight']
  }
];

// ══════════════════════════════════════════════════════════════════
// FUSION AVEC LES AUTRES FICHIERS
// ══════════════════════════════════════════════════════════════════
if (window.MODES) {
    window.MODES = window.MODES.concat(MODES_2);
} else {
    window.MODES = MODES_2;
}
