# Plan de Desarrollo de PoliCheck

Este documento describe la visión, arquitectura y hoja de ruta para el desarrollo de PoliCheck. Servirá como guía central para asegurarnos de que construimos un producto coherente, robusto y alineado con nuestros objetivos.

## 1. Visión del Proyecto

PoliCheck es una plataforma web colaborativa y de código abierto para la transparencia política en Chile. Su objetivo es permitir que la comunidad aporte y verifique fuentes de información sobre políticos y programas, utilizando múltiples modelos de IA para generar análisis imparciales sobre la veracidad y coherencia de sus discursos.

### Principios Clave:
- **Transparencia:** Los datos y los análisis deben ser accesibles y fáciles de entender.
- **Colaboración:** La comunidad es el motor que impulsa la recolección y validación de la información.
- **Imparcialidad:** El uso de múltiples modelos de IA busca reducir el sesgo y ofrecer una visión equilibrada.
- **Diseño Moderno:** La interfaz será minimalista, intuitiva y atractiva para fomentar la participación.

---

## 2. Modelo de Datos (Esquema de Base de Datos)

Para soportar las funcionalidades descritas, expandiremos el esquema de la base de datos en Supabase. A continuación se presenta la arquitectura propuesta.

### Tablas Existentes (Refinadas)

```sql
-- Perfiles de los políticos.
CREATE TABLE politicians (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    political_party TEXT,
    position TEXT, -- Ej: "Candidato Presidencial", "Senador", "Diputado"
    bio TEXT,
    profile_image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Fuentes de información (links, documentos) aportadas por la comunidad.
CREATE TABLE sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    politician_id UUID REFERENCES politicians(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id), -- Vinculado al usuario que la aporta
    url TEXT NOT NULL UNIQUE,
    title TEXT,
    source_type TEXT NOT NULL, -- Ej: "video_youtube", "articulo_noticia", "post_x"
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Votos de la comunidad sobre la veracidad de una fuente.
CREATE TABLE source_votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_id UUID REFERENCES sources(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id),
    vote_type TEXT NOT NULL, -- "Veraz", "Dudoso", "Falso"
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(source_id, user_id) -- Un usuario solo puede votar una vez por fuente
);
```

### Nuevas Tablas Propuestas

```sql
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
```

---

## 3. Flujos de Usuario (User Journeys)

### a) Usuario Visitante (No Registrado)
1.  Aterriza en la página de **Inicio**.
2.  Ve rankings de políticos (basados en veracidad) y temas públicos populares.
3.  Usa el buscador para encontrar un político específico.
4.  Navega al **Perfil del Político**.
5.  Consulta la información del político, la lista de fuentes asociadas y los reportes de IA ya generados.
6.  Puede leer el glosario de "Temas Públicos".

### b) Usuario Colaborador (Registrado)
1.  **Se registra** e inicia sesión en la plataforma.
2.  Tiene todas las capacidades del *Usuario Visitante*.
3.  En el perfil de un político, puede **añadir una nueva fuente** (URL).
4.  Puede **votar por la veracidad** de las fuentes existentes (Veraz, Dudoso, Falso).
5.  En la sección de "Temas Públicos", puede **votar mensualmente** para priorizar los temas que considera más relevantes, asignando puntos.
6.  Puede **sugerir nuevos temas** para el glosario a través de un formulario de contacto.

---

## 4. Plan de Desarrollo por Fases (Roadmap)

Dividiremos el desarrollo en tres fases principales para entregar valor de forma incremental.

### Fase 1: Producto Mínimo Viable (MVP) - El Analizador
- **Objetivo:** Tener la funcionalidad central de análisis de IA funcionando.
- **Tareas:**
    1.  Implementar el esquema de base de datos inicial (`politicians`, `sources`, `source_votes`, `ai_reports`).
    2.  Crear la página de **Perfil de Político** que muestre su información y las fuentes.
    3.  Desarrollar el endpoint `api/analyze` que:
        - Recibe una URL de una fuente.
        - Utiliza `web_fetch` o `download_youtube_url` para obtener el contenido.
        - Envía el contenido a los 4 modelos de IA seleccionados a través de OpenRouter.
        - Procesa las respuestas y las guarda en la tabla `ai_reports` como JSON.
    4.  Mostrar los reportes de IA en el perfil del político de una forma clara y legible.
    5.  Poblar la base de datos con algunos políticos y fuentes de ejemplo.

### Fase 2: Funcionalidades de Comunidad
- **Objetivo:** Permitir que la comunidad participe activamente.
- **Tareas:**
    1.  Implementar la **autenticación de usuarios** con Supabase (registro, login, logout).
    2.  Crear el formulario para **"Añadir Fuente"** y su lógica de backend.
    3.  Implementar el sistema de **votación de veracidad** en las fuentes.
    4.  Crear la página de perfil de usuario donde pueda ver sus contribuciones.

### Fase 3: Contenido Avanzado y Visualización
- **Objetivo:** Enriquecer la plataforma con el glosario, temas y métricas visuales.
- **Tareas:**
    1.  Implementar las tablas `topic_categories`, `topics` y `topic_votes`.
    2.  Crear la sección de **"Temas Públicos"** con su sistema de votación mensual.
    3.  Desarrollar el **Glosario** como una wiki sencilla y consultable.
    4.  Integrar los "Temas Públicos" en el análisis de la IA para contextualizar los reportes.
    5.  Diseñar y desarrollar los **rankings y gráficos** en la página de inicio basados en los datos de `ai_reports` y `source_votes`.
    6.  Implementar la funcionalidad para compartir perfiles y reportes en redes sociales.

---

## 5. Sostenibilidad y Licenciamiento

### a) Licenciamiento
El proyecto se desarrollará bajo la **Licencia MIT**. Esta licencia fue elegida por su naturaleza permisiva, que fomenta la máxima adopción, colaboración y uso del software, alineándose con los principios de transparencia y código abierto del proyecto. Permite el uso comercial y no impone restricciones complejas a los desarrolladores o a las organizaciones que deseen utilizar o contribuir a PoliCheck.

### b) Modelo de Sostenibilidad (Propuesta a Futuro)
Para garantizar la viabilidad a largo plazo del proyecto, se explorará un modelo de financiamiento híbrido. El objetivo es cubrir los costos operativos (hosting, APIs, mantenimiento) y, eventualmente, el desarrollo continuo.

- **Fase Inicial:**
    - **Donaciones:** Se habilitarán canales para que la comunidad y los simpatizantes del proyecto puedan realizar donaciones directas (Ej: GitHub Sponsors, Open Collective, "Dona un café").
- **Fase de Crecimiento:**
    - **Sponsors:** Se buscarán patrocinios de empresas y organizaciones alineadas con la misión de transparencia.
    - **Grants (Subvenciones):** Se postulará activamente a subvenciones de fundaciones que apoyen la tecnología cívica y el periodismo de datos.
- **Fase de Madurez:**
    - **Creación de una Fundación:** Se evaluará la creación de una fundación sin fines de lucro para gestionar legal y financieramente el proyecto, asegurando su independencia y misión a largo plazo.