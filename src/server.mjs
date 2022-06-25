import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import routes from './routes/routes.mjs';
import errorHandler from './error/errorHandler.mjs'; './error/errorHandler.mjs'

const app = express();

app .use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());

app.use(errorHandler);

app.use(routes);

app.get('/', (req, res) => (
    res.json({message: 'Server is running!'})
))

app.listen(3333, () => (console.log('Server in running on port 3333!')));