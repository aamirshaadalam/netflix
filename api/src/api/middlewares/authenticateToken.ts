import { NextFunction, Request, Response } from 'express';
import UnauthorizedError from '../../core/errors/unauthorized';
import jwt from 'jsonwebtoken';
import environment from '../../config/environment';
import ForbiddenError from '../../core/errors/forbidden';

const authenticateToken = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    throw new UnauthorizedError('You are not authorized to access the requested resource');
  }

  jwt.verify(token, environment.jwtSecretKey, (err: any, user: any) => {
    if (err) {
      throw new ForbiddenError('The token is not valid');
    }

    req.user = user;
    next();
  });
};

export default authenticateToken;
