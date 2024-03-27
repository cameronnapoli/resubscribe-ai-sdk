"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
;
var apiKey;
var init = function (_a) {
    var key = _a.apiKey;
    if (!key) {
        console.error('Resubscribe: API key is empty.');
    }
    apiKey = key;
};
var apiBase = 'https://api.resubscribe.ai/v1';
/**
 * Get a user interview link from Resubscribe.
 */
var getLink = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var url, body, headers, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!apiKey) {
                    console.error('Resubscribe: API key is not initialized.');
                    return [2 /*return*/, null];
                }
                if (!user || !user.userId) {
                    console.error('Resubscribe: User ID is required.');
                    return [2 /*return*/, null];
                }
                url = "".concat(apiBase, "/link/user");
                body = { user: user };
                headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': "Bearer ".concat(apiKey),
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.post(url, body, {
                        headers: headers,
                    })];
            case 2:
                response = _a.sent();
                if (response.status < 200 || response.status >= 300) {
                    throw new Error("Status: ".concat(response.status));
                }
                else {
                    return [2 /*return*/, response.data.link || null];
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Resubscribe: Failed to get link. Error: ".concat(error_1));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, null];
        }
    });
}); };
/**
 * Register an event with Resubscribe.
 */
var registerEvent = function (event, user) { return __awaiter(void 0, void 0, void 0, function () {
    var email_re, url, body, headers, response, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!apiKey) {
                    console.error('Resubscribe: API key is not initialized.');
                    return [2 /*return*/];
                }
                if (!user || !user.email) {
                    console.error('Resubscribe: User email is required.');
                    return [2 /*return*/];
                }
                email_re = /^[^@\ ]+@[^@\ ]+\.[^@\ ]+$/;
                if (!email_re.test(user.email)) {
                    console.error("Resubscribe: Invalid user email \"".concat(user.email, "\""));
                    return [2 /*return*/];
                }
                url = "".concat(apiBase, "/events/register");
                body = {
                    event: event,
                    user: user,
                };
                headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': "Bearer ".concat(apiKey),
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.post(url, body, {
                        headers: headers,
                    })];
            case 2:
                response = _a.sent();
                if (response.status < 200 || response.status >= 300) {
                    throw new Error("Status: ".concat(response.status));
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error("Resubscribe: Failed to register event. Error: ".concat(error_2));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    init: init,
    registerEvent: registerEvent,
    getLink: getLink,
};
