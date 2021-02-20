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
    },

    newCocktail: async (theCocktail) => {

        const data = [
            theCocktail.name,
            theCocktail.type,
            theCocktail.ingredients, 
            theCocktail.labels, 
            theCocktail.note
        ]
    
        const query = `
            INSERT INTO cocktails ("name", "type", ingredients, labels, note)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `; 
        
        try {

        // const { rows } = 
            await db.query(query, data);

            //theCocktail.id = rows[0].id;
        } catch (err) {
            //throw new Error("Un cocktail a cette id existe déja");
            console.log(err)
        }
    },

    deleteCocktails: async (id) => {

        
        const result = await cocktailMapper.findOne(id);

        if (result) {
            await db.query(`
                DELETE FROM cocktails
                WHERE cocktails.id = $1;
                `, [id]);
        } else {
            throw new Error("Pas de cocktail avec l'id " + id);
        }}, 
    
    updateCocktail: async (theCocktail) => {

        
        const data = [
            theCocktail.name,
            theCocktail.type,
            theCocktail.ingredients,
            theCocktail.labels,
            theCocktail.note,
            theCocktail.id
        ];

        const query = `
        UPDATE cocktails
        SET
        name = $1
        type = $2
        ingredients = $3
        labels = $4
        note = $5
        WHERE cocktails.id = $6`;

        try {
            await db.query(query, data);

        } catch (error) {
            throw new Error(error);
        };
    }

};

module.exports = cocktailMapper; 