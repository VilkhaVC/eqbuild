import type { AttributeKey } from '../store/builder'

// Palet warna yang konsisten untuk atribut, digunakan di Toolbar dan StatCalculator tags
export const AttributeColors: Record<AttributeKey, string> = {
  STR: '#ef4444', // red-500
  DEX: '#eab308', // yellow-500
  VIT: '#10b981', // emerald-500
  INT: '#6366f1', // indigo-500
  WIS: '#0ea5e9', // sky-500
  AGI: '#22c55e', // green-500
}
