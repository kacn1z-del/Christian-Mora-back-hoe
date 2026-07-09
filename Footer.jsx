import { Link } from 'react-router-dom'
import { SITE } from '../data/config'

export default function Footer() {
  return (
    <footer className="bg-graphite-soft border-t border-white/10 mt-24">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-6 bg-machine-yellow" aria-hidden="true" />
            <span className="font-display font-semibold uppercase tracking-wide">{SITE.nombreCorto}</span>
          </div>
          <p className="text-sm text-steel-light leading-relaxed max-w-xs">{SITE.descripcion}</p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wide text-machine-yellow mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm text-steel-light">
            <li><Link to="/servicios" className="hover:text-white">Servicios</Link></li>
            <li><Link to="/galeria" className="hover:text-white">Galería</Link></li>
            <li><Link to="/proyectos" className="hover:text-white">Proyectos</Link></li>
            <li><Link to="/cotizacion" className="hover:text-white">Cotización</Link></li>
            <li><Link to="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wide text-machine-yellow mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm text-steel-light">
            <li>{SITE.telefono}</li>
            <li>{SITE.correo}</li>
            <li>{SITE.direccion}</li>
            <li>{SITE.horario}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-steel flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {SITE.nombre}. Todos los derechos reservados.</span>
          <span>Sitio desarrollado por KCN Studio</span>
        </div>
      </div>
    </footer>
  )
}
