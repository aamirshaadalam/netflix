import Joi from "joi";

const registerSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    profilePic: Joi.string().uri(),
    isAdmin: Joi.boolean(),
});

export default registerSchema;