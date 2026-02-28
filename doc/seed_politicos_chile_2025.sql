-- =============================================
-- SEED: Políticos Chilenos - Elecciones 2025
-- Ejecutar en el SQL Editor de Supabase
-- =============================================

-- Limpiar datos previos (opcional, solo si quieres empezar limpio)
-- DELETE FROM sources;
-- DELETE FROM politicians;

-- =============================================
-- CANDIDATOS PRESIDENCIALES 2025
-- =============================================

INSERT INTO politicians (full_name, political_party, position, bio, profile_image_url) VALUES

-- Candidatos Presidenciales
('Evelyn Matthei', 'Unión Demócrata Independiente (UDI)', 'Candidata Presidencial',
 'Alcaldesa de Providencia desde 2012 y expresidenta de la UDI. Candidata presidencial por Chile Vamos para las elecciones de 2025. Economista y exministra del Trabajo.',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Evelyn_Matthei_2023.jpg/440px-Evelyn_Matthei_2023.jpg'),

('Michelle Bachelet', 'Partido Socialista de Chile', 'Exmandataria',
 'Expresidenta de Chile (2006-2010 y 2014-2018). Exdirectora de ONU Mujeres y exAlta Comisionada de Derechos Humanos de la ONU. Médica cirujana.',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Michelle_Bachelet_2014.jpg/440px-Michelle_Bachelet_2014.jpg'),

('Ximena Rincón', 'Demócratas', 'Candidata Presidencial',
 'Cofundadora del partido Demócratas. Exsenadora y exministra de varios gobiernos. Abogada y política de centroizquierda.',
 NULL),

('Gonzalo Winter', 'Frente Amplio', 'Diputado / Candidato Presidencial',
 'Diputado por el Frente Amplio. Abogado y académico. Pertenece a la corriente del Frente Amplio.',
 NULL),

('Jeannette Jara', 'Partido Comunista de Chile', 'Ministra del Trabajo',
 'Ministra del Trabajo y Previsión Social del gobierno de Gabriel Boric. Dirigente del Partido Comunista de Chile.',
 NULL),

('Ignacio Briones', 'Evópoli', 'Candidato Presidencial',
 'Economista, exministro de Hacienda del gobierno de Sebastián Piñera. Candidato por el partido Evópoli.',
 NULL),

('Carolina Tohá', 'Partido por la Democracia (PPD)', 'Ministra del Interior',
 'Ministra del Interior y Seguridad Pública del gobierno de Gabriel Boric. Exalcaldesa de Santiago.',
 NULL),

('Sebastián Piñera', 'Renovación Nacional', 'Expresidente',
 'Expresidente de Chile en dos periodos (2010-2014 y 2018-2022). Empresario y economista. Figura icónica de la centroderecha chilena. Fallecido el 6 de febrero de 2024.',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sebasti%C3%A1n_Pi%C3%B1era_2018.jpg/440px-Sebasti%C3%A1n_Pi%C3%B1era_2018.jpg'),

('Gabriel Boric', 'Convergencia Social / Frente Amplio', 'Presidente de Chile',
 'Presidente de Chile desde marzo de 2022. Exdiputado y líder estudiantil. Abogado de la Universidad de Chile.',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Gabriel_Boric_2023_cropped.jpg/440px-Gabriel_Boric_2023_cropped.jpg'),

('Mario Desbordes', 'Renovación Nacional', 'Exdiputado',
 'Exdiputado y expresidente de Renovación Nacional. Candidato presidencial en las primarias de 2021. Figura relevante de la centroderecha.',
 NULL),

('Agustín Squella', 'Independiente', 'Académico y Político',
 'Reconocido jurista, filósofo del derecho y académico chileno. Ha participado en procesos constitucionales.',
 NULL),

('Vlado Mirosevic', 'Partido Liberal de Chile', 'Presidente de la Cámara de Diputados',
 'Presidente de la Cámara de Diputados. Diputado por el Partido Liberal. Referente de la izquierda liberal.',
 NULL),

('Aldo Cornejo', 'Democracia Cristiana', 'Exdiputado',
 'Expresidente de la Democracia Cristiana. Exdiputado. Referente histórico del PDC.',
 NULL),

('José Antonio Kast', 'Partido Republicano de Chile', 'Candidato Presidencial',
 'Fundador y líder del Partido Republicano. Exdiputado. Candidato presidencial por la ultraderecha. Llegó a segunda vuelta en 2021.',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Jos%C3%A9_Antonio_Kast_2021.jpg/440px-Jos%C3%A9_Antonio_Kast_2021.jpg'),

('Johannes Kaiser', 'Partido Nacional Libertario', 'Diputado',
 'Diputado por el Partido Nacional Libertario. Economista y divulgador libertario. Figura emergente de la derecha liberal.',
 NULL);

-- =============================================
-- Verificación
-- =============================================
SELECT id, full_name, political_party, position FROM politicians ORDER BY political_party, full_name;
