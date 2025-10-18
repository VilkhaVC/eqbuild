import type { Skill } from './types'

export const humanSkills: Skill[] = [
  // Knight — Active
  {
    id: 'human-knight-psychic-crash',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'active',
    name: 'Psychic Crash',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Strikes the target with a sword, dealing {dmg}% physical damage.',
          vars: { dmg: [156, 162, 168, 174, 180] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Strikes the target with a sword, dealing {dmg}% physical damage.',
          vars: { dmg: [189, 198, 207, 216, 225] },
        },
      },
    ],
  },
  {
    id: 'human-knight-assault-crash',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'active',
    name: 'Assault Crash',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Rapidly spins twice, attacking up to {n} nearby enemies, dealing {dmg}% physical damage 2 times.',
          vars: { n: 2, dmg: [84, 87, 90, 93, 98] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Rapidly spins twice, attacking up to {n} nearby enemies, dealing {dmg}% physical damage 2 times.',
          vars: { n: 3, dmg: [103, 106, 109, 121, 127] },
        },
      },
    ],
  },
  {
    id: 'human-knight-shield-push',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'active',
    name: 'Shield Push',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Charges the target with a shield, dealing {dmg}% physical damage.',
          vars: { dmg: [159, 165, 171, 178, 185] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Charges the target with a shield for 3 meters, dealing {dmg}% physical damage.',
          vars: { dmg: [195, 205, 215, 226, 238] },
        },
      },
    ],
  },
  {
    id: 'human-knight-rush',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'active',
    name: 'Rush',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Charges toward the target, dealing {dmg}% physical damage, and reduces movement speed by 50% for 2 sec.',
          vars: { dmg: [140, 147, 154, 161, 168] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Charges toward the target, dealing {dmg}% physical damage, and reduces movement speed by 50% for 3 sec.',
          vars: { dmg: [178, 188, 200, 212, 224] },
        },
      },
    ],
  },
  {
    id: 'human-knight-shield-crash',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'active',
    name: 'Shield Crash',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 19,
          template: 'Strikes the ground with the shield, dealing {dmg}% physical damage to up to {n} nearby enemies, and deals 20% physical damage every 1 sec for 3 sec due to bleeding.',
          vars: { dmg: [91, 95, 99, 140, 145], n: 3 },
        },
      },
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 19,
          template: 'Strikes the ground with the shield, dealing {dmg}% physical damage to up to {n} nearby enemies, and deals 25% physical damage every 1 sec for 3 sec due to bleeding.',
          vars: { dmg: [116, 121, 130, 140, 145], n: 5 },
        },
      },
    ],
  },

  // Knight — Passive
  {
    id: 'human-knight-rising-might',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'passive',
    name: 'Rising Might',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases Strength by {val}.',
          vars: { val: { base: 2, step: 2 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases Strength by {val}.',
          vars: { val: { base: 12, step: 2 } },
        },
      },
    ],
  },
  {
    id: 'human-knight-protection',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'passive',
    name: 'Protection',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases physical defense by {pdef}.',
          vars: { pdef: [10, 12, 14, 16, 18] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases physical defense by {pdef} and magical defense by {mdef}.',
          vars: { pdef: [30, 32, 34, 36, 40], mdef: [30, 30, 30, 36, 40] },
        },
      },
    ],
  },
  {
    id: 'human-knight-bleeding',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'passive',
    name: 'Bleeding',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Normal attacks have a 20% chance to inflict bleeding for 3 sec, dealing {dot}% physical damage every 1 sec.',
          vars: { dot: [15, 16, 17, 18, 19] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Normal attacks have a 30% chance to inflict bleeding for 3 sec, dealing {dot}% physical damage every 1 sec.',
          vars: { dot: [20, 21, 22, 23, 25] },
        },
      },
    ],
  },
  {
    id: 'human-knight-bleeding-strike',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'passive',
    name: 'Bleeding Strike',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases damage dealt to bleeding enemies by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases damage dealt to bleeding enemies by {pct}%.',
          vars: { pct: [20, 22, 24, 26, 30] },
        },
      },
    ],
  },
  {
    id: 'human-knight-attack-boost',
    classId: 'Human',
    subclassId: 'Knight',
    type: 'passive',
    name: 'Attack Boost',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases attack speed by {pct}%.',
          vars: { pct: [2, 2.5, 3, 3.5, 4] },
        },
      },
      {
        grade: 'Rare',
        gen: {
          template: 'Increases attack speed by {pct}%.',
          vars: { pct: [6, 7, 8, 9, 10] },
        },
      },
    ],
  },

  // Guardian — Active
  {
    id: 'human-guardian-war-cry',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'active',
    name: 'War Cry',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 18,
          template: 'Deals {dmg}% physical damage to {n} nearby enemies and reduces their physical defense by {pdef} for 5 sec.',
          vars: { dmg: [169, 178, 188, 198, 208], n: 3, pdef: [40, 45, 50, 55, 60] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 18,
          template: 'Deals {dmg}% physical damage to {n} nearby enemies and reduces physical and magical defense by {both} for 10 sec.',
          vars: { dmg: [223, 239, 255, 271, 287], n: 5, both: [70, 75, 80, 85, 100] },
        },
      },
    ],
  },
  {
    id: 'human-guardian-charge',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'active',
    name: 'Charge',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Attacks the target with a shield, dealing {dmg}% physical damage and reducing movement speed by 50% for {sec} sec.',
          vars: { dmg: [186, 197, 207, 218, 229], sec: 3 },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Attacks the target with a shield, dealing {dmg}% physical damage and reducing movement speed by 50% for {sec} sec.',
          vars: { dmg: [244, 259, 277, 296, 316], sec: 5 },
        },
      },
    ],
  },
  {
    id: 'human-guardian-crazy-swing',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'active',
    name: 'Crazy Swing',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Increases attack speed by {as}% and physical critical hit rate by {pcr}% for 10 sec.',
          vars: { as: [20, 21, 22, 23, 24], pcr: [5, 6, 7, 8, 9] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Increases attack speed by {as}% and physical critical hit rate by {pcr}% for 10 sec.',
          vars: { as: [40, 42, 44, 46, 50], pcr: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },
  {
    id: 'human-guardian-knight-symbol',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'active',
    name: 'Knight Symbol',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Attacks the target with a 100% increased critical hit rate, dealing {dmg}% physical damage.',
          vars: { dmg: [186, 197, 207, 218, 229] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Attacks the target with a 100% increased critical hit rate, dealing {dmg}% physical damage.',
          vars: { dmg: [244, 259, 277, 296, 316] },
        },
      },
    ],
  },
  {
    id: 'human-guardian-stunner',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'active',
    name: 'Stunner',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Charges at the target to deal {dmg}% physical damage and has a {chance}% chance to stun for 2 sec.',
          vars: { dmg: [196, 207, 220, 233, 246], chance: [55, 60, 65, 70, 75] },
        },
      },
    ],
  },

  // Guardian — Passive
  {
    id: 'human-guardian-sword-mastery',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'passive',
    name: 'Sword Mastery',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases physical penetration by {val}.',
          vars: { val: [20, 22, 24, 26, 28] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases physical penetration by {val}.',
          vars: { val: [40, 42, 44, 46, 50] },
        },
      },
    ],
  },
  {
    id: 'human-guardian-quick-flow',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'passive',
    name: 'Quick Flow',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Dexterity by {val}.',
          vars: { val: { base: 5, step: 5 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Dexterity by {val}.',
          vars: { val: { base: 30, step: 5 } },
        },
      },
    ],
  },
  {
    id: 'human-guardian-rapid-assault',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'passive',
    name: 'Rapid Assault',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases physical damage by {pct}%.',
          vars: { pct: [1, 2, 3, 4, 5] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases physical damage by {pct}%.',
          vars: { pct: [6, 7, 8, 9, 10] },
        },
      },
    ],
  },
  {
    id: 'human-guardian-concentrate',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'passive',
    name: 'Concentrate',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases physical critical hit chance by {pct}%.',
          vars: { pct: [5, 5.5, 6, 6.5, 7] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases physical critical hit chance by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },
  {
    id: 'human-guardian-invoke',
    classId: 'Human',
    subclassId: 'Guardian',
    type: 'passive',
    name: 'Invoke',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases damage dealt by {pct}% of Dexterity.',
          vars: { pct: [260, 270, 280, 290, 300] },
        },
      },
    ],
  },

  // Defender — Active
  {
    id: 'human-defender-shout',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'active',
    name: 'Shout',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 30,
          template: 'Increases the physical and magical damage dealt by {party} party members by {dmgp}% for 30 sec.',
          vars: { party: 5, dmgp: [2, 4, 6, 8, 10] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 30,
          template: 'Increases the physical and magical damage dealt by {party} party members by {dmgp}% for 30 sec, increases attack speed by {as}%, and silence & freeze resistance by {res}%.',
          vars: { party: 5, dmgp: [12, 14, 16, 18, 20], as: [2, 4, 6, 8, 10], res: [10, 15, 20, 25, 30] },
        },
      },
    ],
  },
  {
    id: 'human-defender-drawing-shield',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'active',
    name: 'Drawing Shield',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Throws a shield to deal {dmg}% physical damage, with a {chance}% chance to stun the target for 1 sec.',
          vars: { dmg: [190, 201, 212, 223, 234], chance: [35, 39, 43, 47, 50] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Throws a shield to deal {dmg}% physical damage, with a {chance}% chance to stun the target for 1 sec.',
          vars: { dmg: [250, 266, 284, 304, 324], chance: [55, 60, 65, 70, 75] },
        },
      },
    ],
  },
  {
    id: 'human-defender-extinction',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'active',
    name: 'Extinction',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Slams the ground to deal {dmg}% physical damage to {n} nearby enemies, with a {chance}% chance to knock them down for {sec} sec.',
          vars: { dmg: [174, 183, 192, 203, 214], n: 3, chance: [35, 39, 43, 47, 50], sec: [1.5, 1.6, 1.7, 1.8, 1.9] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Slams the ground to deal {dmg}% physical damage to {n} nearby enemies, with a {chance}% chance to knock them down for {sec} sec.',
          vars: { dmg: [230, 246, 262, 278, 294], n: 5, chance: [55, 60, 65, 70, 75], sec: [2, 2.2, 2.4, 2.6, 3] },
        },
      },
    ],
  },
  {
    id: 'human-defender-gravity-core',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'active',
    name: 'Gravity Core',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Deals {dmg}% damage to {n} nearby enemies, reduces their movement speed by 50% for 2 sec, and pulls them forward with a {chance}% chance.',
          vars: { dmg: [174, 183, 192, 203, 214], n: 3, chance: [35, 39, 43, 47, 50] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Deals {dmg}% damage to {n} nearby enemies, reduces their movement speed by 50% for 3 sec, and pulls them forward with a {chance}% chance.',
          vars: { dmg: [230, 246, 262, 278, 296], n: 5, chance: [55, 60, 65, 70, 75] },
        },
      },
    ],
  },
  {
    id: 'human-defender-stone-skin',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'active',
    name: 'Stone Skin',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 30,
          template: 'Grants immunity to all damage for {sec} sec.',
          vars: { sec: [2.5, 2.7, 2.9, 3.2, 3.4] },
        },
      },
    ],
  },

  // Defender — Passive
  {
    id: 'human-defender-shield-mastery',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'passive',
    name: 'Shield Mastery',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases physical penetration resistance by {val}.',
          vars: { val: [20, 22, 24, 26, 28] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases physical and magical penetration resistance by {val}.',
          vars: { val: [40, 42, 44, 46, 50] },
        },
      },
    ],
  },
  {
    id: 'human-defender-eternal-stamina',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'passive',
    name: 'Eternal Stamina',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases max HP by {pct}%.',
          vars: { pct: [5, 6, 7, 8, 9] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases max HP by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },
  {
    id: 'human-defender-regeneration',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'passive',
    name: 'Regeneration',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases natural HP recovery by {hp}.',
          vars: { hp: [100, 150, 200, 250, 300] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases natural HP recovery by {hp} and MP recovery by {mp}.',
          vars: { hp: 300, mp: [100, 150, 200, 250, 300] },
        },
      },
    ],
  },
  {
    id: 'human-defender-rohas-bless',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'passive',
    name: 'Roha’s Bless',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases boss monster defense by {boss}.',
          vars: { boss: [50, 60, 70, 80, 100] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases boss monster defense by {boss} and PVP defense by {pvp}.',
          vars: { boss: 100, pvp: [50, 60, 70, 80, 100] },
        },
      },
    ],
  },
  {
    id: 'human-defender-sentinel-guard',
    classId: 'Human',
    subclassId: 'Defender',
    type: 'passive',
    name: 'Sentinel Guard',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases physical damage by {inc}% and reduces physical damage received by {red}%.',
          vars: { inc: [1, 2, 3, 4, 5], red: [4, 5, 6, 8, 10] },
        },
      },
    ],
  },
]
