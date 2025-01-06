import { Router } from 'express';
import mediaController from '../controllers/mediaController';
import { validateCreateMedia, validateGetAllMedia, validateUpdateMedia } from '../middlewares/validators/mediaRoutes';

const router = Router();
router.get('/', validateGetAllMedia, mediaController.getAllMedia);
router.get('/:id', mediaController.getMedia);
router.get('/featured', mediaController.getFeaturedMedia);
router.post('/', validateCreateMedia, mediaController.createMedia);
router.put('/:id', validateUpdateMedia, mediaController.updateMedia);
router.delete('/:id', mediaController.deleteMedia);

export default router;
