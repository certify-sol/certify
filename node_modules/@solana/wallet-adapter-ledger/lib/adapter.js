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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerWalletAdapter = void 0;
const hw_transport_webhid_1 = __importDefault(require("@ledgerhq/hw-transport-webhid"));
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const util_1 = require("./util");
class LedgerWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this._disconnected = () => {
            const transport = this._transport;
            if (transport) {
                transport.off('disconnect', this._disconnected);
                this._transport = null;
                this._publicKey = null;
                this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
                this.emit('disconnect');
            }
        };
        this._derivationPath = config.derivationPath || (0, util_1.getDerivationPath)(0, 0);
        this._connecting = false;
        this._transport = null;
        this._publicKey = null;
    }
    get publicKey() {
        return this._publicKey;
    }
    get ready() {
        return typeof window !== 'undefined' && !!navigator.hid;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        return !!this._transport;
    }
    get autoApprove() {
        return false;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                this._connecting = true;
                let transport;
                try {
                    transport = yield hw_transport_webhid_1.default.create();
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                let publicKey;
                try {
                    publicKey = yield (0, util_1.getPublicKey)(transport, this._derivationPath);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                transport.on('disconnect', this._disconnected);
                this._transport = transport;
                this._publicKey = publicKey;
                this.emit('connect');
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
            finally {
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const transport = this._transport;
            if (transport) {
                transport.off('disconnect', this._disconnected);
                this._transport = null;
                this._publicKey = null;
                try {
                    yield transport.close();
                }
                catch (error) {
                    this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
                }
                this.emit('disconnect');
            }
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transport = this._transport;
                const publicKey = this._publicKey;
                if (!transport || !publicKey)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    const signature = yield (0, util_1.signTransaction)(transport, transaction, this._derivationPath);
                    transaction.addSignature(publicKey, signature);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                return transaction;
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transport = this._transport;
                const publicKey = this._publicKey;
                if (!transport || !publicKey)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    const derivationPath = this._derivationPath;
                    for (const transaction of transactions) {
                        const signature = yield (0, util_1.signTransaction)(transport, transaction, derivationPath);
                        transaction.addSignature(publicKey, signature);
                    }
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                return transactions;
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
exports.LedgerWalletAdapter = LedgerWalletAdapter;
//# sourceMappingURL=adapter.js.map