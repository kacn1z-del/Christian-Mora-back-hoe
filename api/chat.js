/* ============================================================
   FUNCIÓN SERVERLESS: /api/chat
   Recibe el historial de la conversación del sitio web y
   responde usando la API de Anthropic (Claude).

   Requiere una variable de entorno en Vercel:
     ANTHROPIC_API_KEY = tu clave de api.anthropic.com

   Configurala en: Vercel → tu proyecto → Settings →
   Environment Variables → Add New.
   ============================================================ */

const SYSTEM_PROMPT = `Sos el asistente virtual del sitio web de Christian Mora Maquinaria Pesada,
una empresa costarricense de servicios de retroexcavadora: excavación, nivelación de terrenos,
apertura de zanjas, demolición controlada, carga de material y alquiler de maquinaria por hora o por día.

Reglas importantes:
- Respondé siempre en español, en tono profesional y cercano, con respuestas breves (máximo 3-4 oraciones).
- No inventes precios exactos ni plazos garantizados: los costos y tiempos dependen de cada terreno.
- Para cotizaciones concretas, dirigí siempre a la persona a la página "Cotización" (donde hay una
  calculadora) o al botón de WhatsApp del sitio.
- No inventes datos de contacto, certificaciones, ni cantidad de años de experiencia que no te hayan
  sido dados explícitamente.
- Si te preguntan algo que no tiene que ver con la empresa o sus servicios, redirigí amablemente la
  conversación hacia cómo podés ayudar con su proyecto de movimiento de tierra.`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' })
    return
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    res.status(200).json({
      reply:
        'El asistente todavía no está activado en este sitio. Escribinos por WhatsApp y te ayudamos directamente.',
    })
    return
  }

  try {
    const { messages } = req.body || {}
    if (!Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: 'Falta el historial de mensajes' })
      return
    }

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-12),
      }),
    })

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text()
      console.error('Error de Anthropic API:', errText)
      res.status(200).json({
        reply: 'Tuvimos un problema para responder. Escribinos por WhatsApp y te ayudamos enseguida.',
      })
      return
    }

    const data = await anthropicRes.json()
    const reply = data.content?.[0]?.text || 'No pude generar una respuesta. Probá de nuevo.'

    res.status(200).json({ reply })
  } catch (err) {
    console.error('Error en /api/chat:', err)
    res.status(200).json({
      reply: 'Tuvimos un problema técnico. Escribinos por WhatsApp y te ayudamos enseguida.',
    })
  }
}
