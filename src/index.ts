import TestService from "./service/TestService";

export const main = function(request: Request, response: Response): void {
  const testService: TestService = new TestService("Thomas");
  response.send(`Bonjour ${testService.sayMyName()} !`);
};
