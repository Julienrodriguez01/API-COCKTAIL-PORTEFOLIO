# Porte folio cocktail 

Le v1 de cet api a pour but de gérer une "collection" de recette de cocktails.
Elle a pour but de pouvoir stocker vos recettes préfère ou nouvelle création.

## Stack 

- Node 10+
  - Express
  - joi
- PostgresSQL 11+
  - Squitch

## Structude des données 

<mcd>
COCKTAILS: Name,Type, Ingredients,Desing, Tags, Note
</mcd>

## Initialisation du projet 

- Lancé la commande ```npm i``` dans votre cli pour installer les dépendence nécessaire au projet.
- Lancé la commande ```sqitch deploy db:pg:nom_de_votre_BDD ``` pour initialisé sqitch et ainsi crée les table dans votre base de donnée 