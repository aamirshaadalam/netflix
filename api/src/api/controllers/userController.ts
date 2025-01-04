import { NextFunction, Request, Response } from 'express';
import ForbiddenError from '../../core/errors/forbidden';
import UserService from '../../domains/services/userService';
import { AuthRequest } from '../../types/AuthRequest';

// get user
// get all users
// get user stats

// update user
const updateUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.id === req.params.id || req.user?.isAdmin) {
    try {
      const { id, isAdmin = false } = req.user;
      const updatedUser = await UserService.updateUser(id, isAdmin, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    throw new ForbiddenError('You are not authorized to update this user');
  }
};
// delete user

export default {
    updateUser
};
