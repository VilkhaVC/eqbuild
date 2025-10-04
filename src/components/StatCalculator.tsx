import React from 'react'
import { type AttributeKey } from '../store/builder'
import { PrimaryToSecondary, SecondaryDisplayLabels, type SecondaryStatKey, PrimaryStatEffectsDesc } from '../data/stats-meta'
import { AttributeColors } from '../data/colors'

export default function StatCalculator() {
  const [level, setLevel] = React.useState<string>('')
  const [manualPoints, setManualPoints] = React.useState<string>('')
  const [alloc, setAlloc] = React.useState<Record<AttributeKey, number>>(() => ({
    STR: 0, DEX: 0, VIT: 0, INT: 0, WIS: 0, AGI: 0,
  }))
  // Baseline untuk highlight perubahan; akan di-reset saat user klik "Clear highlight"
  const baselineAllocRef = React.useRef<Record<AttributeKey, number>>({
    STR: 0, DEX: 0, VIT: 0, INT: 0, WIS: 0, AGI: 0,
  })
  const [deltaTotals, setDeltaTotals] = React.useState<Partial<Record<SecondaryStatKey, number>>>({})
  const [deltaSources, setDeltaSources] = React.useState<Partial<Record<SecondaryStatKey, AttributeKey[]>>>({})

  // Hitung poin dari Level dengan aturan yang diketahui: Lv 6-50 => 3 poin/level
  const computedPoints = React.useMemo(() => {
    const lv = parseInt(level || '0', 10)
    if (Number.isNaN(lv) || lv <= 0) return undefined
    if (lv < 6) return 0 // belum ada data resmi; asumsikan 0 untuk lv<6
    if (lv <= 50) return (lv - 5) * 3
    // Untuk lv>50 belum ada angka resmi; tampilkan undefined agar user isi manual
    return undefined
  }, [level])

  const manual = manualPoints.trim() === '' ? undefined : Number(manualPoints)
  const activePoints = manual ?? computedPoints
  const sumAllocated = Object.values(alloc).reduce((a, b) => a + b, 0)
  const remaining = Math.max(0, (activePoints ?? 0) - sumAllocated)

  const keys: AttributeKey[] = ['STR', 'DEX', 'VIT', 'INT', 'WIS', 'AGI']

  function inc(k: AttributeKey) {
    if ((activePoints ?? 0) <= 0) return
    if (remaining <= 0) return
    setAlloc((prev) => ({ ...prev, [k]: prev[k] + 1 }))
  }
  function dec(k: AttributeKey) {
    setAlloc((prev) => ({ ...prev, [k]: Math.max(0, prev[k] - 1) }))
  }

  const secondaryTotals = React.useMemo(() => {
    const totals: Partial<Record<SecondaryStatKey, number>> = {}
    for (const k of keys) {
      const pts = alloc[k]
      if (!pts) continue
      const effects = PrimaryToSecondary[k]
      for (const ef of effects) {
        totals[ef.to] = (totals[ef.to] ?? 0) + ef.coef * pts
      }
    }
    return totals
  }, [alloc])

  // Hitung delta sejak baseline untuk keperluan highlight
  React.useEffect(() => {
    const deltas: Partial<Record<SecondaryStatKey, number>> = {}
    const sources: Partial<Record<SecondaryStatKey, AttributeKey[]>> = {}
    for (const k of keys) {
      const diff = alloc[k] - baselineAllocRef.current[k]
      if (!diff) continue
      for (const ef of PrimaryToSecondary[k]) {
        deltas[ef.to] = (deltas[ef.to] ?? 0) + ef.coef * diff
        const arr = sources[ef.to] ?? []
        if (!arr.includes(k)) arr.push(k)
        sources[ef.to] = arr
      }
    }
    setDeltaTotals(deltas)
    setDeltaSources(sources)
  }, [alloc])

  function clearAll() {
    const zero: Record<AttributeKey, number> = { STR: 0, DEX: 0, VIT: 0, INT: 0, WIS: 0, AGI: 0 }
    // Set baseline ke nol agar tidak ada delta negatif saat reset
    baselineAllocRef.current = { ...zero }
    setAlloc(zero)
    setDeltaTotals({})
    setDeltaSources({})
  }

  return (
    <div className="statcalc flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-2 text-sm">
        <label className="flex items-center gap-2">
          <span className="min-w-[90px] text-slate-700">Level</span>
          <input
            type="number"
            min={1}
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            placeholder="Enter level"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="min-w-[90px] text-slate-700">Stat Points</span>
          <input
            type="number"
            min={0}
            value={manualPoints}
            onChange={(e) => setManualPoints(e.target.value)}
            placeholder="Manual input (optional)"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          />
        </label>
      </div>

      <div className="text-sm text-slate-700">
        <div className="flex items-center justify-between">
          <span>Total (from Level 6–50)</span>
          <span className="font-semibold">{computedPoints ?? '-'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Total (manual)</span>
          <span className="font-semibold">{manual ?? '-'}</span>
        </div>
        <div className="flex items-center justify-between border-t pt-2 mt-2">
          <span>Active Total</span>
          <span className="font-bold">{activePoints ?? '-'}</span>
        </div>
      </div>

      <div className="text-xs text-slate-500">
        Current rule: Lv 6–50 = 3 points/level. For levels outside this range, please use the manual Stat Points field.
      </div>

      <div className="border-t pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Primary Stats Allocation</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-600">Remaining: <span className="font-semibold">{remaining}</span></span>
                <button
                  className="px-2 py-1 rounded border text-xs hover:bg-slate-50"
                  onClick={clearAll}
                  title="Reset primary allocations and clear highlight"
                >
                  Clear All
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {keys.map((k) => (
                <div key={`row-${k}`} className="flex items-center justify-between">
                  <div className="w-28">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: AttributeColors[k],
                        color: AttributeColors[k],
                        backgroundColor: '#ffffff',
                      }}
                      title={`${k}: ${PrimaryStatEffectsDesc[k]}`}
                    >
                      <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: AttributeColors[k] }} />
                      {k}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 py-1 rounded border text-sm disabled:opacity-50"
                      onClick={() => dec(k)}
                      disabled={alloc[k] <= 0}
                      aria-label={`Decrease ${k}`}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={0}
                      value={alloc[k]}
                      onChange={(e) => {
                        const v = Math.max(0, Math.floor(Number(e.target.value) || 0))
                        // Clamp agar tidak melebihi total aktif
                        const others = sumAllocated - alloc[k]
                        const maxForThis = Math.max(0, (activePoints ?? 0) - others)
                        setAlloc((prev) => ({ ...prev, [k]: Math.min(v, maxForThis) }))
                      }}
                      className="w-20 px-2 py-1 border rounded text-center"
                    />
                    <button
                      className="px-2 py-1 rounded border text-sm disabled:opacity-50"
                      onClick={() => inc(k)}
                      disabled={remaining <= 0}
                      aria-label={`Increase ${k}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Secondary Stats (from allocation)</div>
            <div className="grid grid-cols-1 gap-1 text-sm">
              {Object.keys(SecondaryDisplayLabels).map((k) => {
                const key = k as SecondaryStatKey
                const v = secondaryTotals[key] ?? 0
                const d = deltaTotals[key] ?? 0
                const src = deltaSources[key] ?? []
                const colored = d !== 0
                return (
                  <div key={`sec-${key}`} className={`flex items-center justify-between ${colored ? (d > 0 ? 'bg-green-50' : 'bg-red-50') : ''} px-2 py-1 rounded h-8`}>
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="truncate max-w-[160px]">{SecondaryDisplayLabels[key]}</span>
                      {src.length > 0 ? (
                        <span className="flex items-center gap-1 max-w-[160px] overflow-hidden whitespace-nowrap">
                          {src.map((s) => (
                            <span
                              key={`src-${key}-${s}`}
                              className="text-[10px] px-1 py-0.5 rounded border"
                              style={{
                                backgroundColor: AttributeColors[s],
                                borderColor: AttributeColors[s],
                                color: '#ffffff',
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </span>
                      ) : null}
                    </span>
                    <span className="flex items-center gap-2 ml-2">
                      {colored ? (
                        <span className={`text-xs font-medium ${d > 0 ? 'text-green-600' : 'text-red-600'} w-10 text-right`}>{d > 0 ? `+${d}` : d}</span>
                      ) : (
                        <span className="w-10" />
                      )}
                      <span className="font-semibold w-14 text-right">{v}</span>
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
