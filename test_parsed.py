import json

data = {
  "reports": [
    {
      "source_id": "123",
      "model_name": "test",
      "report_json": {"summary": "test"},
      "veracity_score": 80
    }
  ]
}
print(json.dumps(data, indent=2))
