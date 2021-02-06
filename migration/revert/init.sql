-- Revert Api-Cocktail:init from pg

BEGIN;

-- Supression de la table cocktails
DROP TABLE cocktails;


-- Supression du domaine posint 
DROP DOMAIN posint;

COMMIT;
