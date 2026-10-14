// Operator and legal data. Values come from the owner; never fill these from guesswork.
// integrations/placeholder-check.mjs fails the build if an owner placeholder ever ships.
export const OPERATOR = 'Ibrahim Ibrahim';
export const NAME = 'Ibrahim Ibrahim';
export const CONTACT_EMAIL = 'spareforge.dev@gmail.com';
export const COUNTRY = { en: 'Germany', de: 'Deutschland' } as const;
export const ADDRESS = {
  street: 'Scherfeder Straße 18',
  zip: '34414',
  city: 'Warburg',
  country: COUNTRY,
} as const;
/** Date the legal texts were last revised. */
export const UPDATED = '2026-10-15';

// Web3Forms access key for the contact form. Web3Forms keys are public by design
// (they sit in front-end HTML and only allow sending mail to the owner's inbox).
// PUBLIC_WEB3FORMS_KEY overrides it at build time. Empty string = no form, mailto fallback.
export const WEB3FORMS_KEY: string =
  (import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined) ?? 'c10fe6b1-1fac-4a64-97dd-e3e61a513469';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export const LINKS = {
  // The itch.io page is key-only. It may be named as a profile, never offered as a download.
  itch: 'https://spareforge.itch.io/spareforge',
  steam: '', // set when the Steam page is live (see src/data/features.ts)
  discord: 'https://discord.gg/wkMzgF4yV9',
  tiktok: 'https://www.tiktok.com/@spareforge',
  instagram: 'https://www.instagram.com/spareforgegame',
  youtube: 'https://www.youtube.com/@SpareForge',
};
