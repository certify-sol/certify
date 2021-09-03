"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletListItem = void 0;
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const WalletIcon_1 = require("./WalletIcon");
const WalletListItem = (_a) => {
    var { onClick, wallet } = _a, props = __rest(_a, ["onClick", "wallet"]);
    return (react_1.default.createElement(core_1.ListItem, Object.assign({}, props),
        react_1.default.createElement(core_1.Button, { onClick: onClick, endIcon: react_1.default.createElement(WalletIcon_1.WalletIcon, { wallet: wallet }) }, wallet.name)));
};
exports.WalletListItem = WalletListItem;
//# sourceMappingURL=WalletListItem.js.map