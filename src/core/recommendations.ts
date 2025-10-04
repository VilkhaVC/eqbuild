import type { AttributeKey, ClassKey, ModeKey, SlotKey } from '../store/builder'
import { MAX_OPTIONS_PER_SLOT } from './rules'
import slots from '../data/slots.json'

export type Recommendation = {
  attributesOn: AttributeKey[]
  perSlot: Partial<Record<SlotKey, { selected: string[]; primary?: string }>>
}

function recommendHumanGuardian(mode?: ModeKey): Recommendation {
  // Offense physical: STR + DEX (crit, penetration, mobility)
  const attrs: AttributeKey[] = ['STR', 'DEX']

  const weaponPvP = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weaponPvE = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to normal monsters',
  ], 'Physical Critical Hit Chance')

  const weaponBoss = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to boss monsters',
  ], 'Physical Critical Hit Chance')

  const weaponHybrid = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', ['Physical Penetration', 'Max HP'], 'Physical Penetration')
  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP'], 'Reduced damage to normal monsters')
  const bottom = pickExisting('bottom', ['Physical Penetration Resistance', 'Physical Critical Hit Resistance'], 'Physical Penetration Resistance')
  const gloves = pickExisting('gloves', ['Physical Accuracy', 'Max HP'], 'Physical Accuracy')
  const shoes = pickExisting('shoes', ['Physical evasion', 'Max HP'], 'Physical evasion')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Attack Power', 'PvP Defense'], 'PvP Attack Power')
    : pickExisting('necklace', ['Physical Critical Hit Resistance', 'Reduced physical critical hit damage'])
  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('earring', ['Stun hit rate', 'Silent Hit Rate'])
  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('ring', ['Stun resistance', 'Silent Resistance Rate'])

  return { attributesOn: attrs, perSlot: { weapon, helmet, top, bottom, gloves, shoes, necklace, earring, ring } }
}

function recommendHumanDefender(mode?: ModeKey): Recommendation {
  // Tank/Support frontliner: VIT + STR (defense, resist, HP sustain)
  const attrs: AttributeKey[] = ['VIT', 'STR']

  const weaponPvP = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weaponPvE = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased damage to normal monsters',
  ], 'Physical Critical Hit Chance')

  const weaponBoss = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased damage to boss monsters',
  ], 'Physical Critical Hit Chance')

  const weaponHybrid = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', ['Max HP', 'HP Natural Recovery'], 'Max HP')
  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP'], 'Reduced damage to normal monsters')
  const bottom = pickExisting('bottom', ['Physical Penetration Resistance', 'Magic Penetration Resistance'], 'Physical Penetration Resistance')
  const gloves = pickExisting('gloves', ['Max HP', 'HP Potion Increased recovery amount'], 'Max HP')
  const shoes = pickExisting('shoes', ['Max HP', 'HP Potion Increased recovery amount'], 'Max HP')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Defense', 'Reduced physical critical hit damage'], 'PvP Defense')
    : pickExisting('necklace', ['Reduced physical critical hit damage', 'Physical Critical Hit Resistance'])
  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Evasion', 'Provocation hit rate'], 'PvP Evasion')
    : pickExisting('earring', ['Provocation hit rate', 'Stun hit rate'])
  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Evasion', 'PvP Accuracy'], 'PvP Evasion')
    : pickExisting('ring', ['Stun resistance', 'Bondage resistance'])

  return { attributesOn: attrs, perSlot: { weapon, helmet, top, bottom, gloves, shoes, necklace, earring, ring } }
}

