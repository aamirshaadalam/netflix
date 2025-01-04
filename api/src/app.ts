import express from 'express';
import handleError from './api/middlewares/handleError';
import authRoutes from './api/routes/authRoutes';
import userRoutes from './api/routes/userRoutes';
import authenticateToken from './api/middlewares/authenticateToken';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticateToken, userRoutes);
app.use(handleError);

export default app;
