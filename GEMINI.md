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
