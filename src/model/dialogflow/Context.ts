/**
 * Represents a context.
 */
export default class Context {
  private name: String;
  private lifespanCount: Number;
  private parameters: any;

  /**
   * Required. The unique identifier of the context.
   * Format: projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>.
   *
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * Optional. The number of conversational query requests after which the context expires.
   * If set to 0 (the default) the context expires immediately.
   * Contexts expire automatically after 10 minutes even if there are no matching queries.
   *
   * @return {Number}
   */
  public getLifespanCount(): Number {
    return this.lifespanCount;
  }

  /**
   * Optional. The collection of parameters associated with this context.
   *
   * @return {any}
   */
  public getParameters(): any {
    return this.parameters;
  }

  /**
   * Required. The unique identifier of the context.
   * Format: projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>.
   *
   * @param {String} value
   */
  public setName(value: String): Context {
    this.name = value;
    return this;
  }

  /**
   * Optional. The number of conversational query requests after which the context expires.
   * If set to 0 (the default) the context expires immediately.
   * Contexts expire automatically after 10 minutes even if there are no matching queries.
   *
   * @param {Number} value
   */
  public setLifespanCount(value: Number): Context {
    this.lifespanCount = value;
    return this;
  }

  /**
   * Optional. The collection of parameters associated with this context.
   *
   * @param {any} value
   */
  public setParameters(value: any): Context {
    this.parameters = value;
    return this;
  }
}
