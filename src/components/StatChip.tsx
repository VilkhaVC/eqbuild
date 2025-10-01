import React from 'react'

type Props = {
  label: string
  selected: boolean
  disabled?: boolean
  primary?: boolean
  color: string
  onToggle: () => void
  onSetPrimary: () => void
  onChangeColor: (c: string) => void
}

export default function StatChip({ label, selected, disabled, primary, color, onToggle, onSetPrimary, onChangeColor }: Props) {
  return (
    <div className="flex items-center gap-2">
      <button
        className={[
          'px-2 py-1 rounded-full text-xs border transition-colors flex items-center gap-1',
          selected ? 'text-white' : 'text-slate-700',
          disabled && !selected ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90',
        ].join(' ')}
        style={{ backgroundColor: selected ? color : undefined, borderColor: color }}
        onClick={onToggle}
        disabled={disabled && !selected}
        title={label}
      >
        <span
          className="inline-block mr-1 select-none"
          onClick={(e) => {
            e.stopPropagation()
            onSetPrimary()
          }}
          title={primary ? 'Remove primary stat' : 'Set as primary stat'}
          aria-label={primary ? 'unset-primary' : 'set-primary'}
        >
          {primary ? '★' : '☆'}
        </span>
        <span className="truncate max-w-[12rem]">{label}</span>
      </button>

      {selected && (
        <input
          type="color"
          value={color}
          onChange={(e) => onChangeColor(e.target.value)}
          title="Change stat color"
          className="h-6 w-6 p-0 border rounded cursor-pointer"
        />
      )}
    </div>
  )
}
