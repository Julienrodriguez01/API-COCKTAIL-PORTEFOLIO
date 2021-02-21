const { request } = require('express');
const cocktailMapper = require('../models/cocktailMapper');
const Cocktail = require('../models/cocktail');

const cocktailController = {

    // Méthode pour récupérer tous les cocktails 
    allCocktail: async (req, res) => {
        const cocktails = await cocktailMapper.findAll();

        res.json(cocktails);
    }, 

    // Méthode pour récupérer un cocktail
    oneCocktail: async (req, res) => {
        const { id } = req.params;

        try {
            const cocktail = await cocktailMapper.findOne(id);

            res.json(cocktail);

        } catch (err) {

            res.status(404).json(err.message);   
        }
    },

    // Méthode qui ajoute un cocktail a la base de donné
    newCocktail: async (req, res) => {
        
        const theCocktail = new Cocktail(req.body);

        try {

            await cocktailMapper.newCocktail(theCocktail);

            res.json(theCocktail);
        } catch (err) {
            res.status(403).json(err.message);
        }
    },

    // Méthode qui suprime un cocktail 
    deleteCocktail: async (req, res) => {

        const { id } = req.params;

        try {
            const cocktail = await cocktailMapper.deleteCocktails(id);

            res.json(cocktail);

        } catch (err) {

            res.status(404).json("pas de cocktail " + id);
        } 
    },

    // Méthode qui modifie un cocktail 
    updateCocktail: async (req, res) => {

        const { id } = req.params;
        const data = req.body;
        const cocktail = await cocktailMapper.findOne(id);

        if (data.name) {
            cocktail.name = data.name;
        }

        if (data.type) {
            cocktail.type = data.type;
        }

        if (data.ingredients) {
            cocktail.ingredients = data.ingredients;
        }

        if (data.labels) {
            cocktail.labels = data.labels;
        }

        if (data.note) {
            cocktail.note = data.note;
        }

        res.json(cocktail);
    }

};

module.exports = cocktailController;

