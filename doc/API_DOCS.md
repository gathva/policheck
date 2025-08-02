# Documentación de APIs - PoliCheck

## 📋 Información General

**Base URL**: `http://localhost:3000/api` (desarrollo)  
**Versión**: 1.0.0  
**Formato**: JSON  
**Autenticación**: Supabase Auth (cuando esté implementada)  

---

## 🔗 Índice de Endpoints

### Análisis
- [POST /api/analyze](#post-apianalyze) - Analizar nueva fuente

### Políticos
- [GET /api/politicians](#get-apipoliticians) - Listar políticos
- [POST /api/politicians](#post-apipoliticians) - Crear político
- [GET /api/politicians/[id]](#get-apipoliticiansid) - Obtener político
- [PUT /api/politicians/[id]](#put-apipoliticiansid) - Actualizar político
- [DELETE /api/politicians/[id]](#delete-apipoliticiansid) - Eliminar político

### Fuentes
- [GET /api/sources](#get-apisources) - Listar fuentes
- [GET /api/sources/[id]](#get-apisourcesid) - Obtener fuente

### Votación
- [POST /api/vote](#post-apivote) - Registrar voto
- [GET /api/vote/[sourceId]](#get-apivotesourceid) - Obtener votos

### Temas
- [GET /api/topics](#get-apitopics) - Listar temas
- [GET /api/topics/categories](#get-apitopicscategories) - Categorías

---

## 📊 Esquemas de Datos

### Politician
```typescript
interface Politician {
  id: string;                    // UUID
  full_name: string;             // Nombre completo
  party?: string;                // Partido político
  position?: string;             // Cargo actual
  bio?: string;                  // Biografía
  avatar_url?: string;           // URL del avatar
  created_at: string;            // ISO timestamp
  updated_at: string;            // ISO timestamp
}
```

### Source
```typescript
interface Source {
  id: string;                    // UUID
  politician_id: string;         // UUID del político
  url: string;                   // URL de la fuente
  title?: string;                // Título extraído
  status: 'pending' | 'analyzing' | 'completed' | 'failed';
  analysis_result?: AnalysisResult;
  created_at: string;            // ISO timestamp
  updated_at: string;            // ISO timestamp
}
```

### AnalysisResult
```typescript
interface AnalysisResult {
  summary: string;               // Resumen del análisis
  key_points: string[];          // Puntos clave
  sentiment: 'positive' | 'negative' | 'neutral';
  credibility_score: number;     // 0-100
  topics: string[];              // Temas identificados
  fact_checks: FactCheck[];      // Verificaciones
  ai_confidence: number;         // 0-1
  processing_time: number;       // Milisegundos
}
```

### Vote
```typescript
interface Vote {
  id: string;                    // UUID
  source_id: string;             // UUID de la fuente
  user_id?: string;              // UUID del usuario
  vote_type: 'accurate' | 'inaccurate';
  comment?: string;              // Comentario opcional
  created_at: string;            // ISO timestamp
}
```

### TopicCategory
```typescript
interface TopicCategory {
  id: string;                    // UUID
  name: string;                  // Nombre de la categoría
  description?: string;          // Descripción
  color?: string;                // Color hex
  created_at: string;            // ISO timestamp
}
```

---

## 🔍 Endpoints Detallados

### POST /api/analyze

Analiza una nueva fuente de información para un político específico.

**Request Body:**
```json
{
  "url": "https://example.com/article",
  "politician_id": "550e8400-e29b-41d4-a716-446655440001"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "politician_id": "550e8400-e29b-41d4-a716-446655440001",
    "url": "https://example.com/article",
    "title": "Declaraciones sobre política económica",
    "status": "completed",
    "analysis_result": {
      "summary": "El político presenta propuestas sobre reforma tributaria...",
      "key_points": [
        "Propone reducir impuestos a empresas",
        "Aumentar inversión en educación"
      ],
      "sentiment": "positive",
      "credibility_score": 85,
      "topics": ["economía", "tributación"],
      "fact_checks": [],
      "ai_confidence": 0.92,
      "processing_time": 3500
    },
    "created_at": "2025-01-15T10:30:00Z"
  }
}
```

**Error Responses:**
```json
// 400 - Bad Request
{
  "success": false,
  "error": "URL y politician_id son requeridos",
  "code": "MISSING_FIELDS"
}

// 404 - Politician Not Found
{
  "success": false,
  "error": "Político no encontrado",
  "code": "POLITICIAN_NOT_FOUND"
}

// 409 - Duplicate Source
{
  "success": false,
  "error": "Esta fuente ya fue analizada",
  "code": "DUPLICATE_SOURCE"
}

// 500 - Analysis Failed
{
  "success": false,
  "error": "Error al procesar la URL",
  "code": "ANALYSIS_FAILED"
}
```

---

### GET /api/politicians

Obtiene la lista de todos los políticos.

**Query Parameters:**
- `page` (opcional): Número de página (default: 1)
- `limit` (opcional): Elementos por página (default: 20, max: 100)
- `search` (opcional): Búsqueda por nombre
- `party` (opcional): Filtrar por partido

**Request:**
```
GET /api/politicians?page=1&limit=10&search=gabriel
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "full_name": "Gabriel Boric Font",
      "party": "Frente Amplio",
      "position": "Presidente de Chile",
      "bio": "Político chileno, actual Presidente de la República...",
      "avatar_url": null,
      "created_at": "2025-01-15T10:00:00Z",
      "updated_at": "2025-01-15T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  }
}
```

---

### POST /api/politicians

Crea un nuevo político.

**Request Body:**
```json
{
  "full_name": "Nuevo Político",
  "party": "Partido Ejemplo",
  "position": "Senador",
  "bio": "Biografía del político..."
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "new-uuid-here",
    "full_name": "Nuevo Político",
    "party": "Partido Ejemplo",
    "position": "Senador",
    "bio": "Biografía del político...",
    "avatar_url": null,
    "created_at": "2025-01-15T11:00:00Z",
    "updated_at": "2025-01-15T11:00:00Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "El nombre completo es requerido",
  "code": "VALIDATION_ERROR"
}
```

---

### GET /api/politicians/[id]

Obtiene un político específico por ID.

**Request:**
```
GET /api/politicians/550e8400-e29b-41d4-a716-446655440001
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "full_name": "Gabriel Boric Font",
    "party": "Frente Amplio",
    "position": "Presidente de Chile",
    "bio": "Político chileno, actual Presidente de la República...",
    "avatar_url": null,
    "created_at": "2025-01-15T10:00:00Z",
    "updated_at": "2025-01-15T10:00:00Z",
    "sources_count": 5,
    "recent_sources": [
      {
        "id": "source-id-1",
        "title": "Declaraciones recientes",
        "url": "https://example.com/article1",
        "status": "completed",
        "created_at": "2025-01-15T09:00:00Z"
      }
    ]
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "error": "Político no encontrado",
  "code": "POLITICIAN_NOT_FOUND"
}
```

---

### GET /api/sources

Obtiene la lista de fuentes analizadas.

**Query Parameters:**
- `politician_id` (opcional): Filtrar por político
- `status` (opcional): Filtrar por estado
- `page` (opcional): Número de página
- `limit` (opcional): Elementos por página

**Request:**
```
GET /api/sources?politician_id=550e8400-e29b-41d4-a716-446655440001&status=completed
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "politician_id": "550e8400-e29b-41d4-a716-446655440001",
      "politician_name": "Gabriel Boric Font",
      "url": "https://example.com/article",
      "title": "Declaraciones sobre política económica",
      "status": "completed",
      "analysis_result": {
        "summary": "Resumen del análisis...",
        "credibility_score": 85,
        "sentiment": "positive"
      },
      "votes_summary": {
        "accurate": 15,
        "inaccurate": 3,
        "total": 18
      },
      "created_at": "2025-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1,
    "pages": 1
  }
}
```

---

### POST /api/vote

Registra un voto sobre la precisión de un análisis.

**Request Body:**
```json
{
  "source_id": "123e4567-e89b-12d3-a456-426614174000",
  "vote_type": "accurate",
  "comment": "El análisis es preciso y bien fundamentado"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "vote-uuid-here",
    "source_id": "123e4567-e89b-12d3-a456-426614174000",
    "vote_type": "accurate",
    "comment": "El análisis es preciso y bien fundamentado",
    "created_at": "2025-01-15T12:00:00Z"
  },
  "vote_summary": {
    "accurate": 16,
    "inaccurate": 3,
    "total": 19
  }
}
```

**Error Responses:**
```json
// 400 - Invalid vote type
{
  "success": false,
  "error": "Tipo de voto inválido",
  "code": "INVALID_VOTE_TYPE"
}

// 404 - Source not found
{
  "success": false,
  "error": "Fuente no encontrada",
  "code": "SOURCE_NOT_FOUND"
}

// 409 - Already voted
{
  "success": false,
  "error": "Ya has votado en esta fuente",
  "code": "ALREADY_VOTED"
}
```

---

### GET /api/topics

Obtiene la lista de temas públicos.

**Query Parameters:**
- `category_id` (opcional): Filtrar por categoría
- `search` (opcional): Búsqueda por título

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "topic-uuid-1",
      "category_id": "cat-uuid-1",
      "category_name": "Economía",
      "title": "Reforma Tributaria 2025",
      "description": "Propuestas de cambios al sistema tributario...",
      "created_at": "2025-01-15T08:00:00Z"
    }
  ]
}
```

---

### GET /api/topics/categories

Obtiene las categorías de temas disponibles.

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "cat-uuid-1",
      "name": "Economía",
      "description": "Temas relacionados con política económica",
      "color": "#3B82F6",
      "topics_count": 12,
      "created_at": "2025-01-15T08:00:00Z"
    },
    {
      "id": "cat-uuid-2",
      "name": "Salud",
      "description": "Políticas y propuestas de salud pública",
      "color": "#10B981",
      "topics_count": 8,
      "created_at": "2025-01-15T08:00:00Z"
    }
  ]
}
```

---

## 🔐 Autenticación

### Headers Requeridos (Futuro)

```http
Authorization: Bearer <supabase_jwt_token>
Content-Type: application/json
```

### Roles de Usuario

- **anonymous**: Solo lectura de datos públicos
- **authenticated**: Puede votar y crear fuentes
- **admin**: Puede crear/editar políticos y moderar

---

## 📝 Códigos de Estado HTTP

| Código | Significado | Uso |
|--------|-------------|-----|
| 200 | OK | Operación exitosa |
| 201 | Created | Recurso creado exitosamente |
| 400 | Bad Request | Datos de entrada inválidos |
| 401 | Unauthorized | Token de autenticación requerido |
| 403 | Forbidden | Sin permisos para la operación |
| 404 | Not Found | Recurso no encontrado |
| 409 | Conflict | Conflicto (ej: recurso duplicado) |
| 422 | Unprocessable Entity | Error de validación |
| 429 | Too Many Requests | Límite de rate limiting |
| 500 | Internal Server Error | Error interno del servidor |

---

## 🚦 Rate Limiting

### Límites por Endpoint

| Endpoint | Límite | Ventana |
|----------|--------|----------|
| POST /api/analyze | 10 requests | 1 minuto |
| POST /api/vote | 30 requests | 1 minuto |
| GET endpoints | 100 requests | 1 minuto |
| POST /api/politicians | 5 requests | 1 minuto |

### Headers de Rate Limiting

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642694400
```

---

## 🧪 Ejemplos de Uso

### Flujo Completo: Analizar Fuente

```javascript
// 1. Crear político (si no existe)
const politician = await fetch('/api/politicians', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    full_name: 'Nuevo Político',
    party: 'Partido X',
    position: 'Diputado'
  })
});

// 2. Analizar fuente
const analysis = await fetch('/api/analyze', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://example.com/news-article',
    politician_id: politician.data.id
  })
});

// 3. Votar en el análisis
const vote = await fetch('/api/vote', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    source_id: analysis.data.id,
    vote_type: 'accurate',
    comment: 'Análisis bien fundamentado'
  })
});
```

### Búsqueda y Filtrado

```javascript
// Buscar políticos por nombre
const politicians = await fetch('/api/politicians?search=gabriel&limit=5');

