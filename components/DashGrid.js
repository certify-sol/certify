import { useState, useEffect } from 'react';
import { useGlobalState } from './layout';
import styled from 'styled-components';
import Link from 'next/link';

const dummyCertiImgs = [
  {
    sig: 'bwXRKNPQRjp2ENWYFBHtcSAFMrhk82GRp3EtstfnPG3HntumA1tPTKNqsru6rPQ5Ax83jYjyAP4weddQzQsckKq',
    base64img: '',
  },
];

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CertiImgContainer = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid green; */

  cursor: pointer;

  transition: all 0.3s ease-in;
  &:hover {
    transform: translateY(-1px);
  }
`;

const CertiImg = styled.img`
  max-height: 240px;
`;

export default function DashGrid() {
  const [publicKey, setPublicKey] = useGlobalState('publicKey');
  const [certis, setCertis] = useState([]);

  useEffect(() => {
    // console.log('hi');
    fetch('/api/dash', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ registrant: publicKey }),
    })
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        if (res.items.length !== 0) {
          setCertis(res.items);
        }
      });
  }, []);

  return (
    <Container>
      {certis.map(({ certiB64img, key, sig }) => (
        <Link href={'/view?sig=' + sig}>
          <CertiImgContainer>
            <CertiImg key={key} src={'data:image/png;base64,' + certiB64img} />
          </CertiImgContainer>
        </Link>
      ))}
    </Container>
  );
}
