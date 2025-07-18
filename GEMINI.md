# PoliCheck Project Log

Este archivo registra el progreso, las decisiones clave y el contexto relevante del proyecto PoliCheck.

## Visión General

PoliCheck es una plataforma web colaborativa para la transparencia política en Chile, con un enfoque inicial en las elecciones de 2025.

**Objetivo:** Permitir que la comunidad aporte y verifique fuentes de información sobre políticos, y utilizar múltiples modelos de IA para generar análisis imparciales sobre su veracidad y coherencia.

## Pila Tecnológica (Stack)

- **Framework:** Next.js
- **UI:** shadcn/ui
- **Backend & DB:** Supabase
- **Despliegue:** Vercel
- **Modelos IA:** OpenRouter
- **Control de Versiones:** Git / GitHub

## Hitos del Proyecto

- **2025-07-15:**
  - Inicialización del repositorio Git.
  - Creación del proyecto Next.js con TypeScript, Tailwind CSS y shadcn/ui.
  - Configuración inicial del proyecto y resolución de dependencias.
  - Creación del proyecto en Supabase.
  - Creación del esquema inicial de la base de datos (`politicians`, `sources`, `votes`) y políticas de seguridad (RLS) a través de una migración SQL.
  - Conexión de la aplicación Next.js al backend de Supabase.

- **2025-07-15 (Continuación):**
  - Migración de las páginas HTML estáticas (`home.html`, `about.html`, `analisis.html`, `perfil.html`, `model_ia_analitical.html`) a componentes de React (`.tsx`) dentro de la estructura de Next.js.
  - Creación de un layout principal (`src/components/layout/Header.tsx` y `src/app/layout.tsx`) para unificar la apariencia y la navegación.
  - Refactorización de las páginas migradas para utilizar el layout principal y el enrutamiento de Next.js (`<Link>`).

- **2025-07-16:**
  - Reorganización y limpieza de la estructura de archivos del proyecto.
  - Eliminación de rutas y componentes duplicados (`about.tsx`, `Header.tsx`, etc.).
  - Consolidación de las páginas en la estructura de enrutamiento de App Router de Next.js (usando `page.tsx` en subdirectorios).
  - Eliminación de los archivos HTML estáticos de la raíz del proyecto.
  - Corrección de la importación del componente `Header` en el layout principal.
  - Rediseño de la página de inicio (`src/app/page.tsx`) con una nueva sección "Hero", un componente de pestañas para el análisis y una sección "Cómo Funciona".

- **2025-07-18:**
  - Creación del `PLAN.md` para documentar la visión, arquitectura y hoja de ruta del proyecto.
  - Se define el modelo de sostenibilidad (donaciones, sponsors, fundación) y se elige la Licencia MIT para el proyecto.
  - Se expande el esquema de la base de datos para incluir las tablas `topic_categories`, `topics`, `topic_votes` y `ai_reports`.
  - Se aplica la nueva migración directamente en el editor SQL de Supabase debido a problemas de conexión con la CLI local.
