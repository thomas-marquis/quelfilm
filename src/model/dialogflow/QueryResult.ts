import Context from "./Context";
import Intent from "./Intent";

export default class QueryResult {
    private _queryText: String;
    private _languageCode: String;
    private _speechRecognitionConfidence: Number;
    private _action: String;
    private _parameters: any;
    private _allRequiredParamsPresent: Boolean;
    private _fulfillmentText: String;
    private _fulfillmentMessages: Array<any>;
    private _webhookSource: String;
    private _webhookPayload: any;
    private _outputContexts: Array<Context>;
    private _intent: Intent;


    get queryText(): String {
        return this._queryText;
    }

    set queryText(value: String) {
        this._queryText = value;
    }

    get languageCode(): String {
        return this._languageCode;
    }

    set languageCode(value: String) {
        this._languageCode = value;
    }

    get speechRecognitionConfidence(): Number {
        return this._speechRecognitionConfidence;
    }

    set speechRecognitionConfidence(value: Number) {
        this._speechRecognitionConfidence = value;
    }

    get action(): String {
        return this._action;
    }

    set action(value: String) {
        this._action = value;
    }

    get parameters(): any {
        return this._parameters;
    }

    set parameters(value: any) {
        this._parameters = value;
    }

    get allRequiredParamsPresent(): Boolean {
        return this._allRequiredParamsPresent;
    }

    set allRequiredParamsPresent(value: Boolean) {
        this._allRequiredParamsPresent = value;
    }

    get fulfillmentText(): String {
        return this._fulfillmentText;
    }

    set fulfillmentText(value: String) {
        this._fulfillmentText = value;
    }

    get fulfillmentMessages(): Array<any> {
        return this._fulfillmentMessages;
    }

    set fulfillmentMessages(value: Array<any>) {
        this._fulfillmentMessages = value;
    }

    get webhookSource(): String {
        return this._webhookSource;
    }

    set webhookSource(value: String) {
        this._webhookSource = value;
    }

    get webhookPayload(): any {
        return this._webhookPayload;
    }

    set webhookPayload(value: any) {
        this._webhookPayload = value;
    }

    get outputContexts(): Array<Context> {
        return this._outputContexts;
    }

    set outputContexts(value: Array<Context>) {
        this._outputContexts = value;
    }

    get intent(): Intent {
        return this._intent;
    }

    set intent(value: Intent) {
        this._intent = value;
    }
}