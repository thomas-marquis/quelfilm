import Genre from "./Genre";
import Credit from "./Credit";

export default class Movie {
  private id: Number;
  private title: String;
  private genres: Array<Genre>;
  private overview: String;
  private posterPath: String;
  private originalLanguage: String;
  private voteAverage: Number;
  private voteCount: Number;
  private popularity: Number;
  private releaseDate: Date;
  private credit: Credit;

  constructor() {
    this.genres = new Array();
  }

  /**
   * Getter $id
   * @return {Number}
   */
  public geId(): Number {
    return this.id;
  }

  /**
   * Getter $title
   * @return {String}
   */
  public getTitle(): String {
    return this.title;
  }

  /**
   * Getter $genres
   * @return {Array<Genre>}
   */
  public getGenres(): Array<Genre> {
    return this.genres;
  }

  /**
   * Getter $overview
   * @return {String}
   */
  public getOverview(): String {
    return this.overview;
  }

  /**
   * Getter $posterPath
   * @return {String}
   */
  public getPosterPath(): String {
    return this.posterPath;
  }

  /**
   * Getter $originalLanguage
   * @return {String}
   */
  public getOriginalLanguage(): String {
    return this.originalLanguage;
  }

  /**
   * Getter $voteAverage
   * @return {Number}
   */
  public getVoteAverage(): Number {
    return this.voteAverage;
  }

  /**
   * Getter $voteCount
   * @return {Number}
   */
  public getVoteCount(): Number {
    return this.voteCount;
  }

  /**
   * Getter $popularity
   * @return {Number}
   */
  public getPopularity(): Number {
    return this.popularity;
  }

  /**
   * Getter $releaseDate
   * @return {Date}
   */
  public getReleaseDate(): Date {
    return this.releaseDate;
  }

  /**
   * Getter $credit
   * @return {Credit}
   */
  public getCredit(): Credit {
    return this.credit;
  }

  /**
   * Setter $id
   * @param {Number} value
   */
  public setId(value: Number): Movie {
    this.id = value;
    return this;
  }

  /**
   * Setter $title
   * @param {String} value
   */
  public setTitle(value: String): Movie {
    this.title = value;
    return this;
  }

  /**
   * Setter $overview
   * @param {String} value
   */
  public setOverview(value: String): Movie {
    this.overview = value;
    return this;
  }

  /**
   * Setter $posterPath
   * @param {String} value
   */
  public setPosterPath(value: String): Movie {
    this.posterPath = value;
    return this;
  }

  /**
   * Setter $originalLanguage
   * @param {String} value
   */
  public setOriginalLanguage(value: String): Movie {
    this.originalLanguage = value;
    return this;
  }

  /**
   * Setter $voteAverage
   * @param {Number} value
   */
  public setVoteAverage(value: Number): Movie {
    this.voteAverage = value;
    return this;
  }

  /**
   * Setter $voteCount
   * @param {Number} value
   */
  public setVoteCount(value: Number): Movie {
    this.voteCount = value;
    return this;
  }

  /**
   * Setter $popularity
   * @param {Number} value
   */
  public setPopularity(value: Number): Movie {
    this.popularity = value;
    return this;
  }

  /**
   * Setter $releaseDate
   * @param {Date} value
   */
  public setReleaseDate(value: Date): Movie {
    this.releaseDate = value;
    return this;
  }

  /**
   * Setter $credit
   * @param {Credit} value
   */
  public setCredit(value: Credit): Movie {
    this.credit = value;
    return this;
  }
}
