"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AddSourceForm({ politicianId }: { politicianId: string }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, politicianId }),
      });

      if (!response.ok) {
        throw new Error('Error al añadir la fuente');
      }

      // TODO: Idealmente, refrescar la lista de fuentes
      setUrl("");
    } catch (error) {
      console.error(error);
      // TODO: Mostrar un mensaje de error al usuario
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Añadir Nueva Fuente</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="url"
            placeholder="https://ejemplo.com/noticia"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Añadiendo..." : "Añadir Fuente"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
