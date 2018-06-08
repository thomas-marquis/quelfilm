"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestService_1 = require("./service/TestService");
exports.test = function () {
    var testService = new TestService_1.default("Thomas");
    console.log(testService.sayMyName());
};
