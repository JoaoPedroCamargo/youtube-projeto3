import Movie from '../entities/Movie.mjs'

class SearchMovieService {
  execute({ movieName }) {
    const movieRepository = new Movie;

    const movies = movieRepository.list({ movieName });

    return movies;
  }
}

export default SearchMovieService;
