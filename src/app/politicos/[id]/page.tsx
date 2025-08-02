import { supabase } from "@/lib/supabase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notFound } from "next/navigation";

interface PoliticianProfilePageProps {
  params: {
    id: string;
  };
}

export default async function PoliticianProfilePage({ params }: PoliticianProfilePageProps) {
  const { data: politician, error } = await supabase
    .from("politicians")
    .select("*")
    .eq("id", params.id)
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
    </div>
  );
}
