export default class Crew {
  private id: Number;
  private name: String;
  private department: String;
  private gender: Number;
  private job: String;

  /**
   * Getter $id
   * @return {Number}
   */
  public getId(): Number {
    return this.id;
  }

  /**
   * Getter $name
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * Getter $department
   * @return {String}
   */
  public getDepartment(): String {
    return this.department;
  }

  /**
   * Getter $gender
   * @return {Number}
   */
  public getGender(): Number {
    return this.gender;
  }

  /**
   * Getter $job
   * @return {String}
   */
  public getJob(): String {
    return this.job;
  }

  /**
   * Setter $id
   * @param {Number} value
   */
  public setId(value: Number): Crew {
    this.id = value;
    return this;
  }

  /**
   * Setter $name
   * @param {String} value
   */
  public setName(value: String): Crew {
    this.name = value;
    return this;
  }

  /**
   * Setter $department
   * @param {String} value
   */
  public setDepartment(value: String): Crew {
    this.department = value;
    return this;
  }

  /**
   * Setter $gender
   * @param {Number} value
   */
  public setGender(value: Number): Crew {
    this.gender = value;
    return this;
  }

  /**
   * Setter $job
   * @param {String} value
   */
  public setJob(value: String): Crew {
    this.job = value;
    return this;
  }
}
