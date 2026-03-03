import json

with open('doc/workflows/04_analisis_unificado_final.json', 'r') as f:
    data = json.load(f)

for node in data.get('nodes', []):
    if node.get('name') == 'Guardar en Supabase':
        
        # Eliminar las referencias a $env de los headers
        params_to_keep = []
        for param in node.get('parameters', {}).get('headerParameters', {}).get('parameters', []):
            if param.get('name') not in ['apikey', 'Authorization']:
                params_to_keep.append(param)
        
        node['parameters']['headerParameters']['parameters'] = params_to_keep
        
        # Configurar la autenticación genérica
        node['parameters']['authentication'] = 'genericCredentialType'
        node['parameters']['genericAuthType'] = 'httpHeaderAuth'
        
        break

with open('doc/workflows/04_analisis_unificado_final.json', 'w') as f:
    json.dump(data, f, indent=2)

