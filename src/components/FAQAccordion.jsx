import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQAccordion({ items }) {
  const [abierto, setAbierto] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = abierto === i
        return (
          <div key={i} className="card overflow-hidden">
            <button
              onClick={() => setAbierto(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-sm sm:text-base uppercase tracking-wide">
                {item.pregunta}
              </span>
              <span
                className={`shrink-0 text-machine-yellow text-xl leading-none transition-transform ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-steel-light leading-relaxed">
                    {item.respuesta}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
