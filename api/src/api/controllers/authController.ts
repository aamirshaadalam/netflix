import { NextFunction, Request, Response } from 'express';
import AuthService from '../../domains/services/authService';

const registerUser = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const user = await AuthService.registerUser(request.body);
    response.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await AuthService.loginUser(req.body);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default {
  registerUser,
  loginUser,
};
