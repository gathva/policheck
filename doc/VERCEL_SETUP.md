# Guía de Configuración en Vercel — PoliCheck

## 1. Pre-requisitos

Antes de empezar asegúrate de tener:
- [ ] Cuenta en [vercel.com](https://vercel.com) logueada
- [ ] El repositorio de PoliCheck en GitHub (público o privado)
- [ ] Las variables de entorno de Supabase a mano (en tu `.env.local`)

---

## 2. Subir el repositorio a GitHub (si no está actualizado)

```bash
# Estando en la rama main (producción)
cd /home/alejandro/Documentos/Policheck
git checkout main
git push origin main
git push origin dev
```

---

## 3. Configurar en Vercel desde cero

### Paso 1: Importar proyecto
1. Ir a [vercel.com/new](https://vercel.com/new)
2. Seleccionar **"Import Git Repository"**
3. Buscar y seleccionar el repo `Policheck`
4. Click en **"Import"**

### Paso 2: Configurar el proyecto
En la pantalla de configuración:
- **Framework Preset:** Next.js (se detecta automáticamente)
- **Root Directory:** `./` (dejar por defecto)
- **Build Command:** `next build` (por defecto)
- **Output Directory:** `.next` (por defecto)

### Paso 3: Variables de Entorno (⚠️ MUY IMPORTANTE)
Antes de hacer deploy, añadir las siguientes variables:

Ir a **"Environment Variables"** y añadir una por una:

| Nombre | Valor | Entornos |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://alxidykzaoiupbnlxgcf.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGci...` (tu anon key completa) | Production, Preview, Development |
| `OPENROUTER_API_KEY` | `sk-or-v1-...` (tu OpenRouter key) | Production, Preview, Development |

### Paso 4: Deploy
- Click en **"Deploy"**
- Esperar ~2-3 minutos
- ✅ Tu app estará disponible en `https://policheck.vercel.app` (o similar)

---

## 4. Configurar despliegue automático por ramas

Vercel hace esto automáticamente:
- **Rama `main`** → Despliegue en **PRODUCCIÓN** (URL principal)
- **Rama `dev`** → Despliegue en **PREVIEW** (URL de prueba automática)
- **Otras ramas** → Preview URLs temporales

No necesitas configuración adicional para esto.

---

## 5. Verificar el dominio

Una vez desplegado:
1. Ir a tu proyecto en Vercel → **Settings → Domains**
2. Si tienes un dominio propio (ej: `policheck.cl`), agregarlo aquí
3. Si no, usar la URL gratuita de Vercel (ej: `policheck-xxx.vercel.app`)

---

## 6. Actualizar Supabase con la URL de producción

Cuando tengas la URL de Vercel, ir a Supabase:
1. **Authentication → URL Configuration**
2. **Site URL:** `https://tu-url.vercel.app`
3. **Redirect URLs:** `https://tu-url.vercel.app/**`

Esto es necesario para que el login/registro funcione en producción.

---

## 7. Flujo de trabajo futuro (dev → main)

```bash
# 1. Crear rama para nueva funcionalidad desde dev
git checkout dev
git checkout -b feature/nombre-funcionalidad

# 2. Desarrollar y testear localmente
npm run dev

# 3. Commit y push
git add -A
git commit -m "feat: descripción de la funcionalidad"
git push origin feature/nombre-funcionalidad

# 4. Pull Request: feature → dev (Vercel genera Preview URL automáticamente)
# 5. Verificar Preview URL en Vercel
# 6. Merge a dev (despliegue automático en entorno dev)

# 7. Cuando dev está estable: merge dev → main (despliegue en producción)
git checkout main
git merge dev
git push origin main
```
