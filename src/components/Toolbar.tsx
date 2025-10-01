import React from 'react'
import { useBuilderStore } from '../store/builder'

export default function Toolbar() {
  const { resetAll } = useBuilderStore()
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
      <div className="text-sm text-slate-600">
        Colors are visual indicators to help distinguish stats. You can customize them as you like.
      </div>
      <button className="px-3 py-2 text-sm rounded bg-slate-800 text-white hover:bg-slate-700" onClick={resetAll}>
        Reset All
      </button>
    </div>
  )
}