function recommendElfTemplar(mode?: ModeKey): Recommendation {
  // Magic DPS + AoE freeze/utility: INT + WIS
  const attrs: AttributeKey[] = ['INT', 'WIS']

  const weaponPvP = pickExisting('weapon', [
    'Magic Critical Hit Chance',
    'Increased magic critical hit damage',
    'PvP Damage increase',
  ], 'Magic Critical Hit Chance')

  const weaponPvE = pickExisting('weapon', [
    'Magic Critical Hit Chance',
    'Increased magic critical hit damage',
    'Increased damage to normal monsters',
  ], 'Magic Critical Hit Chance')

  const weaponBoss = pickExisting('weapon', [
    'Magic Critical Hit Chance',
    'Increased magic critical hit damage',
    'Increased damage to boss monsters',
  ], 'Magic Critical Hit Chance')

  const weaponHybrid = pickExisting('weapon', [
    'Magic Critical Hit Chance',
    'Increased magic critical hit damage',
    'PvP Damage increase',
  ], 'Magic Critical Hit Chance')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', ['Magic Penetration', 'Max MP'], 'Magic Penetration')
  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP'], 'Reduced damage to normal monsters')
  const bottom = pickExisting('bottom', ['Magic Penetration Resistance', 'Magic critical hit resistance'], 'Magic Penetration Resistance')
  const gloves = pickExisting('gloves', ['Magical Accuracy', 'MP Potion Increased recovery amount'], 'Magical Accuracy')
  const shoes = pickExisting('shoes', ['Magic Evasion', 'Max HP'], 'Magic Evasion')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Attack Power', 'PvP Defense'], 'PvP Attack Power')
    : pickExisting('necklace', ['Magic critical hit resistance', 'Reduced magic critical hit damage'])
  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('earring', ['Sleep hit rate', 'Freezing hit rate'])
  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('ring', ['Sleep resistance', 'Freezing resistance'])

  return { attributesOn: attrs, perSlot: { weapon, helmet, top, bottom, gloves, shoes, necklace, earring, ring } }
}

function recommendElfPriest(mode?: ModeKey): Recommendation {
  // Healer/Support: WIS + INT (defensive/sustain oriented)
  const attrs: AttributeKey[] = ['WIS', 'INT']

  const weaponPvP = pickExisting('weapon', [
    'Abnormal status Hit rate',
    'Magic Critical Hit Chance',
    'PvP Damage increase',
  ], 'Abnormal status Hit rate')

  const weaponPvE = pickExisting('weapon', [
    'Abnormal status Hit rate',
    'Magic Critical Hit Chance',
    'Increased damage to normal monsters',
  ], 'Abnormal status Hit rate')

  const weaponBoss = pickExisting('weapon', [
    'Abnormal status Hit rate',
    'Magic Critical Hit Chance',
    'Increased damage to boss monsters',
  ], 'Abnormal status Hit rate')

  const weaponHybrid = pickExisting('weapon', [
    'Abnormal status Hit rate',
    'Magic Critical Hit Chance',
    'PvP Damage increase',
  ], 'Abnormal status Hit rate')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', ['Max MP', 'MP Natural Recovery'], 'Max MP')
  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP'], 'Reduced damage to normal monsters')
  const bottom = pickExisting('bottom', ['Magic critical hit resistance', 'Max HP'], 'Magic critical hit resistance')
  const gloves = pickExisting('gloves', ['Magical Accuracy', 'MP Potion Increased recovery amount'], 'Magical Accuracy')
  const shoes = pickExisting('shoes', ['Magic Evasion', 'HP Potion Increased recovery amount'], 'Magic Evasion')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Defense', 'Reduced magic critical hit damage'], 'PvP Defense')
    : pickExisting('necklace', ['Magic critical hit resistance', 'Reduced magic critical hit damage'])
  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Evasion', 'PvP Accuracy'], 'PvP Evasion')
    : pickExisting('earring', ['Silent Hit Rate', 'Sleep hit rate'])
  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Evasion', 'PvP Accuracy'], 'PvP Evasion')
    : pickExisting('ring', ['Silent Resistance Rate', 'Sleep resistance'])

  return { attributesOn: attrs, perSlot: { weapon, helmet, top, bottom, gloves, shoes, necklace, earring, ring } }
}

