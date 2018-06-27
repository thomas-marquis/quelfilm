import AbstractElement from "./AbstractElement";

export default class Crew extends AbstractElement {
  private _name: String;
  private _department: String;
  private _gender: Number;
  private _job: String;

  get name(): String {
      return this._name;
  }

  set name(value: String) {
      this._name = value;
  }

  get department(): String {
      return this._department;
  }

  set department(value: String) {
      this._department = value;
  }

  get gender(): Number {
      return this._gender;
  }

  set gender(value: Number) {
      this._gender = value;
  }

  get job(): String {
      return this._job;
  }

  set job(value: String) {
      this._job = value;
  }
}
