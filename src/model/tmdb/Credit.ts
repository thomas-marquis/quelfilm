import Cast from "./Cast";
import Crew from "./Crew";

export default class Credit {
  private _id: Number;
  private _cast: Array<Cast>;
  private _crew: Array<Crew>;

  get id(): Number {
      return this._id;
  }

  set id(value: Number) {
      this._id = value;
  }

  get cast(): Array<Cast> {
      return this._cast;
  }

  set cast(value: Array<Cast>) {
      this._cast = value;
  }

  get crew(): Array<Crew> {
      return this._crew;
  }

  set crew(value: Array<Crew>) {
      this._crew = value;
  }
}
