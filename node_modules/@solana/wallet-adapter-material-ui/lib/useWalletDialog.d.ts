/// <reference types="react" />
export interface WalletDialogContextState {
    open: boolean;
    setOpen: (open: boolean) => void;
}
export declare const WalletDialogContext: import("react").Context<WalletDialogContextState>;
export declare function useWalletDialog(): WalletDialogContextState;
