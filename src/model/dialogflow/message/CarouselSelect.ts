import Item from "./Item";

export default class CarouselSelect {
    private _items: Array<Item>;

    get items(): Array<Item> {
        return this._items;
    }

    set items(value: Array<Item>) {
        this._items = value;
    }
}