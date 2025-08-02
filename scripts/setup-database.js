const { createClient } = require('@supabase/supabase-js');

// Cargar variables de entorno desde .env.local
require('dotenv').config({ path: '.env.local' });

// Configuración de Supabase desde las variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Variables de entorno de Supabase no encontradas');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  console.log('🔧 Configurando base de datos...');
  
  try {
    // Crear tabla politicians si no existe
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS politicians (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name TEXT NOT NULL,
        political_party TEXT,
        position TEXT,
        bio TEXT,
        profile_image_url TEXT,
        created_at TIMESTAMPTZ DEFAULT now()
      );
      
      -- Habilitar RLS
      ALTER TABLE politicians ENABLE ROW LEVEL SECURITY;
      
      -- Política para permitir lectura a todos
      DROP POLICY IF EXISTS "Allow public read access" ON politicians;
      CREATE POLICY "Allow public read access" ON politicians
        FOR SELECT USING (true);
      
      -- Política para permitir inserción a todos (temporal para desarrollo)
      DROP POLICY IF EXISTS "Allow public insert access" ON politicians;
      CREATE POLICY "Allow public insert access" ON politicians
        FOR INSERT WITH CHECK (true);
    `;
    
    console.log('📝 Creando tabla politicians y configurando políticas RLS...');
    
    const { data, error } = await supabase.rpc('exec_sql', {
      sql: createTableSQL
    });
    
    if (error) {
      console.error('❌ Error ejecutando SQL:', error.message);
      
      // Intentar método alternativo: insertar directamente
      console.log('🔄 Intentando método alternativo...');
      await insertPoliticiansDirectly();
    } else {
      console.log('✅ Tabla y políticas creadas exitosamente');
      await insertPoliticiansDirectly();
    }
    
  } catch (error) {
    console.error('❌ Error general:', error.message);
    console.log('🔄 Intentando inserción directa...');
    await insertPoliticiansDirectly();
  }
}

async function insertPoliticiansDirectly() {
  console.log('📝 Insertando políticos...');
  
  const politicians = [
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      full_name: 'Gabriel Boric Font',
      political_party: 'Frente Amplio',
      position: 'Presidente de Chile',
      bio: 'Político chileno, actual Presidente de la República de Chile desde marzo de 2022.',
      profile_image_url: null
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002',
      full_name: 'José Antonio Kast Rist',
      political_party: 'Partido Republicano',
      position: 'Candidato Presidencial',
      bio: 'Abogado y político chileno. Candidato presidencial en 2017 y 2021.',
      profile_image_url: null
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440003',
      full_name: 'Evelyn Matthei Fornet',
      political_party: 'Unión Demócrata Independiente',
      position: 'Alcaldesa de Providencia',
      bio: 'Economista y política chilena. Actual alcaldesa de Providencia.',
      profile_image_url: null
    }
  ];
  
  for (const politician of politicians) {
    try {
      const { data, error } = await supabase
        .from('politicians')
        .upsert(politician, { onConflict: 'id' })
        .select();
      
      if (error) {
        console.error(`❌ Error insertando ${politician.full_name}:`, error.message);
      } else {
        console.log(`✅ ${politician.full_name} insertado correctamente`);
      }
    } catch (err) {
      console.error(`❌ Error de excepción insertando ${politician.full_name}:`, err.message);
    }
  }
  
  // Verificar que los datos se insertaron
  try {
    const { data: allPoliticians, error } = await supabase
      .from('politicians')
      .select('id, full_name');
    
    if (error) {
      console.error('❌ Error verificando datos:', error.message);
    } else {
      console.log('\n📋 Políticos en la base de datos:');
      allPoliticians.forEach(p => {
        console.log(`   - ${p.full_name} (ID: ${p.id})`);
      });
      
      if (allPoliticians.length > 0) {
        console.log('\n🔗 Puedes probar visitando:');
        console.log(`   http://localhost:3000/politicos/${allPoliticians[0].id}`);
      }
    }
  } catch (err) {
    console.error('❌ Error verificando datos:', err.message);
  }
}

setupDatabase();