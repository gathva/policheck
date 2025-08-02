# Plan de Reconstrucción del Proyecto: PoliCheck (Versión 2)

## 1. Visión y Principios

**Visión:** PoliCheck será una plataforma web de transparencia política en Chile, colaborativa y de código abierto. Su misión es empoderar a los ciudadanos permitiéndoles verificar la información y el discurso político a través de análisis objetivos generados por múltiples modelos de Inteligencia Artificial.

**Principios Clave:**
- **Transparencia Radical:** Todos los datos, análisis y procesos serán públicos y fáciles de entender.
- **Colaboración Comunitaria:** La plataforma será impulsada por las contribuciones y la validación de sus usuarios.
- **Imparcialidad Tecnológica:** Se usarán diversos modelos de IA para minimizar sesgos y ofrecer una perspectiva equilibrada.
- **Diseño Centrado en el Usuario:** La interfaz será moderna, intuitiva y accesible para garantizar una experiencia de usuario impecable.

---

## 2. Pila Tecnológica Definitiva

- **Framework:** Next.js 14+ (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Componentes UI:** shadcn/ui
- **Base de Datos y Backend:** Supabase
- **Análisis IA:** OpenRouter API
- **Despliegue:** Vercel

---

## 3. Arquitectura de la Base de Datos (Esquema Supabase)

Este es el esquema completo y definitivo que implementaremos.

```sql
-- Tabla para perfiles de políticos
CREATE TABLE politicians (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    political_party TEXT,
    position TEXT, -- Ej: "Candidato Presidencial", "Senador"
    bio TEXT,
    profile_image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla para fuentes de información (noticias, videos, etc.)
CREATE TABLE sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    politician_id UUID REFERENCES politicians(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id), -- Quien la aportó
    url TEXT NOT NULL UNIQUE,
    title TEXT,
    source_type TEXT NOT NULL, -- Ej: "articulo_noticia", "video_youtube"
    status TEXT DEFAULT 'no_verificada', -- 'verificada', 'no_verificada'
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla para los reportes generados por cada modelo de IA
CREATE TABLE ai_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_id UUID REFERENCES sources(id) ON DELETE CASCADE,
    model_name TEXT NOT NULL, -- Ej: "openai/gpt-4o-mini"
    report_json JSONB NOT NULL, -- El análisis completo en formato JSON
    summary TEXT, -- Un resumen extraído del JSON para vistas rápidas
    veracity_score DECIMAL(5, 2), -- Puntaje de 0.00 a 100.00
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla para los votos de la comunidad sobre la veracidad de una fuente
CREATE TABLE source_votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_id UUID REFERENCES sources(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id),
    vote_type TEXT NOT NULL CHECK (vote_type IN ('Veraz', 'Dudoso', 'Falso')),
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(source_id, user_id) -- Un usuario, un voto por fuente
);

-- Tabla para categorías de temas públicos
CREATE TABLE topic_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    color_hex VARCHAR(7) NOT NULL, -- Ej: "#FF0000"
    description TEXT
);

-- Tabla para temas de interés público (glosario)
CREATE TABLE topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES topic_categories(id),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla para los votos mensuales de la comunidad sobre los temas
CREATE TABLE topic_votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    points_allocated INT NOT NULL CHECK (points_allocated BETWEEN 1 AND 3),
    vote_period DATE NOT NULL, -- Ej: '2025-08-01'
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(user_id, topic_id, vote_period)
);
```

---

## 4. Plan de Desarrollo por Fases

### **Fase 1: Fundación y Configuración (La Base Correcta)**
**Objetivo:** Crear una estructura de proyecto limpia, funcional y con los estilos correctamente aplicados desde el primer momento.
- **1.1:** Limpiar el directorio del proyecto (eliminar archivos y configuraciones conflictivas).
- **1.2:** Inicializar un nuevo proyecto Next.js con la configuración correcta: `npx create-next-app@latest --typescript --tailwind --eslint`.
- **1.3:** Instalar y configurar `shadcn/ui` correctamente.
- **1.4:** Crear el layout principal (`src/app/layout.tsx`) con la importación de fuentes y el `ThemeProvider`.
- **1.5:** Crear el componente `Header` con la navegación básica y el `ThemeToggle`.
- **1.6:** Crear una página de inicio (`src/app/page.tsx`) simple para **verificar que los estilos se aplican correctamente**.
- **1.7:** Conectar la aplicación a Supabase y configurar las variables de entorno en `.env.local`.

### **Fase 2: Producto Mínimo Viable (El Analizador)**
**Objetivo:** Implementar la funcionalidad central de la plataforma.
- **2.1:** Crear la página de perfil de político `src/app/politicos/[id]/page.tsx`.
- **2.2:** Implementar la lógica para añadir una nueva fuente a un político (se guarda como 'no_verificada').
- **2.3:** Desarrollar el endpoint `src/app/api/analyze/route.ts` que analiza fuentes y guarda los reportes en `ai_reports`.
- **2.4:** Crear el componente `AnalysisResults` para mostrar los reportes de la IA.

### **Fase 3: Comunidad y Verificación**
**Objetivo:** Integrar a los usuarios para que puedan colaborar y validar información.
- **3.1:** Implementar la autenticación de usuarios completa con Supabase.
- **3.2:** Desarrollar la funcionalidad para que los usuarios voten por la veracidad de las fuentes ('Veraz', 'Dudoso', 'Falso').
- **3.3:** Implementar un sistema donde una fuente pasa a 'verificada' tras un umbral de votos positivos.
- **3.4:** Crear una página de perfil de usuario donde pueda ver sus contribuciones.

### **Fase 4: Gamificación y Comunidad Avanzada**
**Objetivo:** Aumentar la participación y el valor de la plataforma con funcionalidades avanzadas.
- **4.1:** Implementar el sistema de **Temas Públicos (TP)**:
    - Página para proponer y votar mensualmente por TP (5 puntos por usuario, máximo 3 por tema).
    - Crear el **Glosario** de TP (formato Wiki) con buscador y categorías de colores.
- **4.2:** Integrar los TP en el análisis de la IA para contextualizar los reportes.
- **4.3:** Diseñar e implementar un sistema de perfiles de usuario con niveles y medallas por contribución.

### **Fase 5: Visualización de Datos y Sostenibilidad**
**Objetivo:** Enriquecer la plataforma con visualizaciones y asegurar su futuro.
- **5.1:** Crear la página de **Ranking de Políticos** basada en el puntaje de veracidad.
- **5.2:** Crear un **Ranking de Medios** basado en la veracidad de las fuentes que publican.
- **5.3:** Implementar la página de **Búsqueda Avanzada**.
- **5.4:** Añadir opciones para compartir perfiles y análisis en redes sociales.
- **5.5:** Establecer la **Licencia MIT** y añadir una sección de "Apóyanos" para donaciones.

---

## 5. Próximos Pasos

1.  **Aprobación:** Si estás de acuerdo con este plan consolidado, comenzaré con la **Fase 1**.
2.  **Ejecución:** Empezaré por limpiar el proyecto y a generar la nueva estructura de archivos y configuraciones paso a paso, explicándote cada decisión.