import Joi from "joi";

const updateSchema = Joi.object({
    username: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().optional(),
    profilePic: Joi.string().uri().optional(),
    isAdmin: Joi.boolean().optional(),
}).min(1);

export default updateSchema;