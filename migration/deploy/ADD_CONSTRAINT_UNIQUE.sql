-- Deploy Api-Cocktail:ADD_CONSTRAINT_UNIQUE to pg

BEGIN;

-- Modification de la table Cocktails, ajout d'une contraite d'unisité a la colone name
ALTER TABLE cocktails ADD CONSTRAINT cocktail_name_unique UNIQUE ("name");

COMMIT;
