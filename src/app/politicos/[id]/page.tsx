import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notFound } from "next/navigation";
import { AddSourceForm } from "@/components/politicians/AddSourceForm";
import { SourceList } from "@/components/politicians/SourceList";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function PoliticianProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: politician, error } = await supabase
    .from("politicians")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !politician) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-start gap-4">
          <Avatar className="h-24 w-24 border">
            <AvatarImage src={politician.profile_image_url || undefined} alt={politician.full_name} />
            <AvatarFallback>{politician.full_name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-3xl">{politician.full_name}</CardTitle>
            <CardDescription className="text-lg">
              {politician.position} - {politician.political_party}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2">Biografía</h3>
          <p className="text-muted-foreground">{politician.bio}</p>
        </CardContent>
      </Card>

      <div className="mt-8 border rounded-xl p-6 bg-card/50">
        <h3 className="text-xl font-semibold mb-4">Aportar información</h3>
        {user ? (
          <AddSourceForm politicianId={politician.id} />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
            <p className="text-muted-foreground">
              Para añadir o verificar fuentes de información, necesitas iniciar sesión en PoliCheck.
            </p>
            <Button asChild variant="default">
              <Link href="/login">Iniciar sesión</Link>
            </Button>
          </div>
        )}
      </div>

      <SourceList politicianId={politician.id} />
    </div>
  );
}