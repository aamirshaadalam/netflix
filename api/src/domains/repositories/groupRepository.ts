import { IGroup } from '../models/groupModel';
import Group from '../models/groupModel';

const createGroup = async (group: Partial<IGroup>) => {
  return await Group.create(group);
};

const deleteGroup = async (id: string) => {
  await Group.findByIdAndDelete(id);
};

const getGroups = async (type?: string, genre?: string) => {
  if (type && genre) {
    return await Group.aggregate([{ $sample: { size: 10 } }, { $match: { type, genre } }]);
  }

  if (type) {
    return await Group.aggregate([{ $sample: { size: 10 } }, { $match: { type } }]);
  }

  return await Group.aggregate([{ $sample: { size: 10 } }]);
};

export default { createGroup, deleteGroup, getGroups };
