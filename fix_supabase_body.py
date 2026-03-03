import json

with open('doc/workflows/04_analisis_unificado_final.json', 'r') as f:
    data = json.load(f)

for node in data.get('nodes', []):
    if node.get('name') == 'Guardar en Supabase':
        # Eliminar configuraciones previas ambiguas
        if 'bodyParameters' in node.get('parameters', {}):
            del node['parameters']['bodyParameters']
        
        # Forzar el envío como RAW JSON puro
        node['parameters']['sendBody'] = True
        node['parameters']['specifyBody'] = 'json'
        
        # OJO: PostgREST (la API de Supabase) acepta un array de objetos directamente,
        # así que el body debe ser $json.reports, no un objeto {"reports": ...}
        node['parameters']['jsonBody'] = '={{ JSON.stringify($json.reports) }}'
        break

with open('doc/workflows/04_analisis_unificado_final.json', 'w') as f:
    json.dump(data, f, indent=2)

