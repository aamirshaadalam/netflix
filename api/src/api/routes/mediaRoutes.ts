import { Router } from 'express';
import mediaController from '../controllers/mediaController';

const router = Router();
router.get('/', mediaController.getAllMedia);
router.get('/:id', mediaController.getMedia);
router.get('/random', mediaController.getRandomMedia);
router.post('/', mediaController.createMedia);
router.put('/:id', mediaController.updateMedia);
router.delete('/:id', mediaController.deleteMedia);

export default router;
