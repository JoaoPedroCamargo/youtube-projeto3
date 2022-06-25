import { Router } from 'express';

import usersRouter from '../controller/users.routes.mjs';
import sessionsRouter from '../controller/sessions.routes.mjs';
import searchRouter from '../controller/searchRouter.routes.mjs';
import publishRouter from '../controller/publishRouter.routes.mjs';


const routes = Router();

routes.use('/user', usersRouter);
routes.use('/session', sessionsRouter);
routes.use('/search', searchRouter);
routes.use('/publish', publishRouter);

export default routes