import Cast from "./Cast";
import Crew from "./Crew";

export default class Credit {
  private id: Number;
  private cast: Array<Cast>;
  private crew: Array<Crew>;

  constructor() {
    this.cast = new Array();
    this.crew = new Array();
  }

  /**
   * Getter $id
   * @return {Number}
   */
  public getId(): Number {
    return this.id;
  }

  /**
   * Getter $cast
   * @return {Array<Cast>}
   */
  public getCast(): Array<Cast> {
    return this.cast;
  }

  /**
   * Getter $crew
   * @return {Array<Crew>}
   */
  public getCrew(): Array<Crew> {
    return this.crew;
  }

  /**
   * Setter $id
   * @param {Number} value
   */
  public setId(value: Number): Credit {
    this.id = value;
    return this;
  }
}
