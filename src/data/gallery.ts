import type { ImageMetadata } from 'astro';
import emberDrake from '../assets/gallery/ember-drake.webp';
import voidSovereign from '../assets/gallery/void-sovereign.webp';
import stormSeraph from '../assets/gallery/storm-seraph.webp';
import knightWhirl from '../assets/gallery/knight-whirl.webp';
import luminary from '../assets/gallery/luminary-judgment.webp';
import ranger from '../assets/gallery/ranger-frostveil.webp';
import lanCoop from '../assets/gallery/lan-coop.webp';
import lootRain from '../assets/gallery/loot-rain.webp';
import refine from '../assets/gallery/refine-anvil.webp';
import worldMap from '../assets/gallery/world-map.webp';
import gloomcap from '../assets/gallery/gloomcap.webp';
import gullwind from '../assets/gallery/gullwind-mount.webp';

export type Tag = 'classes' | 'bosses' | 'regions' | 'loot' | 'coop';
export type Shot = {
  id: string;
  img: ImageMetadata;
  tags: Tag[];
  wide?: boolean;
  place: string;
  title: { en: string; de: string };
  alt: { en: string; de: string };
};

// Every screenshot is a real frame from the alpha build (store captures and showcase takes).
export const SHOTS: Shot[] = [
  { id: 'ember-drake', img: emberDrake, tags: ['bosses', 'coop'], wide: true, place: 'Ember Depths',
    title: { en: 'A party against a fire drake', de: 'Eine Gruppe gegen einen Feuerdrachen' },
    alt: { en: 'Three heroes fight a red drake inside a burning ring of fire runes on dark volcanic ground', de: 'Drei Helden kämpfen auf dunklem Vulkanboden gegen einen roten Drachen in einem brennenden Runenkreis' } },
  { id: 'void-sovereign', img: voidSovereign, tags: ['bosses'], place: 'Void Sanctum',
    title: { en: 'The Void Sovereign', de: 'Der Void Sovereign' },
    alt: { en: 'A four-armed purple boss casts a huge violet ring around a lone hero in the Void Sanctum', de: 'Ein vierarmiger violetter Boss wirkt einen riesigen Ring um eine einzelne Heldin im Void Sanctum' } },
  { id: 'storm-seraph', img: stormSeraph, tags: ['bosses'], place: 'Skyreach Citadel',
    title: { en: 'Apex boss: Storm Seraph', de: 'Apex-Boss: Storm Seraph' },
    alt: { en: 'A winged Storm Seraph appears on a golden path between white statues, announced by a red banner', de: 'Ein geflügelter Storm Seraph erscheint auf einem goldenen Weg zwischen weißen Statuen, angekündigt von einem roten Banner' } },
  { id: 'knight-whirl', img: knightWhirl, tags: ['classes'], wide: true, place: 'Whisper Woods',
    title: { en: 'Vanguard: Whirling Reaver', de: 'Vorkämpfer: Wirbelklinge' },
    alt: { en: 'A Vanguard spins a white blade vortex through a wolf pack in a pine forest, damage numbers flying', de: 'Ein Vorkämpfer wirbelt einen weißen Klingenstrudel durch ein Wolfsrudel im Kiefernwald, Schadenszahlen fliegen' } },
  { id: 'luminary-judgment', img: luminary, tags: ['classes'], place: 'Dreadmarch Catacombs',
    title: { en: 'Luminary: Radiant Judgment', de: 'Lichtbringer: Strahlendes Urteil' },
    alt: { en: 'A Luminary calls down a glowing holy sigil on undead in the dark Dreadmarch Catacombs', de: 'Eine Lichtbringerin ruft in den dunklen Dreadmarch Catacombs ein leuchtendes heiliges Siegel auf Untote herab' } },
  { id: 'ranger-frostveil', img: ranger, tags: ['classes', 'regions'], place: 'Frostveil Pass',
    title: { en: 'Ranger in Frostveil Pass', de: 'Waldläuferin im Frostveil Pass' },
    alt: { en: 'A Ranger fights snow wolves and a giant spider on a snowy mountain pass', de: 'Eine Waldläuferin kämpft auf einem verschneiten Bergpass gegen Schneewölfe und eine Riesenspinne' } },
  { id: 'lan-coop', img: lanCoop, tags: ['coop'], place: 'Whisper Woods',
    title: { en: 'LAN co-op party', de: 'LAN-Koop-Gruppe' },
    alt: { en: 'Three players in a LAN party fight together in a forest, an orange skill burst between them', de: 'Drei Spieler einer LAN-Gruppe kämpfen gemeinsam im Wald, zwischen ihnen ein orangefarbener Skill-Effekt' } },
  { id: 'loot-rain', img: lootRain, tags: ['loot'], place: 'Amberglen Canyon',
    title: { en: 'Drops on the canyon floor', de: 'Beute am Canyonboden' },
    alt: { en: 'Loot scatters across an orange canyon after a fight, between autumn trees and boulders', de: 'Beute verteilt sich nach einem Kampf in einem orangen Canyon zwischen Herbstbäumen und Felsen' } },
  { id: 'refine-anvil', img: refine, tags: ['loot'], place: 'Forge Town',
    title: { en: 'Refining at the anvil', de: 'Verfeinern am Amboss' },
    alt: { en: 'The blacksmith window refines a greatsword from +3 to +4 next to the inventory in Forge Town', de: 'Das Schmiedefenster verfeinert ein Großschwert von +3 auf +4, daneben das Inventar in Forge Town' } },
  { id: 'world-map', img: worldMap, tags: ['regions'], wide: true, place: 'The Realm of SpareForge',
    title: { en: 'The hand-painted world map', de: 'Die handgemalte Weltkarte' },
    alt: { en: 'A parchment world map with regions, level ranges and waypoints, from Forge Town to Skyreach Citadel', de: 'Eine Pergament-Weltkarte mit Gebieten, Levelbereichen und Wegpunkten, von Forge Town bis Skyreach Citadel' } },
  { id: 'gloomcap', img: gloomcap, tags: ['regions'], place: 'Gloomcap Mirewood',
    title: { en: 'Gloomcap Mirewood', de: 'Gloomcap Mirewood' },
    alt: { en: 'A hero walks through a swamp of giant purple and teal mushrooms', de: 'Ein Held läuft durch einen Sumpf voller riesiger lila und türkiser Pilze' } },
  { id: 'gullwind-mount', img: gullwind, tags: ['regions'], place: 'Gullwind Coast',
    title: { en: 'Riding along Gullwind Coast', de: 'Unterwegs an der Gullwind Coast' },
    alt: { en: 'A mounted hero crosses a sandy coast with palm trees, tide pools and a waypoint obelisk', de: 'Eine Heldin reitet über eine sandige Küste mit Palmen, Gezeitentümpeln und einem Wegpunkt-Obelisken' } },
];
