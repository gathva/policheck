import json

with open('doc/workflows/04_analisis_unificado_final.json', 'r') as f:
    data = json.load(f)

for node in data.get('nodes', []):
    if node.get('type') == 'n8n-nodes-base.httpRequest' and 'openrouter.ai' in node.get('parameters', {}).get('url', ''):
        # Reemplazar de forma segura las referencias $json por $('Unir Extracción').first().json
        json_body = node['parameters'].get('jsonBody', '')
        if json_body:
            # Reemplazar $json.title
            json_body = json_body.replace('${$json.title}', "${$('Unir Extracción').first().json.title}")
            # Reemplazar $json.extracted_text
            json_body = json_body.replace('${$json.extracted_text}', "${$('Unir Extracción').first().json.extracted_text}")
            node['parameters']['jsonBody'] = json_body

with open('doc/workflows/04_analisis_unificado_final.json', 'w') as f:
    json.dump(data, f, indent=2)

