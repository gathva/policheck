import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import * as cheerio from 'cheerio';

export async function POST(request: Request) {
  const { url, politicianId } = await request.json();

  if (!url || !politicianId) {
    return NextResponse.json({ error: 'URL y ID del político son requeridos' }, { status: 400 });
  }

  try {
    // 1. Obtener el HTML de la URL
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    // 2. Extraer el título
    const title = $('title').text() || $('h1').first().text() || 'No se pudo obtener el título';

    // 3. Determinar el tipo de fuente
    const sourceType = url.includes('youtube.com') || url.includes('youtu.be') ? 'video_youtube' : 'articulo_noticia';

    // 4. Guardar en la base de datos (con usuario autenticado si existe)
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { data: sourceData, error } = await supabase
      .from('sources')
      .insert([{
        url,
        politician_id: politicianId,
        source_type: sourceType,
        title: title.trim(),
        status: 'no_verificada', // Por defecto
        submitted_by: user?.id || null
      }])
      .select()
      .single();

    if (error) {
      console.error('Error inserting source:', error);
      if (error.code === '23505') { // unique_violation
        return NextResponse.json({ error: 'Esta fuente ya ha sido añadida.' }, { status: 409 });
      }
      return NextResponse.json({ error: error.message || 'Error al guardar la fuente en la base de datos.' }, { status: 500 });
    }

    // 5. Disparar Webhook de n8n
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'http://127.0.0.1:5678/webhook/policheck-process';

    try {
      fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source_id: sourceData.id,
          politician_id: politicianId,
          url: url,
          source_type: sourceType,
          title: title.trim()
        }),
      }).catch(err => console.error("Error asíncrono llamando a n8n:", err));
      // No esperamos a n8n porque puede tardar mucho, n8n actualizará la BD
    } catch (webhookError) {
      console.error('Error al intentar llamar al webhook de n8n:', webhookError);
      // No devolvemos error al usuario porque la fuente ya se guardó
    }

    return NextResponse.json(sourceData);

  } catch (error) {
    console.error('Error fetching or parsing URL:', error);
    return NextResponse.json({ error: 'No se pudo acceder o procesar la URL proporcionada.' }, { status: 500 });
  }
}