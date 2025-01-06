import Media, { IMedia } from '../models/mediaModel';

const findMediaById = async (id: string) => {
  return await Media.findById(id);
};

const getFeaturedMedia = async (isMovie: boolean) => {
  return await Media.aggregate([{ $match: { isMovie } }, { $sample: { size: 1 } }]);
};

const findAllMedia = async (limit: number, skip: number) => {
  return await Media.find().limit(limit).skip(skip);
};

const createMedia = async (media: Partial<IMedia>) => {
  return await Media.create(media);
};

const updateMedia = async (id: string, media: Partial<IMedia>) => {
  return await Media.findByIdAndUpdate(id, media, { new: true });
};

const deleteMedia = async (id: string) => {
  await Media.findByIdAndDelete(id);
};

export default { findMediaById, getFeaturedMedia, findAllMedia, createMedia, updateMedia, deleteMedia };
