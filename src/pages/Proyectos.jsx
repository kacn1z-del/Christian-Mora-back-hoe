import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { PROYECTOS } from '../data/projects'

export default function Proyectos() {
  return (
    <>
      <SEO
        title="Proyectos"
        description="Proyectos de excavación, nivelación, zanjeo y demolición realizados por Christian Mora Maquinaria Pesada."
        path="/proyectos"
      />

      <section className="container-page pt-16 pb-10">
        <AnimatedSection>
          <span className="eyebrow mb-4">Casos de trabajo</span>
          <h1 className="text-3xl sm:text-5xl font-bold mb-5">Proyectos</h1>
          <p className="text-steel-light max-w-xl leading-relaxed">
            Un vistazo a proyectos representativos. Cada tarjeta se puede ampliar con fotografías
            y detalles reales una vez estén disponibles.
          </p>
        </AnimatedSection>
      </section>

      <section className="container-page pb-24 grid sm:grid-cols-2 gap-5">
        {PROYECTOS.map((p, i) => (
          <AnimatedSection key={p.id} delay={i * 0.06}>
            <div className="card overflow-hidden h-full flex flex-col">
              <div className="aspect-video border-b border-white/10 border-dashed flex items-center justify-center">
                <span className="text-steel text-xs font-mono uppercase tracking-wide">
                  [ Fotografía pendiente ]
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="eyebrow mb-2">{p.categoria}</span>
                <h2 className="font-display text-lg font-semibold uppercase tracking-wide mb-2">{p.titulo}</h2>
                <p className="text-sm text-steel-light leading-relaxed flex-1">{p.descripcion}</p>
                <span className="text-xs text-steel mt-4">{p.ubicacion}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>
    </>
  )
}