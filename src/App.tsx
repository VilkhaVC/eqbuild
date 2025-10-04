import React from 'react'
import Toolbar from './components/Toolbar'
import SlotCard from './components/SlotCard'
import slots from './data/slots.json'
import type { SlotKey } from './store/builder'
import StaticCard from './components/StaticCard'
import { CrossedSwordsIcon } from './icons/SlotIcons'
import { useBuilderStore } from './store/builder'
import Modal from './components/Modal'
import StatCalculator from './components/StatCalculator'

const layout: Array<{ key: SlotKey; title: string }> = [
  { key: 'weapon', title: 'Weapon' },
  { key: 'helmet', title: 'Helmet' },
  { key: 'top', title: 'Top' },
  { key: 'bottom', title: 'Bottom' },
  { key: 'gloves', title: 'Gloves' },
  { key: 'shoes', title: 'Shoes' },
  { key: 'necklace', title: 'Necklace' },
  { key: 'earring', title: 'Earring' },
  { key: 'ring', title: 'Ring' },
]

export default function App() {
  const { resetAll } = useBuilderStore()
  const [calcOpen, setCalcOpen] = React.useState(false)
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-screen overflow-hidden px-2 py-2 flex flex-col gap-2">
      <header className="flex items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Rohan 2 EQ stats Build</h1>
          <CrossedSwordsIcon className="w-7 h-7 text-slate-700" />
        </div>
      </header>

      <Toolbar />

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {layout.map((s) => {
          const list = (slots as Record<string, string[]>)[s.key]
          return <SlotCard key={s.key} slotKey={s.key} title={s.title} stats={list} />
        })}
        <StaticCard />
      </main>

      <footer className="mt-2 flex items-center justify-between">
        <div className="text-xs text-slate-500">
          Note: Colors are visual cues only and do not affect any calculation.
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-2 text-sm rounded border border-slate-300 text-slate-700 hover:bg-slate-50"
            onClick={() => setCalcOpen(true)}
          >
            Stat Calculator
          </button>
          <button
            className="px-3 py-2 text-sm rounded bg-slate-800 text-white hover:bg-slate-700"
            onClick={resetAll}
          >
            Reset All
          </button>
        </div>
      </footer>

      <Modal open={calcOpen} onClose={() => setCalcOpen(false)} title="Stat Calculator" maxWidth="max-w-2xl">
        <StatCalculator />
      </Modal>
    </div>
  )
}
