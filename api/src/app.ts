import express from 'express';
import handleError from './api/middlewares/handleError';
import authRoutes from './api/routes/authRoutes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/auth', authRoutes);
app.use(handleError);

export default app;
