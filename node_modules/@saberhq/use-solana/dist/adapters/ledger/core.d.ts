/// <reference types="node" />
import type Transport from "@ledgerhq/hw-transport";
import type { Transaction } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";
export declare function getSolanaDerivationPath(account?: number, change?: number): Buffer;
export declare function signTransaction(transport: Transport, transaction: Transaction, derivationPath?: Buffer): Promise<Buffer>;
export declare function signBytes(transport: Transport, bytes: Buffer, derivationPath?: Buffer): Promise<Buffer>;
export declare function getPublicKey(transport: Transport, derivationPath?: Buffer): Promise<PublicKey>;
//# sourceMappingURL=core.d.ts.map