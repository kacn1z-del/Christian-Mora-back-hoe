/* ============================================================
   DATOS DE LA EMPRESA
   Editá este archivo cuando tengas los datos reales, logotipo
   y fotografías definitivas. Todo el sitio lee de aquí.
   ============================================================ */

export const SITE = {
  nombre: 'Christian Mora Maquinaria Pesada',
  nombreCorto: 'Christian Mora',
  eslogan: 'Potencia y precisión para tu proyecto',
  descripcion:
    'Servicios de excavación, nivelación, demolición y movimiento de tierra con retroexcavadora en Costa Rica.',

  telefono: '+506 0000-0000',        // TODO: reemplazar con el número real
  whatsapp: '50600000000',           // TODO: solo dígitos, con código de país, sin + ni espacios
  correo: 'contacto@christianmoramaquinaria.com', // TODO
  direccion: 'Costa Rica',           // TODO: dirección exacta
  horario: 'Lunes a sábado, 6:00 a.m. – 5:00 p.m.',

  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000000!2d-84.0!3d9.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCosta+Rica!5e0!3m2!1ses!2scr!4v0000000000', // TODO: reemplazar con el embed real de la ubicación

  redes: {
    facebook: '',   // TODO
    instagram: '',  // TODO
  },
}

export function whatsappLink(mensaje = 'Hola, quiero cotizar un trabajo de maquinaria pesada.') {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensaje)}`
}
