const { request } = require('express');
const cocktailMapper = require('../models/cocktailMapper');

const cocktailController = {

    allCocktail: async (req, res) => {
        const cocktails = await cocktailMapper.findAll();

        res.json(cocktails);
    }
};

module.exports = cocktailController;

