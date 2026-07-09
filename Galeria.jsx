import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

// TODO: reemplazar por las fotografías reales de la maquinaria y los trabajos.
// Cada elemento puede llevar { src: '/galeria/foto1.jpg', alt: '...' } cuando existan las imágenes.
const PLACEHOLDER_ITEMS = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  alt: `Fotografía de trabajo ${i + 1} (pendiente de subir)`,
}))

export default function Galeria() {
  const [activo, setActivo] = useState(null)

  return (
    <>
      <SEO
        title="Galería"
        description="Galería fotográfica de trabajos de excavación, nivelación y movimiento de tierra realizados con retroexcavadora."
        path="/galeria"
      />

      <section className="container-page pt-16 pb-10">
        <AnimatedSection>
          <span className="eyebrow mb-4">Trabajo en el sitio</span>
          <h1 className="text-3xl sm:text-5xl font-bold mb-5">Galería</h1>
          <p className="text-steel-light max-w-xl leading-relaxed">
            Esta sección está lista para mostrar fotografías reales de la maquinaria y los proyectos
            realizados. Subí las imágenes en <code className="font-mono text-sm">/public/galeria</code> y
            actualizá la lista en <code className="font-mono text-sm">src/pages/Galeria.jsx</code>.
          </p>
        </AnimatedSection>
      </section>

      <section className="container-page pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {PLACEHOLDER_ITEMS.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.03}>
              <button
                onClick={() => setActivo(item)}
                className="w-full aspect-square card border-dashed border-2 border-white/10 flex items-center justify-center hover:border-machine-yellowDark/60 transition-colors"
              >
                <span className="text-steel text-xs font-mono text-center px-3">
                  Foto {item.id}
                </span>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activo && (
          <motion.div
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="card p-8 max-w-md text-center"
            >
              <p className="text-steel-light text-sm">{activo.alt}</p>
              <button className="btn-outline mt-6" onClick={() => setActivo(null)}>Cerrar</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
