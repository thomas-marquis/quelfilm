import Item from "./Item";

/**
 * The card for presenting a carousel of options to select from.
 */
export default class CarouselSelect {
  private items: Array<Item>;

  constructor() {
    this.items = new Array();
  }

  /**
   * Required. Carousel items.
   *
   * @return {Array<Item>}
   */
  public getItems(): Array<Item> {
    return this.items;
  }
}