function recommendHalfElfScout(mode?: ModeKey): Recommendation {
  // Archer AoE/utility: DEX + AGI
  const attrs: AttributeKey[] = ['DEX', 'AGI']

  const weaponPvP = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weaponPvE = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to normal monsters',
  ], 'Physical Critical Hit Chance')

  const weaponBoss = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to boss monsters',
  ], 'Physical Critical Hit Chance')

  const weaponHybrid = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', ['Physical Penetration', 'Max HP'], 'Physical Penetration')

  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP'], 'Reduced damage to normal monsters')

  const bottom = pickExisting('bottom', ['Physical Penetration Resistance', 'Physical Critical Hit Resistance'], 'Physical Penetration Resistance')
  const gloves = pickExisting('gloves', ['Physical Accuracy', 'HP Potion Increased recovery amount'], 'Physical Accuracy')
  const shoes = pickExisting('shoes', ['Physical evasion', 'Max HP'], 'Physical evasion')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Attack Power', 'PvP Defense'], 'PvP Attack Power')
    : pickExisting('necklace', ['Physical Critical Hit Resistance', 'Reduced physical critical hit damage'])

  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('earring', ['Freezing hit rate', 'Stun hit rate'])

  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('ring', ['Freezing resistance', 'Stun resistance'])

  return { attributesOn: attrs, perSlot: { weapon, helmet, top, bottom, gloves, shoes, necklace, earring, ring } }
}

function recommendHalfElfRanger(mode?: ModeKey): Recommendation {
  // Ranger ST crit fokus: DEX + AGI
  const attrs: AttributeKey[] = ['DEX', 'AGI']

  const weaponPvP = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weaponPvE = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to normal monsters',
  ], 'Physical Critical Hit Chance')

  const weaponBoss = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to boss monsters',
  ], 'Physical Critical Hit Chance')

  const weaponHybrid = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', ['Physical Penetration', 'Max HP'], 'Physical Penetration')
  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP'], 'Reduced damage to normal monsters')

  const bottom = pickExisting('bottom', ['Physical Penetration Resistance', 'Physical Critical Hit Resistance'], 'Physical Penetration Resistance')
  const gloves = pickExisting('gloves', ['Physical Accuracy', 'Max HP'], 'Physical Accuracy')
  const shoes = pickExisting('shoes', ['Physical evasion', 'Max HP'], 'Physical evasion')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Attack Power', 'PvP Defense'], 'PvP Attack Power')
    : pickExisting('necklace', ['Physical Critical Hit Resistance', 'Reduced physical critical hit damage'])

  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('earring', ['Sleep hit rate', 'Freezing hit rate'])

  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('ring', ['Sleep resistance', 'Freezing resistance'])

  return { attributesOn: attrs, perSlot: { weapon, helmet, top, bottom, gloves, shoes, necklace, earring, ring } }
}

export type AttrDistribution = Partial<Record<AttributeKey, number>>

// Distribusi atribut default per Sub-Class (dapat dilengkapi seiring data resmi tersedia)
export const SubClassAttrDistributions: Record<string, AttrDistribution> = {
  // Contoh dari user: Dhan Avenger => DEX 20%, AGI 80%
  Avenger: { AGI: 80, DEX: 20 },
  // Prediksi awal (bisa direvisi): Predator fokus AGI, sedikit DEX
  Predator: { AGI: 70, DEX: 30 },
  // Dekan (fisik) fokus STR dengan dukungan VIT
  'Dragon Knight': { STR: 80, VIT: 20 },
  // Dekan (magik) fokus INT dengan dukungan VIT
  'Dragon Sage': { INT: 80, VIT: 20 },
  // Half Elf archer fisik: DEX dominan, AGI pendamping (dapat direvisi)
  Scout: { DEX: 75, AGI: 25 },
  Ranger: { DEX: 80, AGI: 20 },
  // Elf: Templar (DPS magic) INT dominan, Priest (healer/support) WIS dominan
  Templar: { INT: 75, WIS: 25 },
  Priest: { WIS: 80, INT: 20 },
  // Human: Guardian (offense) STR dominan dengan DEX pendamping, Defender (tank) VIT dominan dengan STR pendamping
  Guardian: { STR: 70, DEX: 30 },
  Defender: { VIT: 70, STR: 30 },
}

