const { Router } = require('express');
const cocktailController = require('./controllers/cocktailController');

const router = Router();

// v1

/**
 * Récupére tout les cocktails présent dans la bdd
 * @route GET / cocktails
 * @group Cocktails - génération des cocktail
 * @returns {Array} qui contient : id, name, type, ingredients, labels, note
 */
router.get('/cocktails', cocktailController.allCocktail);

/**
 * Récupére tout les cocktails présent dans la bdd
 * @route GET / cocktails/;id
 * @group Cocktails - génération d'un cocktail celon sont id 
 * @returns {Array} qui contient : id, name, type, ingredients, labels, note
 */
router.get('/cocktails/:id(\\d+)', cocktailController.oneCocktail);

module.exports = router;
