-- Añadir columna submitted_by a sources (haciendo FK a auth.users)
ALTER TABLE "public"."sources" 
ADD COLUMN "submitted_by" UUID REFERENCES "auth"."users"("id") ON DELETE SET NULL;
