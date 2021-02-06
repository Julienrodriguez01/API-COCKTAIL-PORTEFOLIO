const { request } = require('express');
const cocktailMapper = require('../models/cocktailMapper');

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
    }
};

module.exports = cocktailController;

