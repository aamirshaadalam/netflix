import Joi from 'joi';
import validateRequest from '../../middlewares/validateRequest';

const body = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  profilePic: Joi.string().uri(),
  isAdmin: Joi.boolean(),
});

export const validateRegister = validateRequest({ body });
