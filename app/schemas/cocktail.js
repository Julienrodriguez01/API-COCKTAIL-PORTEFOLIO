const variatontPost = {
    post: (schema) => schema.required()
} 

const Joi = require('joi');

const cocktailSchema = Joi.object({
    name: Joi.string().alter(variatontPost),
    type: Joi.string().alter(variatontPost),
    ingredients: Joi.string().alter(variatontPost),
    labels: Joi.string().alter(variatontPost),
    note: Joi.number().integer().alter(variatontPost),
});

const postSchema = cocktailSchema.tailor('post');

exports.cocktailSchema = cocktailSchema;
exports.postSchema = postSchema;
