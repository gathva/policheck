-- Script para configurar Row Level Security (RLS) en Supabase
-- Ejecutar este script en el SQL Editor de Supabase

-- 1. Habilitar RLS en todas las tablas
ALTER TABLE politicians ENABLE ROW LEVEL SECURITY;
ALTER TABLE sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE topic_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public_topics ENABLE ROW LEVEL SECURITY;

-- 2. Políticas para tabla politicians
-- Permitir lectura pública
CREATE POLICY "Public read access for politicians" ON politicians
    FOR SELECT USING (true);

-- Permitir inserción pública (temporal para desarrollo)
CREATE POLICY "Public insert access for politicians" ON politicians
    FOR INSERT WITH CHECK (true);

-- Permitir actualización pública (temporal para desarrollo)
CREATE POLICY "Public update access for politicians" ON politicians
    FOR UPDATE USING (true);

-- Permitir eliminación pública (temporal para desarrollo)
CREATE POLICY "Public delete access for politicians" ON politicians
    FOR DELETE USING (true);

-- 3. Políticas para tabla sources
-- Permitir lectura pública
CREATE POLICY "Public read access for sources" ON sources
    FOR SELECT USING (true);

-- Permitir inserción pública
CREATE POLICY "Public insert access for sources" ON sources
    FOR INSERT WITH CHECK (true);

-- Permitir actualización pública
CREATE POLICY "Public update access for sources" ON sources
    FOR UPDATE USING (true);

-- 4. Políticas para tabla votes
-- Permitir lectura pública
CREATE POLICY "Public read access for votes" ON votes
    FOR SELECT USING (true);

-- Permitir inserción pública
CREATE POLICY "Public insert access for votes" ON votes
    FOR INSERT WITH CHECK (true);

-- 5. Políticas para tabla topic_categories
-- Permitir lectura pública
CREATE POLICY "Public read access for topic_categories" ON topic_categories
    FOR SELECT USING (true);

-- Permitir inserción pública
CREATE POLICY "Public insert access for topic_categories" ON topic_categories
    FOR INSERT WITH CHECK (true);

-- 6. Políticas para tabla public_topics
-- Permitir lectura pública
CREATE POLICY "Public read access for public_topics" ON public_topics
    FOR SELECT USING (true);

-- Permitir inserción pública
CREATE POLICY "Public insert access for public_topics" ON public_topics
    FOR INSERT WITH CHECK (true);

-- 7. Verificar que las políticas se crearon correctamente
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- NOTA IMPORTANTE:
-- Estas políticas permiten acceso público completo para desarrollo.
-- En producción, deberías restringir las operaciones según roles de usuario:
--
-- Ejemplo de políticas más restrictivas para producción:
-- CREATE POLICY "Authenticated insert" ON politicians
--     FOR INSERT WITH CHECK (auth.role() = 'authenticated');
--
-- CREATE POLICY "Admin only update" ON politicians
--     FOR UPDATE USING (auth.jwt() ->> 'role' = 'admin');

-- 8. Opcional: Crear función para verificar el estado de RLS
CREATE OR REPLACE FUNCTION check_rls_status()
RETURNS TABLE(
    table_name text,
    rls_enabled boolean,
    policies_count bigint
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        c.relname::text as table_name,
        c.relrowsecurity as rls_enabled,
        COUNT(p.policyname) as policies_count
    FROM pg_class c
    LEFT JOIN pg_policies p ON c.relname = p.tablename
    WHERE c.relnamespace = 'public'::regnamespace
    AND c.relkind = 'r'
    AND c.relname IN ('politicians', 'sources', 'votes', 'topic_categories', 'public_topics')
    GROUP BY c.relname, c.relrowsecurity
    ORDER BY c.relname;
END;
$$ LANGUAGE plpgsql;

-- Ejecutar la función para verificar el estado
SELECT * FROM check_rls_status();

-- 9. Mensaje de confirmación
DO $$
BEGIN
    RAISE NOTICE 'RLS configurado correctamente. Todas las tablas tienen políticas públicas para desarrollo.';
END $$;