import QueryResult from "./QueryResult";

export default class WebhookRequest {
    private _session: String;
    private _responseId: String;
    private _queryResult: QueryResult;
    private _originalDetectIntentRequest: any;


    get session(): String {
        return this._session;
    }

    set session(value: String) {
        this._session = value;
    }

    get responseId(): String {
        return this._responseId;
    }

    set responseId(value: String) {
        this._responseId = value;
    }

    get queryResult(): QueryResult {
        return this._queryResult;
    }

    set queryResult(value: QueryResult) {
        this._queryResult = value;
    }

    get originalDetectIntentRequest(): any {
        return this._originalDetectIntentRequest;
    }

    set originalDetectIntentRequest(value: any) {
        this._originalDetectIntentRequest = value;
    }
}