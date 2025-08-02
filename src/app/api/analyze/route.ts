import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
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

    // 3. Guardar en la base de datos
    const { data, error } = await supabase
      .from('sources')
      .insert([{ 
        url, 
        politician_id: politicianId, 
        source_type: 'articulo_noticia', // O detectar si es video de YouTube
        title: title.trim(),
        status: 'no_verificada' // Por defecto
      }])
      .select()
      .single();

    if (error) {
      console.error('Error inserting source:', error);
      // Revisar si es un error de duplicado
      if (error.code === '23505') { // unique_violation
        return NextResponse.json({ error: 'Esta fuente ya ha sido añadida.' }, { status: 409 });
      }
      return NextResponse.json({ error: 'Error al guardar la fuente en la base de datos.' }, { status: 500 });
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error('Error fetching or parsing URL:', error);
    return NextResponse.json({ error: 'No se pudo acceder o procesar la URL proporcionada.' }, { status: 500 });
  }
}