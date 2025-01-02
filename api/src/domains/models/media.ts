import { Document, model, Schema } from 'mongoose';

export interface IMedia extends Document {
  title: string;
  description: string;
  img: string;
  titleImg: string;
  thumbnailImg: string;
  trailer: string;
  video: string;
  year: number;
  duration: string;
  ageLimit: string;
  genre: string;
  isMovie: boolean;
}

const MediaSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  img: { type: String },
  titleImg: { type: String },
  thumbnailImg: { type: String },
  trailer: { tyep: String },
  video: { type: String },
  year: { type: Number },
  duration: { type: String },
  ageLimit: { type: String },
  genre: { type: String },
  isMovie: { type: Boolean, default: true },
});

export default model<IMedia>('Media', MediaSchema);
