import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const { url, politicianId } = await request.json();

  if (!url || !politicianId) {
    return NextResponse.json({ error: 'URL y ID del político son requeridos' }, { status: 400 });
  }

  // TODO: Implementar la lógica de análisis con IA aquí
  // Por ahora, solo se añade la fuente a la base de datos

  const { data, error } = await supabase
    .from('sources')
    .insert([{ url, politician_id: politicianId, source_type: 'articulo_noticia', title: 'Título de prueba' }])
    .select();

  if (error) {
    console.error('Error adding source:', error);
    return NextResponse.json({ error: 'Error al añadir la fuente' }, { status: 500 });
  }

  return NextResponse.json(data);
}
