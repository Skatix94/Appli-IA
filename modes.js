// ══════════════════════════════════════════════════════════════════
// ATELIER VIDÉO — MODES COMPLETS
// Bloc 1/3 : modes 1 à 120
// ══════════════════════════════════════════════════════════════════
const MODES = [

// ═══════════════════════════════════════════════════════════════
// 🔥 INCONTOURNABLES (E-commerce)
// ═══════════════════════════════════════════════════════════════
{ id: 'pub', num: 294, cat: '🔥 Incontournables', name: 'Publicité Produit', emoji: '📢', desc: 'Spot pub pro : accroche → bénéfice → CTA',
  basePrompt: 'Create a professional vertical 9:16 commercial advertisement video from this exact source image. The product and subject must remain IDENTICAL. Narrative structure: HOOK (2s) → BENEFIT (middle) → CTA (last 2s). Preserve exact composition.',
  actions: ['the subject raises the product toward the camera, catching the light','the subject smiles subtly, product presented with pride','the subject\'s hand adjusts the product slightly'],
  cameras: ['slow dolly-in toward the product','slow push-in on the product, shallow depth of field','subtle arc around the subject'],
  lights: ['soft diffused commercial light','warm golden backlight with rim highlights','clean ambient light, product-focused'] },

{ id: 'packshot', num: 6, cat: '🔥 Incontournables', name: 'Packshot Produit', emoji: '📦', desc: 'Produit sur fond neutre, rotation 360°',
  basePrompt: 'Animate this product photo as a premium packshot commercial. The product rotates slowly on a neutral studio background. Perfect studio lighting, glossy reflections. The product must remain IDENTICAL.',
  actions: ['the product rotates slowly on a turntable','the product floats gently, rotating on its axis','light sweeps across the product surface'],
  cameras: ['static locked-off studio shot, product rotates','slow arc around the product','slow push-in on the product label'],
  lights: ['clean studio softbox lighting, seamless white background','dramatic product lighting with rim highlights','warm premium light'] },

{ id: 'lifestyle', num: 1, cat: '🔥 Incontournables', name: 'Lifestyle Authentique', emoji: '☀️', desc: 'Lumière naturelle, vie réelle',
  basePrompt: 'Animate this image as an authentic lifestyle commercial. Natural daylight, candid feel, clean and optimistic atmosphere. The subject lives a real moment with the product. Preserve exact identity.',
  actions: ['the subject moves naturally, breathing and smiling','a gentle breeze moves the hair and fabric','the subject turns slightly, catching the light'],
  cameras: ['handheld with organic tremor, intimate feel','slow dolly-in following the subject','static frame with natural parallax'],
  lights: ['warm natural daylight, soft shadows','golden hour backlight, dreamy glow','soft window light, cozy atmosphere'] },

{ id: 'ugc', num: 293, cat: '🔥 Incontournables', name: 'UGC Créateur (TikTok)', emoji: '📱', desc: 'Vidéo créateur authentique, selfie',
  basePrompt: 'Animate this image as a UGC (User Generated Content) creator video, TikTok-style. Authentic selfie framing, natural handheld motion, real person talking to camera. Preserve exact identity and product.',
  actions: ['the subject talks naturally to the camera, expressive gestures','the subject leans slightly forward, engaging the viewer','the subject laughs genuinely'],
  cameras: ['selfie arm-length framing, slight shake','handheld, pointing the camera at the product','close-up selfie with natural drift'],
  lights: ['natural indoor daylight, window light','ring light selfie glow','warm bathroom vanity light'] },

{ id: 'food', num: 6, cat: '🔥 Incontournables', name: 'Food & Gourmand', emoji: '🍽️', desc: 'Plat appétissant, vapeur, texture',
  basePrompt: 'Animate this food photo as an appetizing food commercial. Warm inviting tones, steam rising, sauce dripping, texture details. Mouth-watering presentation. Preserve the exact dish and composition.',
  actions: ['steam rises gently from the dish','sauce slowly drips over the food','a fork lifts a piece of the dish slowly'],
  cameras: ['slow push-in on the dish, macro feel','top-down rotating shot','side angle capturing steam against light'],
  lights: ['warm restaurant lighting, golden tones','soft daylight from a window, rustic feel','dramatic side light making textures pop'] },

{ id: 'beauty', num: 7, cat: '🔥 Incontournables', name: 'Beauté & Cosmétique', emoji: '🌸', desc: 'Peau lumineuse, textures soyeuses',
  basePrompt: 'Animate this beauty or skincare photo as a refined beauty commercial. Soft diffused light, pastel tones, silky textures, glowing skin. Preserve exact subject identity, face, skin, makeup, and product.',
  actions: ['the skin glows softly, light moving across the face','the subject blinks slowly, lashes catching the light','a drop of product falls in slow motion'],
  cameras: ['extreme close-up on the skin texture','slow push-in on the face','soft arc around the subject'],
  lights: ['soft diffused beauty light, glowing skin','warm pastel tones, dreamy atmosphere','cool clean light, minimal and modern'] },

{ id: 'luxury', num: 2, cat: '🔥 Incontournables', name: 'Luxe Premium', emoji: '💎', desc: 'Élégance sombre, reflets',
  basePrompt: 'Animate this image as a luxury premium commercial. Dark elegant background, dramatic rim lighting, glossy reflections, high-end feel. Every detail feels expensive. Preserve exact identity.',
  actions: ['light sweeps slowly across the product','the subject turns their head elegantly','a subtle reflection moves across a glossy surface'],
  cameras: ['slow dolly-in with dramatic intensity','slow arc around the subject, cinematic','static locked-off with deep shadow composition'],
  lights: ['dramatic rim lighting on dark background','single source warm light, deep shadows','golden highlights on glossy surfaces'] },

{ id: 'tech', num: 5, cat: '🔥 Incontournables', name: 'Tech & High-Tech', emoji: '🚀', desc: 'Design épuré, futurisme',
  basePrompt: 'Animate this tech product photo as a sleek high-tech commercial. Clean minimal background, cool blue tones, futuristic feel, sharp details. Preserve exact product identity.',
  actions: ['the product rotates slowly revealing its design','LED lights pulse softly on the product','the product hovers slightly, glowing'],
  cameras: ['slow push-in on the product','orbital arc around the product','macro close-up on the details'],
  lights: ['cool blue LED lighting','minimalist white studio with soft shadows','dark studio with colored accent lighting'] },

{ id: 'fashion', num: 17, cat: '🔥 Incontournables', name: 'Fashion Lookbook', emoji: '👗', desc: 'Défilé, tissus qui bougent',
  basePrompt: 'Animate this fashion photo as a luxury lookbook video. Studio lighting, model moving elegantly, fabric flowing, editorial magazine feel. Preserve exact model identity and outfit.',
  actions: ['the fabric moves gently in a breeze','the model walks forward confidently','the model turns slowly, showing the outfit'],
  cameras: ['slow dolly-in on the model','arc around the model, fashion-show style','low angle looking up, powerful presence'],
  lights: ['clean studio lighting with soft shadows','dramatic side light, editorial feel','warm golden light, glamorous'] },

{ id: 'unboxing', num: 292, cat: '🔥 Incontournables', name: 'Unboxing', emoji: '🎁', desc: 'Ouverture produit, révélation',
  basePrompt: 'Animate this image as an unboxing video. The viewer experiences the excitement of opening the product for the first time. Clean table, hands interacting, packaging opening. Preserve exact product identity.',
  actions: ['hands slowly open the packaging','the product is lifted out, catching the light','tissue paper is folded back revealing the product'],
  cameras: ['top-down view over the package','handheld following the hands','slow push-in as the product is revealed'],
  lights: ['soft daylight from a window','clean bright studio light','warm cozy indoor light'] },

{ id: 'testimonial', num: 182, cat: '🔥 Incontournables', name: 'Témoignage Client', emoji: '💬', desc: 'Client satisfait parle à la caméra',
  basePrompt: 'Animate this image as a video testimonial. A satisfied customer speaks warmly to the camera about the product. Authentic, trustworthy, real. Preserve exact subject identity and product.',
  actions: ['the subject talks naturally, nodding slightly','the subject smiles, gesturing with their hands','the subject looks at the product then at the camera'],
  cameras: ['medium shot, documentary style','close-up on the face, intimate','slight handheld, authentic feel'],
  lights: ['soft window light, natural','warm indoor light, cozy','clean neutral light, professional'] },

{ id: 'before-after', num: 239, cat: '🔥 Incontournables', name: 'Avant / Après', emoji: '✨', desc: 'Transformation spectaculaire',
  basePrompt: 'Animate this image as a dramatic before/after reveal. The scene shows a transformation happening in front of the viewer. Preserve exact subject identity and product.',
  actions: ['the subject transforms, colors and light shifting','the scene morphs from dull to vibrant','a wipe effect reveals the new look'],
  cameras: ['static frame, transformation happens within','slow push-in as the change occurs','fast cut-style transition'],
  lights: ['dull muted light transforming to warm vibrant light','before: cool gray — after: warm golden','dramatic light shift'] },

// ═══════════════════════════════════════════════════════════════
// ⚡ MOUVEMENTS DE CAMÉRA
// ═══════════════════════════════════════════════════════════════
{ id: 'dolly-zoom', num: 61, cat: '⚡ Mouvements', name: 'Dolly Zoom (Vertigo)', emoji: '🌀', desc: 'Effet Hitchcock',
  basePrompt: 'Animate this image with a dolly zoom (Vertigo) effect. The camera pushes in while zooming out, creating disorienting perspective distortion. Subject stays exactly the same.',
  actions: ['the background stretches and compresses dramatically'],
  cameras: ['dolly zoom, camera moving forward while zooming out'],
  lights: ['dramatic with deep focus','warm cinematic','cool intense'] },

{ id: 'orbit-360', num: 62, cat: '⚡ Mouvements', name: 'Orbite 360°', emoji: '🔄', desc: 'Caméra tourne autour du sujet',
  basePrompt: 'Animate this image as a 360° orbit shot. The camera moves around the subject, revealing depth. Preserve exact subject identity.',
  actions: ['the subject stands still, breathing subtly'],
  cameras: ['360° orbit around the subject at constant speed'],
  lights: ['consistent lighting all around','dramatic rim light','soft studio'] },

{ id: 'drone', num: 63, cat: '⚡ Mouvements', name: 'Drone Aérien', emoji: '🚁', desc: 'Vue du ciel, survol',
  basePrompt: 'Animate this landscape or scene as an aerial drone shot. Smooth bird\'s eye view, sweeping motion. Preserve exact scene.',
  actions: ['the drone reveals more of the scene as it moves'],
  cameras: ['aerial drone flyover','top-down drone rotating','drone pulling up to reveal horizon'],
  lights: ['golden hour aerial light','cool morning light','sunset sky'] },

{ id: 'crane', num: 64, cat: '⚡ Mouvements', name: 'Crane Shot', emoji: '🏗️', desc: 'Montée verticale dramatique',
  basePrompt: 'Animate this image as a dramatic crane shot. The camera rises vertically, revealing more of the scene. Preserve exact subject and composition.',
  actions: ['the scene reveals as the camera rises'],
  cameras: ['crane shot rising vertically','boom down revealing the subject'],
  lights: ['dramatic top light','warm sunset','cool cinematic'] },

{ id: 'steadicam', num: 65, cat: '⚡ Mouvements', name: 'Steadicam Fluide', emoji: '🎥', desc: 'Suivi du sujet sans secousses',
  basePrompt: 'Animate this image with a smooth steadicam follow shot. The camera tracks the subject fluidly. Preserve exact subject identity.',
  actions: ['the subject walks slowly forward'],
  cameras: ['steadicam following behind the subject','side steadicam tracking'],
  lights: ['natural daylight','warm interior','cool industrial'] },

{ id: 'push-in', num: 67, cat: '⚡ Mouvements', name: 'Push-In Dramatique', emoji: '➡️', desc: 'Zoom lent vers le visage',
  basePrompt: 'Animate this image with a slow dramatic push-in toward the subject\'s face. Intense, cinematic. Preserve exact subject identity.',
  actions: ['the subject looks into the camera, breathing slowly'],
  cameras: ['slow push-in toward the face'],
  lights: ['dramatic side light','soft warm','cool cinematic'] },

{ id: 'pull-out', num: 68, cat: '⚡ Mouvements', name: 'Pull-Out Révélation', emoji: '⬅️', desc: 'Dézoom qui révèle le contexte',
  basePrompt: 'Animate this image with a slow pull-out revealing the context around the subject. Preserve exact subject and composition.',
  actions: ['the environment reveals itself around the subject'],
  cameras: ['slow pull-out, the frame expands'],
  lights: ['dramatic with surrounding darkness','natural daylight','cinematic warm'] },

{ id: 'whip-pan', num: 69, cat: '⚡ Mouvements', name: 'Whip Pan', emoji: '💨', desc: 'Rotation rapide',
  basePrompt: 'Animate this image as a whip pan transition. Fast camera rotation, motion blur, dynamic energy. Preserve exact subject identity.',
  actions: ['the subject holds still while the camera whips past'],
  cameras: ['fast whip pan rotation'],
  lights: ['dynamic with motion streaks','neon glow','dramatic'] },

{ id: 'rack-focus', num: 70, cat: '⚡ Mouvements', name: 'Rack Focus', emoji: '🔍', desc: 'Passage net/flou',
  basePrompt: 'Animate this image with a rack focus effect. The focus shifts from foreground to background. Preserve exact subject identity.',
  actions: ['the foreground blurs as the background sharpens'],
  cameras: ['static frame with focus rack'],
  lights: ['soft cinematic','dramatic side','natural'] },

{ id: 'parallax', num: 71, cat: '⚡ Mouvements', name: 'Parallaxe 2.5D', emoji: '📐', desc: 'Profondeur à partir d\'une image 2D',
  basePrompt: 'Animate this image with 2.5D parallax depth. Layers move at different speeds creating a sense of depth. Preserve exact composition.',
  actions: ['layers slide past each other at different speeds'],
  cameras: ['slow lateral camera move revealing parallax'],
  lights: ['consistent','dramatic','soft ambient'] },

{ id: 'pov', num: 74, cat: '⚡ Mouvements', name: 'Caméra Subjective (POV)', emoji: '👁️', desc: 'On voit à travers les yeux',
  basePrompt: 'Animate this image as a POV (point of view) shot. The camera becomes the subject\'s eyes. Immersive and intimate. Preserve environment.',
  actions: ['the hands of the subject enter the frame'],
  cameras: ['POV with subtle head movement'],
  lights: ['natural for the scene','dramatic','ambient'] },

{ id: 'handheld', num: 75, cat: '⚡ Mouvements', name: 'Caméra Épaule', emoji: '📹', desc: 'Tremblement organique, urgence',
  basePrompt: 'Animate this image with a handheld camera feel. Organic tremor, urgent atmosphere, documentary style. Preserve exact subject identity.',
  actions: ['the subject moves naturally'],
  cameras: ['handheld with natural tremor'],
  lights: ['natural','gritty','dramatic'] },

// ═══════════════════════════════════════════════════════════════
// 💥 SPECTACULAIRE
// ═══════════════════════════════════════════════════════════════
{ id: 'explosion', num: 91, cat: '💥 Spectaculaire', name: 'Explosion Cinématique', emoji: '💥', desc: 'Boule de feu, onde de choc',
  basePrompt: 'Animate this image with a cinematic explosion in the background. Fireball, shockwave, flying debris. Subject remains calm. Preserve exact identity.',
  actions: ['the explosion expands behind the subject'],
  cameras: ['static frame with the explosion in the background','slow push-in on the subject ignoring the blast'],
  lights: ['orange fire glow','dramatic warm light from the blast'] },

{ id: 'super-speed', num: 92, cat: '💥 Spectaculaire', name: 'Super Vitesse', emoji: '⚡', desc: 'Effet Flash, traînées',
  basePrompt: 'Animate this image with a super speed effect. Lightning trails, motion blur, electric energy surrounding the subject. Preserve exact identity.',
  actions: ['the subject zooms forward leaving a trail of light'],
  cameras: ['fast track following the subject'],
  lights: ['electric blue and white','yellow lightning flashes','neon streaks'] },

{ id: 'telekinesis', num: 93, cat: '💥 Spectaculaire', name: 'Télékinésie', emoji: '🧠', desc: 'Objets qui volent',
  basePrompt: 'Animate this image with telekinesis. Objects float around the subject, moved by an invisible force. Preserve exact subject identity.',
  actions: ['objects rise and orbit slowly around the subject'],
  cameras: ['slow arc around the subject','static dramatic frame'],
  lights: ['dramatic with glowing highlights','cool mysterious','warm mystical'] },

{ id: 'energy-ball', num: 94, cat: '💥 Spectaculaire', name: 'Boule d\'Énergie', emoji: '🔮', desc: 'Énergie entre les mains',
  basePrompt: 'Animate this image with a glowing energy ball forming between the subject\'s hands. Powerful, magical, cinematic. Preserve exact identity.',
  actions: ['a glowing orb forms and pulses between the hands'],
  cameras: ['slow push-in on the hands'],
  lights: ['blue mystical glow','warm magical light','white intense glow'] },

{ id: 'lightning', num: 95, cat: '💥 Spectaculaire', name: 'Éclairs & Foudre', emoji: '🌩️', desc: 'Pouvoir électrique',
  basePrompt: 'Animate this image with electrical lightning powers. Electricity arcs around the subject, eyes glow. Preserve exact identity.',
  actions: ['lightning arcs crackle around the subject'],
  cameras: ['static dramatic frame','slow push-in'],
  lights: ['blue-white electric light','dark storm atmosphere'] },

{ id: 'ice', num: 96, cat: '💥 Spectaculaire', name: 'Glace & Givre', emoji: '❄️', desc: 'Pouvoir de glace',
  basePrompt: 'Animate this image with ice powers. Ice crystals form around the subject, frost spreads. Preserve exact identity.',
  actions: ['ice crystals grow and float around the subject'],
  cameras: ['slow push-in','arc around the subject'],
  lights: ['cool blue and white','icy cyan glow'] },

{ id: 'teleport', num: 97, cat: '💥 Spectaculaire', name: 'Téléportation', emoji: '✨', desc: 'Disparition/apparition',
  basePrompt: 'Animate this image with a teleportation effect. The subject dissolves into particles and reappears. Preserve exact identity.',
  actions: ['the subject dissolves into glowing particles and reforms'],
  cameras: ['static frame capturing the effect'],
  lights: ['mystical glow','cool blue shimmer','warm magical'] },

{ id: 'levitation', num: 98, cat: '💥 Spectaculaire', name: 'Lévitation', emoji: '🕊️', desc: 'Le sujet flotte',
  basePrompt: 'Animate this image with levitation. The subject floats gently above the ground. Surreal and magical. Preserve exact identity.',
  actions: ['the subject rises slowly into the air'],
  cameras: ['low angle looking up at the floating subject'],
  lights: ['mystical glow beneath','soft celestial light','dramatic side light'] },

{ id: 'aura', num: 46, cat: '💥 Spectaculaire', name: 'Aura Énergétique', emoji: '🔥', desc: 'Aura qui entoure le sujet',
  basePrompt: 'Animate this image with a glowing aura surrounding the subject. Powerful energy field, colored light. Preserve exact identity.',
  actions: ['the aura pulses and flares around the subject'],
  cameras: ['slow push-in on the subject','arc shot'],
  lights: ['colored aura glow','warm orange flames','cool blue energy'] },

{ id: 'slowmo-impact', num: 48, cat: '💥 Spectaculaire', name: 'Impact Au Ralenti', emoji: '🐢', desc: 'Ralenti Matrix',
  basePrompt: 'Animate this image as a slow motion impact moment. Extreme slow motion, particles suspended in air, dramatic tension. Preserve exact identity.',
  actions: ['particles and debris float suspended in slow motion'],
  cameras: ['extremely slow push-in','arc around the impact'],
  lights: ['dramatic with suspended particles catching light','warm fire glow','cool intensity'] },

{ id: 'rain', num: 35, cat: '💥 Spectaculaire', name: 'Pluie', emoji: '🌧️', desc: 'Pluie qui tombe, reflets',
  basePrompt: 'Animate this image with falling rain. Drops hit surfaces, reflections shimmer, atmospheric mood. Preserve exact composition.',
  actions: ['rain falls steadily around the subject'],
  cameras: ['static frame with rain','slow push-in'],
  lights: ['moody gray light','warm street light through rain','blue night with reflections'] },

{ id: 'storm', num: 112, cat: '💥 Spectaculaire', name: 'Orage', emoji: '⛈️', desc: 'Éclairs multiples, pluie',
  basePrompt: 'Animate this image with a thunderstorm. Rain batters, lightning flashes, dramatic atmosphere. Preserve exact composition.',
  actions: ['lightning flashes illuminate the scene'],
  cameras: ['static frame with storm','slow push-in'],
  lights: ['dark stormy light with lightning flashes','blue dramatic'] },

{ id: 'snow', num: 34, cat: '💥 Spectaculaire', name: 'Neige', emoji: '❄️', desc: 'Flocons qui tombent',
  basePrompt: 'Animate this image with softly falling snow. Flakes drift gently, cold atmosphere, peaceful. Preserve exact composition.',
  actions: ['snowflakes drift slowly through the frame'],
  cameras: ['static frame with snow'],
  lights: ['soft cold light','warm light through snow','blue winter glow'] },

{ id: 'mist', num: 8, cat: '💥 Spectaculaire', name: 'Brume Mystique', emoji: '🌫️', desc: 'Halo atmosphérique',
  basePrompt: 'Animate this image with mystical mist. Atmospheric haze, diffused glowing light, ethereal fog. Preserve exact composition.',
  actions: ['mist drifts slowly through the scene'],
  cameras: ['slow push-in through the mist'],
  lights: ['soft diffused light','glowing warm light in mist','cool blue mystical'] },

{ id: 'fire', num: 57, cat: '💥 Spectaculaire', name: 'Feu & Flammes', emoji: '🔥', desc: 'Flammes, braises',
  basePrompt: 'Animate this image with fire and flames. Flames rise, embers float, intense heat. Preserve exact subject identity.',
  actions: ['flames rise around the subject'],
  cameras: ['static dramatic frame','slow push-in'],
  lights: ['orange fire glow','warm intense light','red dramatic fire'] },

{ id: 'particles', num: 36, cat: '💥 Spectaculaire', name: 'Particules Lumineuses', emoji: '✨', desc: 'Poussière dorée, bokeh',
  basePrompt: 'Animate this image with floating light particles. Golden dust, fireflies, bokeh, dreamy atmosphere. Preserve exact composition.',
  actions: ['glowing particles float gently through the scene'],
  cameras: ['slow push-in','static dreamy frame'],
  lights: ['warm golden glow','cool shimmer','soft bokeh'] },

// ═══════════════════════════════════════════════════════════════
// 🎨 STYLES ARTISTIQUES
// ═══════════════════════════════════════════════════════════════
{ id: 'anime', num: 1, cat: '🎨 Styles', name: 'Studio Anime (Ghibli)', emoji: '🌿', desc: 'Dessin animé japonais',
  basePrompt: 'Transform the entire image into a Studio Ghibli / Hayao Miyazaki anime style. Hand-painted watercolor backgrounds, cel-shaded characters, soft warm colors. Preserve same subject, pose, and composition.',
  actions: ['hair moves gently in the wind','a petal drifts past the character'],
  cameras: ['slow pan across painted background','gentle push-in'],
  lights: ['warm anime sunset','cool morning light','pastel twilight'] },

{ id: 'simpson', num: 2, cat: '🎨 Styles', name: 'Les Simpson', emoji: '🍩', desc: 'Cartoon jaune',
  basePrompt: 'Transform the entire image into The Simpsons cartoon style. Yellow-skinned characters, thick black outlines, flat saturated colors. Preserve same subject, pose, and composition.',
  actions: ['character blinks and shifts weight'],
  cameras: ['static frame with subtle motion'],
  lights: ['flat cartoon lighting','bright colorful'] },

{ id: 'pixar', num: 6, cat: '🎨 Styles', name: 'Pixar 3D', emoji: '✨', desc: 'Rendu 3D Pixar',
  basePrompt: 'Transform the entire image into high-quality Pixar-style 3D animation. Subsurface scattering, cinematic lighting, stylized characters. Preserve same subject, pose, and composition.',
  actions: ['character moves naturally with 3D weight'],
  cameras: ['smooth 3D camera move'],
  lights: ['cinematic 3D lighting','warm golden hour','studio 3D'] },

{ id: 'cyberpunk', num: 23, cat: '🎨 Styles', name: 'Cyberpunk Néon', emoji: '🌃', desc: 'Néons roses/cyans',
  basePrompt: 'Transform the image into a cyberpunk futuristic aesthetic. Neon pink and cyan lighting, holographic ads, wet reflective streets. Preserve same subject, pose, and composition.',
  actions: ['neon signs flicker','rain falls with neon reflections'],
  cameras: ['slow dolly-in through the rainy street','arc shot'],
  lights: ['neon magenta and cyan','holographic projections','wet street glow'] },

{ id: 'bw', num: 3, cat: '🎨 Styles', name: 'Noir & Blanc', emoji: '⚫', desc: 'Monochrome élégant',
  basePrompt: 'Animate this image in elegant black and white cinematic style. High contrast monochrome, deep blacks, luminous whites, subtle film grain. Preserve exact identity.',
  actions: ['the subject turns their head slowly'],
  cameras: ['slow push-in','static dramatic'],
  lights: ['harsh single-source light','soft diffused window light','venetian blind shadows'] },

{ id: 'vintage', num: 6, cat: '🎨 Styles', name: 'Vintage Super 8', emoji: '📽️', desc: 'Grain, chaleur rétro',
  basePrompt: 'Transform the image into vintage Super 8 film aesthetic. Grainy texture, subtle vignette, warm faded colors, soft focus edges. Preserve same subject, pose, and composition.',
  actions: ['the subject moves with old film jitter'],
  cameras: ['handheld with old film feel'],
  lights: ['warm faded tones','soft golden light'] },

{ id: 'vhs', num: 37, cat: '🎨 Styles', name: 'VHS / Rétro 80s', emoji: '📼', desc: 'Vieux magnétoscope',
  basePrompt: 'Transform the image into VHS video aesthetic. Scanlines, chromatic aberration, tape distortion, 80s vibes. Preserve same subject, pose, and composition.',
  actions: ['VHS tracking lines roll across the frame'],
  cameras: ['static frame with VHS texture'],
  lights: ['80s neon glow','warm tungsten','cold blue retro'] },

{ id: 'watercolor', num: 8, cat: '🎨 Styles', name: 'Aquarelle Animée', emoji: '🎨', desc: 'Peinture aquarelle',
  basePrompt: 'Transform the image into a dreamy watercolor painting animation. Soft bleeding edges, translucent washes, paper texture. Preserve same subject, pose, and composition.',
  actions: ['colors bleed and blend gently'],
  cameras: ['static dreamy frame'],
  lights: ['soft diffuse light','warm pastel tones'] },

{ id: 'oil', num: 9, cat: '🎨 Styles', name: 'Peinture à l\'Huile', emoji: '🖼️', desc: 'Huile classique',
  basePrompt: 'Transform the image into a classical oil painting animation. Visible impasto brushstrokes, rich textured paint, old master technique. Preserve same subject, pose, and composition.',
  actions: ['paint strokes animate subtly'],
  cameras: ['slow push-in'],
  lights: ['chiaroscuro','warm classical light','dramatic'] },

{ id: 'pixel', num: 279, cat: '🎨 Styles', name: 'Pixel Art', emoji: '👾', desc: 'Style 8/16 bits',
  basePrompt: 'Transform the image into pixel art animation, 8-bit or 16-bit retro gaming style. Limited color palette, visible pixels, nostalgic. Preserve same subject, pose, and composition.',
  actions: ['character animates in pixel-art style'],
  cameras: ['static pixel frame'],
  lights: ['flat pixel lighting'] },

{ id: 'manga', num: 3, cat: '🎨 Styles', name: 'Manga N&B', emoji: '🖤', desc: 'Style manga japonais',
  basePrompt: 'Transform the image into black and white Japanese manga style. Stark ink outlines, dramatic screentones, high contrast. Preserve same subject, pose, and composition.',
  actions: ['character animates with manga flair'],
  cameras: ['static frame with manga panels feel'],
  lights: ['high contrast B&W','dramatic ink'] },

{ id: 'comics', num: 7, cat: '🎨 Styles', name: 'BD Franco-Belge', emoji: '📘', desc: 'Ligne claire',
  basePrompt: 'Transform the image into Franco-Belgian bande dessinée style. Ligne claire technique, uniform clean ink outlines, flat vivid colors. Preserve same subject, pose, and composition.',
  actions: ['characters animate with BD flair'],
  cameras: ['static frame'],
  lights: ['flat BD lighting','bright colors'] },

{ id: 'claymation', num: 10, cat: '🎨 Styles', name: 'Claymation', emoji: '🧱', desc: 'Pâte à modeler',
  basePrompt: 'Transform the image into claymation stop-motion animation. Plasticine texture, fingerprint details, Aardman Studios style. Preserve same subject, pose, and composition.',
  actions: ['character moves with clay stop-motion style'],
  cameras: ['slight stop-motion jitter'],
  lights: ['warm studio stop-motion light'] },

{ id: 'vaporwave', num: 11, cat: '🎨 Styles', name: 'Vaporwave', emoji: '🌴', desc: 'Nostalgie 90s',
  basePrompt: 'Transform the image into vaporwave aesthetic. Nostalgic 90s imagery, pastel gradients, VHS quality, retro digital. Preserve same subject, pose, and composition.',
  actions: ['subtle 90s digital motion'],
  cameras: ['static frame with VHS feel'],
  lights: ['pink and cyan gradient','sunset pastel'] },

{ id: 'surreal', num: 12, cat: '🎨 Styles', name: 'Surréaliste', emoji: '🌀', desc: 'Dali, impossible',
  basePrompt: 'Transform the image into surrealist aesthetic. Impossible juxtapositions, dreamlike distortions, Salvador Dali influence. Preserve same subject, pose, and composition.',
  actions: ['surreal elements morph and shift'],
  cameras: ['slow surreal push-in'],
  lights: ['dreamlike','warm surreal','cool bizarre'] },

{ id: 'neon-sign', num: 286, cat: '🎨 Styles', name: 'Néon Sign', emoji: '💡', desc: 'Tube néon lumineux',
  basePrompt: 'Transform the image into a neon sign aesthetic. Glowing neon tubes, night atmosphere, vibrant colored light. Preserve same subject, pose, and composition.',
  actions: ['neon flickers and glows'],
  cameras: ['static frame','slow push-in'],
  lights: ['neon pink, blue, green','night atmospheric'] },

{ id: 'hologram', num: 287, cat: '🎨 Styles', name: 'Hologramme', emoji: '🔷', desc: 'Transparence, scanlines',
  basePrompt: 'Transform the image into a holographic projection aesthetic. Translucent, scanlines, blue glow, sci-fi projection. Preserve same subject, pose, and composition.',
  actions: ['hologram flickers and scans'],
  cameras: ['static hologram frame'],
  lights: ['blue holographic glow','cyan sci-fi'] },

// ═══════════════════════════════════════════════════════════════
// 🌟 AMBIANCES
// ═══════════════════════════════════════════════════════════════
{ id: 'golden-hour', num: 3, cat: '🌟 Ambiances', name: 'Golden Hour', emoji: '🌅', desc: 'Lumière dorée',
  basePrompt: 'Animate this image with warm golden hour light. Long amber shadows, luminous atmosphere, dreamy glow. Preserve exact identity.',
  actions: ['warm light gently shifts across the subject'],
  cameras: ['slow push-in','static warm frame'],
  lights: ['warm amber sunlight','golden backlight','soft warm glow'] },

{ id: 'moonlight', num: 11, cat: '🌟 Ambiances', name: 'Clair de Lune', emoji: '🌙', desc: 'Ambiance bleutée',
  basePrompt: 'Animate this image with cool moonlight atmosphere. Blue and silver tones, soft lunar glow, peaceful night mood. Preserve exact identity.',
  actions: ['soft moonlight shifts gently'],
  cameras: ['static calm frame'],
  lights: ['cool blue moonlight','silver glow','peaceful night'] },

{ id: 'neon-urban', num: 5, cat: '🌟 Ambiances', name: 'Néon Urbain', emoji: '🌆', desc: 'Reflets colorés nocturnes',
  basePrompt: 'Animate this image with neon-soaked urban night atmosphere. Colorful reflections, cinematic urban glow, magenta and cyan accents. Preserve exact identity.',
  actions: ['neon signs flicker in the background'],
  cameras: ['slow dolly-in through the street'],
  lights: ['neon magenta and cyan','wet street glow','urban night'] },

{ id: 'dramatic', num: 7, cat: '🌟 Ambiances', name: 'Contraste Dramatique', emoji: '🌓', desc: 'Ombres profondes',
  basePrompt: 'Animate this image with high contrast dramatic lighting. Deep shadows, bright highlights, chiaroscuro effect. Preserve exact identity.',
  actions: ['light and shadow shift across the subject'],
  cameras: ['slow push-in','static dramatic'],
  lights: ['harsh contrast','single source dramatic','chiaroscuro'] },

// ═══════════════════════════════════════════════════════════════
// 🎯 VSL E-COMMERCE
// ═══════════════════════════════════════════════════════════════
{ id: 'vsl-hook', num: 400, cat: '🎯 VSL E-commerce', name: 'VSL — Hook (3s)', emoji: '🎯', desc: 'Accroche percutante',
  basePrompt: 'Animate this image as a punchy 3-second VSL hook. Visual impact, direct eye contact with the camera, dynamic movement, immediate attention grab. High-impact opening frame that stops the scroll.',
  actions: ['the subject stares directly at the camera, eyes intense','the subject gestures sharply toward the viewer','the subject leans forward suddenly'],
  cameras: ['fast punch-in on the subject\'s eyes','quick push-in on the product','snap zoom on the subject\'s face'],
  lights: ['high-contrast dramatic light','bright punchy commercial light','bold colorful light'] },

{ id: 'vsl-problem', num: 401, cat: '🎯 VSL E-commerce', name: 'VSL — Problème (5s)', emoji: '😰', desc: 'Douleur du client',
  basePrompt: 'Animate this image as a 5-second VSL problem section. The subject expresses frustration, concern, or the pain of the problem. Empathy-inducing body language, tired expression, relatable struggle.',
  actions: ['the subject sighs deeply, shoulders dropping','the subject shakes their head slowly in frustration','the subject rubs their temples, exhausted'],
  cameras: ['slow push-in on the troubled face','static frame with subtle movement','slow arc around the subject'],
  lights: ['cool desaturated light, muted tones','harsh overhead light','dull cloudy day light'] },

{ id: 'vsl-solution', num: 402, cat: '🎯 VSL E-commerce', name: 'VSL — Solution (5s)', emoji: '✨', desc: 'Révélation du produit',
  basePrompt: 'Animate this image as a 5-second VSL solution reveal. The subject presents the product with confidence and relief. Warm, bright, hopeful atmosphere. The product is highlighted with beautiful lighting.',
  actions: ['the subject lifts the product into the light, smiling with relief','the subject presents the product proudly','the subject holds the product close, eyes lighting up'],
  cameras: ['slow push-in on the product','arc around the subject and product','slow tilt up revealing the product'],
  lights: ['warm golden light on the product','soft glowing halo around the product','bright hopeful light'] },

{ id: 'vsl-proof', num: 403, cat: '🎯 VSL E-commerce', name: 'VSL — Preuve (5s)', emoji: '⭐', desc: 'Témoignage, résultat',
  basePrompt: 'Animate this image as a 5-second VSL social proof section. The subject appears transformed, happy, successful — the "after" state after using the product. Warm authentic testimonial feel.',
  actions: ['the subject smiles genuinely, nodding with satisfaction','the subject shows the product with pride','the subject looks at the product with love'],
  cameras: ['slow push-in on the smiling face','static frame with natural movement','subtle handheld'],
  lights: ['warm natural daylight','soft golden hour light','bright cheerful light'] },

{ id: 'vsl-offer', num: 404, cat: '🎯 VSL E-commerce', name: 'VSL — Offre (5s)', emoji: '🎁', desc: 'Prix, bonus, urgence',
  basePrompt: 'Animate this image as a 5-second VSL offer section. The subject presents the offer with excitement and urgency. Product prominently displayed, gestures suggesting value and limited availability.',
  actions: ['the subject holds the product up with both hands, excited','the subject gestures with urgency, eyes wide','the subject points at the product emphatically'],
  cameras: ['slow push-in on the product and face together','fast zoom on the product','arc around the excited subject'],
  lights: ['bright vibrant light with warm highlights','dramatic spotlight on the product','colorful energetic light'] },

{ id: 'vsl-cta', num: 405, cat: '🎯 VSL E-commerce', name: 'VSL — CTA (3s)', emoji: '📢', desc: 'Appel à l\'action',
  basePrompt: 'Animate this image as a 3-second VSL call to action. The subject points down (toward the "link below") with authority and confidence. Urgent, direct, commanding gaze.',
  actions: ['the subject points firmly downward, eyes locked on the camera','the subject gestures toward the link below with urgency','the subject holds the product and points down'],
  cameras: ['slow push-in on the pointing gesture','static locked-off frame','tilt down following the pointing hand'],
  lights: ['dramatic bold light with strong shadows','high-contrast commercial light','vivid saturated light'] }


// ═══════════════════════════════════════════════════════════════
// 🥋 ARTS MARTIAUX & COMBAT
// ═══════════════════════════════════════════════════════════════
{ id: 'kungfu', num: 41, cat: '🥋 Arts Martiaux', name: 'Kung Fu Cinématique', emoji: '🥋', desc: 'Combat martial, ralenti Matrix',
  basePrompt: 'Animate this image as an epic kung fu cinematic sequence. The subject performs fluid martial arts movements: strikes, kicks, jumps, spins. Slow motion impacts, matrix-style bullet time.',
  actions: ['the subject executes a spinning kick, robe fluttering','the subject leaps into the air, both fists extended forward','the subject blocks an invisible strike, forearms crossed, eyes sharp'],
  cameras: ['bullet time rotation around the subject mid-punch','fast whip pan following the strike','low angle looking up at the fighter'],
  lights: ['dramatic side lighting, dust particles in the air','warm temple light with incense smoke','cool moonlight on a bamboo forest'] },

{ id: 'karate', num: 42, cat: '🥋 Arts Martiaux', name: 'Karaté Impact', emoji: '🥋', desc: 'Coups puissants, ondes de choc',
  basePrompt: 'Animate this image as a karate impact sequence. Powerful strikes, shockwaves, speed lines, dramatic tension. Preserve exact identity.',
  actions: ['the subject delivers a powerful punch, air rippling','the subject performs a kata, movements precise'],
  cameras: ['fast push-in on the strike','slow motion impact'],
  lights: ['dramatic dojo light','cool intensity'] },

{ id: 'boxing', num: 43, cat: '🥋 Arts Martiaux', name: 'Boxe / MMA', emoji: '🥊', desc: 'Esquives, coups, sueur',
  basePrompt: 'Animate this image as a boxing / MMA fight sequence. Dodges, punches, sweat flying, dramatic slow motion. Preserve exact identity.',
  actions: ['the subject throws a jab, sweat flying','the subject dodges, head moving sharply'],
  cameras: ['handheld following the fight','slow motion impact'],
  lights: ['ring spotlight','dramatic gym light'] },

{ id: 'samurai', num: 44, cat: '🥋 Arts Martiaux', name: 'Samouraï / Katana', emoji: '⚔️', desc: 'Duel au sabre, pétales',
  basePrompt: 'Animate this image as a samurai duel. Katana drawn, cherry blossom petals drifting, intense tension. Preserve exact identity.',
  actions: ['the samurai draws the katana slowly','the subject performs a slow sword strike'],
  cameras: ['slow push-in on the eyes','arc around the duel'],
  lights: ['warm sunset, cherry blossom petals','cool moonlight bamboo'] },

{ id: 'ninja', num: 45, cat: '🥋 Arts Martiaux', name: 'Ninja Furtif', emoji: '🥷', desc: 'Déplacements silencieux',
  basePrompt: 'Animate this image as a ninja stealth sequence. Silent movements, smoke bombs, shurikens flying. Preserve exact identity.',
  actions: ['the ninja throws a shuriken','the ninja disappears in smoke'],
  cameras: ['slow tracking shot','static frame with sudden movement'],
  lights: ['moonlit rooftop','dark alley with fog'] },

{ id: 'wuxia', num: 49, cat: '🥋 Arts Martiaux', name: 'Wuxia', emoji: '🎋', desc: 'Combats aériens dans les bambous',
  basePrompt: 'Animate this image as a wuxia martial arts scene. Fighters move weightlessly through bamboo forests, robes flowing, poetic combat.',
  actions: ['the fighter leaps between bamboo stalks'],
  cameras: ['slow crane shot','static frame with graceful movement'],
  lights: ['soft misty light','green bamboo glow'] },

{ id: 'street-fight', num: 50, cat: '🥋 Arts Martiaux', name: 'Street Fight', emoji: '👊', desc: 'Combat de rue brut',
  basePrompt: 'Animate this image as a gritty street fight. Raw, documentary-style, handheld camera, realistic movement. Preserve exact identity.',
  actions: ['the subject throws a punch','the subject blocks with an arm'],
  cameras: ['handheld, urgent','close-up following the action'],
  lights: ['harsh street light','night with neon glow'] },

{ id: 'superhero', num: 91, cat: '🥋 Arts Martiaux', name: 'Super-Héros', emoji: '🦸', desc: 'Super-pouvoirs, cape, énergie',
  basePrompt: 'Animate this image as a superhero sequence. Cape flowing, energy emanating, dramatic pose. Preserve exact identity.',
  actions: ['the cape flows dramatically in the wind','energy crackles around the subject'],
  cameras: ['low angle looking up heroically','slow push-in'],
  lights: ['dramatic hero light','epic cinematic'] },

{ id: 'matrix', num: 48, cat: '🥋 Arts Martiaux', name: 'Bullet Time (Matrix)', emoji: '🕶️', desc: 'Ralenti total',
  basePrompt: 'Animate this image as a Matrix bullet-time sequence. Extreme slow motion, camera rotating around the subject mid-action.',
  actions: ['the subject dodges invisible bullets'],
  cameras: ['360° rotation around the subject in slow motion'],
  lights: ['green digital glow','cool dramatic'] },

{ id: 'sword-fight', num: 44, cat: '🥋 Arts Martiaux', name: 'Duel à l\'Épée', emoji: '🗡️', desc: 'Combat à l\'épée, étincelles',
  basePrompt: 'Animate this image as a sword duel. Blades clash, sparks fly, intense tension. Preserve exact identity.',
  actions: ['blades clash, sparks flying'],
  cameras: ['fast following shot','slow motion clash'],
  lights: ['dramatic firelight','moonlight steel'] },

// ═══════════════════════════════════════════════════════════════
// 💃 DANSE
// ═══════════════════════════════════════════════════════════════
{ id: 'hiphop', num: 51, cat: '💃 Danse', name: 'Hip-Hop / Breakdance', emoji: '💃', desc: 'Danse urbaine, freeze',
  basePrompt: 'Animate this image as a hip-hop dance battle. Powerful urban moves, body waves, freezes, dynamic energy. Preserve exact identity.',
  actions: ['the subject performs a body wave, arms flowing','the subject hits a freeze on one hand','the subject jumps into a spin, clothes fluttering'],
  cameras: ['low angle circling the dancer','handheld following'],
  lights: ['neon reflections on wet ground','club lighting with strobes'] },

{ id: 'ballet', num: 52, cat: '💃 Danse', name: 'Ballet Classique', emoji: '🩰', desc: 'Grâce, pirouettes',
  basePrompt: 'Animate this image as a classical ballet performance. Graceful pirouettes, arabesques, soft stage light. Preserve exact identity.',
  actions: ['the dancer performs a pirouette','the dancer extends into an arabesque'],
  cameras: ['slow arc around the dancer','static frame with graceful motion'],
  lights: ['soft stage spotlight','warm golden glow'] },

{ id: 'contemporary', num: 53, cat: '💃 Danse', name: 'Danse Contemporaine', emoji: '🌊', desc: 'Mouvements fluides',
  basePrompt: 'Animate this image as contemporary dance. Fluid movements, emotional expression, fabric flowing. Preserve exact identity.',
  actions: ['the dancer moves fluidly, fabric flowing'],
  cameras: ['slow dolly-in','arc shot'],
  lights: ['soft diffuse light','dramatic side light'] },

{ id: 'kpop', num: 54, cat: '💃 Danse', name: 'K-pop Choreography', emoji: '🎤', desc: 'Synchronisation parfaite',
  basePrompt: 'Animate this image as a K-pop dance performance. Sharp synchronized moves, neon stage lights. Preserve exact identity.',
  actions: ['the subject performs sharp choreography'],
  cameras: ['dynamic rotating shot','low angle'],
  lights: ['neon pink and cyan','stage spotlight'] },

{ id: 'salsa', num: 55, cat: '💃 Danse', name: 'Salsa / Tango', emoji: '💃', desc: 'Passion, proximité',
  basePrompt: 'Animate this image as a passionate salsa or tango dance. Close embrace, hip movements, Latin heat. Preserve exact identity.',
  actions: ['the dancers move in close embrace'],
  cameras: ['slow arc around the dancers'],
  lights: ['warm intimate light','club atmosphere'] },

{ id: 'tap', num: 56, cat: '💃 Danse', name: 'Claquettes', emoji: '👞', desc: 'Rythme, jeu de jambes',
  basePrompt: 'Animate this image as a tap dance performance. Rhythmic footwork, energetic movement. Preserve exact identity.',
  actions: ['the dancer performs fast footwork'],
  cameras: ['close-up on the feet','wide shot of the performance'],
  lights: ['stage spotlight','warm classic'] },

{ id: 'tribal', num: 57, cat: '💃 Danse', name: 'Danse Tribale / Feu', emoji: '🔥', desc: 'Feu, mouvements hypnotiques',
  basePrompt: 'Animate this image as a tribal fire dance. Hypnotic movements, fire twirling, percussion rhythm. Preserve exact identity.',
  actions: ['fire twirls around the dancer'],
  cameras: ['slow arc around the fire'],
  lights: ['orange fire glow','dramatic shadow dance'] },

{ id: 'vogue', num: 58, cat: '💃 Danse', name: 'Vogue / Ballroom', emoji: '💅', desc: 'Pose, attitude, catwalk',
  basePrompt: 'Animate this image as a vogue ballroom performance. Striking poses, attitude, catwalk. Preserve exact identity.',
  actions: ['the subject strikes a dramatic pose','the subject struts forward'],
  cameras: ['static frame with pose','arc shot'],
  lights: ['dramatic spotlight','disco ball reflections'] },

{ id: 'bollywood', num: 59, cat: '💃 Danse', name: 'Danse Bollywood', emoji: '🎬', desc: 'Couleurs, énergie',
  basePrompt: 'Animate this image as a Bollywood dance scene. Vibrant colors, energetic movements, joyful expression. Preserve exact identity.',
  actions: ['the subject dances with expressive arm movements'],
  cameras: ['dynamic rotating shot','wide colorful shot'],
  lights: ['vibrant saturated colors','warm festive light'] },

{ id: 'slow-dance', num: 60, cat: '💃 Danse', name: 'Slow Motion Dance', emoji: '🐢', desc: 'Danse au ralenti',
  basePrompt: 'Animate this image as a slow motion dance. Ethereal, dreamy, floating movements, particles in the air. Preserve exact identity.',
  actions: ['the dancer moves in extreme slow motion'],
  cameras: ['slow push-in'],
  lights: ['soft dreamy glow','warm golden particles'] },

// ═══════════════════════════════════════════════════════════════
// ⚽ SPORT
// ═══════════════════════════════════════════════════════════════
{ id: 'football', num: 116, cat: '⚽ Sport', name: 'Football', emoji: '⚽', desc: 'But, célébration',
  basePrompt: 'Animate this image as a football/soccer highlight. The player strikes the ball, scores, celebrates. Preserve exact identity.',
  actions: ['the player strikes the ball powerfully','the player celebrates with arms raised'],
  cameras: ['tracking shot following the ball','slow motion goal'],
  lights: ['stadium floodlights','dramatic sports light'] },

{ id: 'basketball', num: 117, cat: '⚽ Sport', name: 'Basketball', emoji: '🏀', desc: 'Dunk, suspension',
  basePrompt: 'Animate this image as a basketball highlight. The player dunks, hangs in the air, crowd cheering. Preserve exact identity.',
  actions: ['the player dunks, hanging on the rim'],
  cameras: ['slow motion dunk','low angle'],
  lights: ['arena spotlight','dramatic sports light'] },

{ id: 'tennis', num: 118, cat: '⚽ Sport', name: 'Tennis', emoji: '🎾', desc: 'Échange rapide, smash',
  basePrompt: 'Animate this image as a tennis match highlight. Fast exchanges, powerful smashes, sweat. Preserve exact identity.',
  actions: ['the player serves powerfully','the player performs a smash'],
  cameras: ['slow motion serve','tracking shot'],
  lights: ['daylight court','stadium light'] },

{ id: 'running', num: 119, cat: '⚽ Sport', name: 'Course à Pied', emoji: '🏃', desc: 'Sprint, sueur',
  basePrompt: 'Animate this image as a running race. Sprint, sweat flying, determination, overtaking. Preserve exact identity.',
  actions: ['the runner sprints forward, sweat flying'],
  cameras: ['tracking shot following the runner'],
  lights: ['daylight race','stadium spotlight'] },

{ id: 'swimming', num: 120, cat: '⚽ Sport', name: 'Natation', emoji: '🏊', desc: 'Plongée, mouvements fluides',
  basePrompt: 'Animate this image as a swimming race. Dive, fluid strokes, splashes, underwater movement. Preserve exact identity.',
  actions: ['the swimmer dives into the water','the swimmer strokes powerfully'],
  cameras: ['underwater tracking shot'],
  lights: ['pool water light','underwater blue glow'] },

{ id: 'skateboard', num: 121, cat: '⚽ Sport', name: 'Skateboard', emoji: '🛹', desc: 'Figure, grind',
  basePrompt: 'Animate this image as a skateboard trick. Jump, grind, spin, urban style. Preserve exact identity.',
  actions: ['the skater performs a kickflip','the skater grinds a rail'],
  cameras: ['low angle following the trick'],
  lights: ['urban street light','golden hour'] },

{ id: 'surf', num: 122, cat: '⚽ Sport', name: 'Surf', emoji: '🏄', desc: 'Vague, tube, spray',
  basePrompt: 'Animate this image as a surf session. Riding a wave, spray, tube, ocean power. Preserve exact identity.',
  actions: ['the surfer carves through a wave'],
  cameras: ['tracking shot from the water'],
  lights: ['golden hour ocean light','sunny beach'] },

{ id: 'climbing', num: 123, cat: '⚽ Sport', name: 'Escalade', emoji: '🧗', desc: 'Ascension, effort',
  basePrompt: 'Animate this image as a climbing sequence. Reaching, effort, the summit in sight. Preserve exact identity.',
  actions: ['the climber reaches for a hold'],
  cameras: ['wide mountain shot','close-up on the hands'],
  lights: ['mountain daylight','golden summit light'] },

{ id: 'gymnastics', num: 124, cat: '⚽ Sport', name: 'Gymnastique', emoji: '🤸', desc: 'Sauts, rotations',
  basePrompt: 'Animate this image as a gymnastics performance. Aerial jumps, rotations, grace. Preserve exact identity.',
  actions: ['the gymnast performs an aerial rotation'],
  cameras: ['slow motion jump','wide arena shot'],
  lights: ['arena spotlight','dramatic beam'] },

{ id: 'cycling', num: 126, cat: '⚽ Sport', name: 'Cyclisme', emoji: '🚴', desc: 'Descente, vitesse',
  basePrompt: 'Animate this image as a cycling race. Descent, speed, landscape rushing past. Preserve exact identity.',
  actions: ['the cyclist speeds down a descent'],
  cameras: ['tracking shot alongside'],
  lights: ['mountain daylight','golden hour'] },

{ id: 'ski', num: 127, cat: '⚽ Sport', name: 'Ski / Snowboard', emoji: '🎿', desc: 'Poudreuse, saut',
  basePrompt: 'Animate this image as a ski or snowboard run. Powder snow spraying, jumps, mountain scenery. Preserve exact identity.',
  actions: ['the skier carves through powder'],
  cameras: ['tracking shot following the skier'],
  lights: ['bright mountain sun','blue sky day'] },

{ id: 'f1', num: 128, cat: '⚽ Sport', name: 'Formule 1', emoji: '🏎️', desc: 'Vitesse, dépassement',
  basePrompt: 'Animate this image as a Formula 1 race. Speed, overtaking, pit stop, dramatic tension. Preserve exact identity.',
  actions: ['the F1 car speeds past, blurring the background'],
  cameras: ['tracking shot along the track'],
  lights: ['night race lights','daylight dramatic'] },

{ id: 'parkour', num: 129, cat: '⚽ Sport', name: 'Parkour', emoji: '🏃‍♂️', desc: 'Sauts urbains',
  basePrompt: 'Animate this image as a parkour run. Fluid urban jumps, vaults, rooftop running. Preserve exact identity.',
  actions: ['the traceur vaults over an obstacle'],
  cameras: ['dynamic tracking shot'],
  lights: ['urban street light','golden hour'] },

{ id: 'yoga', num: 130, cat: '⚽ Sport', name: 'Yoga', emoji: '🧘', desc: 'Postures, sérénité',
  basePrompt: 'Animate this image as a yoga practice. Slow poses, breathing, serene atmosphere. Preserve exact identity.',
  actions: ['the yogi flows through a posture'],
  cameras: ['slow push-in','static frame'],
  lights: ['soft morning light','warm studio light'] },

{ id: 'gym', num: 191, cat: '⚽ Sport', name: 'Musculation', emoji: '💪', desc: 'Effort, sueur, muscles',
  basePrompt: 'Animate this image as a gym workout. Lifting, effort, sweat, muscle definition. Preserve exact identity.',
  actions: ['the subject lifts a weight slowly'],
  cameras: ['close-up on the muscles','wide gym shot'],
  lights: ['dramatic gym lighting','moody workout light'] },

// ═══════════════════════════════════════════════════════════════
// 🚗 VÉHICULES
// ═══════════════════════════════════════════════════════════════
{ id: 'sports-car', num: 131, cat: '🚗 Véhicules', name: 'Voiture de Sport', emoji: '🏎️', desc: 'Drift, accélération',
  basePrompt: 'Animate this image as a sports car commercial. Drift, acceleration, reflections on the bodywork. Preserve exact car identity.',
  actions: ['the car drifts around a corner'],
  cameras: ['tracking shot alongside the car'],
  lights: ['golden hour road','night with neon reflections'] },

{ id: 'motorcycle', num: 132, cat: '🚗 Véhicules', name: 'Moto', emoji: '🏍️', desc: 'Roue arrière, virage',
  basePrompt: 'Animate this image as a motorcycle sequence. Wheelies, corners, speed. Preserve exact identity.',
  actions: ['the rider performs a wheelie'],
  cameras: ['tracking shot alongside'],
  lights: ['sunset highway','night with headlights'] },

{ id: 'plane', num: 133, cat: '🚗 Véhicules', name: 'Avion', emoji: '✈️', desc: 'Décollage, nuages',
  basePrompt: 'Animate this image as an airplane sequence. Takeoff, clouds, cockpit view. Preserve exact scene.',
  actions: ['the plane takes off, clouds swirling'],
  cameras: ['aerial view','cockpit perspective'],
  lights: ['golden clouds','blue sky'] },

{ id: 'helicopter', num: 134, cat: '🚗 Véhicules', name: 'Hélicoptère', emoji: '🚁', desc: 'Survol, rotation',
  basePrompt: 'Animate this image as a helicopter sequence. Hovering, rotors spinning, aerial view. Preserve exact scene.',
  actions: ['the helicopter hovers, rotor blades spinning'],
  cameras: ['aerial tracking shot'],
  lights: ['daylight aerial','sunset glow'] },

{ id: 'boat', num: 135, cat: '🚗 Véhicules', name: 'Bateau', emoji: '⛵', desc: 'Vagues, vitesse',
  basePrompt: 'Animate this image as a boat sequence. Waves, speed, salt spray. Preserve exact scene.',
  actions: ['the boat cuts through waves, spray flying'],
  cameras: ['tracking shot alongside'],
  lights: ['sunny ocean','golden sunset'] },

{ id: 'train', num: 136, cat: '🚗 Véhicules', name: 'Train', emoji: '🚂', desc: 'Passage, paysage',
  basePrompt: 'Animate this image as a train sequence. Passing scenery, motion, travel. Preserve exact scene.',
  actions: ['the train moves through the landscape'],
  cameras: ['tracking shot alongside'],
  lights: ['golden hour fields','mountain daylight'] },

{ id: 'bike', num: 137, cat: '🚗 Véhicules', name: 'Vélo', emoji: '🚲', desc: 'Balade, roue',
  basePrompt: 'Animate this image as a bike ride. Wheels spinning, road rushing past, freedom. Preserve exact scene.',
  actions: ['the bike rolls forward, wheels spinning'],
  cameras: ['tracking shot'],
  lights: ['golden hour path','sunny day'] },

{ id: 'tractor', num: 138, cat: '🚗 Véhicules', name: 'Tracteur', emoji: '🚜', desc: 'Champ, labour',
  basePrompt: 'Animate this image as a farm sequence. Tractor working, field, seasons changing. Preserve exact scene.',
  actions: ['the tractor plows through the field'],
  cameras: ['aerial shot'],
  lights: ['golden farm light','morning dew'] },

{ id: 'mecha', num: 139, cat: '🚗 Véhicules', name: 'Robot / Mecha', emoji: '🤖', desc: 'Marche, transformation',
  basePrompt: 'Animate this image as a mecha robot sequence. Walking, transforming, engaging in combat. Preserve exact robot design.',
  actions: ['the mecha walks forward, joints moving'],
  cameras: ['low angle looking up at the mecha'],
  lights: ['sci-fi blue glow','dramatic city light'] },

{ id: 'spaceship', num: 140, cat: '🚗 Véhicules', name: 'Vaisseau Spatial', emoji: '🚀', desc: 'Décollage, hyperespace',
  basePrompt: 'Animate this image as a spaceship sequence. Takeoff, hyperdrive, planetary approach. Preserve exact ship design.',
  actions: ['the ship jumps to hyperspace'],
  cameras: ['wide space shot'],
  lights: ['star field glow','planetary light'] },

{ id: 'submarine', num: 260, cat: '🚗 Véhicules', name: 'Sous-Marin', emoji: '🚢', desc: 'Profondeur, bulles',
  basePrompt: 'Animate this image as an underwater submarine sequence. Depth, bubbles, sea life. Preserve exact scene.',
  actions: ['the submarine descends, bubbles rising'],
  cameras: ['underwater tracking shot'],
  lights: ['deep blue underwater','bioluminescent glow'] },

{ id: 'hoverboard', num: 290, cat: '🚗 Véhicules', name: 'Hoverboard', emoji: '🛹', desc: 'Flottement, futurisme',
  basePrompt: 'Animate this image as a hoverboard sequence. Floating above ground, futuristic tech. Preserve exact subject.',
  actions: ['the hoverboard floats forward smoothly'],
  cameras: ['tracking shot'],
  lights: ['futuristic neon','sunset glow'] },

{ id: 'snowmobile', num: 270, cat: '🚗 Véhicules', name: 'Motoneige', emoji: '🏔️', desc: 'Neige, vitesse',
  basePrompt: 'Animate this image as a snowmobile sequence. Speed through snow, powder flying. Preserve exact scene.',
  actions: ['the snowmobile carves through powder'],
  cameras: ['tracking shot'],
  lights: ['bright mountain sun','blue sky'] },

{ id: 'kart', num: 271, cat: '🚗 Véhicules', name: 'Karting', emoji: '🏁', desc: 'Course, virages',
  basePrompt: 'Animate this image as a go-kart race. Corners, speed, adrenaline. Preserve exact scene.',
  actions: ['the kart takes a sharp corner'],
  cameras: ['tracking shot close to the ground'],
  lights: ['indoor track light','outdoor daylight'] },

// ═══════════════════════════════════════════════════════════════
// 🎭 ÉMOTIONS
// ═══════════════════════════════════════════════════════════════
{ id: 'joy', num: 141, cat: '🎭 Émotions', name: 'Joie', emoji: '😊', desc: 'Sourire, rire',
  basePrompt: 'Animate this portrait to express pure joy. Bright genuine smile, sparkling eyes, warm atmosphere. Preserve exact identity.',
  actions: ['the subject smiles brightly, eyes crinkling with joy'],
  cameras: ['slow push-in on the face'],
  lights: ['warm bright daylight','soft golden glow'] },

{ id: 'sadness', num: 142, cat: '🎭 Émotions', name: 'Tristesse', emoji: '😢', desc: 'Larme, regard baissé',
  basePrompt: 'Animate this portrait to express deep sadness. A tear rolling, eyes looking down, melancholic atmosphere. Preserve exact identity.',
  actions: ['a single tear rolls down the cheek in slow motion'],
  cameras: ['slow push-in on the eyes'],
  lights: ['cool blue light','soft melancholic shadow'] },

{ id: 'anger', num: 143, cat: '🎭 Émotions', name: 'Colère', emoji: '😠', desc: 'Regard intense, poings serrés',
  basePrompt: 'Animate this portrait to express intense anger. Fierce gaze, fists clenched, veins pulsing, red tones. Preserve exact identity.',
  actions: ['the subject clenches their jaw, eyes narrowing'],
  cameras: ['slow push-in, intense'],
  lights: ['red dramatic light','harsh contrast'] },

{ id: 'fear', num: 144, cat: '🎭 Émotions', name: 'Peur', emoji: '😨', desc: 'Tremblement, recul',
  basePrompt: 'Animate this portrait to express fear. Trembling, backing away, shadows creeping in. Preserve exact identity.',
  actions: ['the subject trembles slightly, eyes wide'],
  cameras: ['handheld with tremor'],
  lights: ['dark shadows','cold blue light'] },

{ id: 'surprise', num: 145, cat: '🎭 Émotions', name: 'Surprise', emoji: '😲', desc: 'Sursaut, yeux écarquillés',
  basePrompt: 'Animate this portrait to express surprise. Eyes wide, mouth open, sudden realization. Preserve exact identity.',
  actions: ['the subject gasps, eyes widening'],
  cameras: ['quick push-in'],
  lights: ['bright flash effect','warm surprise glow'] },

{ id: 'love', num: 146, cat: '🎭 Émotions', name: 'Amour', emoji: '❤️', desc: 'Regard tendre',
  basePrompt: 'Animate this portrait to express love and tenderness. Warm gaze, soft smile, romantic atmosphere. Preserve exact identity.',
  actions: ['the subject gazes tenderly, smile softening'],
  cameras: ['slow push-in'],
  lights: ['warm golden glow','soft romantic light'] },

{ id: 'nostalgia', num: 147, cat: '🎭 Émotions', name: 'Nostalgie', emoji: '📷', desc: 'Souvenir, flou, sépia',
  basePrompt: 'Animate this image with a nostalgic feel. Faded colors, sepia tones, dreamy flashback quality. Preserve exact identity.',
  actions: ['the image fades softly, memory-like'],
  cameras: ['slow push-in'],
  lights: ['warm sepia','soft faded light'] },

{ id: 'determination', num: 148, cat: '🎭 Émotions', name: 'Détermination', emoji: '🔥', desc: 'Regard fixe, mâchoire serrée',
  basePrompt: 'Animate this portrait to express fierce determination. Steady gaze, clenched jaw, rising music feel. Preserve exact identity.',
  actions: ['the subject holds a steady intense gaze'],
  cameras: ['slow push-in, powerful'],
  lights: ['dramatic side light','warm heroic glow'] },

{ id: 'madness', num: 149, cat: '🎭 Émotions', name: 'Folie', emoji: '🌀', desc: 'Rire nerveux',
  basePrompt: 'Animate this portrait with a hint of madness. Nervous laughter, unstable gaze, slight distortion. Preserve exact identity.',
  actions: ['the subject laughs nervously, eyes darting'],
  cameras: ['static with subtle distortion'],
  lights: ['harsh flickering light','eerie green glow'] },

{ id: 'serenity', num: 150, cat: '🎭 Émotions', name: 'Sérénité', emoji: '🧘', desc: 'Respiration lente, paix',
  basePrompt: 'Animate this portrait to express deep serenity. Slow breathing, peaceful expression, calm atmosphere. Preserve exact identity.',
  actions: ['the subject breathes slowly, eyes closed in peace'],
  cameras: ['slow push-in'],
  lights: ['soft morning light','warm gentle glow'] },

{ id: 'pride', num: 290, cat: '🎭 Émotions', name: 'Fierté', emoji: '🏆', desc: 'Pose confiante',
  basePrompt: 'Animate this portrait to express pride. Confident pose, chin lifted, self-assured presence. Preserve exact identity.',
  actions: ['the subject lifts their chin proudly'],
  cameras: ['low angle looking up'],
  lights: ['warm heroic light','dramatic rim light'] },

{ id: 'shyness', num: 291, cat: '🎭 Émotions', name: 'Timidité', emoji: '🙈', desc: 'Regard baissé',
  basePrompt: 'Animate this portrait to express shyness. Looking down, blushing slightly, timid body language. Preserve exact identity.',
  actions: ['the subject looks down shyly, blushing'],
  cameras: ['soft push-in'],
  lights: ['soft warm light','gentle diffused glow'] },

{ id: 'excitement', num: 292, cat: '🎭 Émotions', name: 'Excitation', emoji: '🎉', desc: 'Énergie, mouvement',
  basePrompt: 'Animate this portrait to express excitement. Energetic movement, wide smile, dynamic atmosphere. Preserve exact identity.',
  actions: ['the subject bounces excitedly'],
  cameras: ['dynamic handheld'],
  lights: ['bright colorful light'] },

{ id: 'calm', num: 293, cat: '🎭 Émotions', name: 'Calme', emoji: '🌊', desc: 'Respiration posée',
  basePrompt: 'Animate this portrait with a calm, composed feel. Slow breathing, steady gaze, peaceful. Preserve exact identity.',
  actions: ['the subject breathes slowly, relaxed'],
  cameras: ['slow push-in'],
  lights: ['soft neutral light'] },

{ id: 'mystery', num: 294, cat: '🎭 Émotions', name: 'Mystère', emoji: '🌑', desc: 'Regard énigmatique',
  basePrompt: 'Animate this portrait with a mysterious feel. Enigmatic gaze, hidden emotion, shadows. Preserve exact identity.',
  actions: ['the subject holds a mysterious half-smile'],
  cameras: ['slow push-in'],
  lights: ['dramatic shadow','cool moonlight'] },

// ═══════════════════════════════════════════════════════════════
// 👤 PORTRAIT
// ═══════════════════════════════════════════════════════════════
{ id: 'portrait-living', num: 8, cat: '👤 Portrait', name: 'Portrait Vivant', emoji: '👤', desc: 'Yeux, respiration',
  basePrompt: 'Animate this portrait to bring it to life. The subject breathes, blinks, and moves subtly. Preserve exact identity and expression.',
  actions: ['the subject blinks slowly','the subject breathes, chest rising'],
  cameras: ['static close-up'],
  lights: ['soft portrait light','Rembrandt light'] },

{ id: 'smile', num: 295, cat: '👤 Portrait', name: 'Sourire Progressif', emoji: '🙂', desc: 'Sourire qui s\'installe',
  basePrompt: 'Animate this portrait with a gradual smile. The subject\'s expression softens into a warm smile. Preserve exact identity.',
  actions: ['the subject\'s expression softens into a smile'],
  cameras: ['slow push-in on the face'],
  lights: ['warm soft light'] },

{ id: 'eye-contact', num: 296, cat: '👤 Portrait', name: 'Regard Caméra', emoji: '👁️', desc: 'Contact visuel intense',
  basePrompt: 'Animate this portrait with intense eye contact. The subject looks directly into the camera, unblinking. Preserve exact identity.',
  actions: ['the subject locks eyes with the camera'],
  cameras: ['slow push-in'],
  lights: ['dramatic side light'] },

{ id: 'head-turn', num: 297, cat: '👤 Portrait', name: 'Rotation de Tête', emoji: '🔄', desc: 'Regard qui se tourne',
  basePrompt: 'Animate this portrait with a slow head turn. The subject turns to look at something off-camera. Preserve exact identity.',
  actions: ['the subject turns their head slowly'],
  cameras: ['static frame'],
  lights: ['soft window light'] },

{ id: 'hair-wind', num: 298, cat: '👤 Portrait', name: 'Cheveux au Vent', emoji: '💨', desc: 'Cheveux qui bougent',
  basePrompt: 'Animate this portrait with hair moving in a gentle breeze. Preserve exact identity.',
  actions: ['a gentle breeze moves the hair'],
  cameras: ['static frame'],
  lights: ['golden hour backlight'] },

{ id: 'slow-blink', num: 299, cat: '👤 Portrait', name: 'Clignement Lent', emoji: '😌', desc: 'Paupières qui se ferment',
  basePrompt: 'Animate this portrait with a slow, peaceful blink. Preserve exact identity.',
  actions: ['the subject closes their eyes slowly'],
  cameras: ['static close-up'],
  lights: ['soft ambient light'] },

{ id: 'breath', num: 300, cat: '👤 Portrait', name: 'Respiration', emoji: '🌬️', desc: 'Poitrine qui monte',
  basePrompt: 'Animate this portrait with visible breathing. Chest rising and falling gently. Preserve exact identity.',
  actions: ['the subject breathes slowly, chest moving'],
  cameras: ['static frame'],
  lights: ['soft light'] },

{ id: 'profile-turn', num: 301, cat: '👤 Portrait', name: 'Profil Reveal', emoji: '👤', desc: 'Passage face à profil',
  basePrompt: 'Animate this portrait with a slow turn from face to profile. Elegant and cinematic. Preserve exact identity.',
  actions: ['the subject turns to show their profile'],
  cameras: ['slow push-in'],
  lights: ['dramatic side light'] },

{ id: 'photoshoot', num: 302, cat: '👤 Portrait', name: 'Shooting Photo', emoji: '📸', desc: 'Poses enchaînées',
  basePrompt: 'Animate this portrait as a professional photoshoot. Multiple poses, camera flashes. Preserve exact identity.',
  actions: ['the subject shifts between poses'],
  cameras: ['static frame with flashes'],
  lights: ['studio flashes','dramatic lighting'] },

{ id: 'black-veil', num: 303, cat: '👤 Portrait', name: 'Voile Noir', emoji: '🖤', desc: 'Voile qui se lève',
  basePrompt: 'Animate this portrait with a black veil slowly lifting. Dramatic and mysterious. Preserve exact identity.',
  actions: ['a black veil lifts slowly'],
  cameras: ['slow push-in'],
  lights: ['dramatic backlight'] },

{ id: 'old-age', num: 304, cat: '👤 Portrait', name: 'Vieillissement', emoji: '⏳', desc: 'Le temps qui passe',
  basePrompt: 'Animate this portrait with a subtle aging effect. The subject ages slowly in front of the camera. Preserve exact identity.',
  actions: ['wrinkles appear slowly on the face'],
  cameras: ['static close-up'],
  lights: ['dramatic light'] },

{ id: 'younger', num: 305, cat: '👤 Portrait', name: 'Rajeunissement', emoji: '✨', desc: 'Le temps qui recule',
  basePrompt: 'Animate this portrait with a subtle rejuvenation effect. The subject becomes younger in front of the camera. Preserve exact identity.',
  actions: ['the subject becomes younger'],
  cameras: ['static close-up'],
  lights: ['soft light'] },

{ id: 'golden-halo', num: 306, cat: '👤 Portrait', name: 'Halo Doré', emoji: '🌟', desc: 'Halo lumineux',
  basePrompt: 'Animate this portrait with a golden halo of light around the subject\'s head. Ethereal. Preserve exact identity.',
  actions: ['a golden halo glows softly'],
  cameras: ['static frame'],
  lights: ['warm backlight','golden hour'] },

{ id: 'wind-hair', num: 307, cat: '👤 Portrait', name: 'Vent Fort', emoji: '🌪️', desc: 'Cheveux au vent fort',
  basePrompt: 'Animate this portrait with strong wind. Hair flying, clothes fluttering. Preserve exact identity.',
  actions: ['strong wind blows the hair'],
  cameras: ['static frame'],
  lights: ['dramatic storm light'] },

{ id: 'cinematic-portrait', num: 308, cat: '👤 Portrait', name: 'Portrait Cinématique', emoji: '🎬', desc: 'Rendu cinéma',
  basePrompt: 'Animate this portrait with a cinematic feel. Shallow depth of field, dramatic lighting, movie-quality. Preserve exact identity.',
  actions: ['the subject turns slightly, cinematically'],
  cameras: ['slow push-in'],
  lights: ['cinematic lighting','dramatic rim light'] },

// ═══════════════════════════════════════════════════════════════
// 👨‍👩‍👧 FAMILLE
// ═══════════════════════════════════════════════════════════════
{ id: 'old-photo', num: 13, cat: '👨‍👩‍👧 Famille', name: 'Photos Anciennes', emoji: '📷', desc: 'Restauration + animation',
  basePrompt: 'Animate this old family photo. Restore colors softly, bring the subjects gently to life. Preserve exact people identity.',
  actions: ['the subjects breathe gently'],
  cameras: ['slow push-in'],
  lights: ['warm vintage light'] },

{ id: 'family-memory', num: 14, cat: '👨‍👩‍👧 Famille', name: 'Souvenirs Famille', emoji: '💝', desc: 'Diaporama émotionnel',
  basePrompt: 'Animate this family photo with an emotional, nostalgic feel. Warm light, gentle movements. Preserve exact people identity.',
  actions: ['subjects move gently, smiling'],
  cameras: ['slow push-in'],
  lights: ['warm golden hour'] },

{ id: 'wedding', num: 309, cat: '👨‍👩‍👧 Famille', name: 'Mariage', emoji: '💍', desc: 'Romantique, élégant',
  basePrompt: 'Animate this wedding photo with romantic elegance. Soft light, gentle movements, emotional. Preserve exact people identity.',
  actions: ['the couple gazes at each other tenderly'],
  cameras: ['slow push-in'],
  lights: ['warm romantic glow'] },

{ id: 'baby', num: 310, cat: '👨‍👩‍👧 Famille', name: 'Bébé', emoji: '👶', desc: 'Doux, tendre',
  basePrompt: 'Animate this baby photo with tenderness. Soft light, gentle movements. Preserve exact baby identity.',
  actions: ['the baby moves gently, eyes blinking'],
  cameras: ['slow push-in'],
  lights: ['soft warm light'] },

{ id: 'children', num: 311, cat: '👨‍👩‍👧 Famille', name: 'Enfants', emoji: '🧒', desc: 'Joie, jeux',
  basePrompt: 'Animate this photo of children with playful energy. Joyful movements, laughter. Preserve exact children identity.',
  actions: ['the children laugh and move happily'],
  cameras: ['handheld following'],
  lights: ['bright warm daylight'] },

{ id: 'grandparents', num: 312, cat: '👨‍👩‍👧 Famille', name: 'Grands-Parents', emoji: '👴', desc: 'Tendresse, sagesse',
  basePrompt: 'Animate this photo of grandparents with tenderness. Slow gentle movements, wisdom. Preserve exact people identity.',
  actions: ['the grandparents smile gently'],
  cameras: ['slow push-in'],
  lights: ['warm golden light'] },

{ id: 'friends', num: 313, cat: '👨‍👩‍👧 Famille', name: 'Amis', emoji: '🤝', desc: 'Joie, complicité',
  basePrompt: 'Animate this photo of friends with joyful energy. Laughter, complicity. Preserve exact people identity.',
  actions: ['the friends laugh together'],
  cameras: ['handheld'],
  lights: ['warm natural light'] },

{ id: 'celebration', num: 314, cat: '👨‍👩‍👧 Famille', name: 'Célébration', emoji: '🎂', desc: 'Fête, bougies',
  basePrompt: 'Animate this celebration photo. Candles flickering, joy, party atmosphere. Preserve exact people identity.',
  actions: ['candles flicker, people cheer'],
  cameras: ['dynamic handheld'],
  lights: ['warm candlelight'] },

{ id: 'pregnancy', num: 315, cat: '👨‍👩‍👧 Famille', name: 'Grossesse', emoji: '🤰', desc: 'Tendresse, attente',
  basePrompt: 'Animate this pregnancy photo with tenderness. Soft light, gentle movements. Preserve exact identity.',
  actions: ['the mother gently touches her belly'],
  cameras: ['slow push-in'],
  lights: ['soft warm glow'] },

{ id: 'birthday', num: 316, cat: '👨‍👩‍👧 Famille', name: 'Anniversaire', emoji: '🎉', desc: 'Fête, joie',
  basePrompt: 'Animate this birthday photo with celebration energy. Candles, joy, movement. Preserve exact people identity.',
  actions: ['candles flicker, subject blows them out'],
  cameras: ['static frame'],
  lights: ['warm candle glow'] },

// ═══════════════════════════════════════════════════════════════
// 🎮 GAMING
// ═══════════════════════════════════════════════════════════════
{ id: 'lets-play', num: 151, cat: '🎮 Gaming', name: 'Let\'s Play', emoji: '🎮', desc: 'Avatar qui réagit',
  basePrompt: 'Animate this gaming setup photo as a Let\'s Play video. Avatar reacting, webcam feel. Preserve exact identity.',
  actions: ['the streamer reacts to the game'],
  cameras: ['webcam perspective'],
  lights: ['RGB gaming light'] },

{ id: 'game-cinematic', num: 152, cat: '🎮 Gaming', name: 'Cinématique de Jeu', emoji: '🎬', desc: 'Intro épique',
  basePrompt: 'Animate this image as an epic AAA game cinematic. Dramatic, epic, movie-quality. Preserve exact identity.',
  actions: ['the hero stands, cape flowing'],
  cameras: ['slow crane reveal'],
  lights: ['epic cinematic light'] },

{ id: 'rpg-character', num: 153, cat: '🎮 Gaming', name: 'Personnage RPG', emoji: '🗡️', desc: 'Portrait RPG',
  basePrompt: 'Animate this RPG character portrait. Character breathes, UI elements appear. Preserve exact character identity.',
  actions: ['the character breathes, eyes glowing'],
  cameras: ['static frame with UI'],
  lights: ['fantasy torch light'] },

{ id: 'game-card', num: 154, cat: '🎮 Gaming', name: 'Carte de Jeu', emoji: '🃏', desc: 'Carte qui s\'anime',
  basePrompt: 'Animate this game card. Card glows, units appear, magic effects. Preserve exact card design.',
  actions: ['the card glows and animates'],
  cameras: ['static frame'],
  lights: ['magical glow'] },

{ id: 'streaming', num: 155, cat: '🎮 Gaming', name: 'Streaming Overlay', emoji: '📺', desc: 'Fond animé, alertes',
  basePrompt: 'Animate this image as a streaming overlay. Animated background, alerts, camera frame. Preserve exact identity.',
  actions: ['alerts pop up, background animates'],
  cameras: ['static frame'],
  lights: ['RGB streaming light'] },

{ id: 'vtuber', num: 156, cat: '🎮 Gaming', name: 'Avatar VTuber', emoji: '🎭', desc: 'Personnage qui parle',
  basePrompt: 'Animate this VTuber avatar. Character moves, talks, blinks. Preserve exact character identity.',
  actions: ['the avatar talks, expressions changing'],
  cameras: ['static frame'],
  lights: ['soft softbox'] },

{ id: 'voxel', num: 157, cat: '🎮 Gaming', name: 'Monde Voxel', emoji: '🟩', desc: 'Style Minecraft',
  basePrompt: 'Transform this image into a voxel/Minecraft style. Blocky world, pixel textures. Preserve same subject and composition.',
  actions: ['blocks shift subtly'],
  cameras: ['static frame'],
  lights: ['blocky sun light'] },

{ id: 'lowpoly', num: 158, cat: '🎮 Gaming', name: 'Low Poly', emoji: '🔺', desc: 'Style minimaliste',
  basePrompt: 'Transform this image into low-poly 3D style. Geometric shapes, minimalist. Preserve same subject and composition.',
  actions: ['polygons shift subtly'],
  cameras: ['static frame'],
  lights: ['flat poly light'] },

{ id: 'ar', num: 159, cat: '🎮 Gaming', name: 'Réalité Augmentée', emoji: '📱', desc: 'Objet 3D dans photo',
  basePrompt: 'Animate this image as AR content. A 3D object appears in the real scene. Preserve exact environment.',
  actions: ['a 3D object appears and rotates'],
  cameras: ['handheld AR view'],
  lights: ['matching real-world light'] },

{ id: 'vr', num: 160, cat: '🎮 Gaming', name: 'Réalité Virtuelle', emoji: '🥽', desc: 'Vue immersive 360°',
  basePrompt: 'Animate this image as a VR experience. Immersive 360° view, first-person. Preserve exact scene.',
  actions: ['the view rotates slowly'],
  cameras: ['360° immersive'],
  lights: ['VR ambient light'] },

{ id: 'boss-fight', num: 317, cat: '🎮 Gaming', name: 'Combat de Boss', emoji: '👹', desc: 'Épique, intense',
  basePrompt: 'Animate this image as an epic boss fight. Dramatic, intense, larger than life. Preserve exact character identity.',
  actions: ['the boss towers menacingly'],
  cameras: ['low angle looking up'],
  lights: ['dramatic fire glow'] },

{ id: 'level-up', num: 318, cat: '🎮 Gaming', name: 'Level Up', emoji: '⬆️', desc: 'Montée en puissance',
  basePrompt: 'Animate this image as a level-up moment. Glowing effects, power surge, achievement. Preserve exact character identity.',
  actions: ['the character glows and powers up'],
  cameras: ['static frame'],
  lights: ['golden level-up glow'] },

{ id: 'esports', num: 319, cat: '🎮 Gaming', name: 'E-sport', emoji: '🏆', desc: 'Compétition, écran',
  basePrompt: 'Animate this image as an esports competition. Arena, crowd, screens, tension. Preserve exact scene.',
  actions: ['the crowd cheers, screens flash'],
  cameras: ['wide arena shot'],
  lights: ['stage lights, LED screen glow'] },

{ id: 'speedrun', num: 320, cat: '🎮 Gaming', name: 'Speedrun', emoji: '⏱️', desc: 'Rapide, précis',
  basePrompt: 'Animate this image as a speedrun. Fast action, timer counting, precision. Preserve exact scene.',
  actions: ['the character moves fast, timer counting'],
  cameras: ['dynamic following'],
  lights: ['bright game light'] },

{ id: 'retro-game', num: 321, cat: '🎮 Gaming', name: 'Jeu Rétro', emoji: '🕹️', desc: 'Arcade, pixels',
  basePrompt: 'Animate this image as a retro arcade game. Pixel style, arcade cabinet glow. Preserve same subject and composition.',
  actions: ['pixel characters move'],
  cameras: ['static arcade frame'],
  lights: ['arcade neon glow'] },

// ═══════════════════════════════════════════════════════════════
// 🎵 MUSIQUE
// ═══════════════════════════════════════════════════════════════
{ id: 'rap-clip', num: 161, cat: '🎵 Musique', name: 'Clip Rap', emoji: '🎤', desc: 'Urbain, chaînes, néons',
  basePrompt: 'Animate this image as a rap music video. Urban style, chains, neon lights. Preserve exact artist identity.',
  actions: ['the artist moves with attitude'],
  cameras: ['low angle, dynamic'],
  lights: ['neon pink and blue','urban night'] },

{ id: 'pop-clip', num: 162, cat: '🎵 Musique', name: 'Clip Pop', emoji: '🎶', desc: 'Couleurs vives, confettis',
  basePrompt: 'Animate this image as a pop music video. Bright colors, dance, confetti. Preserve exact artist identity.',
  actions: ['the artist dances, confetti falling'],
  cameras: ['dynamic rotating'],
  lights: ['bright colorful','pink and yellow'] },

{ id: 'rock-clip', num: 163, cat: '🎵 Musique', name: 'Clip Rock', emoji: '🎸', desc: 'Guitare, fumée',
  basePrompt: 'Animate this image as a rock music video. Guitar, smoke, stage. Preserve exact artist identity.',
  actions: ['the guitarist plays, smoke swirling'],
  cameras: ['dynamic following'],
  lights: ['red stage light','dramatic smoke'] },

{ id: 'electro-clip', num: 164, cat: '🎵 Musique', name: 'Clip Électro', emoji: '🎧', desc: 'Néons, lasers',
  basePrompt: 'Animate this image as an electro music video. Neons, lasers, crowd. Preserve exact artist identity.',
  actions: ['lasers sweep, crowd moves'],
  cameras: ['wide club shot'],
  lights: ['neon, laser, strobe'] },

{ id: 'jazz-clip', num: 165, cat: '🎵 Musique', name: 'Clip Jazz', emoji: '🎷', desc: 'Club sombre, saxophone',
  basePrompt: 'Animate this image as a jazz music video. Dark club, saxophone, smoke. Preserve exact artist identity.',
  actions: ['the sax player plays slowly'],
  cameras: ['slow push-in'],
  lights: ['warm dim jazz light'] },

{ id: 'classical-clip', num: 166, cat: '🎵 Musique', name: 'Clip Classique', emoji: '🎻', desc: 'Orchestre, lustres',
  basePrompt: 'Animate this image as a classical music video. Orchestra, chandeliers, elegance. Preserve exact musician identity.',
  actions: ['the musician plays gracefully'],
  cameras: ['slow push-in'],
  lights: ['warm chandelier light'] },

{ id: 'reggaeton', num: 167, cat: '🎵 Musique', name: 'Clip Reggaeton', emoji: '🌴', desc: 'Plage, danse',
  basePrompt: 'Animate this image as a reggaeton music video. Beach, dance, warm colors. Preserve exact artist identity.',
  actions: ['the artist dances on the beach'],
  cameras: ['dynamic following'],
  lights: ['golden beach light'] },

{ id: 'country', num: 168, cat: '🎵 Musique', name: 'Clip Country', emoji: '🤠', desc: 'Route, campagne',
  basePrompt: 'Animate this image as a country music video. Road, countryside, sunset. Preserve exact artist identity.',
  actions: ['the singer walks along the road'],
  cameras: ['tracking shot'],
  lights: ['golden sunset'] },

{ id: 'metal', num: 169, cat: '🎵 Musique', name: 'Clip Metal', emoji: '🤘', desc: 'Feu, chaos',
  basePrompt: 'Animate this image as a metal music video. Fire, chaos, contrast. Preserve exact artist identity.',
  actions: ['the band plays intensely, fire in the background'],
  cameras: ['dynamic handheld'],
  lights: ['dramatic fire light'] },

{ id: 'lofi', num: 170, cat: '🎵 Musique', name: 'Clip Lo-Fi', emoji: '📻', desc: 'Ambiance calme, pluie',
  basePrompt: 'Animate this image as a lo-fi music video. Calm anime style, rain, cozy. Preserve exact identity.',
  actions: ['rain falls outside, subject relaxes'],
  cameras: ['static cozy frame'],
  lights: ['warm cozy indoor light'] },

{ id: 'podcast', num: 237, cat: '🎵 Musique', name: 'Podcast Visual', emoji: '🎙️', desc: 'Ondes, citation',
  basePrompt: 'Animate this image as a podcast visual. Sound waves, quote, guest. Preserve exact identity.',
  actions: ['sound waves pulse'],
  cameras: ['static frame'],
  lights: ['warm podcast light'] },

{ id: 'karaoke', num: 30, cat: '🎵 Musique', name: 'Karaoké Paroles', emoji: '🎤', desc: 'Paroles synchronisées',
  basePrompt: 'Animate this image as karaoke. Lyrics appear in sync, singing. Preserve exact identity.',
  actions: ['lyrics highlight in time'],
  cameras: ['static frame'],
  lights: ['stage karaoke light'] },

{ id: 'concert', num: 322, cat: '🎵 Musique', name: 'Concert Live', emoji: '🎼', desc: 'Scène, foule',
  basePrompt: 'Animate this image as a live concert. Stage, crowd, lights. Preserve exact artist identity.',
  actions: ['lights sweep, crowd cheers'],
  cameras: ['wide concert shot'],
  lights: ['stage lights, lasers'] },

{ id: 'dj-set', num: 323, cat: '🎵 Musique', name: 'DJ Set', emoji: '🎛️', desc: 'Platines, foule',
  basePrompt: 'Animate this image as a DJ set. Turntables, crowd, energy. Preserve exact DJ identity.',
  actions: ['the DJ mixes, crowd dancing'],
  cameras: ['wide club shot'],
  lights: ['club strobe, neon'] },

{ id: 'acoustic', num: 324, cat: '🎵 Musique', name: 'Session Acoustique', emoji: '🎸', desc: 'Intimiste, chaleureux',
  basePrompt: 'Animate this image as an acoustic session. Intimate, warm, emotional. Preserve exact musician identity.',
  actions: ['the musician plays softly'],
  cameras: ['slow push-in'],
  lights: ['warm candle light'] },

// ═══════════════════════════════════════════════════════════════
// 📚 ÉDUCATION
// ═══════════════════════════════════════════════════════════════
{ id: 'science', num: 171, cat: '📚 Éducation', name: 'Explication Scientifique', emoji: '🔬', desc: 'Schéma animé',
  basePrompt: 'Animate this image as a science explanation. Schemas animating, particles, clarity. Preserve exact subject.',
  actions: ['schemas animate, particles float'],
  cameras: ['slow push-in'],
  lights: ['clean lab light'] },

{ id: 'history-edu', num: 172, cat: '📚 Éducation', name: 'Histoire', emoji: '📜', desc: 'Reconstitution',
  basePrompt: 'Animate this image as a history reconstruction. Period accurate, dramatic. Preserve exact subject.',
  actions: ['the scene comes to life'],
  cameras: ['slow pan'],
  lights: ['historical light'] },

{ id: 'geography', num: 173, cat: '📚 Éducation', name: 'Géographie', emoji: '🌍', desc: 'Carte qui se déploie',
  basePrompt: 'Animate this image as a geography lesson. Map unfolding, relief appearing. Preserve exact scene.',
  actions: ['the map unfolds, borders appear'],
  cameras: ['aerial view'],
  lights: ['clean map light'] },

{ id: 'math', num: 174, cat: '📚 Éducation', name: 'Mathématiques', emoji: '➗', desc: 'Formes, équations',
  basePrompt: 'Animate this image as a math lesson. Shapes, equations, demonstration. Preserve exact scene.',
  actions: ['equations appear and solve'],
  cameras: ['static frame'],
  lights: ['clean chalkboard light'] },

{ id: 'languages', num: 175, cat: '📚 Éducation', name: 'Langues', emoji: '🗣️', desc: 'Mot illustré',
  basePrompt: 'Animate this image as a language lesson. Words, pronunciation, context. Preserve exact subject.',
  actions: ['words appear and highlight'],
  cameras: ['static frame'],
  lights: ['warm classroom light'] },

{ id: 'cooking', num: 176, cat: '📚 Éducation', name: 'Cuisine', emoji: '👨‍🍳', desc: 'Recette étape par étape',
  basePrompt: 'Animate this image as a cooking tutorial. Recipe steps, hands moving, ingredients. Preserve exact scene.',
  actions: ['hands move through recipe steps'],
  cameras: ['top-down view'],
  lights: ['warm kitchen light'] },

{ id: 'diy', num: 177, cat: '📚 Éducation', name: 'Bricolage', emoji: '🔨', desc: 'Tutoriel visuel',
  basePrompt: 'Animate this image as a DIY tutorial. Hands, tools, step-by-step. Preserve exact scene.',
  actions: ['hands work through steps'],
  cameras: ['close-up on hands'],
  lights: ['bright workshop light'] },

{ id: 'medical', num: 178, cat: '📚 Éducation', name: 'Médical', emoji: '🩺', desc: 'Anatomie, circulation',
  basePrompt: 'Animate this image as a medical illustration. Anatomy, organs, circulation. Preserve exact scene.',
  actions: ['organs pulse, blood flows'],
  cameras: ['slow push-in'],
  lights: ['clean medical light'] },

{ id: 'astronomy', num: 179, cat: '📚 Éducation', name: 'Astronomie', emoji: '🔭', desc: 'Planètes, galaxies',
  basePrompt: 'Animate this image as an astronomy scene. Planets, galaxies, black holes. Preserve exact scene.',
  actions: ['planets rotate, stars twinkle'],
  cameras: ['slow cosmic pan'],
  lights: ['starlight'] },

{ id: 'nature-doc', num: 180, cat: '📚 Éducation', name: 'Nature Documentaire', emoji: '🦁', desc: 'Animal, plante',
  basePrompt: 'Animate this image as a nature documentary. Animals, plants, ecosystem. Preserve exact scene.',
  actions: ['animals move naturally'],
  cameras: ['slow pan'],
  lights: ['natural daylight'] },

{ id: 'chemistry', num: 325, cat: '📚 Éducation', name: 'Chimie', emoji: '⚗️', desc: 'Réactions, molécules',
  basePrompt: 'Animate this image as a chemistry lesson. Reactions, molecules, lab. Preserve exact scene.',
  actions: ['liquid changes color, molecules rotate'],
  cameras: ['slow push-in'],
  lights: ['lab light'] },

{ id: 'physics', num: 326, cat: '📚 Éducation', name: 'Physique', emoji: '⚛️', desc: 'Forces, mouvement',
  basePrompt: 'Animate this image as a physics demonstration. Forces, motion, energy. Preserve exact scene.',
  actions: ['objects move according to physics'],
  cameras: ['static frame'],
  lights: ['clean lab light'] },

{ id: 'coding', num: 327, cat: '📚 Éducation', name: 'Code', emoji: '💻', desc: 'Lignes de code',
  basePrompt: 'Animate this image as a coding tutorial. Code scrolling, terminal output. Preserve exact scene.',
  actions: ['code scrolls and highlights'],
  cameras: ['static frame'],
  lights: ['screen glow'] },

{ id: 'art-lesson', num: 328, cat: '📚 Éducation', name: 'Cours de Dessin', emoji: '🎨', desc: 'Dessin qui se forme',
  basePrompt: 'Animate this image as an art lesson. A drawing forming stroke by stroke. Preserve exact scene.',
  actions: ['the drawing forms stroke by stroke'],
  cameras: ['top-down view'],
  lights: ['warm studio light'] },

{ id: 'music-lesson', num: 329, cat: '📚 Éducation', name: 'Cours de Musique', emoji: '🎼', desc: 'Notes, instrument',
  basePrompt: 'Animate this image as a music lesson. Notes, instrument, learning. Preserve exact scene.',
  actions: ['notes appear and play'],
  cameras: ['static frame'],
  lights: ['warm studio light'] },

// ═══════════════════════════════════════════════════════════════
// 🏢 BUSINESS
// ═══════════════════════════════════════════════════════════════
{ id: 'product-presentation', num: 181, cat: '🏢 Business', name: 'Présentation Produit', emoji: '📊', desc: 'Rotation, zoom',
  basePrompt: 'Animate this product presentation. Rotating product, zoom, key points highlighting. Preserve exact product identity.',
  actions: ['the product rotates, details highlighting'],
  cameras: ['slow push-in'],
  lights: ['clean studio light'] },

{ id: 'corporate-announce', num: 183, cat: '🏢 Business', name: 'Annonce Entreprise', emoji: '📣', desc: 'Logo animé, équipe',
  basePrompt: 'Animate this image as a corporate announcement. Logo animating, team, vision. Preserve exact company identity.',
  actions: ['logo glows, team moves'],
  cameras: ['static frame'],
  lights: ['corporate light'] },

{ id: 'recruitment', num: 184, cat: '🏢 Business', name: 'Recrutement', emoji: '💼', desc: 'Bureau, équipe',
  basePrompt: 'Animate this image as a recruitment video. Office, team, company culture. Preserve exact people identity.',
  actions: ['the team works together, smiling'],
  cameras: ['handheld'],
  lights: ['bright office light'] },

{ id: 'training', num: 185, cat: '🏢 Business', name: 'Formation Interne', emoji: '🎓', desc: 'Slides animées',
  basePrompt: 'Animate this image as a training video. Slides animating, schemas. Preserve exact scene.',
  actions: ['slides change, schemas animate'],
  cameras: ['static frame'],
  lights: ['clean office light'] },

{ id: 'annual-report', num: 186, cat: '🏢 Business', name: 'Rapport Annuel', emoji: '📈', desc: 'Chiffres, graphiques',
  basePrompt: 'Animate this image as an annual report. Numbers, graphs, growth. Preserve exact scene.',
  actions: ['graphs animate showing growth'],
  cameras: ['static frame'],
  lights: ['clean corporate light'] },

{ id: 'realestate', num: 187, cat: '🏢 Business', name: 'Immobilier', emoji: '🏠', desc: 'Visite virtuelle',
  basePrompt: 'Animate this real estate photo. Virtual tour, plans, neighborhood. Preserve exact property identity.',
  actions: ['the camera tours the property'],
  cameras: ['smooth dolly-in'],
  lights: ['bright natural light'] },

{ id: 'restaurant', num: 188, cat: '🏢 Business', name: 'Restaurant', emoji: '🍽️', desc: 'Plat, ambiance',
  basePrompt: 'Animate this restaurant photo. Dish, ambiance, service. Preserve exact scene.',
  actions: ['steam rises from the dish'],
  cameras: ['slow push-in'],
  lights: ['warm restaurant light'] },

{ id: 'hotel', num: 189, cat: '🏢 Business', name: 'Hôtel', emoji: '🏨', desc: 'Chambre, piscine',
  basePrompt: 'Animate this hotel photo. Room, pool, view. Preserve exact property identity.',
  actions: ['curtains move gently, water shimmers'],
  cameras: ['slow push-in'],
  lights: ['warm hotel light'] },

{ id: 'boutique', num: 190, cat: '🏢 Business', name: 'Boutique', emoji: '🛍️', desc: 'Vitrine, promotion',
  basePrompt: 'Animate this boutique photo. Storefront, product, promotion. Preserve exact scene.',
  actions: ['product glows, promotion animates'],
  cameras: ['slow push-in'],
  lights: ['warm boutique light'] },

{ id: 'startup-pitch', num: 330, cat: '🏢 Business', name: 'Pitch Startup', emoji: '🚀', desc: 'Vision, growth',
  basePrompt: 'Animate this image as a startup pitch. Vision, product, growth. Preserve exact scene.',
  actions: ['charts animate, product shown'],
  cameras: ['static frame'],
  lights: ['modern office light'] },

{ id: 'team-meeting', num: 331, cat: '🏢 Business', name: 'Réunion Équipe', emoji: '👥', desc: 'Collaboration',
  basePrompt: 'Animate this image as a team meeting. Collaboration, discussion. Preserve exact people identity.',
  actions: ['the team discusses, gestures'],
  cameras: ['handheld'],
  lights: ['bright office light'] },

{ id: 'webshop', num: 332, cat: '🏢 Business', name: 'Boutique en Ligne', emoji: '💳', desc: 'Produit, panier',
  basePrompt: 'Animate this image as an online shop. Product, cart, checkout. Preserve exact product identity.',
  actions: ['product shown, cart animates'],
  cameras: ['static frame'],
  lights: ['clean e-commerce light'] },

{ id: 'saas', num: 333, cat: '🏢 Business', name: 'Logiciel SaaS', emoji: '💻', desc: 'Interface, dashboard',
  basePrompt: 'Animate this image as a SaaS product. Interface, dashboard, stats. Preserve exact scene.',
  actions: ['dashboard animates with data'],
  cameras: ['slow push-in'],
  lights: ['screen glow'] },

{ id: 'consulting', num: 334, cat: '🏢 Business', name: 'Conseil', emoji: '💼', desc: 'Analyse, stratégie',
  basePrompt: 'Animate this image as a consulting presentation. Analysis, strategy, results. Preserve exact scene.',
  actions: ['charts animate, strategy shown'],
  cameras: ['static frame'],
  lights: ['modern office light'] }


,
// ═══════════════════════════════════════════════════════════════
// 🌍 VOYAGE
// ═══════════════════════════════════════════════════════════════
{ id: 'postcard', num: 18, cat: '🌍 Voyage', name: 'Carte Postale', emoji: '📮', desc: 'Monument qui prend vie',
  basePrompt: 'Animate this travel photo as a living postcard. Monument, landscape, movement. Preserve exact scene.',
  actions: ['clouds move, water ripples'],
  cameras: ['slow pan'],
  lights: ['golden hour'] },

{ id: 'tour-guide', num: 192, cat: '🌍 Voyage', name: 'Guide Touristique', emoji: '🗺️', desc: 'Lieu, histoire',
  basePrompt: 'Animate this travel destination. Landmark, history, tips. Preserve exact scene.',
  actions: ['landmark glows, details revealed'],
  cameras: ['slow push-in'],
  lights: ['daylight'] },

{ id: 'road-trip', num: 193, cat: '🌍 Voyage', name: 'Road Trip', emoji: '🚗', desc: 'Route, paysage',
  basePrompt: 'Animate this image as a road trip. Road, landscape, stops. Preserve exact scene.',
  actions: ['the road stretches ahead, scenery moving'],
  cameras: ['tracking shot'],
  lights: ['golden highway light'] },

{ id: 'cruise', num: 194, cat: '🌍 Voyage', name: 'Croisière', emoji: '🚢', desc: 'Mer, pont',
  basePrompt: 'Animate this cruise photo. Sea, deck, stops. Preserve exact scene.',
  actions: ['waves move, ship sails'],
  cameras: ['wide sea view'],
  lights: ['sunny ocean light'] },

{ id: 'safari', num: 195, cat: '🌍 Voyage', name: 'Safari', emoji: '🦁', desc: 'Animaux, savane',
  basePrompt: 'Animate this safari photo. Animals, savanna, sunset. Preserve exact scene.',
  actions: ['animals move, sun sets'],
  cameras: ['slow pan'],
  lights: ['golden savanna light'] },

{ id: 'mountain', num: 196, cat: '🌍 Voyage', name: 'Montagne', emoji: '🏔️', desc: 'Sommet, neige',
  basePrompt: 'Animate this mountain photo. Summit, snow, hiking. Preserve exact scene.',
  actions: ['clouds move across the peaks'],
  cameras: ['wide mountain shot'],
  lights: ['bright mountain sun'] },

{ id: 'beach', num: 197, cat: '🌍 Voyage', name: 'Plage Paradisiaque', emoji: '🏖️', desc: 'Sable, palmiers',
  basePrompt: 'Animate this beach photo. Sand, palms, waves. Preserve exact scene.',
  actions: ['waves roll in, palms sway'],
  cameras: ['slow pan'],
  lights: ['bright beach sun'] },

{ id: 'city-night', num: 198, cat: '🌍 Voyage', name: 'Ville Nocturne', emoji: '🌃', desc: 'Lumières, circulation',
  basePrompt: 'Animate this city at night. Lights, traffic, urban life. Preserve exact scene.',
  actions: ['cars move, lights flicker'],
  cameras: ['slow pan'],
  lights: ['city night glow'] },

{ id: 'village', num: 199, cat: '🌍 Voyage', name: 'Village Traditionnel', emoji: '🏘️', desc: 'Maisons, ruelles',
  basePrompt: 'Animate this traditional village. Houses, alleys, craft. Preserve exact scene.',
  actions: ['smoke rises, people walk'],
  cameras: ['slow pan'],
  lights: ['warm village light'] },

{ id: 'extreme', num: 200, cat: '🌍 Voyage', name: 'Aventure Extrême', emoji: '🪂', desc: 'Saut, cascade',
  basePrompt: 'Animate this extreme adventure. Jump, waterfall, adrenaline. Preserve exact scene.',
  actions: ['the subject jumps, adrenaline rushing'],
  cameras: ['dynamic following'],
  lights: ['bright outdoor light'] },

{ id: 'desert', num: 335, cat: '🌍 Voyage', name: 'Désert', emoji: '🏜️', desc: 'Dunes, chaleur',
  basePrompt: 'Animate this desert photo. Dunes, heat, silence. Preserve exact scene.',
  actions: ['sand shifts, heat shimmer'],
  cameras: ['slow pan'],
  lights: ['hot desert sun'] },

{ id: 'jungle', num: 336, cat: '🌍 Voyage', name: 'Jungle', emoji: '🌴', desc: 'Végétation dense',
  basePrompt: 'Animate this jungle photo. Dense vegetation, humidity. Preserve exact scene.',
  actions: ['leaves sway, insects move'],
  cameras: ['slow pan'],
  lights: ['green filtered light'] },

{ id: 'arctic', num: 337, cat: '🌍 Voyage', name: 'Arctique', emoji: '🧊', desc: 'Glace, aurores',
  basePrompt: 'Animate this arctic photo. Ice, auroras, silence. Preserve exact scene.',
  actions: ['auroras dance, ice glistens'],
  cameras: ['wide arctic shot'],
  lights: ['cold blue aurora'] },

{ id: 'volcano', num: 338, cat: '🌍 Voyage', name: 'Volcan', emoji: '🌋', desc: 'Lave, fumée',
  basePrompt: 'Animate this volcano photo. Lava, smoke, power. Preserve exact scene.',
  actions: ['lava flows, smoke rises'],
  cameras: ['wide dramatic shot'],
  lights: ['orange lava glow'] },

{ id: 'waterfall', num: 339, cat: '🌍 Voyage', name: 'Cascade', emoji: '💧', desc: 'Eau qui tombe',
  basePrompt: 'Animate this waterfall photo. Falling water, mist. Preserve exact scene.',
  actions: ['water falls, mist rises'],
  cameras: ['slow push-in'],
  lights: ['natural daylight'] },

// ═══════════════════════════════════════════════════════════════
// 🏛️ HISTOIRE
// ═══════════════════════════════════════════════════════════════
{ id: 'prehistoric', num: 201, cat: '🏛️ Histoire', name: 'Préhistoire', emoji: '🦕', desc: 'Dinosaures, volcans',
  basePrompt: 'Animate this image as a prehistoric scene. Dinosaurs, volcanoes, wild nature. Preserve exact scene.',
  actions: ['dinosaurs move, volcanoes rumble'],
  cameras: ['wide epic shot'],
  lights: ['dramatic prehistoric light'] },

{ id: 'egypt', num: 202, cat: '🏛️ Histoire', name: 'Égypte Antique', emoji: '🏛️', desc: 'Pyramides, pharaon',
  basePrompt: 'Animate this ancient Egypt image. Pyramids, hieroglyphs, pharaoh. Preserve exact scene.',
  actions: ['hieroglyphs glow, sand shifts'],
  cameras: ['slow pan'],
  lights: ['golden Egyptian light'] },

{ id: 'greece', num: 203, cat: '🏛️ Histoire', name: 'Grèce Antique', emoji: '🏛️', desc: 'Temple, mythologie',
  basePrompt: 'Animate this ancient Greece image. Temple, philosophers, mythology. Preserve exact scene.',
  actions: ['philosophers discuss, light shifts'],
  cameras: ['slow pan'],
  lights: ['Mediterranean light'] },

{ id: 'rome', num: 204, cat: '🏛️ Histoire', name: 'Rome Antique', emoji: '🏛️', desc: 'Colisée, légions',
  basePrompt: 'Animate this ancient Rome image. Colosseum, legions, emperor. Preserve exact scene.',
  actions: ['legions march, crowd cheers'],
  cameras: ['wide epic shot'],
  lights: ['warm Roman light'] },

{ id: 'medieval', num: 205, cat: '🏛️ Histoire', name: 'Moyen Âge', emoji: '🏰', desc: 'Château, chevaliers',
  basePrompt: 'Animate this medieval image. Castle, knights, tournament. Preserve exact scene.',
  actions: ['knights ride, banners wave'],
  cameras: ['wide epic shot'],
  lights: ['dramatic medieval light'] },

{ id: 'renaissance', num: 206, cat: '🏛️ Histoire', name: 'Renaissance', emoji: '🎨', desc: 'Art, inventeurs',
  basePrompt: 'Animate this Renaissance image. Art, inventors, cities. Preserve exact scene.',
  actions: ['art comes to life, inventions move'],
  cameras: ['slow pan'],
  lights: ['warm Renaissance light'] },

{ id: '18th', num: 207, cat: '🏛️ Histoire', name: 'XVIIIe siècle', emoji: '🎩', desc: 'Versailles, carrosses',
  basePrompt: 'Animate this 18th century image. Versailles, carriages, enlightenment. Preserve exact scene.',
  actions: ['carriages move, candles flicker'],
  cameras: ['slow pan'],
  lights: ['candlelight, warm gold'] },

{ id: '1920s', num: 208, cat: '🏛️ Histoire', name: 'Années 1920', emoji: '🎷', desc: 'Charleston, jazz',
  basePrompt: 'Animate this 1920s image. Charleston, Art Deco, jazz. Preserve exact scene.',
  actions: ['the scene moves with 20s energy'],
  cameras: ['slow pan'],
  lights: ['warm Art Deco light'] },

{ id: '1950s', num: 209, cat: '🏛️ Histoire', name: 'Années 1950', emoji: '🚗', desc: 'Rock\'n\'roll, drive-in',
  basePrompt: 'Animate this 1950s image. Rock\'n\'roll, cars, drive-in. Preserve exact scene.',
  actions: ['cars move, people dance'],
  cameras: ['slow pan'],
  lights: ['warm 50s light'] },

{ id: '1980s', num: 210, cat: '🏛️ Histoire', name: 'Années 1980', emoji: '🕹️', desc: 'Néons, VHS, synthwave',
  basePrompt: 'Animate this 1980s image. Neons, VHS, synthwave. Preserve exact scene.',
  actions: ['neon signs glow, VHS effects'],
  cameras: ['static frame'],
  lights: ['neon pink and blue'] },

{ id: '2000s', num: 211, cat: '🏛️ Histoire', name: 'Années 2000', emoji: '💿', desc: 'Y2K, MSN',
  basePrompt: 'Animate this 2000s image. Y2K, MSN, fashion. Preserve exact scene.',
  actions: ['the scene moves with 2000s energy'],
  cameras: ['static frame'],
  lights: ['bright colorful'] },

{ id: 'future', num: 212, cat: '🏛️ Histoire', name: 'Futur 2100', emoji: '🤖', desc: 'Ville high-tech',
  basePrompt: 'Animate this image as a year 2100 future scene. High-tech city, AI, robots. Preserve exact scene.',
  actions: ['hovercars fly, drones move'],
  cameras: ['wide futuristic shot'],
  lights: ['cool futuristic glow'] },

{ id: 'industrial', num: 340, cat: '🏛️ Histoire', name: 'Révolution Industrielle', emoji: '⚙️', desc: 'Machines, vapeur',
  basePrompt: 'Animate this industrial image. Machines, steam, factories. Preserve exact scene.',
  actions: ['machines move, steam rises'],
  cameras: ['slow pan'],
  lights: ['dramatic industrial light'] },

{ id: 'wild-west', num: 341, cat: '🏛️ Histoire', name: 'Far West', emoji: '🤠', desc: 'Cowboys, saloon',
  basePrompt: 'Animate this Wild West image. Cowboys, saloon, duel. Preserve exact scene.',
  actions: ['dust blows, duel tension'],
  cameras: ['wide western shot'],
  lights: ['golden western light'] },

{ id: 'space-race', num: 342, cat: '🏛️ Histoire', name: 'Course à l\'Espace', emoji: '🚀', desc: 'Fusées, NASA',
  basePrompt: 'Animate this space race image. Rockets, NASA, 60s. Preserve exact scene.',
  actions: ['rocket launches, smoke billows'],
  cameras: ['wide epic shot'],
  lights: ['dramatic launch light'] },

// ═══════════════════════════════════════════════════════════════
// 🐉 FANTASY & MYTHOLOGIE
// ═══════════════════════════════════════════════════════════════
{ id: 'dragon', num: 251, cat: '🐉 Fantasy', name: 'Dragon', emoji: '🐉', desc: 'Vol, feu, écaille',
  basePrompt: 'Animate this image with a dragon. Flying, fire, scales. Preserve exact scene.',
  actions: ['the dragon flies overhead, fire blazing'],
  cameras: ['wide epic shot'],
  lights: ['dramatic fire glow'] },

{ id: 'unicorn', num: 252, cat: '🐉 Fantasy', name: 'Licorne', emoji: '🦄', desc: 'Forêt magique',
  basePrompt: 'Animate this image with a unicorn. Magic forest, rainbow, sparkles. Preserve exact scene.',
  actions: ['the unicorn glows, sparkles float'],
  cameras: ['slow pan'],
  lights: ['magical pastel light'] },

{ id: 'mermaid', num: 253, cat: '🐉 Fantasy', name: 'Sirène', emoji: '🧜', desc: 'Océan, chant',
  basePrompt: 'Animate this image as a mermaid scene. Ocean, song, tail. Preserve exact identity.',
  actions: ['the mermaid swims gracefully'],
  cameras: ['underwater shot'],
  lights: ['deep blue ocean glow'] },

{ id: 'phoenix', num: 254, cat: '🐉 Fantasy', name: 'Phénix', emoji: '🔥', desc: 'Renaissance dans les flammes',
  basePrompt: 'Animate this image as a phoenix rebirth. Flames, feathers, resurrection. Preserve exact scene.',
  actions: ['the phoenix rises from ashes, flames spreading'],
  cameras: ['wide dramatic shot'],
  lights: ['intense fire glow'] },

{ id: 'werewolf', num: 255, cat: '🐉 Fantasy', name: 'Loup-Garou', emoji: '🐺', desc: 'Transformation, pleine lune',
  basePrompt: 'Animate this image as a werewolf transformation. Full moon, fur, fangs. Preserve exact identity.',
  actions: ['the subject transforms under the full moon'],
  cameras: ['dramatic close-up'],
  lights: ['moonlight, dark shadows'] },

{ id: 'vampire', num: 256, cat: '🐉 Fantasy', name: 'Vampire', emoji: '🧛', desc: 'Nuit, château, crocs',
  basePrompt: 'Animate this image as a vampire scene. Night, castle, fangs. Preserve exact identity.',
  actions: ['the vampire shows fangs, eyes glowing red'],
  cameras: ['slow push-in'],
  lights: ['candlelight, dark shadows'] },

{ id: 'ghost', num: 257, cat: '🐉 Fantasy', name: 'Fantôme', emoji: '👻', desc: 'Apparition, transparence',
  basePrompt: 'Animate this image as a ghost apparition. Transparent, ethereal, cold atmosphere. Preserve exact scene.',
  actions: ['the ghost appears and fades'],
  cameras: ['slow push-in'],
  lights: ['cold blue mist'] },

{ id: 'angel-demon', num: 258, cat: '🐉 Fantasy', name: 'Ange / Démon', emoji: '😇', desc: 'Ailes, halo',
  basePrompt: 'Animate this image as an angel or demon scene. Wings, halo, contrast. Preserve exact identity.',
  actions: ['wings spread wide, halo glowing'],
  cameras: ['wide epic shot'],
  lights: ['divine light or dark fire'] },

{ id: 'norse-god', num: 259, cat: '🐉 Fantasy', name: 'Dieu Nordique', emoji: '⚡', desc: 'Tonnerre, marteau',
  basePrompt: 'Animate this image as a Norse god scene. Thunder, hammer, Valhalla. Preserve exact identity.',
  actions: ['lightning strikes, hammer glows'],
  cameras: ['low angle epic shot'],
  lights: ['dramatic storm light'] },

{ id: 'abyss', num: 261, cat: '🐉 Fantasy', name: 'Créature des Abysses', emoji: '🦑', desc: 'Profondeur, tentacules',
  basePrompt: 'Animate this image as a deep sea abyss scene. Depth, tentacles, darkness. Preserve exact scene.',
  actions: ['tentacles move, darkness deepens'],
  cameras: ['underwater shot'],
  lights: ['bioluminescent glow'] },

{ id: 'fairy', num: 343, cat: '🐉 Fantasy', name: 'Fée', emoji: '🧚', desc: 'Petite, lumineuse, magique',
  basePrompt: 'Animate this image as a fairy scene. Small glowing fairy, magic. Preserve exact scene.',
  actions: ['the fairy flies, leaving sparkles'],
  cameras: ['slow push-in'],
  lights: ['magical glow'] },

{ id: 'wizard', num: 344, cat: '🐉 Fantasy', name: 'Magicien', emoji: '🧙', desc: 'Sorts, bâton',
  basePrompt: 'Animate this image as a wizard scene. Spells, staff, magic. Preserve exact identity.',
  actions: ['spells fly from the staff'],
  cameras: ['dramatic close-up'],
  lights: ['magical glow'] },

{ id: 'elf', num: 345, cat: '🐉 Fantasy', name: 'Elfe', emoji: '🧝', desc: 'Oreilles pointues, forêt',
  basePrompt: 'Animate this image as an elf scene. Pointed ears, forest, grace. Preserve exact identity.',
  actions: ['the elf moves gracefully through the forest'],
  cameras: ['slow pan'],
  lights: ['dappled forest light'] },

{ id: 'troll', num: 346, cat: '🐉 Fantasy', name: 'Troll', emoji: '👹', desc: 'Grand, brute, caverne',
  basePrompt: 'Animate this image as a troll scene. Giant, brute, cave. Preserve exact scene.',
  actions: ['the troll roars, ground shaking'],
  cameras: ['low angle epic'],
  lights: ['dark cave fire'] },

{ id: 'magic-forest', num: 347, cat: '🐉 Fantasy', name: 'Forêt Magique', emoji: '🌲', desc: 'Arbres lumineux',
  basePrompt: 'Animate this image as a magical forest. Glowing trees, fireflies. Preserve exact scene.',
  actions: ['fireflies float, trees glow'],
  cameras: ['slow pan'],
  lights: ['magical forest glow'] },

// ═══════════════════════════════════════════════════════════════
// 🎬 GENRES CINÉMA
// ═══════════════════════════════════════════════════════════════
{ id: 'western', num: 262, cat: '🎬 Cinéma', name: 'Western', emoji: '🤠', desc: 'Duel, poussière',
  basePrompt: 'Animate this image as a western movie scene. Duel, dust, sunset. Preserve exact scene.',
  actions: ['tumbleweed rolls, duel tension'],
  cameras: ['wide western shot'],
  lights: ['golden western light'] },

{ id: 'polar', num: 263, cat: '🎬 Cinéma', name: 'Polar', emoji: '🕵️', desc: 'Enquête, pluie',
  basePrompt: 'Animate this image as a film noir detective scene. Investigation, rain, trench coat. Preserve exact scene.',
  actions: ['rain falls, shadow moves'],
  cameras: ['slow push-in'],
  lights: ['rainy night light'] },

{ id: 'horror', num: 264, cat: '🎬 Cinéma', name: 'Horreur', emoji: '😱', desc: 'Saut, ombre, silence',
  basePrompt: 'Animate this image as a horror movie scene. Jump scares, shadows, tension. Preserve exact scene.',
  actions: ['shadows move, tension rises'],
  cameras: ['handheld with tremor'],
  lights: ['dark with flickering light'] },

{ id: 'comedy', num: 265, cat: '🎬 Cinéma', name: 'Comédie', emoji: '😂', desc: 'Gag, timing',
  basePrompt: 'Animate this image as a comedy scene. Gag, timing, expressive reactions. Preserve exact identity.',
  actions: ['the subject reacts comically'],
  cameras: ['static frame'],
  lights: ['bright cheerful light'] },

{ id: 'romance', num: 266, cat: '🎬 Cinéma', name: 'Romance', emoji: '💕', desc: 'Regard, pluie',
  basePrompt: 'Animate this image as a romantic scene. Gaze, rain, kiss. Preserve exact identity.',
  actions: ['the couple gazes, rain falling softly'],
  cameras: ['slow push-in'],
  lights: ['warm romantic glow'] },

{ id: 'sci-fi', num: 267, cat: '🎬 Cinéma', name: 'Science-Fiction', emoji: '🛸', desc: 'Futur, technologie',
  basePrompt: 'Animate this image as a science fiction scene. Future, technology, mystery. Preserve exact scene.',
  actions: ['futuristic elements glow, tech animates'],
  cameras: ['slow pan'],
  lights: ['cool sci-fi glow'] },

{ id: 'fantasy-cine', num: 268, cat: '🎬 Cinéma', name: 'Fantasy Cinéma', emoji: '🧝', desc: 'Quête, magie',
  basePrompt: 'Animate this image as an epic fantasy scene. Quest, magic, creature. Preserve exact scene.',
  actions: ['magic glows, creature appears'],
  cameras: ['wide epic shot'],
  lights: ['magical dramatic light'] },

{ id: 'thriller', num: 269, cat: '🎬 Cinéma', name: 'Thriller', emoji: '😰', desc: 'Tension, poursuite',
  basePrompt: 'Animate this image as a thriller scene. Tension, chase, twist. Preserve exact scene.',
  actions: ['tension builds, sudden movement'],
  cameras: ['dynamic following'],
  lights: ['dramatic shadow'] },

{ id: 'documentary', num: 270, cat: '🎬 Cinéma', name: 'Documentaire', emoji: '🎥', desc: 'Réel, témoignage',
  basePrompt: 'Animate this image as a documentary scene. Real, testimony, archive. Preserve exact scene.',
  actions: ['the scene comes to life authentically'],
  cameras: ['handheld'],
  lights: ['natural light'] },

{ id: 'film-noir', num: 271, cat: '🎬 Cinéma', name: 'Film Noir', emoji: '🚬', desc: 'Ombre, cigarette',
  basePrompt: 'Animate this image as a film noir scene. Shadows, cigarette, femme fatale. Preserve exact scene.',
  actions: ['smoke drifts, shadows move'],
  cameras: ['slow push-in'],
  lights: ['high contrast noir light'] },

{ id: 'musical', num: 272, cat: '🎬 Cinéma', name: 'Comédie Musicale', emoji: '🎭', desc: 'Danse, chant',
  basePrompt: 'Animate this image as a musical scene. Dance, song, color. Preserve exact scene.',
  actions: ['the scene dances, colorful'],
  cameras: ['wide dynamic shot'],
  lights: ['bright colorful'] },

{ id: 'war', num: 273, cat: '🎬 Cinéma', name: 'Guerre', emoji: '💥', desc: 'Champ, soldat',
  basePrompt: 'Animate this image as a war scene. Battlefield, soldier, sacrifice. Preserve exact scene.',
  actions: ['smoke rises, tension builds'],
  cameras: ['handheld'],
  lights: ['dark dramatic war light'] },

{ id: 'spy', num: 274, cat: '🎬 Cinéma', name: 'Espionnage', emoji: '🕶️', desc: 'Gadget, infiltration',
  basePrompt: 'Animate this image as a spy scene. Gadget, infiltration, tension. Preserve exact scene.',
  actions: ['the spy moves stealthily'],
  cameras: ['dynamic following'],
  lights: ['cool spy light'] },

{ id: 'disaster', num: 275, cat: '🎬 Cinéma', name: 'Catastrophe', emoji: '🌪️', desc: 'Chaos, survie',
  basePrompt: 'Animate this image as a disaster scene. Chaos, survival, rescue. Preserve exact scene.',
  actions: ['chaos unfolds, debris flying'],
  cameras: ['dynamic handheld'],
  lights: ['dramatic disaster light'] },

{ id: 'biopic', num: 276, cat: '🎬 Cinéma', name: 'Biopic', emoji: '🎞️', desc: 'Vie, époque',
  basePrompt: 'Animate this image as a biopic scene. Life, era, transformation. Preserve exact scene.',
  actions: ['the subject lives a moment of their life'],
  cameras: ['slow push-in'],
  lights: ['cinematic natural light'] },

{ id: 'indie', num: 348, cat: '🎬 Cinéma', name: 'Film Indépendant', emoji: '🎬', desc: 'Intimiste, contemplatif',
  basePrompt: 'Animate this image as an indie film scene. Intimate, contemplative. Preserve exact scene.',
  actions: ['the scene breathes slowly'],
  cameras: ['static frame'],
  lights: ['natural soft light'] },

{ id: 'animation-cine', num: 349, cat: '🎬 Cinéma', name: 'Animation Cinéma', emoji: '🎞️', desc: 'Style film d\'animation',
  basePrompt: 'Animate this image as a cinema animation. Beautiful animated film quality. Preserve exact scene.',
  actions: ['the scene animates beautifully'],
  cameras: ['slow pan'],
  lights: ['warm animated light'] },

{ id: 'superhero-cine', num: 350, cat: '🎬 Cinéma', name: 'Super-Héros Cinéma', emoji: '🦸', desc: 'Épique, dramatique',
  basePrompt: 'Animate this image as a superhero movie scene. Epic, dramatic, powers. Preserve exact identity.',
  actions: ['the hero uses their power'],
  cameras: ['low angle epic shot'],
  lights: ['dramatic hero light'] },

{ id: 'zombie', num: 351, cat: '🎬 Cinéma', name: 'Zombie', emoji: '🧟', desc: 'Post-apo, horde',
  basePrompt: 'Animate this image as a zombie scene. Post-apocalyptic, horde, survival. Preserve exact scene.',
  actions: ['zombies shuffle, tension rises'],
  cameras: ['handheld'],
  lights: ['dark dramatic light'] },

{ id: 'heist', num: 352, cat: '🎬 Cinéma', name: 'Braquage', emoji: '💰', desc: 'Équipe, plan',
  basePrompt: 'Animate this image as a heist scene. Team, plan, tension. Preserve exact scene.',
  actions: ['the team moves with precision'],
  cameras: ['dynamic following'],
  lights: ['dramatic shadow'] },

// ═══════════════════════════════════════════════════════════════
// 🌀 ILLUSIONS
// ═══════════════════════════════════════════════════════════════
{ id: 'trompe-loeil', num: 223, cat: '🌀 Illusions', name: 'Trompe-l\'œil', emoji: '🖼️', desc: 'L\'image sort du cadre',
  basePrompt: 'Animate this image with a trompe-l\'oeil effect. The subject appears to step out of the frame. Preserve exact identity.',
  actions: ['the subject steps out of the frame'],
  cameras: ['static frame'],
  lights: ['dramatic light'] },

{ id: 'anamorphose', num: 224, cat: '🌀 Illusions', name: 'Anamorphose', emoji: '🔍', desc: 'Image qui se révèle',
  basePrompt: 'Animate this image with an anamorphic reveal. The image reveals itself from a certain angle. Preserve exact scene.',
  actions: ['the image reveals itself'],
  cameras: ['slow reveal movement'],
  lights: ['consistent'] },

{ id: 'double-sens', num: 225, cat: '🌀 Illusions', name: 'Double Sens', emoji: '🤔', desc: 'Deux images en une',
  basePrompt: 'Animate this image as a double meaning illusion. Two images in one. Preserve exact scene.',
  actions: ['the image shifts between interpretations'],
  cameras: ['static frame'],
  lights: ['neutral'] },

{ id: 'escher', num: 226, cat: '🌀 Illusions', name: 'Escher', emoji: '🪜', desc: 'Escaliers impossibles',
  basePrompt: 'Animate this image as an Escher illusion. Impossible stairs, loops. Preserve exact scene.',
  actions: ['stairs loop impossibly'],
  cameras: ['slow pan'],
  lights: ['clean surreal light'] },

{ id: 'optical-illusion', num: 227, cat: '🌀 Illusions', name: 'Illusion d\'Optique', emoji: '👁️', desc: 'Mouvement perçu',
  basePrompt: 'Animate this image as an optical illusion. Perceived movement. Preserve exact scene.',
  actions: ['the image shifts perception'],
  cameras: ['static frame'],
  lights: ['consistent'] },

{ id: 'forced-perspective', num: 228, cat: '🌀 Illusions', name: 'Forced Perspective', emoji: '📐', desc: 'Taille faussée',
  basePrompt: 'Animate this image with forced perspective. Objects of different sizes appearing the same. Preserve exact scene.',
  actions: ['scale perception shifts'],
  cameras: ['static frame'],
  lights: ['consistent'] },

{ id: 'mirror', num: 229, cat: '🌀 Illusions', name: 'Réflexion Infinie', emoji: '🪞', desc: 'Miroirs, répétition',
  basePrompt: 'Animate this image with infinite mirror reflections. Repeated images. Preserve exact scene.',
  actions: ['reflections multiply'],
  cameras: ['slow push-in'],
  lights: ['mirror reflection light'] },

{ id: 'composite', num: 230, cat: '🌀 Illusions', name: 'Portrait Composite', emoji: '🧩', desc: 'Visage fait d\'images',
  basePrompt: 'Animate this image as a composite portrait. Face made of smaller images. Preserve exact scene.',
  actions: ['the composite image shifts'],
  cameras: ['slow push-in'],
  lights: ['neutral'] },

{ id: 'kaleidoscope', num: 39, cat: '🌀 Illusions', name: 'Kaléidoscope', emoji: '🔮', desc: 'Symétrie hypnotique',
  basePrompt: 'Animate this image as a kaleidoscope. Symmetric patterns, hypnotic. Preserve exact scene.',
  actions: ['the kaleidoscope patterns shift'],
  cameras: ['static frame'],
  lights: ['colorful glow'] },

{ id: 'glitch', num: 37, cat: '🌀 Illusions', name: 'Glitch Digital', emoji: '📺', desc: 'Distorsion, pixels',
  basePrompt: 'Animate this image with digital glitch effects. Distortion, pixelation, chaos. Preserve exact scene.',
  actions: ['the image glitches and distorts'],
  cameras: ['static frame'],
  lights: ['digital glow'] },

{ id: 'pixel-sort', num: 353, cat: '🌀 Illusions', name: 'Pixel Sort', emoji: '🎨', desc: 'Pixels qui se trient',
  basePrompt: 'Animate this image with pixel sorting effects. Pixels stretch and sort. Preserve exact scene.',
  actions: ['pixels stretch and sort'],
  cameras: ['static frame'],
  lights: ['digital glow'] },

{ id: 'datamosh', num: 354, cat: '🌀 Illusions', name: 'Datamosh', emoji: '💾', desc: 'Corruption vidéo',
  basePrompt: 'Animate this image with datamosh effects. Video corruption, motion distortion. Preserve exact scene.',
  actions: ['the image distorts with datamosh'],
  cameras: ['static frame'],
  lights: ['digital glow'] },

{ id: 'long-exposure', num: 355, cat: '🌀 Illusions', name: 'Longue Exposition', emoji: '📷', desc: 'Filé lumineux',
  basePrompt: 'Animate this image with long exposure effect. Light trails, continuous motion. Preserve exact scene.',
  actions: ['light trails streak across'],
  cameras: ['static frame'],
  lights: ['light trails'] },

{ id: 'tilt-shift', num: 356, cat: '🌀 Illusions', name: 'Tilt-Shift', emoji: '🏘️', desc: 'Effet maquette',
  basePrompt: 'Animate this image with tilt-shift effect. Miniature look, shallow focus. Preserve exact scene.',
  actions: ['the scene moves like a miniature'],
  cameras: ['static frame'],
  lights: ['consistent'] },

{ id: 'double-exposure', num: 38, cat: '🌀 Illusions', name: 'Double Exposition', emoji: '🌫️', desc: 'Superposition onirique',
  basePrompt: 'Animate this image with double exposure. Two images blending dreamily. Preserve exact scene.',
  actions: ['the two images blend slowly'],
  cameras: ['static frame'],
  lights: ['dreamy glow'] },

// ═══════════════════════════════════════════════════════════════
// 🎁 BONUS
// ═══════════════════════════════════════════════════════════════
{ id: 'creative-studio', num: 291, cat: '🎁 Bonus', name: 'Studio Créatif Complet', emoji: '🎨', desc: 'Tous les effets en un',
  basePrompt: 'Animate this image with a mix of creative effects. Cinematic, artistic, dynamic. Preserve exact identity.',
  actions: ['multiple creative effects layer'],
  cameras: ['dynamic movement'],
  lights: ['creative mix'] },

{ id: 'random-total', num: 292, cat: '🎁 Bonus', name: 'Aléatoire Total', emoji: '🎲', desc: 'L\'IA choisit tout',
  basePrompt: 'Animate this image with a completely random artistic direction. Surprise me. Preserve exact identity.',
  actions: ['random artistic movement'],
  cameras: ['random'],
  lights: ['random artistic'] },

{ id: 'youtube-channel', num: 293, cat: '🎁 Bonus', name: 'Chaîne YouTube', emoji: '📺', desc: 'Intro + vidéo + outro',
  basePrompt: 'Animate this image as a YouTube video intro. Energetic, professional. Preserve exact identity.',
  actions: ['dynamic intro movement'],
  cameras: ['dynamic push-in'],
  lights: ['bright studio light'] },

{ id: 'story-5-acts', num: 295, cat: '🎁 Bonus', name: 'Story en 5 Plans', emoji: '🎬', desc: 'Découpage automatique',
  basePrompt: 'Animate this image as a 5-shot story sequence. Narrative progression. Preserve exact identity.',
  actions: ['the scene progresses through 5 moments'],
  cameras: ['varied shot types'],
  lights: ['narrative lighting'] },

{ id: 'music-video', num: 296, cat: '🎁 Bonus', name: 'Clip Musical', emoji: '🎵', desc: 'Synchronisation beats',
  basePrompt: 'Animate this image as a music video. Beat-synced cuts, energy. Preserve exact identity.',
  actions: ['the scene pulses to an invisible beat'],
  cameras: ['dynamic cuts'],
  lights: ['colorful music light'] },

{ id: 'living-portrait', num: 297, cat: '🎁 Bonus', name: 'Portrait Vivant', emoji: '👤', desc: 'Yeux, bouche, respiration',
  basePrompt: 'Animate this portrait to bring it fully to life. Eyes, mouth, breathing. Preserve exact identity.',
  actions: ['the subject breathes, blinks, smiles'],
  cameras: ['static close-up'],
  lights: ['soft portrait light'] },

{ id: 'old-photo-restore', num: 298, cat: '🎁 Bonus', name: 'Photo Ancienne', emoji: '📷', desc: 'Restauration + animation',
  basePrompt: 'Restore and animate this old photo. Colors come back, subjects move. Preserve exact people identity.',
  actions: ['colors return, subjects breathe'],
  cameras: ['slow push-in'],
  lights: ['warm restored light'] },

{ id: 'talking-avatar', num: 299, cat: '🎁 Bonus', name: 'Avatar Parlant', emoji: '🗣️', desc: 'TTS + lip sync',
  basePrompt: 'Animate this avatar to speak. Lip sync, expressions, gestures. Preserve exact identity.',
  actions: ['the avatar speaks, lips moving'],
  cameras: ['static frame'],
  lights: ['soft portrait light'] },

{ id: 'multi-images', num: 300, cat: '🎁 Bonus', name: 'Multi-Images → 1 Vidéo', emoji: '🎞️', desc: 'Diaporama cinématique',
  basePrompt: 'Animate this image as part of a cinematic slideshow. Transitions, flow. Preserve exact identity.',
  actions: ['transitions flow between images'],
  cameras: ['smooth cinematic'],
  lights: ['cinematic'] },

{ id: 'final-boss', num: 357, cat: '🎁 Bonus', name: 'Final Boss', emoji: '👑', desc: 'Tous les modes combinés',
  basePrompt: 'Animate this image as the ultimate cinematic scene. Epic, all effects combined. Preserve exact identity.',
  actions: ['epic combination of effects'],
  cameras: ['epic dynamic'],
  lights: ['epic cinematic'] }

];

// ══════════════════════════════════════════════════════════════════
// EXPORT
// ══════════════════════════════════════════════════════════════════
window.MODES = MODES;
console.log('[modes.js] ' + MODES.length + ' modes chargés');
