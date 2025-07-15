"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnalysisResults } from "@/components/analysis-results";

interface AnalysisResult {
  veracity_score: number;
  summary: string;
  bias_analysis: string;
  fallacies: string[];
  error?: string;
}

export default function Home() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [analysisResult, setAnalysisResult] = useState<Record<string, AnalysisResult>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalysis = async () => {
    setIsLoading(true);
    setAnalysisResult({});

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text || url }), // Por ahora, solo enviamos el texto o la url
      });

      if (!response.ok) {
        throw new Error("Failed to analyze");
      }

      const data = await response.json();
      setAnalysisResult(data.analysis);
    } catch (error) {
      console.error(error);
      setAnalysisResult({}); // Clear results on error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h1 className="text-2xl font-bold">PoliCheck</h1>
        </div>
      </header>
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            Verifica la información de tus candidatos
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Pega un texto o introduce la URL de una noticia para analizar su
            veracidad.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Label htmlFor="text-input">Analizar texto</Label>
              <Textarea
                id="text-input"
                placeholder="Pega aquí el texto que quieres analizar..."
                className="min-h-[200px]"
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-4">
              <Label htmlFor="url-input">Analizar URL</Label>
              <Input
                id="url-input"
                type="url"
                placeholder="https://ejemplo.com/noticia"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>
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
                "Analizar ahora"
              )}
            </Button>
          </div>
          <div className="mt-12">
            <AnalysisResults results={analysisResult} isLoading={isLoading} />
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6 text-center text-sm">
        <p>&copy; 2025 PoliCheck. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
