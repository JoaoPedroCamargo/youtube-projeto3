import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated.mjs'
import CreatePublishService from '../services/CreatePublishService.mjs'

const sessionsRouter = Router();

sessionsRouter.post('/', (request, response) => {
  try {
    ensureAuthenticated(request);

    const { movieName } = request.body
    
    const createPublish = new CreatePublishService();

    const movie = createPublish.execute({ movieName });

    return response.json({ movie });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
