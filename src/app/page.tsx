import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a PoliCheck</h1>
          <p className="text-xl text-gray-600 mb-6">
            Verifica la veracidad en política usando IA
          </p>
          <p className="text-lg text-gray-500">
            Analiza declaraciones, artículos y publicaciones para descubrir los hechos detrás del discurso político
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>🔍 Buscar Políticos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Explora los perfiles de políticos y revisa el análisis de sus declaraciones.
              </p>
              <Button asChild>
                <Link href="/politicos">Ver Políticos</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>⚙️ Panel de Administración</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Gestiona políticos y datos de la plataforma (solo para desarrollo).
              </p>
              <Button asChild variant="outline">
                <Link href="/admin">Ir al Admin</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4">
              <div className="text-3xl mb-2">📝</div>
              <h3 className="font-semibold mb-2">1. Agregar Fuentes</h3>
              <p className="text-sm text-gray-600">
                La comunidad aporta enlaces a declaraciones y material político
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold mb-2">2. Análisis IA</h3>
              <p className="text-sm text-gray-600">
                Múltiples modelos de IA analizan la veracidad y coherencia
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold mb-2">3. Verificación Comunitaria</h3>
              <p className="text-sm text-gray-600">
                La comunidad vota y valida los resultados del análisis
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
