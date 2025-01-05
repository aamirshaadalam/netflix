import { NextFunction, Response } from 'express';
import { ForbiddenError } from '../../core/errors';
import UserService from '../../domains/services/userService';
import { CustomRequest } from '../../types/CustomRequest';

// get user
const getUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.getUser(req);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// get all users
const getAllUsers = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.getAllUsers(req);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// update user
const updateUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const updatedUser = await UserService.updateUser(req);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// delete user
const deleteUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    await UserService.deleteUser(req);
    res.status(200).json({ message: `User with id ${req.params.id} deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export default {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
};
