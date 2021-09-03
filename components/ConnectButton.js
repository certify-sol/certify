import styled from 'styled-components';

import Wallet from '@project-serum/sol-wallet-adapter';
import {
  Connection,
  SystemProgram,
  Transaction,
  clusterApiUrl,
} from '@solana/web3.js';
// import {useWallet} from '@saberhq/use-solana'

const Container = styled.div``;

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

export function ConnectButton() {
  // useWallet()
  const handleClick = async () => {
    let connection = new Connection(clusterApiUrl('devnet'));
    let providerUrl = 'https://www.sollet.io';
    let wallet = new Wallet(providerUrl);
    wallet.on('connect', (publicKey) =>
      console.log('Connected to ' + publicKey.toBase58())
    );
    wallet.on('disconnect', () => console.log('Disconnected'));
    await wallet.connect();
  };

  return <Button onClick={() => handleClick()}>Connect me</Button>;
}
