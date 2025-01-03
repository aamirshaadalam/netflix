import User, { IUser } from '../models/userModel';

const createUser = async (newUser: Partial<IUser>): Promise<IUser> => {
  return await User.create(newUser);
};

const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

const findUserByUsername = async (username: string): Promise<IUser | null> => {
  return await User.findOne({ username });
};

const findUser = async (user: Partial<IUser>): Promise<IUser | null> => {
  const { email, username } = user;
  return await User.findOne({ $or: [{ email }, { username }] });
};

export default {
  createUser,
  findUserByEmail,
  findUserByUsername,
  findUser,
};
