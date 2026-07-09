# Christian Mora Maquinaria Pesada — Sitio Web v1.0

Sitio web profesional construido con **React 19 + Vite + Tailwind CSS + Framer Motion + React Router**.

## 📄 Páginas incluidas
- **Inicio** — hero, servicios destacados, quiénes somos, testimonios, CTA
- **Servicios** — listado completo de servicios
- **Galería** — cuadrícula lista para fotografías reales
- **Proyectos** — casos de trabajo destacados
- **Cotización** — calculadora de estimado + formulario que envía todo por WhatsApp
- **Contacto** — teléfono, WhatsApp, correo, Google Maps

## ✏️ Qué editar antes de publicar (datos reales)

Casi todo el contenido variable vive en **un solo archivo**:

```
src/data/config.js
```

Ahí reemplazá: teléfono, número de WhatsApp, correo, dirección, horario y el `mapsEmbedUrl`
(se obtiene desde Google Maps → Compartir → Insertar un mapa → copiar el `src` del iframe).

Otros archivos de contenido:
- `src/data/services.js` — servicios ofrecidos
- `src/data/testimonials.js` — testimonios de clientes
- `src/data/projects.js` — proyectos destacados

## 🖼️ Fotografías y logotipo

- Colocá las fotos en `public/galeria/` y actualizá `src/pages/Galeria.jsx` para usarlas.
- Colocá el logotipo en `public/` (por ejemplo `logo.svg`) y reemplazá el ícono de texto en
  `src/components/Navbar.jsx` y `src/components/Footer.jsx`.
- Reemplazá `public/favicon.svg` y `public/og-image.jpg` con las versiones finales de marca.

## 🧮 Calculadora de cotización

Vive en `src/components/QuoteCalculator.jsx`. Las tarifas y rendimientos de referencia están al
inicio del archivo en el objeto `CONFIG`. Ajustalos según los valores reales del negocio.

## 💻 Cómo correrlo en local

```bash
npm install
npm run dev
```

## 🚀 Cómo publicar (GitHub + Vercel)

1. Subí este proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), importá el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite (build command: `npm run build`,
   output directory: `dist`). El archivo `vercel.json` ya incluye las reglas de rewrite
   necesarias para que las rutas como `/servicios` funcionen correctamente.
4. Al finalizar, actualizá el dominio en `index.html` (meta tags) y `public/sitemap.xml` con
   el dominio real una vez esté configurado.

## 🔍 SEO incluido

- Metaetiquetas base y Open Graph en `index.html`
- Metaetiquetas por página vía `react-helmet-async` (`src/components/SEO.jsx`)
- `robots.txt` y `sitemap.xml` en `public/`
- Datos estructurados de negocio local (`LocalBusiness`) en `index.html`

## 🎨 Paleta de marca

| Uso | Color |
|---|---|
| Amarillo industrial | `#F5B400` |
| Negro grafito | `#17181A` |
| Gris acero | `#8A8F98` |
| Blanco | `#FFFFFF` |

Definidos en `tailwind.config.js` bajo `theme.extend.colors`.
