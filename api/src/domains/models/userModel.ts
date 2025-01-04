import { Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profilePic: string;
  isAdmin: boolean;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    profilePic: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<IUser>('User', UserSchema);
