import AbstractElement from "./AbstractElement";

export default class Genre extends AbstractElement {
  private _name: String;

  get name(): String {
      return this._name;
  }

  set name(value: String) {
      this._name = value;
  }
}
