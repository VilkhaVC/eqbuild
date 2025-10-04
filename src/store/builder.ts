import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { MAX_OPTIONS_PER_SLOT } from '../core/rules'
import type { Recommendation } from '../core/recommendations'

export type SlotKey =
  | 'weapon'
  | 'helmet'
  | 'top'
  | 'bottom'
  | 'gloves'
  | 'shoes'
  | 'necklace'
  | 'earring'
  | 'ring'

export type AttributeKey = 'STR' | 'DEX' | 'VIT' | 'INT' | 'WIS' | 'AGI'
export type ModeKey = 'PvP' | 'PvE' | 'Bossing' | 'Hybrid'
export type ClassKey = 'Human' | 'Dhan' | 'Elf' | 'Half Elf' | 'Dekan'
export type SubClassKey = string

export type SlotState = {
  selected: string[]
  primary?: string
  colors: Record<string, string> // label -> color hex
}

export type BuilderState = {
  slots: Record<SlotKey, SlotState>
  attributes: Record<AttributeKey, boolean>
  modes: Record<ModeKey, boolean>
  selectedClass?: ClassKey
  selectedSubClass?: SubClassKey
  toggleStat: (slot: SlotKey, label: string) => void
  setPrimary: (slot: SlotKey, label?: string) => void
  setColor: (slot: SlotKey, label: string, color: string) => void
  resetSlot: (slot: SlotKey) => void
  resetAll: () => void
  toggleAttribute: (attr: AttributeKey) => void
  toggleMode: (mode: ModeKey) => void
  setClass: (klass?: ClassKey) => void
  setSubClass: (sub?: SubClassKey) => void
  applyRecommendation: (rec: Recommendation) => void
}

const emptySlot = (): SlotState => ({ selected: [], colors: {} })

const initialState: Record<SlotKey, SlotState> = {
  weapon: emptySlot(),
  helmet: emptySlot(),
  top: emptySlot(),
  bottom: emptySlot(),
  gloves: emptySlot(),
  shoes: emptySlot(),
  necklace: emptySlot(),
  earring: emptySlot(),
  ring: emptySlot(),
}

const initialAttributes: Record<AttributeKey, boolean> = {
  STR: false,
  DEX: false,
  VIT: false,
  INT: false,
  WIS: false,
  AGI: false,
}

const initialModes: Record<ModeKey, boolean> = {
  PvP: false,
  PvE: false,
  Bossing: false,
  Hybrid: false,
}

export const useBuilderStore = create<BuilderState>()(
  persist(
    (set, get) => ({
      slots: initialState,
      attributes: initialAttributes,
      modes: initialModes,
      selectedClass: undefined,
      selectedSubClass: undefined,
      toggleStat: (slot, label) => {
        const state = get()
        const slotState = state.slots[slot]
        const isSelected = slotState.selected.includes(label)
        const nextSelected = isSelected
          ? slotState.selected.filter((l) => l !== label)
          : slotState.selected.length < MAX_OPTIONS_PER_SLOT
            ? [...slotState.selected, label]
            : slotState.selected

        // Jika primary dihapus, hapus penandaan primary
        const nextPrimary = nextSelected.includes(slotState.primary || '') ? slotState.primary : undefined

        set({
          slots: {
            ...state.slots,
            [slot]: {
              ...slotState,
              selected: nextSelected,
              primary: nextPrimary,
            },
          },
        })
      },
      setPrimary: (slot, label) => {
        const state = get()
        const slotState = state.slots[slot]
        if (label && !slotState.selected.includes(label)) return // hanya bisa set primary ke stat yang terpilih
        set({
          slots: {
            ...state.slots,
            [slot]: { ...slotState, primary: label },
          },
        })
      },
      setColor: (slot, label, color) => {
        const state = get()
        const slotState = state.slots[slot]
        set({
          slots: {
            ...state.slots,
            [slot]: { ...slotState, colors: { ...slotState.colors, [label]: color } },
          },
        })
      },
      resetSlot: (slot) => {
        const state = get()
        set({
          slots: {
            ...state.slots,
            [slot]: emptySlot(),
          },
        })
      },
      resetAll: () => set({ slots: { ...initialState }, attributes: { ...initialAttributes }, modes: { ...initialModes }, selectedClass: undefined, selectedSubClass: undefined }),
      toggleAttribute: (attr) => {
        const state = get()
        const cur = state.attributes[attr]
        set({ attributes: { ...state.attributes, [attr]: !cur } })
      },
      toggleMode: (mode) => {
        // Eksklusif: aktifkan hanya mode yang dipilih, lainnya false
        const all: ModeKey[] = ['PvP', 'PvE', 'Bossing', 'Hybrid']
        const next = all.reduce((acc, m) => {
          acc[m] = m === mode
          return acc
        }, {} as Record<ModeKey, boolean>)
        set({ modes: next })
      },
      setClass: (klass) => set({ selectedClass: klass, selectedSubClass: undefined }),
      setSubClass: (sub) => set({ selectedSubClass: sub }),
      applyRecommendation: (rec) => {
        const state = get()
        // Apply attributes: ON for recommended, OFF for others
        const attrKeys: AttributeKey[] = ['STR', 'DEX', 'VIT', 'INT', 'WIS', 'AGI']
        const nextAttrs: Record<AttributeKey, boolean> = attrKeys.reduce((acc, k) => {
          acc[k] = rec.attributesOn.includes(k)
          return acc
        }, {} as Record<AttributeKey, boolean>)

        // Apply per-slot selections
        const nextSlots: Record<SlotKey, SlotState> = { ...state.slots }
        const entries = Object.entries(rec.perSlot) as [SlotKey, { selected: string[]; primary?: string }][]
        for (const [slot, cfg] of entries) {
          if (!cfg) continue
          const prev = state.slots[slot]
          nextSlots[slot] = {
            ...prev,
            selected: cfg.selected || [],
            primary: cfg.primary,
          }
        }

        set({ attributes: nextAttrs, slots: nextSlots })
      },
    }),
    {
      name: 'rohan-eq-builder',
      version: 7,
      migrate: (persisted: any, fromVersion) => {
        if (!persisted || !persisted.slots) return persisted
        if (fromVersion && fromVersion >= 7) return persisted

        // Gabungkan earring1 + earring2 => earring, ring1 + ring2 => ring
        const s = persisted.slots || {}
        const combine = (a?: SlotState, b?: SlotState): SlotState => {
          const selSet = new Set([...(a?.selected || []), ...(b?.selected || [])])
          const colors = { ...(a?.colors || {}), ...(b?.colors || {}) }
          const primary = a?.primary || b?.primary
          return { selected: Array.from(selSet).slice(0, MAX_OPTIONS_PER_SLOT), colors, primary }
        }
        const next = {
          ...persisted,
          slots: {
            weapon: s.weapon || emptySlot(),
            helmet: s.helmet || emptySlot(),
            top: s.top || emptySlot(),
            bottom: s.bottom || emptySlot(),
            gloves: s.gloves || emptySlot(),
            shoes: s.shoes || emptySlot(),
            necklace: s.necklace || emptySlot(),
            earring: combine(s.earring1, s.earring2),
            ring: combine(s.ring1, s.ring2),
          } as Record<SlotKey, SlotState>,
          attributes: persisted.attributes || { ...initialAttributes },
          modes: { ...initialModes, ...(persisted.modes || {}) },
          selectedClass: persisted.selectedClass,
          selectedSubClass: persisted.selectedSubClass,
        }
        return next
      },
    }
  )
)
