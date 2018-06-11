export default class Context {
  private name: String;
  private lifespanCount: Number;
  private parameters: any;

  /**
   * Getter $name
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * Getter $lifespanCount
   * @return {Number}
   */
  public getLifespanCount(): Number {
    return this.lifespanCount;
  }

  /**
   * Getter $parameters
   * @return {any}
   */
  public getParameters(): any {
    return this.parameters;
  }

  /**
   * Setter $name
   * @param {String} value
   */
  public setName(value: String): Context {
    this.name = value;
    return this;
  }

  /**
   * Setter $lifespanCount
   * @param {Number} value
   */
  public setLifespanCount(value: Number): Context {
    this.lifespanCount = value;
    return this;
  }

  /**
   * Setter $parameters
   * @param {any} value
   */
  public setParameters(value: any): Context {
    this.parameters = value;
    return this;
  }
}
