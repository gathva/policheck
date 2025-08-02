# PoliCheck Project Log

Este archivo registra el progreso, las decisiones clave y el contexto relevante del proyecto PoliCheck.

## Visión General

PoliCheck es una plataforma web colaborativa para la transparencia política en Chile, con un enfoque inicial en las elecciones de 2025.

**Objetivo:** Permitir que la comunidad aporte y verifique fuentes de información sobre políticos, y utilizar múltiples modelos de IA para generar análisis imparciales sobre su veracidad y coherencia.

## Pila Tecnológica (Stack)

- **Framework:** Next.js
- **UI:** shadcn/ui
- **Backend & DB:** Supabase
- **Análisis IA:** OpenRouter
- **Despliegue:** Vercel
- **Control de Versiones:** Git / GitHub

## Contexto y Decisiones Clave

- **Supabase MCP:** Gemini tiene acceso al Management Console del proyecto para gestionar la base de datos. Se pueden eliminar datos del proyecto anterior si es necesario.
- **7-context MCP:** Gemini tiene acceso a la documentación más reciente a través de 7-context para asegurar el uso de las mejores prácticas.
- **Workflow de Desarrollo:** Se utilizará un flujo de trabajo basado en ramas de Git. Cada nueva planificación o fase se desarrollará en una `feature-branch`. Una vez completada y verificada, se fusionará a la rama `main`.
- **Comunicación:** Se espera que Gemini sea proactivo en la comunicación de dudas, análisis, sugerencias y mejoras.

## Hitos del Proyecto

- **2025-08-01:**
  - **Inicio de Reconstrucción del Proyecto.**
  - Revisión y síntesis de toda la documentación (`NUEVO_PLAN_DE_PROYECTO.md`, `Desarrollo de Policheck_nuevo.rtf`).
  - Se acuerda seguir el plan por fases del `NUEVO_PLAN_DE_PROYECTO.md` y usar los detalles del `.rtf` para enriquecer cada fase.
  - Se actualiza el archivo `.gitignore` con una plantilla robusta para Next.js.
  - Se confirma la creación del archivo `.env.local` por parte del usuario.
  - **Plan para Fase 1 (Fundación y Configuración):**
    0.  **Corregir Alias de Importación**: Arreglar la ruta en `tsconfig.json` de `@src/app/page.tsx` a `@/*`.
    1.  **Instalar y configurar `shadcn/ui`**: Usar el CLI para la configuración inicial.
    2.  **Crear estructura de directorios**: `src/components/layout` y `src/lib/utils`.
    3.  **Configurar Tema (Claro/Oscuro)**: Implementar `ThemeProvider` y botón de cambio.
    4.  **Crear Layout Principal**: Modificar `src/app/layout.tsx` para unificar la estructura.
    5.  **Crear Componente `Header`**: Componente de cabecera con título y toggle de tema.
    6.  **Verificar en `page.tsx`**: Limpiar la página de inicio y aplicar el nuevo layout.
    7.  **Crear Cliente de Supabase**: Centralizar la conexión en `src/lib/supabase.ts`.

- **2025-08-02:**
  - **Inicio de Fase 2 y Desarrollo del Perfil de Político.**
  - Se comenzó el trabajo en la **Fase 2 (Producto Mínimo Viable)**.
  - Se crearon los componentes `AddSourceForm` y `SourceList` para gestionar las fuentes de información.
  - Se implementó el endpoint API `/api/analyze` que utiliza `cheerio` para extraer el título de una URL y guardarla en la tabla `sources` de Supabase.
  - Se integraron los componentes en la página de perfil del político (`/politicos/[id]`), permitiendo añadir fuentes y refrescar la lista dinámicamente con `router.refresh()`.
  - Se solucionaron múltiples errores, incluyendo la falta de dependencias (`geist`, `input`) y la configuración de políticas RLS en Supabase para permitir el acceso público a los datos.
  - **Problema pendiente:** Persiste un error de tipado (`PageProps`) durante el `build` de producción (`npm run build`). Se acordó posponer su solución y continuar el desarrollo con `npm run dev` para no bloquear el avance funcional.

- **2025-07-19 (Proyecto Anterior):**
  - **Solución a Problemas de Conexión con Supabase:** Se resolvieron los problemas de conexión con la base de datos remota. La solución consistió en:
    1. Instalar la CLI de Supabase como una dependencia de desarrollo local del proyecto: `npm install supabase --save-dev`.
    2. Iniciar sesión en la cuenta de Supabase a través de la CLI local: `npx supabase login`.
    3. Para los comandos que requieren acceso directo a la base de datos (ej. `db push`, `db reset`), se debe pasar la contraseña de la base de datos como una variable de entorno para evitar prompts interactivos y por seguridad: `SUPABASE_DB_PASSWORD='...' npx supabase <comando>`.
  - **Decisión de Resetear la BD:** Debido a múltiples inconsistencias entre el estado de la base de datos remota y los archivos de migración locales, se decidió resetear la base de datos remota para asegurar una base limpia y sincronizada.
