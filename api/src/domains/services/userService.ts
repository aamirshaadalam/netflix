import BadRequestError from '../../core/errors/bad-request';
import { IUser } from '../models/userModel';
import UserRepository from '../repositories/userRepository';

const createUser = async (user: Partial<IUser>): Promise<IUser> => {
    const { email, username} = user;
    const isExistingUser = await UserRepository.isExistingUser(user);
    if (isExistingUser) {
        throw new BadRequestError(`A user with username: ${username} or email: ${email} already exists`);
    }
    return await UserRepository.createUser(user);
};

export default {
    createUser
};