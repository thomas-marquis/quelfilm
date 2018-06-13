export default class Cast {
  private id: Number;
  private castId: Number;
  private character: String;
  private gender: Number;
  private name: String;

  /**
   * Getter $id
   * @return {Number}
   */
  public getId(): Number {
    return this.id;
  }

  /**
   * Getter $castId
   * @return {Number}
   */
  public getCastId(): Number {
    return this.castId;
  }

  /**
   * Getter $character
   * @return {String}
   */
  public getCharacter(): String {
    return this.character;
  }

  /**
   * Getter $gender
   * @return {Number}
   */
  public getGender(): Number {
    return this.gender;
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
  public setId(value: Number): Cast {
    this.id = value;
    return this;
  }

  /**
   * Setter $castId
   * @param {Number} value
   */
  public setCastId(value: Number): Cast {
    this.castId = value;
    return this;
  }

  /**
   * Setter $character
   * @param {String} value
   */
  public setCharacter(value: String): Cast {
    this.character = value;
    return this;
  }

  /**
   * Setter $gender
   * @param {Number} value
   */
  public setGender(value: Number): Cast {
    this.gender = value;
    return this;
  }

  /**
   * Setter $name
   * @param {String} value
   */
  public setName(value: String): Cast {
    this.name = value;
    return this;
  }
}
