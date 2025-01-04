import { BadRequestError } from '../../core/errors';
import { IUser } from '../models/userModel';
import UserRepository from '../repositories/userRepository';
import CryptoJS from 'crypto-js';
import environment from '../../config/environment';
import jwt from 'jsonwebtoken';

// register user
const registerUser = async (newUser: Partial<IUser>) => {
  const { email, username, password } = newUser;
  const existingUser = await UserRepository.findUserByEmailOrUsername(newUser);

  if (existingUser) {
    throw new BadRequestError(`A user with username: ${username} or email: ${email} already exists`);
  }

  newUser.password = CryptoJS.AES.encrypt(password!, environment.cryptoPrivateKey).toString();
  return await UserRepository.createUser(newUser);
};

// loggin user
const loginUser = async (user: Partial<IUser>) => {
  const existingUser = await UserRepository.findUserByEmailOrUsername(user);
  const password = await UserRepository.getUserPassword(existingUser?.id);
  console.log(`password: ${password}`);

  if (!existingUser || !password) {
    throw new BadRequestError('The credentials are incorrect');
  }

  const bytes = CryptoJS.AES.decrypt(password, environment.cryptoPrivateKey);
  const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

  if (originalPassword !== user.password) {
    throw new BadRequestError('The credentials are incorrect');
  }

  const { _id: id, isAdmin, username } = existingUser;
  const accessToken = jwt.sign({ id, isAdmin, username }, environment.jwtSecretKey, {
    expiresIn: '1h',
  });

  return { loggedInUser: existingUser, accessToken };
};

export default {
  registerUser,
  loginUser,
};
