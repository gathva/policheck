-- Script temporal para deshabilitar RLS y permitir desarrollo
-- ⚠️ SOLO PARA DESARROLLO - NO USAR EN PRODUCCIÓN
-- Ejecutar en SQL Editor de Supabase

-- 1. Deshabilitar RLS temporalmente en todas las tablas
ALTER TABLE politicians DISABLE ROW LEVEL SECURITY;
ALTER TABLE sources DISABLE ROW LEVEL SECURITY;
ALTER TABLE votes DISABLE ROW LEVEL SECURITY;
ALTER TABLE topic_categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE topics DISABLE ROW LEVEL SECURITY;
ALTER TABLE topic_votes DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_reports DISABLE ROW LEVEL SECURITY;

-- 2. Verificar que RLS está deshabilitado
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('politicians', 'sources', 'votes', 'topic_categories', 'topics', 'topic_votes', 'ai_reports');

-- 3. Insertar datos de prueba directamente
INSERT INTO politicians (id, full_name, political_party, position, bio) VALUES
('gabriel-boric', 'Gabriel Boric Font', 'Frente Amplio', 'Presidente de Chile', 'Presidente de Chile desde 2022, líder del Frente Amplio y defensor de los derechos humanos.'),
('jose-antonio-kast', 'José Antonio Kast Rist', 'Partido Republicano', 'Diputado', 'Político chileno, fundador del Partido Republicano y candidato presidencial en 2021.'),
('michelle-bachelet', 'Michelle Bachelet Jeria', 'Partido Socialista', 'Ex Presidenta', 'Ex Presidenta de Chile (2006-2010, 2014-2018) y ex Alta Comisionada de la ONU para los Derechos Humanos.')
ON CONFLICT (id) DO NOTHING;

-- 4. Verificar que los datos se insertaron
SELECT id, full_name, political_party, position FROM politicians;

-- 5. Mensaje de confirmación
DO $$
BEGIN
    RAISE NOTICE 'RLS deshabilitado temporalmente. Datos de prueba insertados. Recuerda habilitar RLS en producción.';
END $$;

-- PARA VOLVER A HABILITAR RLS MÁS TARDE:
-- ALTER TABLE politicians ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE sources ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE topic_categories ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE topic_votes ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE ai_reports ENABLE ROW LEVEL SECURITY;