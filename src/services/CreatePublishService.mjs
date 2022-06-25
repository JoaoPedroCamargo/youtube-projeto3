import Movie from '../entities/Movie.mjs'
import AppError from '../error/AppError.mjs';

class CreatePublishService {
  execute({ movieName }) {
    const movieRepository = new Movie;

    if(!movieName) {
      throw new AppError('Not valid movie name.', 401);
    }

    const movie = movieRepository.create({ movieName });

    return movie;
  }
}

export default CreatePublishService;
