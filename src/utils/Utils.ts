import AbstractElement from "../model/tmdb/AbstractElement";

export default class Utils {
    public static getIdCommaSeparatedList(inputList: Array<AbstractElement>): String {
        return inputList
            .map(element => String(element.id))
            .reduce((previousValue, currentValue) => `${previousValue},${currentValue}`);
    }
}