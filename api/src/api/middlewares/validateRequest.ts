import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema } from 'joi';
import { BadRequestError } from '../../core/errors';

interface ValidationSchema {
  body?: ObjectSchema;
  params?: ObjectSchema;
  query?: ObjectSchema;
}

let errorMessages: string[];

const retrieveErrorMessages = (error: Joi.ValidationError | undefined) => {
  if (error) {
    const messages = error.details.map((err) => err.message);
    errorMessages.push(...messages);
  }
};

const validateRequest = (schema: ValidationSchema) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    errorMessages = [];

    if (schema.body) {
      const { error } = schema.body.validate(req.body, { abortEarly: false });
      retrieveErrorMessages(error);
    }

    if (schema.params) {
      const { error } = schema.params.validate(req.params, { abortEarly: false });
      retrieveErrorMessages(error);
    }

    if (schema.query) {
      const { error } = schema.query.validate(req.query, { abortEarly: false });
      retrieveErrorMessages(error);
    }

    if (errorMessages.length > 0) {
      throw new BadRequestError('Validation failed', errorMessages);
    }

    next();
  };
};

export default validateRequest;
