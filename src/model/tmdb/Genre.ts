export default class Genre {
  private id: Number;
  private name: String;

  /**
   * Getter $id
   * @return {Number}
   */
  public getId(): Number {
    return this.id;
  }

  /**
   * Getter $name
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * Setter $id
   * @param {Number} value
   */
  public setId(value: Number): Genre {
    this.id = value;
    return this;
  }

  /**
   * Setter $name
   * @param {String} value
   */
  public setName(value: String): Genre {
    this.name = value;
    return this;
  }
}
