'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [politicians, setPoliticians] = useState<any[]>([]);
  
  const [formData, setFormData] = useState({
    full_name: '',
    political_party: '',
    position: '',
    bio: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { data, error } = await supabase
        .from('politicians')
        .insert([formData])
        .select();

      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('Político creado exitosamente!');
        setFormData({ full_name: '', political_party: '', position: '', bio: '' });
        loadPoliticians();
      }
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loadPoliticians = async () => {
    try {
      const { data, error } = await supabase
        .from('politicians')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setMessage(`Error cargando políticos: ${error.message}`);
      } else {
        setPoliticians(data || []);
      }
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    }
  };

  const createTestData = async () => {
    setLoading(true);
    setMessage('');

    const testPoliticians = [
      {
        full_name: 'Gabriel Boric Font',
        political_party: 'Frente Amplio',
        position: 'Presidente de Chile',
        bio: 'Político chileno, actual Presidente de la República de Chile desde marzo de 2022.'
      },
      {
        full_name: 'José Antonio Kast Rist',
        political_party: 'Partido Republicano',
        position: 'Candidato Presidencial',
        bio: 'Abogado y político chileno. Candidato presidencial en 2017 y 2021.'
      },
      {
        full_name: 'Evelyn Matthei Fornet',
        political_party: 'Unión Demócrata Independiente',
        position: 'Alcaldesa de Providencia',
        bio: 'Economista y política chilena. Actual alcaldesa de Providencia.'
      }
    ];

    try {
      const { data, error } = await supabase
        .from('politicians')
        .insert(testPoliticians)
        .select();

      if (error) {
        setMessage(`Error creando datos de prueba: ${error.message}`);
      } else {
        setMessage(`${data?.length || 0} políticos creados exitosamente!`);
        loadPoliticians();
      }
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Panel de Administración - PoliCheck</h1>
      
      {message && (
        <div className={`p-4 rounded mb-4 ${
          message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Crear Político</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="full_name">Nombre Completo</Label>
                <Input
                  id="full_name"
                  value={formData.full_name}
                  onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="political_party">Partido Político</Label>
                <Input
                  id="political_party"
                  value={formData.political_party}
                  onChange={(e) => setFormData({...formData, political_party: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="position">Cargo</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="bio">Biografía</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  rows={3}
                />
              </div>
              
              <Button type="submit" disabled={loading}>
                {loading ? 'Creando...' : 'Crear Político'}
              </Button>
            </form>
            
            <div className="mt-4 pt-4 border-t">
              <Button 
                onClick={createTestData} 
                disabled={loading}
                variant="outline"
                className="w-full"
              >
                {loading ? 'Creando...' : 'Crear Datos de Prueba'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Políticos Existentes</CardTitle>
            <Button onClick={loadPoliticians} variant="outline" size="sm">
              Recargar
            </Button>
          </CardHeader>
          <CardContent>
            {politicians.length === 0 ? (
              <p className="text-gray-500">No hay políticos registrados</p>
            ) : (
              <div className="space-y-2">
                {politicians.map((politician) => (
                  <div key={politician.id} className="p-3 border rounded">
                    <h3 className="font-semibold">{politician.full_name}</h3>
                    <p className="text-sm text-gray-600">{politician.political_party}</p>
                    <p className="text-sm text-gray-600">{politician.position}</p>
                    <p className="text-xs text-gray-400 mt-1">ID: {politician.id}</p>
                    <a 
                      href={`/politicos/${politician.id}`}
                      className="text-blue-600 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver perfil →
                    </a>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}