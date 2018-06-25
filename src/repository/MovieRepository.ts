import Movie from "../model/tmdb/Movie";
import Genre from "../model/tmdb/Genre";

export default interface MovieRepository {
  getMovieById(id: Number): Promise<Movie>;

  getMovieListByTextQuery(query: String): Promise<Array<Movie>>;

  getGenreList(): Promise<Array<Genre>>;

  getPopularMovieList(): Promise<Array<Movie>>;
}
