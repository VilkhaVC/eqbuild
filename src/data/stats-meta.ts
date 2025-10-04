import type { AttributeKey } from '../store/builder'

// Deskripsi kontribusi per 1 poin Primary Stat ke Secondary Stats.
// Sumber: spesifikasi yang Anda berikan.
export const PrimaryStatEffectsDesc: Record<AttributeKey, string> = {
  STR: 'Per 1 STR: Physical Attack +2, HP Regeneration +2',
  DEX: 'Per 1 DEX: Physical Attack +2, Physical Penetration +2',
  VIT: 'Per 1 VIT: Physical Defense +2, Magical Defense +2, Max HP +40',
  INT: 'Per 1 INT: HP Regeneration +1, MP Regeneration +1, Magical Attack +2',
  WIS: 'Per 1 WIS: Magical Accuracy +2, Magical Penetration +2',
  AGI: 'Per 1 AGI: Physical Penetration +2, Evasion +2',
}

// Kunci secondary stat yang dihitung oleh kalkulator
export type SecondaryStatKey =
  | 'PhysicalAttack'
  | 'HPRegen'
  | 'PhysicalPenetration'
  | 'PhysicalDefense'
  | 'MagicalDefense'
  | 'MaxHP'
  | 'MPRegen'
  | 'MagicalAttack'
  | 'MagicalAccuracy'
  | 'MagicalPenetration'
  | 'Evasion'

// Label tampilan ramah untuk secondary stat
export const SecondaryDisplayLabels: Record<SecondaryStatKey, string> = {
  PhysicalAttack: 'Physical Attack',
  HPRegen: 'HP Regeneration',
  PhysicalPenetration: 'Physical Penetration',
  PhysicalDefense: 'Physical Defense',
  MagicalDefense: 'Magical Defense',
  MaxHP: 'Max HP',
  MPRegen: 'MP Regeneration',
  MagicalAttack: 'Magical Attack',
  MagicalAccuracy: 'Magical Accuracy',
  MagicalPenetration: 'Magical Penetration',
  Evasion: 'Evasion',
}

export type StatEffect = { to: SecondaryStatKey; coef: number }

// Mapping koefisien: per 1 poin Primary -> kontribusi ke Secondary
export const PrimaryToSecondary: Record<AttributeKey, StatEffect[]> = {
  STR: [
    { to: 'PhysicalAttack', coef: 2 },
    { to: 'HPRegen', coef: 2 },
  ],
  DEX: [
    { to: 'PhysicalAttack', coef: 2 },
    { to: 'PhysicalPenetration', coef: 2 },
  ],
  VIT: [
    { to: 'PhysicalDefense', coef: 2 },
    { to: 'MagicalDefense', coef: 2 },
    { to: 'MaxHP', coef: 40 },
  ],
  INT: [
    { to: 'HPRegen', coef: 1 },
    { to: 'MPRegen', coef: 1 },
    { to: 'MagicalAttack', coef: 2 },
  ],
  WIS: [
    { to: 'MagicalAccuracy', coef: 2 },
    { to: 'MagicalPenetration', coef: 2 },
  ],
  AGI: [
    { to: 'PhysicalPenetration', coef: 2 },
    { to: 'Evasion', coef: 2 },
  ],
}
