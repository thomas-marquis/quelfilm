export default class Cast {
  private _id: Number;
  private _castId: Number;
  private _character: String;
  private _gender: Number;
  private _name: String;

  get id(): Number {
      return this._id;
  }

  set id(value: Number) {
      this._id = value;
  }

  get castId(): Number {
      return this._castId;
  }

  set castId(value: Number) {
      this._castId = value;
  }

  get character(): String {
      return this._character;
  }

  set character(value: String) {
      this._character = value;
  }

  get gender(): Number {
      return this._gender;
  }

  set gender(value: Number) {
      this._gender = value;
  }

  get name(): String {
      return this._name;
  }

  set name(value: String) {
      this._name = value;
  }
}
