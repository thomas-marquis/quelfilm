import OriginalDetectIntentRequest from "./OriginalDetectIntentRequest";
import Queryresult from "./QueryResult";

/**
 * The request message for a webhook call.
 */
export default class WebhookRequest {
  private session: String;
  private responseId: String;
  private queryResult: Queryresult;
  private originalDetectIntentRequest: OriginalDetectIntentRequest;

  /**
   * The unique identifier of detectIntent request session.
   * Can be used to identify end-user inside webhook implementation.
   * Format: projects/<Project ID>/agent/sessions/<Session ID>.
   *
   * @return {String}
   */
  public getSession(): String {
    return this.session;
  }

  /**
   * The unique identifier of the response.
   * Contains the same value as [Streaming]DetectIntentResponse.response_id.
   *
   * @return {String}
   */
  public getResponseId(): String {
    return this.responseId;
  }

  /**
   * The result of the conversational query or event processing.
   * Contains the same value as [Streaming]DetectIntentResponse.query_result.
   *
   * @return {Queryresult}
   */
  public getQueryResult(): Queryresult {
    return this.queryResult;
  }

  /**
   * Optional. The contents of the original request that was passed to [Streaming]sessions.detectIntent call.
   *
   * @return {OriginalDetectIntentRequest}
   */
  public getOriginalDetectIntentRequest(): OriginalDetectIntentRequest {
    return this.originalDetectIntentRequest;
  }

  /**
   * The unique identifier of detectIntent request session.
   * Can be used to identify end-user inside webhook implementation.
   * Format: projects/<Project ID>/agent/sessions/<Session ID>.
   *
   * @param {String} value
   */
  public setSession(value: String): WebhookRequest {
    this.session = value;
    return this;
  }

  /**
   * The unique identifier of the response.
   * Contains the same value as [Streaming]DetectIntentResponse.response_id.
   *
   * @param {String} value
   */
  public setResponseId(value: String): WebhookRequest {
    this.responseId = value;
    return this;
  }

  /**
   * The result of the conversational query or event processing.
   * Contains the same value as [Streaming]DetectIntentResponse.query_result.
   *
   * @param {Queryresult} value
   */
  public setQueryResult(value: Queryresult): WebhookRequest {
    this.queryResult = value;
    return this;
  }

  /**
   * Optional. The contents of the original request that was passed to [Streaming]sessions.detectIntent call.
   *
   * @param {OriginalDetectIntentRequest} value
   */
  public setOriginalDetectIntentRequest(
    value: OriginalDetectIntentRequest
  ): WebhookRequest {
    this.originalDetectIntentRequest = value;
    return this;
  }
}
