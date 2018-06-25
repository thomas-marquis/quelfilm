export default class Genre {
  private _id: Number;
  private _name: String;

  get id(): Number {
      return this._id;
  }

  set id(value: Number) {
      this._id = value;
  }

  get name(): String {
      return this._name;
  }

  set name(value: String) {
      this._name = value;
  }
}
