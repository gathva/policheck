import { supabase } from "@/lib/supabase";
import { PoliticianCard } from "@/components/politicians/PoliticianCard";
import { Search, Users2, ShieldCheck } from "lucide-react";

interface PoliticianRow {
  id: string;
  full_name: string;
  political_party: string;
  position: string;
  profile_image_url: string | null;
}

// Agrupar políticos por partido
function groupByParty(politicians: PoliticianRow[]) {
  return politicians.reduce((acc: Record<string, PoliticianRow[]>, p) => {
    const party = p.political_party || "Independiente";
    if (!acc[party]) acc[party] = [];
    acc[party].push(p);
    return acc;
  }, {});
}


export default async function Home() {
  const { data: politicians, error } = await supabase
    .from("politicians")
    .select("id, full_name, political_party, position, profile_image_url")
    .order("full_name", { ascending: true });

  const grouped = politicians ? groupByParty(politicians) : {};
  const partyNames = Object.keys(grouped).sort();
  const totalCount = politicians?.length ?? 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-6">
            <ShieldCheck className="h-3.5 w-3.5" />
            Transparencia Política con IA — Chile 2025
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
              Poli
            </span>
            <span className="bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
              Check
            </span>
          </h1>

          {/* Descripción */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            La comunidad aporta fuentes. La IA las analiza. Juntos construimos
            un registro transparente del discurso político en Chile.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Users2 className="h-4 w-4 text-primary" />
              <span>
                <strong className="text-foreground">{totalCount}</strong> políticos registrados
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Análisis con <strong className="text-foreground">4 modelos de IA</strong></span>
            </div>
          </div>
        </div>

        {/* Gradient decorativo */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] opacity-20 blur-3xl rounded-full bg-gradient-to-r from-primary via-violet-500 to-primary" />
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-12">
        {error && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No se pudieron cargar los políticos.</p>
            <p className="text-sm mt-1">{error.message}</p>
          </div>
        )}

        {!error && partyNames.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium mb-2">No hay políticos registrados aún</p>
            <p className="text-sm">
              Carga los datos usando el script{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                doc/seed_politicos_chile_2025.sql
              </code>{" "}
              en el Editor SQL de Supabase.
            </p>
          </div>
        )}

        {/* Listado por partido */}
        <div className="space-y-12">
          {partyNames.map((party) => (
            <section key={party}>
              {/* Encabezado de partido */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-border" />
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap px-2">
                  {party}
                </h2>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Grid de tarjetas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {grouped[party].map((politician) => (
                  <PoliticianCard key={politician.id} politician={politician} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20 py-8 text-center text-sm text-muted-foreground">
        <p>
          PoliCheck es un proyecto de código abierto para la transparencia política en Chile.
        </p>
        <p className="mt-1 text-xs opacity-60">
          Los análisis de IA son información referencial. Siempre consulta las fuentes originales.
        </p>
      </footer>
    </div>
  );
}
