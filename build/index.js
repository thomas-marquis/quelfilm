"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestService_1 = require("./service/TestService");
exports.main = function (request, response) {
    var testService = new TestService_1.default("Thomas");
    response.send("Bonjour " + testService.sayMyName() + " !");
};
