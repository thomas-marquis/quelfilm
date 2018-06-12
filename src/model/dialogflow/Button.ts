/**
 * The button object that appears at the bottom of a card.
 */
export default class Button {
  private text: String;
  private postback: String;

  /**
   * Optional. The text to show on the button.
   *
   * @return {String}
   */
  public getText(): String {
    return this.text;
  }

  /**
   * Optional. The text to send back to the Dialogflow API or a URI to open.
   *
   * @return {String}
   */
  public getPostback(): String {
    return this.postback;
  }

  /**
   * Optional. The text to show on the button.
   *
   * @param {String} value
   * @return {Button} this
   */
  public setText(value: String): Button {
    this.text = value;
    return this;
  }

  /**
   * Optional. The text to send back to the Dialogflow API or a URI to open.
   *
   * @param {String} value
   * @return {Button} this
   */
  public setPostback(value: String): Button {
    this.postback = value;
    return this;
  }
}
