import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  height: 100px;
  width: 380px;

  /* background: green; */

  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 0 auto;
`;

const Side = styled.div`
  /* background: blue; */

  border: 1px solid #b3b3b3;
  border-radius: 10px 0 0 10px;

  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 500;

  cursor: pointer;

  /* color: #616161; */
  color: #ffffff;
  /* &:hover {
    background-color: #e4e7ed;
  } */
`;

const H = styled.div`
  font-size: 50px;
  font-weight: 700;

  text-align: center;
  margin: 60px 0;

  /* color: #6703a2; */

  background: -webkit-linear-gradient(95.58deg, #725bdc 0%, #dc5ba8 131.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function CreateSelector() {
  return (
    <>
      <H>Create certificate</H>
      <Container>
        <Link href="/create/marriage">
          <Side>
            Marriage <br />
            Certificate
          </Side>
        </Link>
        <Link href="/create/custom">
          <Side style={{ borderRadius: '0 10px 10px 0' }}>
            Custom <br />
            Certificate
          </Side>
        </Link>
      </Container>
    </>
  );
}
