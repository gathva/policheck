import json

with open('doc/workflows/04_analisis_unificado_final.json', 'r') as f:
    data = json.load(f)

for node in data.get('nodes', []):
    if node.get('name') == 'Combinar Análisis':
        js_code = """
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
    // Mejor extracción: buscar la primera llave '{' y la última '}'
    const match = raw.match(/\\{[\\s\\S]*\\}/);
    const jsonStr = match ? match[0] : '{}';
    
    const parsed = JSON.parse(jsonStr);
    
    // Validar que el objeto tenga las llaves mínimas
    if (parsed && typeof parsed === 'object') {
      results.push({
        source_id: baseData.source_id,
        model_name: m.name,
        report_json: parsed,
        summary: parsed.summary || 'Sin resumen',
        veracity_score: parsed.veracity_score || null
      });
      
      if (parsed.veracity_score) {
        totalVeracity += parsed.veracity_score;
        validCount++;
      }
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
        node['parameters']['jsCode'] = js_code
        break

with open('doc/workflows/04_analisis_unificado_final.json', 'w') as f:
    json.dump(data, f, indent=2)
