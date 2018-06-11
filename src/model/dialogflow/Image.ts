/**
 * The image response message.
 */
export default class Image {
  private imageUri: String;
  private accessibilityText: String;

  /**
   * Optional. The public URI to an image file.
   * @return {String}
   */
  public getImageUri(): String {
    return this.imageUri;
  }

  /**
   * Optional. A text description of the image to be used for accessibility, e.g., screen readers.
   * @return {String}
   */
  public getAccessibilityText(): String {
    return this.accessibilityText;
  }

  /**
   * Optional. The public URI to an image file.
   * @param {String} value
   * @returns this
   */
  public setImageUri(value: String): Image {
    this.imageUri = value;
    return this;
  }

  /**
   * Optional. A text description of the image to be used for accessibility, e.g., screen readers.
   * @param {String} value
   * @returns this
   */
  public setAccessibilityText(value: String): Image {
    this.accessibilityText = value;
    return this;
  }
}
