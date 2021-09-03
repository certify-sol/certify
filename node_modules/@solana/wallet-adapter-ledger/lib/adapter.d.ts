/// <reference types="node" />
import { BaseSignerWalletAdapter } from '@solana/wallet-adapter-base';
import { PublicKey, Transaction } from '@solana/web3.js';
export interface LedgerWalletAdapterConfig {
    derivationPath?: Buffer;
}
export declare class LedgerWalletAdapter extends BaseSignerWalletAdapter {
    private _derivationPath;
    private _connecting;
    private _transport;
    private _publicKey;
    constructor(config?: LedgerWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get ready(): boolean;
    get connecting(): boolean;
    get connected(): boolean;
    get autoApprove(): boolean;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction(transaction: Transaction): Promise<Transaction>;
    signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
    private _disconnected;
}
