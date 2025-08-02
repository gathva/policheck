# 🔧 Solución: Error de Permisos en Supabase

## ❌ Error Actual
```
Error cargando políticos: permission denied for table politicians
```

## 🎯 Causa del Problema
Supabase tiene **Row Level Security (RLS)** habilitado por defecto, pero no hay políticas configuradas que permitan el acceso a las tablas desde la aplicación.

---

## 🚀 Solución Paso a Paso

### Opción 1: Configurar RLS en Supabase (Recomendado)

#### Paso 1: Acceder al Panel de Supabase
1. Ve a [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Inicia sesión en tu cuenta
3. Selecciona tu proyecto PoliCheck

#### Paso 2: Abrir el SQL Editor
1. En el menú lateral, haz clic en **"SQL Editor"**
2. Haz clic en **"New query"**

#### Paso 3: Ejecutar el Script de Configuración
1. Copia todo el contenido del archivo `scripts/setup-rls-policies.sql`
2. Pégalo en el editor SQL
3. Haz clic en **"Run"** para ejecutar el script

#### Paso 4: Verificar la Configuración
El script incluye una función de verificación. Deberías ver:
```
table_name        | rls_enabled | policies_count
------------------|-------------|---------------
politicians       | true        | 4
sources          | true        | 3
votes            | true        | 2
topic_categories | true        | 2
public_topics    | true        | 2
```

---

### Opción 2: Deshabilitar RLS Temporalmente (Solo para Desarrollo)

⚠️ **ADVERTENCIA**: Esta opción es menos segura y solo debe usarse en desarrollo.

```sql
-- Ejecutar en SQL Editor de Supabase
ALTER TABLE politicians DISABLE ROW LEVEL SECURITY;
ALTER TABLE sources DISABLE ROW LEVEL SECURITY;
ALTER TABLE votes DISABLE ROW LEVEL SECURITY;
ALTER TABLE topic_categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE public_topics DISABLE ROW LEVEL SECURITY;
```

---

## 🔍 Verificación de la Solución

### 1. Probar en la Aplicación
1. Regresa a tu aplicación en `http://localhost:3000/admin`
2. Intenta crear un político de prueba
3. El error debería desaparecer

### 2. Verificar en Supabase
1. Ve a **"Table Editor"** en Supabase
2. Selecciona la tabla **"politicians"**
3. Deberías ver los datos creados desde la aplicación

---

## 📋 Políticas RLS Configuradas

El script configura las siguientes políticas:

### Tabla `politicians`
- ✅ **Lectura pública**: Cualquiera puede ver políticos
- ✅ **Inserción pública**: Cualquiera puede crear políticos
- ✅ **Actualización pública**: Cualquiera puede editar políticos
- ✅ **Eliminación pública**: Cualquiera puede eliminar políticos

### Tabla `sources`
- ✅ **Lectura pública**: Ver fuentes analizadas
- ✅ **Inserción pública**: Agregar nuevas fuentes
- ✅ **Actualización pública**: Actualizar análisis

### Tabla `votes`
- ✅ **Lectura pública**: Ver votos
- ✅ **Inserción pública**: Registrar votos

---

## 🔐 Consideraciones de Seguridad

### Para Desarrollo (Actual)
- Las políticas actuales permiten acceso público completo
- Esto facilita el desarrollo y testing
- **No usar en producción**

### Para Producción (Futuro)
Cuando implementes autenticación, cambiar a políticas más restrictivas:

```sql
-- Ejemplo: Solo usuarios autenticados pueden crear políticos
DROP POLICY "Public insert access for politicians" ON politicians;
CREATE POLICY "Authenticated insert only" ON politicians
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Ejemplo: Solo admins pueden editar políticos
DROP POLICY "Public update access for politicians" ON politicians;
CREATE POLICY "Admin update only" ON politicians
    FOR UPDATE USING (auth.jwt() ->> 'role' = 'admin');
```

---

## 🆘 Si Aún Tienes Problemas

### 1. Verificar Variables de Entorno
Asegúrate de que `.env.local` tenga:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anonima
```

### 2. Verificar Conexión
Ejecuta este test en el navegador (Consola de Desarrollador):
```javascript
// Abrir consola en http://localhost:3000
fetch('/api/politicians')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

### 3. Revisar Logs de Supabase
1. Ve a **"Logs"** en el panel de Supabase
2. Selecciona **"Database"**
3. Busca errores relacionados con RLS

---

## 📞 Próximos Pasos

1. ✅ **Ejecutar el script RLS** (prioridad alta)
2. ✅ **Probar creación de políticos**
3. ✅ **Verificar funcionamiento completo**
4. 📋 **Implementar autenticación** (siguiente fase)
5. 🔐 **Configurar políticas de producción** (antes del deploy)

---

*Solución creada: Enero 2025*  
*Para más ayuda, consulta la documentación en `/doc/`*