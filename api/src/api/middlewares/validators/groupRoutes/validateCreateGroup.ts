import Joi from 'joi';
import validateRequest from '../validateRequest';

const body = Joi.object({
  title: Joi.string().required(),
  type: Joi.string().optional(),
  genre: Joi.string().optional(),
  content: Joi.array().items(Joi.string()),
});

export const validateCreateGroup = validateRequest({ body });
