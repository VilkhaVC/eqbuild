export type SkillGrade = 'Normal' | 'Advanced' | 'Rare' | 'Ancient'

export type SkillLevel = {
  level: 1 | 2 | 3 | 4 | 5
  cooldownSec?: number
  text: string
}

export type NumericSpec = number | { base: number; step: number } | number[]

export type SkillRankGen = {
  levelCount?: number
  cooldown?: NumericSpec
  template: string
  vars: Record<string, NumericSpec>
}

export type SkillRank = {
  grade: SkillGrade
  levels?: SkillLevel[]
  gen?: SkillRankGen
}

export type Skill = {
  id: string
  classId: string
  subclassId: string
  type: 'active' | 'passive'
  name: string
  icon?: string
  tags?: string[]
  sourceRef?: string
  ranks: SkillRank[]
}
