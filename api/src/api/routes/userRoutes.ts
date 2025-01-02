import { Router } from 'express';
import userController from '../controllers/userController';
import validateUser from '../middlewares/validateUser';
import userValidationSchema from '../validators/userValidator';

const router = Router();

//Register user
router.post('/register', validateUser(userValidationSchema), userController.registerUser);

export default router;