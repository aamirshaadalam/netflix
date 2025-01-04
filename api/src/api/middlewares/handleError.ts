import { NextFunction, Request, Response } from 'express';

const handleError = (error: any, _request: Request, response: Response, _next: NextFunction) => {
  console.error(error);
  const { statusCode = 500, name: type = 'InternalServerError', message = '', details = [] } = error;
  response.status(statusCode).json({ type, message, details });
};

export default handleError;
