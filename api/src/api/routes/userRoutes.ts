import { Router } from 'express';
import UserController from '../controllers/userController';
import validateRequestBody from '../middlewares/validateRequestBody';
import { updateSchema } from '../validators/userRoutes';

const router = Router();
router.put('/:id', validateRequestBody(updateSchema), UserController.updateUser);
export default router;
