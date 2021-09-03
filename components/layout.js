import { createGlobalState } from 'react-hooks-global-state';
import { ToastProvider } from 'react-toast-notifications';

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
      <ToastProvider placement="bottom-right">
        <Header />
        {children}
        <Footer />
      </ToastProvider>
    </>
  );
}
