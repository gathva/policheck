import json

with open('doc/workflows/04_analisis_unificado_final.json', 'r') as f:
    data = json.load(f)

for node in data.get('nodes', []):
    if node.get('type') == 'n8n-nodes-base.httpRequest' and 'openrouter.ai' in node.get('parameters', {}).get('url', ''):
        json_body = node['parameters'].get('jsonBody', '')
        if json_body:
            # Reemplazar la sintaxis de n8n 1.0 por la sintaxis clásica robusta
            json_body = json_body.replace("$('Unir Extracción').first().json.title", "$items(\"Unir Extracción\")[0].json.title")
            json_body = json_body.replace("$('Unir Extracción').first().json.extracted_text", "$items(\"Unir Extracción\")[0].json.extracted_text")
            node['parameters']['jsonBody'] = json_body

with open('doc/workflows/04_analisis_unificado_final.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Expresiones actualizadas correctamente")
