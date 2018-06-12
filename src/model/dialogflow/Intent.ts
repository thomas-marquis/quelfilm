/**
 * Represents an intent. Intents convert a number of user expressions
 * or patterns into an action. An action is an extraction of a user
 * command or sentence semantics.
 */
export default class Intent {
  private name: String;
  private displayName: String;

  /**
   * Required for all methods except create (create populates the name automatically.
   * The unique identifier of this intent.
   * Format: projects/<Project ID>/agent/intents/<Intent ID>.
   *
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * Required. The name of this intent.
   *
   * @return {String}
   */
  public getDisplayName(): String {
    return this.displayName;
  }

  /**
   * Required for all methods except create (create populates the name automatically.
   * The unique identifier of this intent.
   * Format: projects/<Project ID>/agent/intents/<Intent ID>.
   *
   * @param {String} value
   */
  public setName(value: String): Intent {
    this.name = value;
    return this;
  }

  /**
   * Required. The name of this intent.
   *
   * @param {String} value
   */
  public setDisplayName(value: String): Intent {
    this.displayName = value;
    return this;
  }
}
