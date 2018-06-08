"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestService = /** @class */ (function () {
    function TestService(name) {
        this.name = name;
    }
    TestService.prototype.sayMyName = function () {
        console.log(this.name);
    };
    return TestService;
}());
exports.default = TestService;
