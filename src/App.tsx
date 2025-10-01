import React from 'react'
import Toolbar from './components/Toolbar'
import SlotCard from './components/SlotCard'
import slots from './data/slots.json'
import type { SlotKey } from './store/builder'
import StaticCard from './components/StaticCard'

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
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-screen overflow-hidden px-2 py-2 flex flex-col gap-2">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Rohan EQ Builder</h1>
      </header>

      <Toolbar />

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {layout.map((s) => {
          const list = (slots as Record<string, string[]>)[s.key]
          return <SlotCard key={s.key} slotKey={s.key} title={s.title} stats={list} />
        })}
        <StaticCard />
      </main>

      <footer className="text-xs text-slate-500 mt-2">
        Note: Colors are visual cues only and do not affect any calculation.
      </footer>
    </div>
  )
}
