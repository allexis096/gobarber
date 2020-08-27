import { Router } from 'express';

import appointmentsRoutes from './appointments.routes';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', usersRouter);

export default routes;
