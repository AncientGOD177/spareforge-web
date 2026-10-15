export type Lang = 'en' | 'de';
export const LANGS: Lang[] = ['en', 'de'];

/** Equivalent pages per language. The language switch and hreflang use this map. */
export const ROUTES = {
  home: { en: '/', de: '/de' },
  alpha: { en: '/alpha', de: '/de/alpha' },
  privacy: { en: '/privacy', de: '/de/datenschutz' },
  terms: { en: '/terms', de: '/de/nutzungsbedingungen' },
  impressum: { en: '/impressum', de: '/de/impressum' },
  contact: { en: '/contact', de: '/de/kontakt' },
  devlog: { en: '/devlog', de: '/de/devlog' },
  notFound: { en: '/404', de: '/404' },
} as const;
export type RouteKey = keyof typeof ROUTES;

/** Anchor on the home page of a language: "/#jobs" or "/de#jobs". */
export const homeAnchor = (lang: Lang, id: string) => (lang === 'en' ? `/#${id}` : `/de#${id}`);

export const UI = {
  en: {
    skip: 'Skip to content',
    nav: {
      label: 'Main',
      game: 'Game',
      classes: 'Classes',
      videos: 'Videos',
      gallery: 'Gallery',
      roadmap: 'Roadmap',
      faq: 'FAQ',
      join: 'Join the Alpha',
      menu: 'Menu',
      close: 'Close menu',
      home: 'SpareForge, home',
      lang: 'Language',
    },
    ribbon: {
      text: 'Free alpha, Discord key required',
      link: "What's new",
      dismiss: 'Hide this notice',
    },
    footer: {
      blurb: 'A pixel action RPG in alpha, made with the Godot engine.',
      game: 'Game',
      community: 'Community',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      impressum: 'Impressum',
      contact: 'Contact',
      promise: 'No tracking. No ads. No cookies.',
      motion: 'Reduce motion',
      itch: 'itch.io (key holders)',
      godot: 'Made with Godot Engine',
      rights: 'Pixel art, music and sound made for the game.',
    },
    common: {
      discord: 'Join the Discord',
      play: 'Play',
      close: 'Close',
      prev: 'Previous image',
      next: 'Next image',
      aiVoice: 'Narration: AI voice',
      newTab: '(opens Discord)',
      planned: 'planned',
    },
  },
  de: {
    skip: 'Zum Inhalt springen',
    nav: {
      label: 'Hauptmenü',
      game: 'Spiel',
      classes: 'Klassen',
      videos: 'Videos',
      gallery: 'Galerie',
      roadmap: 'Roadmap',
      faq: 'FAQ',
      join: 'Alpha beitreten',
      menu: 'Menü',
      close: 'Menü schließen',
      home: 'SpareForge, Startseite',
      lang: 'Sprache',
    },
    ribbon: {
      text: 'Kostenlose Alpha, Discord-Key nötig',
      link: 'Was ist neu',
      dismiss: 'Hinweis ausblenden',
    },
    footer: {
      blurb: 'Ein Pixel-Action-RPG in der Alpha, gebaut mit der Godot-Engine.',
      game: 'Spiel',
      community: 'Community',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      impressum: 'Impressum',
      contact: 'Kontakt',
      promise: 'Kein Tracking. Keine Werbung. Keine Cookies.',
      motion: 'Bewegung reduzieren',
      itch: 'itch.io (nur mit Key)',
      godot: 'Gebaut mit der Godot Engine',
      rights: 'Pixel-Art, Musik und Sound eigens für das Spiel erstellt.',
    },
    common: {
      discord: 'Discord beitreten',
      play: 'Abspielen',
      close: 'Schließen',
      prev: 'Vorheriges Bild',
      next: 'Nächstes Bild',
      aiVoice: 'Sprecherstimme: KI',
      newTab: '(öffnet Discord)',
      planned: 'geplant',
    },
  },
} as const;

export const META = {
  en: {
    title: 'SpareForge: Pixel Action RPG with 4-Player LAN Co-op',
    description:
      'Original pixel-art action RPG with 6 classes, 12 jobs, 20 regions and loot that rolls. Play the free alpha solo or in 4-player LAN co-op. Join us on Discord.',
    ogAlt: 'SpareForge logo with the Alpha plate next to a red drake boss fight',
    locale: 'en_US',
  },
  de: {
    title: 'SpareForge: Pixel-Action-RPG mit 4-Spieler-LAN-Koop',
    description:
      'Eigenständiges Pixel-Action-RPG mit 6 Klassen, 12 Jobs, 20 Regionen und Beute mit Zufallswerten. Die kostenlose Alpha solo oder im LAN-Koop für bis zu 4 Spieler.',
    ogAlt: 'SpareForge-Logo mit Alpha-Schild neben einem Bosskampf gegen einen roten Drachen',
    locale: 'de_DE',
  },
} as const;
