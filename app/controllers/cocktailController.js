const { request } = require('express');
const cocktailMapper = require('../models/cocktailMapper');
const Cocktail = require('../models/cocktail');

const cocktailController = {

    allCocktail: async (req, res) => {
        const cocktails = await cocktailMapper.findAll();

        res.json(cocktails);
    }, 

    oneCocktail: async (req, res) => {
        const { id } = req.params;

        try {
            const cocktail = await cocktailMapper.findOne(id);

            res.json(cocktail);

        } catch (err) {

            res.status(404).json(err.message);   
        }
    },

    newCocktail: async (req, res) => {
        
        const theCocktail = new Cocktail(req.body);

        try {

            await cocktailMapper.newCocktail(theCocktail);

            res.json(theCocktail);
        } catch (err) {
            res.status(403).json(err.message);
        }
    },

    deleteCocktail: async (req, res) => {

        const { id } = req.params;

        try {
            const cocktail = await cocktailMapper.deleteCocktails(id);

            res.json(cocktail);

        } catch (err) {

            res.status(404).json("pas de cocktail " + id);
        } 
    },

    updateCocktail: async (req, res) => {

        const theCocktail = req.body;
        
        try {
            await cocktailMapper.updateCocktail(theCocktail);
        } catch (error) {
            res.status(403).json(error.message);
        };
    }

};

module.exports = cocktailController;

