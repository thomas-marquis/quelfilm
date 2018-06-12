/**
 * Represents the contents of the original request that was passed to the
 * [Streaming]sessions.detectIntent call.
 */
export default class OriginalDetectIntentRequest {
  private source: String;
  private payload: any;

  /**
   * The source of this request, e.g., google, facebook, slack. It is set by Dialogflow-owned servers.
   *
   * @return {String}
   */
  public getSource(): String {
    return this.source;
  }

  /**
   * Optional. This field is set to the value of QueryParameters.payload field passed in the request.
   *
   * @return {any}
   */
  public getPayload(): any {
    return this.payload;
  }

  /**
   * The source of this request, e.g., google, facebook, slack. It is set by Dialogflow-owned servers.
   *
   * @param {String} value
   */
  public setSource(value: String): OriginalDetectIntentRequest {
    this.source = value;
    return this;
  }

  /**
   * Optional. This field is set to the value of QueryParameters.payload field passed in the request.
   *
   * @param {any} value
   */
  public setPayload(value: any): OriginalDetectIntentRequest {
    this.payload = value;
    return this;
  }
}
