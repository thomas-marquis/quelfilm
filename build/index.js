"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestService_1 = require("./service/TestService");
exports.main = function (request, response) {
    const testService = new TestService_1.default("Thomas");
    response.send(`Bonjour ${testService.sayMyName()} !`);
};
