"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var Resubscribe = /** @class */ (function () {
    function Resubscribe() {
    }
    Resubscribe.init = function (apiKey) {
        Resubscribe.apiKey = apiKey;
    };
    Resubscribe.registerEvent = function (eventType, user) {
        // Implementation to register the event
        console.log("Event Registered: ".concat(eventType), user);
    };
    return Resubscribe;
}());
exports.default = Resubscribe;
