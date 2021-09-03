"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWallet = exports.WalletContext = void 0;
const react_1 = require("react");
exports.WalletContext = (0, react_1.createContext)({});
function useWallet() {
    return (0, react_1.useContext)(exports.WalletContext);
}
exports.useWallet = useWallet;
//# sourceMappingURL=useWallet.js.map