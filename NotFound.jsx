import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Página no encontrada" description="La página que buscás no existe." path="/404" />
      <section className="container-page py-32 text-center">
        <div className="font-mono text-machine-yellow text-sm uppercase tracking-widest mb-4">Error 404</div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">Esta página no existe</h1>
        <Link to="/" className="btn-primary">Volver al inicio</Link>
      </section>
    </>
  )
}
