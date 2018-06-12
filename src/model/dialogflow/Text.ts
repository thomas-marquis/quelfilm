/**
 * The text response message.
 */
export default class Text {
  private text: Array<String>;

  constructor() {
    this.text = new Array();
  }

  /**
   * Optional. The collection of the agent's responses.
   *
   * @return {Array<String>}
   */
  public getText(): Array<String> {
    return this.text;
  }
}
