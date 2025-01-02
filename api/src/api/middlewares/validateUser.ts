import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import BadRequestError from '../../core/errors/bad-request';

const validateUser = (schema: ObjectSchema) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorMessages = error.details.map((err) => err.message);
      throw new BadRequestError('Validation failed', errorMessages);
    }
    next();
  };
};

export default validateUser;
