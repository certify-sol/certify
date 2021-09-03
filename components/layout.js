// import React, { FC, useMemo } from 'react';
// import {
//   ConnectionProvider,
//   WalletProvider,
// } from '@solana/wallet-adapter-react';
// import {
//   getLedgerWallet,
//   getMathWallet,
//   getPhantomWallet,
//   getSolflareWallet,
//   getSolletWallet,
//   getSolongWallet,
//   getTorusWallet,
// } from '@solana/wallet-adapter-wallets';
// import {
//   WalletModalProvider,
//   WalletDisconnectButton,
//   WalletMultiButton,
// } from '@solana/wallet-adapter-ant-design';
// import { clusterApiUrl } from '@solana/web3.js';

import Header from './Header';
import Footer from './Footer';

// export const Wallet = () => {
//   // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
//   // Only the wallets you want to instantiate here will be compiled into your application
//   const wallets = useMemo(
//     () => [
//       getPhantomWallet(),
//       // getSolflareWallet(),
//       // getTorusWallet({
//       //   options: { clientId: 'Get a client ID @ https://developer.tor.us' },
//       // }),
//       // getLedgerWallet(),
//       // getSolongWallet(),
//       // getMathWallet(),
//       getSolletWallet(),
//       // getCoin98Wallet(),
//       // getBitpieWallet(),
//     ],
//     []
//   );

//   // Set to 'devnet' | 'testnet' | 'mainnet-beta' or provide a custom RPC endpoint
//   const endpoint = useMemo(() => clusterApiUrl('devnet'), []);

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>
//           <WalletMultiButton />
//           <WalletDisconnectButton />
//         </WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// };

// export default function Layout({ children }) {
//   const wallets = useMemo(() => [getPhantomWallet(), getSolletWallet()], []);

//   const endpoint = useMemo(() => clusterApiUrl('devnet'), []);

//   return (
//     <>
//       <ConnectionProvider endpoint={endpoint}>
//         <WalletProvider wallets={wallets} autoConnect>
//           <WalletModalProvider>
//             <Header />
//             {children}
//             <Footer />
//           </WalletModalProvider>
//         </WalletProvider>
//       </ConnectionProvider>
//     </>
//   );
// }

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
