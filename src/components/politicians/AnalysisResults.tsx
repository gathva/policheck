'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

interface AIReport {
    id: string;
    source_id: string;
    model_name: string;
    veracity_score: number | null;
    coherence_score: number | null;
    summary: string | null;
    [key: string]: unknown;
}

export function AnalysisResults({ sourceId }: { sourceId: string }) {
    const [reports, setReports] = useState<AIReport[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const supabase = createClient();
        let interval: NodeJS.Timeout;

        const fetchReports = async () => {
            const { data, error } = await supabase
                .from('ai_reports')
                .select('*')
                .eq('source_id', sourceId);

            if (data && data.length > 0) {
                setReports(data);
                setLoading(false);
            } else if (error) {
                console.error("Error fetching reports:", error);
            }
        };

        fetchReports();

        // Polling cada 5 segundos si no hay reportes (n8n está procesando)
        if (reports.length === 0) {
            interval = setInterval(() => {
                fetchReports();
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [sourceId, reports.length]);

    if (loading && reports.length === 0) {
        return (
            <div className="mt-3 text-sm text-yellow-600 bg-yellow-50 p-3 rounded-md animate-pulse">
                ⏳ Analizando fuente con múltiples IAs... (Esto puede tomar hasta un par de minutos).
            </div>
        );
    }

    if (reports.length === 0) {
        return null; // Aún no hay, pero ya no carga (raro, pero manejo seguro)
    }

    // Calcular promedio
    const validScores = reports.map(r => r.veracity_score).filter(s => s != null);
    const avgVeracity = validScores.length > 0
        ? (validScores.reduce((a, b) => a + b, 0) / validScores.length).toFixed(1)
        : 'N/A';

    // Obtener un resumen (usamos el del primer reporte)
    const mainSummary = reports.find(r => r.summary)?.summary;

    return (
        <div className="mt-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <h4 className="font-semibold text-lg flex items-center gap-2">
                <span>🤖</span>
                Análisis Multi-IA
            </h4>

            <div className="mt-3 flex gap-4">
                <div className="flex-1">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {avgVeracity}% <span className="text-xs font-normal text-muted-foreground">Veracidad Promedio</span>
                    </p>
                    {mainSummary && <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{mainSummary}</p>}
                </div>

                <div className="flex-none p-3 border rounded-md bg-white dark:bg-slate-800 text-sm">
                    <p className="font-semibold mb-2">Modelos Consultados:</p>
                    <ul className="space-y-1 text-xs">
                        {reports.map((report) => (
                            <li key={report.id} className="flex justify-between gap-4">
                                <span className="truncate w-32" title={report.model_name}>
                                    {report.model_name.split('/').pop()}
                                </span>
                                <span className="font-semibold">
                                    {report.veracity_score}%
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
