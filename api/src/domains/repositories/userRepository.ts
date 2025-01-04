import User, { IUser } from '../models/userModel';

const createUser = async (newUser: Partial<IUser>) => {
  return await User.create(newUser);
};

const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

const findUserByUsername = async (username: string) => {
  return await User.findOne({ username });
};

const findUserById = async (id: string) => {
  return await User.findById(id);
};

const findUserByEmailOrUsername = async (user: Partial<IUser>) => {
  const { email, username } = user;
  return await User.findOne({ $or: [{ email }, { username }] });
};

const updateUser = async (id: string, user: Partial<IUser>) => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};

const deleteUser = async (id: string) => {
  await User.findByIdAndDelete(id);
};

export default {
  createUser,
  findUserByEmail,
  findUserByUsername,
  findUserByEmailOrUsername,
  findUserById,
  updateUser,
  deleteUser,
};
