"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnalysisResult {
  veracity_score: number;
  summary: string;
  bias_analysis: string;
  fallacies: string[];
  error?: string;
}

interface AnalysisResultsProps {
  results: Record<string, AnalysisResult>;
  isLoading: boolean;
}

export function AnalysisResults({ results, isLoading }: AnalysisResultsProps) {
  if (isLoading) {
    return <p className="text-center">Analizando...</p>;
  }

  if (Object.keys(results).length === 0) {
    return (
      <p className="text-muted-foreground text-center">
        Los resultados de tu análisis aparecerán aquí.
      </p>
    );
  }

  const chartData = Object.entries(results)
    .map(([model, result]) => ({
      name: model.split('/')[1], // Show a shorter name
      veracity: result.veracity_score || 0,
    }))
    .filter(item => item.veracity > 0);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Comparativa de Veracidad</CardTitle>
        </CardHeader>
        <CardContent>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="veracity" fill="#8884d8" name="Puntuación de Veracidad (1-10)" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-muted-foreground">No hay datos de veracidad para mostrar.</p>
          )}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.entries(results).map(([model, result]) => (
          <Card key={model}>
            <CardHeader>
              <CardTitle className="text-lg">{model}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {result.error ? (
                <p className="text-red-500">Error: {result.error}</p>
              ) : (
                <>
                  <div>
                    <h4 className="font-semibold">Resumen:</h4>
                    <p className="text-muted-foreground text-sm">{result.summary}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Análisis de Sesgo:</h4>
                    <p className="text-muted-foreground text-sm">{result.bias_analysis}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Falacias Encontradas:</h4>
                    {result.fallacies && result.fallacies.length > 0 ? (
                      <ul className="list-disc list-inside text-muted-foreground text-sm">
                        {result.fallacies.map((fallacy, i) => (
                          <li key={i}>{fallacy}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-sm">No se encontraron falacias.</p>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
