import Genre from "./Genre";
import Credit from "./Credit";
import MovieDetails from "./MovieDetails";

export default class Movie {
  private _details: MovieDetails;
  private _credit: Credit;

    get details(): MovieDetails {
        return this._details;
    }

    set details(value: MovieDetails) {
        this._details = value;
    }

    get credit(): Credit {
        return this._credit;
    }

    set credit(value: Credit) {
        this._credit = value;
    }
}
