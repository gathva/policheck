'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { AlertTriangle, ShieldCheck, Activity, BrainCircuit } from 'lucide-react';

interface AIReport {
    id: string;
    source_id: string;
    model_name: string;
    veracity_score: number | null;
    coherence_score: number | null;
    bias_analysis: string | null;
    summary: string | null;
    key_claims: string[] | null;
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

        if (reports.length === 0) {
            interval = setInterval(() => {
                fetchReports();
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [sourceId, reports.length]);

    if (loading && reports.length === 0) {
        return (
            <div className="mt-4 text-sm text-yellow-700 bg-yellow-50 p-4 rounded-xl border border-yellow-200 shadow-sm animate-pulse">
                <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 animate-spin text-yellow-600" />
                    <span className="font-semibold">Analizando fuente con Múltiples Motores de IA... (Esto puede tardar hasta 1 minuto)</span>
                </div>
            </div>
        );
    }

    if (reports.length === 0) {
        return null;
    }

    const validReports = reports.filter(r => r.veracity_score !== null);
    if (validReports.length === 0) {
        return (
            <div className="mt-4 p-4 border rounded-xl bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    <p>Análisis en proceso o fuente sin suficiente contexto para evaluar.</p>
                </div>
            </div>
        );
    }

    // Calcular promedios combinados
    const avgVeracity = Math.round(
        validReports.reduce((acc, r) => acc + (r.veracity_score || 0), 0) / validReports.length
    );
    const avgCoherence = Math.round(
        validReports.reduce((acc, r) => acc + (r.coherence_score || 0), 0) / validReports.length
    );

    // Obtener un resumen y puntos clave (tomamos el primero válido, idealmente los modelos más potentes suelen venir primero o ultimo)
    const mainSummary = validReports.find(r => r.summary)?.summary;
    const keyClaims = validReports.find(r => r.key_claims && Array.isArray(r.key_claims) && r.key_claims.length > 0)?.key_claims || [];

    // Alertas de sesgo relevantes (filtramos las nulas y vacías, o donde dice "no se detecta gran sesgo")
    const biases = validReports.map(r => r.bias_analysis).filter(b => b && b.length > 20) as string[];

    const getScoreColor = (score: number) => {
        if (score >= 70) return "bg-emerald-500";
        if (score >= 40) return "bg-amber-500";
        return "bg-red-500";
    };

    const getScoreTextClass = (score: number) => {
        if (score >= 70) return "text-emerald-600 dark:text-emerald-400";
        if (score >= 40) return "text-amber-600 dark:text-amber-400";
        return "text-red-600 dark:text-red-400";
    };

    return (
        <div className="mt-5 p-5 md:p-6 border rounded-2xl bg-white dark:bg-slate-950 shadow-sm space-y-6">
            {/* Cabecera y Promedios */}
            <div>
                <h4 className="font-bold text-xl flex items-center gap-2 mb-5">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                    Consenso Inteligencia Artificial
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Veracidad */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Veracidad</span>
                            <span className={`text-3xl font-black leading-none ${getScoreTextClass(avgVeracity)}`}>{avgVeracity}%</span>
                        </div>
                        <Progress value={avgVeracity} className={`h-3 bg-slate-100 dark:bg-slate-800`} indicatorClassName={getScoreColor(avgVeracity)} />
                    </div>

                    {/* Coherencia */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Coherencia</span>
                            <span className={`text-3xl font-black leading-none ${getScoreTextClass(avgCoherence)}`}>{avgCoherence}%</span>
                        </div>
                        <Progress value={avgCoherence} className={`h-3 bg-slate-100 dark:bg-slate-800`} indicatorClassName={getScoreColor(avgCoherence)} />
                    </div>
                </div>
            </div>

            {/* Sesgo */}
            {biases.length > 0 && (
                <Alert variant="default" className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50">
                    <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                    <AlertTitle className="text-amber-800 dark:text-amber-400 font-bold ml-1">Observación de Sesgo</AlertTitle>
                    <AlertDescription className="text-amber-700 dark:text-amber-300 text-sm mt-2 ml-1 leading-relaxed">
                        {biases[0]} {/* Mostramos el primer análisis de sesgo relevante */}
                    </AlertDescription>
                </Alert>
            )}

            {/* Resumen y Puntos Clave */}
            <div className="space-y-4">
                {mainSummary && (
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border">
                        <h5 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-2">Síntesis</h5>
                        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{mainSummary}</p>
                    </div>
                )}

                {keyClaims.length > 0 && (
                    <div className="bg-indigo-50/50 dark:bg-indigo-950/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                        <h5 className="font-bold text-xs uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-3">Puntos Clave Extraídos</h5>
                        <ul className="space-y-3">
                            {keyClaims.map((claim, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-sm text-indigo-950 dark:text-indigo-200">
                                    <ShieldCheck className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{claim}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Detalles por Modelo */}
            <div className="pt-2">
                <Accordion type="single" collapsible className="w-full bg-slate-50 dark:bg-slate-900/30 rounded-xl border px-5">
                    {validReports.map((report, index) => (
                        <AccordionItem key={report.id} value={`item-${index}`} className="border-b-0 border-t border-slate-200 dark:border-slate-800 last:border-b-0 first:border-t-0">
                            <AccordionTrigger className="hover:no-underline py-4">
                                <div className="flex justify-between w-full pr-4 items-center">
                                    <span className="font-semibold text-sm">{report.model_name.split('/').pop()}</span>
                                    <div className="flex gap-4">
                                        <span className={`text-sm font-bold ${getScoreTextClass(report.veracity_score || 0)}`}>
                                            V: {report.veracity_score}%
                                        </span>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-slate-600 dark:text-slate-400 pb-5 space-y-4">
                                {report.summary && (
                                    <div>
                                        <strong className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 block mb-1">Resumen</strong>
                                        <p className="leading-relaxed">{report.summary}</p>
                                    </div>
                                )}
                                {report.bias_analysis && (
                                    <div>
                                        <strong className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 block mb-1">Sesgo</strong>
                                        <p className="leading-relaxed">{report.bias_analysis}</p>
                                    </div>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
