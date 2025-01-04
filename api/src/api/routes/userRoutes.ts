import { Router } from 'express';
import UserController from '../controllers/userController';
import { validateUpdateUser } from '../middlewares/validators/userRoutes';

const router = Router();
router.get('/:id', UserController.getUser);
router.put('/:id', validateUpdateUser, UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
export default router;
