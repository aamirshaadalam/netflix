import express, { Application } from 'express';
import handleError from './api/middlewares/handleError';
import userRoutes from './api/routes/userRoutes';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', userRoutes);
app.use(handleError);

export default app;
