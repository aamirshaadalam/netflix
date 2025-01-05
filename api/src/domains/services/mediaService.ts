import { ForbiddenError } from '../../core/errors';
import { CustomRequest } from '../../types/CustomRequest';
import MediaRepository from '../repositories/mediaRepository';

const getMedia = async (req: CustomRequest) => {
  return await MediaRepository.findMediaById(req.params.id);
};

const getRandomMedia = async (req: CustomRequest) => {
  const type = req.query.type || '';
  const isMovie = !(type.toString().toLowerCase() === 'series');
  return await MediaRepository.getRandomMedia(isMovie);
};

const getAllMedia = async (req: CustomRequest) => {
  const limit = req.query.limit ? parseInt(req.query.limit.toString()) : 10;
  const skip = req.query.skip ? parseInt(req.query.skip.toString()) : 0;
  return await MediaRepository.findAllMedia(limit, skip);
};

const createMedia = async (req: CustomRequest) => {
  if (req.user?.isAdmin) {
    return await MediaRepository.createMedia(req.body);
  } else {
    throw new ForbiddenError('You are not authorized');
  }
};

const updateMedia = async (req: CustomRequest) => {
  if (req.user?.isAdmin) {
    return await MediaRepository.updateMedia(req.params.id, req.body);
  } else {
    throw new ForbiddenError('You are not authorized');
  }
};

const deleteMedia = async (req: CustomRequest) => {
  if (req.user?.isAdmin) {
    return await MediaRepository.deleteMedia(req.params.id);
  } else {
    throw new ForbiddenError('You are not authorized');
  }
};

export default { getMedia, getAllMedia, getRandomMedia, createMedia, updateMedia, deleteMedia };
