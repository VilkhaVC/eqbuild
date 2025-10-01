export const MAX_OPTIONS_PER_SLOT = 4
export const PRIMARY_OPTIONAL = true

export type Category = 'Offense' | 'Defense' | 'Status' | 'PvP' | 'Recovery'

export const CategoryColors: Record<Category, string> = {
  Offense: '#f97316',
  Defense: '#3b82f6',
  Status: '#14b8a6',
  PvP: '#a855f7',
  Recovery: '#f59e0b',
}

// Heuristik kategori berdasarkan nama stat (bisa disesuaikan bila ada koreksi)
export function getStatCategory(label: string): Category {
  const l = label.toLowerCase()
  if (
    l.includes('pvp attack') ||
    l.includes('pvp damage') ||
    l.includes('damage increase') ||
    l.includes('critical hit chance') ||
    l.includes('critical hit damage') ||
    l.includes('accuracy') ||
    l.includes('evasion')
  ) return 'Offense'

  if (
    l.includes('defense') ||
    l.includes('penetration resistance') ||
    l.includes('critical hit resistance') ||
    l.includes('reduced physical critical hit damage') ||
    l.includes('reduced magic critical hit damage')
  ) return 'Defense'

  if (
    l.includes('pvp') && (l.includes('accuracy') || l.includes('evasion') || l.includes('defense'))
  ) return 'PvP'

  if (
    l.includes('sleep') || l.includes('stun') || l.includes('freezing') || l.includes('silent') || l.includes('bond') || l.includes('provocation') || l.includes('abnormal')
  ) return 'Status'

  if (
    l.includes('hp') || l.includes('mp') || l.includes('potion') || l.includes('consumption') || l.includes('recovery')
  ) return 'Recovery'

  // Default fallback
  return 'Offense'
}
