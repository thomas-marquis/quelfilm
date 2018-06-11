export default class QuickReplies {
  private title: String;
  private quickReplies: Array<String>;

  constructor() {
    this.quickReplies = new Array();
  }

  /**
   * Getter $title
   * @return {String}
   */
  public getTitle(): String {
    return this.title;
  }

  /**
   * Getter $quickReplies
   * @return {Array<String>}
   */
  public getQuickReplies(): Array<String> {
    return this.quickReplies;
  }

  /**
   * Setter $title
   * @param {String} value
   */
  public setTitle(value: String): QuickReplies {
    this.title = value;
    return this;
  }
}
