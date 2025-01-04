import Joi from 'joi';
import validateRequest from '../../middlewares/validateRequest';

const body = Joi.object({
  username: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().required(),
}).or('username', 'email');

export const validateLogin = validateRequest({ body });
