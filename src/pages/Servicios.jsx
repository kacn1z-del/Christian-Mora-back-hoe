import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { SERVICIOS } from '../data/services'

export default function Servicios() {
  return (
    <>
      <SEO
        title="Servicios"
        description="Excavación, nivelación, zanjeo, demolición, carga de material y alquiler de retroexcavadora en Costa Rica."
        path="/servicios"
      />

      <section className="container-page pt-16 pb-10">
        <AnimatedSection>
          <span className="eyebrow mb-4">Nuestro trabajo</span>
          <h1 className="text-3xl sm:text-5xl font-bold mb-5">Servicios</h1>
          <p className="text-steel-light max-w-xl leading-relaxed">
            Cubrimos todo el ciclo de movimiento de tierra: desde la excavación inicial hasta la
            carga y retiro de material sobrante.
          </p>
        </AnimatedSection>
      </section>

      <section className="container-page pb-24 grid gap-5">
        {SERVICIOS.map((s, i) => (
          <AnimatedSection key={s.id} delay={i * 0.05}>
            <div className="card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center">
              <div className="text-4xl sm:w-16 shrink-0">{s.icono}</div>
              <div>
                <h2 className="font-display text-xl font-semibold uppercase tracking-wide mb-2">{s.titulo}</h2>
                <p className="text-steel-light leading-relaxed">{s.detalle}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      <section className="container-page pb-24">
        <AnimatedSection>
          <div className="card p-10 text-center bg-gradient-to-br from-machine-yellow/10 to-transparent border-machine-yellowDark/40">
            <h2 className="text-2xl font-bold mb-4">¿No estás seguro qué servicio necesitás?</h2>
            <p className="text-steel-light max-w-md mx-auto mb-7">
              Contanos sobre tu terreno y te ayudamos a definir el trabajo correcto.
            </p>
            <Link to="/cotizacion" className="btn-primary">Solicitar cotización</Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
