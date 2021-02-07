const { Router } = require('express');
const cocktailController = require('./controllers/cocktailController');

const router = Router();

// v1

/**
 * Récupére tout les cocktails présent dans la bdd
 * @route GET / cocktails
 * @group Cocktails - Présentation des cocktail
 * @returns {Array} qui contient : id, name, type, ingredients, labels, note
 */
router.get('/cocktails', cocktailController.allCocktail);

/**
 * Récupére tout les cocktails présent dans la bdd
 * @route GET / cocktails/;id
 * @group Cocktails - Présentation des cocktail
 * @returns {Array} qui contient : id, name, type, ingredients, labels, note
 */
router.get('/cocktails/:id(\\d+)', cocktailController.oneCocktail);

/**
 * Ajoute des propositions de segments de phrase et génère un Cadex basé sur les segments fournis
 * @route POST /cocktails
 * @group Cocktails - Présentation des cocktail
 * @param {string} name.body - le nom qu'on peut fournir
 * @param {string} type.body - l'adjectif qu'on peut fournir
 * @param {string} ingredients.body - le verbe qu'on peut fournir
 * @param {string} labels.body - le complément qu'on peut fournir
 * @param {string} note.body - le complément qu'on peut fournir
 * @returns {Array} 200 - le cocktail et généré dans la BDD
 */
router.post('/cocktails', cocktailController.newCocktail);

module.exports = router;
