import BadRequestError from '../../core/errors/badRequest';
import { IUser } from '../models/userModel';
import UserRepository from '../repositories/userRepository';
import CryptoJS from 'crypto-js';
import environment from '../../config/environment';
import { removeSensitiveUserData } from '../../core/utils/removeSensitiveUserData';

const registerUser = async (newUser: Partial<IUser>): Promise<Partial<IUser>> => {
  const { email, username, password } = newUser;
  const existingUser = await UserRepository.findUser(newUser);
  if (existingUser) {
    throw new BadRequestError(`A user with username: ${username} or email: ${email} already exists`);
  }
  newUser.password = CryptoJS.AES.encrypt(password!, environment.cryptoPrivateKey).toString();
  const user = await UserRepository.createUser(newUser);
  return removeSensitiveUserData(user);
};

const loginUser = async (user: Partial<IUser>): Promise<Partial<IUser>> => {
  const existingUser = await UserRepository.findUser(user);
  if (!existingUser) {
    throw new BadRequestError('The provided credentials are incorrect');
  }
  const bytes = CryptoJS.AES.decrypt(existingUser.password, environment.cryptoPrivateKey);
  const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
  if (decryptedPassword !== user.password) {
    throw new BadRequestError('The provided credentials are incorrect');
  }
  return removeSensitiveUserData(existingUser);
};

export default {
  registerUser,
  loginUser,
};
