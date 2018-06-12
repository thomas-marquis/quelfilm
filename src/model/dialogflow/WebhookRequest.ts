import OriginalDetectIntentRequest from "./OriginalDetectIntentRequest";
import Queryresult from "./QueryResult";

/**
 * The request message for a webhook call.
 */
export default class WebhookRequest {
  /**
   * The unique identifier of detectIntent request session.
   * Can be used to identify end-user inside webhook implementation.
   * Format: projects/<Project ID>/agent/sessions/<Session ID>.
   */
  private session: String;

  /**
   * The unique identifier of the response.
   * Contains the same value as [Streaming]DetectIntentResponse.response_id.
   */
  private responseId: String;

  /**
   * The result of the conversational query or event processing.
   * Contains the same value as [Streaming]DetectIntentResponse.query_result.
   */
  private queryResult: Queryresult;

  /**
   * Optional. The contents of the original request that was passed to [Streaming]sessions.detectIntent call.
   */
  private originalDetectIntentRequest: OriginalDetectIntentRequest;
}
