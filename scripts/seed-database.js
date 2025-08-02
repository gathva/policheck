const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Cargar variables de entorno desde .env.local
require('dotenv').config({ path: '.env.local' });

// Configuración de Supabase desde las variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Variables de entorno de Supabase no encontradas');
  console.error('Asegúrate de que NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY estén configuradas');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedDatabase() {
  console.log('🌱 Iniciando seed de la base de datos...');
  
  try {
    // Verificar conexión
    const { data: testData, error: testError } = await supabase
      .from('politicians')
      .select('count')
      .limit(1);
    
    if (testError) {
      console.error('❌ Error de conexión a Supabase:', testError.message);
      return;
    }
    
    console.log('✅ Conexión a Supabase exitosa');
    
    // Datos de políticos para insertar
    const politicians = [
      {
        id: '550e8400-e29b-41d4-a716-446655440001',
        full_name: 'Gabriel Boric Font',
        political_party: 'Frente Amplio',
        position: 'Presidente de Chile',
        bio: 'Político chileno, actual Presidente de la República de Chile desde marzo de 2022. Anteriormente fue diputado por el distrito 60.',
        profile_image_url: null
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440002',
        full_name: 'José Antonio Kast Rist',
        political_party: 'Partido Republicano',
        position: 'Candidato Presidencial',
        bio: 'Abogado y político chileno. Fue diputado por varios períodos y candidato presidencial en 2017 y 2021.',
        profile_image_url: null
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440003',
        full_name: 'Evelyn Matthei Fornet',
        political_party: 'Unión Demócrata Independiente',
        position: 'Alcaldesa de Providencia',
        bio: 'Economista y política chilena. Actual alcaldesa de Providencia y ex ministra del Trabajo durante el gobierno de Sebastián Piñera.',
        profile_image_url: null
      }
    ];
    
    // Insertar políticos
    console.log('📝 Insertando políticos...');
    
    for (const politician of politicians) {
      const { data, error } = await supabase
        .from('politicians')
        .upsert(politician, { onConflict: 'id' })
        .select();
      
      if (error) {
        console.error(`❌ Error insertando ${politician.full_name}:`, error.message);
      } else {
        console.log(`✅ ${politician.full_name} insertado correctamente`);
      }
    }
    
    console.log('🎉 Seed completado exitosamente!');
    console.log('\n📋 Políticos disponibles:');
    politicians.forEach(p => {
      console.log(`   - ${p.full_name} (ID: ${p.id})`);
    });
    
    console.log('\n🔗 Puedes probar visitando:');
    console.log(`   http://localhost:3000/politicos/${politicians[0].id}`);
    
  } catch (error) {
    console.error('❌ Error general:', error.message);
  }
}

seedDatabase();