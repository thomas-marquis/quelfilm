import Movie from "../model/tmdb/Movie";
import SearchCriteria from "../model/tmdb/SearchCriteria";
import Genre from "../model/tmdb/Genre";


export default interface MovieClient {

    getMoviesByCriteria(criteria: SearchCriteria): Array<Movie>;

    getGenreList(): Array<Genre>;
}