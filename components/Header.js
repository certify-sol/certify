import styled from 'styled-components';

// import certifyLogo from '../assets/images/Certify-logo.png';
import { ConnectButton as RealConnectButton } from './ConnectButton';

import { useGlobalState } from './layout';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Create',
    href: '/create',
  },
  {
    title: 'Verify',
    href: '/verify',
  },
];

const walletConnectedNavItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Create',
    href: '/create',
  },
  {
    title: 'Verify',
    href: '/verify',
  },
];

const Container = styled.div`
  width: 100vw;
  height: 7vh;
  /* background-color: green; */
  padding: 18px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1px solid rgba(229, 229, 229, 0.1);

  user-select: none;
`;

const Logo = styled.img`
  max-height: 130%;
`;

const Navbar = styled.div`
  width: 400px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
  font-weight: 500;
`;

const NavItem = styled.div`
  /* margin-left: 25px; */
  transition: all 0.3s ease-in;
  &:hover {
    transform: translateY(-1px);
  }
`;

export const ConnectButton = styled.div`
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

export default function Header() {
  const [walletConnected, setWalletConnected] =
    useGlobalState('walletConnected');

  return (
    <Container>
      {/* <div>hi</div> */}
      <Logo src={'/images/certify-logo.png'} />
      <Navbar>
        {(walletConnected ? walletConnectedNavItems : navItems).map((item) => (
          <a href={item.href} key={item.title}>
            <NavItem key={item.title}>{item.title}</NavItem>
          </a>
        ))}
        {/* <a href="/create"> */}
        <RealConnectButton />
        {/* </a> */}
      </Navbar>
    </Container>
  );
}
