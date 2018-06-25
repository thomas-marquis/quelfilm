import WebhookRequest from "../../model/dialogflow/WebhookRequest";

export default interface IntentHandler {
  execute(webhookRequest: WebhookRequest);
}
