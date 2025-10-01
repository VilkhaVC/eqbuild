# Rohan EQ Builder

Simple planner to select sub-option stats per equipment slot. MVP focuses on: multi-select (up to 4) per slot, optional primary stat marking, and visual coloring for clarity.

## Features
- Select up to **4 stats** per equipment slot.
- Mark **1 primary stat** per slot (optional).
- **Category colors** (Offense/Defense/Status/PvP/Recovery) with a **color picker** to customize selected stats.
- **Reset Slot** and **Reset All**.
- **Auto-save** to localStorage.
- **Single-page, no-scroll** layout with a card per slot.

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

## Deploy to Netlify
- `netlify.toml` is included.
- Create a site on Netlify, connect your repo, and deploy.

## Directory Structure
- `src/core/rules.ts` — global rules (limits, categories, colors).
- `src/store/builder.ts` — state management + persistence.
- `src/components/*` — UI components (`SlotCard`, `StatChip`, `Toolbar`).
- `src/data/slots.json` — per-slot stat lists.

## License
MIT
