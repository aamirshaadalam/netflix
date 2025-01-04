import { Router } from 'express';
import AuthController from '../controllers/authController';
import validateUser from '../middlewares/validateUser';
import userValidationSchema from '../validators/userValidator';

const router = Router();
router.post('/register', validateUser(userValidationSchema), AuthController.registerUser);
router.post('/login', AuthController.loginUser);

export default router;
