import { Router } from 'express';
import AuthController from '../controllers/authController';
import validateUser from '../middlewares/validateUser';
import userValidationSchema from '../validators/userValidator';

const router = Router();

//Register user
router.post('/register', validateUser(userValidationSchema), AuthController.registerUser);

//login user
router.post('/login', AuthController.loginUser);

export default router;