function recommendDhanAvenger(mode?: ModeKey): Recommendation {
  // Assassin burst/ST duelist: AGI + DEX; Hybrid bisa tambahkan STR
  const attrs: AttributeKey[] = ['AGI', 'DEX']
  if (mode === 'Hybrid') attrs.push('STR')

  const weaponPvP = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weaponPvE = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to normal monsters',
  ], 'Physical Critical Hit Chance')

  const weaponBoss = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to boss monsters',
  ], 'Physical Critical Hit Chance')

  const weaponHybrid = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', [
    'Physical Penetration',
    'Max HP',
  ], 'Physical Penetration')

  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP'], 'Reduced damage to normal monsters')

  const bottom = pickExisting('bottom', [
    'Physical Penetration Resistance',
    'Physical Critical Hit Resistance',
  ], 'Physical Penetration Resistance')

  const gloves = pickExisting('gloves', [
    'Physical Accuracy',
    'HP Potion Increased recovery amount',
  ], 'Physical Accuracy')

  const shoes = pickExisting('shoes', [
    'Physical evasion',
    'Max HP',
  ], 'Physical evasion')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Attack Power', 'PvP Defense'], 'PvP Attack Power')
    : pickExisting('necklace', ['Physical Critical Hit Resistance', 'Reduced physical critical hit damage'])

  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('earring', ['Stun hit rate', 'Silent Hit Rate'])

  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('ring', ['Stun resistance', 'Silent Resistance Rate'])

  return {
    attributesOn: attrs,
    perSlot: { weapon, helmet, top, bottom, gloves, shoes, necklace, earring, ring },
  }
}

function recommendDhanPredator(mode?: ModeKey): Recommendation {
  // Predator AoE/CC skirmisher: AGI + DEX; Hybrid bisa tambahkan STR
  const attrs: AttributeKey[] = ['AGI', 'DEX']
  if (mode === 'Hybrid') attrs.push('STR')

  const weaponPvP = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weaponPvE = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to normal monsters',
  ], 'Physical Critical Hit Chance')

  const weaponBoss = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to boss monsters',
  ], 'Physical Critical Hit Chance')

  const weaponHybrid = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', [
    'Physical Penetration',
    'Max HP',
  ], 'Physical Penetration')

  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP'], 'Reduced damage to normal monsters')

  const bottom = pickExisting('bottom', [
    'Physical Penetration Resistance',
    'Physical Critical Hit Resistance',
  ], 'Physical Penetration Resistance')

  const gloves = pickExisting('gloves', [
    'Physical Accuracy',
    'Max HP',
  ], 'Physical Accuracy')

  const shoes = pickExisting('shoes', [
    'Physical evasion',
    'Max HP',
  ], 'Physical evasion')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Attack Power', 'PvP Defense'], 'PvP Attack Power')
    : pickExisting('necklace', ['Physical Critical Hit Resistance', 'Reduced physical critical hit damage'])

  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('earring', ['Sleep hit rate', 'Stun hit rate'])

  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Accuracy', 'PvP Evasion'], 'PvP Accuracy')
    : pickExisting('ring', ['Sleep resistance', 'Stun resistance'])

  return {
    attributesOn: attrs,
    perSlot: { weapon, helmet, top, bottom, gloves, shoes, necklace, earring, ring },
  }
}

const RECOMMENDED_PER_SLOT = 2

function pickExisting(slot: SlotKey, labels: string[], primary?: string, limit: number = RECOMMENDED_PER_SLOT) {
  const available = (slots as Record<string, string[]>)[slot] || []
  // Ambil hanya sejumlah rekomendasi yang diizinkan (default 2), tetap valid terhadap data slot
  const filtered = labels.filter((l) => available.includes(l)).slice(0, Math.min(limit, MAX_OPTIONS_PER_SLOT))
  const pri = primary && filtered.includes(primary) ? primary : undefined
  return { selected: filtered, primary: pri }
}

