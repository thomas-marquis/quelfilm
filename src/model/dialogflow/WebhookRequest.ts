import OriginalDetectIntentRequest from "./OriginalDetectIntentRequest";
import Queryresult from "./QueryResult";

export default class WebhookRequest {
  private session: String;
  private responseId: String;
  private queryResult: Queryresult;
  private originalDetectIntentRequest: OriginalDetectIntentRequest;
}
