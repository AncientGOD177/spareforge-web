import type { ImageMetadata } from 'astro';
import { MEDIA } from './media';
import trailerPoster from '../assets/posters/trailer.webp';
import glowPoster from '../assets/posters/short-glow.webp';
import vfxPoster from '../assets/posters/short-vfx.webp';
import questPoster from '../assets/posters/short-quest.webp';
import tutorialPoster from '../assets/posters/short-tutorial.webp';
import loopSkills from '../assets/posters/loop-skills.webp';
import loopLoot from '../assets/posters/loop-loot.webp';
import loopRefine from '../assets/posters/loop-refine.webp';
import loopBoss from '../assets/posters/loop-boss.webp';
import loopMounts from '../assets/posters/loop-mounts.webp';
import loopCoop from '../assets/posters/loop-coop.webp';

export type Source = { src: string; type: string; media?: string };
export type Video = {
  id: string;
  title: { en: string; de: string };
  duration: string; // ISO 8601, for VideoObject
  label: string; // m:ss
  poster: ImageMetadata;
  sources: Source[];
  aiVoice: boolean;
  uploadDate: string;
  description: { en: string; de: string };
};

export const HERO_LOOP = {
  desktop: [
    { src: `${MEDIA}/hero/hero-720.webm`, type: 'video/webm; codecs="av01.0.05M.10"' },
    { src: `${MEDIA}/hero/hero-720.mp4`, type: 'video/mp4' },
  ],
  mobile: [
    { src: `${MEDIA}/hero/hero-480.webm`, type: 'video/webm; codecs="av01.0.04M.10"' },
    { src: `${MEDIA}/hero/hero-480.mp4`, type: 'video/mp4' },
  ],
};

export const TRAILER: Video = {
  id: 'trailer',
  title: { en: 'SpareForge gameplay showcase (alpha)', de: 'SpareForge Gameplay-Showcase (Alpha)' },
  description: {
    en: 'Boss fights, classes, twenty regions, loot, mounts, quests, refining and LAN co-op, recorded in the alpha build.',
    de: 'Bosskämpfe, Klassen, zwanzig Gebiete, Beute, Reittiere, Quests, Verfeinern und LAN-Koop, aufgenommen im Alpha-Build.',
  },
  duration: 'PT1M21S',
  label: '1:20',
  poster: trailerPoster,
  sources: [
    { src: `${MEDIA}/trailer/trailer-720.mp4`, type: 'video/mp4', media: '(max-width: 900px)' },
    { src: `${MEDIA}/trailer/trailer-1080.mp4`, type: 'video/mp4' },
  ],
  aiVoice: false,
  uploadDate: '2026-10-06',
};

// Shorts carry an English AI narration with burned-in English subtitles (labelled on the page).
export const SHORTS: Video[] = [
  {
    id: 'plus10-glow', label: '0:29', duration: 'PT29S', poster: glowPoster, aiVoice: true, uploadDate: '2026-10-11',
    title: { en: 'Wait for +10: the refine glow', de: 'Warte auf +10: der Verfeinerungs-Glanz' },
    description: { en: 'A sword refined live from +0 to +10, glowing brighter at every level.', de: 'Ein Schwert wird live von +0 auf +10 verfeinert und leuchtet mit jeder Stufe stärker.' },
    sources: [{ src: `${MEDIA}/shorts/plus10-glow.mp4`, type: 'video/mp4' }],
  },
  {
    id: 'skill-vfx', label: '0:12', duration: 'PT12S', poster: vfxPoster, aiVoice: true, uploadDate: '2026-10-13',
    title: { en: 'Every skill got a glow-up', de: 'Jeder Skill hat neue Effekte' },
    description: { en: 'The new skill effects of update 0.1.6, one skill per second.', de: 'Die neuen Skill-Effekte aus Update 0.1.6, ein Skill pro Sekunde.' },
    sources: [{ src: `${MEDIA}/shorts/skill-vfx.mp4`, type: 'video/mp4' }],
  },
  {
    id: 'quest-guidance', label: '0:14', duration: 'PT14S', poster: questPoster, aiVoice: true, uploadDate: '2026-10-14',
    title: { en: 'Quest guidance: never get lost', de: 'Quest-Wegweiser: nie mehr verlaufen' },
    description: { en: 'The quest star on the minimap and world map leads you to every objective.', de: 'Der Quest-Stern auf Minimap und Weltkarte führt dich zu jedem Ziel.' },
    sources: [{ src: `${MEDIA}/shorts/quest-guidance.mp4`, type: 'video/mp4' }],
  },
  {
    id: 'tutorial', label: '0:19', duration: 'PT19S', poster: tutorialPoster, aiVoice: true, uploadDate: '2026-10-14',
    title: { en: 'New to the game: tutorial and Guide book', de: 'Neu im Spiel: Tutorial und Handbuch' },
    description: { en: 'The new-player tutorial and the Guide book you open with F1.', de: 'Das Einsteiger-Tutorial und das Handbuch, das du mit F1 öffnest.' },
    sources: [{ src: `${MEDIA}/shorts/tutorial.mp4`, type: 'video/mp4' }],
  },
];

export const LOOPS: Record<string, { poster: ImageMetadata; sources: Source[] }> = Object.fromEntries(
  ([['skills', loopSkills], ['loot', loopLoot], ['refine', loopRefine], ['boss', loopBoss], ['mounts', loopMounts], ['coop', loopCoop]] as const).map(
    ([id, poster]) => [id, {
      poster,
      sources: [
        { src: `${MEDIA}/loops/${id}.webm`, type: 'video/webm; codecs="av01.0.01M.10"' },
        { src: `${MEDIA}/loops/${id}.mp4`, type: 'video/mp4' },
      ],
    }],
  ),
);
