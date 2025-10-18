import type { Skill } from './types'

export const halfElfSkills: Skill[] = [
  // Archer — Active
  {
    id: 'half-elf-archer-psychic-pierce',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'active',
    name: 'Psychic Pierce',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Fires a flaming arrow, dealing {dmg}% physical damage to the target.',
          vars: { dmg: [169, 176, 183, 190, 197] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Fires a flaming arrow, dealing {dmg}% physical damage to the target.',
          vars: { dmg: [208, 219, 230, 242, 254] },
        },
      },
    ],
  },
  {
    id: 'half-elf-archer-double-strike',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'active',
    name: 'Double Strike',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Shoots two arrows mid-air, each dealing {dmg}% physical damage.',
          vars: { dmg: [84, 87, 90, 94, 98] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Shoots two arrows mid-air, each dealing {dmg}% physical damage.',
          vars: { dmg: [103, 107, 112, 121, 127] },
        },
      },
    ],
  },
  {
    id: 'half-elf-archer-brandish-kick',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'active',
    name: 'Brandish Kick',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Spin kick deals {dmg}% physical damage to the target and knocks back 5M.',
          vars: { dmg: [120, 125, 130, 135, 140] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Spin kick deals {dmg}% physical damage to the target and knocks back 5M.',
          vars: { dmg: [148, 156, 164, 172, 180] },
        },
      },
    ],
  },
  {
    id: 'half-elf-archer-ensnare-shot',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'active',
    name: 'Ensnare Shot',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Fire an arrow dealing {dmg}% physical damage, reducing the movement speed of affected enemies by 30% for 2 sec.',
          vars: { dmg: [184, 193, 202, 211, 220] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Fire an arrow dealing {dmg}% physical damage, reducing the movement speed of affected enemies by 50% for 2 sec.',
          vars: { dmg: [234, 249, 264, 279, 294] },
        },
      },
    ],
  },
  {
    id: 'half-elf-archer-root-pierce',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'active',
    name: 'Root Pierce',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 21,
          template: 'Fire an arrow to deal {dmg}% physical damage, with a {chance}% chance to inflict root status for {sec} sec.',
          vars: { dmg: [184, 193, 202, 211, 220], chance: [20, 23, 26, 29, 32], sec: [1, 1.2, 1.4, 1.6, 1.8] },
        },
      },
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 21,
          template: 'Fire an arrow to deal {dmg}% physical damage, with a {chance}% chance to inflict root status for {sec} sec.',
          vars: { dmg: [234, 249, 264, 279, 294], chance: [35, 39, 43, 47, 50], sec: [2, 2.2, 2.4, 2.6, 3] },
        },
      },
    ],
  },

  // Archer — Passive
  {
    id: 'half-elf-archer-enchant-arrow',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'passive',
    name: 'Enchant Arrow',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases physical attack by {val}.',
          vars: { val: { base: 10, step: 2 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases physical attack by {val}.',
          vars: { val: [30, 32, 34, 36, 40] },
        },
      },
    ],
  },
  {
    id: 'half-elf-archer-lethal-pierce',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'passive',
    name: 'Lethal Pierce',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases critical hit chance of Psychic Pierce by {pct}%.',
          vars: { pct: [20, 25, 30, 35, 40] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases critical hit chance of Psychic Pierce by {pct}%.',
          vars: { pct: [50, 60, 70, 80, 100] },
        },
      },
    ],
  },
  {
    id: 'half-elf-archer-heartseeker',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'passive',
    name: 'Heartseeker',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases physical penetration by {val}.',
          vars: { val: { base: 10, step: 2 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases physical penetration by {val}.',
          vars: { val: [30, 32, 34, 36, 40] },
        },
      },
    ],
  },
  {
    id: 'half-elf-archer-sprint',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'passive',
    name: 'Sprint',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases movement speed by {pct}%.',
          vars: { pct: [1, 1.5, 2, 2.5, 3] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases movement speed by {pct}%.',
          vars: { pct: [3.5, 4, 4.5, 5, 6] },
        },
      },
    ],
  },
  {
    id: 'half-elf-archer-pebble-arrow',
    classId: 'Half Elf',
    subclassId: 'Archer',
    type: 'passive',
    name: 'Pebble Arrow',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          template: 'On normal attacks, {chance}% chance to increase own physical critical hit rate by {pct}% for 3 sec.',
          vars: { chance: 50, pct: [5, 6, 7, 8, 9] },
        },
      },
      {
        grade: 'Rare',
        gen: {
          template: 'On normal attacks, {chance}% chance to increase own physical critical hit rate by {pct}% for 3 sec.',
          vars: { chance: [60, 70, 80, 90, 100], pct: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },

  // Scout — Active
  {
    id: 'half-elf-scout-all-in-shot',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'active',
    name: 'All-In Shot',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Fires 10 arrows at the enemy, dealing a total of {dmg}% physical damage.',
          vars: { dmg: [210, 220, 230, 240, 250] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Fires 10 arrows at the enemy, dealing a total of {dmg}% physical damage.',
          vars: { dmg: [260, 270, 290, 330, 350] },
        },
      },
    ],
  },
  {
    id: 'half-elf-scout-turning-shot',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'active',
    name: 'Turning Shot',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Spin and shoot an arrow to deal {dmg}% physical damage, reducing physical defense by {red} for 3 sec.',
          vars: { dmg: [175, 185, 195, 205, 215], red: [30, 32, 34, 36, 38] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Spin and shoot an arrow to deal {dmg}% physical damage, reducing physical defense by {red} for 5 sec.',
          vars: { dmg: [231, 247, 263, 280, 297], red: [50, 60, 70, 80, 100] },
        },
      },
    ],
  },
  {
    id: 'half-elf-scout-rain-shot',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'active',
    name: 'Rain Shot',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Shoots arrows into the sky to rain down on the target and nearby enemies, dealing {dmg}% physical damage.',
          vars: { dmg: [167, 176, 186, 196, 206] },
        },
      },
      {
        grade: 'Ancient',
        levels: [
          { level: 1, cooldownSec: 20, text: 'Shoots arrows into the sky to rain down on the target and nearby enemies, dealing 221% physical damage, and deals 15% of physical attack every sec for 3 sec.' },
          { level: 2, cooldownSec: 20, text: 'Shoots arrows into the sky to rain down on the target and nearby enemies, dealing 236% physical damage, and deals 15% of physical attack every sec for 3 sec.' },
          { level: 3, cooldownSec: 20, text: 'Shoots arrows into the sky to rain down on the target and nearby enemies, dealing 252% physical damage, causes freezing, and deals 15% of physical damage every sec for 3 sec.' },
          { level: 4, cooldownSec: 20, text: 'Shoots arrows into the sky to rain down on the target and nearby enemies, dealing 268% physical damage, causes freezing, and deals 15% of physical damage every sec for 3 sec.' },
          { level: 5, cooldownSec: 20, text: 'Shoots arrows into the sky to rain down on the target and nearby enemies, dealing 284% physical damage, causes freezing, and deals 15% of physical damage every sec for 3 sec.' },
        ],
      },
    ],
  },
  {
    id: 'half-elf-scout-multi-shot',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'active',
    name: 'Multi Shot',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Shoots arrows in a fan-shaped area at the target and nearby {n} enemies, dealing {dmg}% physical damage, causes freezing, and deals 15% physical damage every sec for 3 sec.',
          vars: { n: 3, dmg: [138, 146, 154, 162, 170] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Shoots arrows in a fan-shaped area at the target and nearby {n} enemies, dealing {dmg}% physical damage, causes freezing, and deals 15% physical damage every sec for 3 sec.',
          vars: { n: 5, dmg: [183, 196, 209, 222, 235] },
        },
      },
    ],
  },
  {
    id: 'half-elf-scout-purring-shot',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'active',
    name: 'Purring Shot',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Fires arrows with a 100% critical chance at the target and 3 nearby enemies, dealing {dmg}% physical damage.',
          vars: { dmg: [163, 174, 185, 196, 208] },
        },
      },
    ],
  },

  // Scout — Passive
  {
    id: 'half-elf-scout-bow-mastery',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'passive',
    name: 'Bow Mastery',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases attack speed by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 14] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases attack speed by {pct}%.',
          vars: { pct: [20, 21, 22, 23, 25] },
        },
      },
    ],
  },
  {
    id: 'half-elf-scout-accuracy-blow',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'passive',
    name: 'Accuracy Blow',
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
    id: 'half-elf-scout-kaels-arrow',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'passive',
    name: "Kael’s Arrow",
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Physical Critical Damage by {pct}%.',
          vars: { pct: [10, 12, 14, 16, 18] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Physical Critical Damage by {pct}%.',
          vars: { pct: [20, 22, 24, 26, 30] },
        },
      },
    ],
  },
  {
    id: 'half-elf-scout-frost-judgment',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'passive',
    name: 'Frost Judgment',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases damage to frozen enemies by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases damage to frozen enemies by {pct}%.',
          vars: { pct: [20, 22, 24, 26, 30] },
        },
      },
    ],
  },
  {
    id: 'half-elf-scout-reinforce-action',
    classId: 'Half Elf',
    subclassId: 'Scout',
    type: 'passive',
    name: 'Reinforce Action',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'Physical Critical Rate +{pcr}%, Physical Critical Damage +{pcd}%.',
          vars: { pcr: [5, 6, 7, 8, 9], pcd: [10, 12, 14, 16, 18] },
        },
      },
    ],
  },

  // Ranger — Active
  {
    id: 'half-elf-ranger-forbidden-luck',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'active',
    name: 'Forbidden Luck',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 25,
          template: 'Deals {dmg}% physical damage to the target, and has a {chance}% chance to disable item usage for 10 sec.',
          vars: { dmg: [210, 222, 234, 246, 259], chance: [35, 39, 43, 47, 50] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Deals {dmg}% physical damage to the target, and has a {chance}% chance to disable item usage for 10 sec.',
          vars: { dmg: [278, 297, 317, 337, 357], chance: [55, 60, 65, 70, 75] },
        },
      },
    ],
  },
  {
    id: 'half-elf-ranger-desolation',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'active',
    name: 'Desolation',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Fires arrows in an area of effect, dealing {dmg}% physical damage to {n} enemies.',
          vars: { n: 3, dmg: [157, 166, 175, 184, 193] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Fires arrows in an area of effect, dealing {dmg}% physical damage to {n} enemies, and inflicts Burn status, dealing 20% physical damage every 1 sec for 3 sec.',
          vars: { n: 5, dmg: [207, 222, 237, 252, 267] },
        },
      },
    ],
  },
  {
    id: 'half-elf-ranger-fast-shot',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'active',
    name: 'Fast Shot',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Rapidly fires 3 arrows at the target, dealing a total of {dmg}% physical damage.',
          vars: { dmg: [189, 198, 207, 216, 225] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Rapidly fires 3 arrows at the target, dealing a total of {dmg}% physical damage.',
          vars: { dmg: [234, 243, 252, 261, 315] },
        },
      },
    ],
  },
  {
    id: 'half-elf-ranger-flame-bolt',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'active',
    name: 'Flame Bolt',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Launches a flame bolt at the target and surrounding {n} enemies, dealing {dmg}% physical damage and inflicting Burn status. Deals 20% physical damage every 1 sec for 3 sec.',
          vars: { n: 3, dmg: [157, 166, 175, 184, 193] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Launches a flame bolt at the target and surrounding {n} enemies, dealing {dmg}% physical damage and inflicting Burn status. Deals 20% physical damage every 1 sec for 3 sec.',
          vars: { n: 5, dmg: [207, 222, 237, 252, 267] },
        },
      },
    ],
  },
  {
    id: 'half-elf-ranger-drill-shot',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'active',
    name: 'Drill Shot',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 10,
          template: "Reduces the target's defense by 30% and deals {dmg}% physical damage.",
          vars: { dmg: [146, 152, 158, 164, 170] },
        },
      },
    ],
  },

  // Ranger — Passive
  {
    id: 'half-elf-ranger-crossbow-mastery',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'passive',
    name: 'Crossbow Mastery',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases physical critical rate by {pct}%.',
          vars: { pct: [5, 5.5, 6, 6.5, 7] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases physical critical rate by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },
  {
    id: 'half-elf-ranger-endless-might',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'passive',
    name: 'Endless Might',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases strength by {val}.',
          vars: { val: { base: 5, step: 5 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases strength by {val}.',
          vars: { val: { base: 30, step: 5 } },
        },
      },
    ],
  },
  {
    id: 'half-elf-ranger-long-shot',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'passive',
    name: 'Long Shot',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases basic attack range by {pct}%, and skill range by {pct}%.',
          vars: { pct: [5, 10, 15, 20, 25] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases basic attack range by {pct}%, and skill range by {pct}%.',
          vars: { pct: [30, 35, 40, 45, 50] },
        },
      },
    ],
  },
  {
    id: 'half-elf-ranger-open-eyes',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'passive',
    name: 'Open eyes',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases attack speed by {pct}%.',
          vars: { pct: [5, 5.5, 6, 6.5, 7] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases attack speed by {as}%, increases damage to boss monsters by {boss}%.',
          vars: { as: [10, 11, 12, 13, 15], boss: [5, 6, 7, 8, 10] },
        },
      },
    ],
  },
  {
    id: 'half-elf-ranger-kaels-bolt',
    classId: 'Half Elf',
    subclassId: 'Ranger',
    type: 'passive',
    name: "Kael's Bolt",
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases critical hit damage by {pct}%.',
          vars: { pct: [20, 25, 30, 35, 40] },
        },
      },
    ],
  },
]
