// ══════════════════════════════════════════════════════════════════
// MODES — Classés du plus vendeur au plus secondaire (E-commerce)
// ══════════════════════════════════════════════════════════════════
const MODES = [
  // ═══════════════════════════════════════════════════════════════
  // 🔥 NIVEAU 1 — LES INCONTOURNABLES POUR VENDRE (1-12)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'pub', num: 294, cat: '🔥 Incontournables',
    name: 'Publicité Produit',
    emoji: '📢',
    desc: 'Spot pub pro : accroche → bénéfice → CTA',
    basePrompt: 'Create a professional vertical 9:16 commercial advertisement video from this exact source image. The product and subject must remain IDENTICAL: same product, same shape, same colors, same label, same face, same expression, same clothing. Narrative structure: first 2 seconds HOOK (impact, eye contact, confident motion) → middle BENEFIT (product highlighted, light catches it, trust on the face) → last 2 seconds CTA (product held forward, confident gaze, natural smile). Preserve exact composition and layout.',
    actions: [
      'the subject raises the product toward the camera, catching the light',
      'the subject smiles subtly, breathing naturally, product presented with pride',
      'the subject\'s hand adjusts the product slightly, drawing attention to it',
      'the subject looks at the product, then at the camera, confident'
    ],
    cameras: [
      'slow dolly-in toward the product',
      'slow push-in on the product, shallow depth of field',
      'subtle arc around the subject, product stays centered',
      'static locked-off frame, subject and product move subtly'
    ],
    lights: [
      'soft diffused commercial light',
      'warm golden backlight with rim highlights',
      'clean ambient light, almost shadowless, product-focused',
      'dramatic side lighting with glossy product highlights'
    ]
  },
  {
    id: 'packshot', num: 6, cat: '🔥 Incontournables',
    name: 'Packshot Produit',
    emoji: '📦',
    desc: 'Produit sur fond neutre, rotation 360°',
    basePrompt: 'Animate this product photo as a premium packshot commercial. The product rotates slowly on a neutral studio background. Perfect studio lighting, glossy reflections, no distractions. The product must remain IDENTICAL: same shape, colors, label, and finish. Product-focused, minimalist, e-commerce ready.',
    actions: [
      'the product rotates slowly on a turntable',
      'the product floats gently, rotating on its axis',
      'the product tilts slightly, showing its details',
      'light sweeps across the product surface'
    ],
    cameras: [
      'static locked-off studio shot, product rotates',
      'slow arc around the product',
      'slow push-in on the product label',
      'top-down orbit around the product'
    ],
    lights: [
      'clean studio softbox lighting, seamless white background',
      'dramatic product lighting with rim highlights',
      'warm premium light with subtle golden reflections',
      'cool minimalist studio light with hard shadows'
    ]
  },
  {
    id: 'lifestyle', num: 1, cat: '🔥 Incontournables',
    name: 'Lifestyle Authentique',
    emoji: '☀️',
    desc: 'Lumière naturelle, vie réelle, candide',
    basePrompt: 'Animate this image as an authentic lifestyle commercial. Natural daylight, candid feel, clean and optimistic atmosphere. The subject lives a real moment with the product. Preserve the exact subject identity, face, pose, clothing, and product.',
    actions: [
      'the subject moves naturally, breathing and smiling',
      'a gentle breeze moves the hair and fabric',
      'the subject turns slightly, catching the light',
      'the subject looks up, enjoying the moment'
    ],
    cameras: [
      'handheld with organic tremor, intimate feel',
      'slow dolly-in following the subject',
      'static frame with natural parallax',
      'slow pan following the movement'
    ],
    lights: [
      'warm natural daylight, soft shadows',
      'golden hour backlight, dreamy glow',
      'soft window light, cozy atmosphere',
      'bright outdoor sunlight, crisp'
    ]
  },
  {
    id: 'ugc', num: 293, cat: '🔥 Incontournables',
    name: 'UGC Créateur (Style TikTok)',
    emoji: '📱',
    desc: 'Vidéo créateur authentique, selfie, brut',
    basePrompt: 'Animate this image as a UGC (User Generated Content) creator video, TikTok-style. Authentic selfie framing, natural handheld motion, real person talking to camera. Preserve the exact subject identity, face, and product.',
    actions: [
      'the subject talks naturally to the camera, expressive gestures',
      'the subject leans slightly forward, engaging the viewer',
      'the subject laughs genuinely, eyes crinkling',
      'the subject holds the product up to show it to the camera'
    ],
    cameras: [
      'selfie arm-length framing, slight shake',
      'handheld, pointing the camera at the product',
      'close-up selfie with natural drift'
    ],
    lights: [
      'natural indoor daylight, window light',
      'ring light selfie glow',
      'warm bathroom vanity light',
      'cool daylight from a window'
    ]
  },
  {
    id: 'food', num: 6, cat: '🔥 Incontournables',
    name: 'Food & Gourmand',
    emoji: '🍽️',
    desc: 'Plat appétissant, vapeur, texture',
    basePrompt: 'Animate this food photo as an appetizing food commercial. Warm inviting tones, steam rising, sauce dripping, texture details. Mouth-watering presentation. Preserve the exact dish, plating, and composition.',
    actions: [
      'steam rises gently from the dish',
      'sauce slowly drips over the food',
      'ingredients gently shift, revealing texture',
      'a fork lifts a piece of the dish slowly'
    ],
    cameras: [
      'slow push-in on the dish, macro feel',
      'top-down rotating shot',
      'side angle capturing steam against light',
      'slow arc around the plate'
    ],
    lights: [
      'warm restaurant lighting, golden tones',
      'soft daylight from a window, rustic feel',
      'dramatic side light making textures pop',
      'moody bar lighting with warm highlights'
    ]
  },
  {
    id: 'beauty', num: 7, cat: '🔥 Incontournables',
    name: 'Beauté & Cosmétique',
    emoji: '🌸',
    desc: 'Peau lumineuse, textures soyeuses, raffiné',
    basePrompt: 'Animate this beauty or skincare photo as a refined beauty commercial. Soft diffused light, pastel tones, silky textures, glowing skin. Preserve the exact subject identity, face, skin, makeup, and product.',
    actions: [
      'the skin glows softly, light moving across the face',
      'the subject blinks slowly, lashes catching the light',
      'a drop of product falls in slow motion',
      'the subject touches their face gently'
    ],
    cameras: [
      'extreme close-up on the skin texture',
      'slow push-in on the face',
      'soft arc around the subject',
      'static with subtle breathing motion'
    ],
    lights: [
      'soft diffused beauty light, glowing skin',
      'warm pastel tones, dreamy atmosphere',
      'cool clean light, minimal and modern',
      'dramatic rim light with soft fill'
    ]
  },
  {
    id: 'luxury', num: 2, cat: '🔥 Incontournables',
    name: 'Luxe Premium',
    emoji: '💎',
    desc: 'Élégance sombre, reflets, raffinement',
    basePrompt: 'Animate this image as a luxury premium commercial. Dark elegant background, dramatic rim lighting, glossy reflections, high-end feel. Every detail feels expensive. Preserve the exact subject identity, product, and composition.',
    actions: [
      'light sweeps slowly across the product',
      'the subject turns their head elegantly',
      'a subtle reflection moves across a glossy surface',
      'the product catches a slow moving highlight'
    ],
    cameras: [
      'slow dolly-in with dramatic intensity',
      'slow arc around the subject, cinematic',
      'static locked-off with deep shadow composition',
      'slow tilt up revealing the product'
    ],
    lights: [
      'dramatic rim lighting on dark background',
      'single source warm light, deep shadows',
      'golden highlights on glossy surfaces',
      'cool blue tones with silver reflections'
    ]
  },
  {
    id: 'tech', num: 5, cat: '🔥 Incontournables',
    name: 'Tech & High-Tech',
    emoji: '🚀',
    desc: 'Design épuré, futurisme, précision',
    basePrompt: 'Animate this tech product photo as a sleek high-tech commercial. Clean minimal background, cool blue tones, futuristic feel, sharp details. Preserve the exact product identity, shape, and finish.',
    actions: [
      'the product rotates slowly revealing its design',
      'LED lights pulse softly on the product',
      'a digital interface animates on the product surface',
      'the product hovers slightly, glowing'
    ],
    cameras: [
      'slow push-in on the product',
      'orbital arc around the product',
      'macro close-up on the details',
      'top-down rotating view'
    ],
    lights: [
      'cool blue LED lighting',
      'minimalist white studio with soft shadows',
      'dark studio with colored accent lighting',
      'clean daylight, neutral tones'
    ]
  },
  {
    id: 'fashion', num: 17, cat: '🔥 Incontournables',
    name: 'Fashion Lookbook',
    emoji: '👗',
    desc: 'Défilé, tissus qui bougent, lumière studio',
    basePrompt: 'Animate this fashion photo as a luxury lookbook video. Studio lighting, model moving elegantly, fabric flowing, editorial magazine feel. Preserve the exact model identity, face, outfit, and pose.',
    actions: [
      'the fabric moves gently in a breeze',
      'the model walks forward confidently',
      'the model turns slowly, showing the outfit',
      'hair moves softly with natural motion'
    ],
    cameras: [
      'slow dolly-in on the model',
      'arc around the model, fashion-show style',
      'low angle looking up, powerful presence',
      'static frame with the model moving within'
    ],
    lights: [
      'clean studio lighting with soft shadows',
      'dramatic side light, editorial feel',
      'warm golden light, glamorous',
      'cool fashion lighting with a backdrop'
    ]
  },
  {
    id: 'unboxing', num: 292, cat: '🔥 Incontournables',
    name: 'Unboxing',
    emoji: '🎁',
    desc: 'Ouverture produit, révélation, excitation',
    basePrompt: 'Animate this image as an unboxing video. The viewer experiences the excitement of opening the product for the first time. Clean table, hands interacting, packaging opening, product revealed. Preserve the exact product identity.',
    actions: [
      'hands slowly open the packaging',
      'the product is lifted out, catching the light',
      'the product is placed on the table, softly',
      'tissue paper is folded back revealing the product'
    ],
    cameras: [
      'top-down view over the package',
      'handheld following the hands',
      'slow push-in as the product is revealed'
    ],
    lights: [
      'soft daylight from a window',
      'clean bright studio light',
      'warm cozy indoor light',
      'bright white e-commerce light'
    ]
  },
  {
    id: 'testimonial', num: 182, cat: '🔥 Incontournables',
    name: 'Témoignage Client',
    emoji: '💬',
    desc: 'Client satisfait parle à la caméra',
    basePrompt: 'Animate this image as a video testimonial. A satisfied customer speaks warmly to the camera about the product. Authentic, trustworthy, real. Preserve the exact subject identity, face, expression, and product.',
    actions: [
      'the subject talks naturally, nodding slightly',
      'the subject smiles, gesturing with their hands',
      'the subject looks at the product then at the camera',
      'the subject leans in, confiding'
    ],
    cameras: [
      'medium shot, documentary style',
      'close-up on the face, intimate',
      'slight handheld, authentic feel'
    ],
    lights: [
      'soft window light, natural',
      'warm indoor light, cozy',
      'clean neutral light, professional'
    ]
  },
  {
    id: 'before-after', num: 239, cat: '🔥 Incontournables',
    name: 'Avant / Après',
    emoji: '✨',
    desc: 'Transformation spectaculaire, révélation',
    basePrompt: 'Animate this image as a dramatic before/after reveal. The scene shows a transformation happening in front of the viewer. Preserve the exact subject identity, face, and product.',
    actions: [
      'the subject transforms, colors and light shifting',
      'the scene morphs from dull to vibrant',
      'a wipe effect reveals the new look',
      'the subject smiles as the transformation completes'
    ],
    cameras: [
      'static frame, transformation happens within',
      'slow push-in as the change occurs',
      'fast cut-style transition'
    ],
    lights: [
      'dull muted light transforming to warm vibrant light',
      'before: cool gray — after: warm golden',
      'dramatic light shift'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // ⚡ NIVEAU 2 — EFFETS DE MOUVEMENT COURANTS (13-24)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'dolly-zoom', num: 61, cat: '⚡ Mouvements',
    name: 'Dolly Zoom (Vertigo)',
    emoji: '🌀',
    desc: 'Effet Hitchcock, perspective qui se déforme',
    basePrompt: 'Animate this image with a dolly zoom (Vertigo) effect. The camera pushes in while zooming out, or vice versa, creating a disorienting perspective distortion. Subject stays exactly the same. Preserve the exact subject identity and composition.',
    actions: ['the background stretches and compresses dramatically'],
    cameras: ['dolly zoom, camera moving forward while zooming out'],
    lights: ['dramatic with deep focus', 'warm cinematic', 'cool intense']
  },
  {
    id: 'orbit-360', num: 62, cat: '⚡ Mouvements',
    name: 'Orbite 360°',
    emoji: '🔄',
    desc: 'Caméra tourne autour du sujet',
    basePrompt: 'Animate this image as a 360° orbit shot. The camera moves around the subject, revealing depth. Preserve the exact subject identity, face, pose, and clothing.',
    actions: ['the subject stands still, breathing subtly'],
    cameras: ['360° orbit around the subject at constant speed'],
    lights: ['consistent lighting all around', 'dramatic rim light', 'soft studio']
  },
  {
    id: 'drone', num: 63, cat: '⚡ Mouvements',
    name: 'Drone Aérien',
    emoji: '🚁',
    desc: 'Vue du ciel, survol, révélation',
    basePrompt: 'Animate this landscape or scene as an aerial drone shot. Smooth bird\'s eye view, sweeping motion. Preserve the exact scene, subject, and composition.',
    actions: ['the drone reveals more of the scene as it moves'],
    cameras: ['aerial drone flyover', 'top-down drone rotating', 'drone pulling up to reveal horizon'],
    lights: ['golden hour aerial light', 'cool morning light', 'sunset sky']
  },
  {
    id: 'crane', num: 64, cat: '⚡ Mouvements',
    name: 'Crane Shot',
    emoji: '🏗️',
    desc: 'Montée verticale dramatique',
    basePrompt: 'Animate this image as a dramatic crane shot. The camera rises vertically, revealing more of the scene. Preserve the exact subject and composition.',
    actions: ['the scene reveals as the camera rises'],
    cameras: ['crane shot rising vertically', 'boom down revealing the subject'],
    lights: ['dramatic top light', 'warm sunset', 'cool cinematic']
  },
  {
    id: 'steadicam', num: 65, cat: '⚡ Mouvements',
    name: 'Steadicam Fluide',
    emoji: '🎥',
    desc: 'Suivi du sujet sans secousses',
    basePrompt: 'Animate this image with a smooth steadicam follow shot. The camera tracks the subject fluidly. Preserve the exact subject identity, face, and pose.',
    actions: ['the subject walks slowly forward'],
    cameras: ['steadicam following behind the subject', 'side steadicam tracking'],
    lights: ['natural daylight', 'warm interior', 'cool industrial']
  },
  {
    id: 'push-in', num: 67, cat: '⚡ Mouvements',
    name: 'Push-In Dramatique',
    emoji: '➡️',
    desc: 'Zoom lent vers le visage',
    basePrompt: 'Animate this image with a slow dramatic push-in toward the subject\'s face. Intense, cinematic. Preserve the exact subject identity, face, and expression.',
    actions: ['the subject looks into the camera, breathing slowly'],
    cameras: ['slow push-in toward the face'],
    lights: ['dramatic side light', 'soft warm', 'cool cinematic']
  },
  {
    id: 'pull-out', num: 68, cat: '⚡ Mouvements',
    name: 'Pull-Out Révélation',
    emoji: '⬅️',
    desc: 'Dézoom qui révèle le contexte',
    basePrompt: 'Animate this image with a slow pull-out revealing the context around the subject. Surprising and cinematic. Preserve the exact subject and composition.',
    actions: ['the environment reveals itself around the subject'],
    cameras: ['slow pull-out, the frame expands'],
    lights: ['dramatic with surrounding darkness', 'natural daylight', 'cinematic warm']
  },
  {
    id: 'whip-pan', num: 69, cat: '⚡ Mouvements',
    name: 'Whip Pan',
    emoji: '💨',
    desc: 'Rotation rapide entre deux scènes',
    basePrompt: 'Animate this image as a whip pan transition. Fast camera rotation, motion blur, dynamic energy. Preserve the exact subject identity.',
    actions: ['the subject holds still while the camera whips past'],
    cameras: ['fast whip pan rotation'],
    lights: ['dynamic with motion streaks', 'neon glow', 'dramatic']
  },
  {
    id: 'rack-focus', num: 70, cat: '⚡ Mouvements',
    name: 'Rack Focus',
    emoji: '🔍',
    desc: 'Passage net/flou entre avant et arrière-plan',
    basePrompt: 'Animate this image with a rack focus effect. The focus shifts from foreground to background, or vice versa. Cinematic and subtle. Preserve the exact subject identity.',
    actions: ['the foreground blurs as the background sharpens'],
    cameras: ['static frame with focus rack'],
    lights: ['soft cinematic', 'dramatic side', 'natural']
  },
  {
    id: 'parallax', num: 71, cat: '⚡ Mouvements',
    name: 'Parallaxe 2.5D',
    emoji: '📐',
    desc: 'Profondeur à partir d\'une image 2D',
    basePrompt: 'Animate this image with 2.5D parallax depth. Layers move at different speeds creating a sense of depth. Preserve the exact subject and composition.',
    actions: ['layers slide past each other at different speeds'],
    cameras: ['slow lateral camera move revealing parallax'],
    lights: ['consistent', 'dramatic', 'soft ambient']
  },
  {
    id: 'pov', num: 74, cat: '⚡ Mouvements',
    name: 'Caméra Subjective (POV)',
    emoji: '👁️',
    desc: 'On voit à travers les yeux du sujet',
    basePrompt: 'Animate this image as a POV (point of view) shot. The camera becomes the subject\'s eyes. Immersive and intimate. Preserve the environment and the product.',
    actions: ['the hands of the subject enter the frame'],
    cameras: ['POV with subtle head movement'],
    lights: ['natural for the scene', 'dramatic', 'ambient']
  },
  {
    id: 'handheld', num: 75, cat: '⚡ Mouvements',
    name: 'Caméra Épaule',
    emoji: '📹',
    desc: 'Tremblement organique, urgence',
    basePrompt: 'Animate this image with a handheld camera feel. Organic tremor, urgent atmosphere, documentary style. Preserve the exact subject identity.',
    actions: ['the subject moves naturally'],
    cameras: ['handheld with natural tremor'],
    lights: ['natural', 'gritty', 'dramatic']
  },

  // ═══════════════════════════════════════════════════════════════
  // 💥 NIVEAU 3 — EFFETS SPECTACULAIRES (25-40)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'explosion', num: 91, cat: '💥 Spectaculaire',
    name: 'Explosion Cinématique',
    emoji: '💥',
    desc: 'Boule de feu, onde de choc, débris',
    basePrompt: 'Animate this image with a cinematic explosion in the background. Fireball, shockwave, flying debris. The subject remains calm and composed. Preserve the exact subject identity and pose.',
    actions: ['the explosion expands behind the subject'],
    cameras: ['static frame with the explosion in the background', 'slow push-in on the subject ignoring the blast'],
    lights: ['orange fire glow', 'dramatic warm light from the blast']
  },
  {
    id: 'super-speed', num: 92, cat: '💥 Spectaculaire',
    name: 'Super Vitesse',
    emoji: '⚡',
    desc: 'Effet Flash, traînées, distorsion',
    basePrompt: 'Animate this image with a super speed effect. Lightning trails, motion blur, electric energy surrounding the subject. Preserve the exact subject identity.',
    actions: ['the subject zooms forward leaving a trail of light'],
    cameras: ['fast track following the subject'],
    lights: ['electric blue and white', 'yellow lightning flashes', 'neon streaks']
  },
  {
    id: 'telekinesis', num: 93, cat: '💥 Spectaculaire',
    name: 'Télékinésie',
    emoji: '🧠',
    desc: 'Objets qui volent, force invisible',
    basePrompt: 'Animate this image with telekinesis. Objects float around the subject, moved by an invisible force. Preserve the exact subject identity, face, and pose.',
    actions: ['objects rise and orbit slowly around the subject'],
    cameras: ['slow arc around the subject', 'static dramatic frame'],
    lights: ['dramatic with glowing highlights', 'cool mysterious', 'warm mystical']
  },
  {
    id: 'energy-ball', num: 94, cat: '💥 Spectaculaire',
    name: 'Boule d\'Énergie',
    emoji: '🔮',
    desc: 'Énergie entre les mains, pouvoir',
    basePrompt: 'Animate this image with a glowing energy ball forming between the subject\'s hands. Powerful, magical, cinematic. Preserve the exact subject identity and pose.',
    actions: ['a glowing orb forms and pulses between the hands'],
    cameras: ['slow push-in on the hands'],
    lights: ['blue mystical glow', 'warm magical light', 'white intense glow']
  },
  {
    id: 'lightning', num: 95, cat: '💥 Spectaculaire',
    name: 'Éclairs & Foudre',
    emoji: '🌩️',
    desc: 'Pouvoir électrique, yeux brillants',
    basePrompt: 'Animate this image with electrical lightning powers. Electricity arcs around the subject, eyes glow, hair rises slightly. Preserve the exact subject identity and face.',
    actions: ['lightning arcs crackle around the subject'],
    cameras: ['static dramatic frame', 'slow push-in'],
    lights: ['blue-white electric light', 'dark storm atmosphere']
  },
  {
    id: 'ice', num: 96, cat: '💥 Spectaculaire',
    name: 'Glace & Givre',
    emoji: '❄️',
    desc: 'Pouvoir de glace, cristaux, souffle froid',
    basePrompt: 'Animate this image with ice powers. Ice crystals form around the subject, frost spreads, cold breath visible. Preserve the exact subject identity and face.',
    actions: ['ice crystals grow and float around the subject'],
    cameras: ['slow push-in', 'arc around the subject'],
    lights: ['cool blue and white', 'icy cyan glow']
  },
  {
    id: 'teleport', num: 97, cat: '💥 Spectaculaire',
    name: 'Téléportation',
    emoji: '✨',
    desc: 'Disparition / apparition avec fumée',
    basePrompt: 'Animate this image with a teleportation effect. The subject dissolves into particles and reappears. Preserve the exact subject identity.',
    actions: ['the subject dissolves into glowing particles and reforms'],
    cameras: ['static frame capturing the effect'],
    lights: ['mystical glow', 'cool blue shimmer', 'warm magical']
  },
  {
    id: 'levitation', num: 98, cat: '💥 Spectaculaire',
    name: 'Lévitation',
    emoji: '🕊️',
    desc: 'Le sujet flotte dans les airs',
    basePrompt: 'Animate this image with levitation. The subject floats gently above the ground. Surreal and magical. Preserve the exact subject identity and pose.',
    actions: ['the subject rises slowly into the air'],
    cameras: ['low angle looking up at the floating subject'],
    lights: ['mystical glow beneath', 'soft celestial light', 'dramatic side light']
  },
  {
    id: 'aura', num: 46, cat: '💥 Spectaculaire',
    name: 'Aura Énergétique',
    emoji: '🔥',
    desc: 'Aura qui entoure le sujet',
    basePrompt: 'Animate this image with a glowing aura surrounding the subject. Powerful energy field, colored light. Preserve the exact subject identity and pose.',
    actions: ['the aura pulses and flares around the subject'],
    cameras: ['slow push-in on the subject', 'arc shot'],
    lights: ['colored aura glow', 'warm orange flames', 'cool blue energy']
  },
  {
    id: 'slowmo-impact', num: 48, cat: '💥 Spectaculaire',
    name: 'Impact Au Ralenti',
    emoji: '🐢',
    desc: 'Impact ralenti style 300 / Matrix',
    basePrompt: 'Animate this image as a slow motion impact moment. Extreme slow motion, particles suspended in air, dramatic tension. Preserve the exact subject identity.',
    actions: ['particles and debris float suspended in slow motion'],
    cameras: ['extremely slow push-in', 'arc around the impact'],
    lights: ['dramatic with suspended particles catching light', 'warm fire glow', 'cool intensity']
  },
  {
    id: 'rain', num: 35, cat: '💥 Spectaculaire',
    name: 'Pluie',
    emoji: '🌧️',
    desc: 'Pluie qui tombe, gouttes, reflets',
    basePrompt: 'Animate this image with falling rain. Drops hit surfaces, reflections shimmer, atmospheric mood. Preserve the exact subject identity and composition.',
    actions: ['rain falls steadily around the subject'],
    cameras: ['static frame with rain', 'slow push-in'],
    lights: ['moody gray light', 'warm street light through rain', 'blue night with reflections']
  },
  {
    id: 'storm', num: 112, cat: '💥 Spectaculaire',
    name: 'Orage',
    emoji: '⛈️',
    desc: 'Éclairs multiples, pluie battante',
    basePrompt: 'Animate this image with a thunderstorm. Rain batters, lightning flashes, dramatic atmosphere. Preserve the exact subject identity and composition.',
    actions: ['lightning flashes illuminate the scene'],
    cameras: ['static frame with storm', 'slow push-in'],
    lights: ['dark stormy light with lightning flashes', 'blue dramatic']
  },
  {
    id: 'snow', num: 34, cat: '💥 Spectaculaire',
    name: 'Neige',
    emoji: '❄️',
    desc: 'Flocons qui tombent doucement',
    basePrompt: 'Animate this image with softly falling snow. Flakes drift gently, cold atmosphere, peaceful. Preserve the exact subject identity and composition.',
    actions: ['snowflakes drift slowly through the frame'],
    cameras: ['static frame with snow'],
    lights: ['soft cold light', 'warm light through snow', 'blue winter glow']
  },
  {
    id: 'mist', num: 8, cat: '💥 Spectaculaire',
    name: 'Brume Mystique',
    emoji: '🌫️',
    desc: 'Halo atmosphérique, brouillard',
    basePrompt: 'Animate this image with mystical mist. Atmospheric haze, diffused glowing light, ethereal fog. Preserve the exact subject identity and composition.',
    actions: ['mist drifts slowly through the scene'],
    cameras: ['slow push-in through the mist'],
    lights: ['soft diffused light', 'glowing warm light in mist', 'cool blue mystical']
  },
  {
    id: 'fire', num: 57, cat: '💥 Spectaculaire',
    name: 'Feu & Flammes',
    emoji: '🔥',
    desc: 'Flammes, braises, chaleur intense',
    basePrompt: 'Animate this image with fire and flames. Flames rise, embers float, intense heat. Preserve the exact subject identity.',
    actions: ['flames rise around the subject'],
    cameras: ['static dramatic frame', 'slow push-in'],
    lights: ['orange fire glow', 'warm intense light', 'red dramatic fire']
  },
  {
    id: 'particles', num: 36, cat: '💥 Spectaculaire',
    name: 'Particules Lumineuses',
    emoji: '✨',
    desc: 'Poussière dorée, lucioles, bokeh',
    basePrompt: 'Animate this image with floating light particles. Golden dust, fireflies, bokeh, dreamy atmosphere. Preserve the exact subject identity and composition.',
    actions: ['glowing particles float gently through the scene'],
    cameras: ['slow push-in', 'static dreamy frame'],
    lights: ['warm golden glow', 'cool shimmer', 'soft bokeh']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🎨 NIVEAU 4 — STYLES ARTISTIQUES (41-56)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'anime', num: 1, cat: '🎨 Styles',
    name: 'Studio Anime (Ghibli)',
    emoji: '🌿',
    desc: 'Dessin animé japonais, aquarelle',
    basePrompt: 'Transform the entire image into a Studio Ghibli / Hayao Miyazaki anime style. Hand-painted watercolor backgrounds, cel-shaded characters, soft warm colors. Preserve the same subject, pose, and composition, but reinterpret everything in anime style.',
    actions: ['hair moves gently in the wind', 'a petal drifts past the character'],
    cameras: ['slow pan across painted background', 'gentle push-in'],
    lights: ['warm anime sunset', 'cool morning light', 'pastel twilight']
  },
  {
    id: 'simpson', num: 2, cat: '🎨 Styles',
    name: 'Les Simpson',
    emoji: '🍩',
    desc: 'Cartoon jaune, contours noirs',
    basePrompt: 'Transform the entire image into The Simpsons cartoon style. Yellow-skinned characters, thick black outlines, flat saturated colors, Matt Groening art style. Preserve the same subject, pose, and composition.',
    actions: ['character blinks and shifts weight'],
    cameras: ['static frame with subtle motion'],
    lights: ['flat cartoon lighting', 'bright colorful']
  },
  {
    id: 'pixar', num: 6, cat: '🎨 Styles',
    name: 'Pixar 3D',
    emoji: '✨',
    desc: 'Rendu 3D Pixar, personnage stylisé',
    basePrompt: 'Transform the entire image into high-quality Pixar-style 3D animation. Subsurface scattering, cinematic lighting, stylized characters. Preserve the same subject, pose, and composition.',
    actions: ['character moves naturally with 3D weight'],
    cameras: ['smooth 3D camera move'],
    lights: ['cinematic 3D lighting', 'warm golden hour', 'studio 3D']
  },
  {
    id: 'cyberpunk', num: 23, cat: '🎨 Styles',
    name: 'Cyberpunk Néon',
    emoji: '🌃',
    desc: 'Néons roses/cyans, pluie, futurisme',
    basePrompt: 'Transform the image into a cyberpunk futuristic aesthetic. Neon pink and cyan lighting, holographic ads, wet reflective streets, Blade Runner atmosphere. Preserve the same subject, pose, and composition.',
    actions: ['neon signs flicker', 'rain falls with neon reflections'],
    cameras: ['slow dolly-in through the rainy street', 'arc shot'],
    lights: ['neon magenta and cyan', 'holographic projections', 'wet street glow']
  },
  {
    id: 'bw', num: 3, cat: '🎨 Styles',
    name: 'Noir & Blanc',
    emoji: '⚫',
    desc: 'Monochrome élégant, grain argentique',
    basePrompt: 'Animate this image in elegant black and white cinematic style. High contrast monochrome, deep blacks, luminous whites, subtle film grain. Preserve the exact subject identity, face, pose, and clothing.',
    actions: ['the subject turns their head slowly'],
    cameras: ['slow push-in', 'static dramatic'],
    lights: ['harsh single-source light', 'soft diffused window light', 'venetian blind shadows']
  },
  {
    id: 'vintage', num: 6, cat: '🎨 Styles',
    name: 'Vintage Super 8',
    emoji: '📽️',
    desc: 'Grain, vignettage, chaleur rétro',
    basePrompt: 'Transform the image into vintage Super 8 film aesthetic. Grainy texture, subtle vignette, warm faded colors, soft focus edges. Preserve the same subject, pose, and composition.',
    actions: ['the subject moves with old film jitter'],
    cameras: ['handheld with old film feel'],
    lights: ['warm faded tones', 'soft golden light']
  },
  {
    id: 'vhs', num: 37, cat: '🎨 Styles',
    name: 'VHS / Rétro 80s',
    emoji: '📼',
    desc: 'Vieux magnétoscope, distorsions',
    basePrompt: 'Transform the image into VHS video aesthetic. Scanlines, chromatic aberration, tape distortion, 80s vibes. Preserve the same subject, pose, and composition.',
    actions: ['VHS tracking lines roll across the frame'],
    cameras: ['static frame with VHS texture'],
    lights: ['80s neon glow', 'warm tungsten', 'cold blue retro']
  },
  {
    id: 'watercolor', num: 8, cat: '🎨 Styles',
    name: 'Aquarelle Animée',
    emoji: '🎨',
    desc: 'Peinture aquarelle qui coule et se mélange',
    basePrompt: 'Transform the image into a dreamy watercolor painting animation. Soft bleeding edges, translucent washes, paper texture. Preserve the same subject, pose, and composition.',
    actions: ['colors bleed and blend gently'],
    cameras: ['static dreamy frame'],
    lights: ['soft diffuse light', 'warm pastel tones']
  },
  {
    id: 'oil', num: 9, cat: '🎨 Styles',
    name: 'Peinture à l\'Huile',
    emoji: '🖼️',
    desc: 'Huile classique, empâtement, brushstrokes',
    basePrompt: 'Transform the image into a classical oil painting animation. Visible impasto brushstrokes, rich textured paint, old master technique. Preserve the same subject, pose, and composition.',
    actions: ['paint strokes animate subtly'],
    cameras: ['slow push-in'],
    lights: ['chiaroscuro', 'warm classical light', 'dramatic']
  },
  {
    id: 'pixel', num: 279, cat: '🎨 Styles',
    name: 'Pixel Art',
    emoji: '👾',
    desc: 'Style 8/16 bits, rétro gaming',
    basePrompt: 'Transform the image into pixel art animation, 8-bit or 16-bit retro gaming style. Limited color palette, visible pixels, nostalgic. Preserve the same subject, pose, and composition.',
    actions: ['character animates in pixel-art style'],
    cameras: ['static pixel frame'],
    lights: ['flat pixel lighting']
  },
  {
    id: 'manga', num: 3, cat: '🎨 Styles',
    name: 'Manga N&B',
    emoji: '🖤',
    desc: 'Style manga japonais, trames, encrage',
    basePrompt: 'Transform the image into black and white Japanese manga style. Stark ink outlines, dramatic screentones, high contrast. Preserve the same subject, pose, and composition.',
    actions: ['character animates with manga flair'],
    cameras: ['static frame with manga panels feel'],
    lights: ['high contrast B&W', 'dramatic ink']
  },
  {
    id: 'comics', num: 7, cat: '🎨 Styles',
    name: 'BD Franco-Belge',
    emoji: '📘',
    desc: 'Ligne claire, couleurs vives',
    basePrompt: 'Transform the image into Franco-Belgian bande dessinée style. Ligne claire technique, uniform clean ink outlines, flat vivid colors. Preserve the same subject, pose, and composition.',
    actions: ['characters animate with BD flair'],
    cameras: ['static frame'],
    lights: ['flat BD lighting', 'bright colors']
  },
  {
    id: 'claymation', num: 10, cat: '🎨 Styles',
    name: 'Claymation',
    emoji: '🧱',
    desc: 'Pâte à modeler, stop-motion',
    basePrompt: 'Transform the image into claymation stop-motion animation. Plasticine texture, fingerprint details, Aardman Studios style. Preserve the same subject, pose, and composition.',
    actions: ['character moves with clay stop-motion style'],
    cameras: ['slight stop-motion jitter'],
    lights: ['warm studio stop-motion light']
  },
  {
    id: 'vaporwave', num: 11, cat: '🎨 Styles',
    name: 'Vaporwave',
    emoji: '🌴',
    desc: 'Nostalgie 90s, dégradés pastel',
    basePrompt: 'Transform the image into vaporwave aesthetic. Nostalgic 90s imagery, pastel gradients, VHS quality, retro digital. Preserve the same subject, pose, and composition.',
    actions: ['subtle 90s digital motion'],
    cameras: ['static frame with VHS feel'],
    lights: ['pink and cyan gradient', 'sunset pastel']
  },
  {
    id: 'surreal', num: 12, cat: '🎨 Styles',
    name: 'Surréaliste',
    emoji: '🌀',
    desc: 'Dali, impossible, rêve',
    basePrompt: 'Transform the image into surrealist aesthetic. Impossible juxtapositions, dreamlike distortions, Salvador Dali influence. Preserve the same subject, pose, and composition.',
    actions: ['surreal elements morph and shift'],
    cameras: ['slow surreal push-in'],
    lights: ['dreamlike', 'warm surreal', 'cool bizarre']
  },
  {
    id: 'neon-sign', num: 286, cat: '🎨 Styles',
    name: 'Néon Sign',
    emoji: '💡',
    desc: 'Tube néon lumineux, ambiance nocturne',
    basePrompt: 'Transform the image into a neon sign aesthetic. Glowing neon tubes, night atmosphere, vibrant colored light. Preserve the same subject, pose, and composition.',
    actions: ['neon flickers and glows'],
    cameras: ['static frame', 'slow push-in'],
    lights: ['neon pink, blue, green', 'night atmospheric']
  },
  {
    id: 'hologram', num: 287, cat: '🎨 Styles',
    name: 'Hologramme',
    emoji: '🔷',
    desc: 'Transparence, scanlines, projection',
    basePrompt: 'Transform the image into a holographic projection aesthetic. Translucent, scanlines, blue glow, sci-fi projection. Preserve the same subject, pose, and composition.',
    actions: ['hologram flickers and scans'],
    cameras: ['static hologram frame'],
    lights: ['blue holographic glow', 'cyan sci-fi']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🌟 NIVEAU 5 — AMBIANCES & ÉMOTIONS (57-60+)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'golden-hour', num: 3, cat: '🌟 Ambiances',
    name: 'Golden Hour',
    emoji: '🌅',
    desc: 'Lumière dorée de fin de journée',
    basePrompt: 'Animate this image with warm golden hour light. Long amber shadows, luminous atmosphere, dreamy glow. Preserve the exact subject identity and composition.',
    actions: ['warm light gently shifts across the subject'],
    cameras: ['slow push-in', 'static warm frame'],
    lights: ['warm amber sunlight', 'golden backlight', 'soft warm glow']
  },
  {
    id: 'moonlight', num: 11, cat: '🌟 Ambiances',
    name: 'Clair de Lune',
    emoji: '🌙',
    desc: 'Ambiance bleutée, nuit paisible',
    basePrompt: 'Animate this image with cool moonlight atmosphere. Blue and silver tones, soft lunar glow, peaceful night mood. Preserve the exact subject identity and composition.',
    actions: ['soft moonlight shifts gently'],
    cameras: ['static calm frame'],
    lights: ['cool blue moonlight', 'silver glow', 'peaceful night']
  },
  {
    id: 'neon-urban', num: 5, cat: '🌟 Ambiances',
    name: 'Néon Urbain',
    emoji: '🌆',
    desc: 'Reflets colorés nocturnes',
    basePrompt: 'Animate this image with neon-soaked urban night atmosphere. Colorful reflections, cinematic urban glow, magenta and cyan accents. Preserve the exact subject identity and composition.',
    actions: ['neon signs flicker in the background'],
    cameras: ['slow dolly-in through the street'],
    lights: ['neon magenta and cyan', 'wet street glow', 'urban night']
  },
  {
    id: 'dramatic', num: 7, cat: '🌟 Ambiances',
    name: 'Contraste Dramatique',
    emoji: '🌓',
    desc: 'Ombres profondes, clair-obscur',
    basePrompt: 'Animate this image with high contrast dramatic lighting. Deep shadows, bright highlights, chiaroscuro effect. Preserve the exact subject identity and composition.',
    actions: ['light and shadow shift across the subject'],
    cameras: ['slow push-in', 'static dramatic'],
    lights: ['harsh contrast', 'single source dramatic', 'chiaroscuro']
  }
];

// ══════════════════════════════════════════════════════════════════
// EXPORT
// ══════════════════════════════════════════════════════════════════
window.MODES = MODES;
