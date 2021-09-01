import styled from 'styled-components';

const FooterImg = styled.img`
  max-width: 100vw;

  position: absolute;
  bottom: 0;

  user-select: none;
`;

export default function Footer() {
  return <FooterImg src="/images/blobs.png" />;
}
