import { NextFunction, Response } from 'express';
import { UnauthorizedError, ForbiddenError } from '../../core/errors';
import jwt from 'jsonwebtoken';
import environment from '../../config/environment';
import { CustomRequest } from '../../types/CustomRequest';

const authenticateToken = (req: CustomRequest, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

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
