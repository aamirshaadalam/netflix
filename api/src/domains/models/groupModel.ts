import { Document, model, Schema } from 'mongoose';

export interface IGroup extends Document {
  title: string;
  type: string;
  genre: string;
  content: Array<string>;
}

const GroupSchema: Schema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array<String> },
  },
  { timestamps: true }
);

export default model<IGroup>('Group', GroupSchema);
