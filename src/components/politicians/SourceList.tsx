import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          <ul className="space-y-4">
            {sources.map((source) => (
              <li key={source.id} className="p-4 border rounded-md">
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {source.title || source.url}
                </a>
                <p className="text-sm text-muted-foreground">{source.source_type} - {source.status}</p>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
