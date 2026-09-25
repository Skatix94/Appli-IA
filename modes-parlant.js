// ══════════════════════════════════════════════════════════════════
// MODES PARLANTS — Optimisés pour voix française + lip-sync
// Le sujet parle à la caméra. Le texte est fourni par l'utilisateur
// dans le champ "🎤 Texte à faire dire".
// ══════════════════════════════════════════════════════════════════
const MODES_PARLANT = [

  // ═══════════════════════════════════════════════════════════════
  // 🎤 VSL E-COMMERCE PARLÉ
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'parle-vsl-hook', num: 500, cat: '🎤 Parlant — VSL', name: 'VSL Hook Parlé', emoji: '🎯', desc: 'Interpelle directement la caméra',
    basePrompt: 'Animate this image as a talking-head VSL hook. The subject speaks directly to the camera with a punchy opening line. Confident eye contact, natural mouth movement, subtle head motion. Preserve exact identity.',
    actions: [
      'the subject speaks directly to the camera, mouth moving naturally',
      'the subject tilts their head slightly while talking, engaging',
      'the subject raises their eyebrows while speaking, drawing attention'
    ],
    cameras: [
      'static medium close-up, stable framing',
      'very slow push-in toward the face, barely perceptible'
    ],
    lights: [
      'soft diffused interview lighting, even on the face',
      'warm key light with soft fill, flattering on the skin'
    ]
  },
  {
    id: 'parle-vsl-probleme', num: 501, cat: '🎤 Parlant — VSL', name: 'VSL Problème Parlé', emoji: '😰', desc: 'Exprime la douleur du client',
    basePrompt: 'Animate this image as a talking-head VSL problem section. The subject speaks with concern about a pain point. Empathetic eyes, slight frown, relatable body language. Preserve exact identity.',
    actions: [
      'the subject speaks with a worried expression, mouth moving',
      'the subject sighs and shakes their head slightly while talking',
      'the subject gestures with one hand while explaining the problem'
    ],
    cameras: [
      'static medium shot, stable framing',
      'very slow push-in on the face'
    ],
    lights: [
      'soft cool light, slightly desaturated, muted tones',
      'natural window light with soft shadows'
    ]
  },
  {
    id: 'parle-vsl-solution', num: 502, cat: '🎤 Parlant — VSL', name: 'VSL Solution Parlé', emoji: '✨', desc: 'Présente le produit en parlant',
    basePrompt: 'Animate this image as a talking-head VSL solution section. The subject presents the product with enthusiasm while speaking. Genuine smile, confident posture, natural speech movement. Preserve exact identity and product.',
    actions: [
      'the subject speaks enthusiastically, mouth moving clearly',
      'the subject holds the product up while talking about it',
      'the subject smiles while explaining the key benefit'
    ],
    cameras: [
      'static medium shot, product visible in frame',
      'very slow push-in on the subject'
    ],
    lights: [
      'warm bright lighting, flattering on the face',
      'golden key light with soft warm fill'
    ]
  },
  {
    id: 'parle-vsl-preuve', num: 503, cat: '🎤 Parlant — VSL', name: 'VSL Preuve Parlé', emoji: '⭐', desc: 'Témoigne avec émotion',
    basePrompt: 'Animate this image as a talking-head testimonial. The subject speaks warmly about their experience. Genuine smile, authentic delivery, relatable emotions. Preserve exact identity.',
    actions: [
      'the subject speaks with a warm smile, mouth moving naturally',
      'the subject nods while talking, confirming their words',
      'the subject gestures naturally while telling their story'
    ],
    cameras: [
      'static medium shot, documentary style',
      'subtle handheld, authentic creator feel'
    ],
    lights: [
      'soft warm natural daylight on the face',
      'bright window light, gentle on the skin'
    ]
  },
  {
    id: 'parle-vsl-cta', num: 504, cat: '🎤 Parlant — VSL', name: 'VSL CTA Parlé', emoji: '📢', desc: 'Appel à l\'action en parlant',
    basePrompt: 'Animate this image as a talking-head VSL call-to-action. The subject speaks with authority, giving a clear instruction. Confident gaze, decisive expression, natural mouth movement. Preserve exact identity.',
    actions: [
      'the subject speaks with confidence, mouth moving clearly',
      'the subject points down while talking, directing the viewer',
      'the subject nods firmly while giving the instruction'
    ],
    cameras: [
      'static medium close-up, stable framing'
    ],
    lights: [
      'dramatic bold lighting with strong shadows',
      'high-contrast key light for authority'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 📱 UGC & CRÉATEUR PARLANT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'parle-ugc-tiktok', num: 505, cat: '📱 Parlant — UGC', name: 'UGC TikTok Parlé', emoji: '📱', desc: 'Style créateur TikTok',
    basePrompt: 'Animate this image as a UGC TikTok-style talking video. The subject speaks naturally to the selfie camera like a real creator. Authentic delivery, casual body language. Preserve exact identity and product.',
    actions: [
      'the subject talks to the selfie camera, mouth moving naturally',
      'the subject leans in slightly while speaking, engaging',
      'the subject uses expressive hand gestures while talking'
    ],
    cameras: [
      'selfie arm-length framing, slight natural shake',
      'handheld, authentic creator perspective'
    ],
    lights: [
      'natural indoor daylight, window in front',
      'ring light glow on the face, soft and even'
    ]
  },
  {
    id: 'parle-ugc-avis', num: 506, cat: '📱 Parlant — UGC', name: 'UGC Avis Client Parlé', emoji: '💬', desc: 'Donne son avis en parlant',
    basePrompt: 'Animate this image as a UGC-style customer review. The subject speaks to the camera giving their honest opinion. Natural mouth movement, genuine expressions, relatable tone. Preserve exact identity and product.',
    actions: [
      'the subject speaks naturally giving their opinion, mouth moving',
      'the subject nods while talking, confirming their point',
      'the subject smiles while explaining why they like the product'
    ],
    cameras: [
      'selfie framing, slight handheld authenticity',
      'medium close-up, stable framing'
    ],
    lights: [
      'natural daylight from a window',
      'soft indoor light, warm and welcoming'
    ]
  },
  {
    id: 'parle-ugc-unboxing', num: 507, cat: '📱 Parlant — UGC', name: 'UGC Unboxing Parlé', emoji: '🎁', desc: 'Ouvre le produit en parlant',
    basePrompt: 'Animate this image as a UGC unboxing video. The subject speaks to the camera while interacting with the product, explaining what they see. Natural speech movement, excited expression. Preserve exact identity and product.',
    actions: [
      'the subject talks while looking at the product, mouth moving',
      'the subject explains with one hand raised, speaking',
      'the subject looks up at the camera while talking'
    ],
    cameras: [
      'handheld, slightly above the product',
      'medium shot showing hands and face together'
    ],
    lights: [
      'bright indoor lighting, even coverage',
      'soft daylight from above, natural'
    ]
  },
  {
    id: 'parle-ugc-reaction', num: 508, cat: '📱 Parlant — UGC', name: 'UGC Réaction Parlée', emoji: '😲', desc: 'Réaction authentique en parlant',
    basePrompt: 'Animate this image as a UGC reaction video. The subject speaks with expressive emotion, reacting to something they just discovered. Natural mouth movement, expressive eyes. Preserve exact identity.',
    actions: [
      'the subject speaks with surprise, mouth moving expressively',
      'the subject laughs while talking, genuinely reacting',
      'the subject gestures excitedly while speaking'
    ],
    cameras: [
      'selfie framing, dynamic handheld feel',
      'medium close-up, face-focused'
    ],
    lights: [
      'natural daylight, bright and cheerful',
      'warm indoor light, inviting'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 👨‍🏫 EXPERT & EXPLICATION PARLÉ
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'parle-expert-conseil', num: 509, cat: '👨‍🏫 Parlant — Expert', name: 'Expert Conseil Parlé', emoji: '🎓', desc: 'Donne un conseil d\'expert',
    basePrompt: 'Animate this image as an expert advice video. The subject speaks with authority and warmth, explaining something helpful. Confident natural delivery. Preserve exact identity.',
    actions: [
      'the subject speaks with authority, mouth moving naturally',
      'the subject gestures while explaining a key point',
      'the subject nods slightly while making a strong statement'
    ],
    cameras: [
      'static medium shot, professional framing',
      'very slow push-in, cinematic feel'
    ],
    lights: [
      'professional interview lighting, soft and even',
      'warm key light with subtle fill'
    ]
  },
  {
    id: 'parle-explication-produit', num: 510, cat: '👨‍🏫 Parlant — Expert', name: 'Explication Produit Parlé', emoji: '🔍', desc: 'Explique le produit en détail',
    basePrompt: 'Animate this image as a product explanation video. The subject speaks to the camera explaining how the product works. Clear informative delivery, natural gestures. Preserve exact identity and product.',
    actions: [
      'the subject speaks while holding the product, mouth moving',
      'the subject points at a feature while talking',
      'the subject demonstrates with their hands while explaining'
    ],
    cameras: [
      'static medium shot, product clearly visible',
      'slow push-in on the subject and product together'
    ],
    lights: [
      'bright even lighting on face and product',
      'clean studio lighting, minimal shadows'
    ]
  },
  {
    id: 'parle-tutoriel-rapide', num: 511, cat: '👨‍🏫 Parlant — Expert', name: 'Tutoriel Rapide Parlé', emoji: '📝', desc: 'Explique rapidement en parlant',
    basePrompt: 'Animate this image as a quick tutorial video. The subject speaks directly to the camera in a fast, helpful manner. Energetic delivery, engaging expressions. Preserve exact identity.',
    actions: [
      'the subject speaks quickly and clearly, mouth moving',
      'the subject gestures while explaining the steps',
      'the subject nods while giving clear instructions'
    ],
    cameras: [
      'static medium shot, stable framing',
      'handheld, energetic creator feel'
    ],
    lights: [
      'bright clean lighting, high energy',
      'natural daylight, crisp and clear'
    ]
  },
  {
    id: 'parle-formateur', num: 512, cat: '👨‍🏫 Parlant — Expert', name: 'Formateur Parlé', emoji: '🏫', desc: 'Enseigne avec pédagogie',
    basePrompt: 'Animate this image as an educational talking video. The subject teaches the viewer something, speaking clearly and kindly. Warm pedagogical tone, natural delivery. Preserve exact identity.',
    actions: [
      'the subject speaks with a teaching tone, mouth moving clearly',
      'the subject explains while making gentle hand gestures',
      'the subject smiles encouragingly while speaking'
    ],
    cameras: [
      'static medium shot, classroom framing',
      'very slow push-in, engaging'
    ],
    lights: [
      'soft warm light, comfortable classroom feel',
      'bright even lighting for clarity'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 🎬 INTERVIEW & PORTRAIT PARLÉ
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'parle-interview', num: 513, cat: '🎬 Parlant — Interview', name: 'Interview Parlée', emoji: '🎤', desc: 'Format interview professionnel',
    basePrompt: 'Animate this image as an interview-style talking head. The subject speaks to the camera as if being interviewed by a journalist. Thoughtful delivery, natural expressions. Preserve exact identity.',
    actions: [
      'the subject speaks thoughtfully, mouth moving naturally',
      'the subject tilts their head slightly while answering',
      'the subject nods while making a key point'
    ],
    cameras: [
      'static medium close-up, interview style framing',
      'slight offset angle, documentary feel'
    ],
    lights: [
      'soft interview lighting, even on the face',
      'warm key light with subtle rim light'
    ]
  },
  {
    id: 'parle-portrait-parlant', num: 514, cat: '🎬 Parlant — Interview', name: 'Portrait Parlant', emoji: '👤', desc: 'Gros plan visage qui parle',
    basePrompt: 'Animate this image as a talking portrait close-up. The subject speaks directly to the camera, face prominent in frame. Intimate delivery, subtle expressions. Preserve exact identity.',
    actions: [
      'the subject speaks softly, mouth moving naturally',
      'the subject blinks slowly while talking',
      'the subject smiles slightly while speaking'
    ],
    cameras: [
      'static close-up on the face, stable',
      'very slow push-in on the eyes'
    ],
    lights: [
      'soft portrait lighting, flattering on the skin',
      'warm Rembrandt light with subtle shadow'
    ]
  },
  {
    id: 'parle-temoignage-intime', num: 515, cat: '🎬 Parlant — Interview', name: 'Témoignage Intime Parlé', emoji: '💝', desc: 'Témoignage personnel, émotion',
    basePrompt: 'Animate this image as an intimate personal testimonial. The subject speaks softly to the camera, sharing something personal. Warm eyes, emotional connection, natural delivery. Preserve exact identity.',
    actions: [
      'the subject speaks softly, mouth moving gently',
      'the subject looks down briefly then back at the camera',
      'the subject smiles warmly while sharing their story'
    ],
    cameras: [
      'static medium close-up, intimate framing',
      'very slow push-in, quiet and gentle'
    ],
    lights: [
      'soft warm light, intimate golden atmosphere',
      'window light, gentle and natural'
    ]
  },
  {
    id: 'parle-documentaire', num: 516, cat: '🎬 Parlant — Interview', name: 'Documentaire Parlé', emoji: '🎥', desc: 'Style documentaire réaliste',
    basePrompt: 'Animate this image as a documentary talking head. The subject speaks to the camera in a natural, unscripted style. Authentic delivery, real environment feel. Preserve exact identity.',
    actions: [
      'the subject speaks candidly, mouth moving naturally',
      'the subject gestures while recounting a story',
      'the subject looks slightly off-camera then back while talking'
    ],
    cameras: [
      'handheld, documentary realism',
      'static medium shot, natural framing'
    ],
    lights: [
      'natural available light, authentic',
      'soft window light with subtle shadows'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 🌟 STYLES PARLANTS (transformations + parole)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'parle-anime', num: 517, cat: '🌟 Parlant — Styles', name: 'Anime Parlant', emoji: '🌿', desc: 'Style anime Ghibli, bouche animée',
    basePrompt: 'Transform this image into a Studio Ghibli anime style where the character speaks directly to the camera. Anime-style mouth movement synchronized with speech. Soft watercolor background. Preserve same subject, pose, and composition.',
    actions: [
      'the anime character speaks, mouth moving in anime style',
      'the character smiles while talking, eyes expressive',
      'the character tilts their head while speaking, cute gesture'
    ],
    cameras: [
      'static frame, anime composition',
      'very slow pan across the painted background'
    ],
    lights: [
      'warm anime sunset light, golden hour',
      'soft pastel lighting, dreamy atmosphere'
    ]
  },
  {
    id: 'parle-pixar', num: 518, cat: '🌟 Parlant — Styles', name: 'Pixar Parlant', emoji: '✨', desc: 'Style Pixar 3D, personnage qui parle',
    basePrompt: 'Transform this image into a Pixar-style 3D animation where the character speaks to the camera. 3D mouth movement with natural speech synchronization. High-quality 3D rendering. Preserve same subject, pose, and composition.',
    actions: [
      'the 3D character speaks, mouth moving naturally',
      'the character blinks and smiles while talking',
      'the character gestures while explaining, expressive'
    ],
    cameras: [
      'smooth 3D camera, static framing',
      'very slow push-in, cinematic feel'
    ],
    lights: [
      'cinematic 3D lighting, warm key light',
      'soft studio lighting, flattering on the 3D character'
    ]
  },
  {
    id: 'parle-manga', num: 519, cat: '🌟 Parlant — Styles', name: 'Manga Parlant', emoji: '🖤', desc: 'Style manga N&B, bulle de dialogue',
    basePrompt: 'Transform this image into black and white Japanese manga style where the character speaks. Mouth moving in manga style synchronized with speech. High contrast ink, dramatic screentones. Preserve same subject, pose, and composition.',
    actions: [
      'the manga character speaks, mouth moving with emotion',
      'the character emotes strongly while talking',
      'the character nods decisively while speaking'
    ],
    cameras: [
      'static manga panel frame'
    ],
    lights: [
      'high contrast black and white, dramatic ink',
      'harsh manga-style lighting, deep shadows'
    ]
  }
];

// ══════════════════════════════════════════════════════════════════
// FUSION AVEC LES AUTRES FICHIERS
// ══════════════════════════════════════════════════════════════════
if (window.MODES) {
    window.MODES = window.MODES.concat(MODES_PARLANT);
} else {
    window.MODES = MODES_PARLANT;
}
console.log('[modes-parlant.js] ' + MODES_PARLANT.length + ' modes parlants chargés');
