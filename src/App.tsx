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
import Maps from './components/Maps'

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

type PageKey = 'builder' | 'maps'

export default function App() {
  const { resetAll } = useBuilderStore()
  const [calcOpen, setCalcOpen] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState<PageKey>('builder')
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-screen overflow-hidden px-2 py-2 flex flex-col gap-2">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-rose-600 to-red-600 text-white shadow hover:shadow-md transition will-change-transform">
            <CrossedSwordsIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-slate-900 via-rose-700 to-red-600 bg-clip-text text-transparent tracking-tight">
              {currentPage === 'builder' ? 'Rohan 2 EQ stats Build' : 'Rohan 2 Maps Explorer'}
            </h1>
            <span className="text-xs text-slate-500">
              {currentPage === 'builder' ? 'Build planner & gear optimizer' : 'Interactive map browser & monster guide'}
            </span>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => setCurrentPage('builder')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'builder'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-rose-600 hover:bg-rose-50 border border-rose-200'
              }`}
            >
              Builder
            </button>
            <button
              onClick={() => setCurrentPage('maps')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'maps'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-rose-600 hover:bg-rose-50 border border-rose-200'
              }`}
            >
              Maps
            </button>
          </div>
        </div>
        <div className="justify-self-end">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-rose-200 bg-white/70 backdrop-blur text-rose-700 text-xs font-semibold shadow-sm hover:shadow transition"
            title="Vilkha — Server: Asia Ohn 01"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span className="font-bold">Vilkha</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span>
              Server: <span className="font-semibold">Asia Ohn 01</span>
            </span>
          </span>
        </div>
      </header>

      {currentPage === 'builder' && (
        <>
          <Toolbar />

          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {layout.map((s) => {
              const list = (slots as Record<string, string[]>)[s.key]
              return <SlotCard key={s.key} slotKey={s.key} title={s.title} stats={list} />
            })}
            <StaticCard />
          </main>

          <footer className="mt-2 grid grid-cols-2 items-center">
            <div className="text-xs text-slate-500 justify-self-start">
              Note: Colors are visual cues only and do not affect any calculation.
            </div>
            <div className="flex items-center gap-2 justify-self-end">
              <button
                className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md text-white bg-gradient-to-r from-rose-600 to-red-600 shadow hover:shadow-md hover:from-rose-500 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 active:scale-[0.98] transition"
                onClick={() => setCalcOpen(true)}
                title="Open Stat Calculator"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7zm0 2h10a1 1 0 0 1 1 1v3H6V5a1 1 0 0 1 1-1zm-1 6h12v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10zm2 2h2v2H8v-2zm0 3h2v2H8v-2zm3-3h2v2h-2v-2zm0 3h2v2h-2v-2zm3-3h2v2h-2v-2zm0 3h2v2h-2v-2z" />
                </svg>
                <span>Stat Calculator</span>
              </button>
              <button
                className="px-3 py-2 text-sm rounded bg-slate-800 text-white hover:bg-slate-700"
                onClick={resetAll}
              >
                Reset All
              </button>
            </div>
          </footer>
        </>
      )}

      {currentPage === 'maps' && <Maps />}

      <Modal open={calcOpen} onClose={() => setCalcOpen(false)} title="Stat Calculator" maxWidth="max-w-2xl">
        <StatCalculator />
      </Modal>
    </div>
  )
}