// Obtener fuentes de un político específico
const sources = await fetch(`/api/sources?politician_id=${politicianId}&status=completed`);

// Obtener temas por categoría
const topics = await fetch('/api/topics?category_id=economia-uuid');
```

---

## 🔧 Configuración para Desarrollo

### Variables de Entorno Requeridas

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
OPENROUTER_API_KEY=your-openrouter-key
```

### Inicialización de Base de Datos

```sql
-- Ejecutar en Supabase SQL Editor
-- Ver scripts/seed-data.sql para datos de prueba
```

### Testing de APIs

```bash
# Instalar dependencias de testing
npm install --save-dev jest @testing-library/react

# Ejecutar tests de API
npm run test:api
```

---

## 📊 Monitoreo y Logs

### Métricas Importantes

- Tiempo de respuesta de análisis IA
- Tasa de éxito de análisis
- Número de votos por fuente
- Errores de conexión a Supabase

### Logs de Error

```javascript
// Formato de logs
{
  timestamp: '2025-01-15T12:00:00Z',
  level: 'error',
  endpoint: '/api/analyze',
  error: 'OpenRouter API timeout',
  user_id: 'user-uuid',
  request_id: 'req-uuid'
}
```

---

## 🔄 Versionado de API

### Estrategia de Versionado

- **v1**: Versión actual (sin prefijo)
- **v2**: Futuras versiones en `/api/v2/`

### Deprecación

- Aviso de 3 meses antes de deprecar
- Soporte de versiones anteriores por 6 meses
- Headers de deprecación en respuestas

---

## 📚 Recursos Adicionales

### Documentación Relacionada

- [ARQUITECTURA.md](./ARQUITECTURA.md) - Arquitectura del sistema
- [PLANIFICACION_TRAE2.md](./PLANIFICACION_TRAE2.md) - Planificación del proyecto

### Enlaces Útiles

- [Supabase API Reference](https://supabase.com/docs/reference/javascript)
- [OpenRouter API Docs](https://openrouter.ai/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

---

*Documentación actualizada: Enero 2025*  
*Mantenida por: Equipo de Desarrollo PoliCheck*