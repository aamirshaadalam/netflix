import Joi from 'joi';

const loginSchema = Joi.object({
    username: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().required(),
}).or('username', 'email');

export default loginSchema;