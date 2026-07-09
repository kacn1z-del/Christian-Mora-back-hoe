import { useState, useMemo } from 'react'

/* ======================================================
   CONFIGURACIÓN DE TARIFAS Y RENDIMIENTOS
   Ajustá estos valores según la maquinaria y zona reales.
   productividad = m³ que la máquina mueve por hora
   tarifaHora    = costo en colones (₡) por hora de máquina
   ====================================================== */
const CONFIG = {
  zanja: { label: 'Zanja', productividad: 8, tarifaHora: 25000 },
  nivelacion: { label: 'Nivelación', productividad: 15, tarifaHora: 22000 },
  excavacion: { label: 'Excavación', productividad: 10, tarifaHora: 25000 },
  demolicion: { label: 'Demolición', productividad: 5, tarifaHora: 28000 },
  carga: { label: 'Carga de material', productividad: 20, tarifaHora: 20000 },
}
const JORNADA_HORAS = 8

function formatColones(n) {
  return '₡' + Math.round(n).toLocaleString('es-CR')
}

export default function QuoteCalculator({ onEstimate }) {
  const [tipo, setTipo] = useState('zanja')
  const [area, setArea] = useState(20)
  const [prof, setProf] = useState(1)

  const resultado = useMemo(() => {
    const cfg = CONFIG[tipo]
    const volumen = (parseFloat(area) || 0) * (parseFloat(prof) || 0)
    const horas = cfg.productividad > 0 ? volumen / cfg.productividad : 0
    const dias = horas / JORNADA_HORAS
    const costo = horas * cfg.tarifaHora
    return { volumen, horas, dias, costo, tipoLabel: cfg.label }
  }, [tipo, area, prof])

  const gaugePct = Math.max(0, Math.min(100, ((parseFloat(prof) || 0) / 4) * 100))

  return (
    <div className="card p-5 sm:p-7">
      <label className="block font-mono text-xs uppercase tracking-wide text-steel-light mb-3">
        Tipo de trabajo
      </label>
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(CONFIG).map(([key, cfg]) => (
          <button
            key={key}
            type="button"
            onClick={() => setTipo(key)}
            className={`px-4 py-2 text-sm rounded-sm border transition-colors ${
              tipo === key
                ? 'bg-machine-yellow border-machine-yellow text-graphite font-semibold'
                : 'bg-graphite-soft border-white/10 text-steel-light hover:border-machine-yellowDark hover:text-white'
            }`}
          >
            {cfg.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="area" className="block font-mono text-xs uppercase tracking-wide text-steel-light mb-2">
            Área del terreno (m²)
          </label>
          <div className="flex items-center bg-graphite-soft border border-white/10 rounded-sm">
            <input
              id="area"
              type="number"
              min="0"
              step="0.5"
              inputMode="decimal"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full bg-transparent font-mono text-xl font-bold px-4 py-3 outline-none"
            />
            <span className="font-mono text-sm text-steel px-4 border-l border-white/10">m²</span>
          </div>
        </div>

        <div>
          <label htmlFor="prof" className="block font-mono text-xs uppercase tracking-wide text-steel-light mb-2">
            Profundidad (m)
          </label>
          <div className="flex gap-3">
            <div className="flex items-center bg-graphite-soft border border-white/10 rounded-sm flex-1">
              <input
                id="prof"
                type="number"
                min="0"
                step="0.1"
                inputMode="decimal"
                value={prof}
                onChange={(e) => setProf(e.target.value)}
                className="w-full bg-transparent font-mono text-xl font-bold px-4 py-3 outline-none"
              />
              <span className="font-mono text-sm text-steel px-4 border-l border-white/10">m</span>
            </div>
            <div className="w-8 bg-graphite-soft border border-white/10 rounded-sm relative overflow-hidden">
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-machine-yellowDark to-machine-yellow transition-all"
                style={{ height: `${gaugePct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-graphite-soft border border-white/10 rounded-sm p-4">
          <span className="block font-mono text-[10px] uppercase tracking-wide text-steel mb-1.5">Volumen</span>
          <span className="font-mono text-2xl font-bold">{resultado.volumen.toFixed(1)} <small className="text-sm text-steel-light">m³</small></span>
        </div>
        <div className="bg-graphite-soft border border-white/10 rounded-sm p-4">
          <span className="block font-mono text-[10px] uppercase tracking-wide text-steel mb-1.5">Horas de máquina</span>
          <span className="font-mono text-2xl font-bold">{resultado.horas.toFixed(1)} <small className="text-sm text-steel-light">h</small></span>
        </div>
        <div className="bg-graphite-soft border border-white/10 rounded-sm p-4">
          <span className="block font-mono text-[10px] uppercase tracking-wide text-steel mb-1.5">Duración</span>
          <span className="font-mono text-2xl font-bold">
            {resultado.dias < 1 ? `${resultado.horas.toFixed(1)}h` : `${Math.ceil(resultado.dias)} día(s)`}
          </span>
        </div>
        <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-machine-yellow/10 to-machine-yellowDark/10 border border-machine-yellowDark/40 rounded-sm p-4">
          <span className="block font-mono text-[10px] uppercase tracking-wide text-steel mb-1.5">Costo estimado</span>
          <span className="font-mono text-2xl sm:text-3xl font-bold text-machine-yellow">{formatColones(resultado.costo)}</span>
        </div>
      </div>

      <p className="text-xs text-steel-light leading-relaxed mt-5 border-l-2 border-steel-dark pl-3">
        Estimado referencial. El precio y tiempo final pueden variar según acceso al terreno, tipo de
        suelo, obstáculos y condiciones del sitio. Confirmá siempre la cotización final con el operador.
      </p>

      {onEstimate && (
        <button
          type="button"
          onClick={() => onEstimate(resultado)}
          className="btn-primary w-full mt-6"
        >
          Usar este estimado en mi solicitud
        </button>
      )}
    </div>
  )
}
