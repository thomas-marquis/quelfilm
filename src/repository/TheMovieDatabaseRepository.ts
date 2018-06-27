import http from "axios";

import MovieRepository from "./MovieRepository";
import Genre from "../model/tmdb/Genre";
import apiConfig from "../config/api-config";
import MovieDetails from "../model/tmdb/MovieDetails";
import SearchCriteria from "../model/tmdb/SearchCriteria";

export default class TheMovieDatabaseRepository implements MovieRepository {
    private requiredParams = {
        api_key: apiConfig.apiKey,
        language: apiConfig.lang,
    };

    public getGenreList(): Promise<Array<Genre>> {
        return new Promise((resolve, reject) => {
            http.get(`${apiConfig.baseUrl}genre/movie/list`, {
                params: this.requiredParams,
            })
                .then(response => {
                    const genres: Array<Genre> = response.data.genres;
                    resolve(genres);
                })
                .catch(reason => reject(reason));
        });
    }

    public getMovieById(id: Number): Promise<MovieDetails> {
        return new Promise((resolve, reject) => {
            http.get(`${apiConfig.baseUrl}movie/${id}`, {
                params: this.requiredParams,
            })
                .then(response => {
                    const movie: MovieDetails = response.data;
                    resolve(movie);
                })
                .catch(reason => reject(reason));
        });
    }

    public getMovieListByTextQuery(query: String): Promise<Array<MovieDetails>> {
        return new Promise((resolve, reject) => {
            http.get(`${apiConfig.baseUrl}search/movie`, {
                params: {
                    ...this.requiredParams,
                    query,
                }
            })
                .then(response => {
                    const movies: Array<MovieDetails> = response.data.results;
                    resolve(movies);
                })
                .catch(reason => reject(reason));
        });
    }

    public getPopularMovieList(): Promise<Array<MovieDetails>> {
        return new Promise((resolve, reject) => {
            http.get(`${apiConfig.baseUrl}movie/popular`, {
                params: this.requiredParams,
            })
                .then(response => {
                    const movies: Array<MovieDetails> = response.data.results;
                    resolve(movies);
                })
                .catch(reason => reject(reason));
        });
    }

    public getMoviesByCriteria(criteria: SearchCriteria): Promise<Array<MovieDetails>> {
        return new Promise((resolve, reject) => {
            http.get(`${apiConfig.baseUrl}discover/movie`, {
                params: {
                    ...this.requiredParams,
                    ...criteria,
                }
            })
                .then(response => {
                    const movies: Array<MovieDetails> = response.data.results;
                    resolve(movies);
                })
                .catch(reason => reject(reason));
        });
    }
}