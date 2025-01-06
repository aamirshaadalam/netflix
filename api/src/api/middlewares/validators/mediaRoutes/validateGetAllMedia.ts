import Joi from 'joi';
import validateRequest from '../validateRequest';

const query = Joi.object({
  limit: Joi.number().optional(),
  skip: Joi.number().optional(),
});

export const validateGetAllMedia = validateRequest({ query });
