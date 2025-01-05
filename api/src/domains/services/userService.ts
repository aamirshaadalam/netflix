import environment from '../../config/environment';
import { ForbiddenError } from '../../core/errors';
import { CustomRequest } from '../../types/CustomRequest';
import { IUser } from '../models/userModel';
import UserRepository from '../repositories/userRepository';

// get user
const getUser = async (req: CustomRequest) => {
  return await UserRepository.findUserById(req.params.id);
};

// get all users
const getAllUsers = async (req: CustomRequest) => {
  const limit = req.query.limit ? parseInt(req.query.limit.toString()) : 10;
  const skip = req.query.skip ? parseInt(req.query.skip.toString()) : 0;
  return await UserRepository.findAllUsers(limit, skip);
};

// update user
const updateUser = async (req: CustomRequest) => {
  if (req.user?.id === req.params.id || req.user?.isAdmin) {
    const user: Partial<IUser> = req.body;

    if (user.password) {
      user.password = CryptoJS.AES.encrypt(user.password, environment.cryptoPrivateKey).toString();
    }

    if (!req.user?.isAdmin) {
      user.isAdmin = false;
    }

    return await UserRepository.updateUser(req.params.id, user);
  } else {
    throw new ForbiddenError('You are not authorized to update this user');
  }
};

// delete user
const deleteUser = async (req: CustomRequest) => {
  if (req.user?.id === req.params.id || req.user?.isAdmin) {
    await UserRepository.deleteUser(req.params.id);
  } else {
    throw new ForbiddenError('You are not authorized to delete this user');
  }
};

export default { updateUser, deleteUser, getUser, getAllUsers };
