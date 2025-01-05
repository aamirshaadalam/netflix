import User, { IUser } from '../models/userModel';

const createUser = async (newUser: Partial<IUser>) => {
  const user = await User.create(newUser);
  const userObject: Partial<IUser> = user.toObject();
  delete userObject.password;
  return userObject;
};

const findAllUsers = async (limit: number, skip: number) => {
  return await User.find().limit(limit).skip(skip);
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

const getUserPassword = async (id: string) => {
  const user = await User.findById(id).select('password');
  return user?.password;
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
  getUserPassword,
  findAllUsers,
};
