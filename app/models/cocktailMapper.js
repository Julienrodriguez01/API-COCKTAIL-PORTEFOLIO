const Cocktail = require('./cocktail');

const db = require('../database');

const cocktailMapper = {

    findAll: async () => {
        // Va chercher tous les cocktails dans la bdd 
        const result = await db.query(`
            SELECT * 
            FROM cocktails; 
        `);
        // On retourne sous forme d'instances de cocktail
        return result.rows.map(data => new Cocktail(data));

    },
};

module.exports = cocktailMapper; 


