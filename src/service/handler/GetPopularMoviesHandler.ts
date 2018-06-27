import IntentHandler from "./IntentHandler";
import WebhookRequest from "../../model/dialogflow/WebhookRequest";
import WebhookResponse from "../../model/dialogflow/WebhookResponse";
import MovieRepository from "../../repository/MovieRepository";

export default class GetPopularMoviesHandler implements IntentHandler {
    private movieRepository: MovieRepository;

    constructor(movieRepository: MovieRepository) {
        this.movieRepository = movieRepository;
    }

    execute(webhookRequest: WebhookRequest): Promise<WebhookResponse> {
        return new Promise((resolve, reject) => {
            this.movieRepository.getPopularMovieList()
                .then(movieDetails => {
                    const webhookResponse: WebhookResponse = new WebhookResponse();
                })
                .catch(reason => reject(reason));
        });
    }

}