function recommendDekanDragonKnight(mode?: ModeKey): Recommendation {
  const attrs: AttributeKey[] = ['STR', 'VIT']
  if (mode === 'Hybrid') attrs.push('AGI')

  const weaponPvP = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
  ], 'Physical Critical Hit Chance')

  const weaponPvE = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to normal monsters',
  ], 'Physical Critical Hit Chance')

  const weaponBoss = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'Increased damage to boss monsters',
  ], 'Physical Critical Hit Chance')

  const weaponHybrid = pickExisting('weapon', [
    'Physical Critical Hit Chance',
    'Increased physical critical hit damage',
    'PvP Damage increase',
    'Increased damage to boss monsters',
  ], 'Physical Critical Hit Chance')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', [
    'Physical Penetration',
    'Max HP',
    'HP Natural Recovery',
  ], 'Physical Penetration')

  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP', 'Max MP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP', 'Max MP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP', 'Max MP'], 'Reduced damage to normal monsters')

  const bottom = pickExisting('bottom', [
    'Physical Penetration Resistance',
    'Physical Critical Hit Resistance',
    'Max HP',
  ], 'Physical Penetration Resistance')

  const gloves = pickExisting('gloves', [
    'Physical Accuracy',
    'Max HP',
    'HP Potion Increased recovery amount',
  ], 'Physical Accuracy')

  const shoes = pickExisting('shoes', [
    'Physical evasion',
    'Max HP',
    'HP Potion Increased recovery amount',
  ], 'Physical evasion')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Attack Power', 'PvP Defense', 'Reduced physical critical hit damage'], 'PvP Attack Power')
    : pickExisting('necklace', ['Physical Critical Hit Resistance', 'Reduced physical critical hit damage', 'Max HP'])

  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Accuracy', 'PvP Evasion', 'Stun hit rate'], 'PvP Accuracy')
    : pickExisting('earring', ['Stun hit rate', 'Bond hit rate', 'Silent Hit Rate'])

  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Accuracy', 'PvP Evasion', 'Stun resistance'], 'PvP Accuracy')
    : pickExisting('ring', ['Stun resistance', 'Bondage resistance', 'Silent Resistance Rate'])

  return {
    attributesOn: attrs,
    perSlot: {
      weapon,
      helmet,
      top,
      bottom,
      gloves,
      shoes,
      necklace,
      earring,
      ring,
    },
  }
}

