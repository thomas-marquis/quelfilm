import Button from "./Button";

export default class Card {
  private title: String;
  private subtitle: String;
  private imageUri: String;
  private buttons: Array<Button>;

  /**
   * The card response message.
   */
  constructor() {
    this.buttons = new Array();
  }

  /**
   * Optional. The title of the card.
   * @return {String}
   */
  public getTitle(): String {
    return this.title;
  }

  /**
   * Optional. The subtitle of the card.
   * @return {String}
   */
  public getSubtitle(): String {
    return this.subtitle;
  }

  /**
   * Optional. The public URI to an image file for the card
   * @return {String}
   */
  public getImageUri(): String {
    return this.imageUri;
  }

  /**
   * Optional. The collection of card buttons.
   * @return {Array<Button>}
   */
  public getButtons(): Array<Button> {
    return this.buttons;
  }

  /**
   * Optional. The title of the card.
   * @param {String} value
   * @returns this
   */
  public setTitle(value: String): Card {
    this.title = value;
    return this;
  }

  /**
   * Optional. The subtitle of the card.
   * @param {String} value
   * @returns this
   */
  public setSubtitle(value: String): Card {
    this.subtitle = value;
    return this;
  }

  /**
   * Optional. The public URI to an image file for the card
   * @param {String} value
   * @returns this
   */
  public setImageUri(value: String): Card {
    this.imageUri = value;
    return this;
  }
}
