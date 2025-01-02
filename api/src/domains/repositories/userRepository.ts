import User, { IUser } from '../models/userModel';

const createUser = async (user: Partial<IUser>): Promise<IUser> => {
  return await User.create(user);
};

const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

const findUserByUsername = async (username: string): Promise<IUser | null> => {
  return await User.findOne({ username });
};

const isExistingUser = async (user: Partial<IUser>): Promise<boolean> => {
  const { email, username } = user;
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return true;
  }

  return false;
};

export default {
  createUser,
  findUserByEmail,
  findUserByUsername,
  isExistingUser,
};
