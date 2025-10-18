import type { Skill } from './types'

export const dekanSkills: Skill[] = [
  {
    id: 'dekan-dragon-fighter-drake-tail',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'active',
    name: 'Drake Tail',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 10,
          template: 'Deals {dmg}% damage to the target. (Zhen: Physical, Charr: Magical)',
          vars: { dmg: [173, 175, 178, 181, 184] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 10,
          template: 'Deals {dmg}% damage to the target. (Zhen: Physical, Charr: Magical)',
          vars: { dmg: [188, 193, 198, 203, 208] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-fighter-drake-fear',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'active',
    name: 'Drake Fear',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 18,
          template: 'Deals {dmg}% damage to the target, reduces attack and movement speed by 30% for 2 sec.',
          vars: { dmg: [260, 264, 268, 272, 277] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 18,
          template: 'Deals {dmg}% damage to the target, reduces attack and movement speed by 50% for 2 sec.',
          vars: { dmg: [284, 291, 298, 305, 312] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-separation',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'active',
    name: 'Separation',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 40,
          template: 'Separates weapon for 30 sec, increasing Magical Damage by {md}% and Magic Critical Rate by {mcr}%.',
          vars: { md: { base: 5, step: 1 }, mcr: { base: 5, step: 1 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 40,
          template: 'Separates weapon for 30 sec, increasing Magical Damage by {md}% and Magic Critical Rate by {mcr}%.',
          vars: { md: [15, 16, 17, 18, 20], mcr: [15, 16, 17, 18, 20] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-evolve',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'active',
    name: 'Evolve',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 40,
          template: 'Transforms into a dragon for 30 sec, increasing Physical Damage by {pd}%, Attack Speed by {as}% and Movement Speed by {ms}%.',
          vars: { pd: { base: 5, step: 1 }, as: [20, 22, 24, 26, 28], ms: { base: 1, step: 1 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 40,
          template: 'Transforms into a dragon for 30 sec, increasing Physical Damage by {pd}%, Attack Speed by {as}% and Movement Speed by {ms}%.',
          vars: { pd: [15, 16, 17, 18, 20], as: [30, 35, 40, 45, 50], ms: { base: 6, step: 1 } },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-fighter-prey',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'active',
    name: 'Prey',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Consumes 3% HP to recover {heal}% of your max HP.',
          vars: { heal: { base: 5, step: 0.5 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Consumes 5% HP to recover {heal}% of your max HP.',
          vars: { heal: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-fighter-weapon-counter',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'active',
    name: 'Weapon Counter',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 8,
          template: 'Deals {dmg}% damage to nearby enemies. (Zhen: Physical, Charr: Magical)',
          vars: { dmg: { base: 204, step: 5 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 8,
          template: 'Deals {dmg}% damage to nearby enemies. (Zhen: Physical, Charr: Magical)',
          vars: { dmg: [232, 240, 248, 256, 265] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-fighter-forefoot-swing',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'active',
    name: 'Forefoot Swing',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Attacks with {hppct}% increased Summoned HP. (Zhen: Physical, Charr: Magical)',
          vars: { hppct: [99, 104, 110, 116, 122] },
        },
      },
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Attacks with {hppct}% increased Summoned HP. (Zhen: Physical, Charr: Magical)',
          vars: { hppct: [131, 140, 149, 158, 168] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-fighter-blue-defense',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'passive',
    name: 'Blue Defense',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases Vitality by {vit}.',
          vars: { vit: { base: 2, step: 2 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases Vitality by {vit}.',
          vars: { vit: { base: 12, step: 2 } },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-fighter-dragon-skin',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'passive',
    name: 'Dragon Skin',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases Physical/Magical Defense by {val}.',
          vars: { val: { base: 10, step: 2 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases Physical/Magical Defense by {val}.',
          vars: { val: [30, 32, 34, 36, 40] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-fighter-dragon-power',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'passive',
    name: 'Dragon Power',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases Physical/Magical Attack by {val}.',
          vars: { val: { base: 10, step: 2 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases Physical/Magical Attack by {val}.',
          vars: { val: [30, 32, 34, 36, 40] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-fighter-critical-immunity',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'passive',
    name: 'Critical Immunity',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Reduces Physical/Magical Critical Damage by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Reduces Physical/Magical Critical Damage by {pct}%.',
          vars: { pct: [20, 21, 22, 23, 25] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-fighter-blood-effect',
    classId: 'Dekan',
    subclassId: 'Dragon Fighter',
    type: 'passive',
    name: 'Blood Effect',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases Physical/Magical Critical Rate by {pct}%.',
          vars: { pct: { base: 5, step: 0.5 } },
        },
      },
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Physical/Magical Critical Rate by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-divide-soul',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'active',
    name: 'Divide Soul',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Unleashes a sweeping AoE attack by breaking the carapace, dealing {dmg}% of Magic Attack damage. Reduces Movement Speed by 30% for 3 sec.',
          vars: { dmg: [174, 179, 185, 191, 197] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Unleashes a sweeping AoE attack by breaking the carapace, dealing {dmg}% of Magic Attack damage. Reduces Movement Speed by 50% for 5 sec.',
          vars: { dmg: [206, 215, 224, 233, 243] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-penetrate',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'active',
    name: 'Penetrate',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Attacks the target, dealing {dmg}% Magical Damage.',
          vars: { dmg: [217, 224, 231, 238, 246] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Attacks the target, dealing {dmg}% Magical Damage.',
          vars: { dmg: [257, 268, 280, 292, 304] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-heavy-wave',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'active',
    name: 'Heavy Wave',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Attacks the target and nearby enemies, dealing {dmg}% Magical Damage, and reduces casting speed by 20% for 3 sec.',
          vars: { dmg: [234, 241, 249, 257, 265] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Attacks the target and nearby enemies, dealing {dmg}% Magical Damage, and reduces casting speed by 30% for 5 sec.',
          vars: { dmg: [277, 289, 301, 314, 327] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-wide-forefoot-swing',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'active',
    name: 'Wide Forefoot Swing',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Deals {dmg}% Magical Damage to nearby enemies, with a {taunt}% chance to taunt them.',
          vars: { dmg: { base: 175, step: 10 }, taunt: [35, 39, 43, 47, 50] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-charr-mastery',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'passive',
    name: 'Charr Mastery',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Magic Penetration by {val}.',
          vars: { val: { base: 20, step: 2 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Magic Penetration by {val}.',
          vars: { val: { base: 40, step: 2 } },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-blue-intelligence',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'passive',
    name: 'Blue Intelligence',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Intelligence by {val}.',
          vars: { val: { base: 5, step: 5 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Intelligence by {val}.',
          vars: { val: { base: 30, step: 5 } },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-dragon-heart',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'passive',
    name: 'Dragon Heart',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Reduces Mana Consumption by {pct}%.',
          vars: { pct: [8, 8.5, 9, 9.5, 10] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Reduces Mana Consumption by {pct}%.',
          vars: { pct: { base: 11, step: 1 } },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-wild-aggression',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'passive',
    name: 'Wild Aggression',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Common Monster Damage by {cmd}%, Magic Critical Rate by {mcr}%.',
          vars: { cmd: [3, 3.5, 4, 4.5, 5], mcr: [3, 3.5, 4, 4.5, 5] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Common Monster Damage by {cmd}%, Magic Critical Rate by {mcr}%.',
          vars: { cmd: [6, 7.5, 8, 8.5, 10], mcr: [6, 7.5, 8, 8.5, 10] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-sage-mystic-surge',
    classId: 'Dekan',
    subclassId: 'Dragon Sage',
    type: 'passive',
    name: 'Mystic Surge',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Magic Critical Damage by {pct}%.',
          vars: { pct: { base: 20, step: 5 } },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-breath',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'active',
    name: 'Breath',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Deals {dmg}% Physical damage to the target.',
          vars: { dmg: [223, 227, 231, 235, 239] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Deals {dmg}% Physical damage to the target.',
          vars: { dmg: [244, 249, 256, 263, 272] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-death-flow',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'active',
    name: 'Death Flow',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Deals {dmg}% physical damage to the target and reduces movement speed by 30% for 3 sec.',
          vars: { dmg: [204, 210, 216, 223, 230] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Deals {dmg}% physical damage to the target and reduces movement speed by 50% for 5 sec.',
          vars: { dmg: [241, 252, 263, 275, 287] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-taunt',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'active',
    name: 'Taunt',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 10,
          template: 'Deals {dmg}% physical damage to the target, with a {chance}% chance to stun for 1 sec.',
          vars: { dmg: [204, 210, 217, 224, 231], chance: [35, 39, 43, 47, 50] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 10,
          template: 'Deals {dmg}% physical damage to the target, with a {chance}% chance to stun for 1 sec.',
          vars: { dmg: [242, 253, 264, 275, 286], chance: [55, 60, 65, 70, 75] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-double-forefoot-swing',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'active',
    name: 'Double Forefoot Swing',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Deals {pct}% increased damage based on Summoned HP, attacking 2 times.',
          vars: { pct: [116, 120, 124, 128, 134] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-zen-mastery',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'passive',
    name: 'Zen Mastery',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Physical Penetration by {val}',
          vars: { val: { base: 5, step: 5 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Physical Penetration by {val}',
          vars: { val: { base: 30, step: 5 } },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-dragon-might',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'passive',
    name: 'Dragon Might',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Strength by {val}',
          vars: { val: { base: 5, step: 5 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Strength by {val}',
          vars: { val: { base: 30, step: 5 } },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-extricate',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'passive',
    name: 'Extricate',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'When using Prey, Status Resistance increases by {sr}% and Physical Critical Chance increases by {pcc}% for {sec} sec',
          vars: { sr: [30, 35, 40, 45, 50], pcc: [5, 6, 7, 8, 9], sec: [5, 6, 7, 8, 9] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'When using Prey, Status Resistance increases by {sr}% and Physical Critical Chance increases by {pcc}% for {sec} sec',
          vars: { sr: [55, 60, 65, 70, 80], pcc: [10, 11, 12, 13, 15], sec: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-death-chain',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'passive',
    name: 'Death Chain',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'On normal attack, {chance}% chance to deal additional {dmg}% Physical Damage',
          vars: { chance: [20, 21, 22, 23, 24], dmg: [20, 21, 22, 23, 24] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'On normal attack, {chance}% chance to deal additional {dmg}% Physical Damage',
          vars: { chance: [30, 35, 40, 45, 50], dmg: [30, 35, 40, 45, 50] },
        },
      },
    ],
  },
  {
    id: 'dekan-dragon-knight-sudden-death',
    classId: 'Dekan',
    subclassId: 'Dragon Knight',
    type: 'passive',
    name: 'Sudden Death',
    sourceRef: 'https://community.withhive.com/rohan2global/en/board/15/21',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'On attack, increases damage by {pct}% of Vitality.',
          vars: { pct: { base: 260, step: 10 } },
        },
      },
    ],
  },
]
