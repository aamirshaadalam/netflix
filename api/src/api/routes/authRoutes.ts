import { Router } from 'express';
import AuthController from '../controllers/authController';
import validateRequestBody from '../middlewares/validateRequestBody';
import { registerSchema, loginSchema } from '../validators/authRoutes';

const router = Router();
router.post('/register', validateRequestBody(registerSchema), AuthController.registerUser);
router.post('/login', validateRequestBody(loginSchema), AuthController.loginUser);

export default router;
