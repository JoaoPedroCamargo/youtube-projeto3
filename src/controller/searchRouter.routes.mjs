import { Router } from 'express';

import SearchMovieService from '../services/SearchMovieService.mjs';

const sessionsRouter = Router();

sessionsRouter.get('/:moviename', (request, response) => {
  try {
    const searchMovie = new SearchMovieService();

    const { moviename } = request.params;

    const moviesList = searchMovie.execute({ movieName: moviename });

    return response.json({moviesList})
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
