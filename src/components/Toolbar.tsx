import React from 'react'
import { useBuilderStore, type AttributeKey, type ModeKey, type ClassKey, type SubClassKey } from '../store/builder'
import { ClassToSubclasses } from '../core/rules'
import { getRecommendation, activeMode } from '../core/recommendations'
import { PrimaryStatEffectsDesc } from '../data/stats-meta'

export default function Toolbar() {
  const { attributes, toggleAttribute, modes, toggleMode, selectedClass, setClass, selectedSubClass, setSubClass, applyRecommendation } = useBuilderStore()
  const keys: AttributeKey[] = ['STR', 'DEX', 'VIT', 'INT', 'WIS', 'AGI']
  const modeKeys: ModeKey[] = ['PvP', 'PvE', 'Bossing', 'Hybrid']
  const classOptions: ClassKey[] = ['Human', 'Dhan', 'Elf', 'Half Elf', 'Dekan']
  const subClassOptions: SubClassKey[] = selectedClass ? (ClassToSubclasses[selectedClass] || []) : []

  React.useEffect(() => {
    const m = activeMode(modes)
    const rec = getRecommendation(selectedClass, selectedSubClass, m)
    if (rec) {
      applyRecommendation(rec)
    }
  }, [selectedClass, selectedSubClass, modes, applyRecommendation])

  const attributeColors: Record<AttributeKey, string> = {
    STR: '#ef4444', // red-500
    DEX: '#eab308', // yellow-500
    VIT: '#10b981', // emerald-500
    INT: '#6366f1', // indigo-500
    WIS: '#0ea5e9', // sky-500
    AGI: '#22c55e', // green-500
  }

  const modeColors: Record<ModeKey, string> = {
    PvP: '#dc2626',      // red-600
    PvE: '#2563eb',      // blue-600
    Bossing: '#ea580c',  // orange-600
    Hybrid: '#7c3aed',   // purple-600
  }
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
      <div className="flex items-center gap-2">
        <div className="text-sm text-slate-600 mr-2">
          Colors are visual indicators. Select base attributes & mode:
        </div>
        {keys.map((k) => {
          const on = attributes[k]
          const col = attributeColors[k]
          return (
            <button
              key={k}
              onClick={() => toggleAttribute(k)}
              className={[
                'px-3 py-1 rounded-full text-xs transition-colors min-w-[44px] border-2',
                !on ? 'hover:bg-slate-50' : '',
              ].join(' ')}
              style={{
                borderColor: col,
                backgroundColor: on ? col : 'transparent',
                color: on ? '#ffffff' : col,
              }}
              title={`${k}: ${PrimaryStatEffectsDesc[k]} — klik untuk toggle`}
            >
              {k}
            </button>
          )
        })}
        <div className="mx-1 h-5 w-px bg-slate-300" />
        {modeKeys.map((m) => {
          const on = modes[m]
          const col = modeColors[m]
          return (
            <button
              key={m}
              onClick={() => toggleMode(m)}
              className={[
                'px-3 py-1 rounded-full text-xs transition-colors min-w-[44px] border-2',
                !on ? 'hover:bg-slate-50' : '',
              ].join(' ')}
              style={{
                borderColor: col,
                backgroundColor: on ? col : 'transparent',
                color: on ? '#ffffff' : col,
              }}
              title={`Toggle ${m}`}
            >
              {m}
            </button>
          )
        })}
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm md:text-base text-slate-700 font-medium" htmlFor="classSelect">Class</label>
        <select
          id="classSelect"
          value={selectedClass ?? ''}
          onChange={(e) => setClass((e.target.value || undefined) as ClassKey | undefined)}
          className="text-sm md:text-base border-2 border-black rounded-md px-3 py-2 bg-white min-w-[180px] shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        >
          <option value="">Select Class</option>
          {classOptions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <label className="text-sm md:text-base text-slate-700 font-medium" htmlFor="subClassSelect">Sub</label>
        <select
          id="subClassSelect"
          value={selectedSubClass ?? ''}
          onChange={(e) => setSubClass((e.target.value || undefined) as SubClassKey | undefined)}
          disabled={subClassOptions.length === 0}
          className="text-sm md:text-base border-2 rounded-md px-3 py-2 bg-white min-w-[180px] shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-black disabled:opacity-50 disabled:cursor-not-allowed"
          style={subClassOptions.length === 0 ? { borderColor: '#cbd5e1' } : { borderColor: '#000000' }}
        >
          <option value="">{subClassOptions.length ? 'Select Sub-Class' : 'No Sub-Class'}</option>
          {subClassOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
