import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { SkillGrade } from '../data/skills/types'

export type SkillsPlannerState = {
  selectedClass: string
  level: number
  selectedSubclass?: string
  totalPoints: number
  limitEnforced: boolean
  plan: Record<string, { grade: SkillGrade; level: number }>
  setClass: (c: string) => void
  setLevel: (lv: number) => void
  setSubclass: (s?: string) => void
  setTotalPoints: (n: number) => void
  toggleLimit: () => void
  setSkillLevel: (id: string, level: number) => void
  setSkillGrade: (id: string, grade: SkillGrade) => void
  resetPlan: () => void
}

export const useSkillsStore = create<SkillsPlannerState>()(
  persist(
    (set, get) => ({
      selectedClass: 'Dekan',
      level: 1,
      selectedSubclass: undefined,
      totalPoints: 20,
      limitEnforced: false,
      plan: {},
      setClass: (c) => set({ selectedClass: c, selectedSubclass: undefined }),
      setLevel: (lv) => set({ level: Math.max(1, Math.min(100, Math.floor(lv))) }),
      setSubclass: (s) => set({ selectedSubclass: s }),
      setTotalPoints: (n) => set({ totalPoints: Math.max(0, Math.min(200, Math.floor(n))) }),
      toggleLimit: () => set((st) => ({ limitEnforced: !st.limitEnforced })),
      setSkillLevel: (id, level) => {
        const state = get()
        const cur = state.plan[id] || { grade: 'Normal' as SkillGrade, level: 0 }
        const nextLevel = Math.max(0, Math.min(10, Math.floor(level)))
        set({ plan: { ...state.plan, [id]: { ...cur, level: nextLevel } } })
      },
      setSkillGrade: (id, grade) => {
        const state = get()
        const cur = state.plan[id] || { grade: 'Normal' as SkillGrade, level: 0 }
        set({ plan: { ...state.plan, [id]: { ...cur, grade } } })
      },
      resetPlan: () => set({ plan: {} }),
    }),
    { name: 'rohan-skills-planner', version: 1 }
  )
)
