import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { useCopyToClipboard } from '../components/lib';

const Container = styled.div`
  margin: 50px auto;
  width: 100vw;
  height: 60vh;
  /* background: green; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* margin-left: 25%; */
`;

const CertiImg = styled.img`
  max-height: 100%;
  border-radius: 15px;
  border: 5px solid #e7e7e7;
  /* margin-left: 50px; */
`;

const DownloadButton = styled.div`
  padding: 18px 20px;
  margin-top: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 10px;

  cursor: pointer;

  transition: all 0.3s ease-in;
  &:hover {
    transform: translateY(-1px);
  }
`;

const CopyButton = styled(DownloadButton)`
  margin-left: 20px;
`;

export default function ViewPage({ query }) {
  // const router = useRouter();
  // console.log(router.query);

  const [imageData, setImageData] = useState('');
  const [copied, copy] = useCopyToClipboard(
    'https://certify.someshkar.com/view?sig=' + query.sig
  );

  // const testSig =
  //   '4YMU6LyRfNPHt13YqjYqhAT8U7KJ1dX63xNx6xNqpqYRv5DjNvHBNbdTNWLm56EyZ7KoTVP3mFwLowKuFoeHKBYh';

  useEffect(() => {
    // console.log(testSig, query);

    fetch(
      '/api/fetch-certi?' +
        new URLSearchParams({
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
        <div style={{ display: 'flex' }}>
          <DownloadButton>Download Certificate</DownloadButton>
          <CopyButton onClick={copy}>Copy Permalink</CopyButton>
        </div>
      </Container>
      {/* <div>{query.sig}</div> */}
      <Footer />
    </>
  );
}

ViewPage.getInitialProps = ({ query }) => {
  return { query };
};
