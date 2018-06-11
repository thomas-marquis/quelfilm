export default class Intent {
  private name: String;
  private displayName: String;

  /**
   * Getter $name
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * Getter $displayName
   * @return {String}
   */
  public getDisplayName(): String {
    return this.displayName;
  }

  /**
   * Setter $name
   * @param {String} value
   */
  public setName(value: String): Intent {
    this.name = value;
    return this;
  }

  /**
   * Setter $displayName
   * @param {String} value
   */
  public setDisplayName(value: String): Intent {
    this.displayName = value;
    return this;
  }
}
