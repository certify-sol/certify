import styled from 'styled-components';

import Layout from '../components/layout';

const MainContainer = styled.div`
  height: 60vh;
  width: 80vw;
  /* background-color: green; */
  margin: 50px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  /* background-color: blue; */
`;

const Right = styled.div`
  /* background-color: green; */
`;

export const BigT = styled.div`
  font-size: 80px;
  font-weight: 700;
`;

export const CertiT = styled.div`
  display: inline-block;
  background: -webkit-linear-gradient(95.58deg, #725bdc 0%, #dc5ba8 131.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubT = styled.div`
  font-size: 22px;
  margin-top: 10px;
`;

const LandingImg = styled.img`
  max-width: 600px;
`;

export default function Home() {
  return (
    <Layout>
      <MainContainer>
        <Left>
          <BigT>
            The future of <br />
            <CertiT>Certificates.</CertiT>
          </BigT>
          <SubT>
            Scalable blockchain certification platform, built with Solana.
          </SubT>
        </Left>
        <Right>
          <LandingImg src="/images/landing-img.png" />
        </Right>
      </MainContainer>
    </Layout>
  );
}
