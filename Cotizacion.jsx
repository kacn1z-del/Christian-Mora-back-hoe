import { useState } from 'react'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import QuoteCalculator from '../components/QuoteCalculator'
import { whatsappLink } from '../data/config'

export default function Cotizacion() {
  const [form, setForm] = useState({ nombre: '', telefono: '', ubicacion: '', detalle: '' })
  const [estimado, setEstimado] = useState(null)
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function buildMensaje() {
    let msg = `Hola, quiero cotizar un trabajo.\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nUbicación: ${form.ubicacion}\nDetalle: ${form.detalle}`
    if (estimado) {
      msg += `\n\n--- Estimado de la calculadora ---\nTipo: ${estimado.tipoLabel}\nVolumen: ${estimado.volumen.toFixed(1)} m³\nHoras estimadas: ${estimado.horas.toFixed(1)} h\nCosto estimado: ₡${Math.round(estimado.costo).toLocaleString('es-CR')}`
    }
    return msg
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
    // Redirige a WhatsApp con todo el detalle prellenado.
    window.open(whatsappLink(buildMensaje()), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <SEO
        title="Cotización"
        description="Calculá un estimado de tu trabajo de excavación y enviá tu solicitud de cotización directamente por WhatsApp."
        path="/cotizacion"
      />

      <section className="container-page pt-16 pb-10">
        <AnimatedSection>
          <span className="eyebrow mb-4">Cotización en línea</span>
          <h1 className="text-3xl sm:text-5xl font-bold mb-5">Calculá tu trabajo</h1>
          <p className="text-steel-light max-w-xl leading-relaxed">
            Ingresá los datos del terreno para ver un estimado inmediato, y enviá tu solicitud
            directamente por WhatsApp con toda la información incluida.
          </p>
        </AnimatedSection>
      </section>

      <section className="container-page pb-24 grid lg:grid-cols-2 gap-8 items-start">
        <AnimatedSection>
          <QuoteCalculator onEstimate={setEstimado} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold uppercase tracking-wide mb-1">
              Solicitar cotización
            </h2>
            <p className="text-sm text-steel-light mb-6">
              {estimado
                ? 'Tu estimado se incluirá automáticamente en el mensaje de WhatsApp.'
                : 'Podés enviar tu solicitud con o sin usar la calculadora.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block font-mono text-xs uppercase tracking-wide text-steel-light mb-2">Nombre</label>
                <input
                  id="nombre" name="nombre" required value={form.nombre} onChange={handleChange}
                  className="w-full bg-graphite-soft border border-white/10 rounded-sm px-4 py-3 outline-none focus:border-machine-yellow"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block font-mono text-xs uppercase tracking-wide text-steel-light mb-2">Teléfono</label>
                <input
                  id="telefono" name="telefono" required value={form.telefono} onChange={handleChange}
                  className="w-full bg-graphite-soft border border-white/10 rounded-sm px-4 py-3 outline-none focus:border-machine-yellow"
                  placeholder="8888-8888"
                />
              </div>
              <div>
                <label htmlFor="ubicacion" className="block font-mono text-xs uppercase tracking-wide text-steel-light mb-2">Ubicación del terreno</label>
                <input
                  id="ubicacion" name="ubicacion" value={form.ubicacion} onChange={handleChange}
                  className="w-full bg-graphite-soft border border-white/10 rounded-sm px-4 py-3 outline-none focus:border-machine-yellow"
                  placeholder="Provincia, cantón, distrito"
                />
              </div>
              <div>
                <label htmlFor="detalle" className="block font-mono text-xs uppercase tracking-wide text-steel-light mb-2">Detalle del trabajo</label>
                <textarea
                  id="detalle" name="detalle" rows="4" value={form.detalle} onChange={handleChange}
                  className="w-full bg-graphite-soft border border-white/10 rounded-sm px-4 py-3 outline-none focus:border-machine-yellow resize-none"
                  placeholder="Contanos brevemente qué necesitás"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Enviar solicitud por WhatsApp
              </button>

              {enviado && (
                <p className="text-xs text-machine-yellow text-center pt-1">
                  Se abrió WhatsApp con tu solicitud. Si no se abrió, revisá el bloqueador de ventanas emergentes.
                </p>
              )}
            </form>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
