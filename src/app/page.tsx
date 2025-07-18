'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AnalysisResults } from '@/components/analysis-results';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AnalysisResult {
  veracity_score: number;
  summary: string;
  bias_analysis: string;
  fallacies: string[];
  error?: string;
}

export default function Home() {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState<Record<string, AnalysisResult>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalysis = async () => {
    setIsLoading(true);
    setAnalysisResult({});

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text || url }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze');
      }

      const data = await response.json();
      setAnalysisResult(data.analysis);
    } catch (error) {
      console.error(error);
      setAnalysisResult({});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              La Verdad al Descubierto
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              PoliCheck te ayuda a verificar la información de tus candidatos. Pega un texto o introduce una URL para analizar su veracidad de forma imparcial.
            </p>
          </div>
          <div className="mx-auto max-w-2xl py-12">
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="text">Analizar Texto</TabsTrigger>
                <TabsTrigger value="url">Analizar URL</TabsTrigger>
              </TabsList>
              <TabsContent value="text">
                <div className="space-y-4 py-4">
                  <Label htmlFor="text-input">Texto a analizar</Label>
                  <Textarea
                    id="text-input"
                    placeholder="Pega aquí el texto que quieres analizar..."
                    className="min-h-[200px]"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </TabsContent>
              <TabsContent value="url">
                <div className="space-y-4 py-4">
                  <Label htmlFor="url-input">URL de la noticia</Label>
                  <Input
                    id="url-input"
                    type="url"
                    placeholder="https://ejemplo.com/noticia"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-6">
              <Button size="lg" onClick={handleAnalysis} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Analizando...
                  </>
                ) : (
                  'Analizar ahora'
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cómo Funciona</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestro proceso de análisis es simple, transparente y potente.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1 text-center">
                <div class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18.1H3"/></svg>
                </div>
              <h3 className="text-xl font-bold">1. Pega el Contenido</h3>
              <p className="text-sm text-muted-foreground">
                Introduce el texto de una declaración o la URL de una noticia que quieras verificar.
              </p>
            </div>
            <div className="grid gap-1 text-center">
                <div class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 18a10 10 0 0 0 10-10"/><path d="M12 12v10"/><path d="m10 14 2-2 2 2"/></svg>
                </div>
              <h3 className="text-xl font-bold">2. Analizamos con IA</h3>
              <p className="text-sm text-muted-foreground">
                Nuestros modelos de IA analizan la veracidad, el sesgo y las posibles falacias del contenido.
              </p>
            </div>
            <div className="grid gap-1 text-center">
                <div class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
              <h3 className="text-xl font-bold">3. Obtén Resultados</h3>
              <p className="text-sm text-muted-foreground">
                Recibe un informe detallado con un puntaje de veracidad y un desglose completo del análisis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="mt-12">
                <AnalysisResults results={analysisResult} isLoading={isLoading} />
            </div>
        </div>
      </section>
    </main>
  );
}