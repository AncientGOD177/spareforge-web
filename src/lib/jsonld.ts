// Structured data per SEO.md: WebSite, Organization, VideoGame (no offers, no ratings),
// one VideoObject per self-hosted video, and a FAQPage that mirrors the visible FAQ.
import { LINKS } from '../site';
import { FAQ } from '../data/faq';
import { TRAILER, SHORTS, type Video } from '../data/videos';
import type { Lang } from '../i18n';

const SITE = 'https://spareforge.net';
const abs = (p: string) => new URL(p, SITE).href;

export function homeGraph(lang: Lang, posters: Record<string, string>) {
  const home = lang === 'de' ? `${SITE}/de` : `${SITE}/`;
  const video = (v: Video) => ({
    '@type': 'VideoObject',
    '@id': `${SITE}/#video-${v.id}`,
    name: v.title[lang],
    description: v.description[lang] + (v.aiVoice ? (lang === 'de' ? ' Sprecherstimme: KI.' : ' Narration: AI voice.') : ''),
    thumbnailUrl: [abs(posters[v.id])],
    uploadDate: v.uploadDate,
    duration: v.duration,
    contentUrl: abs(v.sources[v.sources.length - 1].src),
    inLanguage: 'en',
  });
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${SITE}/#site`, url: `${SITE}/`, name: 'SpareForge', inLanguage: ['en', 'de'] },
      {
        '@type': 'Organization', '@id': `${SITE}/#org`, name: 'SpareForge', url: `${SITE}/`,
        logo: abs('/icon-512.png'),
        sameAs: [LINKS.itch, LINKS.discord, LINKS.youtube, LINKS.tiktok, LINKS.instagram, LINKS.steam].filter(Boolean),
      },
      {
        '@type': 'VideoGame', '@id': `${SITE}/#game`, name: 'SpareForge', url: home,
        description: lang === 'de'
          ? 'Eigenständiges Pixel-Action-RPG als kostenlose Alpha mit LAN-Koop für bis zu 4 Spieler.'
          : 'Original pixel-art action RPG in free alpha with 4-player LAN co-op.',
        image: abs(lang === 'de' ? '/img/og-v2-de.jpg' : '/img/og-v2.jpg'),
        genre: ['Action RPG', 'Pixel art', 'Co-op'],
        gamePlatform: 'PC', operatingSystem: 'Windows',
        playMode: ['SinglePlayer', 'CoOp'],
        numberOfPlayers: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 4 },
        inLanguage: ['en', 'de', 'fr', 'es', 'it', 'pt-BR', 'pl', 'ru', 'tr', 'zh-CN', 'ja', 'ko'],
        publisher: { '@id': `${SITE}/#org` }, author: { '@id': `${SITE}/#org` },
        trailer: { '@id': `${SITE}/#video-trailer` },
      },
      video(TRAILER),
      ...SHORTS.map(video),
      {
        '@type': 'FAQPage', '@id': `${home}#faq`, inLanguage: lang,
        mainEntity: FAQ[lang].map((qa) => ({ '@type': 'Question', name: qa.q, acceptedAnswer: { '@type': 'Answer', text: qa.a } })),
      },
    ],
  };
}
