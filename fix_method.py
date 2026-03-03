import json

with open('doc/workflows/04_analisis_unificado_final.json', 'r') as f:
    data = json.load(f)

for node in data.get('nodes', []):
    if node.get('type') == 'n8n-nodes-base.httpRequest':
        # Para los nodos que van a openrouter o supabase
        if 'openrouter.ai' in node.get('parameters', {}).get('url', ''):
            node['parameters']['method'] = 'POST'

with open('doc/workflows/04_analisis_unificado_final.json', 'w') as f:
    json.dump(data, f, indent=2)

