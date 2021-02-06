const db = require('../database');

class Cocktail {
    id;
    name;
    type;
    ingredients;
    labels;
    note;

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
};

module.exports = Cocktail;