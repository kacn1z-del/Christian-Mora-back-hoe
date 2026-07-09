import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '/' }) {
  const fullTitle = `${title} | Christian Mora Maquinaria Pesada`
  const url = `https://christianmoramaquinaria.com${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  )
}
