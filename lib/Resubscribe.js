"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var apiKey;
var init = function (key) {
    apiKey = key;
};
var registerEvent = function (event, eventType) {
    if (!apiKey) {
        console.error("API key is not initialized.");
        return;
    }
    // TODO: implement
    console.log("Event Registered: ".concat(eventType), event, "with API key: ".concat(apiKey));
};
exports.default = {
    init: init,
    registerEvent: registerEvent
};
