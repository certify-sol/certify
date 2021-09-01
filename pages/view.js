import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  margin: 50px auto;
  width: 100vw;
  height: 60vh;
  /* background: green; */
  display: flex;
  justify-content: center;
  align-items: center;

  /* margin-left: 25%; */
`;

const CertiImg = styled.img`
  max-height: 100%;
  /* margin-left: 50px; */
`;

export default function ViewPage({ query }) {
  // const router = useRouter();
  // console.log(router.query);

  const [imageData, setImageData] = useState('');

  // const testSig =
  //   '4YMU6LyRfNPHt13YqjYqhAT8U7KJ1dX63xNx6xNqpqYRv5DjNvHBNbdTNWLm56EyZ7KoTVP3mFwLowKuFoeHKBYh';

  useEffect(() => {
    // console.log(testSig, query);

    fetch(
      '/api/fetch-certi?' +
        new URLSearchParams({
          // sig: router.query.sig,
          sig: query.sig,
        })
    )
      .then((resp) => resp.json())
      .then((res) => {
        if (res.status === 'success') {
          setImageData(res.certiB64img);
        }
      });
  }, [imageData]);

  return (
    <>
      <Header />
      <Container>
        <CertiImg src={'data:image/png;base64,' + imageData} />
      </Container>
      {/* <div>{query.sig}</div> */}
      <Footer />
    </>
  );
}

ViewPage.getInitialProps = ({ query }) => {
  return { query };
};
