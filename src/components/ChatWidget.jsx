import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../data/config'

const SALUDO_INICIAL = {
  role: 'assistant',
  content:
    `¡Hola! Soy el asistente virtual de ${SITE.nombreCorto}. Puedo ayudarte con dudas sobre nuestros servicios, ` +
    `cómo cotizar un trabajo o qué información necesitamos de tu terreno. ¿En qué te ayudo?`,
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [mensajes, setMensajes] = useState([SALUDO_INICIAL])
  const [input, setInput] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [mensajes, open, cargando])

  async function enviarMensaje(e) {
    e.preventDefault()
    const texto = input.trim()
    if (!texto || cargando) return

    const nuevosMensajes = [...mensajes, { role: 'user', content: texto }]
    setMensajes(nuevosMensajes)
    setInput('')
    setCargando(true)
    setError(false)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nuevosMensajes.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) throw new Error('Respuesta no válida del servidor')

      const data = await res.json()
      const respuesta = data.reply || 'Disculpá, no pude procesar tu mensaje. Escribinos por WhatsApp.'
      setMensajes((prev) => [...prev, { role: 'assistant', content: respuesta }])
    } catch (err) {
      setError(true)
      setMensajes((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Ahora mismo no puedo responder. Escribinos directo por WhatsApp y te ayudamos enseguida.',
        },
      ])
    } finally {
      setCargando(false)
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat con asistente'}
        className="fixed bottom-5 left-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-machine-yellow shadow-yellow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">{open ? '✕' : '💬'}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="fixed bottom-24 left-5 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[520px] card flex flex-col shadow-2xl"
          >
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-machine-yellow shrink-0" />
              <div>
                <div className="font-display text-sm uppercase tracking-wide">Asistente virtual</div>
                <div className="text-xs text-steel-light">{SITE.nombreCorto}</div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {mensajes.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 rounded-sm ${
                    m.role === 'user'
                      ? 'ml-auto bg-machine-yellow text-graphite font-medium'
                      : 'bg-graphite-soft text-white'
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {cargando && (
                <div className="bg-graphite-soft text-steel-light text-sm px-3.5 py-2.5 rounded-sm max-w-[60%]">
                  Escribiendo…
                </div>
              )}
            </div>

            <form onSubmit={enviarMensaje} className="p-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribí tu pregunta..."
                className="flex-1 bg-graphite-soft border border-white/10 rounded-sm px-3 py-2.5 text-sm outline-none focus:border-machine-yellow"
                disabled={cargando}
              />
              <button
                type="submit"
                disabled={cargando || !input.trim()}
                className="bg-machine-yellow text-graphite font-display font-semibold text-sm px-4 rounded-sm disabled:opacity-40"
              >
                Enviar
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
