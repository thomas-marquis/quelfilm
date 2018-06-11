export default class OriginalDetectIntentRequest {
  private source: String;
  private payload: any;

  /**
   * Getter $source
   * @return {String}
   */
  public getSource(): String {
    return this.source;
  }

  /**
   * Getter $payload
   * @return {any}
   */
  public getPayload(): any {
    return this.payload;
  }

  /**
   * Setter $source
   * @param {String} value
   */
  public setSource(value: String): OriginalDetectIntentRequest {
    this.source = value;
    return this;
  }

  /**
   * Setter $payload
   * @param {any} value
   */
  public setPayload(value: any): OriginalDetectIntentRequest {
    this.payload = value;
    return this;
  }
}
