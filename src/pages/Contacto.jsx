import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { SITE, whatsappLink } from '../data/config'

export default function Contacto() {
  return (
    <>
      <SEO
        title="Contacto"
        description="Contactá a Christian Mora Maquinaria Pesada por teléfono, WhatsApp o correo. Atención en toda Costa Rica."
        path="/contacto"
      />

      <section className="container-page pt-16 pb-10">
        <AnimatedSection>
          <span className="eyebrow mb-4">Hablemos</span>
          <h1 className="text-3xl sm:text-5xl font-bold mb-5">Contacto</h1>
          <p className="text-steel-light max-w-xl leading-relaxed">
            Escribinos por WhatsApp para una respuesta más rápida, o usá cualquiera de estos medios.
          </p>
        </AnimatedSection>
      </section>

      <section className="container-page pb-24 grid md:grid-cols-2 gap-8">
        <AnimatedSection className="space-y-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 flex items-center gap-4 hover:border-machine-yellowDark/60 transition-colors"
          >
            <span className="text-3xl">💬</span>
            <div>
              <div className="font-display uppercase tracking-wide text-sm text-machine-yellow">WhatsApp</div>
              <div className="text-steel-light text-sm mt-1">Respuesta más rápida</div>
            </div>
          </a>

          <a
            href={`tel:${SITE.telefono.replace(/\s|-/g, '')}`}
            className="card p-6 flex items-center gap-4 hover:border-machine-yellowDark/60 transition-colors"
          >
            <span className="text-3xl">📞</span>
            <div>
              <div className="font-display uppercase tracking-wide text-sm text-machine-yellow">Teléfono</div>
              <div className="text-steel-light text-sm mt-1">{SITE.telefono}</div>
            </div>
          </a>

          <a
            href={`mailto:${SITE.correo}`}
            className="card p-6 flex items-center gap-4 hover:border-machine-yellowDark/60 transition-colors"
          >
            <span className="text-3xl">✉️</span>
            <div>
              <div className="font-display uppercase tracking-wide text-sm text-machine-yellow">Correo</div>
              <div className="text-steel-light text-sm mt-1">{SITE.correo}</div>
            </div>
          </a>

          <div className="card p-6 flex items-center gap-4">
            <span className="text-3xl">📍</span>
            <div>
              <div className="font-display uppercase tracking-wide text-sm text-machine-yellow">Ubicación</div>
              <div className="text-steel-light text-sm mt-1">{SITE.direccion}</div>
              <div className="text-steel text-xs mt-1">{SITE.horario}</div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="card overflow-hidden h-full min-h-[320px]">
            <iframe
              title="Ubicación en Google Maps"
              src={SITE.mapsEmbedUrl}
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
