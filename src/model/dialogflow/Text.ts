export default class Text {
  private text: Array<String>;

  constructor() {
    this.text = new Array();
  }

  /**
   * Getter $text
   * @return {Array<String>}
   */
  public getText(): Array<String> {
    return this.text;
  }
}
