# Guía de Workflows n8n — PoliCheck

## Arquitectura General

```
[Usuario añade URL en PoliCheck]
         │
         ▼
[Next.js API Route: /api/analyze]
  → Guarda fuente en Supabase (status: 'pendiente')
  → Llama al Webhook de n8n (Workflow 1)
         │
         ▼
[n8n: Workflow 1 - Extraer Contenido]
  → Detecta si es YouTube o Artículo
  → Extrae título + texto limpio
  → Guarda en campo 'extracted_text' en Supabase
  → Activa Workflow 2
         │
         ▼
[n8n: Workflow 2 - Análisis Multi-IA]
  → Llama a GPT-4.1, Claude Sonnet 4, Gemini 2.5 Pro EN PARALELO
  → Combina resultados + calcula score promedio
  → Guarda reportes en tabla 'ai_reports'
  → Actualiza 'veracity_score' del político en 'politicians'
```

---

## Workflow 1: Extraer Contenido (`01_extraer_contenido.json`)

**Propósito:** Recibe una URL, extrae el contenido textual y lo prepara para análisis.

### Cómo importarlo a n8n:
1. Abrir n8n en `http://localhost:5678`
2. Menú superior → **"Import from file"**
3. Seleccionar `doc/workflows/01_extraer_contenido.json`
4. Activar el workflow (toggle ON)

### Parámetros de entrada (POST al webhook):
```json
{
  "source_id": "uuid-de-la-fuente",
  "politician_id": "uuid-del-politico",
  "url": "https://youtube.com/watch?v=xxx",
  "source_type": "video_youtube"
}
```

### URL del webhook (después de activar):
```
http://localhost:5678/webhook/policheck-extract
```

---

## Workflow 2: Análisis Multi-IA (`02_analisis_multi_ia.json`)

**Propósito:** Recibe el contenido extraído y lo analiza con 3 modelos de IA en paralelo.

### Configuración requerida en n8n:

**Variables de entorno (Settings → Variables):**
| Variable | Valor |
|---|---|
| `SUPABASE_SERVICE_KEY` | La Service Role Key de Supabase (en Settings → API) |
| (Credencial HTTP) | Header Auth con clave `Authorization` = `Bearer sk-or-v1-...` (tu OpenRouter key) |

### Modelos utilizados:
| Modelo | Propósito |
|---|---|
| `openai/gpt-4.1` | Análisis de hechos y coherencia |
| `anthropic/claude-sonnet-4` | Detección de sesgo y retórica |
| `google/gemini-2.5-pro` | Verificación de contexto político |

### Cómo configurar la credencial de OpenRouter:
1. n8n → Settings → Credentials → **New Credential**
2. Tipo: **HTTP Header Auth**
3. Name: `OpenRouter API`
4. Header Name: `Authorization`
5. Header Value: `Bearer sk-or-v1-[TU_API_KEY]`
6. Asignar esta credencial a los 3 nodos de análisis IA

### URL del webhook:
```
http://localhost:5678/webhook/policheck-analyze
```

---

## Próximos Workflows a Crear

| # | Nombre | Descripción |
|---|---|---|
| 03 | Actualizar Score Promedio | Recalcula el `veracity_score` del político basado en todos sus reportes |
| 04 | Alerta de Fuente Verificada | Cuando una fuente alcanza X votos, envía email de notificación |
| 05 | Transcripción YouTube (avanzado) | Usa YouTube Data API para obtener subtítulos en lugar de scraping del HTML |
