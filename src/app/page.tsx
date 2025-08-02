import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Bienvenido a Policheck</h1>
        <p>Contenido principal de la página de inicio.</p>
      </main>
    </div>
  );
}
