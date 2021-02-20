const Joi = require('joi');

const cocktailSchema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    ingredients: Joi.string().required(),
    labels: Joi.string().required(),
    note: Joi.number().integer().required()
});

module.exports = cocktailSchema;