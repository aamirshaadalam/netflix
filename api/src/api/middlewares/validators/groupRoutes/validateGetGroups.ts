import Joi from 'joi';
import validateRequest from '../validateRequest';

const query = Joi.object({
  type: Joi.string().optional(),
  genre: Joi.string().optional(),
});

export const validateGetGroups = validateRequest({ query });
