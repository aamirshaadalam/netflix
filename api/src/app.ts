import express from 'express';
import handleError from './api/middlewares/handleError';
import authRoutes from './api/routes/authRoutes';
import userRoutes from './api/routes/userRoutes';
import mediaRoutes from './api/routes/mediaRoutes';
import authenticateToken from './api/middlewares/authenticateToken';
import groupRoutes from './api/routes/groupRoutes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticateToken, userRoutes);
app.use('/api/media', authenticateToken, mediaRoutes);
app.use('/api/groups', authenticateToken, groupRoutes);
app.use(handleError);

export default app;
