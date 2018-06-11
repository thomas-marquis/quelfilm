import Context from "./Context";
import Intent from "./Intent";

export default class Queryresult {
  private queryText: String;
  private languageCode: String;
  private speechRecognitionConfidence: Number;
  private action: String;
  private parameters: any;
  private allRequiredParamsPresent: Boolean;
  private fulfillmentText: String;
  private fulfillmentMessages;
  private webhookSource: String;
  private webhookPayload: any;
  private outputContexts: Array<Context>;
  private intent: Intent;
  private intentDetectionConfidence: Number;
  private diagnosticInfo: any;

  constructor() {
    this.outputContexts = new Array();
  }
}
