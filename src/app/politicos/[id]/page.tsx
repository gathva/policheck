import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PoliticianProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="flex flex-col items-center pt-6">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold">Juan Pérez</h1>
              <p className="text-muted-foreground">Partido de la Gente</p>
              <Badge className="mt-2">Candidato a Senador</Badge>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Biografía</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Juan Pérez es un político con más de 15 años de experiencia en el servicio público. Ha ocupado diversos
                cargos en el gobierno local y ahora busca representar a su región en el Senado.
              </p>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Fuentes de Información</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí se mostrará la lista de fuentes de información.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
