import environment from '../../config/environment';
import { IUser } from '../models/userModel';
import UserRepository from '../repositories/userRepository';

// get user
// get all users
// get user stats
// update user
const updateUser = async (id: string, isAdmin: boolean, user: Partial<IUser>) => {
  if (user.password) {
    user.password = CryptoJS.AES.encrypt(user.password, environment.cryptoPrivateKey).toString();
  }

  if (!isAdmin) {
    user.isAdmin = false;
  }

  return await UserRepository.updateUser(id, user);
};
// delete user

export default { updateUser };
