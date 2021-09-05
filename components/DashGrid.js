import { useState, useEffect } from 'react';
import { useGlobalState } from './layout';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  width: 67vw;
  margin: 20px auto;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CertiImgContainer = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid green; */

  cursor: pointer;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  transition: all 0.3s ease-in;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const CertiImg = styled.img`
  max-height: 240px;
  border-radius: 10px;
  /* border: 2px solid #e7e7e7; */

  /* transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  } */
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
