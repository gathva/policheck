import json

with open('doc/workflows/PoliCheck - Workflow Unificado (Modo DEV)_REVIEW.json', 'r') as f:
    data = json.load(f)

# Configurar modelo secuencial:
# Unir Extracción -> trinity -> deepseek -> grok -> Combinar Análisis

data['connections'] = {
    "Webhook: Iniciar Proceso": { "main": [[{"node": "¿Es YouTube?", "type": "main", "index": 0}]] },
    "¿Es YouTube?": { "main": [[{"node": "Obtener página YouTube", "type": "main", "index": 0}], [{"node": "Obtener Artículo HTML", "type": "main", "index": 0}]] },
    "Obtener página YouTube": { "main": [[{"node": "Parsear YouTube", "type": "main", "index": 0}]] },
    "Obtener Artículo HTML": { "main": [[{"node": "Parsear Artículo", "type": "main", "index": 0}]] },
    "Parsear YouTube": { "main": [[{"node": "Unir Extracción", "type": "main", "index": 0}]] },
    "Parsear Artículo": { "main": [[{"node": "Unir Extracción", "type": "main", "index": 1}]] },
    "Unir Extracción": { "main": [[{"node": "trinity-large-preview:free", "type": "main", "index": 0}]] },
    "trinity-large-preview:free": { "main": [[{"node": "deepseek/deepseek-v3.2", "type": "main", "index": 0}]] },
    "deepseek/deepseek-v3.2": { "main": [[{"node": "x-ai/grok-4.1-fast", "type": "main", "index": 0}]] },
    "x-ai/grok-4.1-fast": { "main": [[{"node": "Combinar Análisis", "type": "main", "index": 0}]] },
    "Combinar Análisis": { "main": [[{"node": "Guardar en Supabase", "type": "main", "index": 0}]] },
    "Guardar en Supabase": { "main": [[{"node": "Responder a Next.js", "type": "main", "index": 0}]] }
}

for idx, node in enumerate(data['nodes']):
    if node['id'] == '3c70b17d-4b65-4c36-8b8e-7096ff0d0152': # Combinar Análisis
        node['parameters']['jsCode'] = """
const baseData = $('Unir Extracción').first().json;
const models = [
  { name: 'arcee-ai/trinity-large-preview:free', node: 'trinity-large-preview:free' },
  { name: 'deepseek/deepseek-v3.2', node: 'deepseek/deepseek-v3.2' },
  { name: 'x-ai/grok-4.1-fast', node: 'x-ai/grok-4.1-fast' }
];
const results = [];
let totalVeracity = 0;
let validCount = 0;

models.forEach(m => {
  try {
    const raw = $(m.node).first().json.choices?.[0]?.message?.content || '{}';
    const parsed = JSON.parse(raw.replace(/```json\\n?|```/g, '').trim());
    
    results.push({
      source_id: baseData.source_id,
      model_name: m.name,
      report_json: parsed,
      summary: parsed.summary || '',
      veracity_score: parsed.veracity_score || null
    });
    
    if (parsed.veracity_score) {
      totalVeracity += parsed.veracity_score;
      validCount++;
    }
  } catch(e) {
    console.log('Error parseando ' + m.name + ': ' + e.message);
  }
});

const avgVeracity = validCount > 0 ? (totalVeracity / validCount).toFixed(2) : null;

return [{
  json: {
    reports: results,
    source_id: baseData.source_id,
    politician_id: baseData.politician_id,
    avg_veracity: avgVeracity,
    models_used: validCount,
    title: baseData.title
  }
}];
"""

data['name'] = "PoliCheck - Workflow Unificado (VERSION FINAL)"

with open('doc/workflows/04_analisis_unificado_final.json', 'w') as f:
    json.dump(data, f, indent=2)

