import { NextFunction, Response } from 'express';
import { CustomRequest } from '../../types/CustomRequest';
import MediaService from '../../domains/services/mediaService';

const getMedia = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const media = await MediaService.getMedia(req);
    res.status(200).json(media);
  } catch (error) {
    next(error);
  }
};

const getFeaturedMedia = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const media = await MediaService.getFeaturedMedia(req);
    res.status(200).json(media);
  } catch (error) {
    next(error);
  }
};

const getAllMedia = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const mediaList = await MediaService.getAllMedia(req);
    res.status(200).json(mediaList);
  } catch (error) {
    next(error);
  }
};

const createMedia = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const media = await MediaService.createMedia(req);
    res.status(201).json(media);
  } catch (error) {
    next(error);
  }
};

const updateMedia = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const updatedMedia = await MediaService.updateMedia(req);
    res.status(200).json(updatedMedia);
  } catch (error) {
    next(error);
  }
};

const deleteMedia = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    await MediaService.deleteMedia(req);
    res.status(200).json({ message: 'Media deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export default { getMedia, getFeaturedMedia, getAllMedia, createMedia, updateMedia, deleteMedia };
