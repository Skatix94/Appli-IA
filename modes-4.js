// ══════════════════════════════════════════════════════════════════
// MODES — Fichier 5 (241 à 300)
// Catégories : Fantasy, Mythologie, Cinéma, Illusions, Bonus
// ══════════════════════════════════════════════════════════════════
const MODES_5 = [
  // ═══════════════════════════════════════════════════════════════
  // 🐉 FANTASY (241-255)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'dragon', num: 251, cat: '🐉 Fantasy',
    name: 'Dragon',
    emoji: '🐉',
    desc: 'Vol, feu, écaille',
    basePrompt: 'Animate this image with a dragon. Flying, fire, scales. Preserve the exact scene and subject.',
    actions: ['the dragon flies overhead, fire blazing'],
    cameras: ['wide epic shot'],
    lights: ['dramatic fire glow']
  },
  {
    id: 'unicorn', num: 252, cat: '🐉 Fantasy',
    name: 'Licorne',
    emoji: '🦄',
    desc: 'Forêt magique, arc-en-ciel',
    basePrompt: 'Animate this image with a unicorn. Magic forest, rainbow, sparkles. Preserve the exact scene.',
    actions: ['the unicorn glows, sparkles float'],
    cameras: ['slow pan'],
    lights: ['magical pastel light']
  },
  {
    id: 'mermaid', num: 253, cat: '🐉 Fantasy',
    name: 'Sirène',
    emoji: '🧜',
    desc: 'Océan, chant, queue',
    basePrompt: 'Animate this image as a mermaid scene. Ocean, song, tail. Preserve the exact subject identity.',
    actions: ['the mermaid swims gracefully'],
    cameras: ['underwater shot'],
    lights: ['deep blue ocean glow']
  },
  {
    id: 'phoenix', num: 254, cat: '🐉 Fantasy',
    name: 'Phénix',
    emoji: '🔥',
    desc: 'Renaissance dans les flammes',
    basePrompt: 'Animate this image as a phoenix rebirth. Flames, feathers, resurrection. Preserve the exact scene.',
    actions: ['the phoenix rises from ashes, flames spreading'],
    cameras: ['wide dramatic shot'],
    lights: ['intense fire glow']
  },
  {
    id: 'werewolf', num: 255, cat: '🐉 Fantasy',
    name: 'Loup-Garou',
    emoji: '🐺',
    desc: 'Transformation, pleine lune',
    basePrompt: 'Animate this image as a werewolf transformation. Full moon, fur, fangs. Preserve the exact subject identity.',
    actions: ['the subject transforms under the full moon'],
    cameras: ['dramatic close-up'],
    lights: ['moonlight, dark shadows']
  },
  {
    id: 'vampire', num: 256, cat: '🐉 Fantasy',
    name: 'Vampire',
    emoji: '🧛',
    desc: 'Nuit, château, crocs',
    basePrompt: 'Animate this image as a vampire scene. Night, castle, fangs. Preserve the exact subject identity.',
    actions: ['the vampire shows fangs, eyes glowing red'],
    cameras: ['slow push-in'],
    lights: ['candlelight, dark shadows']
  },
  {
    id: 'ghost', num: 257, cat: '🐉 Fantasy',
    name: 'Fantôme',
    emoji: '👻',
    desc: 'Apparition, transparence, froid',
    basePrompt: 'Animate this image as a ghost apparition. Transparent, ethereal, cold atmosphere. Preserve the exact scene.',
    actions: ['the ghost appears and fades'],
    cameras: ['slow push-in'],
    lights: ['cold blue mist']
  },
  {
    id: 'angel-demon', num: 258, cat: '🐉 Fantasy',
    name: 'Ange / Démon',
    emoji: '😇',
    desc: 'Ailes, halo, contraste',
    basePrompt: 'Animate this image as an angel or demon scene. Wings, halo, contrast. Preserve the exact subject identity.',
    actions: ['wings spread wide, halo glowing'],
    cameras: ['wide epic shot'],
    lights: ['divine light or dark fire']
  },
  {
    id: 'norse-god', num: 259, cat: '🐉 Fantasy',
    name: 'Dieu Nordique',
    emoji: '⚡',
    desc: 'Tonnerre, marteau, Valhalla',
    basePrompt: 'Animate this image as a Norse god scene. Thunder, hammer, Valhalla. Preserve the exact subject identity.',
    actions: ['lightning strikes, hammer glows'],
    cameras: ['low angle epic shot'],
    lights: ['dramatic storm light']
  },
  {
    id: 'abyss', num: 260, cat: '🐉 Fantasy',
    name: 'Créature des Abysses',
    emoji: '🦑',
    desc: 'Profondeur, tentacules, noirceur',
    basePrompt: 'Animate this image as a deep sea abyss scene. Depth, tentacles, darkness. Preserve the exact scene.',
    actions: ['tentacles move, darkness deepens'],
    cameras: ['underwater shot'],
    lights: ['bioluminescent glow']
  },
  {
    id: 'fairy', num: 343, cat: '🐉 Fantasy',
    name: 'Fée',
    emoji: '🧚',
    desc: 'Petite, lumineuse, magique',
    basePrompt: 'Animate this image as a fairy scene. Small glowing fairy, magic. Preserve the exact scene.',
    actions: ['the fairy flies, leaving sparkles'],
    cameras: ['slow push-in'],
    lights: ['magical glow']
  },
  {
    id: 'wizard', num: 344, cat: '🐉 Fantasy',
    name: 'Magicien',
    emoji: '🧙',
    desc: 'Sorts, bâton, magie',
    basePrompt: 'Animate this image as a wizard scene. Spells, staff, magic. Preserve the exact subject identity.',
    actions: ['spells fly from the staff'],
    cameras: ['dramatic close-up'],
    lights: ['magical glow']
  },
  {
    id: 'elf', num: 345, cat: '🐉 Fantasy',
    name: 'Elfe',
    emoji: '🧝',
    desc: 'Oreilles pointues, forêt, grâce',
    basePrompt: 'Animate this image as an elf scene. Pointed ears, forest, grace. Preserve the exact subject identity.',
    actions: ['the elf moves gracefully through the forest'],
    cameras: ['slow pan'],
    lights: ['dappled forest light']
  },
  {
    id: 'troll', num: 346, cat: '🐉 Fantasy',
    name: 'Troll',
    emoji: '👹',
    desc: 'Grand, brute, caverne',
    basePrompt: 'Animate this image as a troll scene. Giant, brute, cave. Preserve the exact scene.',
    actions: ['the troll roars, ground shaking'],
    cameras: ['low angle epic'],
    lights: ['dark cave fire']
  },
  {
    id: 'magic-forest', num: 347, cat: '🐉 Fantasy',
    name: 'Forêt Magique',
    emoji: '🌲',
    desc: 'Arbres lumineux, lucioles',
    basePrompt: 'Animate this image as a magical forest. Glowing trees, fireflies. Preserve the exact scene.',
    actions: ['fireflies float, trees glow'],
    cameras: ['slow pan'],
    lights: ['magical forest glow']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🎬 GENRES CINÉMA (256-275)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'western', num: 261, cat: '🎬 Cinéma',
    name: 'Western',
    emoji: '🤠',
    desc: 'Duel, poussière, coucher de soleil',
    basePrompt: 'Animate this image as a western movie scene. Duel, dust, sunset. Preserve the exact scene.',
    actions: ['tumbleweed rolls, duel tension'],
    cameras: ['wide western shot'],
    lights: ['golden western light']
  },
  {
    id: 'polar', num: 262, cat: '🎬 Cinéma',
    name: 'Polar',
    emoji: '🕵️',
    desc: 'Enquête, pluie, imperméable',
    basePrompt: 'Animate this image as a film noir detective scene. Investigation, rain, trench coat. Preserve the exact scene.',
    actions: ['rain falls, shadow moves'],
    cameras: ['slow push-in'],
    lights: ['rainy night light']
  },
  {
    id: 'horror', num: 263, cat: '🎬 Cinéma',
    name: 'Horreur',
    emoji: '😱',
    desc: 'Saut, ombre, silence',
    basePrompt: 'Animate this image as a horror movie scene. Jump scares, shadows, tension. Preserve the exact scene.',
    actions: ['shadows move, tension rises'],
    cameras: ['handheld with tremor'],
    lights: ['dark with flickering light']
  },
  {
    id: 'comedy', num: 264, cat: '🎬 Cinéma',
    name: 'Comédie',
    emoji: '😂',
    desc: 'Gag, timing, expression',
    basePrompt: 'Animate this image as a comedy scene. Gag, timing, expressive reactions. Preserve the exact subject identity.',
    actions: ['the subject reacts comically'],
    cameras: ['static frame'],
    lights: ['bright cheerful light']
  },
  {
    id: 'romance', num: 265, cat: '🎬 Cinéma',
    name: 'Romance',
    emoji: '💕',
    desc: 'Regard, pluie, baiser',
    basePrompt: 'Animate this image as a romantic scene. Gaze, rain, kiss. Preserve the exact subject identity.',
    actions: ['the couple gazes, rain falling softly'],
    cameras: ['slow push-in'],
    lights: ['warm romantic glow']
  },
  {
    id: 'sci-fi', num: 266, cat: '🎬 Cinéma',
    name: 'Science-Fiction',
    emoji: '🛸',
    desc: 'Futur, technologie, question',
    basePrompt: 'Animate this image as a science fiction scene. Future, technology, mystery. Preserve the exact scene.',
    actions: ['futuristic elements glow, tech animates'],
    cameras: ['slow pan'],
    lights: ['cool sci-fi glow']
  },
  {
    id: 'fantasy-cine', num: 267, cat: '🎬 Cinéma',
    name: 'Fantasy Cinéma',
    emoji: '🧝',
    desc: 'Quête, magie, créature',
    basePrompt: 'Animate this image as an epic fantasy scene. Quest, magic, creature. Preserve the exact scene.',
    actions: ['magic glows, creature appears'],
    cameras: ['wide epic shot'],
    lights: ['magical dramatic light']
  },
  {
    id: 'thriller', num: 268, cat: '🎬 Cinéma',
    name: 'Thriller',
    emoji: '😰',
    desc: 'Tension, poursuite, twist',
    basePrompt: 'Animate this image as a thriller scene. Tension, chase, twist. Preserve the exact scene.',
    actions: ['tension builds, sudden movement'],
    cameras: ['dynamic following'],
    lights: ['dramatic shadow']
  },
  {
    id: 'documentary', num: 269, cat: '🎬 Cinéma',
    name: 'Documentaire',
    emoji: '🎥',
    desc: 'Réel, témoignage, archive',
    basePrompt: 'Animate this image as a documentary scene. Real, testimony, archive. Preserve the exact scene.',
    actions: ['the scene comes to life authentically'],
    cameras: ['handheld'],
    lights: ['natural light']
  },
  {
    id: 'film-noir', num: 270, cat: '🎬 Cinéma',
    name: 'Film Noir',
    emoji: '🚬',
    desc: 'Ombre, cigarette, femme fatale',
    basePrompt: 'Animate this image as a film noir scene. Shadows, cigarette, femme fatale. Preserve the exact scene.',
    actions: ['smoke drifts, shadows move'],
    cameras: ['slow push-in'],
    lights: ['high contrast noir light']
  },
  {
    id: 'musical', num: 271, cat: '🎬 Cinéma',
    name: 'Comédie Musicale',
    emoji: '🎭',
    desc: 'Danse, chant, couleur',
    basePrompt: 'Animate this image as a musical scene. Dance, song, color. Preserve the exact scene.',
    actions: ['the scene dances, colorful'],
    cameras: ['wide dynamic shot'],
    lights: ['bright colorful']
  },
  {
    id: 'war', num: 272, cat: '🎬 Cinéma',
    name: 'Guerre',
    emoji: '💥',
    desc: 'Champ, soldat, sacrifice',
    basePrompt: 'Animate this image as a war scene. Battlefield, soldier, sacrifice. Preserve the exact scene.',
    actions: ['smoke rises, tension builds'],
    cameras: ['handheld'],
    lights: ['dark dramatic war light']
  },
  {
    id: 'spy', num: 273, cat: '🎬 Cinéma',
    name: 'Espionnage',
    emoji: '🕶️',
    desc: 'Gadget, infiltration, twist',
    basePrompt: 'Animate this image as a spy scene. Gadget, infiltration, tension. Preserve the exact scene.',
    actions: ['the spy moves stealthily'],
    cameras: ['dynamic following'],
    lights: ['cool spy light']
  },
  {
    id: 'disaster', num: 274, cat: '🎬 Cinéma',
    name: 'Catastrophe',
    emoji: '🌪️',
    desc: 'Chaos, survie, sauvetage',
    basePrompt: 'Animate this image as a disaster scene. Chaos, survival, rescue. Preserve the exact scene.',
    actions: ['chaos unfolds, debris flying'],
    cameras: ['dynamic handheld'],
    lights: ['dramatic disaster light']
  },
  {
    id: 'biopic', num: 275, cat: '🎬 Cinéma',
    name: 'Biopic',
    emoji: '🎞️',
    desc: 'Vie, époque, transformation',
    basePrompt: 'Animate this image as a biopic scene. Life, era, transformation. Preserve the exact scene.',
    actions: ['the subject lives a moment of their life'],
    cameras: ['slow push-in'],
    lights: ['cinematic natural light']
  },
  {
    id: 'indie', num: 348, cat: '🎬 Cinéma',
    name: 'Film Indépendant',
    emoji: '🎬',
    desc: 'Intimiste, contemplatif',
    basePrompt: 'Animate this image as an indie film scene. Intimate, contemplative. Preserve the exact scene.',
    actions: ['the scene breathes slowly'],
    cameras: ['static frame'],
    lights: ['natural soft light']
  },
  {
    id: 'animation-cine', num: 349, cat: '🎬 Cinéma',
    name: 'Animation Cinéma',
    emoji: '🎞️',
    desc: 'Style film d\'animation',
    basePrompt: 'Animate this image as a cinema animation. Beautiful animated film quality. Preserve the exact scene.',
    actions: ['the scene animates beautifully'],
    cameras: ['slow pan'],
    lights: ['warm animated light']
  },
  {
    id: 'superhero-cine', num: 350, cat: '🎬 Cinéma',
    name: 'Super-Héros Cinéma',
    emoji: '🦸',
    desc: 'Épique, dramatique, pouvoir',
    basePrompt: 'Animate this image as a superhero movie scene. Epic, dramatic, powers. Preserve the exact subject identity.',
    actions: ['the hero uses their power'],
    cameras: ['low angle epic shot'],
    lights: ['dramatic hero light']
  },
  {
    id: 'zombie', num: 351, cat: '🎬 Cinéma',
    name: 'Zombie',
    emoji: '🧟',
    desc: 'Post-apo, horde, survie',
    basePrompt: 'Animate this image as a zombie scene. Post-apocalyptic, horde, survival. Preserve the exact scene.',
    actions: ['zombies shuffle, tension rises'],
    cameras: ['handheld'],
    lights: ['dark dramatic light']
  },
  {
    id: 'heist', num: 352, cat: '🎬 Cinéma',
    name: 'Braquage',
    emoji: '💰',
    desc: 'Équipe, plan, tension',
    basePrompt: 'Animate this image as a heist scene. Team, plan, tension. Preserve the exact scene.',
    actions: ['the team moves with precision'],
    cameras: ['dynamic following'],
    lights: ['dramatic shadow']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🌀 ILLUSIONS & OPTIQUE (276-290)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'trompe-loeil', num: 223, cat: '🌀 Illusions',
    name: 'Trompe-l\'œil',
    emoji: '🖼️',
    desc: 'L\'image sort du cadre',
    basePrompt: 'Animate this image with a trompe-l\'oeil effect. The subject appears to step out of the frame. Preserve the exact subject identity.',
    actions: ['the subject steps out of the frame'],
    cameras: ['static frame'],
    lights: ['dramatic light']
  },
  {
    id: 'anamorphose', num: 224, cat: '🌀 Illusions',
    name: 'Anamorphose',
    emoji: '🔍',
    desc: 'Image qui se révèle sous un angle',
    basePrompt: 'Animate this image with an anamorphic reveal. The image reveals itself from a certain angle. Preserve the exact scene.',
    actions: ['the image reveals itself'],
    cameras: ['slow reveal movement'],
    lights: ['consistent']
  },
  {
    id: 'double-sens', num: 225, cat: '🌀 Illusions',
    name: 'Double Sens',
    emoji: '🤔',
    desc: 'Deux images en une',
    basePrompt: 'Animate this image as a double meaning illusion. Two images in one. Preserve the exact scene.',
    actions: ['the image shifts between interpretations'],
    cameras: ['static frame'],
    lights: ['neutral']
  },
  {
    id: 'escher', num: 226, cat: '🌀 Illusions',
    name: 'Escher',
    emoji: '🪜',
    desc: 'Escaliers impossibles',
    basePrompt: 'Animate this image as an Escher illusion. Impossible stairs, loops. Preserve the exact scene.',
    actions: ['stairs loop impossibly'],
    cameras: ['slow pan'],
    lights: ['clean surreal light']
  },
  {
    id: 'optical-illusion', num: 227, cat: '🌀 Illusions',
    name: 'Illusion d\'Optique',
    emoji: '👁️',
    desc: 'Mouvement perçu sans mouvement',
    basePrompt: 'Animate this image as an optical illusion. Perceived movement. Preserve the exact scene.',
    actions: ['the image shifts perception'],
    cameras: ['static frame'],
    lights: ['consistent']
  },
  {
    id: 'forced-perspective', num: 228, cat: '🌀 Illusions',
    name: 'Forced Perspective',
    emoji: '📐',
    desc: 'Taille faussée par la perspective',
    basePrompt: 'Animate this image with forced perspective. Objects of different sizes appearing the same. Preserve the exact scene.',
    actions: ['scale perception shifts'],
    cameras: ['static frame'],
    lights: ['consistent']
  },
  {
    id: 'mirror', num: 229, cat: '🌀 Illusions',
    name: 'Réflexion Infinie',
    emoji: '🪞',
    desc: 'Miroirs, répétition',
    basePrompt: 'Animate this image with infinite mirror reflections. Repeated images. Preserve the exact scene.',
    actions: ['reflections multiply'],
    cameras: ['slow push-in'],
    lights: ['mirror reflection light']
  },
  {
    id: 'composite', num: 230, cat: '🌀 Illusions',
    name: 'Portrait Composite',
    emoji: '🧩',
    desc: 'Visage fait d\'autres images',
    basePrompt: 'Animate this image as a composite portrait. Face made of smaller images. Preserve the exact scene.',
    actions: ['the composite image shifts'],
    cameras: ['slow push-in'],
    lights: ['neutral']
  },
  {
    id: 'kaleidoscope', num: 39, cat: '🌀 Illusions',
    name: 'Kaléidoscope',
    emoji: '🔮',
    desc: 'Symétrie hypnotique',
    basePrompt: 'Animate this image as a kaleidoscope. Symmetric patterns, hypnotic. Preserve the exact scene.',
    actions: ['the kaleidoscope patterns shift'],
    cameras: ['static frame'],
    lights: ['colorful glow']
  },
  {
    id: 'glitch', num: 37, cat: '🌀 Illusions',
    name: 'Glitch Digital',
    emoji: '📺',
    desc: 'Distorsion, pixels, chaos',
    basePrompt: 'Animate this image with digital glitch effects. Distortion, pixelation, chaos. Preserve the exact scene.',
    actions: ['the image glitches and distorts'],
    cameras: ['static frame'],
    lights: ['digital glow']
  },
  {
    id: 'pixel-sort', num: 353, cat: '🌀 Illusions',
    name: 'Pixel Sort',
    emoji: '🎨',
    desc: 'Pixels qui se trient',
    basePrompt: 'Animate this image with pixel sorting effects. Pixels stretch and sort. Preserve the exact scene.',
    actions: ['pixels stretch and sort'],
    cameras: ['static frame'],
    lights: ['digital glow']
  },
  {
    id: 'datamosh', num: 354, cat: '🌀 Illusions',
    name: 'Datamosh',
    emoji: '💾',
    desc: 'Corruption vidéo, mouvement',
    basePrompt: 'Animate this image with datamosh effects. Video corruption, motion distortion. Preserve the exact scene.',
    actions: ['the image distorts with datamosh'],
    cameras: ['static frame'],
    lights: ['digital glow']
  },
  {
    id: 'long-exposure', num: 355, cat: '🌀 Illusions',
    name: 'Longue Exposition',
    emoji: '📷',
    desc: 'Filé lumineux, mouvement continu',
    basePrompt: 'Animate this image with long exposure effect. Light trails, continuous motion. Preserve the exact scene.',
    actions: ['light trails streak across'],
    cameras: ['static frame'],
    lights: ['light trails']
  },
  {
    id: 'tilt-shift', num: 356, cat: '🌀 Illusions',
    name: 'Tilt-Shift',
    emoji: '🏘️',
    desc: 'Effet maquette miniature',
    basePrompt: 'Animate this image with tilt-shift effect. Miniature look, shallow focus. Preserve the exact scene.',
    actions: ['the scene moves like a miniature'],
    cameras: ['static frame'],
    lights: ['consistent']
  },
  {
    id: 'double-exposure', num: 38, cat: '🌀 Illusions',
    name: 'Double Exposition',
    emoji: '🌫️',
    desc: 'Superposition onirique',
    basePrompt: 'Animate this image with double exposure. Two images blending dreamily. Preserve the exact scene.',
    actions: ['the two images blend slowly'],
    cameras: ['static frame'],
    lights: ['dreamy glow']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🎁 BONUS & SYSTÈMES (291-300)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'creative-studio', num: 291, cat: '🎁 Bonus',
    name: 'Studio Créatif Complet',
    emoji: '🎨',
    desc: 'Tous les effets en un',
    basePrompt: 'Animate this image with a mix of creative effects. Cinematic, artistic, dynamic. Preserve the exact subject identity.',
    actions: ['multiple creative effects layer'],
    cameras: ['dynamic movement'],
    lights: ['creative mix']
  },
  {
    id: 'random-total', num: 292, cat: '🎁 Bonus',
    name: 'Aléatoire Total',
    emoji: '🎲',
    desc: 'L\'IA choisit tout',
    basePrompt: 'Animate this image with a completely random artistic direction. Surprise me. Preserve the exact subject identity.',
    actions: ['random artistic movement'],
    cameras: ['random'],
    lights: ['random artistic']
  },
  {
    id: 'youtube-channel', num: 293, cat: '🎁 Bonus',
    name: 'Chaîne YouTube',
    emoji: '📺',
    desc: 'Intro + vidéo + outro',
    basePrompt: 'Animate this image as a YouTube video intro. Energetic, professional. Preserve the exact subject identity.',
    actions: ['dynamic intro movement'],
    cameras: ['dynamic push-in'],
    lights: ['bright studio light']
  },
  {
    id: 'story-5-acts', num: 295, cat: '🎁 Bonus',
    name: 'Story en 5 Plans',
    emoji: '🎬',
    desc: 'Découpage automatique',
    basePrompt: 'Animate this image as a 5-shot story sequence. Narrative progression. Preserve the exact subject identity.',
    actions: ['the scene progresses through 5 moments'],
    cameras: ['varied shot types'],
    lights: ['narrative lighting']
  },
  {
    id: 'music-video', num: 296, cat: '🎁 Bonus',
    name: 'Clip Musical',
    emoji: '🎵',
    desc: 'Synchronisation beats',
    basePrompt: 'Animate this image as a music video. Beat-synced cuts, energy. Preserve the exact subject identity.',
    actions: ['the scene pulses to an invisible beat'],
    cameras: ['dynamic cuts'],
    lights: ['colorful music light']
  },
  {
    id: 'living-portrait', num: 297, cat: '🎁 Bonus',
    name: 'Portrait Vivant',
    emoji: '👤',
    desc: 'Yeux, bouche, respiration',
    basePrompt: 'Animate this portrait to bring it fully to life. Eyes, mouth, breathing. Preserve the exact subject identity.',
    actions: ['the subject breathes, blinks, smiles'],
    cameras: ['static close-up'],
    lights: ['soft portrait light']
  },
  {
    id: 'old-photo-restore', num: 298, cat: '🎁 Bonus',
    name: 'Photo Ancienne',
    emoji: '📷',
    desc: 'Restauration + animation',
    basePrompt: 'Restore and animate this old photo. Colors come back, subjects move. Preserve the exact people identity.',
    actions: ['colors return, subjects breathe'],
    cameras: ['slow push-in'],
    lights: ['warm restored light']
  },
  {
    id: 'talking-avatar', num: 299, cat: '🎁 Bonus',
    name: 'Avatar Parlant',
    emoji: '🗣️',
    desc: 'TTS + lip sync',
    basePrompt: 'Animate this avatar to speak. Lip sync, expressions, gestures. Preserve the exact subject identity.',
    actions: ['the avatar speaks, lips moving'],
    cameras: ['static frame'],
    lights: ['soft portrait light']
  },
  {
    id: 'multi-images', num: 300, cat: '🎁 Bonus',
    name: 'Multi-Images → 1 Vidéo',
    emoji: '🎞️',
    desc: 'Diaporama cinématique',
    basePrompt: 'Animate this image as part of a cinematic slideshow. Transitions, flow. Preserve the exact subject identity.',
    actions: ['transitions flow between images'],
    cameras: ['smooth cinematic'],
    lights: ['cinematic']
  },
  {
    id: 'final-boss', num: 357, cat: '🎁 Bonus',
    name: 'Final Boss',
    emoji: '👑',
    desc: 'Tous les modes combinés',
    basePrompt: 'Animate this image as the ultimate cinematic scene. Epic, all effects combined. Preserve the exact subject identity.',
    actions: ['epic combination of effects'],
    cameras: ['epic dynamic'],
    lights: ['epic cinematic']
  }
];

// ══════════════════════════════════════════════════════════════════
// FUSION
// ══════════════════════════════════════════════════════════════════
if (window.MODES) {
    window.MODES = window.MODES.concat(MODES_5);
} else {
    window.MODES = MODES_5;
}
