import Context from "./Context";
import Event from "./Event";

export default class WebhookResponse {
    private fulfillmentText: String;
    private fulfillmentMessages;
    private source: String;
    private payload: any;
    private outputContexts: Array<Context>;
    private followupEventInput: Event;
}