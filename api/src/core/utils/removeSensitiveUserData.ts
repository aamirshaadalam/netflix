import { IUser } from '../../domains/models/userModel';

export const removeSensitiveUserData = (user: IUser): Partial<IUser> => {
  const userObject = user.toObject();
  const { password, ...rest } = userObject;
  return rest;
};
