// ══════════════════════════════════════════════════════════════════
// MODES VSL — Video Sales Letter pour e-commerce
// 6 clips à assembler avec ta voix off
// ══════════════════════════════════════════════════════════════════
const MODES_VSL = [
  // ═══════════════════════════════════════════════════════════════
  // 🎯 VSL 1 — HOOK (3 secondes)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'vsl-hook', num: 400, cat: '🎯 VSL E-commerce',
    name: 'VSL — Hook (3s)',
    emoji: '🎯',
    desc: 'Accroche visuelle ultra-percutante',
    basePrompt: 'Animate this image as a punchy 3-second VSL hook. Visual impact, direct eye contact with the camera, dynamic movement, immediate attention grab. The subject looks straight at the viewer with intensity. Preserve the exact subject identity, face, product, and clothing. High-impact opening frame that stops the scroll.',
    actions: [
      'the subject stares directly at the camera, eyes intense',
      'the subject gestures sharply toward the viewer',
      'the subject leans forward suddenly, commanding attention',
      'the subject raises the product toward the camera with authority'
    ],
    cameras: [
      'fast punch-in on the subject\'s eyes',
      'quick push-in on the product',
      'snap zoom on the subject\'s face'
    ],
    lights: [
      'high-contrast dramatic light',
      'bright punchy commercial light',
      'bold colorful light with strong shadows'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 😰 VSL 2 — PROBLÈME (5 secondes)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'vsl-problem', num: 401, cat: '🎯 VSL E-commerce',
    name: 'VSL — Problème (5s)',
    emoji: '😰',
    desc: 'Montre la douleur du client',
    basePrompt: 'Animate this image as a 5-second VSL problem section. The subject expresses frustration, concern, or the pain of the problem. Empathy-inducing body language, tired expression, relatable struggle. Preserve the exact subject identity, face, and clothing. Visually communicate the pain point the product will solve.',
    actions: [
      'the subject sighs deeply, shoulders dropping',
      'the subject shakes their head slowly in frustration',
      'the subject rubs their temples, exhausted',
      'the subject looks down, defeated, then back up with concern'
    ],
    cameras: [
      'slow push-in on the troubled face',
      'static frame with subtle movement',
      'slow arc around the subject'
    ],
    lights: [
      'cool desaturated light, muted tones',
      'harsh overhead light creating shadows under the eyes',
      'dull cloudy day light'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // ✨ VSL 3 — SOLUTION (5 secondes)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'vsl-solution', num: 402, cat: '🎯 VSL E-commerce',
    name: 'VSL — Solution (5s)',
    emoji: '✨',
    desc: 'Révélation du produit',
    basePrompt: 'Animate this image as a 5-second VSL solution reveal. The subject presents the product with confidence and relief. Warm, bright, hopeful atmosphere. The product is highlighted with beautiful lighting, catching the eye. Preserve the exact subject identity, face, product, and clothing. This is the moment of revelation where the solution appears.',
    actions: [
      'the subject lifts the product into the light, smiling with relief',
      'the subject presents the product proudly to the camera',
      'the subject holds the product close, eyes lighting up',
      'the subject gestures at the product like a magic reveal'
    ],
    cameras: [
      'slow push-in on the product',
      'arc around the subject and product',
      'slow tilt up revealing the product'
    ],
    lights: [
      'warm golden light on the product',
      'soft glowing halo around the product',
      'bright hopeful light with warm highlights'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // ⭐ VSL 4 — PREUVE (5 secondes)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'vsl-proof', num: 403, cat: '🎯 VSL E-commerce',
    name: 'VSL — Preuve (5s)',
    emoji: '⭐',
    desc: 'Témoignage / résultat',
    basePrompt: 'Animate this image as a 5-second VSL social proof section. The subject appears transformed, happy, successful — the "after" state after using the product. Warm authentic testimonial feel, genuine smile, confident posture. Preserve the exact subject identity, face, product, and clothing. This is the proof that the product works.',
    actions: [
      'the subject smiles genuinely, nodding with satisfaction',
      'the subject shows the product with pride and gratitude',
      'the subject gestures at themselves, transformed and happy',
      'the subject looks at the product with love and then at the camera'
    ],
    cameras: [
      'slow push-in on the smiling face',
      'static frame with natural movement',
      'subtle handheld, authentic feel'
    ],
    lights: [
      'warm natural daylight, authentic feel',
      'soft golden hour light on the face',
      'bright cheerful light with warm tones'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 🎁 VSL 5 — OFFRE (5 secondes)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'vsl-offer', num: 404, cat: '🎯 VSL E-commerce',
    name: 'VSL — Offre (5s)',
    emoji: '🎁',
    desc: 'Prix, bonus, urgence',
    basePrompt: 'Animate this image as a 5-second VSL offer section. The subject presents the offer with excitement and urgency. Product prominently displayed, gestures suggesting value and limited availability. Energetic, urgent atmosphere. Preserve the exact subject identity, face, product, and clothing. This is the moment the deal is revealed.',
    actions: [
      'the subject holds the product up with both hands, excited',
      'the subject gestures with urgency, eyes wide with excitement',
      'the subject points at the product emphatically',
      'the subject leans in, sharing an insider deal'
    ],
    cameras: [
      'slow push-in on the product and face together',
      'fast zoom on the product',
      'arc around the excited subject'
    ],
    lights: [
      'bright vibrant light with warm highlights',
      'dramatic spotlight on the product',
      'colorful energetic light'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 📢 VSL 6 — CTA (3 secondes)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'vsl-cta', num: 405, cat: '🎯 VSL E-commerce',
    name: 'VSL — CTA (3s)',
    emoji: '📢',
    desc: 'Appel à l\'action clair',
    basePrompt: 'Animate this image as a 3-second VSL call to action. The subject points down (toward the "link below") with authority and confidence. Urgent, direct, commanding gaze. Preserve the exact subject identity, face, product, and clothing. This is the final push to click and buy.',
    actions: [
      'the subject points firmly downward, eyes locked on the camera',
      'the subject gestures toward the "link below" with urgency',
      'the subject holds the product and points down simultaneously',
      'the subject nods once, commanding, then points down'
    ],
    cameras: [
      'slow push-in on the pointing gesture',
      'static locked-off frame with strong movement',
      'tilt down following the pointing hand'
    ],
    lights: [
      'dramatic bold light with strong shadows',
      'high-contrast commercial light',
      'vivid saturated light with urgency'
    ]
  }
];

// ══════════════════════════════════════════════════════════════════
// FUSION AVEC LES AUTRES FICHIERS
// ══════════════════════════════════════════════════════════════════
if (window.MODES) {
    window.MODES = window.MODES.concat(MODES_VSL);
} else {
    window.MODES = MODES_VSL;
}
