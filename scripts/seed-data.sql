-- Script para insertar datos de prueba en PoliCheck
-- Solo políticos para solucionar el error 404

INSERT INTO politicians (id, full_name, political_party, position, bio, profile_image_url) VALUES 
(
  '550e8400-e29b-41d4-a716-446655440001',
  'Gabriel Boric Font',
  'Frente Amplio',
  'Presidente de Chile',
  'Político chileno, actual Presidente de la República de Chile desde marzo de 2022. Anteriormente fue diputado por el distrito 60.',
  null
),
(
  '550e8400-e29b-41d4-a716-446655440002', 
  'José Antonio Kast Rist',
  'Partido Republicano',
  'Candidato Presidencial',
  'Abogado y político chileno. Fue diputado por varios períodos y candidato presidencial en 2017 y 2021.',
  null
),
(
  '550e8400-e29b-41d4-a716-446655440003',
  'Evelyn Matthei Fornet',
  'Unión Demócrata Independiente',
  'Alcaldesa de Providencia',
  'Economista y política chilena. Actual alcaldesa de Providencia y ex ministra del Trabajo durante el gobierno de Sebastián Piñera.',
  null
);