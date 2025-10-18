import type { Skill } from './types'

export const elfSkills: Skill[] = [
  // Healer — Active
  {
    id: 'elf-healer-arcane-burst',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'active',
    name: 'Arcane Burst',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Deals {dmg}% magical damage to the target.',
          vars: { dmg: [186, 194, 202, 210, 218] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Deals {dmg}% magical damage to the target.',
          vars: { dmg: [229, 240, 252, 264, 278] },
        },
      },
    ],
  },
  {
    id: 'elf-healer-mareas-force',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'active',
    name: 'Marea’s Force',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 30,
          template: 'Increases physical defense and magical defense of {party} party members by {val} for 30 seconds.',
          vars: { party: 3, val: [30, 35, 40, 45, 50] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 30,
          template: 'Increases physical defense by {pdef}, magical defense by {mdef}, physical attack by {patk} and magical attack by {matk} of {party} party members for 30 seconds.',
          vars: { pdef: 50, mdef: 50, patk: [50, 60, 70, 80, 100], matk: [50, 60, 70, 80, 100], party: 5 },
        },
      },
    ],
  },
  {
    id: 'elf-healer-heal',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'active',
    name: 'Heal',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Recovers HP equal to {pct}% of my max HP.',
          vars: { pct: [5, 6, 7, 8, 9] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Recovers HP of {party} party members equal to 10% of my max HP + {wis}% of Wisdom.',
          vars: { party: 5, wis: [200, 350, 500, 650, 800] },
        },
      },
    ],
  },
  {
    id: 'elf-healer-divine-beam',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'active',
    name: 'Divine Beam',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Fires a Divine Beam that deals {dmg}% magical damage to the target.',
          vars: { dmg: [190, 199, 208, 217, 227] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Fires a Divine Beam that deals {dmg}% magical damage to the target.',
          vars: { dmg: [237, 246, 255, 281, 297] },
        },
      },
    ],
  },
  {
    id: 'elf-healer-saint-strike',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'active',
    name: 'Saint Strike',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Fires a spherical orb that deals {dmg}% magical damage to the target.',
          vars: { dmg: [210, 219, 228, 237, 249] },
        },
      },
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Fires a spherical orb that deals {dmg}% magical damage to the target, and reduces the target’s magical defense by {mdef} for 3 sec.',
          vars: { dmg: [261, 274, 287, 302, 317], mdef: [50, 60, 70, 80, 100] },
        },
      },
    ],
  },

  // Healer — Passive
  {
    id: 'elf-healer-intelligence-blow',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'passive',
    name: 'Intelligence Blow',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases Intelligence by {val}.',
          vars: { val: { base: 2, step: 2 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases Intelligence by {val}.',
          vars: { val: { base: 12, step: 2 } },
        },
      },
    ],
  },
  {
    id: 'elf-healer-mana-efficiency',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'passive',
    name: 'Mana Efficiency',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Reduces MP cost by {pct}%.',
          vars: { pct: [5, 5.5, 6, 6.5, 7] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Reduces MP cost by {pct}%.',
          vars: { pct: [7.5, 8, 8.5, 9, 10] },
        },
      },
    ],
  },
  {
    id: 'elf-healer-magic-weapon',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'passive',
    name: 'Magic Weapon',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases magical attack by {val}.',
          vars: { val: { base: 10, step: 2 } },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases magical attack by {val}.',
          vars: { val: [30, 32, 34, 36, 40] },
        },
      },
    ],
  },
  {
    id: 'elf-healer-casting-boost',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'passive',
    name: 'Casting Boost',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases attack speed by {pct}%.',
          vars: { pct: [2, 2.5, 3, 3.5, 4] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases attack speed by {pct}%.',
          vars: { pct: [5, 6, 7, 8, 10] },
        },
      },
    ],
  },
  {
    id: 'elf-healer-magic-boost',
    classId: 'Elf',
    subclassId: 'Healer',
    type: 'passive',
    name: 'Magic Boost',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases magical critical chance by {pct}%.',
          vars: { pct: [1, 2, 3, 4, 5] },
        },
      },
      {
        grade: 'Rare',
        gen: {
          template: 'Increases magical critical chance by {pct}%.',
          vars: { pct: [6, 7, 8, 9, 10] },
        },
      },
    ],
  },

  // Templar — Active
  {
    id: 'elf-templar-holy-light',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'active',
    name: 'Holy Light',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 18,
          template: 'Launches a light orb at the target and deals {dmg}% magical damage.',
          vars: { dmg: [227, 240, 253, 266, 280] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 18,
          template: 'Launches a light orb at the target and deals {dmg}% magical damage. Reduces movement speed by {slow}% for 3 sec.',
          vars: { dmg: [301, 322, 343, 364, 386], slow: [30, 35, 40, 45, 50] },
        },
      },
    ],
  },
  {
    id: 'elf-templar-mareas-hammer',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'active',
    name: 'Marea’s Hammer',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 10,
          template: 'Summons Mareas’ hammer and strikes the target, dealing {dmg}% magical damage.',
          vars: { dmg: [146, 152, 159, 166, 173] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 10,
          template: 'Summons Mareas’ hammer and strikes the target, dealing {dmg}% magical damage.',
          vars: { dmg: [184, 195, 206, 217, 230] },
        },
      },
    ],
  },
  {
    id: 'elf-templar-frozen-field',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'active',
    name: 'Frozen Field',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Creates an ice zone around the target, dealing {dmg}% damage to up to {n} enemies in range, with a {chance}% chance to freeze them for {sec} sec. Deals 100% damage upon freeze removal.',
          vars: { dmg: [167, 176, 186, 196, 206], n: 3, chance: [15, 18, 21, 24, 27], sec: 1 },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: 'Creates an ice zone around the target, dealing {dmg}% damage to up to {n} enemies in range, with a {chance}% chance to freeze them for {sec} sec. Deals 100% damage upon freeze removal.',
          vars: { dmg: [221, 236, 252, 268, 284], n: 5, chance: [30, 33, 36, 39, 42], sec: 1.5 },
        },
      },
    ],
  },
  {
    id: 'elf-templar-advent',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'active',
    name: 'Advent',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Through the descent of Marea, status resistance increases by {sr}% for {sec} sec, and magic critical hit chance increases by {mcr}%.',
          vars: { sr: [30, 35, 40, 45, 50], sec: [5, 6, 7, 8, 9], mcr: [5, 6, 7, 8, 9] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Through the descent of Marea, status resistance increases by {sr}% for {sec} sec, and magic critical hit chance increases by {mcr}%.',
          vars: { sr: [55, 60, 65, 70, 80], sec: [10, 11, 12, 13, 15], mcr: [10, 12, 14, 16, 20] },
        },
      },
    ],
  },
  {
    id: 'elf-templar-mystic-force',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'active',
    name: 'Mystic Force',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: [45, 44, 43, 42, 41],
          template: 'Disperses magical power for 30 sec, increasing attack speed by {as}%, casting speed by {cs}%, and boss monster damage by {boss}%.',
          vars: { as: [20, 21, 22, 23, 24], cs: [5, 6, 7, 8, 9], boss: [3, 3.5, 4, 4.5, 5] },
        },
      },
    ],
  },

  // Templar — Passive
  {
    id: 'elf-templar-wand-mastery',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'passive',
    name: 'Wand Mastery',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases magic critical hit rate by {pct}%.',
          vars: { pct: [5, 5.5, 6, 6.5, 7] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases magic critical hit rate by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },
  {
    id: 'elf-templar-arcane-aim',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'passive',
    name: 'Arcane Aim',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases magical accuracy by {val}.',
          vars: { val: [20, 22, 24, 26, 28] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases magical accuracy by {val}.',
          vars: { val: [40, 42, 44, 46, 50] },
        },
      },
    ],
  },
  {
    id: 'elf-templar-intelligence-pierce',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'passive',
    name: 'Intelligence Pierce',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases magical penetration by {val}.',
          vars: { val: [20, 22, 24, 26, 28] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases magical penetration by {val}.',
          vars: { val: [40, 42, 44, 46, 50] },
        },
      },
    ],
  },
  {
    id: 'elf-templar-mareas-boost',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'passive',
    name: "Marea's Boost",
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases the critical hit rate of Marea’s Hammer by {pct}%.',
          vars: { pct: [50, 55, 60, 65, 70] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases the critical hit rate of Marea’s Hammer by {pct}%.',
          vars: { pct: [75, 80, 85, 90, 100] },
        },
      },
    ],
  },
  {
    id: 'elf-templar-divine-fury',
    classId: 'Elf',
    subclassId: 'Templar',
    type: 'passive',
    name: 'Divine Fury',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases magical critical damage by {pct}%.',
          vars: { pct: [20, 25, 30, 35, 40] },
        },
      },
    ],
  },

  // Priest — Active
  {
    id: 'elf-priest-nemesis',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'active',
    name: 'Nemesis',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Inflicts {dmg}% magical damage and additional magical damage proportional to {wis}% of Wisdom to the target.',
          vars: { dmg: [169, 178, 188, 198, 208], wis: 250 },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Inflicts {dmg}% magical damage and additional magical damage proportional to {wis}% of Wisdom to the target.',
          vars: { dmg: [223, 239, 255, 271, 287], wis: 500 },
        },
      },
    ],
  },
  {
    id: 'elf-priest-magic-barrier',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'active',
    name: 'Magic Barrier',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 25,
          template: "Applies a protective shield equal to {mult}x the caster's Wisdom to {party} party members for 5 sec.",
          vars: { mult: [5, 6, 7, 8, 9], party: 3 },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 25,
          template: "Applies a protective shield equal to {mult}x the caster's Wisdom to {party} party members for 5 sec.",
          vars: { mult: [11, 13, 15, 17, 20], party: 5 },
        },
      },
    ],
  },
  {
    id: 'elf-priest-mind-air',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'active',
    name: 'Mind Air',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Deals {dmg}% magical damage to {n} enemies including the target using magic group, with a {chance}% chance to silence for 3 sec.',
          vars: { dmg: [167, 176, 186, 196, 206], n: 3, chance: [35, 39, 43, 47, 50] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: [14, 14, 14, 13, 13],
          template: 'Deals {dmg}% magical damage to {n} enemies including the target using magic group, with a {chance}% chance to silence for 3 sec.',
          vars: { dmg: [221, 236, 252, 268, 284], n: 5, chance: [55, 60, 65, 70, 75] },
        },
      },
    ],
  },
  {
    id: 'elf-priest-group-heal',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'active',
    name: 'Group Heal',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 39,
          template: 'Recovers {pct}% of the max HP of {party} party members every 3 sec for 9 sec.',
          vars: { pct: [5, 5.5, 6, 6.5, 7], party: 3 },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 39,
          template: 'Recovers {pct}% of the max HP of {party} party members every 3 sec for 9 sec.',
          vars: { pct: [10, 10.5, 11, 11.5, 12], party: 5 },
        },
      },
    ],
  },
  {
    id: 'elf-priest-oblification',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'active',
    name: 'Oblification',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 35,
          template: 'Reduces physical & magical damage taken by {party} party members by {red}% for {sec} sec.',
          vars: { party: 3, red: [25, 26, 27, 28, 29], sec: [20, 21, 22, 23, 24] },
        },
      },
    ],
  },

  // Priest — Passive
  {
    id: 'elf-priest-staff-mastery',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'passive',
    name: 'Staff Mastery',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases magical attack by {val}.',
          vars: { val: [10, 15, 20, 25, 30] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases healing by 30%, increases magical attack by {val}.',
          vars: { val: [35, 40, 45, 50, 60] },
        },
      },
    ],
  },
  {
    id: 'elf-priest-mental-blow',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'passive',
    name: 'Mental blow',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Wisdom by {val}.',
          vars: { val: { base: 5, step: 5 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Wisdom by {val}.',
          vars: { val: { base: 30, step: 5 } },
        },
      },
    ],
  },
  {
    id: 'elf-priest-almighty',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'passive',
    name: 'Almighty',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases all stats by {val}. (Strength, Dexterity, Intelligence, Spirit, Agility, Vitality)',
          vars: { val: [2, 4, 6, 8, 10] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases all stats by {val}. (Strength, Dexterity, Intelligence, Spirit, Agility, Vitality)',
          vars: { val: [12, 14, 16, 18, 20] },
        },
      },
    ],
  },
  {
    id: 'elf-priest-blessing-of-nature',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'passive',
    name: 'Blessing of Nature',
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
          template: 'Increases boss monster defense by {boss}, increases PVP defense by {pvp}.',
          vars: { boss: [100, 100, 100, 100, 100], pvp: [50, 60, 70, 80, 100] },
        },
      },
    ],
  },
  {
    id: 'elf-priest-absolute-barrier',
    classId: 'Elf',
    subclassId: 'Priest',
    type: 'passive',
    name: 'Absolute Barrier',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'For 25 sec, increases physical & magical critical hit rate of affected targets by {rate}%, and critical damage by {dmg}%.',
          vars: { rate: [10, 11, 12, 13, 14], dmg: [20, 22, 24, 26, 28] },
        },
      },
    ],
  },
]
