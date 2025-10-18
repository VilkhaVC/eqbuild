import type { Skill } from './types'

export const dhanSkills: Skill[] = [
  // Assassin — Active
  {
    id: 'dhan-assassin-blind-attack',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'active',
    name: 'Blind Attack',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 8,
          template: 'Instantly move to the target and deal {dmg}% physical damage.',
          vars: { dmg: [120, 125, 130, 135, 140] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 8,
          template: 'Instantly move to the target and deal {dmg}% physical damage.',
          vars: { dmg: [148, 156, 164, 172, 180] },
        },
      },
    ],
  },
  {
    id: 'dhan-assassin-silence',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'active',
    name: 'Silence',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Deal {dmg}% physical damage 2 times to the target. {chance}% chance to inflict silence for {sec} sec.',
          vars: { dmg: [84, 87, 90, 94, 98], chance: [10, 12, 14, 16, 18], sec: [2, 2.2, 2.4, 2.6, 2.8] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Deal {dmg}% physical damage 2 times to the target. {chance}% chance to inflict silence for {sec} sec.',
          vars: { dmg: [103, 109, 115, 121, 127], chance: [20, 23, 26, 29, 32], sec: [3, 3.2, 3.4, 3.6, 4] },
        },
      },
    ],
  },
  {
    id: 'dhan-assassin-psychic-phantom',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'active',
    name: 'Psychic Phantom',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Strike the enemy in the air and deal {dmg}% physical damage.',
          vars: { dmg: [145, 151, 157, 163, 169] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Strike the enemy in the air and deal {dmg}% physical damage.',
          vars: { dmg: [178, 187, 197, 207, 217] },
        },
      },
    ],
  },
  {
    id: 'dhan-assassin-drawing-weapon',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'active',
    name: 'Drawing Weapon',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Throw two weapons at the target, each dealing {dmg}% physical damage.',
          vars: { dmg: [84, 87, 90, 93, 98] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Throw two weapons at the target, each dealing {dmg}% physical damage. Movement speed of afflicted enemy decreases by {slow}% for 3 sec.',
          vars: { dmg: [103, 109, 115, 121, 127], slow: [50, 55, 60, 65, 70] },
        },
      },
    ],
  },
  {
    id: 'dhan-assassin-hide',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'active',
    name: 'Hide',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Hide for 3 sec. Movement speed -{spd}% during hide.',
          vars: { spd: [10, 15, 20, 25, 30] },
        },
      },
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Hide for 3 sec. Can use other skills during hide. Movement speed +{spd}%, skill cooldown time -{cd}%.',
          vars: { spd: [10, 12, 14, 16, 20], cd: [5, 6, 7, 8, 10] },
        },
      },
    ],
  },

  // Assassin — Passive
  {
    id: 'dhan-assassin-mortal-rising',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'passive',
    name: 'Mortal Rising',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'While in stealth, increases critical hit rate of first attack by 100%, adds {pcd}% physical critical damage.',
          vars: { pcd: [110, 120, 130, 140, 150] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'While in stealth, increases critical hit rate of first attack by 100%, adds {pcd}% physical critical damage.',
          vars: { pcd: [200, 210, 220, 230, 250] },
        },
      },
    ],
  },
  {
    id: 'dhan-assassin-phantom-crow',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'passive',
    name: 'Phantom Crow',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Increases critical hit rate of Psychic Phantom by {pct}%.',
          vars: { pct: [20, 25, 30, 35, 40] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases critical hit rate of Psychic Phantom by {pct}%.',
          vars: { pct: [50, 60, 70, 80, 100] },
        },
      },
    ],
  },
  {
    id: 'dhan-assassin-envenom',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'passive',
    name: 'Envenom',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'On a {chance}% chance during normal attack, poisons target for 3 sec, dealing {dot}% of physical attack per sec.',
          vars: { chance: 20, dot: [20, 21, 22, 23, 24] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'On a {chance}% chance during normal attack, poisons target for 3 sec, dealing {dot}% of physical attack per sec.',
          vars: { chance: 30, dot: [25, 26, 27, 28, 30] },
        },
      },
    ],
  },
  {
    id: 'dhan-assassin-poison-attack',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'passive',
    name: 'Poison Attack',
    ranks: [
      {
        grade: 'Normal',
        gen: {
          template: 'Reduces damage taken from poisoned enemies by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
      {
        grade: 'Advanced',
        gen: {
          template: 'Reduces damage taken from poisoned enemies by {pct}%.',
          vars: { pct: [20, 22, 24, 26, 30] },
        },
      },
    ],
  },
  {
    id: 'dhan-assassin-boost',
    classId: 'Dhan',
    subclassId: 'Assassin',
    type: 'passive',
    name: 'Boost',
    ranks: [
      {
        grade: 'Advanced',
        gen: {
          template: 'Increases physical critical hit rate by {pct}%.',
          vars: { pct: [5, 5.5, 6, 6.5, 7] },
        },
      },
      {
        grade: 'Rare',
        gen: {
          template: 'Increases physical critical hit rate by {pct}%.',
          vars: { pct: [10, 11, 12, 13, 15] },
        },
      },
    ],
  },

  // Avenger — Active
  {
    id: 'dhan-avenger-health-burn',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'active',
    name: 'Health Burn',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 18,
          template: 'Deals {dmg}% physical damage to the target and absorbs HP equal to {leech}% of the damage dealt.',
          vars: { dmg: [175, 185, 195, 205, 215], leech: [10, 12, 14, 16, 18] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Deals {dmg}% physical damage to the target and absorbs HP equal to {leech}% of the damage dealt.',
          vars: { dmg: [231, 247, 263, 280, 297], leech: 20 },
        },
      },
    ],
  },
  {
    id: 'dhan-avenger-confusion-fog',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'active',
    name: 'Confusion Fog',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Detonates a smoke bomb to deal {dmg}% physical damage to {n} nearby enemies, reducing their physical accuracy by {acc} for 3 sec.',
          vars: { dmg: [159, 167, 178, 189, 200], n: 3, acc: 500 },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Detonates a smoke bomb to deal {dmg}% physical damage to {n} nearby enemies, reducing both physical and magical accuracy by {acc} for 5 sec.',
          vars: { dmg: [216, 234, 252, 270, 288], n: 5, acc: [500, 600, 650, 700, 800] },
        },
      },
    ],
  },
  {
    id: 'dhan-avenger-shadow',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'active',
    name: 'Shadow',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Grants immunity to freezing for 10 sec, increases critical damage by {pcd}%.',
          vars: { pcd: [40, 44, 48, 52, 56] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Grants immunity to freezing for 10 sec, increases critical damage by {pcd}%.',
          vars: { pcd: [60, 64, 68, 72, 80] },
        },
      },
    ],
  },
  {
    id: 'dhan-avenger-double-psychic-phantom',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'active',
    name: 'Double Psychic Phantom',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 20,
          template: 'Quickly spins twice, dealing {dmg}% physical damage to the target.',
          vars: { dmg: [126, 132, 140, 148, 156] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 16,
          template: '100% chance to crit, quickly spins twice, dealing {dmg}% physical damage each time.',
          vars: { dmg: [167, 178, 189, 201, 214] },
        },
      },
    ],
  },
  {
    id: 'dhan-avenger-death-call',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'active',
    name: 'Death Call',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Deals {dmg}% physical damage to the target and pulls it forward with a {chance}% chance. The pulled target is stunned for 1 sec.',
          vars: { dmg: [195, 207, 219, 234, 249], chance: [55, 60, 65, 70, 75] },
        },
      },
    ],
  },

  // Avenger — Passive
  {
    id: 'dhan-avenger-katar-mastery',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'passive',
    name: 'Katar Mastery',
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
    id: 'dhan-avenger-avoid',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'passive',
    name: 'Avoid',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases dodge by {val}.',
          vars: { val: [5, 10, 15, 20, 25] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases dodge by {val}.',
          vars: { val: [30, 35, 40, 45, 50] },
        },
      },
    ],
  },
  {
    id: 'dhan-avenger-agility-booster',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'passive',
    name: 'Agility Booster',
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
    id: 'dhan-avenger-premium-agility',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'passive',
    name: 'Premium Agility',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases PVP damage by {pvp}%.',
          vars: { pvp: [2, 4, 6, 8, 10] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases PVP damage by 10%, increases physical crit rate by {pcrit}%.',
          vars: { pcrit: [5, 5.5, 6, 8, 10] },
        },
      },
    ],
  },
  {
    id: 'dhan-avenger-deadly-blow',
    classId: 'Dhan',
    subclassId: 'Avenger',
    type: 'passive',
    name: 'Deadly blow',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases damage based on {pct}% of Agility on attack.',
          vars: { pct: [260, 270, 280, 290, 300] },
        },
      },
    ],
  },

  // Predator — Active
  {
    id: 'dhan-predator-demolition',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'active',
    name: 'Demolition',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Deals {dmg}% physical damage to {n} enemies in a frontal line. If the targets are stunned, deals additional {dot}% physical damage per second for 3 sec based on physical attack power.',
          vars: { dmg: [135, 140, 145, 151, 157], n: 3, dot: 20 },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 12,
          template: 'Deals {dmg}% physical damage to {n} enemies in a frontal line. If the targets are stunned, deals additional {dot}% physical damage per second for 3 sec based on physical attack power.',
          vars: { dmg: [166, 175, 184, 193, 202], n: 5, dot: 30 },
        },
      },
    ],
  },
  {
    id: 'dhan-predator-dancing-blade',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'active',
    name: 'Dancing Blade',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Jump into the air and deal {dmg}% physical damage to {n} nearby enemies.',
          vars: { dmg: [157, 166, 175, 184, 193], n: 3 },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Jump into the air and deal {dmg}% physical damage to {n} nearby enemies.',
          vars: { dmg: [207, 222, 237, 252, 267], n: 5 },
        },
      },
    ],
  },
  {
    id: 'dhan-predator-awareness',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'active',
    name: 'Awareness',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Become immune to Bind for 10 sec, and increase critical hit rate by {pct}%.',
          vars: { pct: [15, 16, 17, 18, 19] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 15,
          template: 'Become immune to Bind for 10 sec, and increase critical hit rate by {pct}%.',
          vars: { pct: [25, 27, 29, 31, 35] },
        },
      },
    ],
  },
  {
    id: 'dhan-predator-venomous-blade',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'active',
    name: 'Venomous Blade',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          levelCount: 5,
          cooldown: 17,
          template: 'Throw a dart to deal {dmg}% physical damage to {n} nearby enemies, and poison them to deal {dot}% of physical attack power as damage every second for 3 seconds.',
          vars: { dmg: [138, 146, 154, 162, 170], n: 3, dot: 20 },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Throw a dart to deal {dmg}% physical damage to {n} nearby enemies, and poison them to deal {dot}% of physical attack power as damage every second for 3 seconds.',
          vars: { dmg: [183, 196, 209, 222, 235], n: 5, dot: 30 },
        },
      },
    ],
  },
  {
    id: 'dhan-predator-poison-fog',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'active',
    name: 'Poison Fog',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          levelCount: 5,
          cooldown: 14,
          template: 'Throw poison mist at {n} nearby enemies, dealing {dmg}% physical damage and inflicting poison. During 3 seconds, deals damage every second equal to 50% of physical attack power. {chance}% chance to inflict sleep for {sec} sec on affected targets.',
          vars: { n: 3, dmg: [169, 178, 188, 198, 208], chance: [55, 60, 65, 70, 75], sec: [3, 3.2, 3.4, 3.6, 3.8] },
        },
      },
    ],
  },

  // Predator — Passive
  {
    id: 'dhan-predator-dagger-mastery',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'passive',
    name: 'Dagger Mastery',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Physical Penetration by {val}.',
          vars: { val: [20, 22, 24, 26, 28] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Physical Penetration by {val}.',
          vars: { val: [40, 42, 44, 46, 50] },
        },
      },
    ],
  },
  {
    id: 'dhan-predator-strength',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'passive',
    name: 'Strength',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Strength by {val}.',
          vars: { val: { base: 5, step: 5 } },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Strength by {val}.',
          vars: { val: { base: 30, step: 5 } },
        },
      },
    ],
  },
  {
    id: 'dhan-predator-royal-mask',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'passive',
    name: 'Royal Mask',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases Physical Accuracy by {val}.',
          vars: { val: [20, 22, 24, 26, 28] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases Physical Accuracy by {val}.',
          vars: { val: [40, 42, 44, 46, 50] },
        },
      },
    ],
  },
  {
    id: 'dhan-predator-premium-slash',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'passive',
    name: 'Premium Slash',
    ranks: [
      {
        grade: 'Rare',
        gen: {
          template: 'Increases damage dealt to bosses by {pct}%.',
          vars: { pct: [2, 4, 6, 8, 10] },
        },
      },
      {
        grade: 'Ancient',
        gen: {
          template: 'Increases damage dealt to bosses by 10% and increases Physical Critical Hit Rate by {pcrit}%.',
          vars: { pcrit: [5, 5.5, 6, 8, 10] },
        },
      },
    ],
  },
  {
    id: 'dhan-predator-octopus',
    classId: 'Dhan',
    subclassId: 'Predator',
    type: 'passive',
    name: 'Octopus',
    ranks: [
      {
        grade: 'Ancient',
        gen: {
          template: 'On normal attack, {chance}% chance to deal {dmg}% damage once.',
          vars: { chance: [30, 31, 32, 33, 35], dmg: [50, 55, 60, 65, 70] },
        },
      },
    ],
  },
]
