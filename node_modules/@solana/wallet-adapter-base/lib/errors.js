"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletWindowClosedError = exports.WalletWindowBlockedError = exports.WalletSignTransactionError = exports.WalletSignMessageError = exports.WalletSendTransactionError = exports.WalletNotConnectedError = exports.WalletKeypairError = exports.WalletPublicKeyError = exports.WalletAccountError = exports.WalletDisconnectionError = exports.WalletDisconnectedError = exports.WalletConnectionError = exports.WalletNotReadyError = exports.WalletNotInstalledError = exports.WalletNotFoundError = exports.WalletError = void 0;
class WalletError extends Error {
    constructor(message, error) {
        super(message);
        this.error = error;
    }
}
exports.WalletError = WalletError;
class WalletNotFoundError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotFoundError';
    }
}
exports.WalletNotFoundError = WalletNotFoundError;
class WalletNotInstalledError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotInstalledError';
    }
}
exports.WalletNotInstalledError = WalletNotInstalledError;
class WalletNotReadyError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotReadyError';
    }
}
exports.WalletNotReadyError = WalletNotReadyError;
class WalletConnectionError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletConnectionError';
    }
}
exports.WalletConnectionError = WalletConnectionError;
class WalletDisconnectedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletDisconnectedError';
    }
}
exports.WalletDisconnectedError = WalletDisconnectedError;
class WalletDisconnectionError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletDisconnectionError';
    }
}
exports.WalletDisconnectionError = WalletDisconnectionError;
class WalletAccountError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletAccountError';
    }
}
exports.WalletAccountError = WalletAccountError;
class WalletPublicKeyError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletPublicKeyError';
    }
}
exports.WalletPublicKeyError = WalletPublicKeyError;
class WalletKeypairError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletKeypairError';
    }
}
exports.WalletKeypairError = WalletKeypairError;
class WalletNotConnectedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotConnectedError';
    }
}
exports.WalletNotConnectedError = WalletNotConnectedError;
class WalletSendTransactionError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletSendTransactionError';
    }
}
exports.WalletSendTransactionError = WalletSendTransactionError;
class WalletSignMessageError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletSignMessageError';
    }
}
exports.WalletSignMessageError = WalletSignMessageError;
class WalletSignTransactionError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletSignTransactionError';
    }
}
exports.WalletSignTransactionError = WalletSignTransactionError;
class WalletWindowBlockedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletWindowBlockedError';
    }
}
exports.WalletWindowBlockedError = WalletWindowBlockedError;
class WalletWindowClosedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletWindowClosedError';
    }
}
exports.WalletWindowClosedError = WalletWindowClosedError;
//# sourceMappingURL=errors.js.map