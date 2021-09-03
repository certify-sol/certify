import { createGlobalState } from 'react-hooks-global-state';

import Header from './Header';
import Footer from './Footer';

const initialState = {
  walletConnected: false,
  publicKey: null,
  wallet: null,
};

export const { useGlobalState } = createGlobalState(initialState);

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
