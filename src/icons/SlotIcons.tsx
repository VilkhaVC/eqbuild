import React from 'react'
import type { SlotKey } from '../store/builder'

type IconProps = React.SVGProps<SVGSVGElement>

const Svg = ({ children, ...rest }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    {children}
  </svg>
)

const Weapon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M13.5 2l-2 2 1.5 1.5-8.8 8.8a2 2 0 102.8 2.8l8.8-8.8L17 9.5l2-2L13.5 2z" />
  </Svg>
)

const Helmet = (props: IconProps) => (
  <Svg {...props}>
    <path d="M4 12a8 8 0 1116 0v4a2 2 0 01-2 2h-4v-4H6v4H4a2 2 0 01-2-2v-4z" />
  </Svg>
)

const Chest = (props: IconProps) => (
  <Svg {...props}>
    <path d="M6 4h12l2 4v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8l2-4zm2 6h8v8H8v-8z" />
  </Svg>
)

const Pants = (props: IconProps) => (
  <Svg {...props}>
    <path d="M7 3h10l-1 6H8L7 3zm1 6l-2 12h4l1-8h2l1 8h4L16 9H8z" />
  </Svg>
)

const Gloves = (props: IconProps) => (
  <Svg {...props}>
    <path d="M8 3a2 2 0 012 2v5h1V4a2 2 0 114 0v6h1V5a2 2 0 114 0v9a4 4 0 01-4 4H9a4 4 0 01-4-4V9a2 2 0 114 0V5a2 2 0 012-2z" />
  </Svg>
)

const Boots = (props: IconProps) => (
  <Svg {...props}>
    <path d="M6 3h6v8l6 3v4H5a2 2 0 01-2-2v-1h9v-2l-6-3V3z" />
  </Svg>
)

const Necklace = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 3a7 7 0 00-7 7 7 7 0 0014 0 7 7 0 00-7-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
  </Svg>
)

const Earring = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 2a2 2 0 110 4 3 3 0 012 3 4 4 0 11-4 0 3 3 0 012-3 2 2 0 110-4z" />
  </Svg>
)

const Ring = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 7a7 7 0 100 14 7 7 0 000-14zm0 10a3 3 0 110-6 3 3 0 010 6zm-2.5-12l1.5-2h4l1.5 2h-7z" />
  </Svg>
)

export const SlotIcons: Record<SlotKey, React.FC<IconProps>> = {
  weapon: Weapon,
  helmet: Helmet,
  top: Chest,
  bottom: Pants,
  gloves: Gloves,
  shoes: Boots,
  necklace: Necklace,
  earring: Earring,
  ring: Ring,
}
