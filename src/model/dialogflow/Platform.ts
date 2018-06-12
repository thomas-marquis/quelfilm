/**
 * Represents different platforms that a rich message can be intended for.
 */
export enum Platform {
  /**
   * Not specified.
   */
  PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED",
  /**
   * Facebook.
   */
  FACEBOOK = "FACEBOOK",
  /**
   * Slack.
   */
  SLACK = "SLACK",
  /**
   * Telegram.
   */
  TELEGRAM = "TELEGRAM",
  /**
   * Kik.
   */
  KIK = "KIK",
  /**
   * Skype.
   */
  SKYPE = "SKYPE",
  /**
   * Line.
   */
  LINE = "LINE",
  /**
   * Viber.
   */
  VIBER = "VIBER",
  /**
   * Actions on Google. When using Actions on Google, you can choose one
   * of the specific Intent.Message types that mention support for Actions
   * on Google, or you can use the advanced Intent.Message.payload field.
   * The payload field provides access to AoG features not available in the
   * specific message types. If using the Intent.Message.payload field, it
   * should have a structure similar to the JSON message shown here.
   */
  ACTIONS_ON_GOOGLE = "ACTIONS_ON_GOOGLE"
}
