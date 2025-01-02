import { NextFunction, Request, Response } from "express";
import UserService from '../../domains/services/userService'

const registerUser = async (request:Request, response:Response, next:NextFunction): Promise<void> => {
    try {
        const user = await UserService.createUser(request.body);
        response.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export default {
    registerUser
};
