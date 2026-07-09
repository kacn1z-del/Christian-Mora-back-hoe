import { useRef, useState } from 'react'

export default function BeforeAfterSlider({ antes, despues, alt = 'Comparación antes y después' }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  function updateFromClientX(clientX) {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }

  function handlePointerDown(e) {
    dragging.current = true
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX)
  }
  function handlePointerMove(e) {
    if (!dragging.current) return
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX)
  }
  function handlePointerUp() {
    dragging.current = false
  }

  if (!antes || !despues) {
    return (
      <div className="aspect-video card border-dashed border-2 border-white/10 flex items-center justify-center">
        <span className="text-steel text-xs font-mono uppercase tracking-wide text-center px-4">
          [ Slider antes / después — pendiente de fotografías ]
        </span>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-video overflow-hidden rounded-sm select-none touch-none cursor-ew-resize"
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      <img src={despues} alt={`${alt} - después`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={antes}
          alt={`${alt} - antes`}
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerRef.current?.clientWidth || '100%' }}
          draggable={false}
        />
      </div>

      <div className="absolute inset-y-0 w-0.5 bg-machine-yellow" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-machine-yellow flex items-center justify-center shadow-yellow">
          <span className="text-graphite text-xs font-bold">⇔</span>
        </div>
      </div>

      <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wide bg-graphite/80 text-white px-2 py-1 rounded-sm">
        Antes
      </span>
      <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-wide bg-graphite/80 text-white px-2 py-1 rounded-sm">
        Después
      </span>
    </div>
  )
}
