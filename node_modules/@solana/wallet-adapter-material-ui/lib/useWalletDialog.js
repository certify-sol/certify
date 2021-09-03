"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWalletDialog = exports.WalletDialogContext = void 0;
const react_1 = require("react");
exports.WalletDialogContext = (0, react_1.createContext)({});
function useWalletDialog() {
    return (0, react_1.useContext)(exports.WalletDialogContext);
}
exports.useWalletDialog = useWalletDialog;
//# sourceMappingURL=useWalletDialog.js.map