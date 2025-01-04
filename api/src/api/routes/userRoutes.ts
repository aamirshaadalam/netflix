import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();
router.put('/:id', UserController.updateUser);
export default router;