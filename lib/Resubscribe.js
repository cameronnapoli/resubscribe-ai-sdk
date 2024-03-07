"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var apiKey;
var init = function (_a) {
    var key = _a.apiKey;
    apiKey = key;
};
var registerEvent = function (eventType, user) {
    if (!apiKey) {
        console.error("API key is not initialized.");
        return;
    }
    // TODO: implement
    console.log("Event Registered: \"".concat(eventType, "\" | User: \"").concat(user.id, " | API key: \"").concat(apiKey.slice(0, 4), "...\""));
};
exports.default = {
    init: init,
    registerEvent: registerEvent
};
