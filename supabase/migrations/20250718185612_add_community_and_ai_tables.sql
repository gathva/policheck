-- Categorías para agrupar los temas públicos y asignarles un color.
CREATE TABLE topic_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    color_hex VARCHAR(7) NOT NULL, -- Ej: "#FF0000" para rojo
    description TEXT
);

-- Temas de interés público (glosario) definidos y votados por la comunidad.
CREATE TABLE topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES topic_categories(id),
    name TEXT NOT NULL UNIQUE,
    description TEXT, -- Definición clara para evitar ambigüedad (Wiki-style)
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Votos de los usuarios para priorizar los temas públicos mensualmente.
CREATE TABLE topic_votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    points_allocated INT NOT NULL CHECK (points_allocated BETWEEN 1 AND 3),
    vote_period DATE NOT NULL, -- Ej: '2025-08-01' para el mes de agosto
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(user_id, topic_id, vote_period)
);

-- Almacena los reportes generados por las IAs en formato JSON.
CREATE TABLE ai_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_id UUID REFERENCES sources(id) ON DELETE CASCADE,
    model_name TEXT NOT NULL, -- Ej: "gpt-4", "claude-3-sonnet"
    report_json JSONB NOT NULL, -- El análisis completo en formato JSON
    summary TEXT, -- Un resumen extraído del JSON para vistas rápidas
    created_at TIMESTAMPTZ DEFAULT now()
);
