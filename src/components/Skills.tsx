import React from 'react'
import { useSkillsStore } from '../store/skills'
import { dekanSkills } from '../data/skills/dekan'
import { halfElfSkills } from '../data/skills/half-elf'
import { elfSkills } from '../data/skills/elf'
import { dhanSkills } from '../data/skills/dhan'
import { humanSkills } from '../data/skills/human'
import type { Skill } from '../data/skills/types'
import { BaseSubclassByClass, ClassToSubclasses } from '../core/rules'
import { expandRanks } from '../data/skills/utils'

const classTabs = ['Dekan', 'Half Elf', 'Elf', 'Dhan', 'Human']

function gradeCardBg(grade: string): string {
  switch (grade) {
    case 'Advanced':
      return 'bg-green-50 border-green-300'
    case 'Rare':
      return 'bg-blue-50 border-blue-300'
    case 'Ancient':
      return 'bg-purple-50 border-purple-300'
    case 'Normal':
    default:
      return 'bg-white border-slate-200'
  }
}

function gradeBadgeClasses(grade: string): string {
  switch (grade) {
    case 'Advanced':
      return 'border-green-300 bg-green-100 text-green-800'
    case 'Rare':
      return 'border-blue-300 bg-blue-100 text-blue-800'
    case 'Ancient':
      return 'border-purple-300 bg-purple-100 text-purple-800'
    case 'Normal':
    default:
      return 'border-slate-300 bg-slate-100 text-slate-700'
  }
}

function highlightNumbers(text: string): React.ReactNode {
  const parts = text.split(/(\d+(?:\.\d+)?%?)/g)
  return parts.map((p, i) => {
    if (/^\d+(?:\.\d+)?%?$/.test(p)) {
      return (
        <span key={i} className="px-0.5 rounded bg-yellow-100 text-rose-700 font-semibold">
          {p}
        </span>
      )
    }
    return <React.Fragment key={i}>{p}</React.Fragment>
  })
}

