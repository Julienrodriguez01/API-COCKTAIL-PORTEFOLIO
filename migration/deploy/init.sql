-- Deploy Api-Cocktail:init to pg

BEGIN;

-- un domaine qui n'autorise que les valeurs positives 
CREATE DOMAIN posint AS int CHECK (value > 0);

-- la table recensant mes recette de cocktails
CREATE TABLE cocktails (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "type" text NOT NULL,
    ingredients text NOT NULL,
    labels text NOT NULL, 
    note posint NOT NULL
);


COMMIT;
