// Text alternatives for every video (WCAG 1.2.1 / 1.2.3): what is shown, plus the narration.
// Narration is the English AI voice from SpareForge_showcase_work/tiktok/lines_*.json, verbatim,
// up to where the site versions end (the social end cards are cut off). DE lines are translations.
type T = { summary: string; lines?: string[] };
export const TRANSCRIPTS: Record<string, { en: T; de: T }> = {
  trailer: {
    en: {
      summary: 'No narration; music and in-game sound. Opens on the Void Sovereign boss fight and the title screen, then on-screen chapter cards: character creation, classes and job change, real-time combat and skills (Vanguard, Ranger, Luminary), twenty regions from Verdant Field to Skyreach Citadel, loot in six rarity tiers, companions and mounts, main story and quests, the world map with waypoints, gear and refining, LAN co-op with up to four players, and the Storm Seraph Apex boss. Ends on the SpareForge alpha card.',
    },
    de: {
      summary: 'Keine Sprecherstimme; Musik und Spielsound. Beginnt mit dem Bosskampf gegen den Void Sovereign und dem Titelbildschirm, danach Kapitel-Einblendungen: Charaktererstellung, Klassen und Jobwechsel, Echtzeitkampf und Skills (Vorkämpfer, Waldläufer, Lichtbringer), zwanzig Gebiete von Verdant Field bis Skyreach Citadel, Beute in sechs Seltenheitsstufen, Begleiter und Reittiere, Hauptgeschichte und Quests, die Weltkarte mit Wegpunkten, Ausrüstung und Verfeinern, LAN-Koop mit bis zu vier Spielern und der Apex-Boss Storm Seraph. Endet mit der SpareForge-Alpha-Karte.',
    },
  },
  'plus10-glow': {
    en: {
      summary: 'A crowned hero in white armour refines a sword at the anvil from +0 to +10. Each level makes the blade glow brighter; at +7 it turns gold, two attempts fail, and +10 gets a shifting rainbow glow. The shield glows as well.',
      lines: ['Every refine makes your sword glow brighter. Wait for plus ten!', "Plus seven. Now it's gold.", 'Failed! It dropped a level.', 'Only a twenty percent chance for plus ten...', 'Again?! Come on...', 'PLUS TEN! Look at that glow!', 'And shields glow too.'],
    },
    de: {
      summary: 'Ein gekrönter Held in weißer Rüstung verfeinert am Amboss ein Schwert von +0 auf +10. Mit jeder Stufe leuchtet die Klinge stärker; bei +7 wird sie golden, zwei Versuche scheitern, und +10 bekommt einen schillernden Regenbogen-Glanz. Auch der Schild leuchtet.',
      lines: ['Jede Verfeinerung lässt dein Schwert heller leuchten. Warte auf plus zehn!', 'Plus sieben. Jetzt ist es golden.', 'Fehlschlag! Eine Stufe verloren.', 'Nur zwanzig Prozent Chance auf plus zehn …', 'Schon wieder?! Komm schon …', 'PLUS ZEHN! Sieh dir diesen Glanz an!', 'Und Schilde leuchten auch.'],
    },
  },
  'skill-vfx': {
    en: {
      summary: 'Fast cuts of the new skill effects from update 0.1.6: a frost needle shattering in slow motion, spinning blades, falling meteors, ice rings, lightning, holy light, a storm of coins and an anvil dropping from the sky on a group of monsters.',
      lines: ['I gave every skill a glow-up.', 'Spinning blades. Meteors. Ice rings. Lightning.', 'Holy light, a coin storm... and an anvil from the sky.'],
    },
    de: {
      summary: 'Schnelle Schnitte der neuen Skill-Effekte aus Update 0.1.6: eine Frostnadel, die in Zeitlupe zersplittert, wirbelnde Klingen, fallende Meteore, Eisringe, Blitze, heiliges Licht, ein Münzhagel und ein Amboss, der vom Himmel auf eine Monstergruppe fällt.',
      lines: ['Jeder Skill hat neue Effekte bekommen.', 'Wirbelnde Klingen. Meteore. Eisringe. Blitze.', 'Heiliges Licht, ein Münzhagel … und ein Amboss vom Himmel.'],
    },
  },
  'quest-guidance': {
    en: {
      summary: 'Quest guidance in Forge Town and the fields: an arrow at the minimap edge points to the objective, closer in a gold star and a dotted path appear, the quest tracker names the map to cross, and the world map draws the whole route.',
      lines: ["You'll never get lost in my game again.", 'Off the minimap, an arrow points the way.', 'Closer in: a gold star and a dotted path.', 'The tracker even says which map to cross.', 'And the world map draws the whole route.'],
    },
    de: {
      summary: 'Quest-Wegweiser in Forge Town und auf den Feldern: Ein Pfeil am Rand der Minimap zeigt zum Ziel, näher dran erscheinen ein goldener Stern und ein gepunkteter Weg, der Quest-Tracker nennt die Karte, durch die du musst, und die Weltkarte zeichnet die ganze Route.',
      lines: ['In meinem Spiel verläufst du dich nie wieder.', 'Außerhalb der Minimap zeigt ein Pfeil den Weg.', 'Näher dran: ein goldener Stern und ein gepunkteter Weg.', 'Der Tracker sagt sogar, durch welche Karte du musst.', 'Und die Weltkarte zeichnet die ganze Route.'],
    },
  },
  tutorial: {
    en: {
      summary: 'A new character starts in Forge Town: a welcome card explains the basics, arrows lead to Master Orrin, the + button spends stat points, the first fight is gentle, and the Guide book (F1) shows every job path.',
      lines: ["POV: you're new to the game.", 'A welcome card shows you around.', 'Arrows lead you straight to Master Orrin.', 'Hold plus to spend your stat points.', 'Your first fight starts gentle.', 'And the Guide book maps out every job path.'],
    },
    de: {
      summary: 'Ein neuer Charakter startet in Forge Town: Eine Willkommenskarte erklärt die Grundlagen, Pfeile führen zu Meister Orrin, mit dem +-Knopf verteilst du Statuspunkte, der erste Kampf ist sanft, und das Handbuch (F1) zeigt jeden Jobweg.',
      lines: ['POV: Du bist neu im Spiel.', 'Eine Willkommenskarte zeigt dir alles.', 'Pfeile führen dich direkt zu Meister Orrin.', 'Halte Plus gedrückt, um deine Statuspunkte zu verteilen.', 'Dein erster Kampf beginnt sanft.', 'Und das Handbuch zeigt jeden Jobweg.'],
    },
  },
};
