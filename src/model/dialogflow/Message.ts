import { Platform } from "./Platform";
import Text from "./Text";
import QuickReplies from "./QuickReplies";
import Card from "./Card";
import CarouselSelect from "./CarouselSelect";

/**
 * Corresponds to the Response field in the Dialogflow console.
 */
export default class Message {
  private platform: Platform;
  private text: Text;
  private quickReplies: QuickReplies;
  private card: Card;
  private carouselSelect: CarouselSelect;

  /**
   * Optional. The platform that this message is intended for.
   *
   * @return {Platform}
   */
  public getPlatform(): Platform {
    return this.platform;
  }

  /**
   * The text response.
   *
   * @return {Text}
   */
  public getText(): Text {
    return this.text;
  }

  /**
   * The quick replies response.
   *
   * @return {QuickReplies}
   */
  public getQuickReplies(): QuickReplies {
    return this.quickReplies;
  }

  /**
   * The card response.
   *
   * @return {Card}
   */
  public getCard(): Card {
    return this.card;
  }

  /**
   * The carousel card response for Actions on Google.
   *
   * @return {CarouselSelect}
   */
  public getCarouselSelect(): CarouselSelect {
    return this.carouselSelect;
  }

  /**
   * Optional. The platform that this message is intended for.
   *
   * @param {Platform} value
   */
  public setPlatform(value: Platform): Message {
    this.platform = value;
    return this;
  }

  /**
   * The text response.
   *
   * @param {Text} value
   */
  public setText(value: Text) {
    this.text = value;
  }

  /**
   * The quick replies response.
   *
   * @param {QuickReplies} value
   */
  public setQuickReplies(value: QuickReplies) {
    this.quickReplies = value;
  }

  /**
   * The card response.
   *
   * @param {Card} value
   */
  public setCard(value: Card) {
    this.card = value;
  }

  /**
   * The carousel card response for Actions on Google.
   *
   * @param {CarouselSelect} value
   */
  public setCarouselSelect(value: CarouselSelect) {
    this.carouselSelect = value;
  }
}
