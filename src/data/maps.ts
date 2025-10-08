export type MapInfo = {
  id: string
  name: string
  levelRange: string
  type: 'Village' | 'Field' | 'Dungeon' | 'Special'
  description?: string
  monsters?: string[]
  imageUrl?: string
  features?: string[]
}

export const mapsData: MapInfo[] = [
  {
    id: 'field-dungeon',
    name: 'Field Dungeon',
    levelRange: '10-25',
    type: 'Field',
    description: 'Open field area with various monsters',
    monsters: ['Goblin', 'Wolf', 'Orc'],
    features: ['PvP Zone', 'Resource Gathering'],
    imageUrl: '/maps/field-dungeon.png'
  },
  {
    id: 'del-lagos',
    name: 'Del Lagos',
    levelRange: '25-40',
    type: 'Dungeon',
    description: 'Underground dungeon with challenging enemies',
    monsters: ['Skeleton', 'Dark Mage', 'Undead Knight'],
    features: ['Boss Monster', 'Rare Drops'],
    imageUrl: '/maps/del-lagos.png'
  },
  {
    id: 'via-marea',
    name: 'Via Marea',
    levelRange: '30-45',
    type: 'Field',
    description: 'Coastal area with sea monsters',
    monsters: ['Sea Serpent', 'Pirate', 'Kraken'],
    features: ['Naval Combat', 'Fishing'],
    imageUrl: '/maps/via-marea.png'
  },
  {
    id: 'averaury',
    name: 'Averaury',
    levelRange: '40-55',
    type: 'Dungeon',
    description: 'Ancient ruins with powerful guardians',
    monsters: ['Ancient Golem', 'Lich', 'Dragon'],
    features: ['Legendary Items', 'Epic Boss'],
    imageUrl: '/maps/averaury.png'
  },
  {
    id: 'morissen',
    name: 'Morissen',
    levelRange: '45-60',
    type: 'Special',
    description: 'Dark realm with demonic creatures',
    monsters: ['Demon', 'Shadow Beast', 'Fallen Angel'],
    features: ['High Risk High Reward', 'Rare Materials'],
    imageUrl: '/maps/morissen.png'
  },
  {
    id: 'gaizen',
    name: 'Gaizen',
    levelRange: '50-65',
    type: 'Field',
    description: 'Frozen wasteland with ice monsters',
    monsters: ['Ice Troll', 'Frost Giant', 'Ice Dragon'],
    features: ['Extreme Weather', 'Ice Equipment'],
    imageUrl: '/maps/gaizen.png'
  },
  {
    id: 'east-bahran-island',
    name: 'East Bahran Island',
    levelRange: '55-70',
    type: 'Special',
    description: 'Remote island with unique ecosystem',
    monsters: ['Island Guardian', 'Exotic Beast', 'Tribal Warrior'],
    features: ['Island Exclusive', 'Rare Species'],
    imageUrl: '/maps/east-bahran-island.png'
  }
]

export const mapTypeColors = {
  Village: '#10b981', // emerald-500
  Field: '#3b82f6',   // blue-500
  Dungeon: '#f59e0b', // amber-500
  Special: '#8b5cf6'  // violet-500
}
