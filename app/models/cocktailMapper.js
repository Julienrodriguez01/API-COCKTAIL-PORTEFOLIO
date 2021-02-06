const Cocktail = require('./cocktail');

const db = require('../database');

const cocktailMapper = {

    findAll: async () => {
        // Va chercher tous les cocktails dans la table cocktails
        const result = await db.query(`
            SELECT * 
            FROM cocktails; 
        `);
        // On retourne sous forme d'instances de cocktail
        return result.rows.map(data => new Cocktail(data));

    },

    findOne: async (id) => {
        // Va chercher un cocktail précis dans la table cocktails
        const result = await db.query(`
            SELECT *
            FROM cocktails
            WHERE cocktails.id = $1;
        `, [id]);

        if  (!result.rows[0]) {
            throw new Error ("Pas de cocktail avec l'id " + id);

        }

        return new Cocktail(result.rows[0]);
    }
};

module.exports = cocktailMapper; 


