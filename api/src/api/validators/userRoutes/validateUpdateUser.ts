import Joi from 'joi';
import validateRequest from '../../middlewares/validateRequest';

const body = Joi.object({
  username: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().optional(),
  profilePic: Joi.string().uri().optional(),
  isAdmin: Joi.boolean().optional(),
}).min(1);

const params = Joi.object({
  id: Joi.string().required(),
});

export const validateUpdateUser = validateRequest({ body, params });
