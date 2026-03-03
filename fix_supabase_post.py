import json

with open('doc/workflows/04_analisis_unificado_final.json', 'r') as f:
    data = json.load(f)

for node in data.get('nodes', []):
    if node.get('name') == 'Guardar en Supabase':
        node['parameters']['method'] = 'POST'
        break

with open('doc/workflows/04_analisis_unificado_final.json', 'w') as f:
    json.dump(data, f, indent=2)

