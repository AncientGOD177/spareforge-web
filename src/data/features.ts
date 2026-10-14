import { LINKS } from '../site';

/**
 * Feature flags. The owner flips these; nothing else should.
 * steamTeaser: 'hidden'  -> no Steam section at all, only the line "Steam release planned".
 *              'planned' -> a Steam section with "release planned" and no link.
 *              Once LINKS.steam holds the store URL, the section renders a static wishlist link (never the iframe widget).
 */
export const FEATURES = {
  steamTeaser: 'hidden' as 'hidden' | 'planned',
  memberCount: false,
};

export const steamLive = () => LINKS.steam.length > 0;