function recommendDekanDragonSage(mode?: ModeKey): Recommendation {
  const attrs: AttributeKey[] = ['INT', 'VIT']
  if (mode === 'Hybrid') attrs.push('WIS')

  const weaponPvP = pickExisting('weapon', [
    'Magic Critical Hit Chance',
    'Increased magic critical hit damage',
    'PvP Damage increase',
  ], 'Magic Critical Hit Chance')

  const weaponPvE = pickExisting('weapon', [
    'Magic Critical Hit Chance',
    'Increased magic critical hit damage',
    'Increased damage to normal monsters',
  ], 'Magic Critical Hit Chance')

  const weaponBoss = pickExisting('weapon', [
    'Magic Critical Hit Chance',
    'Increased magic critical hit damage',
    'Increased damage to boss monsters',
  ], 'Magic Critical Hit Chance')

  const weaponHybrid = pickExisting('weapon', [
    'Magic Critical Hit Chance',
    'Increased magic critical hit damage',
    'PvP Damage increase',
    'Increased damage to boss monsters',
  ], 'Magic Critical Hit Chance')

  const weapon = mode === 'PvP' ? weaponPvP : mode === 'Bossing' ? weaponBoss : mode === 'Hybrid' ? weaponHybrid : weaponPvE

  const helmet = pickExisting('helmet', [
    'Magic Penetration',
    'Max MP',
    'MP Natural Recovery',
  ], 'Magic Penetration')

  const top = mode === 'PvP'
    ? pickExisting('top', ['PvP Damage decrease', 'Max HP', 'Max MP'], 'PvP Damage decrease')
    : mode === 'Bossing'
      ? pickExisting('top', ['Reduced damage to boss monsters', 'Max HP', 'Max MP'], 'Reduced damage to boss monsters')
      : pickExisting('top', ['Reduced damage to normal monsters', 'Max HP', 'Max MP'], 'Reduced damage to normal monsters')

  const bottom = pickExisting('bottom', [
    'Magic Penetration Resistance',
    'Magic critical hit resistance',
    'Max HP',
  ], 'Magic Penetration Resistance')

  const gloves = pickExisting('gloves', [
    'Magical Accuracy',
    'Max MP',
    'MP Potion Increased recovery amount',
  ], 'Magical Accuracy')

  const shoes = pickExisting('shoes', [
    'Magic Evasion',
    'Max HP',
    'MP Potion Increased recovery amount',
  ], 'Magic Evasion')

  const necklace = mode === 'PvP'
    ? pickExisting('necklace', ['PvP Attack Power', 'PvP Defense', 'Reduced magic critical hit damage'], 'PvP Attack Power')
    : pickExisting('necklace', ['Magic critical hit resistance', 'Reduced magic critical hit damage', 'Max MP'])

  const earring = mode === 'PvP'
    ? pickExisting('earring', ['PvP Accuracy', 'PvP Evasion', 'Sleep hit rate'], 'PvP Accuracy')
    : pickExisting('earring', ['Sleep hit rate', 'Freezing hit rate', 'Silent Hit Rate'])

  const ring = mode === 'PvP'
    ? pickExisting('ring', ['PvP Accuracy', 'PvP Evasion', 'Sleep resistance'], 'PvP Accuracy')
    : pickExisting('ring', ['Sleep resistance', 'Freezing resistance', 'Silent Resistance Rate'])

  return {
    attributesOn: attrs,
    perSlot: {
      weapon,
      helmet,
      top,
      bottom,
      gloves,
      shoes,
      necklace,
      earring,
      ring,
    },
  }
}

export function getRecommendation(klass?: ClassKey, sub?: string, mode?: ModeKey): Recommendation | null {
  if (!klass || !sub) return null
  if (klass === 'Dekan') {
    if (sub === 'Dragon Knight') return recommendDekanDragonKnight(mode)
    if (sub === 'Dragon Sage') return recommendDekanDragonSage(mode)
  }
  if (klass === 'Dhan') {
    if (sub === 'Avenger') return recommendDhanAvenger(mode)
    if (sub === 'Predator') return recommendDhanPredator(mode)
  }
  if (klass === 'Half Elf') {
    if (sub === 'Scout') return recommendHalfElfScout(mode)
    if (sub === 'Ranger') return recommendHalfElfRanger(mode)
  }
  if (klass === 'Elf') {
    if (sub === 'Templar') return recommendElfTemplar(mode)
    if (sub === 'Priest') return recommendElfPriest(mode)
  }
  if (klass === 'Human') {
    if (sub === 'Guardian') return recommendHumanGuardian(mode)
    if (sub === 'Defender') return recommendHumanDefender(mode)
  }
  return null
}

export function activeMode(modes: Record<ModeKey, boolean> | undefined): ModeKey | undefined {
  if (!modes) return undefined
  const priority: ModeKey[] = ['PvP', 'Bossing', 'PvE', 'Hybrid']
  return priority.find((m) => modes[m])
}

export type SubClassMeta = {
  pros: string[]
  cons: string[]
}

