import { NextFunction, Request, Response } from 'express';
import ConfigurationError from '../../core/errors/configError';
import BadRequestError from '../../core/errors/badRequest';

const handleError = (error: any, _request: Request, response: Response, _next: NextFunction) => {
  console.error(error);
  const { statusCode = 500, name: type = 'InternalServerError', message = '', details = [] } = error;

  if (error instanceof ConfigurationError) {
    response.status(statusCode).json({ type, message });
    return;
  }

  if (error instanceof BadRequestError) {
    response.status(statusCode).json({ type, message, details });
    return;
  }

  response.status(statusCode).json({ type, message });
  return;
};

export default handleError;
