import { Router } from 'express';
import groupController from '../controllers/groupController';
import { validateCreateGroup, validateGetGroups } from '../middlewares/validators/groupRoutes';

const router = Router();
router.get('/', validateGetGroups, groupController.getGroups);
router.post('/', validateCreateGroup, groupController.createGroup);
router.delete('/:id', groupController.deleteGroup);

export default router;
