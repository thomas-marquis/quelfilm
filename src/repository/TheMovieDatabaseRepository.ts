import http from "axios";

import MovieRepository from "./MovieRepository";
import Movie from "../model/tmdb/Movie";
import Genre from "../model/tmdb/Genre";
import apiConfig from "../config/api-config";

export default class TheMovieDatabaseRepository implements MovieRepository {
    getGenreList(): Promise<Array<Genre>> {
        return new Promise((resolve, reject) => {
            http.get(`${apiConfig.baseUrl}genre/movie/list`, {
                params: {
                    api_key: apiConfig.apiKey,
                    language: apiConfig.lang,
                }
            })
                .then(response => {
                    const genres: Array<Genre> = response.data.genres;
                    resolve(genres);
                })
                .catch(reason => reject(reason));
        });
    }

    getMovieById(id: Number): Promise<Movie> {
        return new Promise((resolve, reject) => {
            http.get(`${apiConfig.baseUrl}movie/${id}`, {
                params: {
                    api_key: apiConfig.apiKey,
                    language: apiConfig.lang,
                }
            })
                .then(response => {
                    const movie: Movie = response.data;
                    resolve(movie);
                })
                .catch(reason => reject(reason));
        });
    }

    getMovieListByTextQuery(query: String): Promise<Array<Movie>> {
        return new Promise((resolve, reject) => {

        });
    }

    getPopularMovieList(): Promise<Array<Movie>> {
        return new Promise((resolve, reject) => {

        });
    }

}