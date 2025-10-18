# Rohan EQ Builder

Simple planner to select sub-option stats per equipment slot. MVP focuses on: multi-select (up to 4) per slot, optional primary stat marking, and visual coloring for clarity.

## Features
- Select up to **4 stats** per equipment slot.
- Mark **1 primary stat** per slot (optional).
- **Category colors** (Offense/Defense/Status/PvP/Recovery) with a **color picker** to customize selected stats.
- **Reset Slot** and **Reset All**.
- **Auto-save** to localStorage.
- **Single-page, no-scroll** layout with a card per slot.
\n+Skills Planner (baru):
- Lihat dan rencanakan skill per class dan subclass.
- Progresi class Dekan: Lv 1–49 `Dragon Fighter`; Lv 50 pilih `Dragon Sage` atau `Dragon Knight`.
- 10 level per skill: Lv 1–5 memakai rank[0], Lv 6–10 memakai rank[1] (mis. Normal → Advanced / Rare → Ancient).
- Data skill ringkas berbasis generator (template + variabel) untuk menghindari boilerplate.
- Batas total poin skill opsional (enforce limit).

## Slots
- Weapon, Helmet, Top, Bottom, Gloves, Shoes, Necklace, Earring, Ring.

## Data
See `src/data/slots.json`. You can add/remove stats per slot as needed.

## Rules
- Maximum 4 stats per slot (`src/core/rules.ts`).
- Primary stat is optional; it must be one of the selected stats.
- Colors are visual aids only and do not affect gameplay.

## Tech Stack
- React + TypeScript + Vite + TailwindCSS
- Zustand (persisted to localStorage)

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```
\n+## Skills Planner
- Buka tab "Skills" pada header aplikasi.
- Pilih class di panel kiri (saat ini data contoh: `Dekan`).
- Bagian atas menampilkan ALL skill base (Lv 1–50) — subclass dasar (contoh: `Dragon Fighter`).
- Bagian bawah: pilih advanced subclass (contoh: `Dragon Sage`/`Dragon Knight`) untuk skill lanjutan.
- Level per skill 0..10; grade aktif menyesuaikan otomatis berdasarkan level (1–5/6–10).
\n+## Format Data Skill (Generator)
Semua skill dapat ditulis ringkas memakai `gen` sehingga tidak perlu menulis tiap level manual.

Tipe terkait: `src/data/skills/types.ts`.

```ts
export type NumericSpec = number | { base: number; step: number } | number[]

export type SkillRankGen = {
  levelCount?: number // default 5
  cooldown?: NumericSpec // boleh konstan, base+step, atau array
  template: string // gunakan placeholder {var}
  vars: Record<string, NumericSpec> // map variabel → spesifikasi angka
}

export type SkillRank = {
  grade: SkillGrade
  levels?: SkillLevel[] // format lama (opsional)
  gen?: SkillRankGen // format baru (disarankan)
}
```

Contoh (Active, damage bertambah non-linear; cooldown konstan):

```ts
{
  grade: 'Rare',
  gen: {
    levelCount: 5,
    cooldown: 12,
    template: 'Deals {dmg}% Physical damage to the target.',
    vars: { dmg: [223, 227, 231, 235, 239] },
  },
}
```

Contoh (Passive, linear):

```ts
{
  grade: 'Advanced',
  gen: {
    template: 'Increases Vitality by {vit}.',
    vars: { vit: { base: 12, step: 2 } },
  },
}
```

Ekspansi runtime:
- Gunakan `expandRanks(sk.ranks)` dari `src/data/skills/utils.ts`.
- UI `src/components/Skills.tsx` sudah memakai fungsi ini.

Mapping 10 level di planner:
- Lv 1–5 → `rank[0]`.
- Lv 6–10 → `rank[1]`.

## Deploy to Netlify
- `netlify.toml` is included.
- Create a site on Netlify, connect your repo, and deploy.

## Directory Structure
- `src/core/rules.ts` — global rules (limits, categories, colors, class→subclass progression).
- `src/store/builder.ts` — state management + persistence.
- `src/components/*` — UI components (`SlotCard`, `StatChip`, `Toolbar`).
- `src/data/slots.json` — per-slot stat lists.
\n+Skills Planner:
- `src/components/Skills.tsx` — UI planner skill.
- `src/store/skills.ts` — Zustand store untuk skill planner (class/level/subclass/plan/points).
- `src/data/skills/types.ts` — tipe `Skill`, `SkillRank`, `SkillLevel`, `SkillGrade` + dukungan generator.
- `src/data/skills/dekan.ts` — data skill Dekan (Dragon Fighter/Sage/Knight) menggunakan format generator.
- `src/data/skills/utils.ts` — utilitas `expandRank()`/`expandRanks()` untuk ekspansi data generator.

## License
MIT
