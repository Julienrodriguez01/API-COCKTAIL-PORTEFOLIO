-- Revert Api-Cocktail:ADD_CONSTRAINT_UNIQUE from pg

BEGIN;

-- Modification de la table Cocktails, supresion de la contraite d'unisité a la colone name
ALTER TABLE cocktails DROP CONSTRAINT cocktail_name_unique;

COMMIT;
