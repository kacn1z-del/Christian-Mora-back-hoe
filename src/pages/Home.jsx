import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import FAQAccordion from '../components/FAQAccordion'
import { SERVICIOS } from '../data/services'
import { TESTIMONIOS } from '../data/testimonials'
import { FAQ } from '../data/faq'
import { COBERTURA } from '../data/coverage'
import { CONFIANZA } from '../data/trust'
import { SITE, whatsappLink } from '../data/config'

export default function Home() {
  return (
    <>
      <SEO
        title="Inicio"
        description="Christian Mora Maquinaria Pesada: excavación, nivelación, demolición y movimiento de tierra en Costa Rica. Cotización rápida."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-graphite bg-diagonal-stripes">
        <div className="container-page pt-20 pb-24 sm:pt-28 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="eyebrow mb-5">Maquinaria pesada · Costa Rica</span>
            <h1 className="text-4xl sm:text-6xl font-bold leading-[1.05] max-w-3xl">
              Movemos tierra con la <span className="text-machine-yellow">precisión</span> que tu proyecto necesita
            </h1>
            <p className="mt-6 text-steel-light text-base sm:text-lg max-w-xl leading-relaxed">
              {SITE.eslogan}. Excavación, nivelación, zanjeo, demolición y carga de material,
              con retroexcavadora y operador certificado.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/cotizacion" className="btn-primary">Cotizar mi trabajo</Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Escribir por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 bg-graphite-soft">
          <div className="container-page py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            {[
              ['+10', 'años de experiencia'],
              ['500+', 'trabajos realizados'],
              ['100%', 'operador certificado'],
              ['24h', 'respuesta a cotizaciones'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-machine-yellow">{num}</div>
                <div className="text-xs sm:text-sm text-steel-light mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGNIAS DE CONFIANZA */}
      <section className="border-b border-white/10">
        <div className="container-page py-6 flex flex-wrap justify-center sm:justify-between gap-x-8 gap-y-3">
          {CONFIANZA.map((c) => (
            <div key={c.texto} className="flex items-center gap-2 text-sm text-steel-light">
              <span className="text-lg">{c.icono}</span>
              <span>{c.texto}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS PREVIEW */}
      <section className="container-page py-20 sm:py-28">
        <AnimatedSection>
          <span className="eyebrow mb-4">Lo que hacemos</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Servicios</h2>
          <p className="text-steel-light max-w-xl mb-12">
            Soluciones completas de movimiento de tierra para construcción, agricultura e infraestructura.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICIOS.map((s, i) => (
            <AnimatedSection key={s.id} delay={i * 0.06}>
              <div className="card p-6 h-full hover:border-machine-yellowDark/60 transition-colors">
                <div className="text-3xl mb-4">{s.icono}</div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide mb-2">{s.titulo}</h3>
                <p className="text-sm text-steel-light leading-relaxed">{s.resumen}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10">
          <Link to="/servicios" className="btn-outline">Ver todos los servicios</Link>
        </AnimatedSection>
      </section>

      {/* QUIENES SOMOS */}
      <section className="bg-graphite-soft border-y border-white/10">
        <div className="container-page py-20 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="eyebrow mb-4">Quiénes somos</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Maquinaria propia, operador con experiencia real</h2>
            <p className="text-steel-light leading-relaxed mb-4">
              {SITE.nombre} ofrece servicios de retroexcavadora para proyectos de construcción,
              agricultura e infraestructura en Costa Rica. Cada trabajo se cotiza a la medida del
              terreno, con tiempos claros desde la primera visita.
            </p>
            <p className="text-steel-light leading-relaxed">
              Priorizamos la comunicación directa con el cliente: cotización rápida, fechas concretas
              y un trabajo terminado según lo acordado.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="card aspect-video flex items-center justify-center border-dashed border-2 border-white/10">
              <span className="text-steel text-sm font-mono uppercase tracking-wide">
                [ Espacio para fotografía / video de la maquinaria ]
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ZONA DE COBERTURA */}
      <section className="container-page py-20 sm:py-24">
        <AnimatedSection>
          <span className="eyebrow mb-4">Dónde trabajamos</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">Zona de cobertura</h2>
          <p className="text-steel-light max-w-xl leading-relaxed mb-8">
            Atendemos proyectos en estas zonas con mayor frecuencia. Si tu terreno está en otra
            zona, escribinos igual — lo evaluamos caso por caso.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {COBERTURA.map((zona) => (
              <span
                key={zona}
                className="inline-flex items-center gap-2 bg-graphite-soft border border-white/10 rounded-sm px-4 py-2 text-sm text-steel-light"
              >
                <span className="text-machine-yellow">📍</span>
                {zona}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-graphite-soft border-y border-white/10">
        <div className="container-page py-20 sm:py-28">
          <AnimatedSection>
            <span className="eyebrow mb-4">Confianza</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Lo que dicen nuestros clientes</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIOS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card p-6 h-full flex flex-col">
                  <span className="text-machine-yellow text-2xl mb-3">"</span>
                  <p className="text-sm text-steel-light leading-relaxed flex-1">{t.texto}</p>
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs">
                    <div className="font-semibold text-white">{t.nombre}</div>
                    <div className="text-steel">{t.proyecto}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20 sm:py-28">
        <AnimatedSection>
          <span className="eyebrow mb-4">Dudas comunes</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-steel-light max-w-xl mb-12">
            Si tu duda no está acá, escribinos por WhatsApp o usá el asistente virtual del sitio.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-2xl">
          <FAQAccordion items={FAQ} />
        </AnimatedSection>
      </section>

      {/* CTA FINAL */}
      <section className="container-page pb-24">
        <AnimatedSection>
          <div className="card bg-gradient-to-br from-machine-yellow/10 to-transparent p-10 sm:p-14 text-center border-machine-yellowDark/40">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Tenés un terreno para trabajar?</h2>
            <p className="text-steel-light max-w-lg mx-auto mb-8">
              Usá nuestra calculadora y obtené un estimado de volumen, tiempo y costo en menos de un minuto.
            </p>
            <Link to="/cotizacion" className="btn-primary">Ir a la calculadora</Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
