import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../data/config'

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/galeria', label: 'Galería' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/cotizacion', label: 'Cotización' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `font-display text-sm uppercase tracking-wide transition-colors ${
      isActive ? 'text-machine-yellow' : 'text-white/80 hover:text-machine-yellow'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-graphite/95 backdrop-blur border-b border-white/10' : 'bg-graphite/70 backdrop-blur'
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-3 h-6 bg-machine-yellow" aria-hidden="true" />
          <span className="font-display font-semibold uppercase tracking-wide text-sm sm:text-base">
            {SITE.nombreCorto}
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a href={`tel:${SITE.telefono.replace(/\s|-/g, '')}`} className="hidden md:inline-flex btn-primary text-xs px-4 py-2">
          Llamar ahora
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-machine-yellow transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 bg-machine-yellow transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-machine-yellow transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-graphite"
          >
            <div className="container-page flex flex-col py-4 gap-4">
              {LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              ))}
              <a href={`tel:${SITE.telefono.replace(/\s|-/g, '')}`} className="btn-primary text-xs w-full mt-2">
                Llamar ahora
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
