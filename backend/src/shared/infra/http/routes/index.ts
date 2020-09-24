import { Router } from 'express';

import appointmentsRoutes from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/user.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;