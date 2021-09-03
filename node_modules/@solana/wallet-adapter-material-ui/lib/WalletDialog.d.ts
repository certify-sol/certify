import { DialogProps } from '@material-ui/core';
import { FC, ReactElement } from 'react';
export interface WalletDialogProps extends Omit<DialogProps, 'title' | 'open'> {
    featuredWallets?: number;
    title?: ReactElement;
}
export declare const WalletDialog: FC<WalletDialogProps>;
