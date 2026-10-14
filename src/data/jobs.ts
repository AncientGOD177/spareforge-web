// Generated from SpareForge/data/jobs.json, data/skills.json and i18n/de.po (game text, not invented copy).
// ids are the game-internal ids; display names are what the game shows in each language.
export type L = { en: string; de: string };
export type Job = { id: string; tier: 0 | 1 | 2; parent: string; color: string; name: L; role: L; note: L; weapons: { en: string[]; de: string[] }; skills: { en: string[]; de: string[] } };

export const JOBS: Job[] = [
  {
    "id": "novice",
    "tier": 0,
    "parent": "",
    "color": "#c8c8c8",
    "name": {
      "en": "Wanderer",
      "de": "Wanderer"
    },
    "role": {
      "en": "Balanced start",
      "de": "Ausgewogener Start"
    },
    "note": {
      "en": "STR, AGI and DEX to hit harder and faster, some VIT to survive. Keep big investments for your first job (a stat reset is available in town).",
      "de": "STR, AGI und DEX für härtere und schnellere Treffer, etwas VIT zum Überleben. Spare große Investitionen für deinen ersten Job auf (in der Stadt ist ein Zurücksetzen möglich)."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Sword",
        "Mace",
        "Staff"
      ],
      "de": [
        "Dolch",
        "Schwert",
        "Streitkolben",
        "Stab"
      ]
    },
    "skills": {
      "en": [
        "Brisk Strike",
        "Pebble Sling",
        "Field Dressing"
      ],
      "de": [
        "Flinker Hieb",
        "Kieselschleuder",
        "Notverband"
      ]
    }
  },
  {
    "id": "swordsman",
    "tier": 1,
    "parent": "novice",
    "color": "#d9534f",
    "name": {
      "en": "Warrior",
      "de": "Krieger"
    },
    "role": {
      "en": "Melee bruiser",
      "de": "Nahkampfbrecher"
    },
    "note": {
      "en": "max STR for ATK and carry weight, high VIT for HP and DEF, some AGI for attack speed and dodge.",
      "de": "max. STR für ATK und Traglast, hohe VIT für HP und DEF, etwas AGI für Angriffstempo und Ausweichen."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Sword",
        "Spear",
        "Mace",
        "Axe"
      ],
      "de": [
        "Dolch",
        "Schwert",
        "Speer",
        "Streitkolben",
        "Axt"
      ]
    },
    "skills": {
      "en": [
        "Cinder Burst",
        "Challenge Roar",
        "Rending Thrust"
      ],
      "de": [
        "Ascheausbruch",
        "Herausforderndes Gebrüll",
        "Reißender Stoß"
      ]
    }
  },
  {
    "id": "mage",
    "tier": 1,
    "parent": "novice",
    "color": "#6a5acd",
    "name": {
      "en": "Arcanist",
      "de": "Arkanist"
    },
    "role": {
      "en": "Glass cannon",
      "de": "Glaskanone"
    },
    "note": {
      "en": "max INT for MATK, SP and staff ATK, high DEX for accuracy, some VIT so you survive a stray hit.",
      "de": "max. INT für MATK, SP und Stab-ATK, hohe DEX für Treffsicherheit, etwas VIT, damit du einen verirrten Treffer überlebst."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Staff"
      ],
      "de": [
        "Dolch",
        "Stab"
      ]
    },
    "skills": {
      "en": [
        "Frost Needle",
        "Storm Spark",
        "Shard Eruption"
      ],
      "de": [
        "Frostnadel",
        "Sturmfunke",
        "Splittereruption"
      ]
    }
  },
  {
    "id": "archer",
    "tier": 1,
    "parent": "novice",
    "color": "#5cb85c",
    "name": {
      "en": "Archer",
      "de": "Bogenschütze"
    },
    "role": {
      "en": "Ranged DPS",
      "de": "Fernkampf-DPS"
    },
    "note": {
      "en": "max DEX (bow ATK and HIT), high AGI for attack speed and dodge, a little LUK for crits.",
      "de": "max. DEX (Bogen-ATK und HIT), hohe AGI für Angriffstempo und Ausweichen, ein wenig LUK für Krits."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Bow"
      ],
      "de": [
        "Dolch",
        "Bogen"
      ]
    },
    "skills": {
      "en": [
        "Twin Arrow",
        "Arrow Squall",
        "Charged Arrow"
      ],
      "de": [
        "Zwillingspfeil",
        "Pfeilböe",
        "Kraftpfeil"
      ]
    }
  },
  {
    "id": "acolyte",
    "tier": 1,
    "parent": "novice",
    "color": "#f0e68c",
    "name": {
      "en": "Cleric",
      "de": "Kleriker"
    },
    "role": {
      "en": "Support healer",
      "de": "Unterstützender Heiler"
    },
    "note": {
      "en": "high INT for healing power and SP, high VIT to outlast the party, mid DEX for accuracy.",
      "de": "hohe INT für Heilkraft und SP, hohe VIT, um die Gruppe zu überdauern, mittlere DEX für Treffsicherheit."
    },
    "weapons": {
      "en": [
        "Mace",
        "Staff"
      ],
      "de": [
        "Streitkolben",
        "Stab"
      ]
    },
    "skills": {
      "en": [
        "Blessed Bolt",
        "Hallowed Burst",
        "Restore Soul"
      ],
      "de": [
        "Gesegneter Blitz",
        "Heiliger Ausbruch",
        "Seele zurückholen"
      ]
    }
  },
  {
    "id": "merchant",
    "tier": 1,
    "parent": "novice",
    "color": "#e8a33d",
    "name": {
      "en": "Tinker",
      "de": "Tüftler"
    },
    "role": {
      "en": "Trader-fighter",
      "de": "Händler-Kämpfer"
    },
    "note": {
      "en": "max STR for ATK and a huge weight limit, high VIT for HP, mid DEX for accuracy.",
      "de": "max. STR für ATK und eine riesige Traglast, hohe VIT für HP, mittlere DEX für Treffsicherheit."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Sword",
        "Mace",
        "Axe"
      ],
      "de": [
        "Dolch",
        "Schwert",
        "Streitkolben",
        "Axt"
      ]
    },
    "skills": {
      "en": [
        "Coin Barrage",
        "Haymaker Swing",
        "Crate Slam"
      ],
      "de": [
        "Münzhagel",
        "Wuchtschlag",
        "Kistenschlag"
      ]
    }
  },
  {
    "id": "thief",
    "tier": 1,
    "parent": "novice",
    "color": "#4a4a6a",
    "name": {
      "en": "Rogue",
      "de": "Schurke"
    },
    "role": {
      "en": "Evasive striker",
      "de": "Ausweichender Angreifer"
    },
    "note": {
      "en": "max AGI for FLEE and attack speed, high STR for damage, mid DEX for accuracy.",
      "de": "max. AGI für FLEE und Angriffstempo, hohe STR für Schaden, mittlere DEX für Treffsicherheit."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Sword",
        "Bow"
      ],
      "de": [
        "Dolch",
        "Schwert",
        "Bogen"
      ]
    },
    "skills": {
      "en": [
        "Venom Strike",
        "Throwing Knife",
        "Knife Fan"
      ],
      "de": [
        "Giftstich",
        "Wurfmesser",
        "Messerfächer"
      ]
    }
  },
  {
    "id": "knight",
    "tier": 2,
    "parent": "swordsman",
    "color": "#b22222",
    "name": {
      "en": "Vanguard",
      "de": "Vorkämpfer"
    },
    "role": {
      "en": "Front-line tank",
      "de": "Frontlinien-Tank"
    },
    "note": {
      "en": "max STR, high VIT to stand in the fray, AGI for ASPD; a little DEX keeps your hits landing.",
      "de": "max. STR, hohe VIT, um im Getümmel zu bestehen, AGI für ASPD; etwas DEX lässt deine Treffer sitzen."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Sword",
        "Spear",
        "Mace",
        "Axe"
      ],
      "de": [
        "Dolch",
        "Schwert",
        "Speer",
        "Streitkolben",
        "Axt"
      ]
    },
    "skills": {
      "en": [
        "Whirling Reaver",
        "Piercing Charge",
        "Spear Hurl"
      ],
      "de": [
        "Wirbelklinge",
        "Durchbohrender Ansturm",
        "Speerwurf"
      ]
    }
  },
  {
    "id": "wizard",
    "tier": 2,
    "parent": "mage",
    "color": "#483d8b",
    "name": {
      "en": "Sorcerer",
      "de": "Zauberer"
    },
    "role": {
      "en": "Area nuker",
      "de": "Flächenzauberer"
    },
    "note": {
      "en": "max INT for spell damage and SP, high DEX, mid VIT for HP. STR and AGI add almost nothing to spells.",
      "de": "max. INT für Zauberschaden und SP, hohe DEX, mittlere VIT für HP. STR und AGI bringen Zaubern fast nichts."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Staff"
      ],
      "de": [
        "Dolch",
        "Stab"
      ]
    },
    "skills": {
      "en": [
        "Starfall Rite",
        "Glacial Ring",
        "Tempest Field"
      ],
      "de": [
        "Sternenfall-Ritus",
        "Gletscherring",
        "Sturmfeld"
      ]
    }
  },
  {
    "id": "hunter",
    "tier": 2,
    "parent": "archer",
    "color": "#2e8b57",
    "name": {
      "en": "Ranger",
      "de": "Waldläufer"
    },
    "role": {
      "en": "Sniper",
      "de": "Scharfschütze"
    },
    "note": {
      "en": "max DEX, high AGI for rapid shots, a touch of VIT and LUK. Remember to carry arrows.",
      "de": "max. DEX, hohe AGI für schnelle Schüsse, eine Prise VIT und LUK. Denk daran, Pfeile mitzunehmen."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Bow"
      ],
      "de": [
        "Dolch",
        "Bogen"
      ]
    },
    "skills": {
      "en": [
        "Skyhook Talon",
        "Barbed Snare",
        "Tri-Shot"
      ],
      "de": [
        "Himmelsklaue",
        "Dornenfalle",
        "Dreifachschuss"
      ]
    }
  },
  {
    "id": "priest",
    "tier": 2,
    "parent": "acolyte",
    "color": "#fffacd",
    "name": {
      "en": "Luminary",
      "de": "Lichtbringer"
    },
    "role": {
      "en": "Battle priest",
      "de": "Kampfpriester"
    },
    "note": {
      "en": "high INT (heals, holy magic, SP), high VIT to survive the front line, mid DEX.",
      "de": "hohe INT (Heilung, heilige Magie, SP), hohe VIT, um die Front zu überstehen, mittlere DEX."
    },
    "weapons": {
      "en": [
        "Mace",
        "Staff"
      ],
      "de": [
        "Streitkolben",
        "Stab"
      ]
    },
    "skills": {
      "en": [
        "Greater Mending",
        "Sacred Lance",
        "Banishing Word"
      ],
      "de": [
        "Große Linderung",
        "Heilige Lanze",
        "Bannwort"
      ]
    }
  },
  {
    "id": "blacksmith",
    "tier": 2,
    "parent": "merchant",
    "color": "#cd7f32",
    "name": {
      "en": "Forgemaster",
      "de": "Schmiedemeister"
    },
    "role": {
      "en": "Forge brawler",
      "de": "Schmiede-Raufbold"
    },
    "note": {
      "en": "max STR, high VIT, mid DEX for reliable hits; a little AGI and LUK round it off.",
      "de": "max. STR, hohe VIT, mittlere DEX für verlässliche Treffer; etwas AGI und LUK runden es ab."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Sword",
        "Mace",
        "Axe"
      ],
      "de": [
        "Dolch",
        "Schwert",
        "Streitkolben",
        "Axt"
      ]
    },
    "skills": {
      "en": [
        "Anvil Quake",
        "Molten Hammer",
        "Slag Toss"
      ],
      "de": [
        "Amboss-Beben",
        "Glühender Hammer",
        "Schlackenwurf"
      ]
    }
  },
  {
    "id": "assassin",
    "tier": 2,
    "parent": "thief",
    "color": "#2f2f4f",
    "name": {
      "en": "Shadowblade",
      "de": "Schattenklinge"
    },
    "role": {
      "en": "Shadow blade",
      "de": "Schattenklinge"
    },
    "note": {
      "en": "max AGI to dodge almost everything and strike fast, high STR, mid DEX, some LUK for crits.",
      "de": "max. AGI, um fast allem auszuweichen und schnell zuzuschlagen, hohe STR, mittlere DEX, etwas LUK für Krits."
    },
    "weapons": {
      "en": [
        "Dagger",
        "Sword",
        "Bow"
      ],
      "de": [
        "Dolch",
        "Schwert",
        "Bogen"
      ]
    },
    "skills": {
      "en": [
        "Blade Flurry",
        "Venom Cloud",
        "Shadow Lunge"
      ],
      "de": [
        "Klingenwirbel",
        "Giftwolke",
        "Schattensprung"
      ]
    }
  }
];

export const byId = (id: string) => JOBS.find((j) => j.id === id)!;
export const NOVICE = byId('novice');
export const FIRST_JOBS = JOBS.filter((j) => j.tier === 1);
export const secondOf = (id: string) => JOBS.find((j) => j.parent === id && j.tier === 2)!;
/** First job change at Job Lv 10 with Master Orrin, second job at Job Lv 40. */
export const JOB_CHANGE = { first: 10, second: 40 } as const;
