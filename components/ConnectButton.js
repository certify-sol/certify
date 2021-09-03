import { useState } from 'react';
import styled from 'styled-components';
import { truncate } from 'lodash';

import Wallet from '@project-serum/sol-wallet-adapter';
import {
  Connection,
  SystemProgram,
  Transaction,
  clusterApiUrl,
} from '@solana/web3.js';

import { useGlobalState } from '../components/layout';

export const Button = styled.div`
  /* background-color: blue; */
  padding: 10px 30px;
  border-radius: 30px;
  position: relative;

  border: 2px solid #725bdc;

  cursor: pointer;

  transition: all 0.3s ease-in;
  &:hover {
    transform: translateY(-1px);
  }
`;

const ConnectedButton = styled(Button)``;

export function ConnectButton() {
  // useWallet()
  // const [walletConnected, setWalletConnected] = useState(false);
  const [walletConnected, setWalletConnected] =
    useGlobalState('walletConnected');
  // const [publicKey, setPublicKey] = useState('');
  const [publicKey, setPublicKey] = useGlobalState('publicKey');

  const handleClick = async () => {
    let conn = new Connection(clusterApiUrl('devnet'));
    let providerUrl = 'https://www.sollet.io';
    let wallet = new Wallet(providerUrl);

    wallet.on('connect', (publicKey) => {
      console.log('Connected to ' + publicKey.toBase58());
      setWalletConnected(true);
      setPublicKey(publicKey.toBase58());
    });

    wallet.on('disconnect', () => {
      console.log('Disconnected');
      setWalletConnected(false);
    });

    await wallet.connect();
  };

  return walletConnected ? (
    <Button onClick={() => console.log('disconnect here or something')}>
      {truncate(publicKey, { length: 10 })}
    </Button>
  ) : (
    <Button onClick={() => handleClick()}>Connect</Button>
  );
}
