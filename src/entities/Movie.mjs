const movie = []

 class Movie {
    create({ movieName }) {
        movie.push({ name: movieName, id: movie.length });
        return movie[movie.length - 1];
    }

    list({ movieName }) {
        let searchMovie = []
        movie.forEach( (item, index) => {
            if (item.name === movieName){
                searchMovie.push(movie[index]);
            }
        })

        return searchMovie === [] ? movie : searchMovie;
    }
 }

 export default Movie;