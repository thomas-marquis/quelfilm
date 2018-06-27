import WebhookRequest from "../../model/dialogflow/WebhookRequest";
import WebhookResponse from "../../model/dialogflow/WebhookResponse";

export default interface IntentHandler {
  execute(webhookRequest: WebhookRequest): Promise<WebhookResponse>;
}
