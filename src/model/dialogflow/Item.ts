import SelectItemInfo from "./SelectItemInfo";
import Image from "./Image";

/**
 * An item in the carousel.
 */
export default class Item {
  private info: SelectItemInfo;
  private title: String;
  private description: String;
  private image: Image;

  /**
   * Required. Additional info about the option item.
   * @return {SelectItemInfo}
   */
  public getInfo(): SelectItemInfo {
    return this.info;
  }

  /**
   * Required. Title of the carousel item.
   * @return {String}
   */
  public getTitle(): String {
    return this.title;
  }

  /**
   * Optional. The body text of the card.
   * @return {String}
   */
  public getDescription(): String {
    return this.description;
  }

  /**
   * Optional. The image to display.
   * @return {Image}
   */
  public getImage(): Image {
    return this.image;
  }

  /**
   * Required. Additional info about the option item.
   * @param {SelectItemInfo} value
   */
  public setInfo(value: SelectItemInfo): Item {
    this.info = value;
    return this;
  }

  /**
   * Required. Title of the carousel item.
   * @param {String} value
   */
  public setTitle(value: String): Item {
    this.title = value;
    return this;
  }

  /**
   * Optional. The body text of the card.
   * @param {String} value
   */
  public setDescription(value: String): Item {
    this.description = value;
    return this;
  }

  /**
   * Optional. The image to display.
   * @param {Image} value
   */
  public setImage(value: Image): Item {
    this.image = value;
    return this;
  }
}
