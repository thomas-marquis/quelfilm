import Context from "./Context";
import Intent from "./Intent";
import Message from "./Message";

/**
 * Represents the result of conversational query or event processing.
 */
export default class Queryresult {
  private queryText: String;
  private languageCode: String;
  private speechRecognitionConfidence: Number;
  private action: String;
  private parameters: any;
  private allRequiredParamsPresent: Boolean;
  private fulfillmentText: String;
  private fulfillmentMessages: Array<Message>;
  private webhookSource: String;
  private webhookPayload: any;
  private outputContexts: Array<Context>;
  private intent: Intent;
  private intentDetectionConfidence: Number;
  private diagnosticInfo: any;

  constructor() {
    this.fulfillmentMessages = new Array();
    this.outputContexts = new Array();
  }

  /**
   * The original conversational query text:
   *
   * - If natural language text was provided as input, queryText contains a copy of the input.
   * - If natural language speech audio was provided as input, queryText contains the speech
   * recognition result. If speech recognizer produced multiple alternatives, a particular one is picked.
   * - If an event was provided as input, queryText is not set.
   *
   * @return {String}
   */
  public getQueryText(): String {
    return this.queryText;
  }

  /**
   * The language that was triggered during intent detection.
   *
   * @return {String}
   */
  public getLanguageCode(): String {
    return this.languageCode;
  }

  /**
   * The Speech recognition confidence between 0.0 and 1.0. A higher number
   * indicates an estimated greater likelihood that the recognized words are correct.
   * The default of 0.0 is a sentinel value indicating that confidence was not set.
   *
   * This field is not guaranteed to be accurate or set. In particular this field isn't
   * set for StreamingDetectIntent since the streaming endpoint has separate confidence
   * estimates per portion of the audio in StreamingRecognitionResult.
   *
   * @return {Number}
   */
  public getSpeechRecognitionConfidence(): Number {
    return this.speechRecognitionConfidence;
  }

  /**
   * The action name from the matched intent.
   *
   * @return {String}
   */
  public getAction(): String {
    return this.action;
  }

  /**
   * The collection of extracted parameters.
   *
   * @return {any}
   */
  public getParameters(): any {
    return this.parameters;
  }

  /**
   * This field is set to:
   *
   * - false if the matched intent has required parameters and not all of
   * the required parameter values have been collected.
   * - true if all required parameter values have been collected, or if
   * the matched intent doesn't contain any required parameters.
   *
   * @return {Boolean}
   */
  public getAllRequiredParamsPresent(): Boolean {
    return this.allRequiredParamsPresent;
  }

  /**
   * The text to be pronounced to the user or shown on the screen.
   * @return {String}
   */
  public getFulfillmentText(): String {
    return this.fulfillmentText;
  }

  /**
   * If the query was fulfilled by a webhook call, this field is set to the
   * value of the source field returned in the webhook response.
   *
   * @return {String}
   */
  public getWebhookSource(): String {
    return this.webhookSource;
  }

  /**
   * If the query was fulfilled by a webhook call, this field is set to the value
   * of the payload field returned in the webhook response.
   *
   * @return {any}
   */
  public getWebhookPayload(): any {
    return this.webhookPayload;
  }

  /**
   * The collection of output contexts. If applicable, outputContexts.parameters contains
   * entries with name <parameter name>.original containing the original parameter
   * values before the query.
   *
   * @return {Array<Context>}
   */
  public getOutputContexts(): Array<Context> {
    return this.outputContexts;
  }

  /**
   * The intent that matched the conversational query. Some, not all fields are filled in this
   * message, including but not limited to: name, displayName and webhookState.
   *
   * @return {Intent}
   */
  public getIntent(): Intent {
    return this.intent;
  }

  /**
   * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain).
   *
   * @return {Number}
   */
  public getIntentDetectionConfidence(): Number {
    return this.intentDetectionConfidence;
  }

  /**
   * The free-form diagnostic info. For example, this field could contain webhook call latency.
   *
   * @return {any}
   */
  public getDiagnosticInfo(): any {
    return this.diagnosticInfo;
  }

  /**
   * The original conversational query text:
   *
   * - If natural language text was provided as input, queryText contains a copy of the input.
   * - If natural language speech audio was provided as input, queryText contains the speech
   * recognition result. If speech recognizer produced multiple alternatives, a particular one is picked.
   * - If an event was provided as input, queryText is not set.
   *
   * @param {String} value
   */
  public setQueryText(value: String): Queryresult {
    this.queryText = value;
    return this;
  }

  /**
   * The language that was triggered during intent detection.
   *
   * @param {String} value
   */
  public setLanguageCode(value: String): Queryresult {
    this.languageCode = value;
    return this;
  }

  /**
   * The Speech recognition confidence between 0.0 and 1.0. A higher number
   * indicates an estimated greater likelihood that the recognized words are correct.
   * The default of 0.0 is a sentinel value indicating that confidence was not set.
   *
   * This field is not guaranteed to be accurate or set. In particular this field isn't
   * set for StreamingDetectIntent since the streaming endpoint has separate confidence
   * estimates per portion of the audio in StreamingRecognitionResult.
   *
   * @param {Number} value
   */
  public setSpeechRecognitionConfidence(value: Number): Queryresult {
    this.speechRecognitionConfidence = value;
    return this;
  }

  /**
   * The action name from the matched intent.
   *
   * @param {String} value
   */
  public setAction(value: String): Queryresult {
    this.action = value;
    return this;
  }

  /**
   * The collection of extracted parameters.
   *
   * @param {any} value
   */
  public setParameters(value: any): Queryresult {
    this.parameters = value;
    return this;
  }

  /**
   *This field is set to:
   *
   * - false if the matched intent has required parameters and not all of
   * the required parameter values have been collected.
   * - true if all required parameter values have been collected, or if
   * the matched intent doesn't contain any required parameters.
   *
   * @param {Boolean} value
   */
  public setAllRequiredParamsPresent(value: Boolean): Queryresult {
    this.allRequiredParamsPresent = value;
    return this;
  }

  /**
   * The text to be pronounced to the user or shown on the screen.
   *
   * @param {String} value
   */
  public setFulfillmentText(value: String): Queryresult {
    this.fulfillmentText = value;
    return this;
  }

  /**
   * The collection of rich messages to present to the user.
   *
   * @return {Array<Message>}
   */
  public getFulfillmentMessages(): Array<Message> {
    return this.fulfillmentMessages;
  }

  /**
   * If the query was fulfilled by a webhook call, this field is set to the
   * value of the source field returned in the webhook response.
   *
   * @param {String} value
   */
  public setWebhookSource(value: String): Queryresult {
    this.webhookSource = value;
    return this;
  }

  /**
   * If the query was fulfilled by a webhook call, this field is set to the value
   * of the payload field returned in the webhook response.
   *
   * @param {any} value
   */
  public setWebhookPayload(value: any): Queryresult {
    this.webhookPayload = value;
    return this;
  }

  /**
   * The intent that matched the conversational query. Some, not all fields are filled in this
   * message, including but not limited to: name, displayName and webhookState.
   *
   * @param {Intent} value
   */
  public setIntent(value: Intent): Queryresult {
    this.intent = value;
    return this;
  }

  /**
   * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain).
   *
   * @param {Number} value
   */
  public setIntentDetectionConfidence(value: Number): Queryresult {
    this.intentDetectionConfidence = value;
    return this;
  }

  /**
   * The free-form diagnostic info. For example, this field could contain webhook call latency.
   *
   * @param {any} value
   */
  public setDiagnosticInfo(value: any): Queryresult {
    this.diagnosticInfo = value;
    return this;
  }
}