export const SubClassInfos: Record<string, SubClassMeta> = {
  'Dragon Knight': {
    pros: [
      'Strong physical burst and sustained DPS (Evolve buffs Physical Damage, Attack/Move Speed).',
      'Has stun/taunt for control and aggro; solid in PvP skirmishes.',
      'Great with STR, Physical Penetration, Crit Rate/Damage.',
    ],
    cons: [
      'More vulnerable to magic-heavy opponents; needs mitigation vs magic.',
      'Requires good penetration/accuracy vs high defense/evasion targets.',
    ],
  },
  'Dragon Sage': {
    pros: [
      'High magical DPS and AoE with slows and cast speed debuffs.',
      'Great with INT, Magic Penetration, Crit Rate/Damage, and MP sustain.',
      'Effective for both PvP burst and PvE farming.',
    ],
    cons: [
      'Squishier; benefits from HP/defensive layers.',
      'Needs magical accuracy/penetration to overcome resistances.',
    ],
  },
  Avenger: {
    pros: [
      'High single-target burst; strong assassination from stealth and gap-closing.',
      'Sustain via lifesteal skills (e.g., Health Burn); excellent duelist in PvP.',
      'Scales with AGI (crit/evasion) plus Physical Penetration and Crit stats.',
    ],
    cons: [
      'Squishy if caught; relies on positioning/stealth windows.',
      'Accuracy/penetration needed vs high evasion/defense targets.',
    ],
  },
  Predator: {
    pros: [
      'Better AoE coverage and CC chaining (stun/sleep/poison synergies).',
      'Great skirmisher with mobility and crit uptime; excels in group fights.',
      'Scales with AGI; benefits from PvP Damage and Crit Rate/Damage.',
    ],
    cons: [
      'Damage can be situational (needs debuffs/CC uptime).',
      'Lower sustain if not leveraging lifesteal or defensive layers.',
    ],
  },
  Scout: {
    pros: [
      'Strong AoE toolkit (rain/multi shots) with freeze and slows for control.',
      'Great kiting and utility; benefits from DEX (crit/range) and AGI (evasion).',
      'Scales well in PvE farming and group fights.',
    ],
    cons: [
      'Lower single-target burst compared to Ranger in similar gear.',
      'Reliant on positioning and control uptime to maximize value.',
    ],
  },
  Ranger: {
    pros: [
      'Higher single-target burst with crit-focused passives and shots.',
      'Good PvP utility (disable items, defense shred) and strong range scaling.',
      'Best with DEX focus, AGI as secondary for survivability.',
    ],
    cons: [
      'Less AoE coverage than Scout; can struggle in large packs.',
      'Squishy if focused; needs careful positioning.',
    ],
  },
  Templar: {
    pros: [
      'Magical DPS with good crit scaling and AoE freeze/control tools.',
      'Party utility buffs (defense/attack) improve group performance.',
      'Synergizes with INT (damage), WIS (resource/utility), and Magic Penetration.',
    ],
    cons: [
      'Less sustain than Priest; positioning is crucial to avoid focus.',
      'Magic accuracy/penetration required versus high resist targets.',
    ],
  },
  Priest: {
    pros: [
      'Strong party support and shields scaling with WIS; solid sustained healing.',
      'Has silence AoE tools and damage scaling with Wisdom (Nemesis).',
      'Synergizes with WIS (healing/shields) and INT (damage contribution).',
    ],
    cons: [
      'Lower personal DPS; relies on team to convert utility into wins.',
      'Can be targeted in PvP; needs resistances and positioning.',
    ],
  },
  Guardian: {
    pros: [
      'Strong physical DPS with crit scaling and mobility tools (rush/charge).',
      'Party debuffs (defense shred, war cry) increase team damage.',
      'Synergizes with STR (damage), DEX (crit/accuracy), and Physical Penetration.',
    ],
    cons: [
      'Less tankiness than Defender; vulnerable if focused.',
      'Needs accuracy/crit to fully leverage offensive toolkit.',
    ],
  },
  Defender: {
    pros: [
      'Excellent frontline durability (penetration resistance, max HP, regen).',
      'Strong control and party buffs; tools to peel and mitigate.',
      'Synergizes with VIT (HP/defense) and STR (threat/damage).',
    ],
    cons: [
      'Lower damage output vs Guardian; relies on team for kills.',
      'Requires gear investment in resistances to shine in PvP.',
    ],
  },
}
