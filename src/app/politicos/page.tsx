import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function PoliticiansPage() {
  const { data: politicians, error } = await supabase
    .from("politicians")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching politicians:", error);
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Políticos</h1>
        <p className="text-gray-600">
          Explora los perfiles de políticos y revisa el análisis de sus declaraciones.
        </p>
      </div>

      {!politicians || politicians.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">No hay políticos registrados</h2>
            <p className="text-gray-600 mb-6">
              Aún no hay políticos en la base de datos. Puedes agregar algunos desde el panel de administración.
            </p>
            <Button asChild>
              <Link href="/admin">Ir al Panel de Admin</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {politicians.map((politician) => (
            <Card key={politician.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={politician.profile_image_url} />
                    <AvatarFallback>
                      {politician.full_name
                        .split(" ")
                        .map((name: string) => name[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{politician.full_name}</CardTitle>
                    <p className="text-sm text-gray-600">{politician.political_party}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{politician.position}</p>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {politician.bio}
                </p>
                <Button asChild className="w-full">
                  <Link href={`/politicos/${politician.id}`}>
                    Ver Perfil
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/">← Volver al Inicio</Link>
        </Button>
      </div>
    </div>
  );
}