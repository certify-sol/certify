"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletAdapterNetwork = exports.BaseWalletAdapter = exports.EventEmitter = void 0;
const eventemitter3_1 = __importDefault(require("eventemitter3"));
exports.EventEmitter = eventemitter3_1.default;
class BaseWalletAdapter extends eventemitter3_1.default {
}
exports.BaseWalletAdapter = BaseWalletAdapter;
var WalletAdapterNetwork;
(function (WalletAdapterNetwork) {
    WalletAdapterNetwork["Mainnet"] = "mainnet-beta";
    WalletAdapterNetwork["Testnet"] = "testnet";
    WalletAdapterNetwork["Devnet"] = "devnet";
})(WalletAdapterNetwork = exports.WalletAdapterNetwork || (exports.WalletAdapterNetwork = {}));
//# sourceMappingURL=adapter.js.map