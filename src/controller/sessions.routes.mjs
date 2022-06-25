import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService.mjs'

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService(email, password);

    const { token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
