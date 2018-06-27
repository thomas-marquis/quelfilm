import Genre from "../model/tmdb/Genre";
import MovieDetails from "../model/tmdb/MovieDetails";
import SearchCriteria from "../model/tmdb/SearchCriteria";

export default interface MovieRepository {
  getMovieById(id: Number): Promise<MovieDetails>;

  getMovieListByTextQuery(query: String): Promise<Array<MovieDetails>>;

  getGenreList(): Promise<Array<Genre>>;

  getPopularMovieList(): Promise<Array<MovieDetails>>;

  getMoviesByCriteria(criteria: SearchCriteria): Promise<Array<MovieDetails>>;
}
