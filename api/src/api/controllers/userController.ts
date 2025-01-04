import { NextFunction, Response } from 'express';
import { ForbiddenError } from '../../core/errors';
import UserService from '../../domains/services/userService';
import { CustomRequest } from '../../types/CustomRequest';

// get user
// get all users
// get user stats

// update user
const updateUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
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
  updateUser,
};
