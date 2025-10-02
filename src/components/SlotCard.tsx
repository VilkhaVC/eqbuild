import React from 'react'
import { useBuilderStore, type SlotKey } from '../store/builder'
import { CategoryColors, getStatCategory } from '../core/rules'
import StatChip from './StatChip'
import { SlotIcons } from '../icons/SlotIcons'

export default function SlotCard({ slotKey, title, stats }: { slotKey: SlotKey; title: string; stats: string[] }) {
  const { slots, toggleStat, setPrimary, setColor, resetSlot } = useBuilderStore()
  const slotState = slots[slotKey]
  const selectedCount = slotState.selected.length
  const Icon = SlotIcons[slotKey]

  return (
    <div className="bg-white rounded-lg shadow p-3 flex flex-col gap-3 border-2 border-slate-300">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold flex items-center gap-2">
          <Icon className="w-5 h-5 text-slate-600" />
          {title}
        </h3>
        <div className="text-sm text-slate-500">{selectedCount}/4 selected</div>
      </div>

      <div className="flex flex-col gap-2">
        {stats.map((label) => {
          const category = getStatCategory(label)
          const defaultColor = CategoryColors[category]
          const userColor = slotState.colors[label]
          const color = userColor || defaultColor
          const selected = slotState.selected.includes(label)
          const disabled = !selected && selectedCount >= 4
          const primary = slotState.primary === label
          return (
            <StatChip
              key={label}
              label={label}
              selected={selected}
              disabled={disabled}
              primary={primary}
              color={color}
              onToggle={() => toggleStat(slotKey, label)}
              onSetPrimary={() => setPrimary(slotKey, primary ? undefined : label)}
              onChangeColor={(c) => setColor(slotKey, label, c)}
            />
          )
        })}
      </div>

      <div className="pt-2">
        <button className="text-sm text-red-600 hover:underline" onClick={() => resetSlot(slotKey)}>Reset Slot</button>
      </div>
    </div>
  )
}
