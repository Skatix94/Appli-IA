// ══════════════════════════════════════════════════════════════════
// MODES — Fichier 3 (121 à 180)
// Catégories : Émotions, Portrait, Famille, Gaming, Musique
// ══════════════════════════════════════════════════════════════════
const MODES_3 = [
  // ═══════════════════════════════════════════════════════════════
  // 🎭 ÉMOTIONS (121-135)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'joy', num: 141, cat: '🎭 Émotions',
    name: 'Joie',
    emoji: '😊',
    desc: 'Sourire, rire, yeux qui brillent',
    basePrompt: 'Animate this portrait to express pure joy. Bright genuine smile, sparkling eyes, warm atmosphere. Preserve the exact subject identity, face, and clothing.',
    actions: ['the subject smiles brightly, eyes crinkling with joy'],
    cameras: ['slow push-in on the face'],
    lights: ['warm bright daylight', 'soft golden glow']
  },
  {
    id: 'sadness', num: 142, cat: '🎭 Émotions',
    name: 'Tristesse',
    emoji: '😢',
    desc: 'Larme, regard baissé, pluie',
    basePrompt: 'Animate this portrait to express deep sadness. A tear rolling, eyes looking down, melancholic atmosphere. Preserve the exact subject identity, face, and clothing.',
    actions: ['a single tear rolls down the cheek in slow motion'],
    cameras: ['slow push-in on the eyes'],
    lights: ['cool blue light', 'soft melancholic shadow']
  },
  {
    id: 'anger', num: 143, cat: '🎭 Émotions',
    name: 'Colère',
    emoji: '😠',
    desc: 'Regard intense, poings serrés, rouge',
    basePrompt: 'Animate this portrait to express intense anger. Fierce gaze, fists clenched, veins pulsing, red tones. Preserve the exact subject identity and face.',
    actions: ['the subject clenches their jaw, eyes narrowing'],
    cameras: ['slow push-in, intense'],
    lights: ['red dramatic light', 'harsh contrast']
  },
  {
    id: 'fear', num: 144, cat: '🎭 Émotions',
    name: 'Peur',
    emoji: '😨',
    desc: 'Tremblement, recul, ombre',
    basePrompt: 'Animate this portrait to express fear. Trembling, backing away, shadows creeping in. Preserve the exact subject identity and face.',
    actions: ['the subject trembles slightly, eyes wide'],
    cameras: ['handheld with tremor'],
    lights: ['dark shadows', 'cold blue light']
  },
  {
    id: 'surprise', num: 145, cat: '🎭 Émotions',
    name: 'Surprise',
    emoji: '😲',
    desc: 'Sursaut, yeux écarquillés',
    basePrompt: 'Animate this portrait to express surprise. Eyes wide, mouth open, sudden realization. Preserve the exact subject identity and face.',
    actions: ['the subject gasps, eyes widening'],
    cameras: ['quick push-in'],
    lights: ['bright flash effect', 'warm surprise glow']
  },
  {
    id: 'love', num: 146, cat: '🎭 Émotions',
    name: 'Amour',
    emoji: '❤️',
    desc: 'Regard tendre, lumière chaude',
    basePrompt: 'Animate this portrait to express love and tenderness. Warm gaze, soft smile, romantic atmosphere. Preserve the exact subject identity and face.',
    actions: ['the subject gazes tenderly, smile softening'],
    cameras: ['slow push-in'],
    lights: ['warm golden glow', 'soft romantic light']
  },
  {
    id: 'nostalgia', num: 147, cat: '🎭 Émotions',
    name: 'Nostalgie',
    emoji: '📷',
    desc: 'Souvenir, flou, sépia',
    basePrompt: 'Animate this image with a nostalgic feel. Faded colors, sepia tones, dreamy flashback quality. Preserve the exact subject identity.',
    actions: ['the image fades softly, memory-like'],
    cameras: ['slow push-in'],
    lights: ['warm sepia', 'soft faded light']
  },
  {
    id: 'determination', num: 148, cat: '🎭 Émotions',
    name: 'Détermination',
    emoji: '🔥',
    desc: 'Regard fixe, mâchoire serrée',
    basePrompt: 'Animate this portrait to express fierce determination. Steady gaze, clenched jaw, rising music feel. Preserve the exact subject identity and face.',
    actions: ['the subject holds a steady intense gaze'],
    cameras: ['slow push-in, powerful'],
    lights: ['dramatic side light', 'warm heroic glow']
  },
  {
    id: 'madness', num: 149, cat: '🎭 Émotions',
    name: 'Folie',
    emoji: '🌀',
    desc: 'Rire nerveux, regard instable',
    basePrompt: 'Animate this portrait with a hint of madness. Nervous laughter, unstable gaze, slight distortion. Preserve the exact subject identity.',
    actions: ['the subject laughs nervously, eyes darting'],
    cameras: ['static with subtle distortion'],
    lights: ['harsh flickering light', 'eerie green glow']
  },
  {
    id: 'serenity', num: 150, cat: '🎭 Émotions',
    name: 'Sérénité',
    emoji: '🧘',
    desc: 'Respiration lente, paix',
    basePrompt: 'Animate this portrait to express deep serenity. Slow breathing, peaceful expression, calm atmosphere. Preserve the exact subject identity and face.',
    actions: ['the subject breathes slowly, eyes closed in peace'],
    cameras: ['slow push-in'],
    lights: ['soft morning light', 'warm gentle glow']
  },
  {
    id: 'pride', num: 290, cat: '🎭 Émotions',
    name: 'Fierté',
    emoji: '🏆',
    desc: 'Pose confiante, menton levé',
    basePrompt: 'Animate this portrait to express pride. Confident pose, chin lifted, self-assured presence. Preserve the exact subject identity.',
    actions: ['the subject lifts their chin proudly'],
    cameras: ['low angle looking up'],
    lights: ['warm heroic light', 'dramatic rim light']
  },
  {
    id: 'shyness', num: 291, cat: '🎭 Émotions',
    name: 'Timidité',
    emoji: '🙈',
    desc: 'Regard baissé, joues rosées',
    basePrompt: 'Animate this portrait to express shyness. Looking down, blushing slightly, timid body language. Preserve the exact subject identity.',
    actions: ['the subject looks down shyly, blushing'],
    cameras: ['soft push-in'],
    lights: ['soft warm light', 'gentle diffused glow']
  },
  {
    id: 'excitement', num: 292, cat: '🎭 Émotions',
    name: 'Excitation',
    emoji: '🎉',
    desc: 'Énergie, mouvement, éclat',
    basePrompt: 'Animate this portrait to express excitement. Energetic movement, wide smile, dynamic atmosphere. Preserve the exact subject identity.',
    actions: ['the subject bounces excitedly'],
    cameras: ['dynamic handheld'],
    lights: ['bright colorful light']
  },
  {
    id: 'calm', num: 293, cat: '🎭 Émotions',
    name: 'Calme',
    emoji: '🌊',
    desc: 'Respiration posée, sérénité',
    basePrompt: 'Animate this portrait with a calm, composed feel. Slow breathing, steady gaze, peaceful. Preserve the exact subject identity.',
    actions: ['the subject breathes slowly, relaxed'],
    cameras: ['slow push-in'],
    lights: ['soft neutral light']
  },
  {
    id: 'mystery', num: 294, cat: '🎭 Émotions',
    name: 'Mystère',
    emoji: '🌑',
    desc: 'Regard énigmatique, ombres',
    basePrompt: 'Animate this portrait with a mysterious feel. Enigmatic gaze, hidden emotion, shadows. Preserve the exact subject identity.',
    actions: ['the subject holds a mysterious half-smile'],
    cameras: ['slow push-in'],
    lights: ['dramatic shadow', 'cool moonlight']
  },

  // ═══════════════════════════════════════════════════════════════
  // 👤 PORTRAIT & VISAGE (136-150)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'portrait-living', num: 8, cat: '👤 Portrait',
    name: 'Portrait Vivant',
    emoji: '👤',
    desc: 'Yeux, bouche, respiration',
    basePrompt: 'Animate this portrait to bring it to life. The subject breathes, blinks, and moves subtly. Preserve the exact subject identity, face, and expression.',
    actions: ['the subject blinks slowly', 'the subject breathes, chest rising'],
    cameras: ['static close-up'],
    lights: ['soft portrait light', 'Rembrandt light']
  },
  {
    id: 'smile', num: 295, cat: '👤 Portrait',
    name: 'Sourire Progressif',
    emoji: '🙂',
    desc: 'Sourire qui s\'installe',
    basePrompt: 'Animate this portrait with a gradual smile. The subject\'s expression softens into a warm smile. Preserve the exact subject identity.',
    actions: ['the subject\'s expression softens into a smile'],
    cameras: ['slow push-in on the face'],
    lights: ['warm soft light']
  },
  {
    id: 'eye-contact', num: 296, cat: '👤 Portrait',
    name: 'Regard Caméra',
    emoji: '👁️',
    desc: 'Contact visuel intense',
    basePrompt: 'Animate this portrait with intense eye contact. The subject looks directly into the camera, unblinking. Preserve the exact subject identity.',
    actions: ['the subject locks eyes with the camera'],
    cameras: ['slow push-in'],
    lights: ['dramatic side light']
  },
  {
    id: 'head-turn', num: 297, cat: '👤 Portrait',
    name: 'Rotation de Tête',
    emoji: '🔄',
    desc: 'Regard qui se tourne',
    basePrompt: 'Animate this portrait with a slow head turn. The subject turns to look at something off-camera. Preserve the exact subject identity.',
    actions: ['the subject turns their head slowly'],
    cameras: ['static frame'],
    lights: ['soft window light']
  },
  {
    id: 'hair-wind', num: 298, cat: '👤 Portrait',
    name: 'Cheveux au Vent',
    emoji: '💨',
    desc: 'Cheveux qui bougent doucement',
    basePrompt: 'Animate this portrait with hair moving in a gentle breeze. Preserve the exact subject identity.',
    actions: ['a gentle breeze moves the hair'],
    cameras: ['static frame'],
    lights: ['golden hour backlight']
  },
  {
    id: 'slow-blink', num: 299, cat: '👤 Portrait',
    name: 'Clignement Lent',
    emoji: '😌',
    desc: 'Paupières qui se ferment',
    basePrompt: 'Animate this portrait with a slow, peaceful blink. Preserve the exact subject identity.',
    actions: ['the subject closes their eyes slowly'],
    cameras: ['static close-up'],
    lights: ['soft ambient light']
  },
  {
    id: 'breath', num: 300, cat: '👤 Portrait',
    name: 'Respiration',
    emoji: '🌬️',
    desc: 'Poitrine qui monte et descend',
    basePrompt: 'Animate this portrait with visible breathing. Chest rising and falling gently. Preserve the exact subject identity.',
    actions: ['the subject breathes slowly, chest moving'],
    cameras: ['static frame'],
    lights: ['soft light']
  },
  {
    id: 'profile-turn', num: 301, cat: '👤 Portrait',
    name: 'Profil Reveal',
    emoji: '👤',
    desc: 'Passage de face à profil',
    basePrompt: 'Animate this portrait with a slow turn from face to profile. Elegant and cinematic. Preserve the exact subject identity.',
    actions: ['the subject turns to show their profile'],
    cameras: ['slow push-in'],
    lights: ['dramatic side light']
  },
  {
    id: 'photoshoot', num: 302, cat: '👤 Portrait',
    name: 'Shooting Photo',
    emoji: '📸',
    desc: 'Poses enchaînées, flashs',
    basePrompt: 'Animate this portrait as a professional photoshoot. Multiple poses, camera flashes. Preserve the exact subject identity.',
    actions: ['the subject shifts between poses'],
    cameras: ['static frame with flashes'],
    lights: ['studio flashes', 'dramatic lighting']
  },
  {
    id: 'black-veil', num: 303, cat: '👤 Portrait',
    name: 'Voile Noir',
    emoji: '🖤',
    desc: 'Voile qui se lève lentement',
    basePrompt: 'Animate this portrait with a black veil slowly lifting. Dramatic and mysterious. Preserve the exact subject identity.',
    actions: ['a black veil lifts slowly'],
    cameras: ['slow push-in'],
    lights: ['dramatic backlight']
  },
  {
    id: 'old-age', num: 304, cat: '👤 Portrait',
    name: 'Vieillissement',
    emoji: '⏳',
    desc: 'Le temps qui passe',
    basePrompt: 'Animate this portrait with a subtle aging effect. The subject ages slowly in front of the camera. Preserve the exact subject identity.',
    actions: ['wrinkles appear slowly on the face'],
    cameras: ['static close-up'],
    lights: ['dramatic light']
  },
  {
    id: 'younger', num: 305, cat: '👤 Portrait',
    name: 'Rajeunissement',
    emoji: '✨',
    desc: 'Le temps qui recule',
    basePrompt: 'Animate this portrait with a subtle rejuvenation effect. The subject becomes younger in front of the camera. Preserve the exact subject identity.',
    actions: ['the subject becomes younger'],
    cameras: ['static close-up'],
    lights: ['soft light']
  },
  {
    id: 'golden-halo', num: 306, cat: '👤 Portrait',
    name: 'Halo Doré',
    emoji: '🌟',
    desc: 'Halo lumineux autour du visage',
    basePrompt: 'Animate this portrait with a golden halo of light around the subject\'s head. Ethereal. Preserve the exact subject identity.',
    actions: ['a golden halo glows softly'],
    cameras: ['static frame'],
    lights: ['warm backlight', 'golden hour']
  },
  {
    id: 'wind-hair', num: 307, cat: '👤 Portrait',
    name: 'Vent Fort',
    emoji: '🌪️',
    desc: 'Cheveux au vent fort',
    basePrompt: 'Animate this portrait with strong wind. Hair flying, clothes fluttering. Preserve the exact subject identity.',
    actions: ['strong wind blows the hair'],
    cameras: ['static frame'],
    lights: ['dramatic storm light']
  },
  {
    id: 'cinematic-portrait', num: 308, cat: '👤 Portrait',
    name: 'Portrait Cinématique',
    emoji: '🎬',
    desc: 'Rendu cinéma, profondeur',
    basePrompt: 'Animate this portrait with a cinematic feel. Shallow depth of field, dramatic lighting, movie-quality. Preserve the exact subject identity.',
    actions: ['the subject turns slightly, cinematically'],
    cameras: ['slow push-in'],
    lights: ['cinematic lighting', 'dramatic rim light']
  },

  // ═══════════════════════════════════════════════════════════════
  // 👨‍👩‍👧 FAMILLE & SOUVENIRS (151-160)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'old-photo', num: 13, cat: '👨‍👩‍👧 Famille',
    name: 'Photos Anciennes',
    emoji: '📷',
    desc: 'Restauration et animation',
    basePrompt: 'Animate this old family photo. Restore colors softly, bring the subjects gently to life. Preserve the exact people identity and composition.',
    actions: ['the subjects breathe gently'],
    cameras: ['slow push-in'],
    lights: ['warm vintage light']
  },
  {
    id: 'family-memory', num: 14, cat: '👨‍👩‍👧 Famille',
    name: 'Souvenirs Famille',
    emoji: '💝',
    desc: 'Diaporama émotionnel',
    basePrompt: 'Animate this family photo with an emotional, nostalgic feel. Warm light, gentle movements. Preserve the exact people identity.',
    actions: ['subjects move gently, smiling'],
    cameras: ['slow push-in'],
    lights: ['warm golden hour']
  },
  {
    id: 'wedding', num: 309, cat: '👨‍👩‍👧 Famille',
    name: 'Mariage',
    emoji: '💍',
    desc: 'Romantique, élégant, ému',
    basePrompt: 'Animate this wedding photo with romantic elegance. Soft light, gentle movements, emotional. Preserve the exact people identity.',
    actions: ['the couple gazes at each other tenderly'],
    cameras: ['slow push-in'],
    lights: ['warm romantic glow']
  },
  {
    id: 'baby', num: 310, cat: '👨‍👩‍👧 Famille',
    name: 'Bébé',
    emoji: '👶',
    desc: 'Doux, tendre, innocent',
    basePrompt: 'Animate this baby photo with tenderness. Soft light, gentle movements. Preserve the exact baby identity.',
    actions: ['the baby moves gently, eyes blinking'],
    cameras: ['slow push-in'],
    lights: ['soft warm light']
  },
  {
    id: 'children', num: 311, cat: '👨‍👩‍👧 Famille',
    name: 'Enfants',
    emoji: '🧒',
    desc: 'Joie, jeux, innocence',
    basePrompt: 'Animate this photo of children with playful energy. Joyful movements, laughter. Preserve the exact children identity.',
    actions: ['the children laugh and move happily'],
    cameras: ['handheld following'],
    lights: ['bright warm daylight']
  },
  {
    id: 'grandparents', num: 312, cat: '👨‍👩‍👧 Famille',
    name: 'Grands-Parents',
    emoji: '👴',
    desc: 'Tendresse, sagesse, temps',
    basePrompt: 'Animate this photo of grandparents with tenderness. Slow gentle movements, wisdom. Preserve the exact people identity.',
    actions: ['the grandparents smile gently'],
    cameras: ['slow push-in'],
    lights: ['warm golden light']
  },
  {
    id: 'friends', num: 313, cat: '👨‍👩‍👧 Famille',
    name: 'Amis',
    emoji: '🤝',
    desc: 'Joie, complicité, rires',
    basePrompt: 'Animate this photo of friends with joyful energy. Laughter, complicity. Preserve the exact people identity.',
    actions: ['the friends laugh together'],
    cameras: ['handheld'],
    lights: ['warm natural light']
  },
  {
    id: 'celebration', num: 314, cat: '👨‍👩‍👧 Famille',
    name: 'Célébration',
    emoji: '🎂',
    desc: 'Fête, bougies, joie',
    basePrompt: 'Animate this celebration photo. Candles flickering, joy, party atmosphere. Preserve the exact people identity.',
    actions: ['candles flicker, people cheer'],
    cameras: ['dynamic handheld'],
    lights: ['warm candlelight']
  },
  {
    id: 'pregnancy', num: 315, cat: '👨‍👩‍👧 Famille',
    name: 'Grossesse',
    emoji: '🤰',
    desc: 'Tendresse, attente, lumière',
    basePrompt: 'Animate this pregnancy photo with tenderness. Soft light, gentle movements. Preserve the exact subject identity.',
    actions: ['the mother gently touches her belly'],
    cameras: ['slow push-in'],
    lights: ['soft warm glow']
  },
  {
    id: 'birthday', num: 316, cat: '👨‍👩‍👧 Famille',
    name: 'Anniversaire',
    emoji: '🎉',
    desc: 'Fête, joie, bougies',
    basePrompt: 'Animate this birthday photo with celebration energy. Candles, joy, movement. Preserve the exact people identity.',
    actions: ['candles flicker, subject blows them out'],
    cameras: ['static frame'],
    lights: ['warm candle glow']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🎮 GAMING & VIRTUEL (161-175)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'lets-play', num: 151, cat: '🎮 Gaming',
    name: 'Let\'s Play',
    emoji: '🎮',
    desc: 'Avatar qui réagit, webcam, jeu',
    basePrompt: 'Animate this gaming setup photo as a Let\'s Play video. Avatar reacting, webcam feel. Preserve the exact subject identity.',
    actions: ['the streamer reacts to the game'],
    cameras: ['webcam perspective'],
    lights: ['RGB gaming light']
  },
  {
    id: 'game-cinematic', num: 152, cat: '🎮 Gaming',
    name: 'Cinématique de Jeu',
    emoji: '🎬',
    desc: 'Intro épique style AAA',
    basePrompt: 'Animate this image as an epic AAA game cinematic. Dramatic, epic, movie-quality. Preserve the exact subject identity.',
    actions: ['the hero stands, cape flowing'],
    cameras: ['slow crane reveal'],
    lights: ['epic cinematic light']
  },
  {
    id: 'rpg-character', num: 153, cat: '🎮 Gaming',
    name: 'Personnage RPG',
    emoji: '🗡️',
    desc: 'Portrait qui parle, stats, inventaire',
    basePrompt: 'Animate this RPG character portrait. Character breathes, UI elements appear. Preserve the exact character identity.',
    actions: ['the character breathes, eyes glowing'],
    cameras: ['static frame with UI'],
    lights: ['fantasy torch light']
  },
  {
    id: 'game-card', num: 154, cat: '🎮 Gaming',
    name: 'Carte de Jeu',
    emoji: '🃏',
    desc: 'Carte qui s\'anime, unités, sorts',
    basePrompt: 'Animate this game card. Card glows, units appear, magic effects. Preserve the exact card design.',
    actions: ['the card glows and animates'],
    cameras: ['static frame'],
    lights: ['magical glow']
  },
  {
    id: 'streaming', num: 155, cat: '🎮 Gaming',
    name: 'Streaming Overlay',
    emoji: '📺',
    desc: 'Fond animé, alertes, cam',
    basePrompt: 'Animate this image as a streaming overlay. Animated background, alerts, camera frame. Preserve the exact subject identity.',
    actions: ['alerts pop up, background animates'],
    cameras: ['static frame'],
    lights: ['RGB streaming light']
  },
  {
    id: 'vtuber', num: 156, cat: '🎮 Gaming',
    name: 'Avatar VTuber',
    emoji: '🎭',
    desc: 'Personnage 2D/3D qui parle',
    basePrompt: 'Animate this VTuber avatar. Character moves, talks, blinks. Preserve the exact character identity.',
    actions: ['the avatar talks, expressions changing'],
    cameras: ['static frame'],
    lights: ['soft softbox']
  },
  {
    id: 'voxel', num: 157, cat: '🎮 Gaming',
    name: 'Monde Voxel',
    emoji: '🟩',
    desc: 'Style Minecraft animé',
    basePrompt: 'Transform this image into a voxel/Minecraft style. Blocky world, pixel textures. Preserve the same subject and composition.',
    actions: ['blocks shift subtly'],
    cameras: ['static frame'],
    lights: ['blocky sun light']
  },
  {
    id: 'lowpoly', num: 158, cat: '🎮 Gaming',
    name: 'Low Poly',
    emoji: '🔺',
    desc: 'Style minimaliste géométrique',
    basePrompt: 'Transform this image into low-poly 3D style. Geometric shapes, minimalist. Preserve the same subject and composition.',
    actions: ['polygons shift subtly'],
    cameras: ['static frame'],
    lights: ['flat poly light']
  },
  {
    id: 'ar', num: 159, cat: '🎮 Gaming',
    name: 'Réalité Augmentée',
    emoji: '📱',
    desc: 'Objet 3D dans une photo réelle',
    basePrompt: 'Animate this image as AR content. A 3D object appears in the real scene. Preserve the exact environment.',
    actions: ['a 3D object appears and rotates'],
    cameras: ['handheld AR view'],
    lights: ['matching real-world light']
  },
  {
    id: 'vr', num: 160, cat: '🎮 Gaming',
    name: 'Réalité Virtuelle',
    emoji: '🥽',
    desc: 'Vue immersive 360°',
    basePrompt: 'Animate this image as a VR experience. Immersive 360° view, first-person. Preserve the exact scene.',
    actions: ['the view rotates slowly'],
    cameras: ['360° immersive'],
    lights: ['VR ambient light']
  },
  {
    id: 'boss-fight', num: 317, cat: '🎮 Gaming',
    name: 'Combat de Boss',
    emoji: '👹',
    desc: 'Épique, intense, dramatique',
    basePrompt: 'Animate this image as an epic boss fight. Dramatic, intense, larger than life. Preserve the exact character identity.',
    actions: ['the boss towers menacingly'],
    cameras: ['low angle looking up'],
    lights: ['dramatic fire glow']
  },
  {
    id: 'level-up', num: 318, cat: '🎮 Gaming',
    name: 'Level Up',
    emoji: '⬆️',
    desc: 'Montée en puissance, effets',
    basePrompt: 'Animate this image as a level-up moment. Glowing effects, power surge, achievement. Preserve the exact character identity.',
    actions: ['the character glows and powers up'],
    cameras: ['static frame'],
    lights: ['golden level-up glow']
  },
  {
    id: 'esports', num: 319, cat: '🎮 Gaming',
    name: 'E-sport',
    emoji: '🏆',
    desc: 'Compétition, écran, foule',
    basePrompt: 'Animate this image as an esports competition. Arena, crowd, screens, tension. Preserve the exact scene.',
    actions: ['the crowd cheers, screens flash'],
    cameras: ['wide arena shot'],
    lights: ['stage lights, LED screen glow']
  },
  {
    id: 'speedrun', num: 320, cat: '🎮 Gaming',
    name: 'Speedrun',
    emoji: '⏱️',
    desc: 'Rapide, précis, timer',
    basePrompt: 'Animate this image as a speedrun. Fast action, timer counting, precision. Preserve the exact scene.',
    actions: ['the character moves fast, timer counting'],
    cameras: ['dynamic following'],
    lights: ['bright game light']
  },
  {
    id: 'retro-game', num: 321, cat: '🎮 Gaming',
    name: 'Jeu Rétro',
    emoji: '🕹️',
    desc: 'Arcade, pixels, nostalgie',
    basePrompt: 'Animate this image as a retro arcade game. Pixel style, arcade cabinet glow. Preserve the same subject and composition.',
    actions: ['pixel characters move'],
    cameras: ['static arcade frame'],
    lights: ['arcade neon glow']
  },

  // ═══════════════════════════════════════════════════════════════
  // 🎵 MUSIQUE & AUDIO (176-180)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rap-clip', num: 161, cat: '🎵 Musique',
    name: 'Clip Rap',
    emoji: '🎤',
    desc: 'Urbain, chaînes, néons',
    basePrompt: 'Animate this image as a rap music video. Urban style, chains, neon lights. Preserve the exact artist identity.',
    actions: ['the artist moves with attitude'],
    cameras: ['low angle, dynamic'],
    lights: ['neon pink and blue', 'urban night']
  },
  {
    id: 'pop-clip', num: 162, cat: '🎵 Musique',
    name: 'Clip Pop',
    emoji: '🎶',
    desc: 'Couleurs vives, danse, confettis',
    basePrompt: 'Animate this image as a pop music video. Bright colors, dance, confetti. Preserve the exact artist identity.',
    actions: ['the artist dances, confetti falling'],
    cameras: ['dynamic rotating'],
    lights: ['bright colorful', 'pink and yellow']
  },
  {
    id: 'rock-clip', num: 163, cat: '🎵 Musique',
    name: 'Clip Rock',
    emoji: '🎸',
    desc: 'Guitare, fumée, scène',
    basePrompt: 'Animate this image as a rock music video. Guitar, smoke, stage. Preserve the exact artist identity.',
    actions: ['the guitarist plays, smoke swirling'],
    cameras: ['dynamic following'],
    lights: ['red stage light', 'dramatic smoke']
  },
  {
    id: 'electro-clip', num: 164, cat: '🎵 Musique',
    name: 'Clip Électro',
    emoji: '🎧',
    desc: 'Néons, lasers, foule',
    basePrompt: 'Animate this image as an electro music video. Neons, lasers, crowd. Preserve the exact artist identity.',
    actions: ['lasers sweep, crowd moves'],
    cameras: ['wide club shot'],
    lights: ['neon, laser, strobe']
  },
  {
    id: 'jazz-clip', num: 165, cat: '🎵 Musique',
    name: 'Clip Jazz',
    emoji: '🎷',
    desc: 'Club sombre, saxophone, fumée',
    basePrompt: 'Animate this image as a jazz music video. Dark club, saxophone, smoke. Preserve the exact artist identity.',
    actions: ['the sax player plays slowly'],
    cameras: ['slow push-in'],
    lights: ['warm dim jazz light']
  },
  {
    id: 'classical-clip', num: 166, cat: '🎵 Musique',
    name: 'Clip Classique',
    emoji: '🎻',
    desc: 'Orchestre, lustres, élégance',
    basePrompt: 'Animate this image as a classical music video. Orchestra, chandeliers, elegance. Preserve the exact musician identity.',
    actions: ['the musician plays gracefully'],
    cameras: ['slow push-in'],
    lights: ['warm chandelier light']
  },
  {
    id: 'reggaeton', num: 167, cat: '🎵 Musique',
    name: 'Clip Reggaeton',
    emoji: '🌴',
    desc: 'Plage, danse, couleurs chaudes',
    basePrompt: 'Animate this image as a reggaeton music video. Beach, dance, warm colors. Preserve the exact artist identity.',
    actions: ['the artist dances on the beach'],
    cameras: ['dynamic following'],
    lights: ['golden beach light']
  },
  {
    id: 'country', num: 168, cat: '🎵 Musique',
    name: 'Clip Country',
    emoji: '🤠',
    desc: 'Route, campagne, coucher de soleil',
    basePrompt: 'Animate this image as a country music video. Road, countryside, sunset. Preserve the exact artist identity.',
    actions: ['the singer walks along the road'],
    cameras: ['tracking shot'],
    lights: ['golden sunset']
  },
  {
    id: 'metal', num: 169, cat: '🎵 Musique',
    name: 'Clip Metal',
    emoji: '🤘',
    desc: 'Feu, chaos, contraste',
    basePrompt: 'Animate this image as a metal music video. Fire, chaos, contrast. Preserve the exact artist identity.',
    actions: ['the band plays intensely, fire in the background'],
    cameras: ['dynamic handheld'],
    lights: ['dramatic fire light']
  },
  {
    id: 'lofi', num: 170, cat: '🎵 Musique',
    name: 'Clip Lo-Fi',
    emoji: '📻',
    desc: 'Ambiance calme, anime, pluie',
    basePrompt: 'Animate this image as a lo-fi music video. Calm anime style, rain, cozy. Preserve the exact subject identity.',
    actions: ['rain falls outside, subject relaxes'],
    cameras: ['static cozy frame'],
    lights: ['warm cozy indoor light']
  },
  {
    id: 'podcast', num: 237, cat: '🎵 Musique',
    name: 'Podcast Visual',
    emoji: '🎙️',
    desc: 'Ondes, citation, invité',
    basePrompt: 'Animate this image as a podcast visual. Sound waves, quote, guest. Preserve the exact subject identity.',
    actions: ['sound waves pulse'],
    cameras: ['static frame'],
    lights: ['warm podcast light']
  },
  {
    id: 'karaoke', num: 30, cat: '🎵 Musique',
    name: 'Karaoké Paroles',
    emoji: '🎤',
    desc: 'Paroles synchronisées',
    basePrompt: 'Animate this image as karaoke. Lyrics appear in sync, singing. Preserve the exact subject identity.',
    actions: ['lyrics highlight in time'],
    cameras: ['static frame'],
    lights: ['stage karaoke light']
  },
  {
    id: 'concert', num: 322, cat: '🎵 Musique',
    name: 'Concert Live',
    emoji: '🎼',
    desc: 'Scène, foule, lumières',
    basePrompt: 'Animate this image as a live concert. Stage, crowd, lights. Preserve the exact artist identity.',
    actions: ['lights sweep, crowd cheers'],
    cameras: ['wide concert shot'],
    lights: ['stage lights, lasers']
  },
  {
    id: 'dj-set', num: 323, cat: '🎵 Musique',
    name: 'DJ Set',
    emoji: '🎛️',
    desc: 'Platines, foule, ambiance',
    basePrompt: 'Animate this image as a DJ set. Turntables, crowd, energy. Preserve the exact DJ identity.',
    actions: ['the DJ mixes, crowd dancing'],
    cameras: ['wide club shot'],
    lights: ['club strobe, neon']
  },
  {
    id: 'acoustic', num: 324, cat: '🎵 Musique',
    name: 'Session Acoustique',
    emoji: '🎸',
    desc: 'Intimiste, chaleureux',
    basePrompt: 'Animate this image as an acoustic session. Intimate, warm, emotional. Preserve the exact musician identity.',
    actions: ['the musician plays softly'],
    cameras: ['slow push-in'],
    lights: ['warm candle light']
  }
];

// ══════════════════════════════════════════════════════════════════
// FUSION
// ══════════════════════════════════════════════════════════════════
if (window.MODES) {
    window.MODES = window.MODES.concat(MODES_3);
} else {
    window.MODES = MODES_3;
}
