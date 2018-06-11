/**
 * Additional info about the select item for when it is triggered in a dialog.
 */
export default class SelectItemInfo {
  private key: String;
  private synonyms: Array<String>;

  constructor() {
    this.synonyms = new Array();
  }

  /**
   * Required. A unique key that will be sent back to the agent if this response is given.
   * @return {String}
   */
  public getKey(): String {
    return this.key;
  }

  /**
   * Optional. A list of synonyms that can also be used to trigger this item in dialog.
   * @return {Array<String>}
   */
  public getSynonyms(): Array<String> {
    return this.synonyms;
  }

  /**
   * Required. A unique key that will be sent back to the agent if this response is given.
   * @param {String} value
   * @returns this
   */
  public setKey(value: String): SelectItemInfo {
    this.key = value;
    return this;
  }
}
