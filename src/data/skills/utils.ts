import type { NumericSpec, SkillLevel, SkillRank, SkillGrade } from './types'

function resolveNumeric(spec: NumericSpec, index: number): number {
  if (typeof spec === 'number') return spec
  if (Array.isArray(spec)) {
    const i = Math.max(0, Math.min(spec.length - 1, index))
    const v = spec[i]
    return typeof v === 'number' ? v : Number(v)
  }
  return spec.base + spec.step * index
}

export function expandRank(rank: SkillRank): SkillLevel[] {
  if (rank.levels && rank.levels.length) return rank.levels
  const g = rank.gen
  if (!g) return []
  const len = Math.max(1, Math.min(5, g.levelCount ?? 5))
  const out: SkillLevel[] = []
  for (let i = 0; i < len; i++) {
    const level = (i + 1) as 1 | 2 | 3 | 4 | 5
    const cooldownSec = g.cooldown !== undefined ? resolveNumeric(g.cooldown, i) : undefined
    const varVals: Record<string, number> = {}
    for (const k of Object.keys(g.vars)) {
      varVals[k] = resolveNumeric(g.vars[k], i)
    }
    const text = g.template.replace(/\{(\w+)\}/g, (_, key: string) => {
      const v = varVals[key]
      return v !== undefined ? String(v) : `{${key}}`
    })
    out.push({ level, cooldownSec, text })
  }
  return out
}

export function expandRanks(ranks: SkillRank[]): Array<{ grade: SkillGrade; levels: SkillLevel[] }> {
  return ranks.map((r) => ({ grade: r.grade, levels: expandRank(r) }))
}
