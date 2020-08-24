import { Router } from 'express';

const appointmentsRoutes = Router();

appointmentsRoutes.post('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

export default appointmentsRoutes;
