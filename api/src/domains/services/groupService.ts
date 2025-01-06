import { ForbiddenError } from '../../core/errors';
import { CustomRequest } from '../../types/CustomRequest';
import groupRepository from '../repositories/groupRepository';

const createGroup = async (req: CustomRequest) => {
  if (req.user?.isAdmin) {
    return await groupRepository.createGroup(req.body);
  } else {
    throw new ForbiddenError('You are not authorized');
  }
};

const deleteGroup = async (req: CustomRequest) => {
  if (req.user?.isAdmin) {
    return await groupRepository.deleteGroup(req.params.id);
  } else {
    throw new ForbiddenError('You are not authorized');
  }
};

const getGroups = async (req: CustomRequest) => {
    const type = req.query.type?.toString();
    const genre = req.query.genre?.toString();
    return await groupRepository.getGroups(type, genre);
};

export default { createGroup, deleteGroup, getGroups };
