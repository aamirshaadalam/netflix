import { Router } from "express";
import groupController from "../controllers/groupController";

const router = Router();
router.get('/', groupController.getGroups);
router.post('/', groupController.createGroup);
router.delete('/:id', groupController.deleteGroup);

export default router;