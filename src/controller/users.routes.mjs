import { Router } from 'express';

import CreateUserService from '../services/CreateUserService.mjs';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { userName, email, password } = request.body;

    const createUser = new CreateUserService(userName, email, password);

    const user = await createUser.execute({
      userName,
      email,
      password,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
