import React from 'react'
import { useBuilderStore } from '../store/builder'
import { SubClassInfos } from '../core/recommendations'

export default function StaticCard() {
  const { selectedClass, selectedSubClass } = useBuilderStore()
  const meta = selectedSubClass ? SubClassInfos[selectedSubClass] : undefined
  return (
    <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center justify-center border-2 border-slate-300 text-center gap-2">
      <span className="text-lg font-semibold">Class & Sub-Class</span>
      <div className="text-sm text-slate-700">
        <div><span className="font-medium">Class:</span> {selectedClass ?? 'Not selected'}</div>
        <div><span className="font-medium">Sub-Class:</span> {selectedSubClass ?? 'Not selected'}</div>
      </div>
      {selectedSubClass ? (
        meta ? (
          <div className="w-full text-left text-xs text-slate-700 grid grid-cols-1 gap-2 mt-1">
            <div>
              <div className="font-semibold mb-1">Pros</div>
              <ul className="list-disc pl-5 space-y-0.5">
                {meta.pros.map((p, i) => (
                  <li key={`pro-${i}`}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1">Cons</div>
              <ul className="list-disc pl-5 space-y-0.5">
                {meta.cons.map((c, i) => (
                  <li key={`con-${i}`}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <span className="text-xs text-slate-500">Sub-Class info coming soon</span>
        )
      ) : (
        <span className="text-xs text-slate-500">Set selections in the Toolbar (top right)</span>
      )}
    </div>
  )
}
