import { NextFunction, Request, Response } from 'express';
import ConfigurationError from '../../core/errors/config-error';
import BadRequestError from '../../core/errors/bad-request';

const handleError = (error: any, _request: Request, response: Response, _next: NextFunction): void => {
  console.error(error);
  if (error instanceof ConfigurationError) {
     response.status(error.statusCode).json({
      type: error.name,
      message: error.message,
    });
  } else if (error instanceof BadRequestError) {
    response.status(error.statusCode).json({
      type: error.name,
      message: error.message,
      details: error.details,
    });
  } else {
    response.status(500).json({
      type: 'InternalServerError',
      message: error.message,
    });
  }
};

export default handleError;