export default function Skills() {
  const {
    selectedClass,
    selectedSubclass,
    plan,
    setClass,
    setSubclass,
    setSkillLevel,
    resetPlan,
  } = useSkillsStore()

  const allSkills: Skill[] = React.useMemo(() => [...dekanSkills, ...halfElfSkills, ...elfSkills, ...dhanSkills, ...humanSkills], [])

  const baseSubclass = React.useMemo(() => BaseSubclassByClass[selectedClass] || 'Dragon Fighter', [selectedClass])
  const baseSkills = React.useMemo(
    () => allSkills.filter(s => s.classId === selectedClass && s.subclassId === baseSubclass),
    [allSkills, selectedClass, baseSubclass]
  )
  const advancedOptions = React.useMemo(() => ClassToSubclasses[selectedClass] || [], [selectedClass])
  const advSelected = React.useMemo(
    () => (selectedSubclass && advancedOptions.includes(selectedSubclass) ? selectedSubclass : undefined),
    [selectedSubclass, advancedOptions]
  )
  const advSkills = React.useMemo(
    () => (advSelected ? allSkills.filter(s => s.classId === selectedClass && s.subclassId === advSelected) : []),
    [allSkills, selectedClass, advSelected]
  )

  const baseActive = React.useMemo(() => baseSkills.filter(s => s.type === 'active'), [baseSkills])
  const basePassive = React.useMemo(() => baseSkills.filter(s => s.type === 'passive'), [baseSkills])
  const advActive = React.useMemo(() => advSkills.filter(s => s.type === 'active'), [advSkills])
  const advPassive = React.useMemo(() => advSkills.filter(s => s.type === 'passive'), [advSkills])

  const onChangeLevel = (id: string, lv: number) => {
    setSkillLevel(id, lv)
  }

  React.useEffect(() => {
    allSkills.forEach((sk) => {
      const lv = plan[sk.id]?.level ?? 0
      if (lv === 0) setSkillLevel(sk.id, 1)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allSkills])

  const handleResetPlan = () => {
    resetPlan()
    setTimeout(() => {
      allSkills.forEach((sk) => setSkillLevel(sk.id, 1))
    }, 0)
  }

  return (
    <div className="flex-1 flex flex-col gap-3 overflow-hidden">
      {/* Top bar: Classes + controls */}
      <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
        <div className="flex items-center gap-2 flex-wrap">
          {classTabs.map((c) => (
            <button
              key={c}
              onClick={() => setClass(c)}
              className={`px-3 py-1 rounded-full text-sm font-medium min-w-[44px] border-2 transition-colors ${
                selectedClass === c ? 'bg-rose-600 text-white border-rose-600 shadow-sm' : 'bg-white text-rose-600 border-rose-300 hover:bg-rose-50'
              }`}
            >
              {c}
            </button>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <span className="text-xs text-slate-500 mr-2">View:</span>
            <button
              onClick={() => setSubclass(undefined)}
              className={`px-2 py-1 rounded-full text-xs border-2 min-w-[44px] ${!advSelected ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-rose-700 border-rose-300 hover:bg-rose-50'}`}
            >Base
            </button>
            {advancedOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSubclass(opt)}
                className={`px-2 py-1 rounded-full text-xs border-2 min-w-[44px] ${advSelected === opt ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-rose-700 border-rose-300 hover:bg-rose-50'}`}
              >{opt}</button>
            ))}
          </div>
        </div>
        <div className="flex items-end gap-3">
          <button onClick={handleResetPlan} className="px-3 py-1 rounded-full text-sm border-2 border-slate-300 bg-white hover:bg-slate-50">Reset Plan</button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow border-2 border-slate-300 p-4 overflow-hidden">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-800">{!advSelected ? `Early Skills (Lv 1–50) — ${baseSubclass}` : `Advanced Skills — ${advSelected}`}</h2>
        </div>
        <h3 className="text-base font-semibold text-slate-700 mb-2">Active Skills</h3>
        <div className="grid grid-cols-5 gap-3 mb-6">
          {(!advSelected ? baseActive : advActive).map((sk) => {
            const ranks = expandRanks(sk.ranks)
            const selected = plan[sk.id]
            const maxLevel = ranks.reduce((sum, r) => sum + r.levels.length, 0)
            const levelVal = Math.min(maxLevel, Math.max(0, selected?.level || 0))
            let rankIdx = 0
            let within = 0
            if (levelVal > 0) {
              let rem = levelVal
              for (let i = 0; i < ranks.length; i++) {
                const len = ranks[i].levels.length
                if (rem <= len) { rankIdx = i; within = rem; break }
                rem -= len
              }
            }
            const currentRank = ranks[rankIdx]
            const levelMeta = levelVal > 0 ? currentRank.levels.find(l => l.level === within) : undefined
            return (
              <div key={sk.id} className={`rounded-lg border-2 p-3 h-full flex flex-col ${gradeCardBg(currentRank.grade)}`}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-slate-800 truncate mr-2">{sk.name}</div>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border ${gradeBadgeClasses(currentRank.grade)}`}>{currentRank.grade}</span>
                </div>
                <div className="mt-2 text-xs text-slate-600">
                  {levelVal > 0 ? (
                    <>
                      <div className="mb-1">{levelMeta ? highlightNumbers(levelMeta.text) : null}</div>
                      {levelMeta?.cooldownSec !== undefined && (
                        <div>
                          {highlightNumbers(`Cooldown: ${levelMeta.cooldownSec}s`)}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="italic">Set level to see details</div>
                  )}
                </div>
                <div className="mt-auto pt-2 flex items-center gap-1">
                  <button onClick={() => onChangeLevel(sk.id, Math.max(0, levelVal - 1))} className="w-7 h-7 rounded-md border border-slate-300 bg-white text-slate-700">-</button>
                  <div className="w-10 text-center text-sm font-semibold">{levelVal}</div>
                  <button onClick={() => onChangeLevel(sk.id, Math.min(maxLevel, levelVal + 1))} className="w-7 h-7 rounded-md border border-slate-300 bg-white text-slate-700">+</button>
                </div>
              </div>
            )
          })}
        </div>
        <h3 className="text-base font-semibold text-slate-700 mb-2">Passive Skills</h3>
        <div className="grid grid-cols-5 gap-3">
          {(!advSelected ? basePassive : advPassive).map((sk) => {
            const ranks = expandRanks(sk.ranks)
            const selected = plan[sk.id]
            const maxLevel = ranks.reduce((sum, r) => sum + r.levels.length, 0)
            const levelVal = Math.min(maxLevel, Math.max(0, selected?.level || 0))
            let rankIdx = 0
            let within = 0
            if (levelVal > 0) {
              let rem = levelVal
              for (let i = 0; i < ranks.length; i++) {
                const len = ranks[i].levels.length
                if (rem <= len) { rankIdx = i; within = rem; break }
                rem -= len
              }
            }
            const currentRank = ranks[rankIdx]
            const levelMeta = levelVal > 0 ? currentRank.levels.find(l => l.level === within) : undefined
            return (
              <div key={sk.id} className={`rounded-lg border-2 p-3 h-full flex flex-col ${gradeCardBg(currentRank.grade)}`}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-slate-800 truncate mr-2">{sk.name}</div>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border ${gradeBadgeClasses(currentRank.grade)}`}>{currentRank.grade}</span>
                </div>
                <div className="mt-2 text-xs text-slate-600">
                  {levelVal > 0 ? (
                    <>
                      <div className="mb-1">{levelMeta ? highlightNumbers(levelMeta.text) : null}</div>
                      {levelMeta?.cooldownSec !== undefined && (
                        <div>
                          {highlightNumbers(`Cooldown: ${levelMeta.cooldownSec}s`)}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="italic">Set level to see details</div>
                  )}
                </div>
                <div className="mt-auto pt-2 flex items-center gap-1">
                  <button onClick={() => onChangeLevel(sk.id, Math.max(0, levelVal - 1))} className="w-7 h-7 rounded-md border border-slate-300 bg-white text-slate-700">-</button>
                  <div className="w-10 text-center text-sm font-semibold">{levelVal}</div>
                  <button onClick={() => onChangeLevel(sk.id, Math.min(maxLevel, levelVal + 1))} className="w-7 h-7 rounded-md border border-slate-300 bg-white text-slate-700">+</button>
                </div>
              </div>
            )
          })}
        </div>
      
      </div>
    </div>
  )
}
