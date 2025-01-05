import { Router } from 'express';
import UserController from '../controllers/userController';
import { validateUpdateUser, validateGetAllUsers } from '../middlewares/validators/userRoutes';

const router = Router();
router.get('/', validateGetAllUsers, UserController.getAllUsers);
router.get('/:id', UserController.getUser);
router.put('/:id', validateUpdateUser, UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
export default router;
