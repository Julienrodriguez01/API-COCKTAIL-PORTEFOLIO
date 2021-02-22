const { Router } = require('express');

const router = Router();

const cocktailController = require('./controllers/cocktailController');

const { validateBody } = require('./services/validator');
const {  cocktailSchema, postSchema } = require('./schemas/cocktail');

// v1

/**
 * Récupére tout les cocktails présent dans la bdd
 * @route GET / cocktails
 * @group Cocktails - Présentation des cocktail
 * @returns {Array} qui contient : id, name, type, ingredients, labels, note
 */
router.get('/cocktails', cocktailController.allCocktail);

/**
 * Récupére le cocktail présent a l'id mentioné dans la bdd
 * @route GET / cocktails/;id
 * @group Cocktails - Présentation des cocktail
 * @returns {Array} qui contient : id, name, type, ingredients, labels, note
 */
router.get('/cocktails/:id(\\d+)', cocktailController.oneCocktail);

/**
 * Ajoute un nouveaux cocktail 
 * @route POST /cocktails
 * @group Cocktails - Présentation des cocktail
 * @param {string} name.body - le nom du cocktail
 * @param {string} type.body - le type du cocktail
 * @param {string} ingredients.body - les ingredients du cocktail
 * @param {string} labels.body - le label du cocktail 
 * @param {string} note.body - la note du cocktail
 * @returns {Array} 200 - le cocktail et généré dans la BDD
 */
router.post('/cocktails', validateBody(postSchema), cocktailController.newCocktail);

/**
 * Suprime le cocktail présent a l'id mentioné dans la bdd
 * @route GET / cocktails/;id
 * @group Cocktails - Présentation des cocktail
 * @returns
 */
router.delete('/cocktails/:id(\\d+)', cocktailController.deleteCocktail);

/**
 * Modifie un cocktail
 * @route PUT /cocktails
 * @group Cocktails - Présentation des cocktail
 * @param {string} name.body - le nom du cocktail
 * @param {string} type.body - le type du cocktail 
 * @param {string} ingredients.body - les ingredients du cocktail
 * @param {string} labels.body - le label du cocktail
 * @param {string} note.body - la note du cocktail 
 * @returns {Array} 200 - le cocktail et généré dans la BDD
 */
router.patch('/cocktails/:id(\\d+)', validateBody(cocktailSchema) ,cocktailController.updateCocktail);

module.exports = router;
