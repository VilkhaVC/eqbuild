import React from 'react'
import { mapsData, mapTypeColors, type MapInfo } from '../data/maps'
import { mapMarkers } from '../data/map-markers'

export default function Maps() {
  const [selectedMap, setSelectedMap] = React.useState<MapInfo>(() => {
    const def = mapsData.find(m => m.id === 'del-lagos' || m.name === 'Del Lagos')
    return def || mapsData[0]
  })
  const [zoom, setZoom] = React.useState(1)
  const [pan, setPan] = React.useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 })
  const imageRef = React.useRef<HTMLImageElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [natural, setNatural] = React.useState({ w: 0, h: 0 })
  const [stageSize, setStageSize] = React.useState({ w: 0, h: 0 })
  const defaultIcons = React.useMemo(() => ({ boss: '/icons/boss.png', mob: '/icons/mob.png' }), [])
  const [copiedMsg, setCopiedMsg] = React.useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const [savedView, setSavedView] = React.useState<{ zoom: number; pan: { x: number; y: number } } | null>(null)
  const slugify = React.useCallback((s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''), [])
  const extractLevel = React.useCallback((s: string): string | undefined => {
    const m = s.match(/lv\.?\s*(\d+)/i)
    return m ? `Lv. ${m[1]}` : undefined
  }, [])
  const displayOnlyName = React.useCallback((s: string): string => {
    // hapus konten dalam tanda kurung agar nama bersih
    const noParen = s.replace(/\s*\(.*?\)\s*/g, '').trim()
    return noParen
  }, [])
  const bosses = React.useMemo(() => mapMarkers.filter(m => m.mapId === selectedMap.id && m.type === 'boss'), [selectedMap.id])
  const bossTitle = React.useMemo(() => bosses.length ? bosses.map(b => displayOnlyName(b.name)).join(', ') : null, [bosses, displayOnlyName])
  
  const mapsOrdered = React.useMemo(() => {
    const arr = [...mapsData]
    const idx = arr.findIndex(m => m.name === 'Field Dungeon')
    if (idx >= 0) {
      const [fd] = arr.splice(idx, 1)
      arr.push(fd)
    }
    return arr
  }, [])

  // Clamp pan agar gambar tidak keluar dari area container saat zoom
  const clampPan = (p: { x: number; y: number }, z: number = zoom) => {
    const container = containerRef.current
    const img = imageRef.current
    if (!container || !img) return p
    const cw = container.clientWidth
    const ch = container.clientHeight
    const nw = img.naturalWidth || 0
    const nh = img.naturalHeight || 0
    if (!nw || !nh || cw === 0 || ch === 0) return p
    // ukuran gambar pada zoom 1 (fit contain)
    const baseScale = Math.min(cw / nw, ch / nh)
    const displayedW = nw * baseScale * z
    const displayedH = nh * baseScale * z
    const maxX = Math.max(0, (displayedW - cw) / 2)
    const maxY = Math.max(0, (displayedH - ch) / 2)
    return {
      x: Math.max(-maxX, Math.min(maxX, p.x)),
      y: Math.max(-maxY, Math.min(maxY, p.y)),
    }
  }

  // Reset zoom dan pan saat ganti map
  React.useEffect(() => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }, [selectedMap.id])

  // Hitung ulang ukuran stage (gambar pada zoom 1 dengan contain) saat container atau natural size berubah
  React.useEffect(() => {
    const recompute = () => {
      const c = containerRef.current
      const img = imageRef.current
      const cw = c?.clientWidth || 0
      const ch = c?.clientHeight || 0
      const nw = img?.naturalWidth || natural.w
      const nh = img?.naturalHeight || natural.h
      if (cw && ch && nw && nh) {
        const baseScale = Math.min(cw / nw, ch / nh)
        setStageSize({ w: nw * baseScale, h: nh * baseScale })
      } else {
        setStageSize({ w: 0, h: 0 })
      }
    }
    recompute()
    const onResize = () => recompute()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [natural.w, natural.h])

  // Fullscreen helpers
  const overlayContainerRef = React.useRef<HTMLDivElement>(null)
  const [overlayStageSize, setOverlayStageSize] = React.useState({ w: 0, h: 0 })
  const clampPanOverlay = (p: { x: number; y: number }, z: number = zoom) => {
    const container = overlayContainerRef.current
    const nw = natural.w
    const nh = natural.h
    if (!container || !nw || !nh) return p
    const cw = container.clientWidth
    const ch = container.clientHeight
    const baseScale = Math.min(cw / nw, ch / nh)
    const displayedW = nw * baseScale * z
    const displayedH = nh * baseScale * z
    const maxX = Math.max(0, (displayedW - cw) / 2)
    const maxY = Math.max(0, (displayedH - ch) / 2)
    return {
      x: Math.max(-maxX, Math.min(maxX, p.x)),
      y: Math.max(-maxY, Math.min(maxY, p.y)),
    }
  }

  React.useEffect(() => {
    if (!isFullscreen) return
    const recompute = () => {
      const c = overlayContainerRef.current
      const cw = c?.clientWidth || 0
      const ch = c?.clientHeight || 0
      const nw = natural.w
      const nh = natural.h
      if (cw && ch && nw && nh) {
        const baseScale = Math.min(cw / nw, ch / nh)
        setOverlayStageSize({ w: nw * baseScale, h: nh * baseScale })
      }
    }
    recompute()
    window.addEventListener('resize', recompute)
    return () => window.removeEventListener('resize', recompute)
  }, [isFullscreen, natural.w, natural.h])

  // Lock body scroll saat fullscreen
  React.useEffect(() => {
    if (isFullscreen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isFullscreen])

  // Overlay handlers
  const handleOverlayWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setZoom((prev) => {
      const nz = Math.min(Math.max(prev * delta, 1), 3)
      setPan((p) => clampPanOverlay(p, nz))
      return nz
    })
  }
  const handleOverlayMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }
  const handleOverlayMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      const next = { x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }
      setPan(clampPanOverlay(next))
    }
  }
  const handleOverlayMouseUp = () => setIsDragging(false)

  const handleZoomIn = () => {
    setZoom((prev) => {
      const nz = Math.min(prev * 1.2, 3)
      setPan((p) => (isFullscreen ? clampPanOverlay(p, nz) : clampPan(p, nz)))
      return nz
    })
  }

  const handleZoomOut = () => {
    setZoom((prev) => {
      const nz = Math.max(prev / 1.2, 1)
      setPan((p) => (isFullscreen ? clampPanOverlay(p, nz) : clampPan(p, nz)))
      return nz
    })
  }

  const handleZoomReset = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  // Fullscreen open/close
  const openFullscreen = () => {
    setSavedView({ zoom, pan })
    setIsFullscreen(true)
  }
  const closeFullscreen = () => {
    if (savedView) {
      setZoom(savedView.zoom)
      setPan(savedView.pan)
      setSavedView(null)
    }
    setIsFullscreen(false)
    setIsDragging(false)
  }

  // ESC to close fullscreen
  React.useEffect(() => {
    if (!isFullscreen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFullscreen()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isFullscreen, closeFullscreen])

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setZoom((prev) => {
      const nz = Math.min(Math.max(prev * delta, 1), 3)
      setPan((p) => clampPan(p, nz))
      return nz
    })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      const next = { x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }
      setPan(clampPan(next))
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Dev: Shift+Click untuk menyalin koordinat relatif (0..1)
  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.shiftKey) return
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const xRel = (e.clientX - rect.left) / rect.width
    const yRel = (e.clientY - rect.top) / rect.height
    const marker = {
      id: `${selectedMap.id}-marker-${Date.now()}`,
      mapId: selectedMap.id,
      type: 'boss',
      name: 'New Marker',
      x: +xRel.toFixed(4),
      y: +yRel.toFixed(4),
    }
    const text = JSON.stringify(marker, null, 2)
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
      } else {
        const ta = document.createElement('textarea')
        ta.value = text
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopiedMsg(`Copied: x=${marker.x}, y=${marker.y}`)
      window.setTimeout(() => setCopiedMsg(null), 2000)
    } catch {
      setCopiedMsg('Copy failed')
      window.setTimeout(() => setCopiedMsg(null), 2000)
    }
  }

  const getTypeIcon = (type: MapInfo['type']) => {
    switch (type) {
      case 'Village':
        return '🏘️'
      case 'Field':
        return '🌾'
      case 'Dungeon':
        return '🏰'
      case 'Special':
        return '⭐'
      default:
        return '📍'
    }
  }

  return (
    <div className="flex-1 flex gap-4 overflow-hidden">
      {/* Sidebar - Map List */}
      <div className="w-80 bg-white rounded-lg shadow border-2 border-slate-300 flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800">Available Maps</h2>
          <p className="text-sm text-slate-600">Select a map to view details</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-2">
            {mapsOrdered.map((map) => (
              <button
                key={map.id}
                onClick={() => setSelectedMap(map)}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all hover:shadow-md ${
                  selectedMap.id === map.id
                    ? 'border-rose-500 bg-rose-50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getTypeIcon(map.type)}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-800 truncate">{map.name}</h3>
                    </div>
                    {(() => {
                      const bossesForMap = mapMarkers.filter(m => m.mapId === map.id && m.type === 'boss')
                      if (bossesForMap.length > 0) {
                        return (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {bossesForMap.map((b) => {
                              const nameText = displayOnlyName(b.name)
                              return (
                                <span
                                  key={b.id}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold text-white bg-red-600 border border-red-300"
                                  title={b.name}
                                >
                                  {nameText}
                                </span>
                              )
                            })}
                          </div>
                        )
                      }
                      return (
                        <span
                          className="inline-flex mt-1 px-2 py-0.5 rounded-full text-[11px] font-semibold text-white"
                          style={{ backgroundColor: mapTypeColors[map.type] }}
                        >
                          {map.type}
                        </span>
                      )
                    })()}
                    {/* Description removed per request */}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[1000] bg-black/90">
          {/* Close button */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={closeFullscreen}
              className="px-3 h-9 bg-white/90 hover:bg-white border border-slate-300 rounded-md shadow-sm flex items-center justify-center text-slate-700 hover:text-slate-900 transition"
              title="Close Fullscreen (Esc)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Zoom indicator */}
          {zoom !== 1 && (
            <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
              {Math.round(zoom * 100)}%
            </div>
          )}

          {/* Overlay Map Container */}
          <div className="w-full h-full flex items-center justify-center">
            <div
              ref={overlayContainerRef}
              className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              onWheel={handleOverlayWheel}
              onMouseDown={handleOverlayMouseDown}
              onMouseMove={handleOverlayMouseMove}
              onMouseUp={handleOverlayMouseUp}
              onMouseLeave={handleOverlayMouseUp}
              style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            >
              <div
                className={`relative rounded-lg shadow-lg select-none ${isDragging ? '' : 'transition-transform duration-200'}`}
                style={{
                  width: overlayStageSize.w || '100%',
                  height: overlayStageSize.h || '100%',
                  transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  transformOrigin: 'center center'
                }}
                onClick={handleStageClick}
              >
                <img
                  src={selectedMap.imageUrl}
                  alt={selectedMap.name}
                  className="w-full h-full object-fill rounded-lg pointer-events-none"
                  onLoad={(e) => {
                    const img = e.currentTarget
                    if (!natural.w || !natural.h) {
                      setNatural({ w: img.naturalWidth, h: img.naturalHeight })
                    }
                  }}
                  draggable={false}
                />

                {/* Markers overlay */}
                <div className="absolute inset-0">
                  {mapMarkers.filter(m => m.mapId === selectedMap.id).map((m) => {
                    const left = (overlayStageSize.w || 0) * m.x
                    const top = (overlayStageSize.h || 0) * m.y
                    const slug = slugify(m.name)
                    const namedPath = `/icons/${m.type}/${slug}.png`
                    const iconSrc = m.icon || namedPath || defaultIcons[m.type]
                    const isBoss = m.type === 'boss'
                    const levelText = isBoss ? extractLevel(m.name) : undefined
                    const nameText = isBoss ? displayOnlyName(m.name) : undefined
                    return (
                      <div
                        key={m.id}
                        className="absolute"
                        style={{ left, top, transform: 'translate(-50%, -100%)' }}
                        title={m.name}
                      >
                        <div className="relative flex items-center justify-center">
                          {/* Aura glow + Pulse effect for boss (enhanced) */}
                          {isBoss && (
                            <>
                              {/* Soft glow */}
                              <span className="pointer-events-none absolute h-16 w-16 rounded-full bg-red-500/25 blur-lg z-0" />
                              {/* Filled ping (default speed) */}
                              <span className="pointer-events-none absolute inline-flex h-20 w-20 rounded-full bg-red-500/30 animate-ping z-0" />
                              {/* Outer ring ping (slower, larger) */}
                              <span
                                className="pointer-events-none absolute inline-flex h-24 w-24 rounded-full border-2 border-red-500/60 opacity-70 z-0"
                                style={{ animation: 'ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite' }}
                              />
                            </>
                          )}
                          {/* Icon */}
                          {iconSrc ? (
                            <img
                              src={iconSrc}
                              alt={m.name}
                              className={`${isBoss
                                ? 'w-12 h-12 ring-red-500 ring-offset-2 ring-offset-black/60 hover:scale-110 hover:brightness-110'
                                : 'w-9 h-9 ring-blue-400'
                              } rounded-full ring-2 shadow-md drop-shadow-lg relative z-10 transition-transform duration-200 ease-out`}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                                const fb = e.currentTarget.nextElementSibling as HTMLElement
                                if (fb) fb.style.display = 'block'
                              }}
                            />
                          ) : null}
                          <div
                            className={`hidden ${isBoss
                              ? 'w-12 h-12 ring-red-500 ring-offset-2 ring-offset-black/60'
                              : 'w-8 h-8 ring-blue-400'
                            } rounded-full ring-2 bg-black/70 shadow-md drop-shadow-lg relative z-10`}
                          />
                          {/* Label boss (nama + level) digabung di bawah icon */}
                          {isBoss && (
                            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+6px)] px-2 py-1 rounded bg-white/95 border border-yellow-300 shadow whitespace-nowrap flex flex-col items-center z-20">
                              <span className="text-[11px] font-semibold text-slate-800 leading-tight">
                                {nameText || m.name}
                              </span>
                              {levelText && (
                                <span className="text-[10px] font-medium text-slate-600 leading-tight">{levelText}</span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Area - Map Display */}
      <div className="flex-1 bg-white rounded-lg shadow border-2 border-slate-300 flex flex-col">
        {/* Map Image Area */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex-1 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 relative overflow-hidden min-h-[400px]">
            {selectedMap.imageUrl ? (
              <>
                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button
                    onClick={handleZoomIn}
                    className="w-8 h-8 bg-white/90 hover:bg-white border border-slate-300 rounded-md shadow-sm flex items-center justify-center text-slate-700 hover:text-slate-900 transition"
                    title="Zoom In"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 1}
                    className={`w-8 h-8 border border-slate-300 rounded-md shadow-sm flex items-center justify-center transition ${
                      zoom <= 1 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                        : 'bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900'
                    }`}
                    title={zoom <= 1 ? "Already at minimum zoom" : "Zoom Out"}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </button>
                  {zoom !== 1 && (
                    <button
                      onClick={handleZoomReset}
                      className="w-8 h-8 bg-white/90 hover:bg-white border border-slate-300 rounded-md shadow-sm flex items-center justify-center text-slate-700 hover:text-slate-900 transition"
                      title="Reset Zoom"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  )}
                  <button
                    onClick={openFullscreen}
                    className="w-8 h-8 bg-white/90 hover:bg-white border border-slate-300 rounded-md shadow-sm flex items-center justify-center text-slate-700 hover:text-slate-900 transition"
                    title="Open Fullscreen"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9V5a2 2 0 012-2h4v2H5v4H3zm18 0V5a2 2 0 00-2-2h-4v2h4v4h2zM3 15v4a2 2 0 002 2h4v-2H5v-4H3zm18 0v4a2 2 0 01-2 2h-4v-2h4v-4h2z"/>
                    </svg>
                  </button>
                </div>

                {/* Zoom Level Indicator */}
                {zoom !== 1 && (
                  <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    {Math.round(zoom * 100)}%
                  </div>
                )}

                {/* Dev hint */}
                <div className="absolute top-12 left-4 z-10 bg-white/80 text-slate-700 px-2 py-1 rounded text-[11px] border border-slate-200">
                  Dev: Shift+Click to copy x,y
                </div>

                {/* Image Container + Markers */}
                <div 
                  ref={containerRef}
                  className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                  onWheel={handleWheel}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
                >
                  <div
                    className={`relative rounded-lg shadow-lg select-none ${isDragging ? '' : 'transition-transform duration-200'}`}
                    style={{
                      width: stageSize.w || '100%',
                      height: stageSize.h || '100%',
                      transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                      transformOrigin: 'center center'
                    }}
                    onClick={handleStageClick}
                  >
                    <img
                      ref={imageRef}
                      src={selectedMap.imageUrl}
                      alt={selectedMap.name}
                      className="w-full h-full object-fill rounded-lg pointer-events-none"
                      onLoad={(e) => {
                        const img = e.currentTarget
                        setNatural({ w: img.naturalWidth, h: img.naturalHeight })
                      }}
                      draggable={false}
                    />

                    {/* Markers overlay */}
                    <div className="absolute inset-0">
                      {mapMarkers.filter(m => m.mapId === selectedMap.id).map((m) => {
                        const left = (stageSize.w || 0) * m.x
                        const top = (stageSize.h || 0) * m.y
                        const slug = slugify(m.name)
                        const namedPath = `/icons/${m.type}/${slug}.png`
                        const iconSrc = m.icon || namedPath || defaultIcons[m.type]
                        const isBoss = m.type === 'boss'
                        const levelText = isBoss ? extractLevel(m.name) : undefined
                        const nameText = isBoss ? displayOnlyName(m.name) : undefined
                        return (
                          <div
                            key={m.id}
                            className="absolute"
                            style={{ left, top, transform: 'translate(-50%, -100%)' }}
                            title={m.name}
                          >
                            <div className="relative flex items-center justify-center">
                              {/* Aura glow + Pulse effect for boss (enhanced) */}
                              {isBoss && (
                                <>
                                  {/* Soft glow */}
                                  <span className="pointer-events-none absolute h-16 w-16 rounded-full bg-red-500/25 blur-lg z-0" />
                                  {/* Filled ping (default speed) */}
                                  <span className="pointer-events-none absolute inline-flex h-20 w-20 rounded-full bg-red-500/30 animate-ping z-0" />
                                  {/* Outer ring ping (slower, larger) */}
                                  <span
                                    className="pointer-events-none absolute inline-flex h-24 w-24 rounded-full border-2 border-red-500/60 opacity-70 z-0"
                                    style={{ animation: 'ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite' }}
                                  />
                                </>
                              )}
                              {/* Icon */}
                              {iconSrc ? (
                                <img
                                  src={iconSrc}
                                  alt={m.name}
                                  className={`${isBoss
                                    ? 'w-12 h-12 ring-red-500 ring-offset-2 ring-offset-black/60 hover:scale-110 hover:brightness-110'
                                    : 'w-9 h-9 ring-blue-400'
                                  } rounded-full ring-2 shadow-md drop-shadow-lg relative z-10 transition-transform duration-200 ease-out`}
                                  onError={(e) => {
                                    // Fallback ke marker warna jika icon gagal load
                                    e.currentTarget.style.display = 'none'
                                    const fb = e.currentTarget.nextElementSibling as HTMLElement
                                    if (fb) fb.style.display = 'block'
                                  }}
                                />
                              ) : null}
                              <div
                                className={`hidden ${isBoss
                                  ? 'w-12 h-12 ring-red-500 ring-offset-2 ring-offset-black/60'
                                  : 'w-8 h-8 ring-blue-400'
                                } rounded-full ring-2 bg-black/70 shadow-md drop-shadow-lg relative z-10`}
                              />
                              {/* Label boss (nama + level) digabung di bawah icon */}
                              {isBoss && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+6px)] px-2 py-1 rounded bg-white/95 border border-yellow-300 shadow whitespace-nowrap flex flex-col items-center z-20">
                                  <span className="text-[11px] font-semibold text-slate-800 leading-tight">
                                    {nameText || m.name}
                                  </span>
                                  {levelText && (
                                    <span className="text-[10px] font-medium text-slate-600 leading-tight">{levelText}</span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Copied toast */}
                {copiedMsg && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 text-white px-3 py-1.5 rounded text-xs shadow">
                    {copiedMsg}
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-col items-center gap-4 text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <div className="text-center">
                    <p className="font-medium">Map Image</p>
                    <p className="text-sm">Interactive map will be displayed here</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Map Header (below map) */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{getTypeIcon(selectedMap.type)}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-800">{selectedMap.name}</h2>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold text-white bg-red-600 border border-red-300"
                    title={bossTitle ?? selectedMap.type}
                  >
                    {bossTitle ?? selectedMap.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600">Recommended Level: -</p>
              </div>
            </div>
            {/* Legend warna boss/mobs */}
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-700" title="Boss">
                <span className="inline-block w-3 h-3 rounded-full bg-red-600 ring-2 ring-red-300" />
                Boss
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-700" title="Mobs">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500 ring-2 ring-blue-300" />
                Mobs
              </span>
            </div>
          </div>
          {selectedMap.description && (
            <p className="text-slate-700 mt-2">{selectedMap.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}
