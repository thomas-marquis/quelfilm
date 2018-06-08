export default class TestService {
  private name: String;

  constructor(name) {
    this.name = name;
  }

  public sayMyName() {
    console.log(this.name);
  }
}
