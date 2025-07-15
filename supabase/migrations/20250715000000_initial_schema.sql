-- Habilitar RLS (Row Level Security) para todas las tablas por defecto
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM public, anon, authenticated;

-- Tabla de Políticos
CREATE TABLE public.politicians (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    party TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.politicians ENABLE ROW LEVEL SECURITY;

-- Tabla de Fuentes
CREATE TABLE public.sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    politician_id UUID NOT NULL REFERENCES public.politicians(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.sources ENABLE ROW LEVEL SECURITY;

-- Tabla de Votos
CREATE TABLE public.votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_id UUID NOT NULL REFERENCES public.sources(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    vote_type TEXT NOT NULL, -- por ejemplo: 'credible', 'doubtful'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(source_id, user_id) -- Un usuario solo puede votar una vez por fuente
);
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;

-- Políticas de Seguridad (RLS)
-- Permitir lectura pública de políticos
CREATE POLICY "Allow public read access to politicians" ON public.politicians FOR SELECT USING (true);

-- Permitir lectura pública de fuentes
CREATE POLICY "Allow public read access to sources" ON public.sources FOR SELECT USING (true);

-- Permitir lectura pública de votos
CREATE POLICY "Allow public read access to votes" ON public.votes FOR SELECT USING (true);

-- Permitir a usuarios autenticados insertar fuentes
CREATE POLICY "Allow authenticated users to insert sources" ON public.sources FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Permitir a usuarios autenticados insertar votos
CREATE POLICY "Allow authenticated users to insert votes" ON public.votes FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Permitir a los usuarios actualizar sus propios votos
CREATE POLICY "Allow users to update their own votes" ON public.votes FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Permitir a los usuarios eliminar sus propias fuentes y votos
CREATE POLICY "Allow users to delete their own sources" ON public.sources FOR DELETE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Allow users to delete their own votes" ON public.votes FOR DELETE TO authenticated USING (auth.uid() = user_id);
