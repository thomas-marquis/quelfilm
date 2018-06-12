/**
 * The quick replies response message.
 */
export default class QuickReplies {
  private title: String;
  private quickReplies: Array<String>;

  constructor() {
    this.quickReplies = new Array();
  }

  /**
   * Optional. The title of the collection of quick replies.
   *
   * @return {String}
   */
  public getTitle(): String {
    return this.title;
  }

  /**
   * Optional. The collection of quick replies.
   *
   * @return {Array<String>}
   */
  public getQuickReplies(): Array<String> {
    return this.quickReplies;
  }

  /**
   * Optional. The title of the collection of quick replies.
   *
   * @param {String} value
   */
  public setTitle(value: String): QuickReplies {
    this.title = value;
    return this;
  }
}
