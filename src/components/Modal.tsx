import React from 'react'

export default function Modal(
  {
    open,
    onClose,
    title,
    children,
    maxWidth = 'max-w-xl',
  }: {
    open: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
    maxWidth?: string
  }
) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className={`w-full ${maxWidth} bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden`}>
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="font-semibold text-slate-800 text-base">{title ?? 'Modal'}</div>
            <button
              aria-label="Close"
              className="rounded px-2 py-1 text-sm text-slate-600 hover:bg-slate-100"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className="p-4 max-h-[80vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
