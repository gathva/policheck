import json

with open('doc/workflows/04_analisis_unificado_final.json', 'r') as f:
    data = json.load(f)

for node in data.get('nodes', []):
    if node.get('type') == 'n8n-nodes-base.httpRequest':
        # Configuración para OpenRouter
        if 'openrouter.ai' in node.get('parameters', {}).get('url', ''):
            model = ""
            for param in node.get('parameters', {}).get('bodyParameters', {}).get('parameters', []):
                if param.get('name') == 'model':
                    model = param.get('value')
            
            if model:
                if 'bodyParameters' in node['parameters']:
                    del node['parameters']['bodyParameters']
                if 'sendBody' in node['parameters']:
                    node['parameters']['sendBody'] = True
                    
                node['parameters']['specifyBody'] = 'json'
                
                expr = """={{ JSON.stringify({
  "model": "%s",
  "messages": [
    {
      "role": "system",
      "content": "Eres un analista político imparcial. Analiza la siguiente fuente sobre un político chileno y evalúa: 1) Veracidad(0-100), 2) Coherencia(0-100), 3) Sesgo. Responde SOLO en JSON: {\\"veracity_score\\": number, \\"coherence_score\\": number, \\"bias_analysis\\": string, \\"summary\\": string, \\"key_claims\\": [string]}"
    },
    {
      "role": "user",
      "content": `Título: ${$json.title}\\n\\nContenido: ${$json.extracted_text}`
    }
  ],
  "max_tokens": 800
}) }}""" % model
                node['parameters']['jsonBody'] = expr
                
        # Configuración para Supabase
        elif 'supabase.co' in node.get('parameters', {}).get('url', ''):
            if 'bodyParameters' in node['parameters']:
                del node['parameters']['bodyParameters']
            if 'sendBody' in node['parameters']:
                node['parameters']['sendBody'] = True
                
            node['parameters']['specifyBody'] = 'json'
            node['parameters']['jsonBody'] = '={{ JSON.stringify($json.reports) }}'

with open('doc/workflows/04_analisis_unificado_final.json', 'w') as f:
    json.dump(data, f, indent=2)

