import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-center mb-8">PoliCheck</h1>
      <p className="text-lg text-muted-foreground text-center mb-8">
        La comunidad que verifica a tus candidatos.
      </p>
      <Button>Hola PoliCheck!</Button>
    </main>
  );
}
