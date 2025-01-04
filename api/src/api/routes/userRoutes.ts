import { Router } from 'express';
import UserController from '../controllers/userController';
import { validateUpdateUser } from '../validators/userRoutes';

const router = Router();
router.put('/:id', validateUpdateUser, UserController.updateUser);
export default router;
