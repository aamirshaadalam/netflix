import Joi from 'joi';
import validateRequest from '../validateRequest';

const body = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  img: Joi.string().optional(),
  titleImg: Joi.string().optional(),
  thumbnailImg: Joi.string().optional(),
  trailer: Joi.string().optional(),
  video: Joi.string().optional(),
  year: Joi.number().optional(),
  duration: Joi.string().optional(),
  rating: Joi.string().optional(),
  genre: Joi.string().optional(),
  isMovie: Joi.boolean().optional(),
});

export const validateCreateMedia = validateRequest({ body });
