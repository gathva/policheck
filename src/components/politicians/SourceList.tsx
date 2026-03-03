import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnalysisResults } from "./AnalysisResults";

interface SourceListProps {
  politicianId: string;
}

export async function SourceList({ politicianId }: SourceListProps) {
  const { data: sources, error } = await supabase
    .from("sources")
    .select("*")
    .eq("politician_id", politicianId)
    .order("created_at", { ascending: false });

  if (error) {
    return <p className="text-red-500">Error al cargar las fuentes.</p>;
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Fuentes de Información</CardTitle>
      </CardHeader>
      <CardContent>
        {sources.length === 0 ? (
          <p>No hay fuentes para este político todavía.</p>
        ) : (
          <ul className="space-y-6">
            {sources.map((source) => (
              <li key={source.id} className="p-4 border rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:underline">
                      {source.title || source.url}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1 capitalize">{source.source_type.replace('_', ' ')}</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded-full">{source.status}</span>
                </div>

                {/* Visualizador de Reportes IA en tiempo real */}
                <AnalysisResults sourceId={source.id} />
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
