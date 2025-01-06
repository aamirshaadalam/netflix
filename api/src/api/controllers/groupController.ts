import { NextFunction, Response } from 'express';
import { CustomRequest } from '../../types/CustomRequest';
import groupService from '../../domains/services/groupService';

const createGroup = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const group = groupService.createGroup(req);
    res.status(201).json(group);
  } catch (error) {
    next(error);
  }
};

const deleteGroup = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    await groupService.deleteGroup(req);
    res.status(200).json({ message: 'Group deleted successfully' });
  } catch (error) {
    next(error);
  }
};

const getGroups = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const groups = groupService.getGroups(req);
    res.status(200).json(groups);
  } catch (error) {
    next(error);
  }
};

export default { createGroup, deleteGroup, getGroups };
