import { Router } from 'express';
import AuthController from '../controllers/authController';
import { validateLogin, validateRegister } from '../middlewares/validators/authRoutes';

const router = Router();
router.post('/register', validateRegister, AuthController.registerUser);
router.post('/login', validateLogin, AuthController.loginUser);

export default router;
