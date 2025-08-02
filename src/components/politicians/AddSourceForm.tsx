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
    // TODO: Implement API call to add source
    console.log(`Adding source for ${politicianId}: ${url}`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request
    setLoading(false);
    setUrl("");
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
